import graniteTexture from '../assets/guild-studios-granite-texture-v3-deepened.jpg'

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

  const engravedGold = {
    color: '#d8b877',
    textShadow: '0px 2.5px 2px rgba(0,0,0,0.95)',
    filter: 'url(#engrave)',
    fontFamily: '"Cinzel", serif',
  }

  const engravedLight = {
    color: '#eceae2',
    textShadow: '0px 2px 2px rgba(0,0,0,0.9)',
    filter: 'url(#engrave)',
  }

  return (
    <section id="services" className="bg-bone text-ink border-t border-slate/20">
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter id="engrave">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
          <feSpecularLighting in="blur" surfaceScale="4" specularConstant="1" specularExponent="18" lightingColor="#ffffff" result="spec">
            <feDistantLight azimuth="235" elevation="50" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specClipped" />
          <feComposite in="SourceGraphic" in2="specClipped" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>
      </svg>
      <style>{`
        .stone-slab {
          position: relative;
        }
        .stone-slab .slab-front {
          position: absolute;
          inset: 0;
          background-image: url("${graniteTexture}");
          background-size: cover;
          background-position: center;
          filter: brightness(1.15);
        }
        .stone-slab .slab-text-bg {
          position: absolute;
          inset: 10px 20px;
          background: rgba(0,0,0,0.3);
          border-radius: 4px;
        }
        .stone-slab .slab-right {
          position: absolute;
          top: 0;
          left: 100%;
          width: 16px;
          height: 100%;
          background-image: url("${graniteTexture}");
          background-size: cover;
          background-position: center;
          filter: brightness(0.85);
          transform-origin: top left;
          transform: skewY(45deg);
          clip-path: polygon(0% 0%, 100% 0%, 97% 9%, 100% 18%, 96% 27%, 100% 36%, 98% 45%, 100% 54%, 96% 63%, 100% 72%, 97% 81%, 100% 90%, 96% 100%, 0% 100%);
        }
        .stone-slab .slab-bottom {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 16px;
          background-image: url("${graniteTexture}");
          background-size: cover;
          background-position: center;
          filter: brightness(0.65);
          transform-origin: top left;
          transform: skewX(45deg);
          clip-path: polygon(0% 0%, 0% 100%, 9% 97%, 18% 100%, 27% 96%, 36% 100%, 45% 98%, 54% 100%, 63% 96%, 72% 100%, 81% 97%, 90% 100%, 100% 96%, 100% 0%);
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold">
          What We Offer
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.name} className="stone-slab aspect-[3/2] overflow-hidden px-6 pt-8 pb-8 text-center">
              <div className="slab-front" />
              <div className="slab-text-bg" />
              <div className="slab-right" />
              <div className="slab-bottom" />
              <h3 className="relative text-2xl font-bold tracking-wide leading-tight" style={engravedGold}>
                {service.name}
              </h3>
              <div className="relative w-10 h-0.5 bg-gold mx-auto my-4" />
              <p className="relative text-base leading-relaxed" style={engravedLight}>
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