import React, { useState, useEffect } from 'react';
import { fetchCertificates, type Certificate } from '../../api/about';
import './Certificates.css';

const Certificates: React.FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCertificates = async () => {
      try {
        const certificatesData = await fetchCertificates();
        setCertificates(certificatesData);
      } catch (err) {
        setError('Не удалось загрузить сертификаты');
        console.error('Error loading certificates:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCertificates();
  }, []);

  if (loading) {
    return <div className="certificates-loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="certificates-error">{error}</div>;
  }

  return (
    <div className="certificates-container">
      <h1 className="certificates-title">Сертификаты и награды</h1>
      
      {certificates.length === 0 ? (
        <div className="no-certificates">
          <p>Сертификаты пока не добавлены.</p>
        </div>
      ) : (
        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="certificate-item">
              <img 
                src={certificate.certificate_image} 
                alt={certificate.title} 
                className="certificate-image"
              />
              <h3 className="certificate-title">{certificate.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Certificates; 