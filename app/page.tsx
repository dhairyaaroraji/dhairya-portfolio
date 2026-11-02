import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import DoorsSection from '@/components/sections/DoorsSection';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Hackathons from '@/components/sections/Hackathons';
import Certificates from '@/components/sections/Certificates';
import Journey from '@/components/sections/Journey';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import PullCord from '@/components/ui/PullCord';
import IntroCurtain from '@/components/ui/IntroCurtain';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative">
        <IntroCurtain />
        <PullCord />
        <Navbar />
        <Hero />
        <DoorsSection />
        <About />
        <Projects />
        <Skills />
        <Hackathons />
        <Certificates />
        <Journey />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
