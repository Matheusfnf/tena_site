import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import WhyTena from './components/WhyTena';
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
        <WhyTena />
        <Impact />
        <Research />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
