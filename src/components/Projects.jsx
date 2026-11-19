import { useState, useEffect, useRef } from 'react';
import phAiImage from '../assets/ph-ai.png';
import phKingImage from '../assets/ph-king.png';
import eduAiImage from '../assets/edu-ai.png';
import siteWixImage from '../assets/site-wix.png';
import profileImage from '../assets/profile.jpg';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'PH.AI — Assistant vocal intelligent',
      category: 'ai',
      tag: 'Python · IA vocale',
      imageIcon: 'fa-microphone-lines',
      image: phAiImage,
      gradient: 'linear-gradient(135deg, #6c63ff 0%, #4338ca 100%)',
      summary: 'Assistant vocal en français qui écoute les questions et répond avec une voix de synthèse.',
      description: 'PH.AI est un assistant vocal personnel. Le programme reconnaît la parole, interroge un modèle d’intelligence artificielle via l’API Groq et restitue une réponse vocale. Il prend aussi en charge une écoute déclenchée par mot-clé et une interaction au clavier.',
      technologies: ['Python', 'API Groq', 'Reconnaissance vocale', 'Synthèse vocale', 'pygame'],
      github: 'https://github.com/phanuelehoussou-cloud/PH.AI',
      highlights: ['Interaction vocale et textuelle', 'Réponses générées par un modèle de langage', 'Écoute activable par mot-clé'],
    },
    {
      id: 2,
      title: 'ph_king — Agent personnel IA',
      category: 'ai',
      tag: 'Agent IA · Telegram & Web',
      imageIcon: 'fa-robot',
      image: phKingImage,
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
      summary: 'Assistant personnel en français accessible par Telegram et par une interface web.',
      description: 'ph_king est un assistant personnel alimenté par un modèle OpenAI compatible. Le README décrit un bot Telegram et une interface web, ainsi que des fonctions de liste de courses, rappels, gestion de documents PDF et connexion Gmail. Une validation est demandée avant tout envoi Gmail.',
      technologies: ['TypeScript', 'Node.js', 'Telegram', 'OpenAI API', 'SQLite', 'Gmail OAuth'],
      github: 'https://github.com/phanuelehoussou-cloud/agent_ph.ai',
      demo: 'https://agentphai.vercel.app/',
      highlights: ['Accès depuis Telegram et le Web', 'Rappels, liste de courses et documents PDF', 'Validation avant envoi de courriels'],
    },
    {
      id: 3,
      title: 'edu.AI — Tuteur virtuel scolaire',
      category: 'ai',
      tag: 'Projet réalisé en groupe · IA',
      imageIcon: 'fa-graduation-cap',
      image: eduAiImage,
      gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
      summary: 'Tuteur IA destiné aux élèves, conçu en groupe, avec des cours par matière et des échanges vocaux.',
      description: 'edu.AI (Akwaba / EduIA) est un projet réalisé en groupe. Le code présente un tuteur virtuel orienté vers le programme scolaire ivoirien, qui accompagne les élèves dans six domaines : mathématiques, physique-chimie, SVT, philosophie, français et culture générale. Une version Web utilise Flask et une version vocale permet de dialoguer à l’oral.',
      technologies: ['Python', 'Flask', 'API Groq', 'HTML', 'Reconnaissance vocale', 'Synthèse vocale'],
      github: 'https://github.com/phanuelehoussou-cloud/projet_hackathon',
      highlights: ['Projet conçu en groupe', 'Tuteur adapté au contexte scolaire ivoirien', 'Modes Web et vocal'],
    },
    {
      id: 4,
      title: 'Site web PH.King — Rénovation',
      category: 'web',
      tag: 'Reproduction Wix.com · HTML & CSS',
      imageIcon: 'fa-laptop-code',
      image: siteWixImage,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
      summary: 'Reproduction d’un site vitrine repéré sur Wix.com, pour PH.King et son activité de rénovation.',
      description: 'Le dépôt site_wix reproduit un site vitrine présenté sur Wix.com pour PH.King, une société de rénovation. Il comprend une page d’accueil avec bannière principale, une page À propos et une page Contact. L’interface s’appuie sur Bootstrap et des feuilles de style personnalisées.',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'AOS'],
      github: 'https://github.com/phanuelehoussou-cloud/site_wix',
      highlights: ['Reproduction d’un modèle de site présenté sur Wix.com', 'Présentation des services d’aménagement et de rénovation', 'Navigation entre accueil, à propos et contact'],
    },
    {
      id: 5,
      title: 'Portfolio professionnel',
      category: 'web',
      tag: 'React · Vite',
      imageIcon: 'fa-gem',
      image: profileImage,
      gradient: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
      summary: 'Portfolio monopage présentant le parcours, les compétences, les projets et les moyens de contact.',
      description: 'Application monopage responsive développée avec React 19, Vite et Bootstrap 5 dans le cadre du cursus à l’Institut Ivoirien de Technologie. Elle rassemble le profil, le CV, les projets et les coordonnées de contact.',
      technologies: ['React 19', 'Vite', 'Bootstrap 5', 'JavaScript', 'CSS'],
      github: 'https://github.com/phanuelehoussou-cloud/portfolio',
      highlights: ['Application monopage responsive', 'Sections profil, CV, projets et contact', 'Développé dans le cadre du cursus à l’IIT'],
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projets" className="projects-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="title-wrapper fade-in-up">
          <div className="section-badge-pill">
            <i className="fas fa-layer-group"></i>
            <span>Partie 3 &bull; : Projets</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Ce que j'ai fait</span>
          </h2>
          <span className="title-line"></span>
          <p className="section-subtitle">
            Cinq réalisations autour de l’intelligence artificielle, des assistants vocaux et du développement web.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="projects-filter-wrapper fade-in-up">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tous les projets ({projects.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            <i className="fas fa-brain"></i> Intelligence artificielle
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            <i className="fab fa-bootstrap"></i> Web & Bootstrap 5
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="project-card glass-card fade-in-up">
                <div 
                  className="project-banner"
                  style={{ background: project.gradient }}
                >
                  {project.image ? (
                    <img className="project-banner-image" src={project.image} alt={`Capture d’écran du projet ${project.title}`} />
                  ) : (
                    <div className="project-icon-large">
                      <i className={`fas ${project.imageIcon}`}></i>
                    </div>
                  )}
                  <span className="project-tag-badge">{project.tag}</span>
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>

                  <div className="project-tech-tags">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag tag-more">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  <div className="project-actions">
                    <button 
                      className="btn-project-details"
                      onClick={() => setActiveModalProject(project)}
                    >
                      <i className="fas fa-circle-info"></i>
                      <span>Détails</span>
                    </button>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-project-link"
                      title="Voir le code sur GitHub"
                    >
                      <i className="fab fa-github"></i>
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats counter strip */}
        <div className="projects-metrics-strip glass-card fade-in-up mt-5">
          <div className="row g-3 text-center">
            <div className="col-6 col-md-3">
              <div className="metric-box">
                <span className="metric-number">5</span>
                <span className="metric-name">Projets Majeurs</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="metric-box">
                <span className="metric-number">100%</span>
                <span className="metric-name">Code Versionné Git</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="metric-box">
                <span className="metric-number">3</span>
                <span className="metric-name">Projets IA</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="metric-box">
                <span className="metric-number">2</span>
                <span className="metric-name">Projets Web</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modal for project details */}
      {activeModalProject && (
        <div className="project-modal-backdrop" onClick={() => setActiveModalProject(null)}>
          <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setActiveModalProject(null)}
              aria-label="Fermer"
            >
              <i className="fas fa-times"></i>
            </button>

            <div 
              className="modal-header-banner"
              style={{ background: activeModalProject.gradient }}
            >
              <div className="modal-banner-icon">
                <i className={`fas ${activeModalProject.imageIcon}`}></i>
              </div>
              <div>
                <span className="modal-badge">{activeModalProject.tag}</span>
                <h3 className="modal-title">{activeModalProject.title}</h3>
              </div>
            </div>

            <div className="modal-body-content">
              <h5 className="modal-section-title">
                <i className="fas fa-align-left text-accent"></i> Description du projet
              </h5>
              <p className="modal-description-text">{activeModalProject.description}</p>

              <h5 className="modal-section-title mt-4">
                <i className="fas fa-star text-warning"></i> Points forts & Résultats
              </h5>
              <ul className="modal-highlights-list">
                {activeModalProject.highlights.map((h, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h5 className="modal-section-title mt-4">
                <i className="fas fa-microchip text-primary"></i> Technologies mobilisées
              </h5>
              <div className="modal-tags-wrap">
                {activeModalProject.technologies.map((t, i) => (
                  <span key={i} className="modal-tech-tag">{t}</span>
                ))}
              </div>

              <div className="modal-footer-actions mt-4 pt-3 border-top border-secondary border-opacity-25">
                <a 
                  href={activeModalProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary-custom"
                >
                  <i className="fab fa-github"></i>
                  <span>Consulter sur GitHub</span>
                </a>
                <button 
                  className="btn-outline-custom"
                  onClick={() => setActiveModalProject(null)}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
