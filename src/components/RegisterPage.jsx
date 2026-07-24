import { useEffect, useState } from 'react'
import { submitRegistration } from '../lib/api.js'

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
  const [status, setStatus] = useState('idle')

  async function handleRegister(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') || '').toString().trim()
    const email = (data.get('email') || '').toString().trim()
    const password = (data.get('password') || '').toString()
    const passwordConfirmation = (data.get('password_confirmation') || '').toString()

    if (!name || !email || !password || !passwordConfirmation) {
      setStatus('invalid')
      return
    }
    if (password.length < 8) {
      setStatus('short')
      return
    }
    if (password !== passwordConfirmation) {
      setStatus('mismatch')
      return
    }

    setStatus('sending')
    try {
      await submitRegistration({ name, email, password, passwordConfirmation })
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus(err?.data?.error ? 'taken' : 'error')
    }
  }

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
          <a href="/" aria-label="Back to ei.one home">
            <img src="/images/logo.png" alt="EI.one" />
          </a>
          <p className="register-kicker">Ecosystem Intelligence</p>
          <p>A Human-Centred Ecosystem for Sustainable Growth</p>
        </div>

        <form className="register-card" aria-label="Create account form" onSubmit={handleRegister}>
          <label htmlFor="register-name">Name</label>
          <input id="register-name" name="name" type="text" autoComplete="name" />

          <label htmlFor="register-email">Email</label>
          <input id="register-email" name="email" type="email" autoComplete="email" />

          <label htmlFor="register-password">Password</label>
          <input id="register-password" name="password" type="password" autoComplete="new-password" />

          <label htmlFor="register-confirm-password">Confirm Password</label>
          <input id="register-confirm-password" name="password_confirmation" type="password" autoComplete="new-password" />

          <div className="register-actions">
            <a href="/login">Already registered?</a>
            <button className="button" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Register'}
            </button>
          </div>

          {status === 'success' && (
            <p className="form-status form-status-success" role="status">
              Registration request submitted. We will notify you by email once it is approved.
            </p>
          )}
          {status === 'taken' && (
            <p className="form-status form-status-error" role="alert">
              This email already has an account or a pending request. Try logging in instead.
            </p>
          )}
          {status === 'mismatch' && (
            <p className="form-status form-status-error" role="alert">
              The two passwords do not match.
            </p>
          )}
          {status === 'short' && (
            <p className="form-status form-status-error" role="alert">
              The password must be at least 8 characters.
            </p>
          )}
          {status === 'invalid' && (
            <p className="form-status form-status-error" role="alert">
              Please fill in all required fields.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status form-status-error" role="alert">
              Something went wrong. Please try again or email info@ei.one.
            </p>
          )}
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

export default RegisterPage
