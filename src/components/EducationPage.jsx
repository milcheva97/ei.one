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

function EducationPage() {
  useEffect(() => {
    const title = 'Education - EI.one School Ecosystem & Academy'
    const description = 'EI.one Education connects school ecosystems, academy journeys and verified experiences so learning becomes visible, attestable and useful for future opportunities.'
    document.title = title
    setMeta('description', description)
    setMeta('keywords', 'EI.one education, school ecosystem, academy, experience identity, verified learning, talents, skills')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', 'https://ei.one/en/education', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ei.one/en/education')
  }, [])

  return (
    <>
      <Header loginHref="/login" languagePage="education.php" />

      <main className="education-page">
        <section className="education-hero">
          <div className="wrap education-hero-grid">
            <div>
              <p className="education-kicker">Schools</p>
              <h1>Turn experience into growth of relevance.</h1>
              <p>Transform your students into talent recognised by the territory. Data-driven guidance, sponsored programs, direct bridge with companies. Your students' experiences become your prestige.</p>
            </div>
            <div className="education-hero-card" id="education-login">
              <img src="/images/schools-hero.jpg" alt="Students collaborating in a bright learning environment" />
              <div>
                <strong>School Ecosystem</strong>
                <span>Learning, mentoring, projects and verified experiences connected in one growth path.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section bizedu-bridge">
          <div className="wrap">
            <div className="section-head">
              <h2>Where Business Meets Education.</h2>
              <p>Now we connect corporate Academies to the education system.</p>
            </div>
            <div className="bizedu-bridge-grid">
              <div className="bizedu-bridge-card companies">
                <h3>Companies</h3>
                <ul>
                  <li>Real needs</li>
                  <li>Real projects</li>
                  <li>Know-how</li>
                  <li>Jobs</li>
                  <li>Business cases</li>
                </ul>
              </div>
              <div className="bizedu-bridge-connector">
                <span className="bizedu-bridge-hub" aria-hidden="true"><i className="fa-solid fa-arrows-left-right"></i></span>
                <strong>EI.one connects</strong>
              </div>
              <div className="bizedu-bridge-card education">
                <h3>Education</h3>
                <ul>
                  <li>Schools</li>
                  <li>Universities</li>
                  <li>Training providers</li>
                  <li>Teachers</li>
                  <li>Students</li>
                  <li>Researchers</li>
                </ul>
              </div>
            </div>
            <p className="bizedu-bridge-note">Companies bring real problems and experiences. The education world brings knowledge, research and talent. <strong>EI.one connects the two.</strong></p>
          </div>
        </section>

        <section className="info-section academy-company">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Every company can become an Academy</p>
              <h2>Every Company Can Become an Academy.</h2>
              <p>A share of the value generated in the Ecosystem returns to those who create it — as skills, training and career growth.</p>
            </div>
            <div className="acompany-panel">
              <div className="acompany-head">
                <span className="acompany-from">ABC Company</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                <span className="acompany-to">ABC Academy</span>
              </div>
              <ul className="acompany-list">
                <li><i className="fa-solid fa-check" aria-hidden="true"></i>Employees</li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i>Courses</li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i>Training</li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i>Experiences</li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i>Mentoring</li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i>Knowledge</li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i>Real cases</li>
                <li><i className="fa-solid fa-check" aria-hidden="true"></i>Career development</li>
              </ul>
            </div>
            <p className="acompany-note">The Academy allows companies to transform their expertise into structured training.</p>
          </div>
        </section>

        <section className="info-section academy-cycle">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">From transaction to education</p>
              <h2>From transaction to education.</h2>
              <p>Every transaction feeds a single loop — value created in the Ecosystem returns as learning, skills and growth.</p>
            </div>
            <div className="acycle-rail">
              <div className="acycle-stop">
                <span className="acycle-dot" aria-hidden="true"><i className="fa-solid fa-right-left"></i></span>
                <strong>Transactions</strong>
              </div>
              <div className="acycle-stop">
                <span className="acycle-dot" aria-hidden="true"><i className="fa-solid fa-coins"></i></span>
                <strong>Value generated</strong>
              </div>
              <div className="acycle-stop is-key">
                <span className="acycle-dot" aria-hidden="true"><i className="fa-solid fa-graduation-cap"></i></span>
                <strong>Academy</strong>
              </div>
              <div className="acycle-stop">
                <span className="acycle-dot" aria-hidden="true"><i className="fa-solid fa-screwdriver-wrench"></i></span>
                <strong>Skills</strong>
              </div>
              <div className="acycle-stop">
                <span className="acycle-dot" aria-hidden="true"><i className="fa-solid fa-users"></i></span>
                <strong>People</strong>
              </div>
              <div className="acycle-stop">
                <span className="acycle-dot" aria-hidden="true"><i className="fa-solid fa-chart-line"></i></span>
                <strong>Company growth</strong>
              </div>
            </div>
            <p className="academy-cycle-note">The Academy is not a separate business from the Ecosystem — it is part of the cycle.<span>This connection is crucial.</span></p>
          </div>
        </section>

        <section className="info-section realcase">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">Real business cases</p>
              <h2>Real Business Cases.</h2>
              <p>A company says: “We have this problem.” A school or university can transform it into real experience.</p>
            </div>
            <ol className="realcase-steps">
              <li className="realcase-step">
                <span className="realcase-num">1</span>
                <h4>Real case</h4>
                <p>A real problem, straight from a company.</p>
              </li>
              <li className="realcase-step">
                <span className="realcase-num">2</span>
                <h4>Student project</h4>
                <p>Turned into hands-on work with a school or university.</p>
              </li>
              <li className="realcase-step">
                <span className="realcase-num">3</span>
                <h4>Solution</h4>
                <p>Students build a real answer to the problem.</p>
              </li>
              <li className="realcase-step">
                <span className="realcase-num">4</span>
                <h4>Experience</h4>
                <p>Verified, on-record experience in the Identity.</p>
              </li>
              <li className="realcase-step outcome">
                <span className="realcase-num">5</span>
                <h4>Potential talent</h4>
                <p>A future employee the company already knows.</p>
              </li>
            </ol>
            <p className="realcase-note">Training isn't just theoretical.<span>It's connected to the real economy.</span></p>
          </div>
        </section>

        <section className="human-center">
          <div className="wrap human-center-grid">
            <div className="human-center-copy">
              <h2>The Human at the Center</h2>
              <p>Humans are at the center of every sustainable development. For us, social sustainability means combining economic progress with responsibility towards people, communities, and future generations.</p>
              <p>At EI.one, we believe that sustainable innovation can only emerge when people have access to knowledge, education, and new opportunities. That is why we promote a corporate culture based on collaboration, trust, diversity, and personal development.</p>
            </div>
            <div className="human-center-visual" aria-label="People connected through knowledge, education and shared opportunity">
              <img src="/images/human-at-the-center.jpg" alt="Human at the center" />
              <div className="human-center-glow"></div>
            </div>
          </div>
        </section>

        <section className="human-center">
          <div className="wrap human-center-grid">
            <div className="human-center-copy">
              <h2>Inclusive & Human Economy</h2>
              <p>Social sustainability for us also means promoting new forms of collaboration. In an increasingly connected world, innovation and progress no longer arise in isolation but through cooperation between people, companies, and organizations.</p>
              <p>EI.one supports this development through a globally oriented network that brings together talents, ideas, and projects. Our goal is to promote an economy that is human, inclusive, and future-oriented.</p>
            </div>
            <div className="human-center-visual" aria-label="People connected through knowledge, education and shared opportunity">
              <img src="/images/inclusive.jpg" alt="inclusive and human economy" />
              <div className="human-center-glow"></div>
            </div>
          </div>
        </section>

        <section className="education-cta">
          <div className="wrap education-cta-box">
            <div>
              <h2>Developing Solutions Together</h2>
              <p>Become part of a community based on trust and human growth.</p>
            </div>
            <div className="education-actions">
              <a className="button secondary" href="/en/talent.php">Become a Talent</a>
              <a className="button" href="/en/contact.php">Contact</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default EducationPage
