import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { submitContact } from '../lib/api.js'

function ContactPage() {
  const [status, setStatus] = useState('idle')

  async function handleContactSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') || '').toString().trim()
    const email = (data.get('email') || '').toString().trim()
    const subject = (data.get('subject') || '').toString().trim()
    const message = (data.get('message') || '').toString().trim()

    if (!name || !email || !message) {
      setStatus('invalid')
      return
    }

    setStatus('sending')
    try {
      await submitContact({ name, email, subject, message })
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Header loginHref="/login" languagePage="contact" />

      <main>
        <section className="contact-hero">
          <div className="wrap contact-hero-grid">
            <div className="contact-hero-copy">
              <p className="contact-kicker">Contact</p>
              <h1>Get in Touch</h1>
              <p>
                Do you have questions about our ecosystem, modules, or partnership opportunities? Our team is ready to support you on your path to sustainability.
              </p>
              <div className="contact-hero-actions">
                <a className="button" href="#contact-form-section">Write to us</a>
                <a className="button secondary" href="/partner">Partnerships</a>
              </div>
            </div>

            <div className="contact-hero-panel contact-info-list" aria-label="Contact information">
              <article>
                <i className="fa-solid fa-map-location-dot" aria-hidden="true"></i>
                <div>
                  <h3>Headquarters</h3>
                  <p>Tödistrasse 56, 8810 Horgen, Switzerland</p>
                </div>
              </article>
              <article>
                <i className="fa-solid fa-envelope-open-text" aria-hidden="true"></i>
                <div>
                  <h3>Email &amp; Phone</h3>
                  <p><a href="mailto:info@ei.one">info@ei.one</a> <span>|</span> <a href="tel:+41448229000">+41 44 822 90 00</a></p>
                </div>
              </article>
              <article>
                <i className="fa-solid fa-clock" aria-hidden="true"></i>
                <div>
                  <h3>Hours</h3>
                  <p>Monday-Friday: 08:00-12:00 <span>|</span> 13:00-17:00</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact-form-section" className="contact-connect">
          <div className="wrap contact-form-wrap">
            <div className="contact-connect-copy">
              <h2>We Are Here for You</h2>
              <p>
                Fill out the form below to request information or contact us directly at our headquarters to explore EI Generation opportunities.
              </p>
            </div>

            <form id="contact-form" className="contact-form-panel" aria-label="Contact form" onSubmit={handleContactSubmit}>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" placeholder="Name" />
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" placeholder="Email" />
              <label htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" name="subject" type="text" placeholder="Subject" />
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" placeholder="Message" rows="6"></textarea>
              <button className="button" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="form-status form-status-success" role="status">
                  Thank you! Your message has been sent. We will get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="form-status form-status-error" role="alert">
                  Something went wrong. Please try again or email info@ei.one.
                </p>
              )}
              {status === 'invalid' && (
                <p className="form-status form-status-error" role="alert">
                  Please fill in all required fields.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ContactPage
