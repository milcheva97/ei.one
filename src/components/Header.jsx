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
    label: 'Entrepreneur',
    href: '/entrepreneur',
    links: [],
  },
  {
    label: 'Enterprise',
    href: '/economy',
    links: [
      ['Business Ecosystem', '/en/business-club.php'],
      ['Become a partner', '/partner'],
      ['Investor', '/investor'],
    ],
  },
  {
    label: 'About',
    href: '/about',
    links: [
      ['Our Commitments', '/engagements'],
      ['Environment', '/environment'],
      ['Projects', '/projects'],
    ],
  },
]

function Header({ loginHref = '/login', languagePage = 'index.php' }) {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="/en/index.php">
          <img className="header-logo" src="/images/logo.png" alt="EI.one" />
        </a>
        <div className="nav-links">
          <a href="/en/index.php">Home</a>
          {navGroups.map((group) => (
            group.links.length ? (
              <div className="nav-item has-submenu" key={group.label}>
                <a href={group.href}>
                  {group.label} <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                </a>
                <div className="submenu">
                  {group.links.map(([label, href]) => (
                    <a href={href} key={label}>{label}</a>
                  ))}
                </div>
              </div>
            ) : (
              <a href={group.href} key={group.label}>{group.label}</a>
            )
          ))}
        </div>
        <a className="button secondary" href={loginHref}>Login</a>
        <div className="lang has-submenu" aria-label="Language selector">
          <button type="button">
            EN <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
          </button>
          <div className="submenu lang-menu">
            <a href={`/de/${languagePage}`}>DE</a>
            <a href={`/it/${languagePage}`}>IT</a>
            <a href={`/fr/${languagePage}`}>FR</a>
            <a href={`/en/${languagePage}`}>EN</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
