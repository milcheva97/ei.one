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

function PartnerPage() {
  useEffect(() => {
    const title = 'Partners - EI.one'
    const description = 'Becoming an EI.one Partner means entering a human-centric, structured, and scalable ecosystem built for sustainable growth.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one partner, franchise partner, license partner, white label partner, ecosystem partnership')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/partner', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/partner')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="partner.php" />

      <main className="partner-page">
        <section className="partner-hero">
          <div className="wrap partner-hero-grid">
            <div className="partner-hero-copy">
              <h1>Partners</h1>
              <p>Building a sustainable future together. Becoming an EI.one Partner means entering a human-centric, structured, and scalable ecosystem.</p>
              <div className="partner-hero-actions">
                <a className="button" href="/en/contact.php">Start a Partnership</a>
                <a className="button secondary" href="/economy">Explore Enterprise</a>
              </div>
            </div>

            <div className="partner-hero-visual" aria-label="EI.one partner ecosystem models">
              <div className="partner-core">
                <i className="fa-solid fa-handshake" aria-hidden="true"></i>
                <strong>Shared growth</strong>
              </div>
              <div className="partner-model franchise">
                <strong>Franchise</strong>
              </div>
              <div className="partner-model license">
                <strong>License</strong>
              </div>
              <div className="partner-model white-label">
                <strong>White Label</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="partner-models" aria-labelledby="partner-models-title">
          <div className="wrap">
            <div className="partner-models-head">
              <h2 id="partner-models-title">Choose Your Model</h2>
              <p>Three ways to participate in the EI.one ecosystem, from full local leadership to modular activation and brand-integrated infrastructure.</p>
            </div>

            <div className="partner-model-board">
              <article className="partner-option recommended">
                <span className="partner-ribbon">Recommended</span>
                <div className="partner-option-icon"><i className="fa-solid fa-building" aria-hidden="true"></i></div>
                <div className="partner-option-title">
                  <h3>Franchise Partner</h3>
                  <p>Build your Local Ecosystem</p>
                </div>
                <p>The Franchise Partner is the official EI.one representative in a territory. They manage and develop the local ecosystem, coordinating modules, partners, and clients.</p>
                <div className="partner-option-block">
                  <h4>Who it's ideal for</h4>
                  <div className="partner-tags">
                    <span>Entrepreneurs</span>
                    <span>Regional Managers</span>
                    <span>Business Developers</span>
                    <span>Network Builders</span>
                  </div>
                </div>
                <div className="partner-option-block">
                  <h4>What's included</h4>
                  <ul>
                    <li>Exclusive territorial rights</li>
                    <li>Full EI.one brand</li>
                    <li>Access to all modules</li>
                    <li>Ongoing central support</li>
                    <li>Certified training</li>
                    <li>Governance system</li>
                  </ul>
                </div>
                <a className="button partner-option-button" href="/en/contact.php">Become a Franchise Partner</a>
              </article>

              <article className="partner-option">
                <div className="partner-option-icon"><i className="fa-solid fa-file-signature" aria-hidden="true"></i></div>
                <div className="partner-option-title">
                  <h3>License Partner</h3>
                  <p>Activate a Module in the System</p>
                </div>
                <p>The License Partner uses one or more EI.one modules within their own company. They remain independent but operate according to ecosystem standards.</p>
                <div className="partner-option-block">
                  <h4>Who it's ideal for</h4>
                  <div className="partner-tags">
                    <span>Existing companies</span>
                    <span>Consultants</span>
                    <span>Professional firms</span>
                    <span>Service providers</span>
                  </div>
                </div>
                <div className="partner-option-block">
                  <h4>What's included</h4>
                  <ul>
                    <li>Module usage license</li>
                    <li>Certified methodologies</li>
                    <li>Brand affiliation</li>
                    <li>Access to the network</li>
                    <li>Operational support</li>
                  </ul>
                </div>
                <a className="button partner-option-button outline" href="/en/contact.php">Activate a License</a>
              </article>

              <article className="partner-option">
                <div className="partner-option-icon"><i className="fa-solid fa-tag" aria-hidden="true"></i></div>
                <div className="partner-option-title">
                  <h3>White Label Partner</h3>
                  <p>Your Brand, Our Infrastructure</p>
                </div>
                <p>The White Label Partner uses EI.one technology, processes, and modules under their own brand. EI.one works "behind the scenes".</p>
                <div className="partner-option-block">
                  <h4>Who it's ideal for</h4>
                  <div className="partner-tags">
                    <span>Corporate</span>
                    <span>Large groups</span>
                    <span>International networks</span>
                    <span>Digital platforms</span>
                    <span>Industrial investors</span>
                  </div>
                </div>
                <div className="partner-option-block">
                  <h4>What's included</h4>
                  <ul>
                    <li>Customized system</li>
                    <li>Full infrastructure</li>
                    <li>Integrated modules</li>
                    <li>Strategic support</li>
                    <li>Global scalability</li>
                  </ul>
                </div>
                <a className="button partner-option-button outline" href="/en/contact.php">Request White Label</a>
              </article>
            </div>
          </div>
        </section>

        <section className="partner-comparison" aria-labelledby="partner-comparison-title">
          <div className="wrap">
            <div className="partner-comparison-head">
              <h2 id="partner-comparison-title">Model Comparison</h2>
            </div>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Franchise</th>
                    <th scope="col">License</th>
                    <th scope="col">White Label</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">EI.one Brand</th>
                    <td><span className="comparison-status yes"><i className="fa-solid fa-check" aria-hidden="true"></i>Complete</span></td>
                    <td><span className="comparison-status partial"><i className="fa-solid fa-circle-half-stroke" aria-hidden="true"></i>Partial</span></td>
                    <td><span className="comparison-status no"><i className="fa-solid fa-xmark" aria-hidden="true"></i>No</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Territorial Rights</th>
                    <td><span className="comparison-status yes"><i className="fa-solid fa-check" aria-hidden="true"></i>Exclusive</span></td>
                    <td><span className="comparison-status no"><i className="fa-solid fa-xmark" aria-hidden="true"></i>No</span></td>
                    <td><span className="comparison-status no"><i className="fa-solid fa-xmark" aria-hidden="true"></i>No</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Operational Autonomy</th>
                    <td>Medium</td>
                    <td>High</td>
                    <td>Maximum</td>
                  </tr>
                  <tr>
                    <th scope="row">Module Access</th>
                    <td><span className="comparison-status yes"><i className="fa-solid fa-check" aria-hidden="true"></i>All</span></td>
                    <td><span className="comparison-status partial"><i className="fa-solid fa-circle-half-stroke" aria-hidden="true"></i>Selected</span></td>
                    <td><span className="comparison-status yes"><i className="fa-solid fa-check" aria-hidden="true"></i>All</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Scalability</th>
                    <td>Very High</td>
                    <td>Medium</td>
                    <td>Maximum</td>
                  </tr>
                  <tr>
                    <th scope="row">Central Support</th>
                    <td><span className="comparison-status yes"><i className="fa-solid fa-check" aria-hidden="true"></i>Complete</span></td>
                    <td><span className="comparison-status yes"><i className="fa-solid fa-check" aria-hidden="true"></i>Operational</span></td>
                    <td><span className="comparison-status yes"><i className="fa-solid fa-check" aria-hidden="true"></i>Strategic</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="partner-benefits" aria-labelledby="partner-benefits-title">
          <div className="wrap">
            <div className="partner-benefits-head">
              <h2 id="partner-benefits-title">Why Become an EI.one Partner</h2>
              <p>By joining the EI Generation, you gain access to an already structured, tested, and sustainable growth-oriented ecosystem.</p>
            </div>

            <div className="partner-benefit-map">
              <div className="partner-benefit-core">
                <span>You are not just a partner.</span>
                <strong>You are a co-builder of the system.</strong>
              </div>

              <article className="partner-benefit-item">
                <span className="partner-benefit-icon"><i className="fa-solid fa-cubes" aria-hidden="true"></i></span>
                <div>
                  <h3>Structured Ecosystem</h3>
                  <p>Proven and functioning model</p>
                </div>
              </article>
              <article className="partner-benefit-item">
                <span className="partner-benefit-icon"><i className="fa-solid fa-headset" aria-hidden="true"></i></span>
                <div>
                  <h3>Continuous Support</h3>
                  <p>Dedicated assistance always available</p>
                </div>
              </article>
              <article className="partner-benefit-item">
                <span className="partner-benefit-icon"><i className="fa-solid fa-diagram-project" aria-hidden="true"></i></span>
                <div>
                  <h3>Access to Projects</h3>
                  <p>Real opportunities from the ecosystem</p>
                </div>
              </article>
              <article className="partner-benefit-item">
                <span className="partner-benefit-icon"><i className="fa-solid fa-globe" aria-hidden="true"></i></span>
                <div>
                  <h3>Ecosystem Network</h3>
                  <p>Connections with all the Business Units of the ecosystem</p>
                </div>
              </article>
              <article className="partner-benefit-item">
                <span className="partner-benefit-icon"><i className="fa-solid fa-seedling" aria-hidden="true"></i></span>
                <div>
                  <h3>ESG &amp; Impact Focus</h3>
                  <p>Sustainability as a strategy</p>
                </div>
              </article>
              <article className="partner-benefit-item">
                <span className="partner-benefit-icon"><i className="fa-solid fa-rocket" aria-hidden="true"></i></span>
                <div>
                  <h3>Sustainable Growth</h3>
                  <p>Controlled scalability</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="partner-approach" aria-labelledby="partner-approach-title">
          <div className="wrap">
            <div className="partner-approach-panel">
              <img src="/images/our-approach.jpg" alt="Business partners working together in a bright office" />
              <div className="partner-approach-copy">
                <h2 id="partner-approach-title">Our Approach</h2>
                <p>At EI.one, we believe in concrete values that guide every partnership. We are not looking for simple affiliates. We are looking for ecosystem leaders.</p>
              </div>
            </div>

            <div className="approach-values">
              <div><i className="fa-solid fa-eye" aria-hidden="true"></i><span>Transparency</span></div>
              <div><i className="fa-solid fa-handshake" aria-hidden="true"></i><span>Collaboration</span></div>
              <div><i className="fa-solid fa-trophy" aria-hidden="true"></i><span>Meritocracy</span></div>
              <div><i className="fa-solid fa-shield-halved" aria-hidden="true"></i><span>Responsibility</span></div>
              <div><i className="fa-solid fa-heart" aria-hidden="true"></i><span>Trust</span></div>
            </div>
          </div>
        </section>

        <section className="partner-final-cta" aria-labelledby="partner-final-title">
          <div className="wrap partner-final-inner">
            <p className="partner-final-kicker">Join the EI Generation</p>
            <h2 id="partner-final-title">Are you ready to be part of the EI Generation?</h2>
            <p>Discover the model that suits you best and start your journey.</p>
            <div className="partner-final-actions">
              <a className="button partner-final-primary" href="/en/contact.php">Become a Franchise Partner</a>
              <a className="button" href="/en/contact.php">Activate a License</a>
              <a className="button partner-final-outline" href="/en/contact.php">Request White Label</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default PartnerPage
