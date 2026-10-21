import { useState } from 'react'
import logoFull from '../assets/guild-studios-logo-full-web.png'

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  function closeMobile() {
    setMobileOpen(false)
  }

  return (
    <header className="bg-bone border-b border-slate/20 relative">
      <div className="w-full px-4 md:px-8 py-4 flex items-center justify-between">
        <img
          src={logoFull}
          alt="Guild Studios — Architecture & Interior Design"
          className="h-10 md:h-12 w-auto"
        />
        <nav className="hidden md:flex gap-10 text-base text-ink items-center">
          <div className="group relative py-2">
            <span className="cursor-default hover:text-gold">Guild Care</span>
            <div className="hidden group-hover:block absolute right-0 top-full bg-bone border border-slate/20 rounded shadow-lg py-3 w-56 z-10">
              <p className="px-4 pb-2 text-xs text-slate">Client portal coming soon</p>
              <span className="block px-4 py-1.5 text-slate cursor-not-allowed">Login</span>
              <span className="block px-4 py-1.5 text-slate cursor-not-allowed">Sign Up</span>
            </div>
          </div>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://wa.me/918438084450"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-ink text-base font-medium px-4 py-2 rounded"
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
        <nav className="md:hidden border-t border-slate/20 bg-bone px-4 py-4 flex flex-col gap-4 text-base text-ink">
          <div>
            <p className="text-slate text-xs uppercase tracking-wide mb-1">Guild Care</p>
            <p className="text-slate text-xs mb-2">Client portal coming soon</p>
            <span className="block py-1.5 text-slate">Login</span>
            <span className="block py-1.5 text-slate">Sign Up</span>
          </div>
          <a href="#contact" onClick={closeMobile} className="hover:text-gold">Contact</a>
        </nav>
      )}
    </header>
  )
}

export default Header