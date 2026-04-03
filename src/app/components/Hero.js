import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.bgWrapper}>
        <Image
          src="/imagem_inicial.png"
          alt="Imagem inicial"
          fill
          priority
          className={styles.bgImage}
          sizes="100vw"
        />
        {/* Subtle dark gradient overlay to make white text pop powerfully on the left */}
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          BIOCIÊNCIA<br />
          PARA O AGRO
        </h1>
        <p className={styles.subtitle}>
          Autonomia total na sua fazenda. Produza bioinsumos com suporte técnico especializado e elimine a dependência de fornecedores externos.
        </p>
        <div className={styles.ctas}>
          <a href="/biofabricas" className="btnPrimary">
            Conheça as Biofábricas
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>50K+</span>
          <span className={styles.statLabel}>Hectares Atendidos</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>20+</span>
          <span className={styles.statLabel}>Biofábricas Instaladas</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>40+</span>
          <span className={styles.statLabel}>Bioreatores Ativos</span>
        </div>
      </div>
    </section>
  );
}
