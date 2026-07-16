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

function RecruitmentPage() {
  useEffect(() => {
    const title = 'Recruitment - EI.one'
    const description = 'EI.one Recruitment matches companies and talent on real, verified experience — skills and experiences from the Experience Identity drive every match.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one recruitment, hiring, verified experience, talent matching, open positions, skills')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/recruitment', 'property')

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/recruitment')
  }, [])

  return (
    <>
      <Header languagePage="recruitment.php" />

      <main className="info-page">
        <section className="info-hero">
          <div className="wrap">
            <p className="eyebrow">Open Positions</p>
            <h1>Recruitment based on real, verified experience.</h1>
            <p className="lead">
              Companies in the ecosystem hire on what people can actually do — skills and experiences from your Identity drive every match, no résumés to sift through.
            </p>
            <div className="actions">
              <a className="button" href="/economy">For companies</a>
              <a className="button secondary" href="/talent">For talents</a>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Why it works</p>
              <h2>Hiring on evidence, not on claims.</h2>
              <p>Every experience in the ecosystem is attested by the company that issued it — so matches start from proof.</p>
            </div>
            <div className="info-grid">
              <article className="info-card">
                <span className="info-ico"><i className="fa-solid fa-bullseye" aria-hidden="true"></i></span>
                <h3>Skill-based matching</h3>
                <p>Roles are matched against verified Identity skills and experiences, not keywords on a CV.</p>
              </article>
              <article className="info-card">
                <span className="info-ico"><i className="fa-solid fa-shield-check" aria-hidden="true"></i></span>
                <h3>Verified candidates</h3>
                <p>Each experience is attested on record by the company that issued it — trust is built in.</p>
              </article>
              <article className="info-card">
                <span className="info-ico"><i className="fa-solid fa-bolt" aria-hidden="true"></i></span>
                <h3>Faster hiring</h3>
                <p>Less time sifting résumés, more time meeting the right people already close to your world.</p>
              </article>
              <article className="info-card">
                <span className="info-ico"><i className="fa-solid fa-seedling" aria-hidden="true"></i></span>
                <h3>Grow from within</h3>
                <p>Talents develop inside the ecosystem and step into roles where they are already known.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="info-section" style={{ background: 'var(--white)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">How it works</p>
              <h2>From Identity to the right role.</h2>
            </div>
            <div className="info-steps">
              <div className="info-step"><span className="num">1</span><div><h4>Build your Identity</h4><p>Collect verified experiences and skills in your Experience Identity.</p></div></div>
              <div className="info-step"><span className="num">2</span><div><h4>Get matched</h4><p>The ecosystem surfaces roles that fit what you can actually do.</p></div></div>
              <div className="info-step"><span className="num">3</span><div><h4>Connect</h4><p>Companies and talents meet on a foundation of real evidence.</p></div></div>
              <div className="info-step"><span className="num">4</span><div><h4>Grow</h4><p>Keep building experience and move forward inside the ecosystem.</p></div></div>
            </div>
          </div>
        </section>

        <section className="info-cta-wrap">
          <div className="wrap">
            <div className="info-cta">
              <h2>Find your next role — or your next hire.</h2>
              <p>Whether you are building a team or your career, the ecosystem connects you on what really matters: verified experience.</p>
              <div className="actions">
                <a className="button" href="/talent">Explore talents</a>
                <a className="button secondary" href="/contact" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}>Contact us</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default RecruitmentPage
