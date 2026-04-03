import styles from './Products.module.css';

const products = [
  {
    icon: '🏆',
    name: 'Biofábrica Gold',
    category: 'Comodato 3 anos',
    description: 'Nossa estrutura máxima em biotecnologia. Inclui construção e fornecimento completo de equipamentos em comodato.',
    benefits: [
      '06 Biorreatores de Inox (2.000 L)',
      '07 Tanques de Armazenamento (4.000 L)',
      'Processos Automatizados',
      'Estrutura de 160 m² em isopainel',
      'Assistência Técnica e de Campo'
    ],
  },
  {
    icon: '⚙️',
    name: 'Biofábrica Silver',
    category: 'Comodato 3 anos',
    description: 'Sistema altamente eficiente com fornecimento em comodato. Mantém toda a capacidade de escala da linha Gold.',
    benefits: [
      '06 Biorreatores de Inox (2.000 L)',
      '07 Tanques de Armazenamento (4.000 L)',
      'Processos Automatizados',
      'Estrutura de 160 m² em isopainel',
      'Assistência Técnica Integrada'
    ],
  },
  {
    icon: '📐',
    name: 'Bioreator Stand Alone',
    category: 'Comodato 3 anos',
    description: 'Solução compacta focada em produtores que dispõem de estrutura física. Fornecimento da planta de processo.',
    benefits: [
      '01 Biorreator de Inox (2.000 L)',
      '01 Tanque de Armazenamento (2.000 L)',
      'Processos Semi-Automatizados',
      'Sem Necessidade de Estrutura Física Própria da Tena',
      'Assistência Técnica Contínua'
    ],
  },
  {
    icon: '💧',
    name: 'Biobag',
    category: 'Comodato 1 ano',
    description: 'Multiplicação de alto desempenho em fermentação líquida, prático e ideal para adoção rápida no modelo on farm.',
    benefits: [
      '01 Equipamento de Multiplicação',
      '04 Bolsas Simultâneas',
      'Processos Semi-Automatizados',
      'Instalação Prática s/ Estrutura Física',
      'Assistência Técnica Especializada'
    ],
  },
];

export default function Products() {
  return (
    <section className={styles.products} id="biofabricas">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="tag">Biofábricas</span>
          <h2 className={styles.title}>
            Nossas <span className={styles.highlight}>soluções</span>
          </h2>
          <p className={styles.subtitle}>
            Oferecemos diferentes modalidades de biofábricas para atender
            produtores de todos os portes, sempre com a tecnologia e suporte
            técnico da Tena.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{product.icon}</span>
                <span className={styles.cardCategory}>{product.category}</span>
              </div>
              <h3 className={styles.cardTitle}>{product.name}</h3>
              <p className={styles.cardDesc}>{product.description}</p>
              <ul className={styles.benefits}>
                {product.benefits.map((b, j) => (
                  <li key={j}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <a href="#contato" className={styles.cardCta}>
                Solicitar Orçamento →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
