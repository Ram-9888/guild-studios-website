function Contact() {
  return (
    <section className="bg-bone text-ink">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Get a Free Quote
        </h2>
        <p className="mt-4 text-slate max-w-xl">
          Tell us about your project and we'll get back to you shortly.
        </p>
        <form className="mt-10 max-w-xl grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-slate rounded px-4 py-3 bg-transparent"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-slate rounded px-4 py-3 bg-transparent"
          />
          <textarea
            placeholder="Tell us about your project"
            rows="4"
            className="border border-slate rounded px-4 py-3 bg-transparent"
          ></textarea>
          <button
            type="submit"
            className="bg-gold text-ink px-6 py-3 rounded hover:bg-bronze transition"
          >
            {/* TODO: wire up form submission + Meta Pixel / Google Tag conversion event once ad accounts are set up */}
            Request a Quote
          </button>
        </form>
        <a href="https://wa.me/918438084450"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 text-gold underline"
        >
          Or message us directly on WhatsApp
        </a>
      </div>
    </section>
  )
}

export default Contact