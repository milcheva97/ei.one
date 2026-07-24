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

function ForgotPasswordPage() {
  useEffect(() => {
    const title = 'Forgot Password - EI.one'
    const description = 'Request an EI.one password reset link by email.'
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
    canonical.setAttribute('href', 'https://ei.one/en/forgot-password')
  }, [])

  return (
    <main className="register-page forgot-page">
      <section className="register-shell forgot-shell" aria-label="Forgot password">
        <div className="register-brand">
          <a href="/" aria-label="Back to ei.one home">
            <img src="/images/logo.png" alt="EI.one" />
          </a>
          <p className="register-kicker">Ecosystem Intelligence</p>
          <p>A Human-Centred Ecosystem for Sustainable Growth</p>
        </div>

        <form className="register-card forgot-card" aria-label="Password reset form">
          <p className="forgot-copy">
            Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
          </p>

          <label htmlFor="forgot-email">Email</label>
          <input id="forgot-email" type="email" autoComplete="email" autoFocus />

          <button className="button forgot-submit" type="submit">Email Password Reset Link</button>
        </form>

        <div className="register-footer-links">
          <a href="/">&larr; Back to ei.one</a>
          <span></span>
          <p>Experience. Education. Economy. Environment.</p>
        </div>
      </section>
    </main>
  )
}

export default ForgotPasswordPage
