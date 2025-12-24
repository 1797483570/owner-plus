import React, { useState, useEffect } from 'react';
import { Github } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spotlight from './components/Spotlight';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="min-h-screen text-slate-200 selection:bg-cyan-500/30">
      <Spotlight />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-3 border-b border-slate-800' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-xl font-bold tracking-tighter text-white cursor-pointer"
            onClick={scrollToTop}
          >
            WS<span className="text-cyan-500">.</span>dev
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium items-center">
            <a 
              href="#skills" 
              onClick={(e) => scrollToSection(e, 'skills')}
              className="hover:text-cyan-400 transition-colors"
            >
              专业技能
            </a>
            <a 
              href="#experience" 
              onClick={(e) => scrollToSection(e, 'experience')}
              className="hover:text-cyan-400 transition-colors"
            >
              工作经历
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="hover:text-cyan-400 transition-colors"
            >
              项目经验
            </a>
            <a 
              href="#awards" 
              onClick={(e) => scrollToSection(e, 'awards')}
              className="hover:text-cyan-400 transition-colors"
            >
              荣誉奖项
            </a>
            <a 
              href="https://github.com/1797483570" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;