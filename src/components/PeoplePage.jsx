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

function PeoplePage() {
  useEffect(() => {
    const title = 'People - EI.one'
    document.title = title
    setMeta('description', 'People — the human side of the EI.one ecosystem. Learn, build verified experience, sell, earn and grow into your best.')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="people.php" />

      <main className="people-page">
        <section className="people-hero">
          <div className="wrap people-hero-grid">
            <div className="people-hero-copy">
              <p className="people-kicker">People</p>
              <h1>Where people <span className="people-hl">learn, earn and grow</span>.</h1>
              <p>The human side of the ecosystem. Turn what you know into verified experience, discover real opportunities, and grow into the best version of yourself — with companies and schools by your side.</p>
              <div className="people-hero-actions">
                <a className="button" href="/experience-passport">Start your Experience Identity</a>
                <a className="button secondary" href="/education">Explore Education</a>
              </div>
              <div className="people-hero-stats" aria-label="What people gain">
                <div><strong>Learn</strong><span>Real skills</span></div>
                <div><strong>Earn</strong><span>New income</span></div>
                <div><strong>Grow</strong><span>Verified experience</span></div>
              </div>
            </div>

            <div className="people-hero-visual" aria-label="Your journey on EI.one">
              <div className="people-panel">
                <span className="people-panel-row">
                  <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                  <span><strong>Learn new skills</strong><small>Courses, mentorship and real projects.</small></span>
                </span>
                <span className="people-panel-row">
                  <i className="fa-solid fa-certificate" aria-hidden="true"></i>
                  <span><strong>Build verified experience</strong><small>Every project and review counts.</small></span>
                </span>
                <span className="people-panel-row">
                  <i className="fa-solid fa-hand-holding-dollar" aria-hidden="true"></i>
                  <span><strong>Sell &amp; earn</strong><small>Represent solutions, earn commissions.</small></span>
                </span>
                <span className="people-panel-row">
                  <i className="fa-solid fa-seedling" aria-hidden="true"></i>
                  <span><strong>Grow your future</strong><small>From first opportunity to entrepreneur.</small></span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default PeoplePage
