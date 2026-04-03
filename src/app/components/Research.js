import styles from './Research.module.css';

export default function Research() {
  return (
    <section className={styles.research} id="pesquisa">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className="tag">Nossa Equipe</span>
          <h2 className={styles.title}>
            Expertise que{' '}
            <span className={styles.highlight}>faz a diferença</span>
          </h2>
          <p className={styles.description}>
            Nossa equipe multidisciplinar combina expertise em biotecnologia
            com experiência prática no campo. Cada biofábrica instalada conta
            com o suporte contínuo de profissionais especializados em
            desenvolvimento, aplicação e manejo de bioinsumos.
          </p>
          <p className={styles.description}>
            Da concepção do projeto à operação diária, você conta com uma equipe
            dedicada que entende as necessidades específicas do seu sistema
            produtivo e garante o máximo retorno do investimento.
          </p>

          <div className={styles.pillars}>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>👨‍🔬</div>
              <div>
                <strong>Biotecnólogos</strong>
                <p>Desenvolvimento e otimização de processos</p>
              </div>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>🌾</div>
              <div>
                <strong>Agrônomos</strong>
                <p>Técnicos em aplicação e manejo no campo</p>
              </div>
            </div>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>🛠️</div>
              <div>
                <strong>Suporte Técnico</strong>
                <p>Acompanhamento dedicado e contínuo</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.dnaHelix}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={styles.helixDot}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  top: `${i * 8}%`,
                }}
              ></div>
            ))}
          </div>
          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>+10</span>
              <span className={styles.statLabel}>Anos de Experiência</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Suporte Integrado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
