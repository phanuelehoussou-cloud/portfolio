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
      title: 'Cloud Infrastructure & Microservices Orchestration',
      category: 'cloud',
      tag: 'Cloud & DevOps',
      imageIcon: 'fa-cloud-meatball',
      gradient: 'linear-gradient(135deg, #6c63ff 0%, #3b82f6 100%)',
      summary: 'Architecture cloud scalable déployée sur AWS avec conteneurisation Docker, passerelle API et supervision.',
      description: 'Conception d\'une infrastructure cloud haute disponibilité déployée sur AWS. Découpage en microservices conteneurisés avec Docker, automatisation du déploiement via GitHub Actions CI/CD et surveillance des métriques en temps réel.',
      technologies: ['AWS EC2/S3', 'Docker', 'GitHub Actions', 'Nginx', 'Prometheus'],
      github: 'https://github.com/phanuelehoussou-cloud',
      demo: '#',
      highlights: [
        'Déploiement automatisé sans interruption de service (Zero-downtime)',
        'Isolation sécurisée des environnements via VPC et Security Groups',
        'Réduction de 40% du temps de build grâce au cache Docker multi-stage'
      ]
    },
    {
      id: 2,
      title: 'Portfolio Interactif & Dynamique React.js',
      category: 'web',
      tag: 'React & Frontend',
      imageIcon: 'fa-gem',
      gradient: 'linear-gradient(135deg, #00d4aa 0%, #6c63ff 100%)',
      summary: 'Application web monopage réactive développée avec React 19, Bootstrap 5 et navigation par ancres animées.',
      description: 'Création d\'un portfolio dynamique haut de gamme mettant en valeur les compétences et projets de EHOUSSOU Boman-N\'gouan Oint Phanuel. Intègre un design moderne (glassmorphism), des animations fluides et une adaptabilité mobile totale.',
      technologies: ['React 19', 'Vite', 'Bootstrap 5', 'CSS Grid', 'Font Awesome'],
      github: 'https://github.com/phanuelehoussou-cloud/portfolio.git',
      demo: '#',
      highlights: [
        'Single Page Application (SPA) dynamique avec défilement fluide',
        'Navbar interactive synchronisée en temps réel avec la position de défilement',
        'Performance Lighthouse 95+ grâce à l\'optimisation Vite'
      ]
    },
    {
      id: 3,
      title: 'Plateforme E-Commerce Full-Stack & API REST',
      category: 'fullstack',
      tag: 'Full-Stack',
      imageIcon: 'fa-bag-shopping',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      summary: 'Système complet de commerce électronique avec panier temps réel, gestion des stocks et paiement sécurisé.',
      description: 'Développement d\'une plateforme web complète intégrant une interface utilisateur dynamique sous React et un backend Node.js/Express. Gestion sécurisée de l\'authentification JWT, des sessions utilisateurs et du catalogue produits.',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      github: 'https://github.com/phanuelehoussou-cloud',
      demo: '#',
      highlights: [
        'Authentification par JSON Web Token (JWT) et hachage bcrypt',
        'Gestion d\'état centralisée avec Context API et hooks personnalisés',
        'Base de données NoSQL optimisée avec indexation performante'
      ]
    },
    {
      id: 4,
      title: 'Système de Surveillance & Automatisation DevOps',
      category: 'cloud',
      tag: 'DevOps & Bash',
      imageIcon: 'fa-terminal',
      gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
      summary: 'Suite de scripts d\'automatisation Bash et Python pour la maintenance des serveurs Linux et la sauvegarde automatique.',
      description: 'Mise en place d\'une suite d\'outils d\'automatisation système : surveillance de l\'espace disque, de la mémoire RAM et des processus critiques, génération d\'alertes automatiques par e-mail et synchronisation cloud des sauvegardes vers AWS S3.',
      technologies: ['Bash', 'Python', 'Linux Ubuntu', 'Cron jobs', 'AWS CLI'],
      github: 'https://github.com/phanuelehoussou-cloud',
      demo: '#',
      highlights: [
        'Automatisation complète des sauvegardes nocturnes vers le stockage cloud',
        'Détection proactive des anomalies système et notification instantanée',
        'Gain de temps estimé à 5 heures par semaine sur la maintenance serveurs'
      ]
    },
    {
      id: 5,
      title: 'Application Web de Gestion Académique (IIT)',
      category: 'fullstack',
      tag: 'Full-Stack & SQL',
      imageIcon: 'fa-graduation-cap',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      summary: 'Application web de gestion des notes, des plannings et du suivi pédagogique des étudiants de l\'IIT.',
      description: 'Projet d\'équipe réalisé dans le cadre du cursus à l\'IIT. Conception du schéma relationnel de la base de données, implémentation des vues SQL et réalisation du panneau d\'administration pour les enseignants et les étudiants.',
      technologies: ['PHP / Node.js', 'MySQL', 'Bootstrap 5', 'JavaScript', 'Git'],
      github: 'https://github.com/phanuelehoussou-cloud',
      demo: '#',
      highlights: [
        'Modélisation entité-association avec respect de la 3ème forme normale (3NF)',
        'Gestion des droits d\'accès selon les rôles (Admin, Professeur, Étudiant)',
        'Génération automatique de relevés de notes au format PDF'
      ]
    },
    {
      id: 6,
      title: 'Dashboard Analytique & Visualisation de Données',
      category: 'web',
      tag: 'Frontend & Data',
      imageIcon: 'fa-chart-pie',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
      summary: 'Tableau de bord interactif affichant des métriques en temps réel avec graphiques interactifs et filtres multidimensionnels.',
      description: 'Interface web moderne permettant d\'explorer des flux de données en direct : consommation réseau, requêtes serveur et indicateurs de performance. Offre des graphiques personnalisables et une navigation fluide.',
      technologies: ['React.js', 'Chart.js', 'Bootstrap Grid', 'CSS Modules'],
      github: 'https://github.com/phanuelehoussou-cloud',
      demo: '#',
      highlights: [
        'Rendu graphique réactif en temps réel avec WebSocket',
        'Mode sombre / clair dynamique avec mémorisation locale',
        'Architecture composable hautement réutilisable'
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
            Une sélection de réalisations techniques concrètes démontrant mon savoir-faire en Cloud, DevOps et développement web.
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
            className={`filter-btn ${filter === 'cloud' ? 'active' : ''}`}
            onClick={() => setFilter('cloud')}
          >
            <i className="fas fa-cloud"></i> Cloud & DevOps
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            <i className="fas fa-desktop"></i> Web & React
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            <i className="fas fa-database"></i> Full-Stack
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
