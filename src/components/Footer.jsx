function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-about">
            <a className="footer-logo" href="/en/index.php" aria-label="ei.one">
              <img src="/images/logo.png" alt="ei.one" />
            </a>
            <p>ei.one - The ecosystem where people build real experience and companies grow by hiring on what people can actually do.</p>
          </div>
          <div>
            <h3>Companies</h3>
            <ul>
              <li><a href="/business-club">Business Ecosystem</a></li>
              <li><a href="/partner">Become a Partner</a></li>
              <li><a href="/sponsor">Sponsor</a></li>
              <li><a href="/investors">Investors</a></li>
              <li><a href="/services-products">Services &amp; Products</a></li>
            </ul>
          </div>
          <div>
            <h3>Talents</h3>
            <ul>
              <li><a href="/experience-passport">Experience Identity</a></li>
              <li><a href="/academy">Academy</a></li>
              <li><a href="/recruitment">Recruitment</a></li>
            </ul>
          </div>
          <div>
            <h3>Ecosystem</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/education">Education</a></li>
              <li><a href="/economy">Economy</a></li>
              <li><a href="/environment">Environment</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p><strong>ei.one</strong><br />Netmaster (Schweiz) AG<br />Toedistrasse 56<br />CH - 8810 Horgen</p>
          <p><strong>Tel:</strong> +41 44 542 47 47</p>
        </div>

        <div className="copyright">
          <span>Copyright 2026 ei.one - Ecosystem Intelligence. All rights reserved.</span>
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
