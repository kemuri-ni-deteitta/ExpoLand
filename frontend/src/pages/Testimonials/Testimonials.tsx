import React, { useState, useEffect } from 'react';
import { fetchTestimonials, type Testimonial } from '../../api/about';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const testimonialsData = await fetchTestimonials();
        setTestimonials(testimonialsData);
      } catch (err) {
        setError('Не удалось загрузить отзывы');
        console.error('Error loading testimonials:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  if (loading) {
    return <div className="testimonials-loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="testimonials-error">{error}</div>;
  }

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">Отзывы</h1>
      
      {testimonials.length === 0 ? (
        <div className="no-testimonials">
          <p>Отзывы пока не добавлены.</p>
        </div>
      ) : (
        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <div className="testimonial-image-container">
                <img 
                  src={testimonial.letter_image} 
                  alt={`Letter from ${testimonial.company_name}`} 
                  className="testimonial-image"
                />
              </div>
              <div className="testimonial-content">
                <h3 className="testimonial-company">{testimonial.company_name}</h3>
                <p className="testimonial-text">{testimonial.text_content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonials; 