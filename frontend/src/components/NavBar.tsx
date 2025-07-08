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
          <Link to="/about" className="nav-link">
            О компании
          </Link>
          <div className="dropdown-content">
            <Link to="/about" className="dropdown-link">
              О нас
            </Link>
            <Link to="/about/partners" className="dropdown-link">
              Клиенты и партнёры
            </Link>
            <Link to="/about/testimonials" className="dropdown-link">
              Отзывы
            </Link>
            <Link to="/about/certificates" className="dropdown-link">
              Сертификаты и награды
            </Link>
          </div>
        </div>

        <Link to="/services" className="nav-link">
          Услуги
        </Link>

        <Link to="/news" className="nav-link">
          Новости
        </Link>
        <Link to="/contacts" className="nav-link">
          Контакты
        </Link>
      </nav>

      <div className="nav-right">
        <Link to="/request" className="request-button">
          Отправить заявку
        </Link>
        <a href="tel:+74950252501" className="phone-number">
          +7 (495) 025-25-01
        </a>
      </div>
    </div>
  </header>
);

export default NavBar;
