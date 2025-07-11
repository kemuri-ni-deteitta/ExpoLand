import React, { useState } from 'react';
import { submitRequest, type RequestFormData } from '../../api/about';
import './Request.css';

const Request: React.FC = () => {
  const [formData, setFormData] = useState<RequestFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_type: 'consultation',
    subject: '',
    message: '',
    budget: '',
    deadline: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const serviceOptions = [
    { value: 'exhibition_stands', label: 'Выставочные стенды' },
    { value: 'interior_design', label: 'Дизайн интерьера' },
    { value: 'outdoor_advertising', label: 'Наружная реклама' },
    { value: 'consultation', label: 'Консультация' },
    { value: 'other', label: 'Другое' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitRequest(formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_type: 'consultation',
        subject: '',
        message: '',
        budget: '',
        deadline: ''
      });
    } catch (err) {
      setError('Произошла ошибка при отправке заявки. Попробуйте снова.');
      console.error('Error submitting request:', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="request-container">
        <div className="request-success">
          <h2>Заявка успешно отправлена!</h2>
          <p>Спасибо за обращение. Мы свяжемся с вами в ближайшее время.</p>
          <button 
            className="request-button-secondary"
            onClick={() => setSuccess(false)}
          >
            Отправить еще одну заявку
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="request-container">
      <div className="request-header">
        <h1 className="request-title">Отправить заявку</h1>
        <p className="request-subtitle">
          Заполните форму ниже, и мы свяжемся с вами для обсуждения деталей проекта
        </p>
      </div>

      <form onSubmit={handleSubmit} className="request-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Имя *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Ваше имя"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Телефон *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+7 (999) 123-45-67"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Компания</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Название компании"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="service_type">Тип услуги *</label>
            <select
              id="service_type"
              name="service_type"
              value={formData.service_type}
              onChange={handleChange}
              required
            >
              {serviceOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="budget">Бюджет</label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Ориентировочный бюджет"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="subject">Тема заявки *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Краткое описание проекта"
            />
          </div>

          <div className="form-group">
            <label htmlFor="deadline">Желаемый срок</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="message">Сообщение *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Подробно опишите ваш проект, требования и пожелания..."
          />
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <button 
          type="submit" 
          className="request-button"
          disabled={loading}
        >
          {loading ? 'Отправляется...' : 'Отправить заявку'}
        </button>
      </form>
    </div>
  );
};

export default Request; 