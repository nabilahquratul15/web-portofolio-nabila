import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette, Globe, Zap, GraduationCap, Quote } from 'lucide-react';

export default function AboutSection() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'));
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    check();
    return () => obs.disconnect();
  }, []);

  const bgColor = isDark ? "bg-[#0B1120]" : "bg-[#FCFCFC]";
  const cardBg = isDark ? "bg-[#0F172A]/90 border-blue-900/50 shadow-[0_0_40px_rgba(30,58,138,0.3)]" : "bg-white border-slate-100 shadow-2xl";
  const textColor = isDark ? "text-white" : "text-slate-900";
  const subTextColor = isDark ? "text-slate-400" : "text-slate-500";
  const accentGradient = isDark ? "from-[#1E3A8A] via-[#1E40AF] to-blue-900" : "from-blue-600 to-cyan-500";

  const stats = [
    { icon: Palette, value: 'Creative', label: 'Design Style' },
    { icon: Globe, value: 'Web', label: 'Exploration' },
    { icon: Zap, value: 'Tech', label: 'Enthusiast' },
    { icon: GraduationCap, value: 'X-10', label: 'Grade' },
  ];

  return (
    <section id="about" className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-500 ${bgColor}`}>
      
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none ${isDark ? "bg-blue-600" : "bg-blue-200"}`}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-blue-600"></div>
            <span className="font-bold tracking-[0.3em] text-[10px] uppercase text-blue-500">About Me</span>
            <div className="w-8 h-[2px] bg-blue-600"></div>
          </div>
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter ${textColor}`}>
            Get to Know <span className={`text-transparent bg-clip-text bg-gradient-to-r ${accentGradient}`}>About Me</span>
          </h2>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`h-1.5 mt-6 rounded-full bg-gradient-to-r ${accentGradient}`}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative p-8 md:p-14 rounded-[3rem] border transition-all duration-500 ${cardBg}`}
          >
            
            <div className={`absolute -top-7 -left-5 w-16 h-16 rounded-2xl flex items-center justify-center text-white transform -rotate-12 
              ${isDark ? "bg-[#1E3A8A] shadow-[0_0_20px_#1E3A8A]" : "bg-blue-600 shadow-xl"}`}>
              <Quote size={32} />
            </div>

            <div className="text-center">
              <h3 className={`text-2xl md:text-3xl font-extrabold mb-10 tracking-tight ${textColor}`}>
                Merging <span className="text-blue-500">Logic</span> with Creativity.
              </h3>
              
              <div className={`space-y-6 text-base md:text-xl font-medium leading-relaxed ${subTextColor}`}>
                <p>
                  Perkenalkan, saya <span className="text-blue-500 font-bold">Nabilah Quratul Aini</span>, siswi kelas X-10 dari <span className="text-blue-500 font-bold">MAN 1 Banda Aceh</span>. Website ini dikembangkan sebagai bagian dari tugas praktik koding saya untuk memahami <span className="italic">web development workflow</span> serta meningkatkan kemampuan teknis dalam membangun tampilan digital yang rapi dan fungsional.
                </p>
                <p>
                  Melalui proses ini, saya berupaya melatih ketelitian dan kreativitas dalam menghasilkan karya yang informatif. Sebagai pelajar, saya memiliki minat tinggi untuk terus belajar dan <span className="italic text-blue-500 font-bold">stay adaptive</span> terhadap perkembangan teknologi digital.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-[2rem] border transition-all duration-300 group hover:-translate-y-2
                  ${isDark ? "border-slate-800 bg-[#0F172A]/50 hover:border-blue-500" : "border-slate-100 bg-white shadow-md"}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 
                  ${isDark ? "bg-blue-900/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white" : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"}`}>
                  <item.icon size={24} />
                </div>
                <h4 className={`font-black text-xl mb-1 ${textColor}`}>{item.value}</h4>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">{item.label}</p>
              </motion.div>
            ))}
          </div>

        </div> 
      </div>
    </section>
  );
}