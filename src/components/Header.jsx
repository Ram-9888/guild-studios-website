import { useState } from 'react'
import logoFull from '../assets/guild-studios-logo-full-web.png'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.35 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18a7.94 7.94 0 0 1-4.24-1.22l-.3-.19-3 .79.8-2.92-.2-.3A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.36-5.86c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
    </svg>
  )
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  function closeMobile() {
    setMobileOpen(false)
  }

  const amcLink = "https://wa.me/918438084450?text=Hi%2C%20I'd%20like%20to%20renew%20my%20AMC"
  const technicianLink = "https://wa.me/918438084450?text=Hi%2C%20I'd%20like%20to%20request%20a%20technician%20visit"

  return (
    <header className="bg-bone border-b border-slate/20 relative">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <img
          src={logoFull}
          alt="Guild Studios — Architecture & Interior Design"
          className="h-10 md:h-12 w-auto"
        />
        <nav className="hidden md:flex gap-8 text-sm text-ink items-center">
          <div className="group relative py-2">
            <span className="cursor-default hover:text-gold">Guild Care</span>
            <div className="hidden group-hover:block absolute left-0 top-full bg-bone border border-slate/20 rounded shadow-lg py-3 w-64 z-10">
              <p className="px-4 pb-2 text-xs text-slate">Existing client? We'll help you directly on WhatsApp.</p>
              <a href={amcLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-1.5 hover:text-gold hover:bg-ink/5">
                <WhatsAppIcon /> Renew AMC
              </a>
              <a href={technicianLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-1.5 hover:text-gold hover:bg-ink/5">
                <WhatsAppIcon /> Request Technician Visit
              </a>
            </div>
          </div>
          <span title="Client login coming soon" className="text-slate cursor-not-allowed">Profile</span>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://wa.me/918438084450"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-ink text-sm font-medium px-4 py-2 rounded"
          >
            WhatsApp us
          </a>
          <button
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-ink text-2xl leading-none px-1"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-slate/20 bg-bone px-6 py-4 flex flex-col gap-4 text-sm text-ink">
          <div>
            <p className="text-slate text-xs uppercase tracking-wide mb-1">Guild Care</p>
            <p className="text-slate text-xs mb-2">Existing client? We'll help you directly on WhatsApp.</p>
            <a href={amcLink} target="_blank" rel="noopener noreferrer" onClick={closeMobile} className="flex items-center gap-2 py-1.5 hover:text-gold">
              <WhatsAppIcon /> Renew AMC
            </a>
            <a href={technicianLink} target="_blank" rel="noopener noreferrer" onClick={closeMobile} className="flex items-center gap-2 py-1.5 hover:text-gold">
              <WhatsAppIcon /> Request Technician Visit
            </a>
          </div>
          <span title="Client login coming soon" className="text-slate">Profile</span>
          <a href="#contact" onClick={closeMobile} className="hover:text-gold">Contact</a>
        </nav>
      )}
    </header>
  )
}

export default Header