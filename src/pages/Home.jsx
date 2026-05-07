import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { howItWorksSteps, featuredPortfolios } from '../data/portfolios'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Navbar />

      <section className="hero fade-in">
        <div className="container hero-content">
          <h1 className="hero-title">
            Build your professional
            <span className="hero-highlight"> portfolio</span>
            <br /> in minutes.
          </h1>

          <p className="hero-sub">
            Create a stunning digital gallery that showcases your work with
            architectural precision. No coding required. Just pure, professional
            presentation.
          </p>

          <div className="hero-actions">
            <Link to="/gallery" className="btn-primary">
              Start Building Free
            </Link>
            <Link to="/showcase/1" className="btn-outline">
              View Examples
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-mockup">
            <div className="mockup-bar">
              <span></span><span></span><span></span>
            </div>
            <div className="mockup-content">
              <div className="mockup-img-placeholder">
                <span>🖼️</span>
              </div>
              <div className="mockup-lines">
                <div className="mockup-line long"></div>
                <div className="mockup-line medium"></div>
                <div className="mockup-line short"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="features">
        <div className="container">
          <h2 className="section-title">How it Works</h2>
          <p className="section-sub">
            From blank canvas to professional gallery in three simple steps.
          </p>

          <div className="steps-grid">
            {howItWorksSteps.map((step) => (
              <div className="step-card" key={step.step}>
                <div className="step-number">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Portfolios</h2>
          <p className="section-sub">
            See what creators have built using PortPhoenix.
          </p>

          <div className="featured-grid">
            {featuredPortfolios.map((portfolio) => (
              <Link
                to={`/showcase/${portfolio.id}`}
                key={portfolio.id}
                className="featured-card"
                style={{ background: portfolio.color }}
              >
                <span className="featured-emoji">{portfolio.emoji}</span>
                <div className="featured-info">
                  <h3>{portfolio.name}</h3>
                  <p>{portfolio.tagline}</p>
                </div>
                <span className="featured-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-content">
          <h2 className="cta-title">Ready to showcase your work?</h2>
          <p className="cta-sub">
            Join thousands of creators who trust PortPhoenix.
          </p>
          <Link to="/gallery" className="btn-primary">
            Get Started for Free
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-logo">PortPhoenix</span>
          <span className="footer-copy">
            © 2024 PortPhoenix. The Digital Gallery for Professionals.
          </span>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
