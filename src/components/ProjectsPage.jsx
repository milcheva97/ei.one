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

const referenceProjects = [
  {
    image: '/images/p1.webp',
    power: '24.8 kWp',
    title: 'Massarotti Folitek Automobile AG',
    location: 'Altendorf, ZH',
    type: 'Commercial PV carport',
  },
  {
    image: '/images/p2.jpg',
    power: '20.0 kWp',
    title: 'Multi-family building',
    location: 'Uster, ZH',
    type: 'PV on green roof',
  },
  {
    image: '/images/p3.jpg',
    power: '20.5 kWp',
    title: 'Private home',
    location: 'Kloten, ZH',
    type: 'Photovoltaic system',
  },
  {
    image: '/images/p4.jpeg',
    power: '21.5 kWp',
    title: 'Single-family home',
    location: 'Kloten, ZH',
    type: 'Modern PV system',
  },
  {
    image: '/images/p5.jpg',
    power: '15.0 kWp',
    title: 'Single-family home',
    location: 'Laufen-Uhwiesen, ZH',
    type: 'Photovoltaic system',
  },
  {
    image: '/images/p6.jpg',
    power: '13.0 kWp',
    title: 'Private home',
    location: 'Matzingen, TG',
    type: 'Photovoltaic system',
  },
  {
    image: '/images/p7.jpg',
    power: '7.3 kWp',
    title: 'Single-family home',
    location: 'Dornach, SO',
    type: 'Modern PV system',
  },
  {
    image: '/images/p8.jpg',
    power: '16.0 kWp',
    title: 'Single-family home',
    location: 'Wohlen, AG',
    type: 'Photovoltaic system',
  },
  {
    image: '/images/p9.jpg',
    power: '10.75 kWp',
    title: 'Private home',
    location: 'Amriswil, TG',
    type: 'PV + storage + heat pump',
  },
  {
    image: '/images/p10.jpg',
    power: '15.91 kWp',
    title: 'Single-family home',
    location: 'Innerberg, BE',
    type: 'Innovative PV solution',
  },
  {
    image: '/images/p11.jpg',
    power: '13.16 kWp',
    title: 'Single-family home',
    location: 'Vira, TI',
    type: 'Photovoltaic system',
  },
  {
    image: '/images/p12.jpg',
    power: '15.0 kWp',
    title: 'Private home',
    location: 'Granichen, AG',
    type: 'Pitched roof PV',
  },
  {
    image: '/images/p13.jpg',
    power: '17.0 kWp',
    title: 'Multi-family building',
    location: 'Taverne, TI',
    type: 'Pitched roof PV',
  },
  {
    image: '/images/p14.jpg',
    power: '15.0 kWp',
    title: 'Private home',
    location: 'Seon, AG',
    type: 'Photovoltaic system',
  },
]

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

        <section className="projects-areas" aria-labelledby="projects-areas-title">
          <div className="wrap projects-areas-grid">
            <div className="projects-areas-head">
              <p className="projects-kicker">Areas of action</p>
              <h2 id="projects-areas-title">Where sustainability becomes operational.</h2>
              <p>From energy production to reporting, each project area is designed to create measurable environmental and economic value.</p>
            </div>

            <div className="projects-action-list">
              <article>
                <i className="fa-solid fa-solar-panel" aria-hidden="true"></i>
                <div>
                  <h3>Renewable Energy</h3>
                  <p>Photovoltaic plants, energy storage and wind solutions for businesses and properties. We turn energy from a cost factor into a source of independence.</p>
                </div>
              </article>
              <article>
                <i className="fa-solid fa-bolt" aria-hidden="true"></i>
                <div>
                  <h3>Energy Transition</h3>
                  <p>Energy audits, building retrofits, optimisation of industrial consumption. Concrete pathways toward energy independence.</p>
                </div>
              </article>
              <article>
                <i className="fa-solid fa-recycle" aria-hidden="true"></i>
                <div>
                  <h3>Circular Economy</h3>
                  <p>Projects that turn waste into resources. Reducing waste, reusing materials, building sustainable industrial processes.</p>
                </div>
              </article>
              <article>
                <i className="fa-solid fa-chart-line" aria-hidden="true"></i>
                <div>
                  <h3>ESG Measurement</h3>
                  <p>Environmental KPIs, transparent reporting and tracking of real impact. Sustainability is proven, not declared.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="projects-references" aria-labelledby="projects-references-title">
          <div className="wrap">
            <div className="section-head projects-reference-head">
              <p className="projects-kicker">Reference projects</p>
              <h2 id="projects-references-title">Photovoltaic work delivered in Switzerland.</h2>
              <p>
                A selection of installations delivered across Switzerland in collaboration with{' '}
                <a href="https://clyeco.ch/referenzen/" target="_blank" rel="noreferrer">Techede</a>, a partner in our ecosystem.
              </p>
            </div>

            <div className="reference-project-grid">
              {referenceProjects.map((project) => (
                <article className="reference-project-card" key={`${project.title}-${project.image}`}>
                  <div className="reference-project-image">
                    <img src={project.image} alt={`${project.title} photovoltaic reference`} />
                    <span>{project.power}</span>
                  </div>
                  <div className="reference-project-body">
                    <h3>{project.title}</h3>
                    <p>
                      <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                      {project.location}
                    </p>
                    <strong>{project.type}</strong>
                  </div>
                </article>
              ))}
            </div>

            <div className="projects-reference-action">
              <a className="button button-outline" href="https://clyeco.ch/referenzen/" target="_blank" rel="noreferrer">
                See all references on Techede.ch
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
              </a>
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

        <section className="projects-contact-cta" aria-labelledby="projects-contact-title">
          <div className="wrap projects-contact-panel">
            <div>
              <p className="projects-kicker">Project intake</p>
              <h2 id="projects-contact-title">Have an environmental project to deliver?</h2>
              <p>Get in touch. We'll assess together whether it fits our model and how we can support its execution.</p>
            </div>
            <a className="button button-primary" href="/contact">Contact Us</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ProjectsPage
