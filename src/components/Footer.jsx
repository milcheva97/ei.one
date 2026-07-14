function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-about">
            <a className="footer-logo" href="/en/index.php" aria-label="ei.one">
              <img src="/images/logo.png" alt="ei.one" />
            </a>
            <p>ei.one - The ecosystem where people build real experience and become entrepreneurs.</p>
          </div>
          <div>
            <h3>Menu</h3>
            <ul>
              <li><a href="/en/index.php">Home</a></li>
              <li><a href="/education">Education</a></li>
              <li><a href="/experience-passport">Experience</a></li>
              <li><a href="/entrepreneur">Entrepreneur</a></li>
              <li><a href="/economy">Enterprise</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <div>
            <h3>Sections</h3>
            <ul>
              <li><a href="/business-club">Marketplace</a></li>
              <li><a href="/environment">Environment</a></li>
              <li><a href="/projects">Projects</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <p><strong>ei.one</strong><br />Netmaster (Schweiz) AG<br />Toedistrasse 56<br />CH - 8810 Horgen</p>
            <p><strong>Tel:</strong> +41 44 822 90 00</p>
          </div>
        </div>

        <div className="copyright">
          <span>© 2026 ei.one — Ecosystem Intelligence. All rights reserved.</span>
          <span className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms and Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
