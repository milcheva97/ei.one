import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const palette = {
  green: '#58C913',
  blue: '#2EADD6',
  dark: '#10222E',
  navy: '#172D3C',
  ink: '#071d2b',
}

export function AuroraBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return undefined

    const currentMount = mountRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
    renderer.domElement.className = 'brand-aurora-canvas'
    currentMount.appendChild(renderer.domElement)

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new THREE.Vector2(currentMount.clientWidth, currentMount.clientHeight),
        },
      },
      vertexShader: 'void main() { gl_Position = vec4(position, 1.0); }',
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;
        #define NUM_OCTAVES 3

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u * u * (3.0 - 2.0 * u);
          float res = mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
            u.y
          );
          return res * res;
        }

        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.3;
          vec2 shift = vec2(100.0);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.4;
          }
          return v;
        }

        void main() {
          vec2 p = ((gl_FragCoord.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(5.5, -3.2, 3.2, 5.5);
          vec4 o = vec4(0.0);
          float f = 2.0 + fbm(p + vec2(iTime * 3.0, 0.0)) * 0.5;

          for (float i = 0.0; i++ < 32.0;) {
            vec2 v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.2;
            float tailNoise = fbm(v + vec2(iTime * 0.35, i)) * 0.25 * (1.0 - (i / 32.0));
            vec4 auroraColors = vec4(0.18 + 0.16 * sin(i * 0.2), 0.72 + 0.12 * cos(i * 0.3), 0.42 + 0.24 * sin(i * 0.4), 1.0);
            vec4 blueLift = vec4(0.08, 0.40, 0.58, 1.0);
            vec4 currentContribution = mix(auroraColors, blueLift, 0.34) * exp(sin(i * i + iTime * 0.55)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.45)));
            float thinnessFactor = smoothstep(0.0, 1.0, i / 32.0) * 0.55;
            o += currentContribution * (1.0 + tailNoise * 0.7) * thinnessFactor;
          }

          o = tanh(pow(o / 95.0, vec4(1.55)));
          gl_FragColor = vec4(o.rgb * 1.45, 1.0);
        }
      `,
    })

    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let animationFrameId
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      material.uniforms.iTime.value += 0.016
      renderer.render(scene, camera)
    }

    const handleResize = () => {
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
      material.uniforms.iResolution.value.set(currentMount.clientWidth, currentMount.clientHeight)
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      if (currentMount.contains(renderer.domElement)) currentMount.removeChild(renderer.domElement)
      renderer.dispose()
      material.dispose()
      geometry.dispose()
    }
  }, [])

  return <div className="brand-aurora" ref={mountRef} aria-hidden="true" />
}

function BrandAuroraShowcase({
  showAnimatedBackground = true,
  title = 'Ecosystem intelligence',
  gradientTitle = 'built for shared growth',
  subtitle = 'A branded 21st.dev-style component adapted to the EI.one palette: light green, clean blue, deep navy and white.',
}) {
  return (
    <section
      className="brand-showcase"
      style={{
        '--brand-green': palette.green,
        '--brand-blue': palette.blue,
        '--brand-dark': palette.dark,
        '--brand-navy': palette.navy,
        '--brand-ink': palette.ink,
      }}
    >
      {showAnimatedBackground && <AuroraBackground />}
      <div className="brand-showcase-content">
        <div className="brand-showcase-kicker">EI.one component palette</div>
        <h2>
          {title}
          <span>{gradientTitle}</span>
        </h2>
        <p>{subtitle}</p>
        <div className="brand-showcase-actions">
          <a href="/business-club">For Companies</a>
          <a href="/talent">For Talents</a>
        </div>
      </div>
    </section>
  )
}

export default BrandAuroraShowcase

