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

function EnvironmentPage() {
  useEffect(() => {
    const title = 'Environment - EI.one Ecological Sustainability'
    const description = 'EI.one Environment combines innovation, renewable energies and measurable projects so environmental sustainability becomes an operational choice.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one environment, ecological sustainability, renewable energies, measurable projects, sustainable innovation')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/environment', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/environment')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="environment.php" />

      <main className="environment-page">
        <section className="environment-hero">
          <div className="wrap environment-hero-grid">
            <div className="environment-hero-copy">
              <h1>Environment</h1>
              <p>Innovation and renewable energies with measurable projects. Environmental sustainability as an operational choice, not as a slogan.</p>
              <div className="environment-hero-actions">
                <a className="button" href="/en/projects.php">Discover Projects</a>
                <a className="button secondary" href="/en/contact.php">Contact</a>
              </div>
            </div>

            <div className="environment-hero-visual" aria-label="Ecological sustainability system preview">
              <div className="environment-core">
                <i className="fa-solid fa-leaf" aria-hidden="true"></i>
                <strong>Operational sustainability</strong>
              </div>
              <div className="environment-node energy">
                <i className="fa-solid fa-solar-panel" aria-hidden="true"></i>
                <span>Renewable energy</span>
              </div>
              <div className="environment-node projects">
                <i className="fa-solid fa-seedling" aria-hidden="true"></i>
                <span>Measurable projects</span>
              </div>
              <div className="environment-node impact">
                <i className="fa-solid fa-chart-simple" aria-hidden="true"></i>
                <span>Visible impact</span>
              </div>
            </div>
          </div>
        </section>

        <section className="protect-environment" aria-labelledby="protect-environment-title">
          <div className="wrap protect-environment-grid">
            <div className="protect-environment-copy">
              <h2 id="protect-environment-title">Protecting Our Environment</h2>
              <p>Protecting our environment is one of the central challenges of the 21st century. For us, ecological sustainability means using natural resources responsibly, using energy efficiently, and developing technologies that reduce the ecological footprint of our economy.</p>
              <p>At EI.one, we combine technological innovation with ecological awareness. Our approach is based on the conviction that sustainable solutions are not only necessary but also offer enormous opportunities for the economy, society, and innovation.</p>
              <div className="protect-environment-points">
                <span>Responsible resources</span>
                <span>Efficient energy</span>
                <span>Reduced footprint</span>
              </div>
            </div>

            <div className="protect-environment-media">
              <img src="/images/ecological-sustainability.jpg" alt="Ecological sustainability tree with technology and people" />
              <div className="protect-environment-badge">
                <i className="fa-solid fa-leaf" aria-hidden="true"></i>
                Ecology meets innovation
              </div>
            </div>
          </div>
        </section>

        <section className="sustainable-solutions" aria-labelledby="sustainable-solutions-title">
          <div className="wrap sustainable-solutions-grid">
            <div className="sustainable-solutions-intro">
              <h2 id="sustainable-solutions-title">Sustainable Solutions</h2>
              <p>Through projects in the fields of renewable energy and energy efficiency, we support companies in making their processes more environmentally friendly.</p>
            </div>

            <div className="sustainable-path">
              <article>
                <span className="solution-icon"><i className="fa-solid fa-solar-panel" aria-hidden="true"></i></span>
                <div>
                  <h3>Renewable Energies</h3>
                  <p>Focus on climate-friendly energy systems.</p>
                </div>
              </article>
              <article>
                <span className="solution-icon"><i className="fa-solid fa-building-shield" aria-hidden="true"></i></span>
                <div>
                  <h3>Intelligent Infrastructure</h3>
                  <p>Efficient and resource-saving buildings.</p>
                </div>
              </article>
              <article>
                <span className="solution-icon"><i className="fa-solid fa-leaf" aria-hidden="true"></i></span>
                <div>
                  <h3>Resource Preservation</h3>
                  <p>Reducing the ecological footprint.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="ecological-progress" aria-labelledby="ecological-progress-title">
          <div className="wrap ecological-progress-grid">
            <div className="ecological-progress-copy">
              <h2 id="ecological-progress-title">Ecological Sustainability is Progress</h2>
              <p>For us, ecological sustainability does not mean renunciation, but progress. It stands for innovation, responsibility, and the possibility of combining economic development with the protection of our planet.</p>
              <p>El.one pursues the vision of a future where economy, technology, and environment are in balance -- an intelligent ecosystem that enables sustainable solutions.</p>
            </div>

            <div className="ecological-progress-visual">
              <img src="/images/circular-progress.jpg" alt="Bright circular economy loop with renewable energy and recycled materials" />
            </div>
          </div>
        </section>

        <section className="environment-final-cta" aria-labelledby="environment-final-title">
          <div className="wrap environment-final-inner">
            <h2 id="environment-final-title">Together for a Healthy Planet</h2>
            <p>Discover our projects for a climate-friendly economy.</p>
            <div className="environment-final-actions">
              <a className="button environment-final-primary" href="/en/projects.php">Discover Projects</a>
              <a className="button environment-final-outline" href="/en/contact.php">Contact</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default EnvironmentPage
