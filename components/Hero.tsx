import React from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import { PROFILE } from '../constants';
import CanvasBackground from './CanvasBackground';
import Typewriter from './Typewriter';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const headerOffset = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <CanvasBackground />
      
      {/* Background Blobs - Slightly darkened for Matrix visibility */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Info */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-900/30 rounded-full border border-cyan-800 backdrop-blur-sm">
            求职中 / Open to Work
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            你好，我叫 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              {PROFILE.name}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-400 font-mono h-12">
            <span className="text-cyan-500">{'>'}</span> <Typewriter text={PROFILE.title} delay={1000} speed={100} />
          </h2>
          
          <p className="text-lg text-slate-300 leading-relaxed max-w-lg backdrop-blur-sm bg-slate-900/10 rounded-lg p-2 -ml-2">
            {PROFILE.summary}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-all shadow-lg shadow-cyan-500/20 font-medium group cursor-pointer"
            >
              <Mail className="w-4 h-4 group-hover:animate-bounce" />
              联系我
            </a>
          </div>
        </div>

        {/* Right: Code/Visual Card - Updated styling for Matrix theme */}
        <div className="relative hidden md:block">
          <div className="glass-card p-6 rounded-2xl border-t border-l border-slate-600 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:shadow-cyan-500/10">
             <div className="flex items-center gap-2 mb-4">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <div className="font-mono text-sm leading-6">
                {/* <div className="text-slate-400">// 核心竞争力</div> */}
                <div><span className="text-purple-400">class</span> <span className="text-yellow-300">XiaoWu</span> <span className="text-purple-400">extends</span> <span className="text-blue-400">Developer</span> {'{'}</div>
                <div className="pl-4">
                  <span className="text-purple-400">private</span> <span className="text-purple-400">static</span> <span className="text-red-400">String</span>[] skills = {'{'}
                </div>
                <div className="pl-8 text-green-400">
                  "Java", "Spring Cloud", "Redis",<br/>
                  "Docker", "AIGC", "High Concurrency"
                </div>
                <div className="pl-4">{'};'}</div>
                <div className="pl-4">
                  <span className="text-purple-400">public</span> <span className="text-blue-400">Codes</span> <span className="text-yellow-300">getCode</span>() {'{'}
                </div>
                <div className="pl-8 text-slate-300">
                  return <span className="text-green-400">"高性能 & 高可用"</span>;
                </div>
                <div className="pl-4">{'};'}</div>
                <div className="pl-4">
                  <span className="text-purple-400">public</span> <span className="text-blue-400">Attitude</span> <span className="text-yellow-300">getAttitude</span>() {'{'}
                </div>
                <div className="pl-8 text-slate-300">
                  return <span className="text-green-400">"严谨 & 热爱"</span>;
                </div>
                <div className="pl-4">{'};'}</div>
                <div>{'}'}</div>
             </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-cyan-600/20 rounded-full blur-2xl animate-pulse"></div>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
