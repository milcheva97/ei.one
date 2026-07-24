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

function ComingSoonPage() {
  useEffect(() => {
    document.title = 'Coming Soon - EI.one'
    setMeta('description', 'This section of the EI.one ecosystem is coming soon.')
    setMeta('robots', 'noindex, follow')
  }, [])

  return (
    <>
      <Header />

      <main className="info-page">
        <section className="info-hero">
          <div className="wrap">
            <p className="eyebrow">Ecosystem Intelligence</p>
            <h1>Coming Soon</h1>
            <p className="lead">
              This part of the ecosystem is on its way. We are building it right now — check back shortly.
            </p>
            <div className="actions">
              <a className="button" href="/">Back to Home</a>
              <a className="button secondary" href="/contact">Contact us</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ComingSoonPage
