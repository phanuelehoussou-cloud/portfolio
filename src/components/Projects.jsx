import { useState, useEffect, useRef } from 'react';
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
      title: 'Application Web Flask & Analyse de Données',
      category: 'python',
      tag: 'Python & Flask',
      imageIcon: 'fa-pepper-hot',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      summary: 'Plateforme web interactive développée avec Flask, intégrant Pandas et NumPy pour le traitement analytique de données.',
      description: 'Conception d\'une application web complète avec le micro-framework Flask. Intègre des modules Python utilisant Pandas et NumPy pour ingérer, nettoyer et analyser des séries statistiques avec restitution visuelle sous Bootstrap 5.',
      technologies: ['Python', 'Flask', 'Pandas', 'NumPy', 'Bootstrap 5', 'HTML5/CSS3'],
      github: 'https://github.com/phanuelehoussou-cloud',
      demo: '#',
      highlights: [
        'Architecture backend modulaire avec routage dynamique Flask',
        'Agrégations et analyses statistiques rapides avec Pandas & NumPy',
        'Interface utilisateur épurée et entièrement responsive avec Bootstrap 5'
      ]
    },
    {
      id: 2,
      title: 'Conception de Base de Données & Requêtes Complexes T-SQL',
      category: 'sql',
      tag: 'SQL Server & T-SQL',
      imageIcon: 'fa-database',
      gradient: 'linear-gradient(135deg, #00d4aa 0%, #0d9488 100%)',
      summary: 'Modélisation relationnelle rigoureuse et écriture de requêtes complexes sous Microsoft SQL Server.',
      description: 'Élaboration de schémas relationnels normalisés (3NF) pour un système d\'information complexe. Écriture de requêtes T-SQL avancées (jointures multiples, sous-requêtes, fenêtrage, vues et procédures stockées).',
      technologies: ['SQL Server', 'T-SQL', 'Schémas relationnels', 'Normalisation 3NF', 'Procédures stockées'],
      github: 'https://github.com/phanuelehoussou-cloud',
      demo: '#',
      highlights: [
        'Modélisation entité-association respectant scrupuleusement l\'intégrité référentielle',
        'Optimisation du temps d\'exécution des requêtes grâce à une indexation ciblée',
        'Création de procédures stockées sécurisées pour les opérations critiques'
      ]
    },
    {
      id: 3,
      title: 'Module de Programmation Système & Algorithmes en Langage C',
      category: 'system',
      tag: 'Langage C & Système',
      imageIcon: 'fa-microchip',
      gradient: 'linear-gradient(135deg, #6c63ff 0%, #8b5cf6 100%)',
      summary: 'Implémentation d\'algorithmes fondamentaux et gestion dynamique de mémoire en langage C.',
      description: 'Développement d\'un ensemble d\'outils système et de structures de données dynamiques (listes simplement et doublement chaînées, piles, files) en langage C avec gestion rigoureuse des pointeurs et absence de fuites de mémoire (valgrind compliant).',
      technologies: ['Langage C', 'Programmation système', 'Pointeurs', 'Gestion mémoire (malloc/free)', 'Algorithmique'],
      github: 'https://github.com/phanuelehoussou-cloud',
      demo: '#',
      highlights: [
        'Maîtrise approfondie de l\'allocation dynamique et des arithmétiques de pointeurs',
        'Implémentation robuste de structures de données linéaires et arborescentes',
        'Optimisation des performances d\'exécution et de l\'empreinte mémoire'
      ]
    },
    {
      id: 4,
      title: 'Portfolio Professionnel Réactif & Moderne',
      category: 'web',
      tag: 'Web & Bootstrap 5',
      imageIcon: 'fa-gem',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
      summary: 'Application web monopage réactive mettant en valeur les compétences et le CV d\'EHOUSSOUS Phanuel.',
      description: 'Création d\'un portfolio interactif responsive avec une esthétique moderne (dark theme, glassmorphism). Intègre des composants dynamiques, des ancres de défilement fluide et une conformité rigoureuse aux standards du web.',
      technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'React 19'],
      github: 'https://github.com/phanuelehoussou-cloud/portfolio.git',
      demo: '#',
      highlights: [
        'Single Page Application (SPA) ergonomique avec défilement fluide',
        'Intégration fidèle des compétences du CV (Python, Flask, C, SQL Server, Bootstrap)',
        'Navigation responsive fluide avec barre d\'ancres interactives'
      ]
    },
    {
      id: 5,
      title: 'Application Web de Gestion Académique (IIT)',
      category: 'python',
      tag: 'Flask & SQL',
      imageIcon: 'fa-graduation-cap',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
      summary: 'Système web de gestion pédagogique et des évaluations pour les étudiants de l\'IIT.',
      description: 'Projet collaboratif réalisé dans le cadre de la formation en Génie Logiciel à l\'IIT. Permet la gestion des inscriptions, l\'enregistrement des notes et le calcul automatique des moyennes avec stockage en base de données relationnelle.',
      technologies: ['Python', 'Flask', 'SQL Server', 'Bootstrap 5', 'Jinja2'],
      github: 'https://github.com/phanuelehoussou-cloud',
      demo: '#',
      highlights: [
        'Authentification sécurisée et séparation des rôles (enseignant / étudiant)',
        'Calcul automatisé des moyennes et des rangs avec gestion des coefficients',
        'Interface épurée et ergonomique facilitant la saisie rapide des notes'
      ]
    },
    {
      id: 6,
      title: 'Traitement de Données & Scripts Analytiques',
      category: 'python',
      tag: 'Python & Data',
      imageIcon: 'fa-chart-simple',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)',
      summary: 'Suite de scripts Python pour l\'extraction, le nettoyage et la modélisation statistique de données.',
      description: 'Pipeline de traitement de jeux de données volumineux : manipulation de DataFrames avec Pandas, calculs vectorisés avec NumPy et génération automatique de rapports synthétiques.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Cleaning'],
      github: 'https://github.com/phanuelehoussou-cloud',
      demo: '#',
      highlights: [
        'Nettoyage automatisé et gestion des valeurs manquantes dans les jeux de données',
        'Calculs matriciels vectorisés haute performance avec NumPy',
        'Génération de visualisations graphiques pertinentes pour l\'aide à la décision'
      ]
    }
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
            <span>Partie 3 &bull; Navbar : Projets</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Ce que j'ai fait</span>
          </h2>
          <span className="title-line"></span>
          <p className="section-subtitle">
            Une sélection de réalisations techniques concrètes démontrant mon savoir-faire en Python, Flask, SQL Server, langage C et développement web moderne.
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
            className={`filter-btn ${filter === 'python' ? 'active' : ''}`}
            onClick={() => setFilter('python')}
          >
            <i className="fab fa-python"></i> Python & Flask
          </button>
          <button 
            className={`filter-btn ${filter === 'sql' ? 'active' : ''}`}
            onClick={() => setFilter('sql')}
          >
            <i className="fas fa-database"></i> SQL Server
          </button>
          <button 
            className={`filter-btn ${filter === 'system' ? 'active' : ''}`}
            onClick={() => setFilter('system')}
          >
            <i className="fas fa-microchip"></i> Langage C (Système)
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
                  <div className="project-icon-large">
                    <i className={`fas ${project.imageIcon}`}></i>
                  </div>
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
                <span className="metric-number">6+</span>
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
                <span className="metric-number">AWS & GCP</span>
                <span className="metric-name">Plateformes Cloud</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="metric-box">
                <span className="metric-number">React 19</span>
                <span className="metric-name">Frontend Moderne</span>
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
