import { useEffect } from 'react'

function setMeta(name, content, attr = 'name') {
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function RegisterPage() {
  useEffect(() => {
    const title = 'Register - EI.one'
    const description = 'Create your EI.one account and start building your Experience Identity inside the ecosystem.'
    document.title = title
    setMeta('description', description)
    setMeta('robots', 'noindex, follow')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/register')
  }, [])

  return (
    <main className="register-page">
      <section className="register-shell" aria-labelledby="register-title">
        <div className="register-brand">
          <a href="/en/index.php" aria-label="Back to ei.one home">
            <img src="/images/logo.png" alt="EI.one" />
          </a>
          <p className="register-kicker">Ecosystem Intelligence</p>
          <p>A Human-Centred Ecosystem for Sustainable Growth</p>
        </div>

        <form className="register-card" aria-label="Create account form">
          <label htmlFor="register-name">Name</label>
          <input id="register-name" type="text" autoComplete="name" />

          <label htmlFor="register-email">Email</label>
          <input id="register-email" type="email" autoComplete="email" />

          <label htmlFor="register-password">Password</label>
          <input id="register-password" type="password" autoComplete="new-password" />

          <label htmlFor="register-confirm-password">Confirm Password</label>
          <input id="register-confirm-password" type="password" autoComplete="new-password" />

          <div className="register-actions">
            <a href="/login">Already registered?</a>
            <button className="button" type="submit">Register</button>
          </div>
        </form>

        <div className="register-footer-links">
          <a href="/en/index.php">&larr; Back to ei.one</a>
          <span></span>
          <p>Experience. Education. Economy. Environment.</p>
        </div>
      </section>
    </main>
  )
}

export default RegisterPage
