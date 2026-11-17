import { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Développeur Cloud & DevOps',
    'Développeur Web Full-Stack',
    'Étudiant passionné en Informatique',
    'Architecte de solutions modernes'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex % titles.length];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 35);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="introduction" className="hero-section">
      {/* Background orbs & animated elements */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-lines"></div>
      </div>

      <div className="container position-relative z-2">
        <div className="row align-items-center min-vh-100 py-5">
          <div className="col-lg-7 hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span className="hero-badge-tag">Introduction</span>
              <span className="badge-separator">•</span>
              <span className="hero-badge-title">Qui je suis ?</span>
            </div>
            
            <h1 className="hero-name">
              <span className="greeting">Bonjour & bienvenue, je suis</span>
              <span className="first-name gradient-text">EHOUSSOU</span>
              <span className="full-name">Boman-N'gouan Oint Phanuel</span>
            </h1>

            <div className="hero-typing">
              <span className="typing-prefix">Je suis </span>
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>

            <p className="hero-description">
              Passionné par l'architecture des systèmes d'information, le Cloud Computing et le développement d'applications web modernes et performantes. Je combine rigueur d'ingénierie, créativité et maîtrise technique pour donner vie à des solutions numériques d'exception.
            </p>

            <div className="hero-buttons">
              <button 
                className="btn-primary-custom" 
                onClick={() => scrollTo('projets')}
              >
                <i className="fas fa-layer-group"></i>
                <span>Ce que j'ai fait</span>
              </button>
              <button 
                className="btn-outline-custom" 
                onClick={() => scrollTo('cv')}
              >
                <i className="fas fa-id-badge"></i>
                <span>Ce que je sais faire</span>
              </button>
              <button 
                className="btn-subtle-custom" 
                onClick={() => scrollTo('contact')}
              >
                <i className="fas fa-envelope"></i>
                <span>Me contacter</span>
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">IIT</span>
                <span className="stat-label">École d'Ingénieur</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">Cloud</span>
                <span className="stat-label">Spécialisation</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">Web & Data</span>
                <span className="stat-label">Écosystème</span>
              </div>
            </div>
          </div>

          <div className="col-lg-5 hero-image-col mt-5 mt-lg-0">
            <div className="hero-image-wrapper">
              <div className="image-glow"></div>
              <div className="image-ring ring-1"></div>
              <div className="image-ring ring-2"></div>
              
              <div className="profile-image-container">
                <img 
                  src={profileImg} 
                  alt="EHOUSSOU BOMAN-N'GOUAN OINT PHANUEL" 
                  className="profile-image" 
                />
              </div>

              {/* Floating tech badges */}
              <div className="floating-badge badge-1" title="React.js">
                <i className="fab fa-react"></i>
              </div>
              <div className="floating-badge badge-2" title="Python">
                <i className="fab fa-python"></i>
              </div>
              <div className="floating-badge badge-3" title="Cloud AWS / GCP">
                <i className="fab fa-aws"></i>
              </div>
              <div className="floating-badge badge-4" title="JavaScript & Node">
                <i className="fab fa-js-square"></i>
              </div>
              <div className="floating-badge badge-5" title="Bootstrap 5">
                <i className="fab fa-bootstrap"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="scroll-indicator" 
        onClick={() => scrollTo('qui-suis-je-details')}
        style={{ cursor: 'pointer' }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Découvrir mon profil</span>
      </div>
    </section>
  );
};

export default Hero;
