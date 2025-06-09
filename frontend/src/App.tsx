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
            <Route path="/portfolio" element={<div>Портфолио</div>} />
            
            {/* Выставочные стенды */}
            <Route path="/exhibition-stands" element={<div>Строительство выставочных стендов</div>} />
            <Route path="/exhibition-stands/design" element={<div>Дизайн выставочных стендов</div>} />
            <Route path="/exhibition-stands/construction" element={<div>Строительство выставочных стендов</div>} />
            <Route path="/exhibition-stands/exclusive" element={<div>Эксклюзивные выставочные стенды</div>} />
            
            {/* Наружная реклама */}
            <Route path="/outdoor-advertising" element={<div>Наружная реклама</div>} />
            <Route path="/outdoor-advertising/portfolio" element={<div>Портфолио наружной рекламы</div>} />
            
            {/* Дизайн интерьеров */}
            <Route path="/interior-design" element={<div>Дизайн интерьеров</div>} />
            <Route path="/interior-design/portfolio" element={<div>Портфолио дизайна интерьеров</div>} />
            <Route path="/interior-design/store" element={<div>Интерьер магазина</div>} />
            
            <Route path="/partners" element={<div>Наши партнеры</div>} />
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
