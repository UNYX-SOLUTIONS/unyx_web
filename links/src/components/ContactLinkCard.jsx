import LinkIcon from './LinkIcon'

function ContactLinkCard({ link }) {
  const isExternal = link.href.startsWith('http')

  return (
    <a
      className={`contact-link-card accent-${link.accent}`}
      href={link.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      <div className="card-content">
        <div className="card-icon-wrapper">
          <LinkIcon iconType={link.iconType} materialName={link.materialName} />
        </div>
        <span className="card-label">{link.label}</span>
      </div>
      <span className="material-symbols-outlined chevron">chevron_right</span>
    </a>
  )
}

export default ContactLinkCard
