import { useState, useEffect, useRef } from 'react'
import categories from '../data/projects'

const VISIBLE_LIMIT = 6

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [imageIndex, setImageIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [overlayVisible, setOverlayVisible] = useState(false)
  const touchStartX = useRef(null)

  const selected = categories.find((c) => c.id === activeCategory)
  const caption = selected?.captions?.[imageIndex]
  const visibleCategories = showAll ? categories : categories.slice(0, VISIBLE_LIMIT)
  const hasMore = categories.length > VISIBLE_LIMIT

  function openCategory(id) {
    setActiveCategory(id)
    setImageIndex(0)
  }

  function closeCategory() {
    setOverlayVisible(false)
    setTimeout(() => setActiveCategory(null), 300)
  }

  function nextImage() {
    setImageIndex((i) => (i + 1) % selected.images.length)
  }

  function prevImage() {
    setImageIndex((i) => (i - 1 + selected.images.length) % selected.images.length)
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const SWIPE_THRESHOLD = 40
    if (deltaX > SWIPE_THRESHOLD) prevImage()
    else if (deltaX < -SWIPE_THRESHOLD) nextImage()
    touchStartX.current = null
  }

  useEffect(() => {
    if (activeCategory === null) return
    const t = setTimeout(() => setOverlayVisible(true), 10)
    return () => clearTimeout(t)
  }, [activeCategory])

  useEffect(() => {
    if (!selected) return

    function handleKeyDown(e) {
      if (e.key === 'Escape') closeCategory()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selected, imageIndex])

  return (
    <section id="work" className="bg-bone text-ink">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Our Work
        </h2>
        <p className="mt-4 text-slate max-w-xl">
          Browse by category to see the kind of spaces we've shaped.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => openCategory(category.id)}
              className={`relative rounded overflow-hidden group text-left ${
                category.featured
                  ? 'aspect-[4/3] md:col-span-2 md:aspect-[21/9]'
                  : 'aspect-[4/3]'
              }`}
            >
              <img
                src={category.images[0]}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/55 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-bone text-xl font-semibold">{category.name}</h3>
                <p className="text-bone/80 text-sm mt-1">{category.images.length} photos</p>
              </div>
            </button>
          ))}
        </div>

        {hasMore && (
          <button
            onClick={() => setShowAll((v) => !v)}
            className="mt-8 border border-gold text-gold px-6 py-3 rounded hover:bg-gold hover:text-ink transition"
          >
            {showAll ? 'Show fewer categories' : 'View more categories'}
          </button>
        )}
      </div>

      {selected && (
        <div
          className={`fixed inset-0 bg-ink/90 z-50 flex items-center justify-center p-6 transition-opacity duration-300 ${
            overlayVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeCategory}
        >
          <button
            onClick={closeCategory}
            aria-label="Close"
            className="absolute top-5 right-5 text-bone text-3xl leading-none hover:text-gold"
          >
            ×
          </button>

          <div
            className={`relative max-w-3xl w-full transition-all duration-300 ${
              overlayVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={selected.images[imageIndex]}
              alt={`${selected.name} ${imageIndex + 1}`}
              className="w-full max-h-[75vh] object-contain rounded select-none"
            />

            {selected.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-ink/60 text-bone w-10 h-10 rounded-full flex items-center justify-center hover:bg-ink/80"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-ink/60 text-bone w-10 h-10 rounded-full flex items-center justify-center hover:bg-ink/80"
                >
                  ›
                </button>
              </>
            )}

            {caption && (
              <p
                className="text-center text-bone italic text-lg mt-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {caption}
              </p>
            )}

            <p className={`text-center text-bone/80 text-sm ${caption ? 'mt-2' : 'mt-4'}`}>
              {selected.name} — {imageIndex + 1} / {selected.images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio