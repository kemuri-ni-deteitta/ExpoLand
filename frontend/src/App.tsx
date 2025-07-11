import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './styles/global.css';
import About from './pages/About/About';
import Partners from './pages/Partners/Partners';
import Testimonials from './pages/Testimonials/Testimonials';
import Certificates from './pages/Certificates/Certificates';
import Contacts from './pages/Contacts/Contacts';
import Request from './pages/Request/Request';

function App() {
  return (
    <Router>
    <div>
    <NavBar />
    <div className="container">
    <Routes>
    <Route path="/" element={<div>Главная</div>} />
    
    {/* О компании */}
    <Route path="/about" element={<div>О компании</div>} />
    <Route path="/about/team" element={<div>Команда</div>} />
                            <Route path="/about/partners" element={<Partners />} />
            <Route path="/about/testimonials" element={<Testimonials />} />
            <Route path="/about/certificates" element={<Certificates />} />
    <Route path="/about/archive" element={<div>Архив</div>} />
    
    {/* Услуги */}
    <Route path="/services" element={<div>Услуги</div>} />
    
    <Route path="/news" element={<div>Новости</div>} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/request" element={<Request />} />
    </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
