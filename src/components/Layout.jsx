import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Affiliate', path: '/affiliate' },
    { name: 'Ad Service', path: '/ad-service' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <div className="app-container">
      <Analytics />
      <header className="main-header">
        <div className="container header-content">
          <Link to="/" className="logo">
            <img src="/favicon.png" alt="DSL Logo" className="w-6 h-6" />
            <span>Direct Seller Leads</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href="https://calendly.com/sam-directsellerleads/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://calendly.com/sam-directsellerleads/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                Book a Call
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="main-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src="/favicon.png" alt="DSL Logo" className="w-6 h-6" />
              <span>Direct Seller Leads</span>
            </Link>
            <p className="footer-desc">
              Premium real estate leads for investors, wholesalers, and agents.
              Verified, high-intent, and ready to convert.
            </p>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/why-us">Why Us</Link></li>
              <li><Link to="/affiliate">Affiliate Program</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><Link to="/marketplace">Lead Marketplace</Link></li>
              <li><Link to="/ad-service">Ad Service</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><Link to="/support">Contact Support</Link></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          © {new Date().getFullYear()} Direct Seller Leads. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;

