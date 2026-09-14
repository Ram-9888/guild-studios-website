function Services() {
  const services = [
    {
      name: "Interior Design",
      description: "Full home interior packages starting at ₹4 Lakhs — space planning, materials, and execution handled end to end.",
    },
    {
      name: "Construction",
      description: "Turnkey construction projects for homes, villas, and apartments, with regular site updates for remote clients.",
    },
    {
      name: "Sustainable Materials",
      description: "Kerala Mud Blocks (CSEB) and terracotta jali available on request for clients interested in eco-friendly construction.",
    },
  ]

  const graniteUrl = "https://images.unsplash.com/photo-1694381873598-0ce94687485d?q=80&w=800&auto=format&fit=crop"

  const engravedGold = {
    color: '#c99a5b',
    textShadow: '0px 1.5px 1px rgba(0,0,0,0.75), 0px -1px 0px rgba(255,224,178,0.4)',
  }

  const engravedLight = {
    color: '#d9d5c9',
    textShadow: '0px 1.5px 1px rgba(0,0,0,0.75), 0px -1px 0px rgba(255,255,255,0.25)',
  }

  return (
    <section id="services" className="bg-bone text-ink border-t border-slate/20">
      <style>{`
        .stone-slab {
          position: relative;
        }
        .stone-slab .slab-front {
          position: absolute;
          inset: 0;
          background-image: url("${graniteUrl}");
          background-size: cover;
          background-position: center;
          filter: brightness(1.15);
        }
        .stone-slab .slab-right {
          position: absolute;
          top: 0;
          left: 100%;
          width: 16px;
          height: 100%;
          background-image: url("${graniteUrl}");
          background-size: cover;
          background-position: center;
          filter: brightness(0.85);
          transform-origin: top left;
          transform: skewY(45deg);
          clip-path: polygon(0% 0%, 100% 0%, 97% 9%, 100% 18%, 96% 27%, 100% 36%, 98% 45%, 100% 54%, 96% 63%, 100% 72%, 97% 81%, 100% 90%, 0% 100%);
        }
        .stone-slab .slab-bottom {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 16px;
          background-image: url("${graniteUrl}");
          background-size: cover;
          background-position: center;
          filter: brightness(0.65);
          transform-origin: top left;
          transform: skewX(45deg);
          clip-path: polygon(0% 0%, 0% 100%, 9% 97%, 18% 100%, 27% 96%, 36% 100%, 45% 98%, 54% 100%, 63% 96%, 72% 100%, 81% 97%, 90% 100%, 100% 0%);
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold">
          What We Offer
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.name} className="stone-slab px-6 py-12 text-center">
              <div className="slab-front" />
              <div className="slab-right" />
              <div className="slab-bottom" />
              <h3 className="relative text-xl font-semibold tracking-wide" style={engravedGold}>
                {service.name}
              </h3>
              <div className="relative w-7 h-0.5 bg-gold mx-auto my-4" />
              <p className="relative text-sm leading-relaxed" style={engravedLight}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services