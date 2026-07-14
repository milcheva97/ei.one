import Header from './Header.jsx'
import Footer from './Footer.jsx'

function ContactPage() {
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

            <form id="contact-form" className="contact-form-panel" aria-label="Contact form">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" placeholder="Name" />
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" placeholder="Email" />
              <label htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" type="text" placeholder="Subject" />
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" placeholder="Message" rows="6"></textarea>
              <button className="button" type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ContactPage
