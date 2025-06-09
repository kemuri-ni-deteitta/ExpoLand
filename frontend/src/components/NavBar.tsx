import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar: React.FC = () => (
  <header className="header">
    <div className="nav-container">
      <Link to="/" className="logo-link">
        <img 
          src="/images/logo.gif" 
          alt="ExpoLand Group" 
          className="logo"
        />
      </Link>

      <nav className="nav">
        <Link to="/" className="nav-link">
          Главная
        </Link>
        
        <div className="dropdown">
          <Link to="/portfolio" className="nav-link">
            Портфолио
          </Link>
        </div>

        <div className="dropdown">
          <Link to="/exhibition-stands" className="nav-link">
            Строительство выставочных стендов
          </Link>
          <div className="dropdown-content">
            <Link to="/exhibition-stands/design" className="dropdown-link">
              Дизайн выставочных стендов
            </Link>
            <Link to="/exhibition-stands/construction" className="dropdown-link">
              Строительство выставочных стендов
            </Link>
            <Link to="/exhibition-stands/exclusive" className="dropdown-link">
              Эксклюзивные выставочные стенды
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/outdoor-advertising" className="nav-link">
            Наружная реклама
          </Link>
          <div className="dropdown-content">
            <Link to="/outdoor-advertising/portfolio" className="dropdown-link">
              Портфолио
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/interior-design" className="nav-link">
            Дизайн интерьеров
          </Link>
          <div className="dropdown-content">
            <Link to="/interior-design/portfolio" className="dropdown-link">
              Портфолио
            </Link>
            <Link to="/interior-design/store" className="dropdown-link">
              Интерьер магазина
            </Link>
          </div>
        </div>

        <Link to="/partners" className="nav-link">
          Наши партнеры
        </Link>
        <Link to="/news" className="nav-link">
          Новости
        </Link>
        <Link to="/contacts" className="nav-link">
          Контакты
        </Link>
        <Link to="/request" className="request-button">
          Отправить заявку
        </Link>
      </nav>

      <div className="nav-right">
        <a href="tel:+74950252501" className="phone-number">
          +7 (495) 025-25-01
        </a>
      </div>
    </div>
  </header>
);

export default NavBar;
