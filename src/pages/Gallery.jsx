import { useState } from 'react'
import Navbar from '../components/Navbar'
import TemplateCard from '../components/TemplateCard'
import { templates } from '../data/portfolios'
import './Gallery.css'

const CATEGORIES = ['All', 'Creative', 'Minimal', 'Corporate']

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      activeCategory === 'All' || template.category === activeCategory

    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )

    return matchesCategory && matchesSearch
  })

  return (
    <div className="gallery-page">
      <Navbar />

      <div className="container gallery-container fade-in">
        <div className="gallery-header">
          <div className="gallery-title-block">
            <h1 className="gallery-title">Template Gallery</h1>
            <p className="gallery-sub">
              Discover professionally crafted portfolio templates designed to
              elevate your creative work. Clean, minimal, and fully customizable.
            </p>
          </div>

          <div className="gallery-controls">
            <div className="filter-buttons">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <input
              type="text"
              className="search-input"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <p className="results-count">
          Showing {filteredTemplates.length} template
          {filteredTemplates.length !== 1 ? 's' : ''}
        </p>

        {filteredTemplates.length > 0 ? (
          <div className="templates-grid">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-icon">🔍</span>
            <h3>No templates found</h3>
            <p>Try a different search term or category.</p>
            <button
              className="btn-outline"
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('All')
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <footer className="gallery-footer">
        <div className="container footer-inner">
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>PortPhoenix</span>
          <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>© 2024 PortPhoenix. The Digital Gallery for Professionals.</span>
          <div className="footer-links">
            {['Privacy Policy', 'Terms of Service', 'Support', 'Contact'].map(l => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Gallery
