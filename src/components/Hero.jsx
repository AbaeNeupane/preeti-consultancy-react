import './Hero.css'

function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-lines">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">Nepal → Australia Education Consultancy</div>
        <h1 className="hero-title">
          Study in Australia<br />with <em>Confidence</em>
        </h1>
        <p className="hero-sub">
          Expert guidance for Nepalese students, graduates &amp; dependents.
          From university selection to visa success — we provide end-to-end
          support every step of the way.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-gold">Free Consultation</a>
          <a href="#services" className="btn-outline">Our Services</a>
        </div>
      </div>

      <div className="hero-stats">
        {[
          { num: '500+', label: 'Students Placed' },
          { num: '98%',  label: 'Visa Success Rate' },
          { num: '50+',  label: 'Partner Universities' },
          { num: '8+',   label: 'Years Experience' },
        ].map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
