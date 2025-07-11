import React, { useEffect, useRef, useState } from 'react';
import { fetchContact, type Contact } from '../../api/about';
import './Contacts.css';

declare global {
  interface Window {
    ymaps: any;
  }
}

const Contacts: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContact = async () => {
      try {
        const contactData = await fetchContact();
        setContact(contactData);
      } catch (err) {
        setError('Не удалось загрузить контактную информацию');
        console.error('Error loading contact:', err);
      } finally {
        setLoading(false);
      }
    };

    loadContact();
  }, []);

  useEffect(() => {
    // Initialize map only when contact data is loaded
    if (!contact) return;
    
    // Prevent multiple map initialization
    if (mapInstanceRef.current) {
      return;
    }

    // Load Yandex Maps API
    if (!window.ymaps) {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU';
      script.onload = () => {
        window.ymaps.ready(() => {
          initMap();
        });
      };
      document.head.appendChild(script);
    } else {
      window.ymaps.ready(() => {
        initMap();
      });
    }

    return () => {
      // Cleanup map instance on unmount
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, [contact]);

  const initMap = () => {
    if (mapRef.current && !mapInstanceRef.current && contact) {
      // Use coordinates from API
      const myMap = new window.ymaps.Map(mapRef.current, {
        center: [Number(contact.map_latitude), Number(contact.map_longitude)],
        zoom: contact.map_zoom,
        controls: ['zoomControl', 'fullscreenControl']
      });

      // Add office location marker
      const placemark = new window.ymaps.Placemark(
        [Number(contact.map_latitude), Number(contact.map_longitude)],
        {
          balloonContent: `ExpoLand Group<br/>${contact.address}`,
          hintContent: 'ExpoLand Group'
        },
        {
          preset: 'islands#redDotIcon'
        }
      );

      myMap.geoObjects.add(placemark);
      mapInstanceRef.current = myMap;
    }
  };

  if (loading) {
    return <div className="contacts-loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="contacts-error">{error}</div>;
  }

  if (!contact) {
    return <div className="contacts-error">Контактная информация недоступна</div>;
  }

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h1 className="contacts-title">{contact.title}</h1>
        <p className="contacts-subtitle">{contact.subtitle}</p>
      </div>

      <div className="contacts-content">
        <div className="contacts-info">
          <div className="contact-section">
            <h2>Контактная информация</h2>
            <div className="contact-item">
              <h3>Телефон:</h3>
              <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="contact-link">{contact.phone}</a>
            </div>
            <div className="contact-item">
              <h3>Email:</h3>
              <a href={`mailto:${contact.email}`} className="contact-link">{contact.email}</a>
            </div>
            <div className="contact-item">
              <h3>Адрес:</h3>
              <p>{contact.address}</p>
            </div>
          </div>

          <div className="contact-section">
            <h2>Режим работы</h2>
            <div className="working-hours">
              <p><strong>Пн-Пт:</strong> {contact.working_hours_weekdays}</p>
              <p><strong>Сб:</strong> {contact.working_hours_saturday}</p>
              <p><strong>Вс:</strong> {contact.working_hours_sunday}</p>
            </div>
          </div>

          <div className="contact-section">
            <h2>Дополнительно</h2>
            <p>{contact.description}</p>
            <div className="social-links">
              {contact.whatsapp_link && (
                <a href={contact.whatsapp_link} className="social-link" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              )}
              {contact.telegram_link && (
                <a href={contact.telegram_link} className="social-link" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              )}
              {contact.vk_link && (
                <a href={contact.vk_link} className="social-link" target="_blank" rel="noopener noreferrer">
                  VK
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="map-section">
          <h2>Как нас найти</h2>
          <div className="map-container">
            <div ref={mapRef} className="yandex-map" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts; 