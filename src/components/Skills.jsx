import { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');
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

  const skillCategories = [
    {
      category: 'Cloud Computing & DevOps',
      icon: 'fa-cloud',
      skills: [
        { name: 'Amazon Web Services (AWS)', level: 80, desc: 'EC2, S3, IAM, Lambda, VPC basics' },
        { name: 'Google Cloud Platform (GCP)', level: 75, desc: 'Cloud Run, Compute Engine, Storage' },
        { name: 'Docker & Conteneurisation', level: 82, desc: 'Dockerfile, Compose, Microservices' },
        { name: 'CI/CD & Git/GitHub Actions', level: 85, desc: 'Pipelines d\'automatisation, workflow Git' },
        { name: 'Linux & Administration Système', level: 80, desc: 'Bash scripting, SSH, serveurs Ubuntu/Debian' },
      ]
    },
    {
      category: 'Développement Frontend',
      icon: 'fa-laptop-code',
      skills: [
        { name: 'React.js', level: 88, desc: 'Hooks, Context API, composants modulaires' },
        { name: 'JavaScript moderne (ES6+)', level: 85, desc: 'Asynchrone, DOM, architecture modulaire' },
        { name: 'HTML5 & CSS3 sémantiques', level: 92, desc: 'Flexbox, CSS Grid, animations fluides' },
        { name: 'Bootstrap 5 & Frameworks CSS', level: 90, desc: 'Responsive design, composants UI prêts' },
        { name: 'UI/UX Design & Ergonomie', level: 80, desc: 'Wireframing, prototypes Figma, accessibilité' },
      ]
    },
    {
      category: 'Développement Backend & Bases de données',
      icon: 'fa-server',
      skills: [
        { name: 'Node.js & Express', level: 80, desc: 'APIs RESTful, middleware, authentification' },
        { name: 'Python', level: 78, desc: 'Scripts d\'automatisation, Django/Flask' },
        { name: 'SQL & Bases relationnelles (MySQL / PostgreSQL)', level: 82, desc: 'Modélisation, requêtes complexes' },
        { name: 'NoSQL (MongoDB / Firebase)', level: 75, desc: 'Documents JSON, temps réel, indexation' },
        { name: 'Sécurité & Bonnes pratiques API', level: 78, desc: 'CORS, JWT, chiffrement, sanitization' },
      ]
    },
    {
      category: 'Outils & Méthodologies',
      icon: 'fa-screwdriver-wrench',
      skills: [
        { name: 'Git & Versioning collaboratif', level: 90, desc: 'Branching, PRs, résolutions de conflits' },
        { name: 'Méthodes Agiles / Scrum', level: 85, desc: 'Sprints, daily standups, backlog management' },
        { name: 'VS Code, Postman & CLI', level: 92, desc: 'Débogage, tests d\'API REST, terminal' },
        { name: 'Vite & Bundlers modernes', level: 88, desc: 'Optimisation de builds, hot reload' },
      ]
    }
  ];

  const educationTimeline = [
    {
      period: '2023 - Présent',
      title: 'Diplôme d\'Ingénieur / Licence en Informatique',
      institution: 'Institut International de Technologie (IIT)',
      location: 'Côte d\'Ivoire',
      desc: 'Formation approfondie axée sur le Cloud Computing, le génie logiciel, les systèmes distribués, les réseaux et la sécurité applicative.',
      badges: ['Cloud Architecture', 'Génie Logiciel', 'DevOps', 'Bases de données']
    },
    {
      period: 'Formation Continue',
      title: 'Spécialisations Certifiantes Cloud & Web',
      institution: 'Auto-formation & Plateformes professionnelles',
      location: 'En ligne',
      desc: 'Apprentissage continu sur AWS Cloud Practitioner, architectures React avancées, conteneurisation Docker et automatisation CI/CD.',
      badges: ['AWS', 'Docker', 'React Ecosystem', 'Microservices']
    },
    {
      period: 'Parcours Préparatoire',
      title: 'Baccalauréat Scientifique',
      institution: 'Lycée Scientifique',
      location: 'Côte d\'Ivoire',
      desc: 'Excellence en mathématiques, algorithmique, logique formelle et physique, constituant le socle de mes compétences analytiques.',
      badges: ['Mathématiques', 'Logique', 'Sciences Appliquées']
    }
  ];

  const experiences = [
    {
      role: 'Développeur Full-Stack & Cloud (Projets & Freelance)',
      company: 'Projets Académiques & Indépendants',
      period: '2023 - Présent',
      tasks: [
        'Conception et déploiement d\'applications web dynamiques sous React.js et Node.js.',
        'Hébergement et configuration d\'infrastructures cloud avec conteneurs Docker.',
        'Intégration d\'APIs RESTful avec gestion de flux asynchrones et interfaces réactives.',
        'Mise en place de dépôts GitHub collaboratifs avec convention de commit stricte.'
      ]
    },
    {
      role: 'Responsable Technique & Collaborateur Étudiant',
      company: 'IIT Informatique Workgroup',
      period: '2024 - Présent',
      tasks: [
        'Accompagnement de pairs dans la prise en main de Git, HTML/CSS et JavaScript.',
        'Organisation d\'ateliers de codage et résolution d\'exercices d\'algorithmique.',
        'Participation active aux hackathons et projets de synthèse académiques.'
      ]
    }
  ];

  return (
    <section id="cv" className="skills-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="title-wrapper fade-in-up">
          <div className="section-badge-pill">
            <i className="fas fa-file-alt"></i>
            <span>Partie 2 &bull; Navbar : CV</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Ce que je sais faire</span>
          </h2>
          <span className="title-line"></span>
          <p className="section-subtitle">
            Un aperçu exhaustif de mes compétences techniques, de mon parcours académique et de mes réalisations professionnelles.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="cv-tabs-wrapper fade-in-up">
          <button 
            className={`cv-tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <i className="fas fa-code"></i>
            <span>Compétences Techniques</span>
          </button>
          <button 
            className={`cv-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <i className="fas fa-graduation-cap"></i>
            <span>Formation Académique</span>
          </button>
          <button 
            className={`cv-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <i className="fas fa-briefcase"></i>
            <span>Expériences & Activités</span>
          </button>
        </div>

        {/* Tab Content: Skills */}
        {activeTab === 'skills' && (
          <div className="tab-pane-content fade-in-up">
            <div className="row g-4">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="col-lg-6">
                  <div className="skill-category-card glass-card">
                    <div className="category-header">
                      <div className="cat-icon-wrap">
                        <i className={`fas ${cat.icon}`}></i>
                      </div>
                      <h3 className="cat-title">{cat.category}</h3>
                    </div>

                    <div className="skills-list">
                      {cat.skills.map((s, sIdx) => (
                        <div key={sIdx} className="skill-progress-item">
                          <div className="skill-meta">
                            <div className="skill-name-desc">
                              <span className="skill-name">{s.name}</span>
                              <span className="skill-desc-sub">{s.desc}</span>
                            </div>
                            <span className="skill-percentage">{s.level}%</span>
                          </div>
                          <div className="progress-bar-bg">
                            <div 
                              className="progress-bar-fill" 
                              style={{ width: `${s.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Education */}
        {activeTab === 'education' && (
          <div className="tab-pane-content fade-in-up">
            <div className="timeline-container">
              {educationTimeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div className="timeline-card glass-card">
                    <div className="timeline-header">
                      <span className="timeline-period">{item.period}</span>
                      <span className="timeline-location">
                        <i className="fas fa-map-marker-alt"></i> {item.location}
                      </span>
                    </div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <h4 className="timeline-institution">
                      <i className="fas fa-university"></i> {item.institution}
                    </h4>
                    <p className="timeline-desc">{item.desc}</p>
                    <div className="timeline-badges">
                      {item.badges.map((b, bIdx) => (
                        <span key={bIdx} className="timeline-badge">{b}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Experience */}
        {activeTab === 'experience' && (
          <div className="tab-pane-content fade-in-up">
            <div className="timeline-container">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot dot-accent">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div className="timeline-card glass-card">
                    <div className="timeline-header">
                      <span className="timeline-period">{exp.period}</span>
                      <span className="timeline-company">{exp.company}</span>
                    </div>
                    <h3 className="timeline-title">{exp.role}</h3>
                    <ul className="timeline-tasks">
                      {exp.tasks.map((task, tIdx) => (
                        <li key={tIdx}>
                          <i className="fas fa-check-circle"></i>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CV Download banner */}
        <div className="cv-download-box glass-card fade-in-up mt-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-3">
                <div className="cv-file-icon">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <div>
                  <h4 className="cv-box-title">Curriculum Vitae de Phanuel EHOUSSOU</h4>
                  <p className="cv-box-desc">
                    Retrouvez l'intégralité de mon parcours, de mes diplômes et de mes compétences dans un document PDF synthétique et actualisé.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end text-center">
              <a 
                href="#contact" 
                className="btn-primary-custom"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <i className="fas fa-download"></i>
                <span>Demander le CV complet</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
