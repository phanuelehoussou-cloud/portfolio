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
      category: 'Langages de programmation',
      icon: 'fa-code',
      skills: [
        { name: 'Python (Pandas, NumPy, Flask)', level: 88, desc: 'Manipulation de données, scripts & développement backend' },
        { name: 'HTML5 / CSS3', level: 92, desc: 'Structure sémantique, responsive design, animations et mise en page' },
        { name: 'C (programmation système)', level: 80, desc: 'Algorithmique, gestion dynamique de la mémoire et pointeurs' },
      ]
    },
    {
      category: 'Frameworks et bibliothèques',
      icon: 'fa-layer-group',
      skills: [
        { name: 'Bootstrap 5', level: 92, desc: 'Conception d\'interfaces modernes, grilles responsives & composants UI' },
        { name: 'Flask (développement web)', level: 86, desc: 'Routage backend, intégration de templates & création d\'APIs' },
        { name: 'React.js & JavaScript ES6+', level: 84, desc: 'Composants dynamiques, architecture par état & interactions réactives' },
      ]
    },
    {
      category: 'Bases de données',
      icon: 'fa-database',
      skills: [
        { name: 'SQL Server (T-SQL, requêtes complexes)', level: 88, desc: 'Jointures multidimensionnelles, agrégations, indexation' },
        { name: 'Conception de schémas relationnels', level: 90, desc: 'Normalisation (3NF), clés primaires/étrangères, intégrité référentielle' },
        { name: 'Gestion & Administration des données', level: 82, desc: 'Procédures stockées, vues et sécurisation des accès' },
      ]
    },
    {
      category: 'Compétences transversales & Méthodes',
      icon: 'fa-users-gear',
      skills: [
        { name: 'Anglais (niveau conversationnel courant)', level: 90, desc: 'Communication orale et écrite, documentation technique' },
        { name: 'Travail d\'équipe & collaboration multiculturelle', level: 94, desc: 'Synergie, écoute active, communication interculturelle' },
        { name: 'Méthodologies & Architectures logicielles', level: 86, desc: 'Bonnes pratiques de l\'industrie, modularité et code propre' },
        { name: 'Esprit analytique & Rigueur', level: 92, desc: 'Résolution méthodique de problèmes et respect des exigences' },
      ]
    }
  ];

  const educationTimeline = [
    {
      period: 'Depuis 1 an (En cours)',
      title: 'Étudiant en Génie Logiciel',
      institution: 'Institut International de Technologie (IIT)',
      location: 'Grand-Bassam, Côte d\'Ivoire',
      desc: 'Formation approfondie aux méthodologies de développement, à l\'architecture logicielle, à la modélisation de bases de données relationnelles et aux technologies web modernes.',
      badges: ['Génie Logiciel', 'Architectures Logicielles', 'SQL Server', 'Python', 'C Systèmes']
    },
    {
      period: 'Formation Continue',
      title: 'Perfectionnement continu en Développement & Données',
      institution: 'Projets d\'application & Auto-formation pratique',
      location: 'Grand-Bassam / En ligne',
      desc: 'Approfondissement des frameworks web (Flask, Bootstrap 5), manipulation avancée de données sous Python (Pandas, NumPy) et programmation système en C.',
      badges: ['Flask', 'Pandas & NumPy', 'T-SQL', 'Bootstrap 5', 'Git']
    },
    {
      period: 'Parcours Préparatoire',
      title: 'Baccalauréat Scientifique',
      institution: 'Enseignement Secondaire Scientifique',
      location: 'Côte d\'Ivoire',
      desc: 'Socle scientifique rigoureux en mathématiques, logique formelle et résolution de problèmes quantitatifs.',
      badges: ['Mathématiques', 'Logique Formelle', 'Sciences']
    }
  ];

  const experiences = [
    {
      role: 'Conception d\'Applications & Projets de Génie Logiciel',
      company: 'Institut International de Technologie (IIT) & Projets Personnels',
      period: 'Depuis 1 an',
      tasks: [
        'Développement d\'applications web avec Python (Flask) et interfaces réactives sous Bootstrap 5.',
        'Conception de schémas relationnels de bases de données et écriture de requêtes T-SQL complexes sous SQL Server.',
        'Développement de programmes système et d\'algorithmes d\'optimisation en langage C.',
        'Collaboration efficace en environnement d\'équipe multiculturel et documentation technique en anglais.'
      ]
    },
    {
      role: 'Activités & Travail Collaboratif',
      company: 'Groupes d\'Étude & Projets Académiques IIT',
      period: '2023 - Présent',
      tasks: [
        'Participation active aux ateliers de modélisation logicielle et revues de code entre pairs.',
        'Pratique d\'activités collectives développant la cohésion : Football, Basketball et veille par la lecture.',
        'Partage de bonnes pratiques de programmation et respect des normes de qualité logicielle.'
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
            Compétences techniques extraites de mon cursus en Génie Logiciel : langages, bases de données, frameworks et aptitudes transversales.
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
            <span>Expériences & Projets</span>
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
                  <h4 className="cv-box-title">Curriculum Vitae • EHOUSSOUS Phanuel</h4>
                  <p className="cv-box-desc">
                    Étudiant en Génie Logiciel à l'IIT (Grand-Bassam, Côte d'Ivoire). Consultez le détail complet de mes compétences et réalisations.
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
                <i className="fas fa-envelope"></i>
                <span>Me contacter / Demander le CV</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
