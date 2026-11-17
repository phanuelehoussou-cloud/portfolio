import './Footer.css';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="footer-top py-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5 text-center text-lg-start">
              <div className="footer-brand">
                <span className="logo-bracket">&lt;</span>
                <span className="logo-text">PE</span>
                <span className="logo-bracket">/&gt;</span>
                <span className="footer-name">EHOUSSOU Phanuel</span>
              </div>
              <p className="footer-tagline">
                Développeur Cloud & Web Full-Stack formé à l'IIT. Bâtir l'avenir numérique avec passion, performance et élégance.
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <div className="footer-nav-links">
                <button onClick={() => scrollTo('introduction')}>Introduction</button>
                <button onClick={() => scrollTo('cv')}>CV & Compétences</button>
                <button onClick={() => scrollTo('projets')}>Projets</button>
                <button onClick={() => scrollTo('contact')}>Contact</button>
              </div>
            </div>

            <div className="col-lg-3 text-center text-lg-end">
              <button 
                className="btn-back-to-top"
                onClick={() => scrollTo('introduction')}
                title="Remonter en haut"
              >
                <i className="fas fa-chevron-up"></i>
                <span>Haut de page</span>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom py-3 border-top border-secondary border-opacity-25 text-center">
          <p className="copyright-text mb-0">
            &copy; {currentYear} <strong>EHOUSSOU BOMAN-N'GOUAN OINT PHANUEL</strong>. Tous droits réservés.
            <span className="tech-badge-footer ms-2">Conçu avec React, Vite, Bootstrap & CSS3</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
