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

function JoinPage() {
  useEffect(() => {
    const title = 'Join - EI.one'
    const description = 'Choose how you want to grow with EI.one — as a company, a partner, in education, or as an individual. One ecosystem, four ways in.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one join, company, partner, education, individual, ecosystem, sign up')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/join', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/join')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="join.php" />

      <main className="join-page">
        <section className="join-hero">
          <div className="wrap">
            <p className="eyebrow">Join ei.one</p>
            <h1>How Do You Want to Grow?</h1>
            <p>This isn't a normal page — it's your way into the entire ecosystem. Choose your path.</p>
          </div>
        </section>

        <section className="join-paths">
          <div className="wrap">
            <div className="join-grid">
              <article className="join-card company">
                <span className="join-card-tag">I'm a company</span>
                <h2>Join the Ecosystem</h2>
                <ul>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>Buy</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>Sell</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>Build your Academy</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>Find Partners</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>Develop your People</li>
                </ul>
                <a className="button join-card-cta" href="/register">Join as Company</a>
              </article>

              <article className="join-card partner">
                <span className="join-card-tag">I'm a partner</span>
                <h2>Grow the Ecosystem</h2>
                <p className="join-card-lead">Become:</p>
                <ul>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>Ecosystem Connector</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>Ecosystem Expert</li>
                </ul>
                <a className="button join-card-cta" href="/partner">Become a Partner</a>
              </article>

              <article className="join-card education">
                <span className="join-card-tag">I'm in education</span>
                <h2>Connect Education with Business</h2>
                <ul>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>School</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>University</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>Training Providers</li>
                </ul>
                <a className="button join-card-cta" href="/education">Join Education</a>
              </article>

              <article className="join-card individual">
                <span className="join-card-tag">I'm an individual</span>
                <h2>Learn. Experience. Grow.</h2>
                <ul>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>Training</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>Experiences</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>Companies</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i>Opportunities</li>
                </ul>
                <a className="button join-card-cta" href="/register">Join EI.one</a>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default JoinPage
