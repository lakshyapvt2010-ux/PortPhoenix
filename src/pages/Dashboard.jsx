import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import { myPortfolios, dashboardStats } from '../data/portfolios'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <div>
            <h1 className="dashboard-title">My Portfolios</h1>
            <p className="dashboard-sub">Manage and publish your digital galleries.</p>
          </div>
          <input
            type="text"
            placeholder="🔍 Search portfolios..."
            className="dash-search"
          />
        </div>

        <div className="portfolio-grid fade-in">
          {myPortfolios.map((portfolio) => (
            <Link key={portfolio.id} to={`/editor/${portfolio.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card className="portfolio-card">
                <div
                  className="portfolio-cover"
                  style={{ background: portfolio.coverColor }}
                >
                  <span className="portfolio-cover-emoji">{portfolio.emoji}</span>
                  <span className={`status-badge ${portfolio.status}`}>
                    {portfolio.status === 'published' ? '● PUBLISHED' : '○ DRAFT'}
                  </span>
                </div>

                <div className="portfolio-info">
                  <h3 className="portfolio-name">{portfolio.title}</h3>
                  <p className="portfolio-desc">{portfolio.description}</p>

                  <div className="portfolio-meta">
                    <span className="portfolio-category">
                      {portfolio.category.toUpperCase()}
                    </span>
                    <div className="portfolio-actions">
                      <Link to={`/editor/${portfolio.id}`} className="icon-btn" title="Edit">
                        ✏️
                      </Link>
                      <Link to={`/showcase/${portfolio.id}`} className="icon-btn" title="View">
                        👁️
                      </Link>
                      <button className="icon-btn" title="Delete" onClick={(e) => e.preventDefault()}>
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}

          <Link to="/gallery" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="portfolio-card create-card">
              <div className="create-card-inner">
                <div className="create-icon">🖼️</div>
                <h3>Create New Portfolio</h3>
                <p>Start a blank canvas or choose from our gallery templates.</p>
              </div>
            </Card>
          </Link>
        </div>

        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-label">TOTAL VIEWS</span>
            <span className="stat-value">{dashboardStats.totalViews}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">PUBLISHED</span>
            <span className="stat-value">{dashboardStats.published}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">STORAGE USED</span>
            <span className="stat-value">{dashboardStats.storageUsed}</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
