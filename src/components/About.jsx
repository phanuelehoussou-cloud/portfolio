import { useEffect, useRef } from 'react';
import profileImg from '../assets/profile.jpg';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const personalDetails = [
    { label: 'Nom complet', value: "EHOUSSOU Boman-N'gouan Oint Phanuel", icon: 'fa-user-check' },
    { label: 'Statut actuel', value: "Étudiant à l'Institut International de Technologie (IIT)", icon: 'fa-university' },
    { label: 'Spécialité', value: 'Génie Logiciel & Cloud Computing', icon: 'fa-cloud' },
    { label: 'Localisation', value: 'Abidjan, Côte d\'Ivoire', icon: 'fa-map-pin' },
    { label: 'Disponibilité', value: 'Stages, Projets & Collaborations tech', icon: 'fa-calendar-check' },
    { label: 'Langues', value: 'Français (courant), Anglais (technique)', icon: 'fa-globe-africa' },
  ];

  const highlights = [
    {
      icon: 'fa-brain',
      title: 'Esprit d\'analyse',
      desc: 'Capacité à décomposer des problèmes complexes pour en faire des architectures logiques et évolutives.'
    },
    {
      icon: 'fa-bolt',
      title: 'Apprentissage rapide',
      desc: 'Veille technologique active, assimilation agile de nouveaux frameworks et environnements cloud.'
    },
    {
      icon: 'fa-users',
      title: 'Travail d\'équipe',
      desc: 'Communication fluide, collaboration via Git/GitHub et sens du partage des bonnes pratiques.'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Rigueur & Fiabilité',
      desc: 'Code structuré, respect des conventions, modularité et souci des performances applicatives.'
    }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="qui-suis-je-details" className="about-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="title-wrapper fade-in-up">
          <div className="section-badge-pill">
            <i className="fas fa-id-card"></i>
            <span>Partie 1 &bull; Navbar : Introduction</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Qui je suis ?</span>
          </h2>
          <span className="title-line"></span>
          <p className="section-subtitle">
            Une immersion dans mon univers : mes racines académiques, ma vision d'ingénieur et ce qui forge ma détermination au quotidien.
          </p>
        </div>

        <div className="row g-5 align-items-center mb-5">
          <div className="col-lg-5">
            <div className="about-image-wrapper fade-in-left">
              <div className="about-image-card">
                <img 
                  src={profileImg} 
                  alt="EHOUSSOU BOMAN-N'GOUAN OINT PHANUEL" 
                />
                <div className="about-image-overlay">
                  <div className="overlay-quote">
                    <i className="fas fa-quote-left"></i>
                    <p>Bâtir des solutions numériques robustes et centrées sur l'impact humain.</p>
                  </div>
                  <span className="badge-identity">Phanuel EHOUSSOU</span>
                </div>
              </div>
              <div className="about-shape shape-1"></div>
              <div className="about-shape shape-2"></div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-content">
              <h3 className="about-heading fade-in-right">
                Développeur tourné vers l'avenir, guidé par la <span className="gradient-text">passion de créer</span>
              </h3>

              <p className="about-text fade-in-right">
                Je m'appelle <strong>EHOUSSOU BOMAN-N'GOUAN OINT PHANUEL</strong>. Formé à l'Institut International de Technologie (IIT), j'ai développé une solide culture informatique associant les bases fondamentales de l'algorithmique et du génie logiciel aux paradigmes modernes du <strong>Cloud Computing</strong> et du <strong>Développement Web réactif</strong>.
              </p>

              <p className="about-text fade-in-right">
                Mon approche repose sur une conviction : une solution technique ne doit pas seulement fonctionner, elle doit être élégante, intuitive et évolutive. C'est pourquoi j'accorde une importance majeure à la propreté du code (clean code), à l'ergonomie (UI/UX) et aux architectures cloud automatisées.
              </p>

              <div className="about-info-grid fade-in-up">
                {personalDetails.map((item, index) => (
                  <div key={index} className="about-info-item">
                    <div className="info-icon">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div className="info-content">
                      <span className="info-label">{item.label}</span>
                      <span className="info-value">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="about-cta-group fade-in-up">
                <button 
                  className="btn-primary-custom"
                  onClick={() => scrollTo('cv')}
                >
                  <i className="fas fa-arrow-down"></i>
                  <span>Découvrir ce que je sais faire (CV)</span>
                </button>
                <button 
                  className="btn-outline-custom"
                  onClick={() => scrollTo('contact')}
                >
                  <i className="fas fa-comment-dots"></i>
                  <span>Échanger avec moi</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards: Ce qui me caractérise */}
        <div className="row g-4 mt-2">
          {highlights.map((h, i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <div className="highlight-card glass-card fade-in-up">
                <div className="highlight-icon-wrap">
                  <i className={`fas ${h.icon}`}></i>
                </div>
                <h4 className="highlight-title">{h.title}</h4>
                <p className="highlight-desc">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
