import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Artists from '@/components/Artists';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Portfolio />
      <Artists />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
