import { useEffect } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const sponsors = [
  {
    name: 'AugenarztpraxisPlus',
    href: 'https://augenarztpraxis-baden.ch/',
    logo: '/images/augenarztpraxisplus.png',
  },
  {
    name: 'Garage Weber Monaco',
    href: 'https://www.garagewebermonaco.ch/',
    logo: '/images/garage-weber.svg',
  },
  {
    name: 'PM Solving',
    href: 'https://www.pmsolving.ch/',
    logo: '/images/pm-solving.svg',
  },
  {
    name: 'Netmaster',
    href: 'https://netmaster.ch/',
    logo: '/images/netmaster.png',
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

function SponsorPage() {
  useEffect(() => {
    const title = 'Sponsor - EI.one'
    const description = 'Support the EI.one ecosystem as a sponsor and help turn verified experience, education and sustainable projects into visible value.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one sponsor, ecosystem sponsor, sustainable growth, education sponsor, verified experience')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/sponsor', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/sponsor')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="sponsor.php" />

      <main className="sponsor-page">
        <section className="sponsor-hero">
          <div className="wrap sponsor-hero-grid">
            <div className="sponsor-hero-copy">
              <p className="sponsor-kicker">Sponsor</p>
              <h1>Support growth that can be verified.</h1>
              <p>
                Sponsoring EI.one means supporting a human-centred ecosystem where companies, talents and schools turn real experience into shared value.
              </p>
            </div>

            <div className="sponsor-hero-visual" aria-label="Sponsor impact model">
              <div className="sponsor-core">
                <i className="fa-solid fa-hand-holding-heart" aria-hidden="true"></i>
                <strong>Visible impact</strong>
              </div>
              <article className="sponsor-orbit-card education">
                <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                <span>Education</span>
              </article>
              <article className="sponsor-orbit-card experience">
                <i className="fa-solid fa-id-card" aria-hidden="true"></i>
                <span>Experience</span>
              </article>
              <article className="sponsor-orbit-card projects">
                <i className="fa-solid fa-leaf" aria-hidden="true"></i>
                <span>Projects</span>
              </article>
            </div>
          </div>
        </section>

        <section className="sponsor-partners-section">
          <div className="wrap">
            <div className="sponsor-section-heading">
              <p className="sponsor-kicker">Our sponsors</p>
              <h2>Companies supporting the EI.one ecosystem.</h2>
              <p>
                We are grateful to our sponsors for their trust, collaboration, and commitment to supporting
                innovation, education, and meaningful connections. Their contribution plays an essential role in helping us
                build a stronger, human-centered ecosystem.
              </p>
            </div>

            <div className="sponsor-logo-grid">
              {sponsors.map((sponsor) => (
                <a
                  className="sponsor-logo-card"
                  href={sponsor.href}
                  target="_blank"
                  rel="noreferrer"
                  key={sponsor.name}
                  aria-label={`Visit ${sponsor.name}`}
                >
                  <span className="sponsor-logo-frame">
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </span>
                  <span>{sponsor.name}</span>
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
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

export default SponsorPage
