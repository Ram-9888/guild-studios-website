import { useState, useEffect, useRef, useCallback } from 'react'
import testimonials from '../data/testimonials'

const AUTO_ADVANCE_MS = 45000
const DOT_LIMIT = 8

function Testimonials() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const touchStartX = useRef(null)
  const timerRef = useRef(null)
  const current = testimonials[index]

  const advance = useCallback((direction) => {
    setVisible(false)
    setTimeout(() => {
      setIndex((i) => {
        const total = testimonials.length
        return direction === 'next' ? (i + 1) % total : (i - 1 + total) % total
      })
      setVisible(true)
    }, 200)
  }, [])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => advance('next'), AUTO_ADVANCE_MS)
  }, [advance])

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [resetTimer])

  function goTo(newIndex) {
    if (newIndex === index) return
    setVisible(false)
    setTimeout(() => {
      setIndex(newIndex)
      setVisible(true)
    }, 200)
    resetTimer()
  }

  function handleManual(direction) {
    advance(direction)
    resetTimer()
  }

  useEffect(() => {
    function handleKeyDown(e) {
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === 'ArrowRight') handleManual('next')
      if (e.key === 'ArrowLeft') handleManual('prev')
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const SWIPE_THRESHOLD = 40
    if (deltaX > SWIPE_THRESHOLD) handleManual('prev')
    else if (deltaX < -SWIPE_THRESHOLD) handleManual('next')
    touchStartX.current = null
  }

  return (
    <section className="bg-ink text-bone relative overflow-hidden">
      <style>{`
        @keyframes testimonialDriftA {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-38vw, 22vh); }
          50% { transform: translate(-12vw, 48vh); }
          75% { transform: translate(28vw, 24vh); }
          100% { transform: translate(0, 0); }
        }
        @keyframes testimonialDriftB {
          0% { transform: translate(0, 0); }
          25% { transform: translate(34vw, -20vh); }
          50% { transform: translate(14vw, -44vh); }
          75% { transform: translate(-24vw, -16vh); }
          100% { transform: translate(0, 0); }
        }
      `}</style>

      <div
        className="absolute w-96 h-96 rounded-full bg-bronze opacity-20"
        style={{ top: '-10%', right: '-5%', animation: 'testimonialDriftA 34s linear infinite' }}
      />
      <div
        className="absolute w-72 h-72 rounded-full bg-gold opacity-10"
        style={{ bottom: '-10%', left: '5%', animation: 'testimonialDriftB 40s linear infinite' }}
      />

      <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          What Clients Say
        </h2>

        <div
          className="relative mt-12"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-bone text-xl italic leading-relaxed">"{current.quote}"</p>
            <p className="mt-6 font-semibold text-gold">{current.name}</p>
            <p className="text-slate text-sm">{current.location}</p>
          </div>

          <button
            onClick={() => handleManual('prev')}
            aria-label="Previous testimonial"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 border border-gold text-gold w-10 h-10 rounded-full items-center justify-center hover:bg-gold hover:text-ink transition"
          >
            ‹
          </button>
          <button
            onClick={() => handleManual('next')}
            aria-label="Next testimonial"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 border border-gold text-gold w-10 h-10 rounded-full items-center justify-center hover:bg-gold hover:text-ink transition"
          >
            ›
          </button>
        </div>

        {testimonials.length <= DOT_LIMIT ? (
          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => goTo(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === index ? 'bg-gold' : 'bg-slate/40 hover:bg-slate/70'
                }`}
              />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-slate text-sm">
            {index + 1} / {testimonials.length}
          </p>
        )}
      </div>
    </section>
  )
}

export default Testimonials