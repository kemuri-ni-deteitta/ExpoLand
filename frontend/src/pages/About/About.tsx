import React, { useEffect, useState } from 'react';
import { fetchAboutUs } from '../../api/about';
import type { AboutUs } from '../../api/about';
import { COLORS } from '../../theme/colors';

const About: React.FC = () => {
  const [about, setAbout] = useState<AboutUs | null>(null);

  useEffect(() => {
    fetchAboutUs().then(setAbout);
  }, []);

  if (!about) return <div>Loading...</div>;

  return (
    <section style={{ background: COLORS.neutral, padding: '2rem 0' }}>
      <div style={{
        maxWidth: 900,
        margin: '0 auto',
        background: COLORS.background,
        borderRadius: 8,
        boxShadow: '0 2px 8px #eee',
        padding: 32
      }}>
        <h1 style={{ color: COLORS.base, marginBottom: 16 }}>{about.title}</h1>
        {about.image && (
          <img
            src={about.image}
            alt="About us"
            style={{
              width: '100%',
              maxHeight: 300,
              objectFit: 'cover',
              borderRadius: 8,
              marginBottom: 24
            }}
          />
        )}
        <div style={{ color: '#333', fontSize: 18, lineHeight: 1.6 }}>
          {about.content}
        </div>
      </div>
    </section>
  );
};

export default About;
