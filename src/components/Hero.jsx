const backgroundImages = [
  "https://loremflickr.com/1600/900/livingroom,luxury",
  "https://loremflickr.com/1600/900/bedroom,modern",
  "https://loremflickr.com/1600/900/kitchen,interior",
]

const SLIDE_DURATION_MS = 7000
const TOTAL_CYCLE_MS = backgroundImages.length * SLIDE_DURATION_MS

function Hero() {
  return (
    <section className="relative bg-ink text-bone overflow-hidden h-[85vh] min-h-[560px] flex items-center">
      <style>{`
        @keyframes heroSlide {
          0%   { opacity: 0; transform: scale(1); }
          4%   { opacity: 1; }
          30%  { opacity: 1; transform: scale(1.1); }
          33%  { opacity: 0; transform: scale(1.1); }
          34%  { opacity: 0; transform: scale(1); }
          100% { opacity: 0; transform: scale(1); }
        }
        @keyframes heroDrift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -15px); }
        }
      `}</style>

      {backgroundImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            animation: `heroSlide ${TOTAL_CYCLE_MS}ms infinite`,
            animationDelay: `${-i * SLIDE_DURATION_MS}ms`,
          }}
        />
      ))}

      <div
        className="absolute w-96 h-96 rounded-full bg-bronze opacity-20"
        style={{ top: '-10%', left: '-5%', animation: 'heroDrift 14s ease-in-out infinite' }}
      />
      <div
        className="absolute w-72 h-72 rounded-full bg-gold opacity-10"
        style={{ bottom: '-10%', right: '5%', animation: 'heroDrift 18s ease-in-out infinite reverse' }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">
          Spaces built to be lived in, not just photographed.
        </h1>
        <p className="mt-6 text-slate max-w-xl">
          Guild Studios designs and builds premium homes and interiors across Chennai — with remote site monitoring, so clients managing a project from abroad are never left guessing.
        </p>
        <a href="#work"
          className="inline-block mt-8 border border-gold text-gold px-6 py-3 rounded hover:bg-gold hover:text-ink transition"
        >
          View our work
        </a>
      </div>
    </section>
  )
}

export default Hero