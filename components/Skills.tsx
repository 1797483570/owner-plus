import React from 'react';
import { Terminal, Database, Server, Layout } from 'lucide-react';
import { SKILLS } from '../constants';
import { SkillItem } from '../types';
import ScrollReveal from './ScrollReveal';

const SkillCategory = ({ title, icon: Icon, skills }: { title: string, icon: any, skills: SkillItem[] }) => (
  <div className="glass-card p-6 rounded-xl hover:bg-slate-800/50 transition-colors group border border-slate-700/50 hover:border-cyan-500/30">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-100">{title}</h3>
    </div>
    <div className="space-y-4">
      {skills.map((skill, idx) => (
        <div key={idx} className="relative">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-200 transition-colors">{skill.name}</span>
            <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
          </div>
          <div className="relative w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
            {/* Static bar fallback (Darker) - Rendered first to be behind */}
            <div 
               className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-900 to-blue-900 rounded-full"
               style={{ width: `${skill.level}%` }}
            ></div>
            
            {/* Animated bar (Brighter) - Rendered second to slide over */}
            <div 
              className="relative h-full bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full transition-all duration-1000 ease-out transform -translate-x-full group-hover:translate-x-0"
              style={{ width: `${skill.level}%`, transitionDelay: `${idx * 100}ms` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const backendSkills = SKILLS.filter(s => s.category === 'backend');
  const devopsSkills = SKILLS.filter(s => s.category === 'devops');
  const csSkills = SKILLS.filter(s => s.category === 'cs');
  const frontendSkills = SKILLS.filter(s => s.category === 'frontend');

  return (
    <section className="py-20 px-6 relative" id="skills">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              专业 <span className="text-cyan-400">技能</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              深耕 Java 生态系统，专注于高性能分布式系统设计与实现。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollReveal delay={0}>
            <SkillCategory title="后端核心" icon={Server} skills={backendSkills} />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <SkillCategory title="云原生 & 运维" icon={Terminal} skills={devopsSkills} />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <SkillCategory title="计算机基础" icon={Database} skills={csSkills} />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <SkillCategory title="前端技术" icon={Layout} skills={frontendSkills} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;