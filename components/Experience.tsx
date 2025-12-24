import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';
import ScrollReveal from './ScrollReveal';

const Experience: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-slate-900/30" id="experience">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-3">
            <Briefcase className="text-cyan-400" />
            工作经历
          </h2>
        </ScrollReveal>

        <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 100}>
              <div className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-slate-900 transition-transform hover:scale-150 duration-300"></div>
                
                <div className="glass-card p-6 md:p-8 rounded-xl border-l-4 border-l-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <div className="text-lg text-cyan-400 font-medium">{exp.company}</div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 font-mono text-sm mt-2 md:mt-0">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 italic border-l-2 border-slate-600 pl-4 py-1">
                    {exp.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0 group-hover:bg-cyan-300 group-hover:scale-150 transition-all"></span>
                        <span className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-semibold bg-cyan-900/20 text-cyan-300 rounded-full border border-cyan-500/10 hover:border-cyan-500/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;