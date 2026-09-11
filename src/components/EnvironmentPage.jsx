import { useEffect } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

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

export default EnvironmentPage
