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

function ExperiencePassportPage() {
  useEffect(() => {
    const title = 'Experience Passport - EI.one Experience Identity'
    const description = 'The EI.one Experience Passport turns real work, learning, mentoring and projects into verified proof of what people can actually do.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one experience passport, experience identity, verified experience, talent profile, skills proof')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/experience-passport', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/experience-passport')
  }, [])

  return (
    <>
      <Header loginHref="#experience-login" languagePage="experience-passport.php" />

      <main className="experience-page">
        <section className="experience-hero">
          <div className="wrap experience-hero-grid">
            <div className="experience-hero-copy">
              <h1>Experience Identity</h1>
              <p>Your digital record of what you've actually done. Verified by the companies who had you do it, anchored on the blockchain as a credential that belongs to you forever.</p>
              <p className="experience-quote">"Your experiences build your future."</p>
            </div>

            <div className="experience-proof-map" id="experience-login" aria-label="Experience Identity proof flow">
              <div className="proof-orbit">
                <span className="proof-core"><i className="fa-solid fa-fingerprint" aria-hidden="true"></i></span>
                <span className="proof-node work"><i className="fa-solid fa-briefcase" aria-hidden="true"></i><strong>Work</strong></span>
                <span className="proof-node learn"><i className="fa-solid fa-graduation-cap" aria-hidden="true"></i><strong>Learn</strong></span>
                <span className="proof-node mentor"><i className="fa-solid fa-handshake" aria-hidden="true"></i><strong>Mentor</strong></span>
              </div>
              <div className="proof-lines">
                <div><span>01</span><strong>Do real work</strong></div>
                <div><span>02</span><strong>Get it verified</strong></div>
                <div><span>03</span><strong>Build your future</strong></div>
              </div>
            </div>
          </div>
        </section>
        
         <section className="human-center">
          <div className="wrap human-center-grid">
            <div className="human-center-copy">
              <h2>The CV is broken. The Identity fixes it.</h2>
              <p>A CV says whatever you want it to. It also says very little of substance: job titles, years, keywords. In the age of the AI transition, that's not enough for anyone — not for job seekers, not for employers.</p>
              <p>The Experience Identity is different. Every experience you add is attested by whoever had you do it — a company in the ecosystem, an Academy partner, a real project. What people see is your actual work, not your self-promotion.</p>
            </div>
            <div className="human-center-visual" aria-label="People connected through knowledge, education and shared opportunity">
              <img src="/images/identity.jpg" alt="identity" />
              <div className="human-center-glow"></div>
            </div>
          </div>
        </section>

        <section className="education-pillars">
          <div className="wrap">
            <div className="education-section-head">
              <h2>How it works</h2>
              <p>Three steps to build a Identity that actually shows what you can do.</p>
            </div>
            <div className="education-pillar-grid">
              <article>
                <i class="fa-solid fa-fingerprint"></i>
                <span className="training-step">01</span>
                <h3>Create your Identity</h3>
                <p>A unique digital profile with a shareable link. It's yours, it follows you across your whole working life, no matter where you work.</p>
              </article>
              <article>
                <i class="fa-solid fa-layer-group"></i>
                <span className="training-step">02</span>
                <h3>Collect verified experience</h3>
                <p>Every experience at an ecosystem company is attested by whoever had you do it and recorded on the blockchain as an immutable credential. Attachments, roles, results — all verifiable.</p>
              </article>
              <article>
                <i class="fa-solid fa-share-nodes"></i>
                <span className="training-step">03</span>
                <h3>Share when it counts</h3>
                <p>Choose field by field what's public, what's private, what's visible only to people with the link. You decide who sees what.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ExperiencePassportPage
