function About() {
  return (
    <section className="relative bg-slate overflow-hidden">
      <span
        className="absolute -right-6 -top-10 text-bone/10 font-semibold leading-none select-none pointer-events-none"
        style={{ fontSize: '15rem', fontFamily: 'var(--font-display)' }}
      >
        2020
      </span>
      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-ink">
          Our Story
        </h2>
        <p
          className="mt-4 text-2xl md:text-3xl text-bone max-w-2xl leading-snug"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Since 2020, Guild Studios has turned architectural vision into spaces people love to live in.
        </p>
        <p className="mt-6 text-bone/80 max-w-xl leading-relaxed">
          From Chennai's OMR Corridor to clients as far as the UAE, US, UK, Singapore, and Canada.
          Rooted in craftsmanship, honest materials, and a design language that's unmistakably
          black-and-gold — brought to life through our{' '}
          <span className="font-bold text-bone underline decoration-gold decoration-2 underline-offset-2">Nest</span>,{' '}
          <span className="font-bold text-bone underline decoration-gold decoration-2 underline-offset-2">Craft</span>, and{' '}
          <span className="font-bold text-bone underline decoration-gold decoration-2 underline-offset-2">Legacy</span> packages.
        </p>
      </div>
    </section>
  )
}

export default About