import { useEffect, useState } from 'react'
import { submitLogin } from '../lib/api.js'

function setMeta(name, content, attr = 'name') {
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function LoginPage() {
  const [status, setStatus] = useState('idle')

  async function handleLogin(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const email = (data.get('email') || '').toString().trim()
    const password = (data.get('password') || '').toString()

    if (!email || !password) {
      setStatus('invalid')
      return
    }

    setStatus('sending')
    try {
      const res = await submitLogin({ email, password, remember: data.get('remember') === 'on' })
      window.location.href = res.redirect || 'https://app.ei.one/dashboard'
    } catch (err) {
      setStatus(err?.status === 429 ? 'ratelimited' : 'error')
    }
  }

  useEffect(() => {
    const title = 'Login - EI.one'
    const description = 'Log in to EI.one and access your Experience Identity and ecosystem account.'
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
    canonical.setAttribute('href', 'https://ei.one/en/login')
  }, [])

  return (
    <main className="register-page login-page">
      <section className="register-shell login-shell" aria-label="Login">
        <div className="register-brand">
          <a href="/en/index.php" aria-label="Back to ei.one home">
            <img src="/images/logo.png" alt="EI.one" />
          </a>
          <p className="register-kicker">Ecosystem Intelligence</p>
          <p>A Human-Centred Ecosystem for Sustainable Growth</p>
        </div>

        <form className="register-card login-card" aria-label="Login form" onSubmit={handleLogin}>
          <label htmlFor="page-login-email">Email</label>
          <input id="page-login-email" name="email" type="email" autoComplete="email" autoFocus />

          <label htmlFor="page-login-password">Password</label>
          <input id="page-login-password" name="password" type="password" autoComplete="current-password" />

          <label className="login-remember" htmlFor="page-login-remember">
            <input id="page-login-remember" name="remember" type="checkbox" />
            <span>Remember me</span>
          </label>

          <div className="login-page-actions">
            <a href="/forgot-password">Forgot your password?</a>
            <button className="button" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Signing in…' : 'Log in'}
            </button>
          </div>

          {status === 'error' && (
            <p className="form-status form-status-error" role="alert">Invalid email or password. Please try again.</p>
          )}
          {status === 'invalid' && (
            <p className="form-status form-status-error" role="alert">Please enter your email and password.</p>
          )}
          {status === 'ratelimited' && (
            <p className="form-status form-status-error" role="alert">Too many attempts. Please wait a moment and try again.</p>
          )}
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

export default LoginPage
