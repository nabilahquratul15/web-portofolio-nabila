import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette, Globe, Zap, GraduationCap } from 'lucide-react';

export default function AboutSection() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'));
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    check();
    return () => obs.disconnect();
  }, []);

  const stats = [
    { icon: Palette, value: 'Creative', label: 'Design Style' },
    { icon: Globe, value: 'Web', label: 'Exploration' },
    { icon: Zap, value: 'Tech', label: 'Enthusiast' },
    { icon: GraduationCap, value: 'X-10', label: 'Grade' },
  ];

  // Variabel Warna agar serasi dengan Hero & Navbar
  const sectionBg = isDark ? "bg-[#0B1120]" : "bg-[#FCFCFC]";
  const textColor = isDark ? "text-slate-300" : "text-slate-500";
  const titleColor = isDark ? "text-white" : "text-slate-900";
  const cardBg = isDark ? "bg-[#0F172A]" : "bg-white";
  const iconBg = isDark ? "bg-[#1E3A8A]/20" : "bg-blue-50";

  return (
    <section id="about" className={`py-20 md:py-32 relative overflow-hidden transition-colors duration-500 ${sectionBg}`}>
      
      {/* Background Glow - Sama dengan Hero */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 z-0 ${isDark ? "bg-blue-600" : "bg-blue-200"}`}></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-8 h-[1.5px] ${isDark ? "bg-blue-500 shadow-[0_0_8px_#3b82f6]" : "bg-blue-600"}`}></div>
            <span className={`font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              About Me
            </span>
            <div className={`w-8 h-[1.5px] ${isDark ? "bg-blue-500 shadow-[0_0_8px_#3b82f6]" : "bg-blue-600"}`}></div>
          </div>
          <h2 className={`text-4xl md:text-6xl font-black tracking-tighter leading-none max-w-3xl ${titleColor}`}>
            Get to Know About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* BAGIAN KIRI - VISUAL (Frame Glowing Serasi Hero) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Glow effect di belakang foto */}
            <div className={`absolute inset-0 rounded-[2.5rem] blur-2xl opacity-40 transition-colors ${isDark ? "bg-blue-600" : "bg-blue-400"}`}></div>
            
            <div className="relative p-1.5 rounded-[2.5rem] bg-gradient-to-tr from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4]">
              <div className={`aspect-[4/5] rounded-[2.3rem] overflow-hidden border-[4px] ${isDark ? "border-[#0B1120]" : "border-white"}`}>
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" 
                  alt="Nabilah" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* BAGIAN KANAN - TEKS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className={`text-2xl md:text-3xl font-extrabold mb-8 leading-tight tracking-tight ${titleColor}`}>
              Merging <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]">Logic with Creativity.</span>
            </h3>
            
            <div className={`space-y-6 text-sm md:text-lg font-medium leading-relaxed ${textColor}`}>
              <p>
                Perkenalkan, saya <span className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Nabilah Quratul Aini</span>, siswi kelas X-10 dari <span className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}>MAN 1 Banda Aceh</span>. Website ini dikembangkan sebagai bagian dari tugas praktik koding saya untuk memahami <span className="italic text-blue-500">web development workflow</span> serta meningkatkan kemampuan teknis dalam membangun tampilan digital yang rapi dan fungsional.
              </p>
              
              <p>
                Melalui proses ini, saya berupaya melatih ketelitian dan kreativitas dalam menghasilkan karya yang informatif. Sebagai pelajar, saya memiliki minat tinggi untuk terus belajar dan <span className="italic text-blue-500">stay adaptive</span> terhadap perkembangan teknologi digital guna menciptakan <span className="italic text-blue-500">high-quality digital interfaces</span> di masa depan.
              </p>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-12">
              {stats.map((stat, index) => (
                <div key={index} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${isDark ? "border-slate-800 bg-slate-900/50" : "border-slate-100 bg-white shadow-sm"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`}>
                    <stat.icon size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className={`font-extrabold text-lg leading-none ${titleColor}`}>{stat.value}</h4>
                    <p className="text-slate-400 text-[10px] uppercase tracking-[0.1em] font-bold mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}