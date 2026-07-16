import { useState } from 'react'
import { submitLogin } from '../lib/api.js'

function HeroLogin() {
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
      const res = await submitLogin({ email, password })
      window.location.href = res.redirect || 'https://app.ei.one/dashboard'
    } catch (err) {
      setStatus(err?.status === 429 ? 'ratelimited' : 'error')
    }
  }

  return (
    <aside className="login-panel" id="login" aria-label="Login panel">
      <h2>Login</h2>
      <p>Enter the platform</p>
      <form onSubmit={handleLogin}>
        <label className="field-label" htmlFor="login-email">Email</label>
        <input className="field" id="login-email" name="email" type="email" placeholder="you@email.com" autoComplete="email" />
        <label className="field-label" htmlFor="login-password">Password</label>
        <input className="field" id="login-password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />
        <div className="login-options">
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <button className="button full" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Signing in…' : 'Log in →'}
        </button>
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
      <p className="login-join">No account yet? <a className="text-link" href="/register">Join ei.one</a></p>
    </aside>
  )
}

export default HeroLogin
