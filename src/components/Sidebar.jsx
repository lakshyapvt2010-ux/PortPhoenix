import { Link } from 'react-router-dom'
import { sidebarLinks } from '../data/portfolios'
import './Sidebar.css'

function Sidebar() {
  const currentPath = window.location.pathname

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Link to="/">PortPhoenix</Link>
        <span className="sidebar-plan">PROFESSIONAL PLAN</span>
      </div>

      <nav className="sidebar-nav">
        {sidebarLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className={`sidebar-link ${currentPath === link.path ? 'active' : ''}`}
          >
            <span className="sidebar-icon">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Link to="/gallery" className="btn-primary sidebar-create-btn">
          Create New Site
        </Link>

        <div className="sidebar-user">
          <div className="sidebar-avatar">A</div>
          <span>Alex Mercer</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
