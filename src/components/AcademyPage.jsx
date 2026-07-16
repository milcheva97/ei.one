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

function AcademyPage() {
  useEffect(() => {
    const title = 'Academy - EI.one'
    const description = 'The EI.one Academy turns learning into real, verified experience: practical courses, mentorship and hands-on projects that build your Experience Identity.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one academy, courses, mentorship, verified skills, experience identity, learning')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/academy', 'property')

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/academy')
  }, [])

  return (
    <>
      <Header languagePage="academy.php" />

      <main className="info-page">
        <section className="info-hero">
          <div className="wrap">
            <p className="eyebrow">Learn &amp; Grow</p>
            <h1>The Academy that turns learning into real experience.</h1>
            <p className="lead">
              Practical courses, mentorship and hands-on projects — every skill you build becomes a verified experience inside your Experience Identity.
            </p>
            <div className="actions">
              <a className="button" href="/experience-passport">Start with your Identity</a>
              <a className="button secondary" href="/education">School Ecosystem</a>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">What you get</p>
              <h2>Learning that counts, not just certificates.</h2>
              <p>The Academy connects courses, mentors and real projects so your growth is visible and useful.</p>
            </div>
            <div className="info-grid">
              <article className="info-card">
                <span className="info-ico"><i className="fa-solid fa-laptop-code" aria-hidden="true"></i></span>
                <h3>Practical courses</h3>
                <p>Learn by doing, with real challenges from companies inside the ecosystem — not abstract theory.</p>
              </article>
              <article className="info-card">
                <span className="info-ico"><i className="fa-solid fa-certificate" aria-hidden="true"></i></span>
                <h3>Verified skills</h3>
                <p>Every path you complete becomes an on-record experience in your Experience Identity, attested and shareable.</p>
              </article>
              <article className="info-card">
                <span className="info-ico"><i className="fa-solid fa-people-arrows" aria-hidden="true"></i></span>
                <h3>Mentorship</h3>
                <p>Grow alongside professionals from the ecosystem who guide your path and open real doors.</p>
              </article>
              <article className="info-card">
                <span className="info-ico"><i className="fa-solid fa-bridge" aria-hidden="true"></i></span>
                <h3>Bridge to work</h3>
                <p>Skills you build connect you directly to companies looking for exactly what you can do.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="info-section" style={{ background: 'var(--white)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">How it works</p>
              <h2>From first lesson to real opportunity.</h2>
            </div>
            <div className="info-steps">
              <div className="info-step"><span className="num">1</span><div><h4>Choose a path</h4><p>Pick a course or program aligned with where you want to grow.</p></div></div>
              <div className="info-step"><span className="num">2</span><div><h4>Learn &amp; build</h4><p>Work on hands-on projects with mentors and real feedback.</p></div></div>
              <div className="info-step"><span className="num">3</span><div><h4>Get verified</h4><p>Your results become a verified experience in your Identity.</p></div></div>
              <div className="info-step"><span className="num">4</span><div><h4>Get matched</h4><p>Verified skills connect you to companies and opportunities.</p></div></div>
            </div>
          </div>
        </section>

        <section className="info-cta-wrap">
          <div className="wrap">
            <div className="info-cta">
              <h2>Ready to start learning?</h2>
              <p>Build your Experience Identity and let every course you take become part of your story.</p>
              <div className="actions">
                <a className="button" href="/experience-passport">Start now</a>
                <a className="button secondary" href="/contact" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}>Talk to us</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default AcademyPage
