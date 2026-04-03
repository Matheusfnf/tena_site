import Image from 'next/image';
import styles from './Technology.module.css';

const pillars = [
  {
    icon: '🏭',
    title: 'Biofábricas On-Farm',
    description:
      'Instalamos biofábricas completas diretamente na sua propriedade, garantindo produção contínua e autonomia total de bioinsumos.',
  },
  {
    icon: '🧪',
    title: 'Tecnologia Proprietária',
    description:
      'Processos fermentativos e formulações exclusivas desenvolvidas pela equipe de P&D da Tena para máxima eficiência e viabilidade.',
  },
  {
    icon: '🌱',
    title: 'Agricultura Regenerativa',
    description:
      'Nossos bioinsumos promovem a regeneração do solo, restaurando a microbiota natural e aumentando a fertilidade a longo prazo.',
  },
  {
    icon: '🔬',
    title: 'Controle de Qualidade',
    description:
      'Monitoramento rigoroso de cada lote produzido na biofábrica, assegurando a qualidade e eficácia dos bioinsumos.',
  },
  {
    icon: '👨‍🔬',
    title: 'Suporte Técnico Contínuo',
    description:
      'Equipe de biotecnólogos e agrônomos disponível para acompanhamento, treinamento e otimização da sua produção.',
  },
  {
    icon: '♻️',
    title: 'Sustentabilidade',
    description:
      'Redução de custos com insumos químicos enquanto promove práticas agrícolas sustentáveis e responsáveis ambientalmente.',
  },
];

export default function Technology() {
  return (
    <section className={styles.technology} id="tecnologia">
      <div className={styles.bgDecor}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="tag">Tecnologia</span>
          <h2 className={styles.title}>
            Do laboratório para a <span className={styles.highlight}>lavoura</span>
          </h2>
          <p className={styles.subtitle}>
            Nossa plataforma tecnológica permite que o produtor tenha
            total controle da produção de bioinsumos na própria fazenda,
            com qualidade de laboratório.
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>{pillar.icon}</div>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardDesc}>{pillar.description}</p>
              <div className={styles.cardLine}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
