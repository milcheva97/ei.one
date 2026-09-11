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

function PeoplePage() {
  useEffect(() => {
    const title = 'People - EI.one'
    document.title = title
    setMeta('description', 'People — the human side of the EI.one ecosystem. Learn, build verified experience, sell, earn and grow into your best.')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="people.php" />

      <main className="people-page">
        <section className="people-hero">
          <div className="wrap people-hero-grid">
            <div className="people-hero-copy">
              <p className="people-kicker">People</p>
              <h1>Where people <span className="people-hl">learn, earn and grow</span>.</h1>
              <p>The human side of the ecosystem. Turn what you know into verified experience, discover real opportunities, and grow into the best version of yourself — with companies and schools by your side.</p>
              <div className="people-hero-actions">
                <a className="button" href="/experience-passport">Start your Experience Identity</a>
                <a className="button secondary" href="/education">Explore Education</a>
              </div>
              <div className="people-hero-stats" aria-label="What people gain">
                <div><strong>Learn</strong><span>Real skills</span></div>
                <div><strong>Earn</strong><span>New income</span></div>
                <div><strong>Grow</strong><span>Verified experience</span></div>
              </div>
            </div>

            <div className="people-hero-visual" aria-label="Your journey on EI.one">
              <div className="people-panel">
                <span className="people-panel-row">
                  <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                  <span><strong>Learn new skills</strong><small>Courses, mentorship and real projects.</small></span>
                </span>
                <span className="people-panel-row">
                  <i className="fa-solid fa-certificate" aria-hidden="true"></i>
                  <span><strong>Build verified experience</strong><small>Every project and review counts.</small></span>
                </span>
                <span className="people-panel-row">
                  <i className="fa-solid fa-hand-holding-dollar" aria-hidden="true"></i>
                  <span><strong>Sell &amp; earn</strong><small>Represent solutions, earn commissions.</small></span>
                </span>
                <span className="people-panel-row">
                  <i className="fa-solid fa-seedling" aria-hidden="true"></i>
                  <span><strong>Grow your future</strong><small>From first opportunity to entrepreneur.</small></span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="talent-audience" aria-labelledby="talent-audience-title">
          <div className="wrap talent-audience-grid">
            <div className="talent-audience-copy">
              <p className="talent-kicker">Who it's for</p>
              <h2 id="talent-audience-title">For people who see work as real growth.</h2>
              <p>ei.one speaks to those who live work as real growth, not just as a position.</p>
            </div>

            <div className="talent-audience-board">
              <article>
                <span><i className="fa-solid fa-rocket" aria-hidden="true"></i></span>
                <div>
                  <h3>Young people looking for their path</h3>
                  <p>you want to discover where you fit, without relying only on the first CV you send out.</p>
                </div>
              </article>
              <article>
                <span><i className="fa-solid fa-route" aria-hidden="true"></i></span>
                <div>
                  <h3>Those who want to change</h3>
                  <p>a Identity that tells your experiences better than any pitch.</p>
                </div>
              </article>
              <article>
                <span><i className="fa-solid fa-user-tie" aria-hidden="true"></i></span>
                <div>
                  <h3>Experienced professionals</h3>
                  <p>you crystallize years of work into a profile that proves itself and lets you be found.</p>
                </div>
              </article>
              <article>
                <span><i className="fa-solid fa-seedling" aria-hidden="true"></i></span>
                <div>
                  <h3>Aspiring entrepreneurs</h3>
                  <p>you build real experiences inside the ecosystem's companies while growing your own project.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="home-solution">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">How it works</p>
              <h2>One loop. Endless opportunities.</h2>
              <p>Buy, learn, sell, earn and grow — on EI.one every step you take feeds the next.</p>
            </div>
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
                <span className="cycle-text"><span className="cycle-name">Buy</span><span className="cycle-desc">Discover and get solutions</span></span>
              </div>
              <div className="cycle-node n2 blue">
                <span className="cycle-num">02</span>
                <span className="cycle-ic" aria-hidden="true"><i className="fa-solid fa-book-open"></i></span>
                <span className="cycle-text"><span className="cycle-name">Learn</span><span className="cycle-desc">Take academies and get certified</span></span>
              </div>
              <div className="cycle-node n3 green">
                <span className="cycle-num">03</span>
                <span className="cycle-ic" aria-hidden="true"><i className="fa-solid fa-chart-column"></i></span>
                <span className="cycle-text"><span className="cycle-name">Sell</span><span className="cycle-desc">Represent solutions, win business</span></span>
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
          </div>
        </section>

        <section className="home-ai">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">AI opportunity engine</p>
              <h2>Your skills. Our AI. Your opportunities.</h2>
              <p>Our AI reads your skills, experience, interests and goals, then matches you with the opportunities — and the path — that fit you best.</p>
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

        <section className="people-whynow-sec">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Why now</p>
              <h2>The timing has never been better.</h2>
              <p>The world of work is changing fast — and it's creating room for people who are ready to grow.</p>
            </div>
            <div className="people-whynow-grid">
              <article className="diff-item">
                <span className="diff-icon blue" aria-hidden="true"><i className="fa-solid fa-chart-line"></i></span>
                <div><strong>Massive market shift</strong><p>AI is transforming work, creating demand for reskilling, new jobs and trusted solutions.</p></div>
              </article>
              <article className="diff-item">
                <span className="diff-icon green" aria-hidden="true"><i className="fa-solid fa-seedling"></i></span>
                <div><strong>Growing demand for impact</strong><p>Companies and individuals seek sustainable, purpose-driven opportunities.</p></div>
              </article>
              <article className="diff-item">
                <span className="diff-icon indigo" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
                <div><strong>Education meets the real world</strong><p>Schools and universities need stronger links to business — and to you.</p></div>
              </article>
              <article className="diff-item">
                <span className="diff-icon orange" aria-hidden="true"><i className="fa-solid fa-globe"></i></span>
                <div><strong>Global scalability</strong><p>Digital infrastructure lets you learn, earn and reach new markets worldwide.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="home-journey">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Your journey</p>
              <h2>From first opportunity to your own business.</h2>
              <p>Every step you take builds real, verified experience — and opens the next door. This is your path on EI.one.</p>
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
              <span className="path-arrow pa1" aria-hidden="true"><svg className="path-arrow-svg" viewBox="0 0 44 40"><path d="M5,36 C16,24 25,14 37,9" /><path d="M37,9 L28.5,8.5 M37,9 L33,16.5" /></svg></span>
              <span className="path-arrow pa2" aria-hidden="true"><svg className="path-arrow-svg" viewBox="0 0 44 40"><path d="M5,36 C16,24 25,14 37,9" /><path d="M37,9 L28.5,8.5 M37,9 L33,16.5" /></svg></span>
              <span className="path-arrow pa3" aria-hidden="true"><svg className="path-arrow-svg" viewBox="0 0 44 40"><path d="M5,36 C16,24 25,14 37,9" /><path d="M37,9 L28.5,8.5 M37,9 L33,16.5" /></svg></span>
              <span className="path-arrow pa4" aria-hidden="true"><svg className="path-arrow-svg" viewBox="0 0 44 40"><path d="M5,36 C16,24 25,14 37,9" /><path d="M37,9 L28.5,8.5 M37,9 L33,16.5" /></svg></span>
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

        <section className="talent-final-cta" aria-labelledby="people-final-title">
          <div className="wrap">
            <h2 id="people-final-title">Ready to start?</h2>
            <p>Open your Experience Identity. Add the first experience. You decide what to show the world.</p>
            <div className="talent-final-actions">
              <a className="button talent-final-light" href="/register">Create your Identity</a>
              <a className="button talent-final-outline" href="/contact">Contact us</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default PeoplePage
