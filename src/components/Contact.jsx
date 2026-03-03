import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

const CONTACT_DETAILS = [
  { icon: '📍', label: 'Office',  value: 'Kathmandu, Nepal' },
  { icon: '📞', label: 'Phone',   value: '+977 98XXXXXXXX' },
  { icon: '✉️', label: 'Email',   value: 'info@preeticons.com.np' },
  { icon: '🕐', label: 'Hours',   value: 'Sun – Fri, 9 AM – 6 PM' },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const infoRef = useReveal()
  const formRef = useReveal()

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact">
      <div className="contact-info reveal" ref={infoRef}>
        <div className="section-label">Get In Touch</div>
        <h2 className="contact-title">
          Start Your Journey <em>Today</em>
        </h2>
        <p>
          Ready to take the first step towards studying in Australia? Book a free
          consultation with our experienced counselors — no obligation, just clarity.
        </p>
        <div className="contact-details">
          {CONTACT_DETAILS.map((d) => (
            <div className="contact-detail" key={d.label}>
              <div className="contact-detail-icon">{d.icon}</div>
              <div className="contact-detail-text">
                <strong>{d.label}</strong>
                <span>{d.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-form reveal" ref={formRef}>
        <div className="form-title">Free Consultation</div>
        <p className="form-sub">Fill in your details and we'll get back to you within 24 hours.</p>

        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Aarav" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Sharma" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@email.com" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="+977 98..." />
          </div>
        </div>

        <div className="form-group full">
          <label>Interested In</label>
          <select>
            <option value="">Select a service</option>
            <option>University &amp; Course Selection</option>
            <option>Visa Application Support</option>
            <option>Scholarship Guidance</option>
            <option>Dependent Visa</option>
            <option>General Enquiry</option>
          </select>
        </div>

        <div className="form-group full">
          <label>Your Message</label>
          <textarea placeholder="Tell us about your academic background and goals..." />
        </div>

        <button
          className={`form-submit ${submitted ? 'submitted' : ''}`}
          onClick={handleSubmit}
        >
          {submitted ? '✓ Message Sent — We\'ll be in touch!' : 'Book Free Consultation →'}
        </button>
      </div>
    </section>
  )
}

export default Contact
