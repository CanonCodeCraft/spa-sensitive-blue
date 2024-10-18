import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { MainNavBar } from './main-navbar';
import { MainPage } from './main-page';
import { Footer } from './footer';
import { Whatsapp } from './whatsapp';
import './app.css'

export const App: React.FC = () => {
  return (
      <Router>
      <div className="App">
        <MainNavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Puedes añadir más rutas aquí */}
        </Routes>
        <section id="contacto">
          <Footer />
        </section>
        <div className="whatsapp-button">
          <Whatsapp />
        </div>
      </div>
    </Router>
  )
}