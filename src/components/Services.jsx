import { useReveal } from '../hooks/useReveal'
import './Services.css'

const SERVICES = [
  { num: '01', icon: '🔍', title: 'University Selection', desc: 'We match your academic profile, goals, and budget with the right Australian institution and course — from top 8 universities to specialist colleges.' },
  { num: '02', icon: '📝', title: 'Application Assistance', desc: 'Crafting compelling applications, reviewing statements of purpose, and submitting flawless documentation to maximize your acceptance rate.' },
  { num: '03', icon: '✈️', title: 'Visa Guidance', desc: 'Complete student visa (subclass 500) support — from preparing your financial evidence to coaching you for the visa interview.' },
  { num: '04', icon: '🏠', title: 'Pre-Departure Support', desc: 'Accommodation tips, airport pickup arrangements, banking setup, and everything you need to settle into Australian life smoothly.' },
  { num: '05', icon: '🤝', title: 'Scholarship Guidance', desc: 'Identifying scholarship opportunities and guiding you through the application process to reduce your financial burden.' },
  { num: '06', icon: '👨‍👩‍👧', title: 'Dependent Visas', desc: 'Helping students bring their family members to Australia with the right dependent visa applications and documentation support.' },
]

function Services() {
  const headerRef = useReveal()
  const gridRef   = useReveal()

  return (
    <section id="services">
      <div className="services-header reveal" ref={headerRef}>
        <div className="section-label centered">What We Offer</div>
        <h2 className="section-title light">
          Comprehensive <em>Services</em><br />for Every Step
        </h2>
      </div>

      <div className="services-grid reveal" ref={gridRef}>
        {SERVICES.map((s) => (
          <div className="service-item" key={s.num}>
            <div className="service-num">{s.num}</div>
            <div className="service-icon">{s.icon}</div>
            <div className="service-title">{s.title}</div>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
