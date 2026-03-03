import { useReveal } from '../hooks/useReveal'
import './Process.css'

const STEPS = [
  { num: '1', title: 'Free Consultation',  desc: 'Discuss your academic background, goals, and budget with our expert counselors — completely free of charge.' },
  { num: '2', title: 'Course & Uni Match', desc: 'We shortlist the best universities and programs tailored specifically to your profile and career aspirations.' },
  { num: '3', title: 'Application & Offer', desc: 'We prepare and submit your application, then manage follow-ups until you receive your letter of offer.' },
  { num: '4', title: 'Visa & Departure',   desc: 'We handle your student visa end-to-end and support you all the way until you land in Australia.' },
]

function Process() {
  const headerRef = useReveal()
  const stepsRef  = useReveal()

  return (
    <section id="process">
      <div className="process-header reveal" ref={headerRef}>
        <div className="section-label">How It Works</div>
        <h2 className="section-title">
          Your Journey to <em>Australia</em><br />in 4 Simple Steps
        </h2>
      </div>

      <div className="process-steps reveal" ref={stepsRef}>
        {STEPS.map((s) => (
          <div className="process-step" key={s.num}>
            <div className="step-circle">{s.num}</div>
            <div className="step-title">{s.title}</div>
            <p className="step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process
