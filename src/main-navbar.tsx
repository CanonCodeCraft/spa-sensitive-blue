import React from 'react';
{/*import { Link } from 'react-router-dom';*/}

export const MainNavBar: React.FC = () => {

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ opacity: '0.6', backgroundColor: '#DDEAFF', fontFamily: "roboto" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="./logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          Sensitive Angels Spa
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/*<Link className="nav-link" to="/trabajos">Trabajos</Link>*/}
            <a className="nav-link" href="#" onClick={() => handleScroll('nosotros')}>Nosotros</a>
            <a className="nav-link" href="#" onClick={() => handleScroll('contacto')}>Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
