import './Footer.css'

const NAV_LINKS = ['About', 'Services', 'Process', 'Stories', 'Contact']

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">Preeti<span>.</span></div>
          <div className="footer-logo-sub">Education Consultancy — Nepal to Australia</div>
        </div>
        <nav className="footer-nav">
          {NAV_LINKS.map((link) => (
            <a href={`#${link.toLowerCase()}`} key={link}>{link}</a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          © 2025 Preeti Consultancy. Made with <span>♥</span> for Nepalese students.
        </div>
        <div className="footer-copy">Registered Education Agent · Australia</div>
      </div>
    </footer>
  )
}

export default Footer
