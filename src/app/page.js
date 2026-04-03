import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Impact from './components/Impact';
import Research from './components/Research';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Technology />
        <Impact />
        <Research />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
