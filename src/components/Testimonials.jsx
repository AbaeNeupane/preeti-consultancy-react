import { useReveal } from '../hooks/useReveal'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    initials: 'SA',
    text: 'Preeti Consultancy made the entire process stress-free. From my offer letter at the University of Melbourne to my visa approval, they handled everything professionally and kept me informed every step of the way.',
    name: 'Sita Adhikari',
    detail: 'Master of Engineering, University of Melbourne',
  },
  {
    initials: 'RB',
    text: 'I was confused about which university to choose and worried about my visa. The team at Preeti guided me patiently, helped me get a scholarship, and I\'m now living my dream in Sydney.',
    name: 'Rajesh Bhattarai',
    detail: 'Bachelor of IT, University of Sydney',
  },
  {
    initials: 'PM',
    text: 'As a working professional making a career change, I needed expert advice. Preeti Consultancy understood my unique situation and found the perfect pathway program for me. Highly recommend!',
    name: 'Priya Maharjan',
    detail: 'MBA, Monash University',
  },
]

function Testimonials() {
  const headerRef = useReveal()
  const gridRef   = useReveal()

  return (
    <section id="testimonials">
      <div className="testimonials-header reveal" ref={headerRef}>
        <div className="section-label centered" style={{ color: 'var(--gold-light)' }}>Student Stories</div>
        <h2 className="section-title light">Real Students, <em>Real Dreams</em></h2>
      </div>

      <div className="testimonials-grid reveal" ref={gridRef}>
        {TESTIMONIALS.map((t) => (
          <div className="testimonial-card" key={t.name}>
            <span className="quote-mark">"</span>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initials}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-detail">{t.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
