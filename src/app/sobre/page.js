import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import CTA from '../components/CTA';
import styles from '../common.module.css';

export const metadata = {
  title: 'Sobre Nós | Tena',
  description: 'Conheça a história, a missão e a visão da Tena.',
};

export default function SobreRoute() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className="tag">Identidade</span>
            <h1 className={styles.title}>
              Nossa <span className={styles.highlight}>História</span>
            </h1>
            <p className={styles.subtitle}>
              Somos especialistas em tecnologia agronômica, dedicados a revolucionar o mercado de bioinsumos por meio de inovações sustentáveis.
            </p>
          </div>
        </section>

        <section className={styles.container}>
          <div className={styles.textBlock}>
            <h2>Construindo o futuro hoje</h2>
            <br/>
            <p>
              A TENA Soluções Sustentáveis nasceu de uma profunda convicção acadêmica científica, observando o uso contínuo de químicos e suas drásticas consequências na saúde do solo e na rentabilidade do produtor. Nossa jornada reflete um compromisso inegociável com a inovação, pesquisando os microorganismos do solo até criarmos os sistemas mais eficientes de biofábricas.
            </p>
            <p>
              Muitas empresas enfrentam o desafio da transição para um modelo on-farm. Compreendemos essas dinâmicas e desenhamos um ecossistema que não requer anos de estudo por parte do produtor. Simplificamos a biotecnologia. Com a nossa solução integral, a ciência complexa age nos bastidores, devolvendo independência técnica, insumos abundantes e aumento nas margens de colheita.
            </p>
            <p>
              Hoje, somos parceiros de mais de centenas de hectares e operamos soluções implementadas por todo o país. Nossos laboratórios mantêm-se em uma eterna corrida para inovar o cultivo, certificando as melhores estirpes de bactérias e fungos biológicos para a sua segurança e rentabilidade.
            </p>
          </div>
        </section>

        <About />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
