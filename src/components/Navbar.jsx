import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">Preeti<span>.</span></div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Study</a></li>
        <li><a href="#visa-services">Visas</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#testimonials">Stories</a></li>
        <li><a href="#contact" className="nav-cta">Get Started</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
