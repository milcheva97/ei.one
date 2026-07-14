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

function AboutPage() {
  useEffect(() => {
    const title = 'About Us - EI.one'
    const description = 'EI.one transforms companies into engines of learning, innovation and growth inside an intelligent ecosystem.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one about us, ecosystem intelligence, learning, innovation, growth, ESG impact')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/about-us', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/about-us')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="about-us.php" />

      <main className="about-page">
        <section className="about-hero">
          <div className="wrap about-hero-grid">
            <div className="about-hero-copy">
              <div className="about-identity-pill" aria-label="Ecosystem Intelligence">
                <span>E</span>
                <strong>cosystem</strong>
                <span>I</span>
                <strong>ntelligence</strong>
              </div>
              <h1>About Us</h1>
              <p>
                ei.one isn't built to teach people or just to connect them. It exists to transform companies into engines of
                learning, innovation and growth. Every company that joins the ecosystem creates new commercial relationships,
                attracts talent, develops skills, increases its visibility, and generates measurable ESG impact.
              </p>
              <p className="about-hero-statement">The company is no longer just a workplace: it becomes a hub of value for society.</p>
            </div>

            <div className="about-hero-panel" aria-label="EI.one ecosystem outcomes">
              <div className="about-orbit">
                <div className="about-orbit-core">
                  <i className="fa-solid fa-network-wired" aria-hidden="true"></i>
                  <strong>ei.one</strong>
                </div>
                <span className="about-orbit-node learning"><i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>Learning</span>
                <span className="about-orbit-node growth"><i className="fa-solid fa-chart-line" aria-hidden="true"></i>Growth</span>
                <span className="about-orbit-node impact"><i className="fa-solid fa-leaf" aria-hidden="true"></i>Impact</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-founder">
          <div className="wrap about-founder-wrap">
            <div className="about-founder-card">
              <div className="about-founder-photo">
                <img src="/images/fabio-russo.jpg" alt="Fabio Russo" />
              </div>
              <div className="about-founder-copy">
                <div className="about-founder-badge">The Founder</div>
                <h2>Fabio Russo</h2>
                <p className="about-founder-role">CEO &amp; Founder</p>
                <p>
                  Entrepreneur and ecosystem builder. For over 15 years he's been developing projects that combine
                  sustainability, technology, human network and ethical growth.
                </p>
                <p>
                  He gave life to the <strong>EI Generation</strong> as a concrete response to the challenges of our time.
                  EI.one is the result of this journey.
                </p>
                <div className="about-founder-signals" aria-label="Founder focus areas">
                  <span>Sustainability</span>
                  <span>Technology</span>
                  <span>Human network</span>
                  <span>Ethical growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-generation">
          <div className="wrap about-generation-grid">
            <div className="about-generation-copy">
              <span className="about-generation-kicker">The EI Generation</span>
              <h2>The EI Generation</h2>
              <h3>We Are the EI Generation</h3>
              <p>
                The EI Generation consists of entrepreneurs, professionals, innovators, and talents who believe
                in a new development model.
              </p>
            </div>

            <div className="about-generation-manifesto">
              <p className="about-generation-label">A model where:</p>
              <ul>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i> Business serves people</li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i> Innovation has a positive impact</li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i> Growth is shared</li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i> Sustainability is strategic</li>
              </ul>
              <div className="about-generation-closing">
                <strong>We are not spectators of change.</strong>
                <strong>We are the architects of change.</strong>
                <span>EI.one is the home of the EI Generation.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-four-es">
          <div className="wrap">
            <div className="about-four-head">
              <h2>The four E's</h2>
              <p>ei.one holds four dimensions together. They are distinct but work as a single system.</p>
            </div>

            <div className="about-four-system">
              <div className="about-four-core">
                <strong>EI.ONE</strong>
                <span>system</span>
              </div>

              <article className="about-e-node experience">
                <i className="fa-solid fa-passport" aria-hidden="true"></i>
                <h3>Experience</h3>
                <p>Real and verified professional experiences — the heart of the Identity.</p>
              </article>

              <article className="about-e-node education">
                <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                <h3>Education</h3>
                <p>Continuous learning inside the companies of the ecosystem.</p>
              </article>

              <article className="about-e-node economy">
                <i className="fa-solid fa-briefcase" aria-hidden="true"></i>
                <h3>Economy</h3>
                <p>Economic growth built on synergy, not internal competition.</p>
              </article>

              <article className="about-e-node environment">
                <i className="fa-solid fa-leaf" aria-hidden="true"></i>
                <h3>Environment</h3>
                <p>Environmental sustainability with measurable and traceable projects.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-problems">
          <div className="wrap about-problems-grid">
            <div className="about-problems-copy">
              <h2>Answers to Global Problems</h2>
              <p>The EI Generation was born to address the real-world challenges and turn them into sustainable opportunities.</p>

              <div className="about-problem-list">
                <span><i className="fa-solid fa-chart-line" aria-hidden="true"></i> Economic crises</span>
                <span><i className="fa-solid fa-people-arrows" aria-hidden="true"></i> Social inequalities</span>
                <span><i className="fa-solid fa-temperature-half" aria-hidden="true"></i> Climate change</span>
                <span><i className="fa-solid fa-microchip" aria-hidden="true"></i> Digital transformation</span>
                <span><i className="fa-solid fa-handshake-slash" aria-hidden="true"></i> Loss of trust in traditional systems</span>
              </div>
            </div>

            <div className="about-problems-visual">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1300&q=82" alt="Bright office desk with analytics screen" />
              <div className="about-problems-card">
                <strong>We are not spectators of change</strong>
                <p>We are the designers of change. EI.one is the home of the EI Generation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-vision">
          <div className="wrap about-vision-grid">
            <div className="about-vision-statement">
              <h2>Our Vision</h2>
              <p>
                We believe the future belongs to ecosystems that can unite business and values, technology and humanity,
                growth and responsibility, profit and positive impact.
              </p>
              <strong>We follow no trends. We build structures that last.</strong>
            </div>

            <div className="about-vision-principles">
              <article>
                <i className="fa-solid fa-link" aria-hidden="true"></i>
                <h3>Uniting Business and Values</h3>
              </article>
              <article>
                <i className="fa-solid fa-robot" aria-hidden="true"></i>
                <h3>Technology and Humanity</h3>
              </article>
              <article>
                <i className="fa-solid fa-arrow-up-right-dots" aria-hidden="true"></i>
                <h3>Growth and Responsibility</h3>
              </article>
              <article>
                <i className="fa-solid fa-scale-balanced" aria-hidden="true"></i>
                <h3>Profit and Impact</h3>
              </article>
            </div>
          </div>
        </section>

        <section className="about-origin">
          <div className="wrap about-origin-grid">
            <div className="about-origin-copy">
              <span className="about-origin-kicker">Built from practice</span>
              <h2>Where ei.one comes from</h2>
              <p>
                ei.one was born from the concrete entrepreneurial experience of the founder and partners in the sectors that today
                make up the ecosystem: renewable energy, business development, digital &amp; marketing, IT &amp; AI, real estate.
                We're not theory. We're practice and structure.
              </p>
            </div>

            <div className="about-origin-flow">
              <article>
                <i className="fa-solid fa-solar-panel" aria-hidden="true"></i>
                <div>
                  <h3>Renewable Energy</h3>
                  <p>Energy transition and green solutions</p>
                </div>
              </article>
              <article>
                <i className="fa-solid fa-laptop-code" aria-hidden="true"></i>
                <div>
                  <h3>Digital &amp; Marketing</h3>
                  <p>Technological innovation and visibility</p>
                </div>
              </article>
              <article>
                <i className="fa-solid fa-network-wired" aria-hidden="true"></i>
                <div>
                  <h3>Network &amp; Franchising</h3>
                  <p>Scalable expansion and partnerships</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about-commitment">
          <div className="wrap about-commitment-grid">
            <div className="about-commitment-copy">
              <h2>Our Commitment</h2>
              <p>As the EI Generation, we commit every day to a better future.</p>
              <strong>We don't promise shortcuts. We build the future.</strong>
            </div>

            <div className="about-commitment-list">
              <article><i className="fa-solid fa-check" aria-hidden="true"></i>Create real value</article>
              <article><i className="fa-solid fa-check" aria-hidden="true"></i>Empower people</article>
              <article><i className="fa-solid fa-check" aria-hidden="true"></i>Build trust</article>
              <article><i className="fa-solid fa-check" aria-hidden="true"></i>Protect the environment</article>
              <article><i className="fa-solid fa-check" aria-hidden="true"></i>Innovate responsibly</article>
            </div>
          </div>
        </section>

        <section className="about-platform">
          <div className="wrap">
            <div className="about-platform-layout">
              <div className="about-platform-statement">
                <span>Beyond the platform</span>
                <h2>EI.one - More Than a Platform</h2>
                <p>EI.one is not just a project. It is much more.</p>
                <strong>For a smarter and more sustainable economy.</strong>
              </div>

              <div className="about-platform-list" aria-label="What EI.one is">
                <article>
                  <i className="fa-solid fa-diagram-project" aria-hidden="true"></i>
                  <div>
                    <h3>Ecosystem</h3>
                    <p>Integrated system of Business Units</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-people-group" aria-hidden="true"></i>
                  <div>
                    <h3>Movement</h3>
                    <p>A new entrepreneurial culture</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-share-nodes" aria-hidden="true"></i>
                  <div>
                    <h3>Network</h3>
                    <p>Real and strategic connections</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-server" aria-hidden="true"></i>
                  <div>
                    <h3>Operating System</h3>
                    <p>Infrastructure for business</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-copy" aria-hidden="true"></i>
                  <div>
                    <h3>Replicable Model</h3>
                    <p>International scalability</p>
                  </div>
                </article>
                <article>
                  <i className="fa-solid fa-seedling" aria-hidden="true"></i>
                  <div>
                    <h3>Sustainability</h3>
                    <p>ESG at the heart of everything</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="about-milestones">
          <div className="wrap">
            <div className="about-milestones-head">
              <h2>Milestones</h2>
              <p>Recognitions that demonstrate our concrete dedication to professional inclusion and social sustainability.</p>
            </div>

            <div className="about-milestone-feature">
              <div className="about-milestone-copy">
                <span>This-Priis - SVA Zürich</span>
                <p>
                  Three-time nominees at the This-Priis - the award founded by Matthias Widmer of SVA Zürich in 2006 to recognize companies that promote inclusion and professional integration of people with limitations.
                </p>
                <p>
                  For us it's not a trophy; it's confirmation that the way we build teams works, and it scales to the entire ecosystem.
                </p>
                <a href="https://svazurich.ch/" target="_blank" rel="noreferrer">Discover the award</a>
              </div>

              <a className="about-milestone-logo" href="https://svazurich.ch/" target="_blank" rel="noreferrer" aria-label="Visit SVA Zürich">
                <img src="/images/sva-zuerich.png" alt="SVA Zürich" />
              </a>
            </div>
          </div>
        </section>

        <section className="about-commitments-social">
          <div className="wrap">
            <div className="about-commitments-head">
              <h2>Our commitments</h2>
              <p>We believe businesses have a responsibility to contribute to a better world.</p>
            </div>

            <div className="about-milestone-feature reverse">
              <a className="about-milestone-logo" href="https://stiftung-togo.ch/" target="_blank" rel="noreferrer" aria-label="Visit Stiftung ToGo">
                <img src="/images/togo-opening-eyes.png" alt="ToGo opening eyes" />
              </a>

              <div className="about-milestone-copy">
                <span>Stiftung ToGo - Opening Eyes</span>
                <p>
                  We support the Swiss foundation Stiftung ToGo, which organizes free cataract operations in Togo. To date, the foundation has helped over 1,000 people recover their sight.
                </p>
                <p>
                  It's a concrete example of what we mean by "real value": a measurable, verifiable action that changes individual lives.
                </p>
                <a href="https://stiftung-togo.ch/" target="_blank" rel="noreferrer">Discover the foundation</a>
              </div>
            </div>
          </div>
        </section>

        <section className="about-final-cta">
          <div className="wrap">
            <div className="about-final-cta-box">
              <h2>Ready to enter?</h2>
              <p>Choose the right door for you: the business ecosystem, or the talent platform.</p>
              <div className="about-final-actions">
                <a href="/business-club">For Businesses</a>
                <a href="/talent">For Talents</a>
                <a href="/contact">Contact us</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default AboutPage
