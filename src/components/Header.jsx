function Header() {
  return (
    <header className="bg-bone border-b border-slate/20">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div>
          <p className="text-xl font-semibold text-ink tracking-wide">GUILD STUDIOS</p>
          <p className="text-xs text-slate">Architecture &amp; Interior Design</p>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-ink">
          <a href="#services" className="hover:text-gold">Services</a>
          <a href="#projects" className="hover:text-gold">Projects</a>
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </nav>
        
          <a href="https://wa.me/918438084450"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-ink text-sm font-medium px-4 py-2 rounded"
        >
          WhatsApp us
        </a>
      </div>
    </header>
  )
}

export default Header