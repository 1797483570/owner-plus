import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { PROFILE } from '../constants';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-6 relative" id="contact">
        {/* Background effects */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <div className="container mx-auto max-w-4xl">
            <ScrollReveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        联系 <span className="text-cyan-400">方式</span>
                    </h2>
                    <p className="text-slate-400">
                        期待与您的交流，欢迎随时联系。
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ScrollReveal delay={100}>
                    <a href={`mailto:${PROFILE.email}`} className="block group">
                        <div className="glass-card p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col items-center text-center">
                            <div className="p-4 bg-cyan-500/10 rounded-full text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                            <p className="text-slate-300 group-hover:text-cyan-300 transition-colors font-mono">{PROFILE.email}</p>
                            <span className="mt-4 text-xs text-slate-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity">点击发送邮件</span>
                        </div>
                    </a>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <a href={`tel:${PROFILE.phone}`} className="block group">
                        <div className="glass-card p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 flex flex-col items-center text-center">
                            <div className="p-4 bg-green-500/10 rounded-full text-green-400 mb-4 group-hover:scale-110 transition-transform">
                                <Phone size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                            <p className="text-slate-300 group-hover:text-green-300 transition-colors font-mono">{PROFILE.phone}</p>
                            <span className="mt-4 text-xs text-slate-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity">点击拨打电话</span>
                        </div>
                    </a>
                </ScrollReveal>
            </div>
        </div>
    </section>
  );
};

export default Contact;