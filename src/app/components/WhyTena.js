import styles from './WhyTena.module.css';

const differentials = [
  {
    icon: '🔧',
    title: 'Independência Total',
    description: 'Elimine a dependência de fornecedores externos. Produza seus próprios bioinsumos na fazenda.',
  },
  {
    icon: '💰',
    title: 'Redução de Custos',
    description: 'Reduza significativamente os gastos com insumos químicos e biológicos comprados de terceiros.',
  },
  {
    icon: '🤝',
    title: 'Suporte Especializado',
    description: 'Equipe de biotecnólogos e agrônomos dedicada ao suporte técnico contínuo no campo.',
  },
  {
    icon: '✅',
    title: 'Qualidade Garantida',
    description: 'Controle de qualidade rigoroso em cada lote, com mesma eficácia de produtos de laboratório.',
  },
  {
    icon: '🌱',
    title: 'Sustentabilidade Real',
    description: 'Promoção da agricultura regenerativa com regeneração do solo e respeito ao meio ambiente.',
  },
  {
    icon: '📊',
    title: 'Eficiência Comprovada',
    description: 'Resultados demonstrados em mais de 50.000 hectares atendidos em Minas Gerais, Goiás e Santa Catarina.',
  },
];

export default function WhyTena() {
  return (
    <section className={styles.whyTena} id="diferenciais">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="tag">Diferenciais</span>
          <h2 className={styles.title}>
            Por que escolher a <span className={styles.highlight}>Tena?</span>
          </h2>
          <p className={styles.subtitle}>
            Quebramos a barreira entre o laboratório e a lavoura,
            capacitando o produtor com tecnologia, autonomia e resultados.
          </p>
        </div>

        <div className={styles.grid}>
          {differentials.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.number}>0{i + 1}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
