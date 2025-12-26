import React from 'react';
import { Award, Medal, GraduationCap, BookOpen } from 'lucide-react';
import { AWARDS, PROFILE } from '../constants';
import ScrollReveal from './ScrollReveal';

const Achievements: React.FC = () => {
  return (
    <section className="py-20 px-6" id="awards">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Education */}
          <ScrollReveal className="h-full">
            <div className="h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <GraduationCap className="text-cyan-400" />
                教育背景
              </h3>
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-colors flex-1 flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                
                <h4 className="text-xl font-bold text-white mb-2">{PROFILE.education.school}</h4>
                <p className="text-cyan-400 font-medium mb-4">{PROFILE.education.degree}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 mb-1">
                  <div className="bg-slate-800/50 p-3 rounded border border-transparent group-hover:border-slate-700 transition-colors">
                    <span className="block text-slate-500 text-xs uppercase mb-1">在校时间</span>
                    {PROFILE.education.period}
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded border border-transparent group-hover:border-slate-700 transition-colors">
                    <span className="block text-slate-500 text-xs uppercase mb-1">学业成绩</span>
                    {PROFILE.education.gpa}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <h5 className="text-sm font-semibold text-slate-400 mb-4 flex items-center gap-2">
                    <BookOpen size={16} className="text-cyan-500" />
                    核心课程
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {PROFILE.education.courses.map((course, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs rounded bg-slate-800/80 text-slate-300 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700/50">
                   <h5 className="text-sm font-semibold text-slate-400 mb-4 flex items-center gap-2">
                     <Medal size={16} className="text-cyan-500" />
                     证书
                   </h5>
                   <div className="flex flex-wrap gap-2">
                     {PROFILE.education.certificates?.map((cert, i) => (
                       <span key={i} className="px-2.5 py-1 text-xs rounded bg-slate-800/80 text-slate-300 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                         {cert}
                       </span>
                     ))}
                   </div>
                 </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Awards */}
          <div>
            <ScrollReveal delay={200}>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Award className="text-yellow-400" />
                荣誉奖项
              </h3>
            </ScrollReveal>
            <div className="grid gap-4">
              {AWARDS.map((award, idx) => (
                <ScrollReveal key={award.id} delay={200 + idx * 50}>
                  <div className={`glass-card p-4 rounded-lg flex items-center justify-between hover:translate-x-2 transition-transform cursor-default hover:bg-slate-800/80 border-l-4 ${
                    award.rank === '1' ? 'border-l-yellow-400' :
                    award.rank === '2' ? 'border-l-slate-300' :
                    'border-l-amber-700'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${
                        award.rank === '1' ? 'bg-yellow-500/10 text-yellow-500' :
                        award.rank === '2' ? 'bg-slate-300/10 text-slate-300' :
                        'bg-amber-700/10 text-amber-700'
                      }`}>
                        <Medal size={18} />
                      </div>
                      <span className="text-slate-200 font-medium">{award.title}</span>
                    </div>
                    <span className="text-sm font-mono text-slate-500">{award.date}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
