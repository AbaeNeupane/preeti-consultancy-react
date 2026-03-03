import { useReveal } from '../hooks/useReveal'
import './VisaServices.css'

const VISAS = [
  {
    flag: '🇦🇺',
    code: 'Subclass 309 & 100',
    title: 'Partner Visa',
    desc: 'For the spouse or de facto partner of an Australian citizen, permanent resident, or eligible NZ citizen. Subclass 309 is temporary (offshore); Subclass 100 is the permanent stage. Holders can live, work, study, access Medicare, include dependent children, and gain permanent residence.',
  },
  {
    flag: '🇦🇺',
    code: 'Subclass 600',
    title: 'Visitor Visa',
    desc: 'Visit Australia for tourism, family visits, or short business activities. Includes the tourist stream, sponsored family stream, and business visitor stream, with stays ranging from 3 to 12 months.',
  },
  {
    flag: '🇦🇺',
    code: 'Subclass 500',
    title: 'Student Subsequent Entrant',
    desc: 'Allows family members of a current student visa holder — including spouses and dependent children — to join them in Australia. Partners may work depending on the student\'s course level, and the visa is valid for the duration of the main student visa.',
  },
  {
    flag: '🇦🇺',
    code: 'Subclass 485 (TR)',
    title: 'Temporary Graduate Visa',
    desc: 'Lets recent international graduates live, work, and study temporarily in Australia. Provides full work rights, the opportunity to gain Australian work experience, and a pathway to apply for skilled migration.',
  },
  {
    flag: '🇦🇺',
    code: 'Subclass 485 (Dependent)',
    title: 'Temporary Graduate Subsequent Entrant',
    desc: 'Allows family members of a 485-visa holder — including spouses and dependent children — to join or remain with the primary applicant. Dependents share the same visa validity and work rights as the primary holder.',
  },
  {
    flag: '🇦🇺',
    code: 'Subclass 482 / 491 / 407',
    title: 'Subsequent Entrant – Skilled',
    desc: 'Family members of Temporary Skill Shortage (482), Skilled Work Regional (491), and Training (407) visa holders can join them in Australia. Dependents can live, work, and study, with validity tied to the primary applicant\'s visa.',
  },
]

function VisaServices() {
  const headerRef = useReveal()
  const gridRef   = useReveal()

  return (
    <section id="visa-services">
      <div className="visa-header reveal" ref={headerRef}>
        <div className="section-label centered light-label">Visa Services</div>
        <h2 className="section-title">
          Australian Visa <em>Pathways</em>
        </h2>
        <p className="visa-header-sub">
          Beyond student visas, we guide individuals and families through a full range
          of Australian visa pathways — from partner and visitor visas to graduate and
          skilled dependent options.
        </p>
      </div>

      <div className="visa-grid reveal" ref={gridRef}>
        {VISAS.map((v) => (
          <div className="visa-card" key={v.code}>
            <div className="visa-card-top">
              <div className="visa-code">{v.code}</div>
              <div className="visa-flag">{v.flag}</div>
            </div>
            <div className="visa-title">{v.title}</div>
            <p className="visa-desc">{v.desc}</p>
            <a href="#contact" className="visa-cta">Enquire Now →</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VisaServices
