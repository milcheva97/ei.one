import { useEffect, useState } from 'react'
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

function BusinessClubPage() {
  const modules = [
    {
      name: 'Techede',
      category: 'Energy & Sustainability',
      logo: '/images/techede.png',
      accent: '#58C913',
      description: 'Techede is the module dedicated to renewable energy and green solutions. We develop photovoltaic projects, energy storage systems, and consulting for energy transition. Our goal is to make clean energy accessible and profitable for businesses and individuals, supporting decarbonization and energy independence.',
    },
    {
      name: 'SalesMaster',
      category: 'Sales & Business Development',
      logo: '/images/salesmaster.jpg',
      accent: '#d70000',
      description: 'SalesMaster is the module specialized in strategic sales and business development. We offer commercial training, sales team coaching, customized CRM systems, and customer acquisition strategies. We transform relationships into sustainable growth through proven methodologies focused on concrete results.',
    },
    {
      name: 'Equico',
      category: 'Integrated Energy Systems',
      logo: '/images/equico.png',
      accent: '#1C5C42',
      description: 'EQUICO² is the module dedicated to integrated energy systems for businesses and properties. From feasibility analysis to the design and implementation of solar, wind and energy storage installations, we transform energy from a cost factor into a revenue source. We support high-energy-consuming companies towards full sustainable energy independence.',
    },
    {
      name: 'Archit.ooo',
      category: '3D Visualization & Virtual Events',
      logo: '/images/archit.png',
      accent: '#2EADD6',
      description: 'Archit.ooo is the module for 3D visualization and virtual events. We use Expi4D technology to create digital twins, immersive tours, virtual showrooms, and online exhibition spaces. We design the future by making every space accessible and interactive, revolutionizing how projects and properties are presented.',
    },
    {
      name: 'MarketingMaster',
      category: 'Digital & Brand Growth',
      logo: '/images/marketingmaster.jpg',
      accent: '#e95bff',
      description: 'MarketingMaster is the module for digital growth and brand positioning. We develop integrated marketing strategies, social media management, valuable content, advertising campaigns, and SEO. We build visibility with real value, transforming your online presence into concrete and measurable business opportunities.',
    },
    {
      name: 'Netmaster',
      category: 'IT, AI & Cloud',
      logo: '/images/netmaster.jpg',
      accent: '#54c7df',
      description: 'Netmaster is a technology company offering software development, AI solutions, cloud infrastructure, cybersecurity, and digital training. A partner that helps businesses build, secure, and scale their digital operations.',
    },
    {
      name: 'Cleanlife',
      category: 'Professional Hygiene & Cleaning',
      logo: '/images/cleanlife.webp',
      accent: '#1976d2',
      description: 'Cleanlife is the module specialized in professional hygiene and cleaning solutions for businesses and facilities. With over 20 years of experience in the Swiss market, we offer industrial cleaning chemicals, professional machinery, maintenance services and tailored technical consulting for hotels, offices, restaurants and healthcare facilities.',
    },
    {
      name: 'BNI',
      category: 'Referral Marketing & Business Network',
      logo: '/images/bni.png',
      accent: '#d71920',
      description: "BNI focuses primarily on economic sustainability through systematic referral marketing that generates measurable growth and revenue. Social sustainability shows in values like 'Givers Gain', long-term relationships and personal development.",
    },
    {
      name: 'PropertyMaster',
      category: 'Real Estate & Infrastructure',
      logo: '/images/propertymaster.jpg',
      accent: '#5a2600',
      description: 'PropertyMaster is the module dedicated to sustainable real estate and infrastructure. We offer real estate consulting, valuations, asset management, project development, and energy requalification of buildings. Future-oriented real estate: we integrate sustainability, technology, and long-term value.',
    },
  ]
  const [activeModule, setActiveModule] = useState(null)

  useEffect(() => {
    const title = 'Business Ecosystem - EI.one'
    const description = "EI.one's Business Units work together to transform companies into engines of learning, innovation and growth."
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one business ecosystem, business club, business units, ecosystem growth, innovation')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/business-club', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/business-club')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="business-club.php" />

      <main className="business-club-page">
        <section className="business-club-hero">
          <div className="wrap business-club-hero-grid">
            <div className="business-club-copy">
              <h1>Business Ecosystem</h1>
              <p>
                The ecosystem's Business Units work together to transform companies into engines of learning, innovation and growth.
                Enter through one module, activate new commercial relationships, attract talent, develop skills, and amplify your visibility.
              </p>
            </div>

            <div className="business-club-visual" aria-label="Business ecosystem modules">
              <div className="business-club-core">
                <i className="fa-solid fa-network-wired" aria-hidden="true"></i>
                <strong>Business Units</strong>
              </div>
              <span className="business-club-node sales">Sales</span>
              <span className="business-club-node talent">Talent</span>
              <span className="business-club-node academy">Academy</span>
              <span className="business-club-node impact">Impact</span>
            </div>
          </div>
        </section>

        <section className="business-modules" aria-labelledby="business-modules-title">
          <div className="wrap">
            <div className="business-modules-head">
              <p className="business-club-kicker">Business Units</p>
              <h2 id="business-modules-title">Enter through one module. Activate the whole ecosystem.</h2>
              <p>Each unit has its own focus, but they are designed to work together as one coordinated growth system.</p>
            </div>

            <div className="business-modules-grid">
              {modules.map((module) => (
                <button
                  className="business-module-card"
                  key={module.name}
                  onClick={() => setActiveModule(module)}
                  style={{ '--module-accent': module.accent }}
                  type="button"
                >
                  <span className="business-module-logo">
                    <img src={module.logo} alt={`${module.name} logo`} />
                  </span>
                  <span className="business-module-name">{module.name}</span>
                  <span className="business-module-category">{module.category}</span>
                  <span className="business-module-arrow" aria-hidden="true">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="modular-model" aria-labelledby="modular-model-title">
          <div className="wrap">
            <div className="modular-model-head">
              <h2 id="modular-model-title">The modular model</h2>
              <p>
                Business Units cover the strategic areas of a modern enterprise, connected so every module can support the others.
              </p>
            </div>

            <div className="modular-flow" aria-label="Strategic areas">
              <span>Energy</span>
              <span>Business Dev</span>
              <span>Marketing</span>
              <span>Talents</span>
              <span>3D Technology</span>
              <span>IT &amp; AI</span>
              <span>Real Estate</span>
            </div>

            <div className="modular-model-callout">
              <i className="fa-solid fa-diagram-project" aria-hidden="true"></i>
              <strong>Each BU works in synergy with the others. That's how the ecosystem becomes more than the sum of its parts.</strong>
            </div>

            <div className="modular-principles" aria-label="Modular model principles">
              <article className="modular-principle">
                <i className="fa-solid fa-check-double" aria-hidden="true"></i>
                <span>Scalable</span>
              </article>
              <article className="modular-principle">
                <i className="fa-solid fa-arrows-spin" aria-hidden="true"></i>
                <span>Coordinated</span>
              </article>
              <article className="modular-principle">
                <i className="fa-solid fa-seedling" aria-hidden="true"></i>
                <span>Sustainable</span>
              </article>
              <article className="modular-principle">
                <i className="fa-solid fa-heart" aria-hidden="true"></i>
                <span>Human-centric</span>
              </article>
            </div>
          </div>
        </section>

        <section className="one-system" aria-labelledby="one-system-title">
          <div className="wrap one-system-layout">
            <div className="one-system-intro">
              <p className="business-club-kicker">Ecosystem advantage</p>
              <h2 id="one-system-title">One system, not separate services</h2>
              <p>
                At ei.one, Business Units aren't "isolated providers". They're part of a single integrated and coordinated system. That's what makes the ecosystem really work.
              </p>
            </div>

            <div className="one-system-board">
              <div className="one-system-center">
                <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                <strong>A client enters through one module and benefits from the entire ecosystem.</strong>
              </div>
              <article>
                <i className="fa-solid fa-check" aria-hidden="true"></i>
                <h3>Coordination</h3>
                <p>All modules work together</p>
              </article>
              <article>
                <i className="fa-solid fa-check" aria-hidden="true"></i>
                <h3>Constant Quality</h3>
                <p>High standards guaranteed</p>
              </article>
              <article>
                <i className="fa-solid fa-check" aria-hidden="true"></i>
                <h3>Governance</h3>
                <p>Clear and transparent structure</p>
              </article>
              <article>
                <i className="fa-solid fa-check" aria-hidden="true"></i>
                <h3>Efficiency</h3>
                <p>Optimized processes</p>
              </article>
              <article>
                <i className="fa-solid fa-check" aria-hidden="true"></i>
                <h3>Scalability</h3>
                <p>Controlled growth</p>
              </article>
            </div>
          </div>
        </section>

        <section className="business-marketplace" aria-labelledby="business-marketplace-title">
          <div className="wrap business-marketplace-panel">
            <div className="business-marketplace-copy">
              <h2 id="business-marketplace-title">Marketplace</h2>
              <p>
                The EI.one Marketplace offers access to exclusive products and technologies born from our ecosystem. Our goal is to provide businesses with tools that make their visions tangible and real.
              </p>
            </div>

            <div className="business-marketplace-grid">
              <article>
                <i className="fa-solid fa-box-open" aria-hidden="true"></i>
                <h3>Exclusive products</h3>
                <p>Solutions developed inside the ecosystem.</p>
              </article>
              <article>
                <i className="fa-solid fa-microchip" aria-hidden="true"></i>
                <h3>Applied technology</h3>
                <p>Tools that move ideas into practical use.</p>
              </article>
              <article>
                <i className="fa-solid fa-lightbulb" aria-hidden="true"></i>
                <h3>Tangible visions</h3>
                <p>Business concepts made visible, useful and real.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="archit-feature" aria-labelledby="archit-feature-title">
          <div className="wrap archit-feature-grid">
            <a
              className="archit-feature-media"
              href="https://viewit.it/public/allianzmico/fm/index.html?g=it&l=0&l1=0"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Archit.ooo virtual experience"
            >
              <span className="archit-feature-logo">
                <img src="/images/archit.png" alt="Archit.ooo logo" />
              </span>
              <img src="/images/architooo_preview.png" alt="Archit.ooo virtual event preview" />
            </a>

            <div className="archit-feature-copy">
              <p className="business-club-kicker">3D Visualization &amp; Virtual Events</p>
              <h2 id="archit-feature-title">Archit.ooo</h2>
              <p>
                Archit.ooo is the innovative platform for 3D visualization and virtual events. We use the groundbreaking <strong>Expi4D</strong> technology to transform real spaces into experiential digital worlds.
              </p>
              <p>
                Whether digital twins, immersive tours, virtual showrooms, or online exhibition spaces - Archit.ooo makes spaces accessible and interactive worldwide. We revolutionize the way projects and real estate are presented and experienced.
              </p>
              <ul>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i><strong>Expi4D Technology</strong><span>Maximum immersion</span></li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i><strong>Digital Twins</strong><span>Precise copies of real spaces</span></li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i><strong>Virtual Showrooms</strong><span>Present your products anywhere</span></li>
              </ul>
              <a className="button" href="https://archit.ooo/en/" target="_blank" rel="noreferrer">Visit website</a>
            </div>
          </div>
        </section>

        <section className="marketplace-why" aria-labelledby="marketplace-why-title">
          <div className="wrap marketplace-why-grid">
            <div className="marketplace-why-copy">
              <p className="business-club-kicker">Why our Marketplace?</p>
              <h2 id="marketplace-why-title">Technology meets usability.</h2>
              <p>Marketplace tools are selected for one reason: they have to become useful quickly, keep quality high, and create measurable business value.</p>
            </div>

            <div className="marketplace-why-list">
              <article>
                <span>01</span>
                <i className="fa-solid fa-rocket" aria-hidden="true"></i>
                <div>
                  <h3>Fast Integration</h3>
                  <p>Solutions that are ready for immediate use.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
                <div>
                  <h3>Guaranteed Quality</h3>
                  <p>Only the best products from our ecosystem.</p>
                </div>
              </article>
              <article>
                <span>03</span>
                <i className="fa-solid fa-arrows-to-dot" aria-hidden="true"></i>
                <div>
                  <h3>Focus on ROI</h3>
                  <p>Technologies that create real business value.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="business-club-cta" aria-labelledby="business-club-cta-title">
          <div className="wrap business-club-cta-inner">
            <h2 id="business-club-cta-title">Want to activate the ecosystem for your business?</h2>
            <p>Discover how to integrate the Business Units into your growth strategy. Enter through one module, benefit from all.</p>
            <div className="business-club-cta-actions">
              <a className="button secondary" href="/partner">Become a Partner</a>
              <a className="button" href="/contact">Contact Us</a>
              <a className="button secondary outline-light" href="/investor">Are you an investor?</a>
            </div>
          </div>
        </section>

        {activeModule && (
          <div className="business-module-modal" role="dialog" aria-modal="true" aria-labelledby="business-module-modal-title" onClick={() => setActiveModule(null)}>
            <div className="business-module-dialog" onClick={(event) => event.stopPropagation()} style={{ '--module-accent': activeModule.accent }}>
              <button className="business-module-close" type="button" onClick={() => setActiveModule(null)} aria-label="Close dialog">
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
              <div className="business-module-dialog-brand">
                <span>
                  <img src={activeModule.logo} alt={`${activeModule.name} logo`} />
                </span>
              </div>
              <div className="business-module-dialog-content">
                <h2 id="business-module-modal-title">{activeModule.name}</h2>
                <p className="business-module-dialog-kicker">{activeModule.category}</p>
                <p>{activeModule.description}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}

export default BusinessClubPage
