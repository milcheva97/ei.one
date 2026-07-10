import { WebGLShader } from './components/WebGLShader.jsx'
import EducationPage from './components/EducationPage.jsx'
import ExperiencePassportPage from './components/ExperiencePassportPage.jsx'
import EconomyPage from './components/EconomyPage.jsx'
import EnvironmentPage from './components/EnvironmentPage.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const path = window.location.pathname.toLowerCase()

  if (path.includes('/education')) {
    return <EducationPage />
  }

  if (path.includes('/experience-passport')) {
    return <ExperiencePassportPage />
  }

  if (path.includes('/economy')) {
    return <EconomyPage />
  }

  if (path.includes('/environment')) {
    return <EnvironmentPage />
  }

  return (
    <>
<Header />

  <main>
    <section className="hero">
      <WebGLShader />
      <div className="hero-inner">
        <div>
          <p className="eyebrow">Ecosystem Intelligence</p>
          <h1>The infrastructure that turns every collaboration <span className="hero-accent">into new opportunities for growth.</span></h1>
          <p className="hero-copy">EI.one connects <strong>companies, people and schools</strong> to turn every collaboration into new relationships, clients, talent and shared knowledge.</p>
          <p className="hero-copy">Every experience feeds a patrimony of value that makes the entire ecosystem stronger, smarter and more capable of growth.</p>
          <div className="actions">
            <a className="button" href="/business-club">I'm a company &rarr;</a>
            <a className="button secondary" href="/talent">I'm a person &rarr;</a>
            <a className="button secondary" href="/education">I'm a school &rarr;</a>
          </div>
        </div>
        <aside className="login-panel" id="login" aria-label="Login panel">
          <h2>Login</h2>
          <p>Enter the platform</p>
          <label className="field-label" htmlFor="login-email">Email</label>
          <input className="field" id="login-email" type="email" placeholder="you@email.com" />
          <label className="field-label" htmlFor="login-password">Password</label>
          <input className="field" id="login-password" type="password" placeholder="••••••••" />
          <div className="login-options">
            <a href="#">Forgot password?</a>
          </div>
          <a className="button full" href="#">Log in &rarr;</a>
          <p className="login-join">No account yet? <a className="text-link" href="/register">Join ei.one</a></p>
        </aside>
      </div>
    </section>
    <section className="protagonists" aria-labelledby="protagonists-title">
      <div className="wrap">
        <div className="protagonists-head">
          <h2 id="protagonists-title">Three protagonists. One same growth.</h2>
          <p>Experience is the raw material. ei.one turns it into value for all three.</p>
        </div>
        <div className="protagonists-grid">
          <article className="protagonist-card">
            <h3>For companies — Business growth</h3>
            <p>Turn internships, project work and mentoring into a channel of verified talent, trusted partnerships and qualified commercial network.</p>
            <p className="protagonist-quote">"Your experiences attract the best. The best grow your business."</p>
            <a className="protagonist-link" href="/economy">For companies &rarr;</a>
          </article>
          <article className="protagonist-card">
            <h3>For talents — Experience Passport</h3>
            <p>Transform internships, projects, mentoring and learning experiences into a verified record of your growth.</p>
            <p className="protagonist-quote">"Your experiences become your proof. Your proof becomes your opportunity."</p>
            <a className="protagonist-link" href="/experience-passport">For people &rarr;</a>
          </article>
          <article className="protagonist-card">
            <h3>For education — Academy growth</h3>
            <p>Connect learning paths, projects and mentoring into an ecosystem where skills become visible and development continues.</p>
            <p className="protagonist-quote">"When learning is connected, growth becomes measurable."</p>
            <a className="protagonist-link" href="/education">For Schools &rarr;</a>
          </article>
        </div>
      </div>
    </section>

    <section className="connections" aria-labelledby="connections-title">
      <div className="wrap">
        <div className="connections-head">
          <p className="connections-kicker">Network signals</p>
          <h2 id="connections-title">Who we're connected with</h2>
          <p>For clarity, here is the nature of each relationship below.</p>
        </div>
        <div className="connections-grid">
          <div className="connection-item">
            <a className="connection-logo logo-togo" href="https://stiftung-togo.ch/" target="_blank" rel="noopener" aria-label="ToGo opening eyes">
              <span>To<span className="red">Go</span> <span className="green">opening eyes</span></span>
            </a>
            <div className="connection-label">Supported Foundation</div>
          </div>
          <div className="connection-item">
            <a className="connection-logo logo-sva" href="https://svazurich.ch/" target="_blank" rel="noopener" aria-label="SVA Zurich">
              <span><strong>SVA</strong> Zürich</span>
            </a>
            <div className="connection-label">Award Received</div>
          </div>
          <div className="connection-item">
            <a className="connection-logo logo-innovation" href="https://www.standort-zuerich.ch/" target="_blank" rel="noopener" aria-label="Innovation Zurich">
              <span className="innovation-mark" aria-hidden="true"></span>
              <span>Innovation<br />Zurich</span>
            </a>
            <div className="connection-label">Local Network</div>
          </div>
          <div className="connection-item">
            <a className="connection-logo logo-eye" href="https://augenarztpraxis-baden.ch/" target="_blank" rel="noopener" aria-label="AugenarztpraxisPlus">
              AugenarztpraxisPlus
            </a>
            <div className="connection-label">Sponsor</div>
          </div>
          <div className="connection-item">
            <a className="connection-logo logo-sgo" href="https://www.sgo-verein.ch/" target="_blank" rel="noopener" aria-label="SGO Verein">
              <span>SGO</span>
              <small>www.sgo-verein.ch</small>
            </a>
            <div className="connection-label">Professional Network</div>
          </div>
        </div>
      </div>
    </section>

    <section className="platform-status" aria-labelledby="platform-status-title">
      <div className="wrap">
        <div className="status-panel">
          <div className="status-head">
            <p>Platform Status Today</p>
            <h2 id="platform-status-title">What is live now, and what comes next</h2>
          </div>
          <div className="status-grid">
            <div className="status-column live-column">
              <div className="status-badge">
                <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                Live today
              </div>
              <ul className="status-list">
                <li className="live"><i className="fa-solid fa-user-plus" aria-hidden="true"></i><span><strong>ei.one account</strong><small>Create your access and enter the platform.</small></span><em>Live</em></li>
                <li className="live"><i className="fa-solid fa-id-card" aria-hidden="true"></i><span><strong>Experience Identity</strong><small>Build a verified record of what you actually did.</small></span><em>Live</em></li>
                <li className="live"><i className="fa-solid fa-share-nodes" aria-hidden="true"></i><span><strong>Verified experiences</strong><small>Add and share experiences attested by companies.</small></span><em>Live</em></li>
                <li className="live"><i className="fa-solid fa-network-wired" aria-hidden="true"></i><span><strong>Business Units</strong><small>Connect with the active ecosystem network.</small></span><em>Live</em></li>
              </ul>
            </div>
            <div className="status-column soon-column">
              <div className="status-badge soon">
                <i className="fa-solid fa-clock" aria-hidden="true"></i>
                Coming soon
              </div>
              <ul className="status-list">
                <li className="soon"><i className="fa-solid fa-graduation-cap" aria-hidden="true"></i><span><strong>Academy</strong><small>Learning paths with sponsors and partners.</small></span><em>Soon</em></li>
                <li className="soon"><i className="fa-solid fa-magnifying-glass-chart" aria-hidden="true"></i><span><strong>Recruitment</strong><small>Companies searching on the Identity.</small></span><em>Soon</em></li>
                <li className="soon"><i className="fa-solid fa-store" aria-hidden="true"></i><span><strong>Extended Marketplace</strong><small>Broader access to ecosystem opportunities.</small></span><em>Planned</em></li>
                <li className="soon"><i className="fa-solid fa-link" aria-hidden="true"></i><span><strong>Credential verification</strong><small>On-chain verification for trusted records.</small></span><em>Planned</em></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="entry-doors" aria-labelledby="entry-title">
      <div className="wrap">
        <div className="entry-head">
          <h2 id="entry-title">Where do you want to enter?</h2>
          <p>ei.one is two things held together: an ecosystem of Business Units working in sync, and a platform that rewards the people who work inside it. Pick the right door for you.</p>
        </div>
        <div className="entry-grid">
          <article className="entry-card companies">
            <div className="entry-kicker">For companies</div>
            <h3>Activate the ecosystem.</h3>
            <p className="entry-copy">A system of specialised Business Units — energy, sales, marketing, IT &amp; AI, real estate, 3D — working together. Enter through one, benefit from all.</p>
            <ul className="entry-list">
              <li><i className="fa-solid fa-network-wired entry-check" aria-hidden="true"></i><span><strong>Business Ecosystem</strong><small>The Business Units in the network</small></span></li>
              <li><i className="fa-solid fa-handshake entry-check" aria-hidden="true"></i><span><strong>Become a Partner</strong><small>Franchise, license, white label</small></span></li>
              <li><i className="fa-solid fa-chart-line entry-check" aria-hidden="true"></i><span><strong>Sponsor &amp; Investor</strong><small>Presence and growth</small></span></li>
            </ul>
            <a className="entry-link" href="/business-club">Enter Companies &rarr;</a>
          </article>
          <article className="entry-card talents">
            <div className="entry-kicker">For talents</div>
            <h3>Build your Experience Identity.</h3>
            <p className="entry-copy">Learn through the Academy, accumulate verified experience inside the ecosystem's companies, get found when a company actually needs what you can do.</p>
            <ul className="entry-list">
              <li><i className="fa-solid fa-id-card entry-check" aria-hidden="true"></i><span><strong>Experience Identity</strong><small>Your verified CV</small></span><em className="entry-pill">Live</em></li>
              <li><i className="fa-solid fa-graduation-cap entry-check" aria-hidden="true"></i><span><strong>Academy</strong><small>Learn on the job</small></span><em className="entry-pill preview">Soon</em></li>
              <li><i className="fa-solid fa-magnifying-glass-chart entry-check" aria-hidden="true"></i><span><strong>Recruitment</strong><small>Get found</small></span><em className="entry-pill preview">Soon</em></li>
            </ul>
            <a className="entry-link" href="/talent">Enter Talents &rarr;</a>
          </article>
        </div>
      </div>
    </section>

    <section className="company-effects" aria-labelledby="company-effects-title">
      <div className="wrap">
        <div className="effects-head">
          <h2 id="company-effects-title">What changes for a company that joins ei.one</h2>
          <p>Five concrete effects that turn a business from "a workplace" into a hub of value for society.</p>
        </div>
        <div className="effects-grid">
          <article className="effect-card">
            <span className="effect-number">01</span>
            <span className="effect-icon" aria-hidden="true"><i className="fa-solid fa-handshake"></i></span>
            <h3>New commercial relationships</h3>
            <p>Access to the Business Units and the customers already operating inside the ecosystem.</p>
          </article>
          <article className="effect-card">
            <span className="effect-number">02</span>
            <span className="effect-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <h3>Talent attracted</h3>
            <p>The best people come to companies that offer experience verifiable in the Identity.</p>
          </article>
          <article className="effect-card">
            <span className="effect-number">03</span>
            <span className="effect-icon" aria-hidden="true"><i className="fa-solid fa-brain"></i></span>
            <h3>Skills developed</h3>
            <p>The workplace becomes a learning engine for the people who work in it.</p>
          </article>
          <article className="effect-card">
            <span className="effect-number">04</span>
            <span className="effect-icon" aria-hidden="true"><i className="fa-solid fa-eye"></i></span>
            <h3>Amplified visibility</h3>
            <p>Presence inside the marketplace and across ecosystem activations.</p>
          </article>
          <article className="effect-card">
            <span className="effect-number">05</span>
            <span className="effect-icon" aria-hidden="true"><i className="fa-solid fa-leaf"></i></span>
            <h3>Measurable ESG impact</h3>
            <p>Real indicators on sustainability, inclusion, and governance — verifiable.</p>
          </article>
        </div>
        <p className="effects-closing">The company is no longer just a workplace. It becomes a hub of value for society.</p>
      </div>
    </section>

    <section className="training-modules" aria-labelledby="training-title">
      <div className="wrap">
        <div className="training-head">
          <p className="training-kicker">Company learning engine</p>
          <h2 id="training-title">How the company trains and attests its people</h2>
          <p>Three modules — one to build skills, one to attest them, one to make them findable. Together they make the company a growth engine for the people who work there.</p>
        </div>
        <div className="training-grid">
          <a className="training-card academy" href="/academy">
            <span className="training-step">01</span>
            <span className="training-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <h3>1. Academy <span className="module-pill">Preview</span></h3>
            <p>Sponsors and partners of the ecosystem build the learning paths. You learn where you work.</p>
            <span className="training-link">Discover Academy&rarr;</span>
          </a>
          <a className="training-card identity" href="/experience-passport">
            <span className="training-step">02</span>
            <span className="training-icon" aria-hidden="true"><i className="fa-solid fa-passport"></i></span>
            <h3>2. Experience Identity <span className="module-pill live">Live</span></h3>
            <p>Your digital record of what you actually did. Verified by the ecosystem's companies who saw you do it.</p>
            <span className="training-link">Discover the Identity&rarr;</span>
          </a>
          <a className="training-card recruitment" href="/recruitment">
            <span className="training-step">03</span>
            <span className="training-icon" aria-hidden="true"><i className="fa-solid fa-handshake"></i></span>
            <h3>3. Recruitment <span className="module-pill">Preview</span></h3>
            <p>Companies hire on Identity experience, not CV keywords. The matches are real.</p>
            <span className="training-link">Discover Recruitment&rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <section className="why-now" aria-labelledby="why-now-title">
      <div className="wrap why-grid">
        <div className="why-copy">
          <h2 id="why-now-title">Why now</h2>
          <div className="why-points">
            <p><strong>The job market is changing fast.</strong> AI is rewriting roles faster than CVs can keep up. Résumés say less and less about what a person can actually do, and companies struggle more and more to find the right skills.</p>
            <p><strong>Our answer.</strong> Put real, verified experience at the centre — not keywords. Every entry in the Identity is attested by the company that gave you the work. It's a fairer, more honest way to show what you're worth.</p>
            <p><strong>How the ecosystem moves.</strong> Companies work together and train people on the job. People accumulate verified experience. That experience is what hiring companies search on. Value circulates.</p>
          </div>
        </div>
        <div className="why-media">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1300&q=82" alt="Bright office desk with computer analytics dashboard and plants" />
        </div>
      </div>
    </section>

    <section className="building" aria-labelledby="building-title">
      <div className="wrap">
        <div className="building-head">
          <h2 id="building-title">What we're building</h2>
        </div>
        <div className="building-callout">
          <div>ei.one isn't a services platform.</div>
          <div>It's the infrastructure that turns companies into hubs of learning, innovation and growth.</div>
        </div>
        <div className="building-grid">
          <article className="building-card">
            <span className="building-icon" aria-hidden="true"><i className="fa-solid fa-passport"></i></span>
            <h3>Verified experience</h3>
            <p>What you did, attested by the people who saw you do it.</p>
          </article>
          <article className="building-card">
            <span className="building-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <h3>Talents that grow</h3>
            <p>Room to discover what you're good at and develop it over time.</p>
          </article>
          <article className="building-card">
            <span className="building-icon" aria-hidden="true"><i className="fa-solid fa-handshake"></i></span>
            <h3>Real relationships</h3>
            <p>Networking measured in trust and real collaborations.</p>
          </article>
          <article className="building-card">
            <span className="building-icon" aria-hidden="true"><i className="fa-solid fa-arrows-rotate"></i></span>
            <h3>Integrated system</h3>
            <p>Experience, Education, Economy and Environment work as one.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="cta" id="contact">
      <div className="wrap cta-box">
        <div>
          <h2>Let's build it together.</h2>
          <p>Activate the ecosystem for your company, or start building your Experience Identity.</p>
        </div>
        <div className="actions" style={{ margin: 0 }}>
          <a className="button" href="/business-club">For Companies</a>
          <a className="button secondary" href="/talent">For Talents</a>
          <a className="button secondary" href="/contact">Contact us</a>
        </div>
      </div>
    </section>

    <section className="newsletter">
      <div className="wrap">
        <div>
          <h2>Stay up to date</h2>
          <p>Subscribe to the newsletter for updates from the ecosystem.</p>
        </div>
        <form className="newsletter-form">
          <input type="email" placeholder="Email address" aria-label="Email address" />
          <button className="button" type="submit">Subscribe</button>
        </form>
      </div>
    </section>

  </main>

  <Footer />

  <aside className="cookie" aria-label="Cookie notice">
    We use cookies to improve your experience. By continuing, you accept our privacy policy.
    <button className="button" onClick={(event) => event.currentTarget.closest('.cookie')?.remove()}>Accept</button>
  </aside>
    </>
  )
}

export default App
