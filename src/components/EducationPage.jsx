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

function EducationPage() {
  useEffect(() => {
    const title = 'Education - EI.one School Ecosystem & Academy'
    const description = 'EI.one Education connects school ecosystems, academy journeys and verified experiences so learning becomes visible, attestable and useful for future opportunities.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one education, school ecosystem, academy, experience identity, verified learning, talents, skills')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/education', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/education')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="education.php" />

      <main className="education-page">
        <section className="education-hero">
          <div className="wrap education-hero-grid">
            <div>
              <p className="education-kicker">Schools</p>
              <h1>Turn experience into growth of relevance.</h1>
              <p>Transform your students into talent recognised by the territory. Data-driven guidance, sponsored programs, direct bridge with companies. Your students' experiences become your prestige.</p>
            </div>
            <div className="education-hero-card" id="education-login">
              <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=84" alt="Students collaborating in a bright learning environment" />
              <div>
                <strong>School Ecosystem</strong>
                <span>Learning, mentoring, projects and verified experiences connected in one growth path.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="human-center">
          <div className="wrap human-center-grid">
            <div className="human-center-copy">
              <h2>The Human at the Center</h2>
              <p>Humans are at the center of every sustainable development. For us, social sustainability means combining economic progress with responsibility towards people, communities, and future generations.</p>
              <p>At EI.one, we believe that sustainable innovation can only emerge when people have access to knowledge, education, and new opportunities. That is why we promote a corporate culture based on collaboration, trust, diversity, and personal development.</p>
            </div>
            <div className="human-center-visual" aria-label="People connected through knowledge, education and shared opportunity">
              <img src="/images/human-at-center.png" alt="People collaborating around a table in a bright learning community" />
              <div className="human-center-glow"></div>
            </div>
          </div>
        </section>

        <section className="education-pillars">
          <div className="wrap">
            <div className="education-section-head">
              <h2>Education & Networking</h2>
              <p>Our ecosystem connects companies, talents, educational institutions, and experts to share knowledge and create new opportunities.</p>
            </div>
            <div className="education-pillar-grid">
              <article>
                <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                <h3>Education Initiatives</h3>
                <p>Continuous development and skill building.</p>
              </article>
              <article>
                <i className="fa-solid fa-users-viewfinder" aria-hidden="true"></i>
                <h3>Talent Promotion</h3>
                <p>Helping people reach their full potential.</p>
              </article>
              <article>
                <i className="fa-solid fa-handshake-simple" aria-hidden="true"></i>
                <h3>Cooperation</h3>
                <p>Innovation through collaboration across borders.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="human-center">
          <div className="wrap human-center-grid">
            <div className="human-center-copy">
              <h2>Inclusive & Human Economy</h2>
              <p>Social sustainability for us also means promoting new forms of collaboration. In an increasingly connected world, innovation and progress no longer arise in isolation but through cooperation between people, companies, and organizations.</p>
              <p>EI.one supports this development through a globally oriented network that brings together talents, ideas, and projects. Our goal is to promote an economy that is human, inclusive, and future-oriented.</p>
            </div>
            <div className="human-center-visual" aria-label="People connected through knowledge, education and shared opportunity">
              <img src="/images/inclusive.jpg" alt="inclusive and human economy" />
              <div className="human-center-glow"></div>
            </div>
          </div>
        </section>

        <section className="education-cta">
          <div className="wrap education-cta-box">
            <div>
              <h2>Developing Solutions Together</h2>
              <p>Become part of a community based on trust and human growth.</p>
            </div>
            <div className="education-actions">
              <a className="button secondary" href="/en/talent.php">Become a Talent</a>
              <a className="button" href="/en/contact.php">Contact</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default EducationPage
