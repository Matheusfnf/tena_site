import Image from 'next/image';
import BrazilMap from './BrazilMap';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="sobre">
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <BrazilMap />
        </div>

        <div className={styles.textCol}>
          <span className="tag">Nossas Unidades</span>
          <h2 className={styles.title}>
            Onde estamos atuando para{' '}
            <span className={styles.highlight}>melhor atender o produtor</span>
          </h2>
          <p className={styles.description}>
            A <strong>Tena Soluções Sustentáveis</strong> conta estrategicamente com
            unidades instaladas para aproximar a biotecnologia do campo com eficiência e agilidade.
          </p>
          <p className={styles.description}>
            Nossa presença nos estados de Minas Gerais e Santa Catarina nos permite
            dar suporte dedicado na implantação de biofábricas on-farm e garantir o 
            acompanhamento técnico próximo para que os produtores alcancem sua independência biológica.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📍</div>
              <div>
                <h4>Patos de Minas - MG</h4>
                <p>Nossa fundação e polo estratégico no Alto Paranaíba e Triângulo Mineiro.</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📍</div>
              <div>
                <h4>Unaí - MG</h4>
                <p>Unidade de apoio para atender com excelência a potência do Noroeste Mineiro.</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📍</div>
              <div>
                <h4>Navegantes - SC</h4>
                <p>Nossa base no Sul do país, expandindo o alcance e suporte das soluções Tena.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
