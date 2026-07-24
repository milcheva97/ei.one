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

function TalentPage() {
  useEffect(() => {
    const title = 'For Talents - EI.one'
    const description = 'EI.one helps talents grow inside ecosystem companies through verified Experience Identity, Academy learning paths and Recruitment.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one talent, experience identity, academy, recruitment, verified experience')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/talent', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/talent')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="talent.php" />

      <main className="talent-page">
        <section className="talent-hero">
          <div className="wrap talent-hero-grid">
            <div className="talent-hero-copy">
              <h1>Grow inside companies that transform themselves.</h1>
              <p>
                ei.one's ecosystem companies become engines of learning and growth for the people who work in them. You build real, attested experience in your <strong>Experience Identity</strong>, you learn through the partners' <strong>Academy</strong>, and you get found when a company actually needs what you can do via <strong>Recruitment</strong>.
              </p>
              <div className="talent-hero-actions">
                <a className="button" href="/experience-passport">Start with the Experience Identity</a>
                <a className="button secondary" href="/register">Create your account</a>
              </div>
            </div>

            <div className="talent-hero-visual" aria-label="Talent growth path">
              <div className="talent-orbit">
                <span className="talent-core">
                  <i className="fa-solid fa-user-graduate" aria-hidden="true"></i>
                  <strong>Talent</strong>
                </span>
                <span className="talent-node identity">
                  <i className="fa-solid fa-id-card" aria-hidden="true"></i>
                  <strong>Identity</strong>
                </span>
                <span className="talent-node academy">
                  <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                  <strong>Academy</strong>
                </span>
                <span className="talent-node recruitment">
                  <i className="fa-solid fa-magnifying-glass-chart" aria-hidden="true"></i>
                  <strong>Recruitment</strong>
                </span>
              </div>
              <div className="talent-proof-strip">
                <div>
                  <span>01</span>
                  <strong>Do real work</strong>
                </div>
                <div>
                  <span>02</span>
                  <strong>Collect proof</strong>
                </div>
                <div>
                  <span>03</span>
                  <strong>Get found</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="talent-modules" aria-labelledby="talent-modules-title">
          <div className="wrap">
            <div className="talent-modules-head">
              <h2 id="talent-modules-title">The three modules, in a row</h2>
              <p>They are independent, but the more you use them together, the more they deliver.</p>
            </div>

            <div className="talent-module-system">
              <div className="talent-module-summary">
                <span className="talent-module-summary-icon">
                  <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                </span>
                <h3>One path, three doors.</h3>
                <p>Start with proof, add learning, then become visible to companies that need what you can actually do.</p>
              </div>

              <div className="talent-module-stack">
                <a className="talent-module identity" href="/experience-passport">
                  <span className="talent-module-icon"><i className="fa-solid fa-passport" aria-hidden="true"></i></span>
                  <span className="talent-module-title">Experience Identity <em>Live</em></span>
                  <p>Your digital register, verified by the companies of the ecosystem. Build it over time, share it when you need to.</p>
                  <strong>Discover the Identity <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></strong>
                </a>

                <a className="talent-module academy" href="/academy">
                  <span className="talent-module-icon"><i className="fa-solid fa-graduation-cap" aria-hidden="true"></i></span>
                  <span className="talent-module-title">Academy <em>Preview</em></span>
                  <p>Sponsors and partners build the training paths. You learn where the skills are really needed - not in the abstract.</p>
                  <strong>Discover Academy <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></strong>
                </a>

                <a className="talent-module recruitment" href="/recruitment">
                  <span className="talent-module-icon"><i className="fa-solid fa-handshake" aria-hidden="true"></i></span>
                  <span className="talent-module-title">Recruitment <em>Preview</em></span>
                  <p>Companies search directly inside the Identities. No CVs, no keywords: only real experiences.</p>
                  <strong>Discover Recruitment <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></strong>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="talent-audience" aria-labelledby="talent-audience-title">
          <div className="wrap talent-audience-grid">
            <div className="talent-audience-copy">
              <p className="talent-kicker">Who it's for</p>
              <h2 id="talent-audience-title">For people who see work as real growth.</h2>
              <p>ei.one speaks to those who live work as real growth, not just as a position.</p>
            </div>

            <div className="talent-audience-board">
              <article>
                <span><i className="fa-solid fa-rocket" aria-hidden="true"></i></span>
                <div>
                  <h3>Young people looking for their path</h3>
                  <p>you want to discover where you fit, without relying only on the first CV you send out.</p>
                </div>
              </article>
              <article>
                <span><i className="fa-solid fa-route" aria-hidden="true"></i></span>
                <div>
                  <h3>Those who want to change</h3>
                  <p>an Identity that tells your experiences better than any pitch.</p>
                </div>
              </article>
              <article>
                <span><i className="fa-solid fa-user-tie" aria-hidden="true"></i></span>
                <div>
                  <h3>Experienced professionals</h3>
                  <p>you crystallize years of work into a profile that proves itself and lets you be found.</p>
                </div>
              </article>
              <article>
                <span><i className="fa-solid fa-seedling" aria-hidden="true"></i></span>
                <div>
                  <h3>Aspiring entrepreneurs</h3>
                  <p>you build real experiences inside the ecosystem's companies while growing your own project.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="talent-final-cta" aria-labelledby="talent-final-title">
          <div className="wrap">
            <h2 id="talent-final-title">Ready to start?</h2>
            <p>Open your Experience Identity. Add the first experience. You decide what to show the world.</p>
            <div className="talent-final-actions">
              <a className="button talent-final-light" href="/register">Create your Identity</a>
              <a className="button" href="/experience-passport">See how it works</a>
              <a className="button talent-final-outline" href="/contact">Contact us</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default TalentPage
