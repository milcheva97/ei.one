import { useState } from 'react'
import { useLanguage } from '../i18n.jsx'

const navItems = [
  ['Home', '/en/index.php'],
  ['Business', '/ecosystem'],
  ['People', '/people'],
  ['Education', '/education'],
]

const aboutLinks = [
  ['Enterprise', '/economy'],
  ['Partners', '/partner'],
  ['Experience Passport', '/experience-passport'],
  ['Talent', '/talent'],
  ['Entrepreneur', '/entrepreneur'],
  ['Environment', '/environment'],
  ['Projects', '/projects'],
  ['Our Commitments', '/engagements'],
  ['Sponsor', '/sponsor'],
  ['Investor', '/investor'],
  ['Contact', '/contact'],
  ['Join EI.one', '/join'],
]

function Header({ loginHref = '/login', registerHref = '/register', languagePage = 'index.php' }) {
  const { language, setLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const homeHref = `/${language}/index.php`

  const handleLanguage = (event, nextLanguage) => {
    event.preventDefault()
    const nextPath = event.currentTarget.getAttribute('href')
    setLanguage(nextLanguage)
    if (nextPath && window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath)
    }
    setMenuOpen(false)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className={`nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
        <a className="brand" href={homeHref} onClick={closeMenu}>
          <img className="header-logo" src="/images/logo.png" alt="EI.one" />
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="nav-menu">
          <div className="nav-links">
            {navItems.map(([label, href]) => (
              <a href={label === 'Home' ? homeHref : href} key={label} onClick={closeMenu}>{label}</a>
            ))}
            <div className="nav-item has-submenu about-menu">
              <a href="/about" onClick={closeMenu}>About <i className="fa-solid fa-chevron-down" aria-hidden="true"></i></a>
              <div className="submenu about-submenu">
                {aboutLinks.map(([label, href]) => (
                  <a href={href} key={label} onClick={closeMenu}>{label}</a>
                ))}
              </div>
            </div>
          </div>
          <a className="nav-login" href={loginHref} onClick={closeMenu}>Log in</a>
          <a className="button nav-signup" href={registerHref} onClick={closeMenu}>Sign up</a>
          <div className="lang has-submenu" aria-label="Language selector" data-no-translate>
            <button type="button">
              <i className="fa-solid fa-globe" aria-hidden="true"></i>
              {language.toUpperCase()} <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
            </button>
            <div className="submenu lang-menu">
              <a href={`/de/${languagePage}`} onClick={(event) => handleLanguage(event, 'de')}>DE</a>
              <a href={`/it/${languagePage}`} onClick={(event) => handleLanguage(event, 'it')}>IT</a>
              <a href={`/fr/${languagePage}`} onClick={(event) => handleLanguage(event, 'fr')}>FR</a>
              <a href={`/en/${languagePage}`} onClick={(event) => handleLanguage(event, 'en')}>EN</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
