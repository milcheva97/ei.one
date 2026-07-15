import { useEffect } from 'react'
import Header from './Header.jsx'
import { useRef, useState } from 'react'
import Footer from './Footer.jsx'

function setMeta(name, content, attr = 'name') {
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function ExperiencePassportPage() {
  const orbitDrag = useRef({ active: false, x: 0, y: 0 })
  const [orbitTilt, setOrbitTilt] = useState({ x: 10, y: -8, active: false })

  useEffect(() => {
    const title = 'Experience Passport - EI.one Experience Identity'
    const description = 'The EI.one Experience Passport turns real work, learning, mentoring and projects into verified proof of what people can actually do.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one experience passport, experience identity, verified experience, talent profile, skills proof')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/experience-passport', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/experience-passport')
  }, [])

  const handleOrbitPointerDown = (event) => {
    orbitDrag.current = {
      active: true,
      x: event.clientX,
      y: event.clientY,
      startTiltX: orbitTilt.x,
      startTiltY: orbitTilt.y,
    }
    event.currentTarget.setPointerCapture?.(event.pointerId)
    setOrbitTilt((tilt) => ({ ...tilt, active: true }))
  }

  const handleOrbitPointerMove = (event) => {
    if (!orbitDrag.current.active) return

    const deltaX = event.clientX - orbitDrag.current.x
    const deltaY = event.clientY - orbitDrag.current.y
    const nextX = Math.max(-16, Math.min(16, orbitDrag.current.startTiltX - deltaY * 0.07))
    const nextY = Math.max(-18, Math.min(18, orbitDrag.current.startTiltY + deltaX * 0.07))

    setOrbitTilt({ x: nextX, y: nextY, active: true })
  }

  const handleOrbitPointerUp = (event) => {
    orbitDrag.current.active = false
    event.currentTarget.releasePointerCapture?.(event.pointerId)
    setOrbitTilt((tilt) => ({ ...tilt, active: false }))
  }

  return (
    <>
      <Header loginHref="/login" languagePage="experience-passport.php" />

      <main className="experience-page">
        <section className="experience-hero">
          <div className="wrap experience-hero-grid">
            <div className="experience-hero-copy">
              <h1>Experience Identity</h1>
              <p>Your digital record of what you've actually done. Verified by the companies who had you do it, anchored on the blockchain as a credential that belongs to you forever.</p>
              <p className="experience-quote">"Your experiences build your future."</p>
            </div>

            <div className="experience-proof-map" id="experience-login" aria-label="Experience Identity proof flow">
              <div
                className={`proof-orbit${orbitTilt.active ? ' is-dragging' : ''}`}
                style={{ '--orbit-drag-x': `${orbitTilt.x}deg`, '--orbit-drag-y': `${orbitTilt.y}deg` }}
                onPointerDown={handleOrbitPointerDown}
                onPointerMove={handleOrbitPointerMove}
                onPointerUp={handleOrbitPointerUp}
                onPointerCancel={handleOrbitPointerUp}
              >
                <div className="proof-phone" aria-hidden="true">
                  <span className="proof-phone-speaker"></span>
                  <span className="proof-core"><i className="fa-solid fa-fingerprint" aria-hidden="true"></i></span>
                  <strong>Experience Identity</strong>
                  <small>Verified proof</small>
                </div>
                <span className="proof-node work"><i className="fa-solid fa-briefcase" aria-hidden="true"></i><strong>Work</strong></span>
                <span className="proof-node learn"><i className="fa-solid fa-graduation-cap" aria-hidden="true"></i><strong>Learn</strong></span>
                <span className="proof-node mentor"><i className="fa-solid fa-handshake" aria-hidden="true"></i><strong>Mentor</strong></span>
              </div>
              
            </div>
          </div>
        </section>
        
         <section className="human-center">
          <div className="wrap human-center-grid">
            <div className="human-center-copy">
              <h2>The CV is broken. The Identity fixes it.</h2>
              <p>A CV says whatever you want it to. It also says very little of substance: job titles, years, keywords. In the age of the AI transition, that's not enough for anyone â€” not for job seekers, not for employers.</p>
              <p>The Experience Identity is different. Every experience you add is attested by whoever had you do it â€” a company in the ecosystem, an Academy partner, a real project. What people see is your actual work, not your self-promotion.</p>
            </div>
            <div className="human-center-visual" aria-label="People connected through knowledge, education and shared opportunity">
              <img src="/images/identity.jpg" alt="identity" />
              <div className="human-center-glow"></div>
            </div>
          </div>
        </section>

        <section className="education-pillars">
          <div className="wrap">
            <div className="education-section-head">
              <h2>How it works</h2>
              <p>Three steps to build a Identity that actually shows what you can do.</p>
            </div>
            <div className="education-pillar-grid">
          <article>
            <i className="fa-solid fa-fingerprint"></i>
            <h3>Create your Identity</h3>
            <p>A unique digital profile with a shareable link. It's yours, it follows you across your whole working life, no matter where you work.</p>
          </article>
          <article>
            <i className="fa-solid fa-layer-group"></i>
            <h3>Collect verified experience</h3>
            <p>Every experience at an ecosystem company is attested by whoever had you do it and recorded on the blockchain as an immutable credential. Attachments, roles, results â€” all verifiable.</p>
          </article>
          <article>
            <i className="fa-solid fa-share-nodes"></i>
            <h3>Share when it counts</h3>
            <p>Choose field by field what's public, what's private, what's visible only to people with the link. You decide who sees what.</p>
          </article>
            </div>
          </div>
        </section>

        <section className="identity-inputs" aria-labelledby="identity-inputs-title">
          <div className="wrap">
            <div className="identity-inputs-head">
              <h2 id="identity-inputs-title">What you can put in the Identity</h2>
              <p>Concrete experience, not generic keywords.</p>
            </div>

            <div className="identity-inputs-grid">
              <article className="identity-input-card work">
                <span className="identity-input-icon"><i className="fa-solid fa-briefcase" aria-hidden="true"></i></span>
                <h3>Work experience</h3>
                <p>Roles, projects, responsibilities at ecosystem companies.</p>
              </article>
              <article className="identity-input-card academy">
                <span className="identity-input-icon"><i className="fa-solid fa-graduation-cap" aria-hidden="true"></i></span>
                <h3>Academy tracks</h3>
                <p>Courses and training completed with sponsors and learning partners.</p>
              </article>
              <article className="identity-input-card projects">
                <span className="identity-input-icon"><i className="fa-solid fa-diagram-project" aria-hidden="true"></i></span>
                <h3>Projects</h3>
                <p>Work delivered, with results, duration and the role you played.</p>
              </article>
              <article className="identity-input-card skills">
                <span className="identity-input-icon"><i className="fa-solid fa-language" aria-hidden="true"></i></span>
                <h3>Skills &amp; languages</h3>
                <p>Technical skills, soft skills, languages - linked to the experience that proves them.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="identity-difference" aria-labelledby="identity-difference-title">
          <div className="wrap">
            <div className="identity-difference-head">
              <h2 id="identity-difference-title">Why it's different</h2>
            </div>

            <div className="identity-difference-grid">
              <article>
                <span className="difference-line"></span>
                <span className="difference-icon"><i className="fa-solid fa-file-signature" aria-hidden="true"></i></span>
                <h3>Verified at the source, signed on-chain</h3>
                <p>Every experience is attested by whoever had you do it and anchored on the blockchain as a verifiable credential. Not words, cryptographic proof.</p>
              </article>
              <article>
                <span className="difference-line"></span>
                <span className="difference-icon"><i className="fa-solid fa-user-lock" aria-hidden="true"></i></span>
                <h3>Under your control</h3>
                <p>You decide what's public, what's private and what's visible only via a shared link.</p>
              </article>
              <article>
                <span className="difference-line"></span>
                <span className="difference-icon"><i className="fa-solid fa-infinity" aria-hidden="true"></i></span>
                <h3>For your whole career</h3>
                <p>The Identity follows you from one role to the next. It grows with you, even if you change company.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="ecosystem-connect" aria-labelledby="ecosystem-connect-title">
          <div className="wrap ecosystem-connect-grid">
            <div className="ecosystem-connect-media">
              <img src="/images/connected-ecosystem.jpeg" alt="ecosystem workspace" />
              <div className="ecosystem-connect-badge">
                <i className="fa-solid fa-link" aria-hidden="true"></i>
                Identity connects the ecosystem
              </div>
            </div>

            <div className="ecosystem-connect-copy">
              <h2 id="ecosystem-connect-title">Connected to the rest of the ecosystem</h2>
              <p>The Identity isn't an isolated page. It's where the two doors of ei.one meet.</p>

              <div className="ecosystem-connection-list">
                <article>
                  <span className="ecosystem-connection-icon"><i className="fa-solid fa-graduation-cap" aria-hidden="true"></i></span>
                  <strong>Academy</strong>
                  <p>when you finish a learning track, the experience lands straight in your Identity</p>
                  <em>coming soon</em>
                </article>
                <article>
                  <span className="ecosystem-connection-icon"><i className="fa-solid fa-handshake" aria-hidden="true"></i></span>
                  <strong>Recruitment</strong>
                  <p>companies search on the experience in your Identity, not on CVs</p>
                  <em>coming soon</em>
                </article>
                <article>
                  <span className="ecosystem-connection-icon"><i className="fa-solid fa-people-group" aria-hidden="true"></i></span>
                  <strong>Business Ecosystem</strong>
                  <p>the ecosystem companies attest the experience you've built working with them</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="identity-start" aria-labelledby="identity-start-title">
          <div className="wrap identity-start-grid">
            <div className="identity-start-copy">
              <h2 id="identity-start-title">Start building your Identity.</h2>
              <p>Open the app, sign up and start adding your first experiences.</p>
              <div className="identity-start-actions">
                <a className="button identity-primary" href="/register">Create your Identity</a>
                <a className="button identity-login" href="/login">Log in</a>
                <a className="button identity-outline" href="/talent">Back to Talent</a>
              </div>
            </div>

            <div className="identity-start-preview" aria-hidden="true">
              <div><span>Create Identity</span></div>
              <div><span>Add experience</span></div>
              <div><span>Share proof</span></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ExperiencePassportPage
