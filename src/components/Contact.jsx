import { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate interactive send
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  const contactCards = [
    {
      icon: 'fa-envelope',
      title: 'Adresse E-mail',
      value: 'phanuelehoussou@gmail.com',
      action: 'mailto:phanuelehoussou@gmail.com',
      btnText: 'Envoyer un courriel',
      color: '#6c63ff'
    },
    {
      icon: 'fa-phone-volume',
      title: 'Téléphone & WhatsApp',
      value: '+225 07 00 00 00 00',
      action: 'tel:+2250700000000',
      btnText: 'Appeler directement',
      color: '#00d4aa'
    },
    {
      icon: 'fa-location-dot',
      title: 'Localisation',
      value: 'Abidjan, Côte d\'Ivoire',
      action: '#',
      btnText: 'Institut Int. de Tech (IIT)',
      color: '#f59e0b'
    },
    {
      icon: 'fa-brands fa-github',
      title: 'Dépôts GitHub',
      value: 'phanuelehoussou-cloud',
      action: 'https://github.com/phanuelehoussou-cloud',
      btnText: 'Explorer mes repos',
      color: '#3b82f6'
    }
  ];

  return (
    <section id="contact" className="contact-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="title-wrapper fade-in-up">
          <div className="section-badge-pill">
            <i className="fas fa-paper-plane"></i>
            <span>Partie 4 &bull; Navbar : Contact</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Me contacter</span>
          </h2>
          <span className="title-line"></span>
          <p className="section-subtitle">
            Un projet à concrétiser, une opportunité professionnelle ou une simple discussion technique ? N'hésitez pas à me laisser un message.
          </p>
        </div>

        {/* 4 Quick Contact Cards */}
        <div className="row g-4 mb-5">
          {contactCards.map((card, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="contact-channel-card glass-card fade-in-up">
                <div 
                  className="contact-channel-icon"
                  style={{ background: `linear-gradient(135deg, ${card.color} 0%, rgba(10,10,35,0.8) 100%)` }}
                >
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <h4 className="contact-channel-title">{card.title}</h4>
                <p className="contact-channel-value">{card.value}</p>
                <a 
                  href={card.action} 
                  target={card.action.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="contact-channel-link"
                >
                  <span>{card.btnText}</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Form and Availability Side-by-Side */}
        <div className="row g-5 align-items-stretch">
          {/* Availability & Pitch */}
          <div className="col-lg-5">
            <div className="contact-pitch-card glass-card fade-in-up h-100">
              <div className="pitch-header">
                <div className="status-indicator">
                  <span className="status-ping"></span>
                  <span className="status-text">Disponible pour de nouveaux projets</span>
                </div>
                <h3 className="pitch-title">Construisons ensemble quelque chose de grand</h3>
              </div>

              <p className="pitch-desc">
                Que ce soit pour le déploiement d'une infrastructure Cloud robuste, le développement d'une application web React réactive ou une collaboration au sein d'une équipe technique, je suis à votre écoute.
              </p>

              <div className="pitch-perks">
                <div className="perk-item">
                  <div className="perk-check"><i className="fas fa-check"></i></div>
                  <div>
                    <h5 className="perk-title">Réactivité garantie</h5>
                    <p className="perk-desc">Réponse sous 24h ouvrées à toutes vos demandes.</p>
                  </div>
                </div>
                <div className="perk-item">
                  <div className="perk-check"><i className="fas fa-check"></i></div>
                  <div>
                    <h5 className="perk-title">Rigueur méthodologique</h5>
                    <p className="perk-desc">Code documenté, testé, versionné sous Git et déployé avec soin.</p>
                  </div>
                </div>
                <div className="perk-item">
                  <div className="perk-check"><i className="fas fa-check"></i></div>
                  <div>
                    <h5 className="perk-title">Esprit collaboratif</h5>
                    <p className="perk-desc">Partage proactif d'idées et communication transparente.</p>
                  </div>
                </div>
              </div>

              <div className="social-links-box mt-4">
                <span className="social-label">Suivez-moi sur le web :</span>
                <div className="social-icons">
                  <a href="https://github.com/phanuelehoussou-cloud" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="mailto:phanuelehoussou@gmail.com" title="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="X / Twitter">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-card glass-card fade-in-up h-100">
              <h3 className="form-card-title">
                <i className="fas fa-comment-dots text-accent"></i> Envoyez-moi un message direct
              </h3>
              <p className="form-card-subtitle">
                Remplissez ce formulaire et votre message sera transmis instantanément.
              </p>

              {submitted && (
                <div className="alert-success-custom">
                  <i className="fas fa-circle-check"></i>
                  <div>
                    <strong>Message envoyé avec succès !</strong>
                    <p>Merci pour votre prise de contact. Je vous répondrai dans les plus brefs délais.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating-custom">
                      <label htmlFor="name">Votre nom complet *</label>
                      <div className="input-with-icon">
                        <i className="fas fa-user"></i>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          required 
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ex: Jean Dupont"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating-custom">
                      <label htmlFor="email">Votre adresse e-mail *</label>
                      <div className="input-with-icon">
                        <i className="fas fa-at"></i>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          required 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Ex: jean.dupont@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating-custom">
                      <label htmlFor="subject">Sujet de votre message *</label>
                      <div className="input-with-icon">
                        <i className="fas fa-tag"></i>
                        <input 
                          type="text" 
                          id="subject"
                          name="subject"
                          required 
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Ex: Proposition de projet / Stage / Collaboration"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating-custom">
                      <label htmlFor="message">Votre message détaillé *</label>
                      <div className="textarea-with-icon">
                        <i className="fas fa-pencil"></i>
                        <textarea 
                          id="message"
                          name="message"
                          rows="5"
                          required 
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Décrivez votre projet, vos attentes ou toute question..."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-4">
                    <button 
                      type="submit" 
                      className="btn-primary-custom w-100 justify-content-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-circle-notch fa-spin"></i>
                          <span>Transmission en cours...</span>
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane"></i>
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
