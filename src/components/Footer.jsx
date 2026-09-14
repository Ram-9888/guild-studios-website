function Footer() {
  return (
    <footer className="bg-ink text-slate">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-bone font-semibold">Guild Studios</h3>
            <p className="mt-2 text-sm">
              Guild Ventures<br />
              No.20/2, Zinda Sahib Street, Kondithope,<br />
              Chennai, Tamil Nadu 600001
            </p>
          </div>
          <div>
            <h3 className="text-bone font-semibold">Contact</h3>
            <p className="mt-2 text-sm">
              WhatsApp: +91 84380 84450<br />
              Email: guildstudiosofficial@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-bone font-semibold">Legal</h3>
            <p className="mt-2 text-sm">
              GST: 33CAEPR0204H1Z7<br />
              <a href="/privacy-policy" className="underline hover:text-gold">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <p className="mt-10 text-xs text-slate/70">
          © {new Date().getFullYear()} Guild Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer