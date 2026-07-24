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

function InvestorPage() {
  useEffect(() => {
    const title = 'For Investors - EI.one'
    const description = 'EI.one gives investors access to a functioning, scalable ecosystem built around education, experience, economy, and environment.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one investors, ecosystem investment, sustainable growth, scalable ecosystem, impact investment')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/investor', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/investor')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="investor.php" />

      <main className="investor-page">
        <section className="investor-hero">
          <div className="wrap investor-hero-grid">
            <div className="investor-hero-copy">
              <h1>Investing in an Ecosystem</h1>
              <p>EI.one is not a single company idea. It is a functioning scalable system built around education, experience, economy, and environment.</p>
              <div className="investor-hero-actions">
                <a className="button" href="/contact">Talk to us</a>
                <a className="button secondary" href="/economy">Explore the Ecosystem</a>
              </div>
            </div>

            <div className="investor-hero-visual" aria-label="Investor ecosystem growth model">
              <div className="investor-growth-card main">
                <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
                <strong>Scalable growth</strong>
                <span>One ecosystem, multiple value paths</span>
              </div>
              <div className="investor-signal education">
                <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                <span>Education</span>
              </div>
              <div className="investor-signal experience">
                <i className="fa-solid fa-id-card" aria-hidden="true"></i>
                <span>Experience</span>
              </div>
              <div className="investor-signal economy">
                <i className="fa-solid fa-network-wired" aria-hidden="true"></i>
                <span>Economy</span>
              </div>
              <div className="investor-signal environment">
                <i className="fa-solid fa-leaf" aria-hidden="true"></i>
                <span>Environment</span>
              </div>
            </div>
          </div>
        </section>

        <section className="investor-relevance" aria-labelledby="investor-relevance-title">
          <div className="wrap investor-relevance-grid">
            <div className="investor-relevance-copy">
              <h2 id="investor-relevance-title">Why EI.ONE is relevant</h2>
              <p>Investors invest not only in visions, but in a robust and resilient system offering security and growth.</p>
            </div>

            <div className="investor-proof-system">
              <div className="investor-proof-core">
                <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
                <strong>Security + growth</strong>
              </div>
              <article>
                <i className="fa-solid fa-briefcase" aria-hidden="true"></i>
                <span>Real, operational companies</span>
              </article>
              <article>
                <i className="fa-solid fa-arrows-rotate" aria-hidden="true"></i>
                <span>Recurring business models</span>
              </article>
              <article>
                <i className="fa-solid fa-diagram-project" aria-hidden="true"></i>
                <span>Ecosystem synergies</span>
              </article>
              <article>
                <i className="fa-solid fa-earth-europe" aria-hidden="true"></i>
                <span>Regional diversification</span>
              </article>
              <article>
                <i className="fa-solid fa-arrow-trend-up" aria-hidden="true"></i>
                <span>Digital scalability</span>
              </article>
            </div>
          </div>
        </section>

        <section className="investment-security" aria-labelledby="investment-security-title">
          <div className="wrap">
            <div className="investment-security-head">
              <h2 id="investment-security-title">Investment Security</h2>
            </div>

            <div className="security-system">
              <article>
                <span className="security-icon"><i className="fa-solid fa-users" aria-hidden="true"></i></span>
                <h3>Real Customers</h3>
                <p>Functioning customer acquisition directly from the ecosystem itself.</p>
              </article>
              <article>
                <span className="security-icon"><i className="fa-solid fa-user-graduate" aria-hidden="true"></i></span>
                <h3>Valuable Talent</h3>
                <p>Identified and developed talents increase productivity and company value.</p>
              </article>
              <article>
                <span className="security-icon"><i className="fa-solid fa-shield-halved" aria-hidden="true"></i></span>
                <h3>Diversification</h3>
                <p>Risk is distributed across different companies, industries, and regions.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="investor-expect" aria-labelledby="investor-expect-title">
          <div className="wrap investor-expect-layout">
            <div className="investor-expect-head">
              <h2 id="investor-expect-title">What to Expect</h2>
              <p>A clearer investment frame: tangible structures, defined roles, and impact logic that can scale over time.</p>
            </div>

            <div className="expectation-strip">
              <article>
                <span className="expectation-step">01</span>
                <div>
                  <i className="fa-solid fa-building-columns" aria-hidden="true"></i>
                  <h3>Real Structures</h3>
                </div>
                <p>Access to tangible, operational structures</p>
              </article>
              <article>
                <span className="expectation-step">02</span>
                <div>
                  <i className="fa-solid fa-sitemap" aria-hidden="true"></i>
                  <h3>Clear Roles</h3>
                </div>
                <p>Clear separation between Holding, Ecosystem &amp; Units</p>
              </article>
              <article>
                <span className="expectation-step">03</span>
                <div>
                  <i className="fa-solid fa-seedling" aria-hidden="true"></i>
                  <h3>Impact</h3>
                </div>
                <p>A long-term growth logic focusing on sustainability</p>
              </article>
            </div>
          </div>
        </section>

        <section className="capital-structure" aria-labelledby="capital-structure-title">
          <div className="wrap capital-structure-grid">
            <div className="capital-structure-copy">
              <h2 id="capital-structure-title">Capital Meets Structure</h2>
              <p>EI.ONE creates an environment where capital is used efficiently, growth is controlled and scaled, and risks are structurally reduced.</p>
              <div className="capital-highlight">
                <h3>Calculable Future</h3>
                <p>Companies grow together. Talents unleash potential. Capital has a lasting impact.</p>
              </div>
              <a className="button" href="/contact">Talk to Us</a>
            </div>

            <div className="capital-flow" aria-label="Capital flow from structure to impact">
              <div className="capital-node source">
                <i className="fa-solid fa-coins" aria-hidden="true"></i>
                <span>Capital</span>
              </div>
              <div className="capital-node system">
                <i className="fa-solid fa-network-wired" aria-hidden="true"></i>
                <span>Structure</span>
              </div>
              <div className="capital-node growth">
                <i className="fa-solid fa-arrow-trend-up" aria-hidden="true"></i>
                <span>Growth</span>
              </div>
              <div className="capital-node impact">
                <i className="fa-solid fa-leaf" aria-hidden="true"></i>
                <span>Impact</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default InvestorPage
