import { WebGLShader } from './components/WebGLShader.jsx'
import EducationPage from './components/EducationPage.jsx'
import AcademyPage from './components/AcademyPage.jsx'
import JoinPage from './components/JoinPage.jsx'
import ExperiencePassportPage from './components/ExperiencePassportPage.jsx'
import EconomyPage from './components/EconomyPage.jsx'
import EnvironmentPage from './components/EnvironmentPage.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import PartnerPage from './components/PartnerPage.jsx'
import InvestorPage from './components/InvestorPage.jsx'
import EntrepreneurPage from './components/EntrepreneurPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import SponsorPage from './components/SponsorPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import TalentPage from './components/TalentPage.jsx'
import BusinessClubPage from './components/BusinessClubPage.jsx'
import RegisterPage from './components/RegisterPage.jsx'
import LoginPage from './components/LoginPage.jsx'
import ForgotPasswordPage from './components/ForgotPasswordPage.jsx'
import EngagementsPage from './components/EngagementsPage.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const path = window.location.pathname.toLowerCase()

  if (path.includes('/education')) {
    return <EducationPage />
  }

  if (path.includes('/academy')) {
    return <AcademyPage />
  }

  if (path.includes('/join')) {
    return <JoinPage />
  }

  if (path.includes('/experience-passport')) {
    return <ExperiencePassportPage />
  }

  if (path.includes('/economy')) {
    return <EconomyPage />
  }

  if (path.includes('/projects')) {
    return <ProjectsPage />
  }

  if (path.includes('/environment')) {
    return <EnvironmentPage />
  }

  if (path.includes('/engagements')) {
    return <EngagementsPage />
  }

  if (path.includes('/sponsor')) {
    return <SponsorPage />
  }

  if (path.includes('/partner')) {
    return <PartnerPage />
  }

  if (path.includes('/investor')) {
    return <InvestorPage />
  }

  if (path.includes('/entrepreneur')) {
    return <EntrepreneurPage />
  }

  if (path.includes('/about') || path.includes('/about-us')) {
    return <AboutPage />
  }

  if (path.includes('/contact')) {
    return <ContactPage />
  }

  if (path.includes('/talent')) {
    return <TalentPage />
  }

  if (path.includes('/ecosystem') || path.includes('/business-club')) {
    return <BusinessClubPage />
  }

  if (path.includes('/register')) {
    return <RegisterPage />
  }

  if (path.includes('/forgot-password')) {
    return <ForgotPasswordPage />
  }

  if (path.includes('/login')) {
    return <LoginPage />
  }

  return (
    <>
<Header />

  <main>
    <section className="hero home-ecosystem-hero" aria-labelledby="home-ecosystem-title">
      <div className="home-hero-shell">
        <div className="home-hero-head">
          <h1 id="home-ecosystem-title">The opportunity Ecosystem for everyone</h1>
          <p className="home-hero-subtitle">EI.one connects companies, people, and education in one ecosystem where economic activity creates opportunities for business and fuels human development.</p>
        </div>

        <div className="home-hero-primary-grid">
          <a className="home-hero-card home-enterprise-card" href="/ecosystem">
            <div className="home-card-copy">
              <span className="home-card-icon" aria-hidden="true"><i className="fa-solid fa-city"></i></span>
              <h2>Ecosystem</h2>
              <h3>Grow your business.</h3>
              <span className="home-card-rule"></span>
              <p>Find opportunities, access services and collaborate to grow your company.</p>
              <span className="home-card-button">Enter Enterprise <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
            </div>
          </a>

          <a className="home-hero-card home-education-card" href="/education">
            <div className="home-card-copy">
              <span className="home-card-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
              <h2>Education</h2>
              <h3>Learn. Grow. Achieve.</h3>
              <span className="home-card-rule"></span>
              <p>Access courses, real experiences and learning paths with companies and schools.</p>
              <span className="home-card-button">Enter Education <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
            </div>
          </a>
        </div>

        <div className="home-hero-linkbar" aria-label="Ecosystem entry points">
          <a href="/experience-passport">
            <span className="home-linkbar-icon"><i className="fa-regular fa-user" aria-hidden="true"></i></span>
            <span><strong>Experience Passport</strong><small>Your profile. Your experiences. Your opportunities.</small></span>
          </a>
          <a href="/ecosystem">
            <span className="home-linkbar-icon blue"><i className="fa-solid fa-bag-shopping" aria-hidden="true"></i></span>
            <span><strong>Marketplace</strong><small>Discover and offer services, products and experiences.</small></span>
          </a>
          <a href="/partner">
            <span className="home-linkbar-icon"><i className="fa-regular fa-handshake" aria-hidden="true"></i></span>
            <span><strong>Ecosystem Partners</strong><small>Collaborate with selected partners and generate impact.</small></span>
          </a>
        </div>

        <div className="home-collaboration-strip" aria-label="Collaboration logos">
          <span>In collaboration with</span>
          <img className="supsi-logo"src="/images/supsi-logo-black.svg" alt="SUPSI"/>
          <img className="fachhochschule-logo"src="/images/fachhochschule.svg" alt="fachhochschule"/>
          <img className="esg-center"src="/images/esg-center.png" alt="esg center of excellence"/>
          <strong>Innosuisse</strong>
          <img src="/images/sva-zuerich.png" alt="SVA Zürich" />
          <img src="/images/innovation-zuerich.webp" alt="Innovation Zürich" />
        </div>
      </div>
    </section>
    <section className="what-is-ei" aria-labelledby="what-is-ei-title">
      <div className="wrap">
        <div className="what-is-ei-head">
          <span className="what-is-ei-eyebrow">What is EI.one?</span>
          <h2 id="what-is-ei-title">One Ecosystem for Business and Human Growth.</h2>
          <p>EI.one helps companies:</p>
        </div>
        <div className="what-is-ei-grid">
          <article className="what-is-ei-card">
            <span className="what-is-ei-icon" aria-hidden="true"><i className="fa-solid fa-arrow-trend-up"></i></span>
            <h3>Sell</h3>
            <p>Generate new sales.</p>
          </article>
          <article className="what-is-ei-card">
            <span className="what-is-ei-icon" aria-hidden="true"><i className="fa-solid fa-bag-shopping"></i></span>
            <h3>Buy</h3>
            <p>Access products, services, and expertise.</p>
          </article>
          <article className="what-is-ei-card">
            <span className="what-is-ei-icon" aria-hidden="true"><i className="fa-solid fa-handshake"></i></span>
            <h3>Connect</h3>
            <p>Build relationships with companies, professionals, and partners.</p>
          </article>
          <article className="what-is-ei-card">
            <span className="what-is-ei-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <h3>Learn</h3>
            <p>Train and develop your people.</p>
          </article>
          <article className="what-is-ei-card">
            <span className="what-is-ei-icon" aria-hidden="true"><i className="fa-solid fa-seedling"></i></span>
            <h3>Grow</h3>
            <p>Grow your business and expertise simultaneously.</p>
          </article>
        </div>
      </div>
    </section>
    <section className="how-it-works" aria-labelledby="how-it-works-title">
      <div className="wrap">
        <div className="how-head">
          <span className="how-eyebrow">How it works</span>
          <h2 id="how-it-works-title">The visual heart of the Ecosystem.</h2>
          <figure className="how-heart" role="img" aria-label="Growth cycle: Buy, Sell, Earn, Learn, Grow — repeating in a loop.">
            <svg viewBox="0 0 560 440" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="heartStroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#58C913" />
                  <stop offset="1" stopColor="#2EADD6" />
                </linearGradient>
              </defs>
              {/* heart outline — the closed loop */}
              <path
                d="M180,60 C240,60 280,100 280,140 C280,100 320,60 380,60 C440,60 480,108 480,160 C480,240 380,300 280,380 C180,300 80,240 80,160 C80,108 120,60 180,60 Z"
                fill="url(#heartStroke)"
                fillOpacity="0.06"
                stroke="url(#heartStroke)"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              {/* flow arrows (clockwise) */}
              <g fill="#58C913">
                <path d="M-7,-5 L6,0 L-7,5 Z" transform="translate(280,150) rotate(0)" />
                <path d="M-7,-5 L6,0 L-7,5 Z" transform="translate(452,103) rotate(60)" />
                <path d="M-7,-5 L6,0 L-7,5 Z" transform="translate(408,282) rotate(130)" />
                <path d="M-7,-5 L6,0 L-7,5 Z" transform="translate(152,282) rotate(215)" />
                <path d="M-7,-5 L6,0 L-7,5 Z" transform="translate(106,105) rotate(305)" />
              </g>
              {/* stage nodes */}
              <g className="how-heart-node">
                <circle cx="180" cy="60" r="8" fill="#ffffff" stroke="#58C913" strokeWidth="3.5" />
                <circle cx="380" cy="60" r="8" fill="#ffffff" stroke="#2EADD6" strokeWidth="3.5" />
                <circle cx="480" cy="160" r="8" fill="#ffffff" stroke="#F59E0B" strokeWidth="3.5" />
                <circle cx="280" cy="380" r="8" fill="#ffffff" stroke="#3949AB" strokeWidth="3.5" />
                <circle cx="80" cy="160" r="8" fill="#ffffff" stroke="#58C913" strokeWidth="3.5" />
              </g>
              {/* stage labels */}
              <g className="how-heart-label" fill="#10222E">
                <text x="180" y="40" textAnchor="middle">BUY</text>
                <text x="380" y="40" textAnchor="middle">SELL</text>
                <text x="502" y="166" textAnchor="start">EARN</text>
                <text x="280" y="410" textAnchor="middle">LEARN</text>
                <text x="58" y="166" textAnchor="end">GROW</text>
              </g>
              {/* center loop caption */}
              <g className="how-heart-center" textAnchor="middle">
                <text x="280" y="196" fill="#58C913" fontSize="26">&#8635;</text>
                <text x="280" y="226" fill="#10222E" fontSize="16">Every Transaction</text>
                <text x="280" y="248" fill="#10222E" fontSize="16">Creates Growth</text>
              </g>
            </svg>
          </figure>
        </div>
        <ol className="how-timeline">
          <li className="how-step">
            <span className="how-step-marker" aria-hidden="true"><i className="fa-solid fa-right-left"></i></span>
            <div className="how-step-body">
              <h3>Buy &amp; Sell</h3>
              <p>Companies and people transact in the Ecosystem.</p>
            </div>
          </li>
          <li className="how-step">
            <span className="how-step-marker" aria-hidden="true"><i className="fa-solid fa-coins"></i></span>
            <div className="how-step-body">
              <h3>Earn</h3>
              <p>Companies, Partners, and EI.one generate economic value.</p>
            </div>
          </li>
          <li className="how-step">
            <span className="how-step-marker" aria-hidden="true"><i className="fa-solid fa-arrows-rotate"></i></span>
            <div className="how-step-body">
              <h3>Reinvest</h3>
              <p>A portion of the value generated by the Ecosystem is reinvested in training and development.</p>
            </div>
          </li>
          <li className="how-step">
            <span className="how-step-marker" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <div className="how-step-body">
              <h3>Learn</h3>
              <p>Academies, schools, universities, and experts develop skills.</p>
            </div>
          </li>
          <li className="how-step">
            <span className="how-step-marker" aria-hidden="true"><i className="fa-solid fa-chart-line"></i></span>
            <div className="how-step-body">
              <h3>Grow</h3>
              <p>People and companies grow.</p>
            </div>
          </li>
          <li className="how-step">
            <span className="how-step-marker" aria-hidden="true"><i className="fa-solid fa-repeat"></i></span>
            <div className="how-step-body">
              <h3>Repeat</h3>
              <p>Growth generates new opportunities and new transactions.</p>
            </div>
          </li>
        </ol>
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
            <span className="protagonist-icon" aria-hidden="true"><i className="fa-solid fa-building"></i></span>
            <h3>For companies — Business growth</h3>
            <p>Turn internships, project work and mentoring into a channel of verified talent, trusted partnerships and qualified commercial network.</p>
            <p className="protagonist-quote">"Your experiences attract the best. The best grow your business."</p>
            <a className="protagonist-link" href="/economy">For companies &rarr;</a>
          </article>
          <article className="protagonist-card">
            <span className="protagonist-icon" aria-hidden="true"><i className="fa-solid fa-user"></i></span>
            <h3>For people — Personal growth</h3>
            <p>Every experience lived becomes an on-chain credential that belongs to you forever. An asset that follows you, independent of who had you do it.</p>
            <p className="protagonist-quote">"Your experiences build your future."</p>
            <a className="protagonist-link" href="/experience-passport">For people &rarr;</a>
          </article>
          <article className="protagonist-card">
            <span className="protagonist-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <h3>For schools — Growth of relevance</h3>
            <p>Turn students into talent recognised by the territory. Data-driven guidance, sponsored programs, direct bridge to companies.</p>
            <p className="protagonist-quote">"Your students' experiences become your prestige."</p>
            <a className="protagonist-link" href="/education">For schools &rarr;</a>
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
              <img src="/images/togo-opening-eyes.png" alt="ToGo opening eyes" />
            </a>
            <div className="connection-label">Supported Foundation</div>
          </div>
          <div className="connection-item">
            <a className="connection-logo logo-sva" href="https://svazurich.ch/" target="_blank" rel="noopener" aria-label="SVA Zurich">
              <img src="/images/sva-zuerich.png" alt="SVA Zürich" />
            </a>
            <div className="connection-label">Award Received</div>
          </div>
          <div className="connection-item">
            <a className="connection-logo logo-innovation" href="https://www.standort-zuerich.ch/" target="_blank" rel="noopener" aria-label="Innovation Zurich">
              <img src="/images/innovation-zuerich.webp" alt="Innovation Zurich" />
            </a>
            <div className="connection-label">Local Network</div>
          </div>
          <div className="connection-item">
            <a className="connection-logo logo-eye" href="https://augenarztpraxis-baden.ch/" target="_blank" rel="noopener" aria-label="AugenarztpraxisPlus">
              <img src="/images/augenarztpraxisplus.png" alt="AugenarztpraxisPlus" />
            </a>
            <div className="connection-label">Sponsor</div>
          </div>
          <div className="connection-item">
            <a className="connection-logo logo-sgo" href="https://www.sgo-verein.ch/" target="_blank" rel="noopener" aria-label="SGO Verein">
              <img src="/images/sgo.svg" alt="SGO Verein" />
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
            <a className="entry-link" href="/ecosystem">Enter Companies &rarr;</a>
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
            <span className="effect-icon" aria-hidden="true"><i className="fa-solid fa-handshake"></i></span>
            <h3>New commercial relationships</h3>
            <p>Access to the Business Units and the customers already operating inside the ecosystem.</p>
          </article>
          <article className="effect-card">
            <span className="effect-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <h3>Talent attracted</h3>
            <p>The best people come to companies that offer experience verifiable in the Identity.</p>
          </article>
          <article className="effect-card">
            <span className="effect-icon" aria-hidden="true"><i className="fa-solid fa-brain"></i></span>
            <h3>Skills developed</h3>
            <p>The workplace becomes a learning engine for the people who work in it.</p>
          </article>
          <article className="effect-card">
            <span className="effect-icon" aria-hidden="true"><i className="fa-solid fa-eye"></i></span>
            <h3>Amplified visibility</h3>
            <p>Presence inside the marketplace and across ecosystem activations.</p>
          </article>
          <article className="effect-card">
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
            <span className="training-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <h3>Academy <span className="module-pill">Preview</span></h3>
            <p>Sponsors and partners of the ecosystem build the learning paths. You learn where you work.</p>
            <span className="training-link">Discover Academy&rarr;</span>
          </a>
          <a className="training-card identity" href="/experience-passport">
            <span className="training-icon" aria-hidden="true"><i className="fa-solid fa-passport"></i></span>
            <h3>Experience Identity <span className="module-pill live">Live</span></h3>
            <p>Your digital record of what you actually did. Verified by the ecosystem's companies who saw you do it.</p>
            <span className="training-link">Discover the Identity&rarr;</span>
          </a>
          <a className="training-card recruitment" href="/recruitment">
            <span className="training-icon" aria-hidden="true"><i className="fa-solid fa-handshake"></i></span>
            <h3>Recruitment <span className="module-pill">Preview</span></h3>
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
          <img src="/images/why-now.jpg" alt="Why now" />
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
        <div className="cta-main">
          <h2>Let's build it together.</h2>
          <p>Activate the ecosystem for your company, or start building your Experience Identity.</p>
          <div className="actions cta-actions">
            <a className="button" href="/ecosystem">For Companies</a>
            <a className="button secondary" href="/talent">For Talents</a>
            <a className="button secondary" href="/contact">Contact us</a>
          </div>
        </div>
        <div className="cta-newsletter">
          <h3>Stay up to date</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <button className="button" type="submit">
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              Subscribe
            </button>
          </form>
        </div>
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
