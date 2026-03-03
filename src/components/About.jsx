import { useReveal } from '../hooks/useReveal'
import './About.css'

function About() {
  const ref1 = useReveal()
  const ref2 = useReveal()

  return (
    <section id="about">
      <div className="about-text-col reveal" ref={ref1}>
        <div className="section-label">About Us</div>
        <h2 className="section-title">
          Bridging Nepal &amp; <em>Australia</em>,<br />One Dream at a Time
        </h2>
        <p className="about-text">
          Preeti Consultancy was founded with one purpose: to make world-class
          Australian education accessible to every deserving Nepalese student.
          We understand the challenges you face — and we've helped hundreds of
          students just like you overcome them.
        </p>
        <p className="about-text">
          From selecting the right course and institution to handling every
          document, application, and visa requirement, our experienced team
          manages it all — so you can focus on your future.
        </p>
        <a href="#contact" className="btn-gold" style={{ marginTop: '1.5rem' }}>
          Talk to an Expert
        </a>
      </div>

      <div className="about-visual reveal" ref={ref2}>
        <div className="about-card">
          <div className="about-card-icon">🎓</div>
          <h3>Trusted by Hundreds of Nepalese Families</h3>
          <p>
            Our deep understanding of both Nepalese student backgrounds and
            Australian admission requirements gives us an unmatched edge. We
            don't just advise — we become your partner in success.
          </p>
        </div>
        <div className="float-badge">
          <div className="float-badge-num">98%</div>
          <div className="float-badge-text">Visa Success Rate</div>
        </div>
      </div>
    </section>
  )
}

export default About
