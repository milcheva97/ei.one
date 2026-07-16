import { useState } from 'react'
import { submitNewsletter } from '../lib/api.js'

function NewsletterForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const email = (new FormData(form).get('email') || '').toString().trim()

    if (!email) {
      setStatus('invalid')
      return
    }

    setStatus('sending')
    try {
      await submitNewsletter({ email })
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email address" aria-label="Email address" />
      <button className="button" type="submit" disabled={status === 'sending'}>
        <i className="fa-solid fa-envelope" aria-hidden="true"></i>
        {status === 'sending' ? 'Sending…' : 'Subscribe'}
      </button>
      {status === 'success' && (
        <p className="form-status form-status-success" role="status">Thanks! You are subscribed.</p>
      )}
      {status === 'error' && (
        <p className="form-status form-status-error" role="alert">Something went wrong. Please try again.</p>
      )}
      {status === 'invalid' && (
        <p className="form-status form-status-error" role="alert">Please enter your email.</p>
      )}
    </form>
  )
}

export default NewsletterForm
