import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('introduction');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['introduction', 'cv', 'projets', 'contact'];
      for (const section of sections.slice().reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveLink(sectionId);
    setMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'introduction', label: 'Introduction', sub: 'Qui je suis ?', icon: 'fa-user' },
    { id: 'cv', label: 'CV', sub: 'Ce que je sais faire', icon: 'fa-file-alt' },
    { id: 'projets', label: 'Projets', sub: "Ce que j'ai fait", icon: 'fa-laptop-code' },
    { id: 'contact', label: 'Contact', sub: 'Me contacter', icon: 'fa-paper-plane' },
  ];

  return (
    <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a 
          href="#introduction" 
          className="nav-logo" 
          onClick={(e) => { e.preventDefault(); handleNavClick('introduction'); }}
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">PE</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
            >
              <i className={`fas ${link.icon}`}></i>
              <div className="nav-text-group">
                <span className="nav-label">{link.label}</span>
                <span className="nav-sub">{link.sub}</span>
              </div>
              {activeLink === link.id && <div className="active-indicator"></div>}
            </a>
          ))}

          <a 
            href="#contact" 
            className="btn-nav-cta d-lg-inline-flex d-none"
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
          >
            Me contacter
          </a>
        </div>

        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu de navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
