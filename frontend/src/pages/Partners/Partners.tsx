import React, { useState, useEffect } from 'react';
import { fetchPartners, type Partner } from '../../api/about';
import './Partners.css';

const Partners: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const partnersData = await fetchPartners();
        setPartners(partnersData);
      } catch (err) {
        setError('Не удалось загрузить партнеров');
        console.error('Error loading partners:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPartners();
  }, []);

  if (loading) {
    return <div className="partners-loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="partners-error">{error}</div>;
  }

  return (
    <div className="partners-container">
      <h1 className="partners-title">Наши партнеры</h1>
      
      {partners.length === 0 ? (
        <div className="no-partners">
          <p>Список партнеров пока пуст.</p>
        </div>
      ) : (
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <h3 className="partner-name">{partner.name}</h3>
              <div className="partner-logo-container">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="partner-logo"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Partners; 