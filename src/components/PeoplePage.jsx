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
    setMeta('description', 'People — the human side of the EI.one ecosystem. Learn, build verified experience and grow.')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="people.php" />

      <main className="people-page">
        <section className="people-hero">
          <div className="wrap">
            <p className="eyebrow">People</p>
            <h1>Where people grow.</h1>
            <p className="people-hero-lead">The human side of the ecosystem — learn, build verified experience and turn it into real opportunities. This page is coming soon.</p>
            <div className="actions">
              <a className="button" href="/experience-passport">Start your Experience Identity</a>
              <a className="button secondary" href="/education">Explore Education</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default PeoplePage
