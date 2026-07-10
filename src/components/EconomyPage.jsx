import { useEffect } from 'react'
import Header from './Header.jsx'
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

function EconomyPage() {
  useEffect(() => {
    const title = 'Enterprise - EI.one Economic Sustainability'
    const description = 'EI.one Enterprise turns internships, project work and mentoring into verified talent, trusted partnerships and business growth.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one enterprise, economy, business ecosystem, verified talent, economic sustainability, business growth')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/economy', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/economy')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="economy.php" />

      <main className="economy-page">
        <section className="economy-hero">
          <div className="wrap economy-hero-grid">
            <div className="economy-hero-copy">
              <h1>Enterprise</h1>
              <h2>Turn experience into business growth.</h2>
              <p>Internships, project work and mentoring become a channel of verified talent, trusted partnerships and a qualified commercial network. Your experiences attract the best. The best grow your business.</p>
              <div className="economy-hero-actions">
                <a className="button" href="/en/business-club.php">Enter Business Ecosystem</a>
                <a className="button secondary" href="/en/partner.php">Become a Partner</a>
              </div>
            </div>

            <div className="economy-hero-visual" aria-label="Business growth ecosystem preview">
              <div className="economy-growth-card main">
                <span><i className="fa-solid fa-chart-line" aria-hidden="true"></i></span>
                <strong>Business growth</strong>
              </div>
              <div className="economy-growth-card talent">
                <span><i className="fa-solid fa-user-check" aria-hidden="true"></i></span>
                <strong>Verified talent</strong>
              </div>
              <div className="economy-growth-card network">
                <span><i className="fa-solid fa-handshake" aria-hidden="true"></i></span>
                <strong>Trusted partnerships</strong>
              </div>
              <div className="economy-orbit one"></div>
              <div className="economy-orbit two"></div>
            </div>
          </div>
        </section>

        <section className="economic-thinking" aria-labelledby="economic-thinking-title">
          <div className="wrap economic-thinking-grid">
            <div className="economic-thinking-copy">
              <h2 id="economic-thinking-title">New Economic Thinking</h2>
              <p>For us, economic sustainability means more than just financial success. It stands for stable, resilient, and long-term viable business models that promote innovation, use resources efficiently, and simultaneously make a positive contribution to society.</p>
              <p>At EI.one - Ecosystem Intelligence, we develop an intelligent ecosystem that connects companies, technologies, talents, and investors. Our goal is to support organizations in creating sustainable value, opening new markets, and strengthening their competitiveness in the long term.</p>
              <div className="economic-thinking-tags">
                <span>Stable models</span>
                <span>Efficient resources</span>
                <span>New markets</span>
              </div>
            </div>

            <div className="economic-thinking-media">
              <img src="/images/economic-thinking.jpg" alt="Digital economic sustainability and business innovation concept" />
              <div className="economic-thinking-stat">
                <strong>Long-term value</strong>
                <span>companies + technologies + talents + investors</span>
              </div>
            </div>
          </div>
        </section>

        <section className="technology-strategy" aria-labelledby="technology-strategy-title">
          <div className="wrap">
            <div className="technology-strategy-head">
              <h2 id="technology-strategy-title">Technology &amp; Strategy</h2>
              <p>By combining digitalization, platform economy, artificial intelligence, and strategic networks, we enable more efficient work and faster innovation.</p>
            </div>

            <div className="technology-system">
              <div className="technology-system-hub">
                <span><i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i></span>
                <strong>Faster innovation</strong>
                <small>Technology, networks and resilience working as one operating system.</small>
              </div>

              <article className="technology-system-node digitalization">
                <span className="strategy-icon"><i className="fa-solid fa-microchip" aria-hidden="true"></i></span>
                <div>
                  <h3>Digitalization</h3>
                  <p>Optimization of processes through cutting-edge technologies.</p>
                </div>
              </article>
              <article className="technology-system-node networks">
                <span className="strategy-icon"><i className="fa-solid fa-network-wired" aria-hidden="true"></i></span>
                <div>
                  <h3>Networks</h3>
                  <p>Strategic connections for collective growth.</p>
                </div>
              </article>
              <article className="technology-system-node resilience">
                <span className="strategy-icon"><i className="fa-solid fa-chart-line" aria-hidden="true"></i></span>
                <div>
                  <h3>Resilience</h3>
                  <p>Stability even in times of global change.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="future-proof" aria-labelledby="future-proof-title">
          <div className="wrap future-proof-grid">
            <div className="future-proof-copy">
              <h2 id="future-proof-title">Future-Proof Systems</h2>
              <p>Economic sustainability for us means creating systems that remain stable even in times of uncertainty and global change. Companies should not only grow but continuously evolve and become resilient to change.</p>
              <div className="future-proof-statement">
                <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
                <span>EI.one stands for a new generation of economic systems - intelligent, connected, and sustainable.</span>
              </div>
            </div>

            <div className="future-proof-media">
              <img src="/images/future-proof.jpeg" alt="Future-proof connected system network" />
              <div className="future-proof-signals" aria-hidden="true">
                <span>Stable</span>
                <span>Connected</span>
                <span>Sustainable</span>
              </div>
            </div>
          </div>
        </section>

        <section className="economy-final-cta" aria-labelledby="economy-final-title">
          <div className="wrap economy-final-grid">
            <div className="economy-final-copy">
              <h2 id="economy-final-title">Ready for the Economy of the Future?</h2>
              <p>Become part of an ecosystem that generates innovation and sustainable added value.</p>
              <div className="economy-final-actions">
                <a className="button economy-final-primary" href="/en/partner.php">Become a Partner</a>
                <a className="button economy-final-outline" href="/en/contact.php">Contact</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default EconomyPage
