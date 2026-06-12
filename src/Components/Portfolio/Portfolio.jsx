import React, { useState } from 'react'
import './Portfolio.css'

import shakti from '../../assets/shakti-02.png'
import febi from '../../assets/febi-02.png'
import shopkalakriti from '../../assets/shopkalakriti-01.png'
import events from '../../assets/events-02.png'
import olympics from '../../assets/olympics-01.png'
import lalettre from '../../assets/lalettre-02.png'

const categories = ["All", "Websites", "Design"]

const allProjects = [
  { id: 1, category: 'Websites', image: shakti },
  { id: 2, category: 'Websites', image: febi },
  { id: 3, category: 'Websites', image: shopkalakriti },
  { id: 4, category: 'Websites', image: events },
  { id: 7, category: 'Design',   image: olympics },
  { id: 8, category: 'Design',   image: lalettre },
]

function Portfolio() {
  const [active, setActive] = useState("All")
  const [modalImg, setModalImg] = useState(null)

  const filtered = active === "All"
    ? allProjects
    : allProjects.filter(item => item.category === active)

  return (
    <section className='portfolio-section'>

      {/* Title */}
      <div className='portfolio-title-wrap'>
        <h2 className='portfolio-title'>My Work</h2>
      </div>

      {/* Filter Tabs */}
      <div className='portfolio-tabs'>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`portfolio-tab ${active === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={`portfolio-grid ${active === "Design" ? 'design-grid' : ''}`}>
        {filtered.map(item => (
          <div
            key={item.id}
            onClick={() => item.category === 'Design' && setModalImg(item.image)}
            className={`portfolio-card ${active === "Design" ? 'design-card' : 'website-card'} ${item.category === 'Design' ? 'zoomable' : ''}`}
          >
            <img
              src={item.image}
              alt={item.category}
              className='portfolio-img'
            />

            {item.category === 'Design' && (
              <div className='portfolio-overlay'>
                <span className='zoom-hint'>🔍 Click to expand</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImg && (
        <div className='portfolio-modal' onClick={() => setModalImg(null)}>
          <button className='portfolio-close' onClick={() => setModalImg(null)}>
            ✕
          </button>
          <img
            src={modalImg}
            alt='expanded'
            onClick={e => e.stopPropagation()}
            className='portfolio-modal-img'
          />
        </div>
      )}

    </section>
  )
}

export default Portfolio