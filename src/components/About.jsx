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
    { label: 'Nom complet', value: "EHOUSSOUS Boman-N'gouan Oint Phanuel", icon: 'fa-user-check' },
    { label: 'Statut actuel', value: "Étudiant en Génie Logiciel (depuis 1 an)", icon: 'fa-university' },
    { label: 'Établissement', value: 'Institut Ivoirien de Technologie (IIT)', icon: 'fa-graduation-cap' },
    { label: 'Localisation', value: 'Grand-Bassam, Côte d\'Ivoire', icon: 'fa-map-pin' },
    { label: 'Téléphone', value: '+225 05 76 55 59 62', icon: 'fa-phone' },
    { label: 'Adresse Email', value: 'phanuelehoussou@gmail.com', icon: 'fa-envelope' },
    { label: 'Langues', value: 'Français (courant), Anglais (conversationnel courant)', icon: 'fa-globe-africa' },
    { label: 'Environnement', value: 'Collaboration multiculturelle & Travail d\'équipe', icon: 'fa-users' },
  ];

  const highlights = [
    {
      icon: 'fa-brain',
      title: 'Esprit analytique & Rigueur',
      desc: 'Capacité à décomposer des problèmes complexes pour concevoir des architectures logicielles fiables, maintenables et évolutives.'
    },
    {
      icon: 'fa-cubes',
      title: 'Architectures Logicielles',
      desc: 'Formation active aux méthodologies modernes, modélisation relationnelle de bases de données et conception d\'applications scalables.'
    },
    {
      icon: 'fa-users',
      title: 'Collaboration multiculturelle',
      desc: 'Aptitude reconnue au travail en équipe, communication fluide et intégration harmonieuse au sein d\'environnements variés.'
    },
    {
      icon: 'fa-language',
      title: 'Anglais conversationnel',
      desc: 'Niveau conversationnel courant permettant de collaborer, lire et rédiger aisément de la documentation technique en langue anglaise.'
    }
  ];

  const hobbies = [
    {
      icon: 'fa-futbol',
      title: 'Football',
      desc: 'Esprit d\'équipe, sens tactique, solidarité sur le terrain et persévérance dans l\'effort collectif.'
    },
    {
      icon: 'fa-book-open-reader',
      title: 'La lecture',
      desc: 'Curiosité intellectuelle constante, ouverture d\'esprit et soif continue d\'enrichir mes connaissances.'
    },
    {
      icon: 'fa-basketball',
      title: 'Basketball',
      desc: 'Dynamisme, prise de décision rapide sous pression, réactivité et coordination collective.'
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
            Étudiant passionné par la conception logicielle, doté d'un esprit analytique et déterminé à concevoir des solutions applicatives robustes.
          </p>
        </div>

        <div className="row g-5 align-items-center mb-5">
          <div className="col-lg-5">
            <div className="about-image-wrapper fade-in-left">
              <div className="about-image-card">
                <img 
                  src={profileImg} 
                  alt="EHOUSSOUS BOMAN-N'GOUAN OINT PHANUEL" 
                />
                <div className="about-image-overlay">
                  <div className="overlay-quote">
                    <i className="fas fa-quote-left"></i>
                    <p>Concevoir des applications robustes et scalables en alliant rigueur théorique et esprit collaboratif.</p>
                  </div>
                  <span className="badge-identity">Phanuel EHOUSSOUS</span>
                </div>
              </div>
              <div className="about-shape shape-1"></div>
              <div className="about-shape shape-2"></div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-content">
              <h3 className="about-heading fade-in-right">
                Étudiant en Génie Logiciel, <span className="gradient-text">bâtisseur d'applications fiables</span>
              </h3>

              <div className="cv-quote-box glass-card p-3 mb-3 fade-in-right" style={{ borderLeft: '4px solid var(--accent)', background: 'rgba(108, 99, 255, 0.08)' }}>
                <p className="mb-0" style={{ fontStyle: 'italic', color: '#cbd5e1', lineHeight: '1.7' }}>
                  « Étudiant en Génie Logiciel depuis un an, je me forme activement aux méthodologies de développement, aux architectures logicielles et aux bonnes pratiques de l'industrie. Passionné par la conception d'applications robustes et scalables, je cherche à mettre à profit mes connaissances théoriques dans un environnement professionnel stimulant. Rigoureux et doté d'un esprit analytique, je suis déterminé à contribuer à des projets innovants tout en continuant à développer mes compétences techniques et collaboratives. »
                </p>
              </div>

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
                  <span>Consulter mes compétences (CV)</span>
                </button>
                <button 
                  className="btn-outline-custom"
                  onClick={() => scrollTo('contact')}
                >
                  <i className="fas fa-comment-dots"></i>
                  <span>Me contacter</span>
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

        {/* Section Activités et Loisirs extraite du CV */}
        <div className="mt-5 fade-in-up">
          <div className="d-flex align-items-center gap-2 mb-4 justify-content-center">
            <div className="section-badge-pill mb-0">
              <i className="fas fa-heart"></i>
              <span>Activités et Loisirs</span>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {hobbies.map((hobby, idx) => (
              <div key={idx} className="col-md-4">
                <div className="highlight-card glass-card text-center h-100">
                  <div className="highlight-icon-wrap mx-auto">
                    <i className={`fas ${hobby.icon}`}></i>
                  </div>
                  <h4 className="highlight-title">{hobby.title}</h4>
                  <p className="highlight-desc">{hobby.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
