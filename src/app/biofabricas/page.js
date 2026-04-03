import Header from '../components/Header';
import Footer from '../components/Footer';
import BiofabricasShowcase from '../components/BiofabricasShowcase';
import styles from './page.module.css';
import CTA from '../components/CTA';

export const metadata = {
  title: 'Biofábricas | Tena Soluções Sustentáveis',
  description: 'Conheça nossos modelos de biofábricas on-farm: Tena Gold, Tena PP e projetos personalizados.',
};

export default function BiofabricasRoute() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Simple dedicated hero for this page */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className="tag">Soluções on-farm</span>
            <h1 className={styles.title}>
              Nossas <span className={styles.highlight}>Biofábricas</span>
            </h1>
            <p className={styles.subtitle}>
              Transforme a sua fazenda em um centro de produção de bioinsumos com a nossa tecnologia avançada. Reduza custos, aumente a qualidade e garanta a sustentabilidade do seu negócio agrícola.
            </p>
          </div>
        </section>

        {/* The detailed showcase component for each model */}
        <BiofabricasShowcase />
        
        {/* A CTA at the end of the page */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
