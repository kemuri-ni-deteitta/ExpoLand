import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './styles/global.css';
import About from './pages/About/About';

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
            <Route path="/about/partners" element={<div>Клиенты и партнёры</div>} />
            <Route path="/about/certificates" element={<div>Сертификаты и награды</div>} />
            <Route path="/about/archive" element={<div>Архив</div>} />
            
            {/* Услуги */}
            <Route path="/services" element={<div>Услуги</div>} />
            
            <Route path="/news" element={<div>Новости</div>} />
            <Route path="/contacts" element={<div>Контакты</div>} />
            <Route path="/request" element={<div>Отправить заявку</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
