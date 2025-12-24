import React, { useState } from 'react';
import { ExternalLink, Zap, TrendingUp } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectItem } from '../types';
import ScrollReveal from './ScrollReveal';

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 group">
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <span className="px-3 py-1 text-xs rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-800">
                {project.role}
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-4 font-mono">{project.duration}</p>
            <p className="text-slate-300 leading-relaxed mb-6">
              {project.description}
            </p>
          </div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 md:justify-end max-w-xs">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-green-500/30 transition-colors">
              <TrendingUp size={18} className="text-green-400" />
              <span className="text-sm font-semibold text-slate-200">{metric}</span>
            </div>
          ))}
        </div>

        {/* Expandable Details */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 border-t border-slate-700 space-y-4">
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider">核心技术亮点</h4>
            <ul className="space-y-3">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <Zap className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 w-full py-2 flex items-center justify-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors border-t border-transparent hover:border-slate-700 pt-4"
        >
          {isExpanded ? '收起详情' : '查看技术细节'}
          <ExternalLink size={14} className={isExpanded ? 'rotate-180 transition-transform' : 'transition-transform'} />
        </button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-20 px-6 relative" id="projects">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-1/3 h-1/2 bg-cyan-900/10 rounded-l-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl">
         <ScrollReveal>
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              项目 <span className="text-cyan-400">经验</span>
            </h2>
            <p className="text-slate-400">以可扩展架构解决复杂业务痛点。</p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {PROJECTS.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 150}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;