import { WebGLShader } from './components/WebGLShader.jsx'
import EducationPage from './components/EducationPage.jsx'
import JoinPage from './components/JoinPage.jsx'
import PeoplePage from './components/PeoplePage.jsx'
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

  if (path.includes('/join')) {
    return <JoinPage />
  }

  if (path.includes('/people')) {
    return <PeoplePage />
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
    <section className="hero home-ecosystem-hero home-hero-shader" aria-labelledby="home-ecosystem-title">
      <div className="home-hero-shell">
        <div className="home-hero-head">
          <div className="home-hero-title-row">
            <span className="home-hero-line" aria-hidden="true"></span>
            <h1 id="home-ecosystem-title">The opportunity Ecosystem for everyone</h1>
            <span className="home-hero-line" aria-hidden="true"></span>
          </div>
          <p className="home-hero-subtitle">An ecosystem that combines artificial intelligence and human emotion.</p>
        </div>

        <div className="home-hero-primary-grid">
          <a className="home-hero-card home-enterprise-card" href="/ecosystem">
            <div className="home-card-copy">
              <span className="home-card-icon" aria-hidden="true"><i className="fa-solid fa-city"></i></span>
              <h2>Business</h2>
              <h3>Grow your business.</h3>
              <span className="home-card-rule"></span>
              <p>Find opportunities, access services and collaborate to grow your company.</p>
              <span className="home-card-button">Enter Business <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
            </div>
          </a>

          <a className="home-hero-card home-education-card" href="/people">
            <div className="home-card-copy">
              <span className="home-card-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
              <h2>People</h2>
              <h3>Learn. Grow. Achieve.</h3>
              <span className="home-card-rule"></span>
              <p>Access courses, real experiences and learning paths with companies and schools.</p>
              <span className="home-card-button">Discover your opportunities <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
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
          <div className="collab-marquee">
            <div className="collab-track">
              <img className="supsi-logo" src="/images/supsi-logo-black.svg" alt="SUPSI" />
              <img className="fachhochschule-logo" src="/images/fachhochschule.svg" alt="fachhochschule" />
              <img className="esg-center" src="/images/esg-center.png" alt="esg center of excellence" />
              <img src="/images/sva-zuerich.png" alt="SVA Zürich" />
              <img src="/images/innovation-zuerich.webp" alt="Innovation Zürich" />
              <img className="supsi-logo" src="/images/supsi-logo-black.svg" alt="" aria-hidden="true" />
              <img className="fachhochschule-logo" src="/images/fachhochschule.svg" alt="" aria-hidden="true" />
              <img className="esg-center" src="/images/esg-center.png" alt="" aria-hidden="true" />
              <img src="/images/sva-zuerich.png" alt="" aria-hidden="true" />
              <img src="/images/innovation-zuerich.webp" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-problem">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">The problem</p>
          <h2>Products exist. Opportunities don't connect.</h2>
          <p>Companies, people and education operate in separate worlds — but real growth happens when they work together.</p>
        </div>
        <div className="home-problem-grid">
          <article className="home-problem-card">
            <span className="home-problem-icon" aria-hidden="true"><i className="fa-solid fa-building"></i></span>
            <h3>Companies</h3>
            <p className="home-problem-sub">Have solutions.</p>
            <ul>
              <li>Great products and services</li>
              <li>Need new customers and wider distribution</li>
              <li>Struggle to reach and activate new people</li>
            </ul>
          </article>
          <article className="home-problem-card">
            <span className="home-problem-icon" aria-hidden="true"><i className="fa-solid fa-user"></i></span>
            <h3>People</h3>
            <p className="home-problem-sub">Look for opportunities.</p>
            <ul>
              <li>Want new sources of income</li>
              <li>Need practical skills and real experience</li>
              <li>Look for flexible, entrepreneurial opportunities</li>
            </ul>
          </article>
          <article className="home-problem-card">
            <span className="home-problem-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <h3>Education</h3>
            <p className="home-problem-sub">Builds knowledge.</p>
            <ul>
              <li>Provides valuable theory and skills</li>
              <li>Often disconnected from real business</li>
              <li>Students lack access to practical experience</li>
            </ul>
          </article>
        </div>
        <div className="home-problem-gaps" role="img" aria-label="Solutions without reach, talent without access, knowledge without opportunities — three disconnected worlds">
          <span className="gap-node gap-node-green">
            <span className="gap-node-icon" aria-hidden="true"><i className="fa-solid fa-store"></i></span>
            Solutions without reach
          </span>
          <span className="gap-link" aria-hidden="true"><span className="gap-x"><i className="fa-solid fa-xmark"></i></span></span>
          <span className="gap-node gap-node-blue">
            <span className="gap-node-icon" aria-hidden="true"><i className="fa-solid fa-user-group"></i></span>
            Talent without access
          </span>
          <span className="gap-link" aria-hidden="true"><span className="gap-x"><i className="fa-solid fa-xmark"></i></span></span>
          <span className="gap-node gap-node-orange">
            <span className="gap-node-icon" aria-hidden="true"><i className="fa-solid fa-lightbulb"></i></span>
            Knowledge without opportunities
          </span>
        </div>
        <p className="home-problem-note">These worlds are disconnected — a huge missed opportunity for people, companies and society.</p>
      </div>
    </section>

    <section className="home-insight">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">The insight</p>
          <h2>Every product can become an opportunity.</h2>
          <p>The same solution can generate value in two ways — for customers, and for people who want to learn, sell and earn.</p>
        </div>
        <div className="home-insight-source">
          <span className="home-example-badge">Featured Opportunity</span>
          <h3>AI Automation for SMEs</h3>
          <p className="home-example-tagline">Automate processes. Save time. Grow faster.</p>
          <ul className="home-example-specs">
            <li>
              <span className="k"><i className="fa-solid fa-coins" aria-hidden="true"></i> Price (for customers)</span>
              <span className="v">CHF 8'000</span>
            </li>
            <li>
              <span className="k"><i className="fa-solid fa-percent" aria-hidden="true"></i> Partner commission</span>
              <span className="v">15% <small>(CHF 1'200 per sale)</small></span>
            </li>
            <li>
              <span className="k"><i className="fa-solid fa-graduation-cap" aria-hidden="true"></i> Training required</span>
              <span className="v">2 hours</span>
            </li>
            <li>
              <span className="k"><i className="fa-solid fa-location-dot" aria-hidden="true"></i> Territory</span>
              <span className="v">Switzerland</span>
            </li>
            <li>
              <span className="k"><i className="fa-solid fa-building" aria-hidden="true"></i> Company</span>
              <span className="v">TechSolutions AG</span>
            </li>
          </ul>
        </div>
        <div className="home-insight-fan" aria-hidden="true">
          <svg className="home-insight-fan-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path className="fan-buy" d="M50 2 C 42 58, 26 52, 25 98" />
            <path className="fan-earn" d="M50 2 C 58 58, 74 52, 75 98" />
          </svg>
          <span className="fan-head fan-head-buy"></span>
          <span className="fan-head fan-head-earn"></span>
        </div>
        <div className="home-insight-grid">
          <article className="home-insight-card buy">
            <span className="home-insight-icon" aria-hidden="true"><i className="fa-solid fa-bag-shopping"></i></span>
            <h3>Buy</h3>
            <p className="home-insight-role">For customers</p>
            <p>Get the solution and improve your business.</p>
          </article>
          <article className="home-insight-card earn">
            <span className="home-insight-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <h3>Learn · Sell · <span className="hl-accent">Earn</span></h3>
            <p className="home-insight-role">For partners</p>
            <p>Learn it, represent it, and earn commissions on every sale.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="home-solution">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">The solution</p>
          <h2>One ecosystem. Real growth.</h2>
          <p>EI.one connects companies, people and knowledge in a single marketplace where every transaction creates opportunities, competence and growth.</p>
        </div>

        <div className="home-solution-split">
        <div className="home-cycle" role="img" aria-label="The EI.one loop: buy, learn, sell, earn and grow — a continuous cycle of opportunity">
          <svg className="cycle-svg" viewBox="0 0 560 560" aria-hidden="true">
            <defs>
              <marker id="cyc-green" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M0,0 L12,6 L0,12 Z" fill="#58C913" />
              </marker>
              <marker id="cyc-blue" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M0,0 L12,6 L0,12 Z" fill="#2EADD6" />
              </marker>
            </defs>
            <circle cx="280" cy="280" r="180" fill="none" stroke="#e6efe9" strokeWidth="1.5" />
            <path className="cyc-arrow" d="M370,124.1 A180,180 0 0 1 400.4,146.2" stroke="#58C913" markerEnd="url(#cyc-green)" />
            <path className="cyc-arrow" d="M456.1,317.4 A180,180 0 0 1 444.4,353.2" stroke="#2EADD6" markerEnd="url(#cyc-blue)" />
            <path className="cyc-arrow" d="M298.8,459 A180,180 0 0 1 261.2,459" stroke="#58C913" markerEnd="url(#cyc-green)" />
            <path className="cyc-arrow" d="M115.6,353.2 A180,180 0 0 1 103.9,317.4" stroke="#2EADD6" markerEnd="url(#cyc-blue)" />
            <path className="cyc-arrow" d="M159.6,146.2 A180,180 0 0 1 190,124.1" stroke="#58C913" markerEnd="url(#cyc-green)" />
          </svg>

          <div className="cycle-hub">
            <img src="/images/logo.png" alt="EI.one" />
          </div>

          <div className="cycle-node n1 green">
            <span className="cycle-num">01</span>
            <span className="cycle-ic" aria-hidden="true"><i className="fa-solid fa-cart-shopping"></i></span>
            <span className="cycle-text"><span className="cycle-name">Buy</span><span className="cycle-desc">Discover and purchase solutions</span></span>
          </div>
          <div className="cycle-node n2 blue">
            <span className="cycle-num">02</span>
            <span className="cycle-ic" aria-hidden="true"><i className="fa-solid fa-book-open"></i></span>
            <span className="cycle-text"><span className="cycle-name">Learn</span><span className="cycle-desc">Access academies and get certified</span></span>
          </div>
          <div className="cycle-node n3 green">
            <span className="cycle-num">03</span>
            <span className="cycle-ic" aria-hidden="true"><i className="fa-solid fa-chart-column"></i></span>
            <span className="cycle-text"><span className="cycle-name">Sell</span><span className="cycle-desc">Represent solutions and generate business</span></span>
          </div>
          <div className="cycle-node n4 blue">
            <span className="cycle-num">04</span>
            <span className="cycle-ic" aria-hidden="true"><i className="fa-solid fa-coins"></i></span>
            <span className="cycle-text"><span className="cycle-name">Earn</span><span className="cycle-desc">Receive commissions and incentives</span></span>
          </div>
          <div className="cycle-node n5 green">
            <span className="cycle-num">05</span>
            <span className="cycle-ic" aria-hidden="true"><i className="fa-solid fa-seedling"></i></span>
            <span className="cycle-text"><span className="cycle-name">Grow</span><span className="cycle-desc">Build experience and unlock new opportunities</span></span>
          </div>
        </div>

        <div className="home-solution-grid">
          <article className="home-solution-item">
            <span className="home-solution-icon" aria-hidden="true"><i className="fa-solid fa-building"></i></span>
            <div><h3>For companies</h3><p>More sales. Wider distribution. Engaged partners.</p></div>
          </article>
          <article className="home-solution-item">
            <span className="home-solution-icon" aria-hidden="true"><i className="fa-solid fa-user"></i></span>
            <div><h3>For people</h3><p>New income. New skills. Real opportunities.</p></div>
          </article>
          <article className="home-solution-item">
            <span className="home-solution-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <div><h3>For education</h3><p>Knowledge connected to real-world opportunities.</p></div>
          </article>
          <article className="home-solution-item">
            <span className="home-solution-icon" aria-hidden="true"><i className="fa-solid fa-seedling"></i></span>
            <div><h3>For society</h3><p>A more skilled, inclusive and sustainable economy.</p></div>
          </article>
        </div>
        </div>
        <div className="home-solution-pillars">
          <span><i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>AI matching</span>
          <span><i className="fa-solid fa-certificate" aria-hidden="true"></i>Verified experience</span>
          <span><i className="fa-solid fa-people-group" aria-hidden="true"></i>Trusted ecosystem</span>
          <span><i className="fa-solid fa-globe" aria-hidden="true"></i>Global impact</span>
        </div>
      </div>
    </section>

    <section className="home-twosides">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>Two sides. One ecosystem.</h2>
          <p>Companies bring solutions. People discover, learn, sell and earn. EI.one connects both sides and makes growth possible.</p>
        </div>
        <div className="home-twosides-grid">
          <article className="home-side business">
            <h3>For business</h3>
            <ol>
              <li><span>1</span>List your solution</li>
              <li><span>2</span>Create training</li>
              <li><span>3</span>Set commission</li>
              <li><span>4</span>Activate partners</li>
              <li><span>5</span>Generate sales</li>
            </ol>
            <a className="button home-side-cta" href="/partner">Join as a business partner</a>
          </article>

          <div className="home-engine">
            <div className="home-engine-row">
              <div className="engine-in from-business" aria-hidden="true">
                <span className="engine-label">Solutions<br />+ Training<br />+ Opportunities</span>
                <span className="engine-arrow green"><i className="fa-solid fa-arrow-right-long"></i></span>
              </div>
              <div className="home-engine-brand">
                <img src="/images/logo.png" alt="EI.one" />
                <span className="home-engine-sub">Opportunity Engine</span>
              </div>
              <div className="engine-in from-people" aria-hidden="true">
                <span className="engine-arrow blue"><i className="fa-solid fa-arrow-left-long"></i></span>
                <span className="engine-label">People<br />+ Skills<br />+ Sales<br />+ Growth</span>
              </div>
            </div>
            <p className="home-engine-note">Technology that creates opportunities</p>
          </div>

          <article className="home-side people">
            <h3>For people</h3>
            <ol>
              <li><span>1</span>Discover opportunities</li>
              <li><span>2</span>Learn and get certified</li>
              <li><span>3</span>Qualify as a partner</li>
              <li><span>4</span>Sell and earn</li>
              <li><span>5</span>Build your experience</li>
            </ol>
            <a className="button secondary home-side-cta" href="/register">Create your account</a>
          </article>
        </div>

        <div className="home-outcomes">
          <div className="home-outcome">
            <span className="home-outcome-icon green" aria-hidden="true"><i className="fa-solid fa-seedling"></i></span>
            <span className="home-outcome-text"><strong>More business</strong>for companies</span>
          </div>
          <div className="home-outcome">
            <span className="home-outcome-icon blue" aria-hidden="true"><i className="fa-solid fa-people-group"></i></span>
            <span className="home-outcome-text"><strong>More opportunities</strong>for people</span>
          </div>
          <div className="home-outcome">
            <span className="home-outcome-icon blue" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <span className="home-outcome-text"><strong>More relevant</strong>education</span>
          </div>
          <div className="home-outcome">
            <span className="home-outcome-icon green" aria-hidden="true"><i className="fa-solid fa-globe"></i></span>
            <span className="home-outcome-text"><strong>A stronger,</strong>more inclusive economy</span>
          </div>
        </div>
      </div>
    </section>

    <section className="home-ai">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">AI opportunity engine</p>
          <h2>Your skills. Our AI. Real opportunities.</h2>
          <p>Our AI analyzes your skills, experience, interests and goals to match you with the best opportunities — and shows you how to unlock them.</p>
        </div>

        <div className="home-ai-engine">
          <div className="ai-col ai-inputs">
            <span className="ai-pill"><i className="fa-regular fa-user" aria-hidden="true"></i>Skills &amp; Experience</span>
            <span className="ai-pill"><i className="fa-solid fa-bullseye" aria-hidden="true"></i>Interests &amp; Goals</span>
            <span className="ai-pill"><i className="fa-solid fa-location-dot" aria-hidden="true"></i>Location &amp; Availability</span>
          </div>
          <div className="ai-core">
            <span className="ai-core-title">AI</span>
            <span className="ai-core-sub">Opportunity Engine</span>
          </div>
          <div className="ai-col ai-outputs">
            <span className="ai-pill"><i className="fa-solid fa-chart-column" aria-hidden="true"></i>Market Demand</span>
            <span className="ai-pill"><i className="fa-solid fa-building" aria-hidden="true"></i>Company Needs</span>
            <span className="ai-pill"><i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>Learning Paths</span>
          </div>
        </div>

        <div className="home-ai-flow">
          <span>Match</span>
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          <span>Recommend</span>
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          <span>Guide</span>
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          <span>Grow</span>
        </div>
        <div className="home-ai-stats">
          <div><strong>10,000+</strong><span>Opportunities in the pipeline</span></div>
          <div><strong>95%</strong><span>AI match accuracy</span></div>
          <div><strong>3x</strong><span>Faster path to income</span></div>
        </div>
      </div>
    </section>

    <section className="home-journey">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">From customer to entrepreneur</p>
          <h2>A journey that creates value.</h2>
          <p>Every transaction can be the start of a new opportunity. Learn, earn, build experience and grow into the best version of yourself.</p>
        </div>
        <div className="home-journey-path">
          <svg className="journey-path-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="jp-grad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#2EADD6" />
                <stop offset="0.4" stopColor="#58C913" />
                <stop offset="1" stopColor="#58C913" />
              </linearGradient>
            </defs>
            <path d="M8,85 C18,82 22,75 29,71 C38,66 45,60 52,55 C61,49 68,44 75,38 C83,33 87,28 92,24" />
          </svg>

          <span className="path-arrow pa1" aria-hidden="true">
            <svg className="path-arrow-svg" viewBox="0 0 44 40"><path d="M5,36 C16,24 25,14 37,9" /><path d="M37,9 L28.5,8.5 M37,9 L33,16.5" /></svg>
          </span>
          <span className="path-arrow pa2" aria-hidden="true">
            <svg className="path-arrow-svg" viewBox="0 0 44 40"><path d="M5,36 C16,24 25,14 37,9" /><path d="M37,9 L28.5,8.5 M37,9 L33,16.5" /></svg>
          </span>
          <span className="path-arrow pa3" aria-hidden="true">
            <svg className="path-arrow-svg" viewBox="0 0 44 40"><path d="M5,36 C16,24 25,14 37,9" /><path d="M37,9 L28.5,8.5 M37,9 L33,16.5" /></svg>
          </span>
          <span className="path-arrow pa4" aria-hidden="true">
            <svg className="path-arrow-svg" viewBox="0 0 44 40"><path d="M5,36 C16,24 25,14 37,9" /><path d="M37,9 L28.5,8.5 M37,9 L33,16.5" /></svg>
          </span>

          <div className="path-node jp1 blue">
            <div className="path-card"><h4>Customer</h4><p>Discover and buy solutions.</p></div>
            <span className="path-dot" aria-hidden="true"></span>
            <span className="path-label">Access solutions</span>
          </div>
          <div className="path-node jp2 green">
            <div className="path-card"><h4>Learner</h4><p>Follow company trainings and get certified.</p></div>
            <span className="path-dot" aria-hidden="true"></span>
            <span className="path-label">Build skills</span>
          </div>
          <div className="path-node jp3 green">
            <div className="path-card"><h4>Seller</h4><p>Represent solutions and generate business.</p></div>
            <span className="path-dot" aria-hidden="true"></span>
            <span className="path-label">Earn income</span>
          </div>
          <div className="path-node jp4 green">
            <div className="path-card"><h4>Expert</h4><p>Gain experience and unlock new opportunities.</p></div>
            <span className="path-dot" aria-hidden="true"></span>
            <span className="path-label">Grow your impact</span>
          </div>
          <div className="path-node jp5 green">
            <div className="path-card"><h4>Entrepreneur</h4><p>Create your own business and grow.</p></div>
            <span className="path-dot" aria-hidden="true"></span>
            <span className="path-label">Create new opportunities</span>
          </div>
        </div>
        <div className="home-verified">
          <div className="hv-intro">
            <p className="hv-eyebrow">Verified experience profile</p>
            <h3>Your journey. Verified.</h3>
            <p>Every training, sale, project and achievement builds your verified experience profile — unlocking more opportunities over time.</p>
          </div>
          <div className="hv-right">
            <div className="hv-links">
              <div className="hv-item">
                <span className="hv-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
                <strong>Certifications</strong>
                <span>Verified skills</span>
              </div>
              <div className="hv-item">
                <span className="hv-icon" aria-hidden="true"><i className="fa-solid fa-chart-column"></i></span>
                <strong>Sales &amp; Results</strong>
                <span>Proven impact</span>
              </div>
              <div className="hv-item">
                <span className="hv-icon" aria-hidden="true"><i className="fa-solid fa-file-lines"></i></span>
                <strong>Projects</strong>
                <span>Real experience</span>
              </div>
              <div className="hv-item">
                <span className="hv-icon" aria-hidden="true"><i className="fa-regular fa-star"></i></span>
                <strong>Reviews</strong>
                <span>Trusted by others</span>
              </div>
            </div>
            <a className="home-gradient-btn" href="/contact">Start your journey today <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </section>

    <section className="home-model">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Business model</p>
          <h2>Shared value.<br /><span className="grad-text">Multiple revenue streams.</span></h2>
          <p>We grow when our ecosystem transacts, learns and succeeds — with fair, transparent and aligned incentives.</p>
        </div>
        <div className="home-model-layout">
          <article className="model-card membership">
            <div className="model-card-head">
              <span className="model-card-icon green" aria-hidden="true"><i className="fa-solid fa-building"></i></span>
              <div>
                <h3>Company membership</h3>
                <p className="model-card-sub">Access to the marketplace and partner network.</p>
              </div>
            </div>
            <ul className="model-checklist green">
              <li><i className="fa-solid fa-circle-check" aria-hidden="true"></i>List products and services</li>
              <li><i className="fa-solid fa-circle-check" aria-hidden="true"></i>Add training content</li>
              <li><i className="fa-solid fa-circle-check" aria-hidden="true"></i>Set commission structure</li>
              <li><i className="fa-solid fa-circle-check" aria-hidden="true"></i>Access qualified partners</li>
              <li><i className="fa-solid fa-circle-check" aria-hidden="true"></i>Analytics and reporting</li>
            </ul>
            <div className="model-fee">
              <strong>Monthly or annual fee</strong>
              <span>Recurring revenue for EI.one</span>
            </div>
          </article>

          <article className="model-card">
            <div className="model-card-head">
              <span className="model-card-icon blue" aria-hidden="true"><i className="fa-solid fa-coins"></i></span>
              <div>
                <h3>Transaction fee</h3>
                <p className="model-card-sub">We earn when business happens.</p>
              </div>
            </div>
            <div className="model-fee-highlight">
              <strong>5–20%</strong>
              <span>Commission per sale<br /><small>(depending on category)</small></span>
            </div>
            <ul className="model-checklist blue">
              <li><i className="fa-solid fa-circle-check" aria-hidden="true"></i>Automatic tracking and payouts</li>
              <li><i className="fa-solid fa-circle-check" aria-hidden="true"></i>Fair and transparent</li>
              <li><i className="fa-solid fa-circle-check" aria-hidden="true"></i>Aligned incentives for long-term growth</li>
            </ul>
          </article>

          <div className="model-card model-ecosystem">
            <div className="eco-flow top">
              <span>Solutions + Training + Commission</span>
              <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
            </div>
            <div className="eco-row">
              <div className="eco-node companies">
                <span className="eco-icon" aria-hidden="true"><i className="fa-solid fa-building"></i></span>
                <strong>Companies</strong>
                <span>Provide solutions, training and opportunities.</span>
              </div>
              <div className="eco-center">
                <img src="/images/logo.png" alt="EI.one" />
              </div>
              <div className="eco-node people">
                <span className="eco-icon" aria-hidden="true"><i className="fa-solid fa-people-group"></i></span>
                <strong>People</strong>
                <span>Buy, learn, sell and earn.</span>
              </div>
            </div>
            <div className="eco-flow bottom">
              <i className="fa-solid fa-arrow-left-long" aria-hidden="true"></i>
              <span>Transactions + Commissions + Growth</span>
            </div>
            <p className="eco-note">A self-reinforcing ecosystem</p>
          </div>

          <article className="model-card">
            <div className="model-card-head">
              <span className="model-card-icon indigo" aria-hidden="true"><i className="fa-solid fa-chart-column"></i></span>
              <div>
                <h3>Additional revenue streams</h3>
                <p className="model-card-sub">Growing the ecosystem with complementary services.</p>
              </div>
            </div>
            <div className="model-streams">
              <div className="model-stream">
                <span className="model-stream-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
                <strong>Academy &amp; Training</strong>
                <span>Premium courses</span>
              </div>
              <div className="model-stream">
                <span className="model-stream-icon" aria-hidden="true"><i className="fa-solid fa-microchip"></i></span>
                <strong>AI Tools</strong>
                <span>Personalized recommendations</span>
              </div>
              <div className="model-stream">
                <span className="model-stream-icon" aria-hidden="true"><i className="fa-solid fa-user-group"></i></span>
                <strong>Lead Generation</strong>
                <span>Qualified matches</span>
              </div>
              <div className="model-stream">
                <span className="model-stream-icon" aria-hidden="true"><i className="fa-solid fa-gem"></i></span>
                <strong>Premium Services</strong>
                <span>Events, consulting and more</span>
              </div>
            </div>
          </article>
        </div>
        <p className="home-model-note">A self-reinforcing ecosystem: more sales for companies, more income and skills for people, a stronger economy.</p>
      </div>
    </section>

    <section className="home-market">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Market &amp; positioning</p>
          <h2>A growing market.<br /><span className="grad-text">A unique position.</span></h2>
          <p>We operate at the intersection of business, education, people and impact — a multi-trillion-dollar opportunity with no single player connecting all four.</p>
        </div>

        <h3 className="home-market-subhead">A large and growing market</h3>
        <div className="home-market-stats">
          <article className="market-stat">
            <span className="market-stat-icon green" aria-hidden="true"><i className="fa-solid fa-chart-line"></i></span>
            <strong>$7.5T</strong>
            <p>Global e-commerce market (2026)</p>
            <span className="market-stat-src">Source: eMarketer</span>
          </article>
          <article className="market-stat">
            <span className="market-stat-icon blue" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <strong>$404B</strong>
            <p>Global EdTech market (2026)</p>
            <span className="market-stat-src">Source: HolonIQ</span>
          </article>
          <article className="market-stat">
            <span className="market-stat-icon indigo" aria-hidden="true"><i className="fa-solid fa-users"></i></span>
            <strong>$1.1T</strong>
            <p>Global HR &amp; skills development market</p>
            <span className="market-stat-src">Source: Grand View Research</span>
          </article>
          <article className="market-stat">
            <span className="market-stat-icon green" aria-hidden="true"><i className="fa-solid fa-seedling"></i></span>
            <strong>$12T</strong>
            <p>Sustainable &amp; green economy opportunities</p>
            <span className="market-stat-src">Source: UN / BCG</span>
          </article>
        </div>

        <div className="home-market-mid">
          <div className="home-quadrant" role="img" aria-label="Competitive positioning: EI.one sits in the human-impact, ecosystem-focused quadrant, apart from transaction- or automation-focused platforms">
            <span className="quad-arrow up" aria-hidden="true"></span>
            <span className="quad-arrow down" aria-hidden="true"></span>
            <span className="quad-arrow left" aria-hidden="true"></span>
            <span className="quad-arrow right" aria-hidden="true"></span>
            <span className="quad-axis top">More human impact</span>
            <span className="quad-axis bottom">More AI automation</span>
            <span className="quad-axis left">Transaction focused</span>
            <span className="quad-axis right">Ecosystem focused</span>
            <span className="quad-item" style={{ left: '24%', top: '20%' }}><i className="fa-solid fa-graduation-cap" style={{ color: '#2A73CC' }} aria-hidden="true"></i>Coursera</span>
            <span className="quad-item" style={{ left: '17%', top: '30%' }}><i className="fa-brands fa-shopify" style={{ color: '#95BF47' }} aria-hidden="true"></i>Shopify</span>
            <span className="quad-item" style={{ left: '36%', top: '30%' }}><i className="fa-brands fa-linkedin-in" style={{ color: '#0A66C2' }} aria-hidden="true"></i>LinkedIn</span>
            <span className="quad-item" style={{ left: '30%', top: '64%' }}><i className="fa-brands fa-amazon" style={{ color: '#FF9900' }} aria-hidden="true"></i>Amazon</span>
            <span className="quad-item" style={{ left: '26%', top: '80%' }}><i className="fa-solid fa-briefcase" style={{ color: '#1DBF73' }} aria-hidden="true"></i>Fiverr</span>
            <span className="quad-item" style={{ left: '62%', top: '62%' }}><i className="fa-solid fa-play" style={{ color: '#A435F0' }} aria-hidden="true"></i>Udemy</span>
            <span className="quad-item" style={{ left: '60%', top: '80%' }}><i className="fa-brands fa-upwork" style={{ color: '#14A800' }} aria-hidden="true"></i>Upwork</span>
            <span className="quad-item" style={{ left: '82%', top: '66%' }}><i className="fa-brands fa-salesforce" style={{ color: '#00A1E0' }} aria-hidden="true"></i>Salesforce</span>
            <span className="quad-eione" style={{ left: '76%', top: '22%' }}>
              <img src="/images/logo.png" alt="EI.one" />
            </span>
          </div>

          <div className="home-diff">
            <h3 className="home-market-subhead">What makes us different</h3>
            <article className="diff-item">
              <span className="diff-icon green" aria-hidden="true"><i className="fa-solid fa-diagram-project"></i></span>
              <div><strong>Unique integration</strong><p>The only platform connecting business, education, people and environment.</p></div>
            </article>
            <article className="diff-item">
              <span className="diff-icon blue" aria-hidden="true"><i className="fa-solid fa-microchip"></i></span>
              <div><strong>Human + AI</strong><p>Technology that empowers people, not replaces them.</p></div>
            </article>
            <article className="diff-item">
              <span className="diff-icon orange" aria-hidden="true"><i className="fa-solid fa-seedling"></i></span>
              <div><strong>Purpose-driven</strong><p>Every transaction creates economic, social and environmental value.</p></div>
            </article>
            <article className="diff-item">
              <span className="diff-icon indigo" aria-hidden="true"><i className="fa-solid fa-gem"></i></span>
              <div><strong>Ecosystem advantage</strong><p>Network effects, data intelligence and a trusted community.</p></div>
            </article>
          </div>
        </div>

        <h3 className="home-market-subhead">Our target segments</h3>
        <div className="home-segments">
          <div className="segment">
            <span className="segment-icon green" aria-hidden="true"><i className="fa-solid fa-building"></i></span>
            <strong>Companies</strong>
            <span>All sizes, across industries (especially SMEs)</span>
          </div>
          <div className="segment">
            <span className="segment-icon blue" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
            <strong>Educational Institutions</strong>
            <span>Schools, universities, training providers</span>
          </div>
          <div className="segment">
            <span className="segment-icon orange" aria-hidden="true"><i className="fa-solid fa-users"></i></span>
            <strong>Individuals</strong>
            <span>Students, professionals, career changers</span>
          </div>
          <div className="segment">
            <span className="segment-icon indigo" aria-hidden="true"><i className="fa-solid fa-globe"></i></span>
            <strong>Impact &amp; ESG Partners</strong>
            <span>Organizations focused on a sustainable future</span>
          </div>
        </div>
      </div>
    </section>

    <section className="home-traction">
      <div className="wrap">
        <div className="home-traction-head">
          <h2>Real progress.<br /><span className="grad-text">A massive opportunity ahead.</span></h2>
        </div>
        <div className="home-why">
          <div className="home-why-col">
            <h3 className="home-why-head">Why us</h3>
            <article className="why-item">
              <span className="why-icon" aria-hidden="true"><i className="fa-solid fa-heart"></i></span>
              <div><strong>Unique integration</strong><p>The only platform connecting business, education, people and environment.</p></div>
            </article>
            <article className="why-item">
              <span className="why-icon" aria-hidden="true"><i className="fa-solid fa-microchip"></i></span>
              <div><strong>Human + AI</strong><p>Technology that empowers people, not replaces them.</p></div>
            </article>
            <article className="why-item">
              <span className="why-icon" aria-hidden="true"><i className="fa-solid fa-people-group"></i></span>
              <div><strong>Real ecosystem</strong><p>Not just a marketplace, but a community that learns, earns and grows together.</p></div>
            </article>
            <article className="why-item">
              <span className="why-icon" aria-hidden="true"><i className="fa-solid fa-gem"></i></span>
              <div><strong>Execution capability</strong><p>Proven team, real partners and first revenues.</p></div>
            </article>
          </div>
          <div className="home-why-col">
            <h3 className="home-why-head">Why now</h3>
            <article className="why-item">
              <span className="why-icon" aria-hidden="true"><i className="fa-solid fa-chart-line"></i></span>
              <div><strong>Massive market shift</strong><p>AI is transforming work, creating demand for reskilling, new jobs and trusted solutions.</p></div>
            </article>
            <article className="why-item">
              <span className="why-icon" aria-hidden="true"><i className="fa-solid fa-seedling"></i></span>
              <div><strong>Growing demand for impact</strong><p>Companies and individuals seek sustainable, purpose-driven opportunities.</p></div>
            </article>
            <article className="why-item">
              <span className="why-icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
              <div><strong>Education needs real-world connection</strong><p>Schools and universities need stronger links to business.</p></div>
            </article>
            <article className="why-item">
              <span className="why-icon" aria-hidden="true"><i className="fa-solid fa-globe"></i></span>
              <div><strong>Global scalability</strong><p>Digital infrastructure allows us to scale fast and reach new markets worldwide.</p></div>
            </article>
          </div>
        </div>

        <div className="home-traction-inner">
          <div className="home-traction-stat"><strong>3,500+</strong><span>Registered users</span></div>
          <div className="home-traction-stat"><strong>120+</strong><span>Companies onboarded</span></div>
          <div className="home-traction-stat"><strong>15+</strong><span>Education partners</span></div>
          <div className="home-traction-stat"><strong>CHF 1.2M</strong><span>Transactions generated</span></div>
        </div>
      </div>
    </section>

    <section className="how-it-works" aria-labelledby="how-it-works-title">
      <div className="wrap">
        <div className="how-head">
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
                <text x="480" y="144" textAnchor="middle">EARN</text>
                <text x="280" y="410" textAnchor="middle">LEARN</text>
                <text x="80" y="144" textAnchor="middle">GROW</text>
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
