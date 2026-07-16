import { useState } from 'react'
import { useLanguage } from '../i18n.jsx'

const navGroups = [
  {
    label: 'Education',
    href: '/education',
    links: [],
  },
  {
    label: 'Experience',
    href: '/en/experience-passport.php',
    links: [['Marketplace', '/business-club']],
  },
  {
    label: 'Enterprise',
    href: '/economy',
    links: [
      ['Business Ecosystem', '/en/business-club.php'],
      ['Become a partner', '/partner'],
      ['Investor', '/investor'],
      ['Entrepreneur', '/entrepreneur'],
    ],
  },
  {
    label: 'Environment',
    href: '/environment',
    links: [
      ['Projects', '/projects'],
    ],
  },
  {
    label: 'About',
    href: '/about',
    links: [
      ['Our Commitments', '/engagements'],
      ['Sponsor', '/sponsor'],
    ],
  },
]

function Header({ loginHref = '/login', languagePage = 'index.php' }) {
  const { language, setLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)

  const handleLanguage = (event, nextLanguage) => {
    event.preventDefault()
    const nextPath = event.currentTarget.getAttribute('href')
    setLanguage(nextLanguage)
    if (nextPath && window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath)
    }
    setMenuOpen(false)
  }

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenGroup(null)
  }

  // On mobile (the hamburger menu is open) a parent with a submenu should
  // expand its subpages instead of navigating away. On desktop the submenu
  // opens on hover and the parent link navigates as usual.
  const handleGroupClick = (event, group) => {
    if (menuOpen && group.links.length) {
      event.preventDefault()
      setOpenGroup((current) => (current === group.label ? null : group.label))
      return
    }
    closeMenu()
  }

  return (
    <header className="site-header">
      <nav className={`nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
        <a className="brand" href="/en/index.php" onClick={closeMenu}>
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
            <a href="/en/index.php" onClick={closeMenu}>Home</a>
            {navGroups.map((group) => (
              group.links.length ? (
                <div
                  className={`nav-item has-submenu${openGroup === group.label ? ' is-open' : ''}`}
                  key={group.label}
                >
                  <a href={group.href} onClick={(event) => handleGroupClick(event, group)}>
                    {group.label} <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                  </a>
                  <div className={`submenu${openGroup === group.label ? ' is-open' : ''}`}>
                    {group.links.map(([label, href]) => (
                      <a href={href} key={label} onClick={closeMenu}>{label}</a>
                    ))}
                  </div>
                </div>
              ) : (
                <a href={group.href} key={group.label} onClick={closeMenu}>{group.label}</a>
              )
            ))}
          </div>
          <a className="button secondary" href="https://app.ei.one/login" onClick={closeMenu}>Login</a>
          <div className="lang has-submenu" aria-label="Language selector" data-no-translate>
            <button type="button">
              {language.toUpperCase()} <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
            </button>
            <div className="submenu lang-menu">
              <a className={language === 'de' ? 'active' : undefined} href={`/de/${languagePage}`} onClick={(event) => handleLanguage(event, 'de')}>DE</a>
              <a className={language === 'it' ? 'active' : undefined} href={`/it/${languagePage}`} onClick={(event) => handleLanguage(event, 'it')}>IT</a>
              <a className={language === 'fr' ? 'active' : undefined} href={`/fr/${languagePage}`} onClick={(event) => handleLanguage(event, 'fr')}>FR</a>
              <a className={language === 'en' ? 'active' : undefined} href={`/en/${languagePage}`} onClick={(event) => handleLanguage(event, 'en')}>EN</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
