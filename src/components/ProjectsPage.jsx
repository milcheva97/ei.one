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

function ProjectsPage() {
  useEffect(() => {
    const title = 'Environmental Projects - EI.one'
    const description = 'EI.one turns ecological sustainability into real environmental projects with measurable impact, clear indicators and transparent results.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one projects, environmental projects, ecological sustainability, measurable impact, transparent results')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/projects', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/projects')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="projects.php" />

      <main className="projects-page">
        <section className="projects-hero">
          <div className="wrap projects-hero-grid">
            <div className="projects-hero-copy">
              <p className="projects-kicker">Measurable sustainability</p>
              <h1>Environmental Projects</h1>
              <p>
                Concrete initiatives with measurable impact. We turn ecological sustainability into real projects, with clear indicators and transparent results.
              </p>
            </div>

            <div className="projects-hero-visual" aria-label="Project impact indicators">
              <div className="projects-impact-card primary">
                <i className="fa-solid fa-seedling" aria-hidden="true"></i>
                <strong>Real projects</strong>
                <span>Operational initiatives, not abstract promises</span>
              </div>
              <div className="projects-impact-card">
                <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
                <strong>Clear indicators</strong>
                <span>Progress you can measure and compare</span>
              </div>
              <div className="projects-impact-card">
                <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                <strong>Transparent results</strong>
                <span>Impact made visible for every stakeholder</span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-process" aria-labelledby="projects-process-title">
          <div className="wrap projects-process-grid">
            <div className="projects-process-copy">
              <p className="projects-kicker">Operational sustainability</p>
              <h2 id="projects-process-title">From selection to measurable impact.</h2>
              <p>
                At EI.one, environmental sustainability isn't a slogan. It's an operational line with selection criteria, execution phases and impact metrics.
              </p>
              <p>
                We work with companies in our network, industrial partners and investors who share one priority: generating economic value without compromising ecological value.
              </p>
            </div>

            <div className="projects-process-steps" aria-label="Project stages">
              <article>
                <span>01</span>
                <i className="fa-solid fa-magnifying-glass-chart" aria-hidden="true"></i>
                <strong>Identification</strong>
              </article>
              <article>
                <span>02</span>
                <i className="fa-solid fa-sitemap" aria-hidden="true"></i>
                <strong>Structuring</strong>
              </article>
              <article>
                <span>03</span>
                <i className="fa-solid fa-gears" aria-hidden="true"></i>
                <strong>Delivery</strong>
              </article>
              <article>
                <span>04</span>
                <i className="fa-solid fa-chart-simple" aria-hidden="true"></i>
                <strong>Measurement</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="projects-workflow" aria-labelledby="projects-workflow-title">
          <div className="wrap">
            <div className="projects-workflow-head">
              <p className="projects-kicker">How we work</p>
              <h2 id="projects-workflow-title">A clear path from opportunity to proof.</h2>
            </div>

            <div className="projects-workflow-track">
              <article>
                <span>01</span>
                <i className="fa-solid fa-magnifying-glass-chart" aria-hidden="true"></i>
                <div>
                  <h3>Identification</h3>
                  <p>We analyse real opportunities, assess technical and economic feasibility and only select what delivers concrete impact.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <i className="fa-solid fa-compass-drafting" aria-hidden="true"></i>
                <div>
                  <h3>Structuring</h3>
                  <p>We build the financial model, identify partners and investors, and define success indicators before we start.</p>
                </div>
              </article>
              <article>
                <span>03</span>
                <i className="fa-solid fa-people-arrows" aria-hidden="true"></i>
                <div>
                  <h3>Delivery</h3>
                  <p>We coordinate execution with network partners. Technical capabilities come from the ecosystem; the orchestration comes from EI.one.</p>
                </div>
              </article>
              <article>
                <span>04</span>
                <i className="fa-solid fa-chart-simple" aria-hidden="true"></i>
                <div>
                  <h3>Measurement</h3>
                  <p>Shared indicators, transparent reporting and periodic review. We show results, we don't tell stories.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="projects-visible-impact" aria-labelledby="projects-visible-impact-title">
          <div className="wrap projects-visible-impact-grid">
            <div className="projects-visible-impact-copy">
              <p className="projects-kicker">Visible impact</p>
              <h2 id="projects-visible-impact-title">Numbers that make sustainability visible.</h2>
              <p>
                For every project we publish impact indicators: tons of CO2 avoided, kWh produced from renewable sources, percentage reduction in consumption.
                No stories - verifiable numbers.
              </p>
            </div>

            <div className="projects-impact-dashboard">
              <div className="projects-impact-metric">
                <i className="fa-solid fa-cloud" aria-hidden="true"></i>
                <span>CO2 avoided</span>
              </div>
              <div className="projects-impact-metric">
                <i className="fa-solid fa-solar-panel" aria-hidden="true"></i>
                <span>kWh produced</span>
              </div>
              <div className="projects-impact-metric">
                <i className="fa-solid fa-gauge-high" aria-hidden="true"></i>
                <span>Consumption reduced</span>
              </div>
              <strong>Serious sustainability is built on data, not intentions.</strong>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default ProjectsPage
