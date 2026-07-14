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

function EngagementsPage() {
  const partners = [
    {
      name: 'ToGo opening eyes',
      logo: '/images/togo-opening-eyes.png',
      href: 'https://stiftung-togo.ch/',
    },
    {
      name: 'SVA Zürich',
      logo: '/images/sva-zuerich.png',
      href: 'https://svazurich.ch/',
    },
    {
      name: 'Innovation Zurich',
      logo: '/images/innovation-zuerich.webp',
      href: 'https://www.standort-zuerich.ch/',
    },
    {
      name: 'AugenarztpraxisPlus',
      logo: '/images/augenarztpraxisplus.png',
      href: 'https://augenarztpraxis-baden.ch/',
    },
    {
      name: 'SGO Verein',
      logo: '/images/sgo.svg',
      href: 'https://www.sgo-verein.ch/',
    },
  ]

  useEffect(() => {
    const title = 'Our Commitments - EI.one'
    const description = 'EI.one commitments with companies, institutions and organizations that recognize and support the ecosystem work.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one commitments, engagements, ecosystem partners, community, institutions')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/engagements', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/engagements')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="engagements.php" />

      <main className="engagements-page">
        <section className="engagements-hero">
          <div className="wrap engagements-hero-grid">
            <div className="engagements-hero-copy">
              <h1>Our Commitments</h1>
              <p>
                We believe in an ecosystem that grows together with its community. These are the companies, institutions and organizations we work with, that recognize and support our work.
              </p>
            </div>

            <div className="engagements-hero-visual" aria-label="Commitment network">
              <div className="engagements-core">
                <i className="fa-solid fa-handshake" aria-hidden="true"></i>
                <strong>Shared growth</strong>
              </div>
              <span className="engagement-node companies">Companies</span>
              <span className="engagement-node institutions">Institutions</span>
              <span className="engagement-node organizations">Organizations</span>
            </div>
          </div>
        </section>

        <section className="engagements-partners" aria-labelledby="engagements-partners-title">
          <div className="wrap">
            <div className="engagements-partners-head">
              <h2 id="engagements-partners-title">Our Partners</h2>
              <p>Companies, institutions and organizations that recognize and support our work.</p>
            </div>

            <div className="engagements-partners-grid">
              {partners.map((partner) => (
                <a
                  className="engagements-partner-logo"
                  href={partner.href}
                  key={partner.name}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${partner.name} website`}
                >
                  <img src={partner.logo} alt={partner.name} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default EngagementsPage
