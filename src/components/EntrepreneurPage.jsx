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

function EntrepreneurPage() {
  useEffect(() => {
    const title = 'Entrepreneur - EI.one'
    const description = 'EI.one Entrepreneur is for people who want to build, activate, and grow inside a structured ecosystem.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one entrepreneur, ecosystem entrepreneur, business builder, sustainable growth, EI generation')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/entrepreneur', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/entrepreneur')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="entrepreneur.php" />

      <main className="entrepreneur-page">
        <section className="entrepreneur-hero">
          <div className="wrap entrepreneur-hero-grid">
            <div className="entrepreneur-hero-copy">
              <p className="entrepreneur-kicker">Entrepreneur Program</p>
              <h1>Join the EI.ONE Intelligent Ecosystem</h1>
              <p>Join an ecosystem that values cooperation over competition. Let's grow together through real connections.</p>
              <div className="entrepreneur-hero-actions">
                <a className="button" href="/en/contact.php">Join the Ecosystem</a>
              </div>
            </div>

            <div className="entrepreneur-hero-visual" aria-label="Entrepreneur ecosystem path">
              <div className="entrepreneur-core">
                <i className="fa-solid fa-lightbulb" aria-hidden="true"></i>
                <strong>Build together</strong>
              </div>
              <div className="entrepreneur-node cooperate">
                <i className="fa-solid fa-handshake" aria-hidden="true"></i>
                <span>Cooperation</span>
              </div>
              <div className="entrepreneur-node connect">
                <i className="fa-solid fa-network-wired" aria-hidden="true"></i>
                <span>Connections</span>
              </div>
              <div className="entrepreneur-node grow">
                <i className="fa-solid fa-seedling" aria-hidden="true"></i>
                <span>Growth</span>
              </div>
            </div>
          </div>
        </section>

        <section className="entrepreneur-why">
          <div className="wrap entrepreneur-why-grid">
            <div className="entrepreneur-why-intro">
              <h2>Why Join Us?</h2>
              <p>The benefits of being part of an integrated and high-performance ecosystem.</p>
              <div className="entrepreneur-why-note">
                <strong>Integrated growth</strong>
                <span>Clients, projects, talents and visibility move through one connected ecosystem.</span>
              </div>
            </div>

            <div className="entrepreneur-benefit-rail">
              <article className="entrepreneur-benefit">
                <span className="entrepreneur-benefit-icon">
                  <i className="fa-solid fa-users-viewfinder" aria-hidden="true"></i>
                </span>
                <div>
                  <h3>Client Acquisition</h3>
                  <p>Direct access to new potential clients and qualified referrals from the network. Marketing becomes organic.</p>
                </div>
              </article>

              <article className="entrepreneur-benefit">
                <span className="entrepreneur-benefit-icon">
                  <i className="fa-solid fa-rocket" aria-hidden="true"></i>
                </span>
                <div>
                  <h3>Co-Creation &amp; Projects</h3>
                  <p>Develop joint projects with complementary companies. Innovation comes from collaboration.</p>
                </div>
              </article>

              <article className="entrepreneur-benefit">
                <span className="entrepreneur-benefit-icon">
                  <i className="fa-solid fa-user-tie" aria-hidden="true"></i>
                </span>
                <div>
                  <h3>Talents &amp; Visibility</h3>
                  <p>Access top talents trained by our Academy and increase your brand visibility.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="entrepreneur-cooperation">
          <div className="wrap entrepreneur-cooperation-wrap">
            <div className="entrepreneur-cooperation-media">
              <img src="/images/our-approach.jpg" alt="Entrepreneurs cooperating in a meeting" />
            </div>

            <div className="entrepreneur-cooperation-panel">
              <span className="entrepreneur-cooperation-label">Cooperation model</span>
              <h2>Real Cooperation</h2>
              <strong>EI.ONE thrives on complementary entrepreneurs.</strong>
              <p>
                In a saturated market, partnership is the key to differentiation. We offer not just a platform,
                but an environment of trust where businesses support each other.
              </p>

              <div className="entrepreneur-cooperation-list">
                <span><i className="fa-solid fa-check" aria-hidden="true"></i> Know-How Exchange</span>
                <span><i className="fa-solid fa-check" aria-hidden="true"></i> Exclusive Networking Events</span>
                <span><i className="fa-solid fa-check" aria-hidden="true"></i> Strategic Support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="entrepreneur-looking">
          <div className="wrap">
            <div className="entrepreneur-looking-head">
              <h2>Who we are looking for</h2>
              <p>The entrepreneur program is ideal for:</p>
            </div>

            <div className="entrepreneur-looking-board">
              <article className="entrepreneur-fit">
                <i className="fa-solid fa-building" aria-hidden="true"></i>
                <h3>Experienced Firms</h3>
                <p>Companies with clear expertise and history.</p>
              </article>

              <article className="entrepreneur-fit">
                <i className="fa-solid fa-laptop-code" aria-hidden="true"></i>
                <h3>Solution Providers</h3>
                <p>Providers of digital and technology services.</p>
              </article>

              <article className="entrepreneur-fit">
                <i className="fa-solid fa-school" aria-hidden="true"></i>
                <h3>Education</h3>
                <p>Educational institutions and talent-focused organizations.</p>
              </article>

              <article className="entrepreneur-fit">
                <i className="fa-solid fa-hand-holding-dollar" aria-hidden="true"></i>
                <h3>For Investors</h3>
                <p>Those looking for investments with real impact.</p>
              </article>
            </div>

            <div className="entrepreneur-together">
              <div className="entrepreneur-together-mark">
                <i className="fa-solid fa-quote-left" aria-hidden="true"></i>
              </div>
              <blockquote>Entrepreneurship means growing together.</blockquote>
              <p>Join the companies of the ecosystem that are changing the way of doing business: together, not alone.</p>
            </div>
          </div>
        </section>

        <section className="entrepreneur-request">
          <div className="wrap entrepreneur-request-grid">
            <div className="entrepreneur-request-copy">
              <span className="entrepreneur-request-kicker">Start the conversation</span>
              <h2>Request Information</h2>
              <p>Fill out the form to speak with our Partnership team.</p>

              <div className="entrepreneur-request-points">
                <span><i className="fa-solid fa-circle-check" aria-hidden="true"></i> Fast partnership review</span>
                <span><i className="fa-solid fa-circle-check" aria-hidden="true"></i> Clear request routing</span>
                <span><i className="fa-solid fa-circle-check" aria-hidden="true"></i> Direct EI.ONE contact</span>
              </div>
            </div>

            <form className="entrepreneur-request-form">
              <label>
                <span>Company Name / Contact</span>
                <input type="text" name="company" placeholder="Company Name / Contact" />
              </label>

              <label>
                <span>Business Email</span>
                <input type="email" name="email" placeholder="Business Email" />
              </label>

              <label>
                <span>Request Type</span>
                <select name="requestType" defaultValue="">
                  <option value="" disabled>Request Type</option>
                  <option>Entrepreneur Request</option>
                  <option>General Information</option>
                  <option>Collaboration Proposal</option>
                </select>
              </label>

              <label>
                <span>Tell us about your company</span>
                <textarea name="message" rows="5" placeholder="Tell us about your company..."></textarea>
              </label>

              <button type="submit">Send Request</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default EntrepreneurPage
