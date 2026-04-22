import { useEffect } from 'react'
import ContactLinkCard from './components/ContactLinkCard'
import { contactLinks, services } from './data/contactData'

function App() {
  useEffect(() => {
    document.documentElement.lang = 'es'
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <main className="page-shell">
      <section className="contact-card">
        <div className="logo-area">
          <div className="logo-frame">
            <img
              src="/logo.png"
              alt="UNYX Solutions Logo"
              className="brand-logo"
            />
          </div>
        </div>

        <div className="intro-copy">
          <h1>UNYX SOLUTIONS</h1>
          <p className="eyebrow">Ingenieria Digital para Empresas</p>
          <p className="description">
            Transformamos la infraestructura tecnologica de tu empresa con
            soluciones innovadoras de software, automatizacion e IoT en Ecuador.
          </p>
          <div className="service-tags" aria-label="Servicios principales">
            {services.map((service) => (
              <span key={service} className="service-tag">
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="links-list">
          {contactLinks.map((link) => (
            <ContactLinkCard key={link.label} link={link} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
