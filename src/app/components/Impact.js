'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Impact.module.css';

const metrics = [
  { value: 20, suffix: '+', label: 'Biofábricas Instaladas', icon: '🏭' },
  { value: 40, suffix: '+', label: 'Bioreatores em Funcionamento', icon: '🧪' },
  { value: 50000, suffix: '+', label: 'Hectares Atendidos', icon: '🌾' },
  { value: 3, suffix: '', label: 'Estados Atendidos', icon: '📍' },
];

function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

function MetricCard({ metric, inView }) {
  const count = useCountUp(metric.value, 2000, inView);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toLocaleString('pt-BR');
    }
    return num;
  };

  return (
    <div className={styles.metric}>
      <span className={styles.metricIcon}>{metric.icon}</span>
      <span className={styles.metricValue}>
        {formatNumber(count)}
        {metric.suffix}
      </span>
      <span className={styles.metricLabel}>{metric.label}</span>
    </div>
  );
}

export default function Impact() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.impact} id="impacto" ref={sectionRef}>
      <div className={styles.bgPattern}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Impacto</span>
          <h2 className={styles.title}>
            Resultados que falam por <span className={styles.highlight}>nós</span>
          </h2>
          <p className={styles.subtitle}>
            Presentes em Minas Gerais, Goiás e Santa Catarina, 
            levamos autonomia biológica para produtores de todo o Brasil.
          </p>
        </div>

        <div className={styles.metricsGrid}>
          {metrics.map((metric, i) => (
            <MetricCard key={i} metric={metric} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
