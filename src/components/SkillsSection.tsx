import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Beaker, Globe2, BookOpen } from 'lucide-react';

const subjects = {
  sains: [
    { name: 'Fisika', level: 88 },
    { name: 'Kimia', level: 85 },
    { name: 'Biologi', level: 95 },
    { name: 'Matematika IPA', level: 85 },
  ],
  sosial: [
    { name: 'Sosiologi', level: 90 },
    { name: 'Ekonomi', level: 89 },
    { name: 'Geografi', level: 89 },
    { name: 'Sejarah', level: 92 },
  ],
  bahasa: [
    { name: 'Bahasa Indonesia', level: 92 },
    { name: 'Bahasa Inggris', level: 96},
    { name: 'Bahasa Arab', level: 85 },
  ],
};

function SkillBar({ name, level, isDark, delay }: { name: string; level: number; isDark: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group/bar space-y-3 cursor-default"
    >
      <div className="flex justify-between items-center">
        {/* Hover: Nama pelajaran berubah biru */}
        <span className={`font-bold tracking-tight transition-colors duration-300 group-hover/bar:text-blue-500 ${isDark ? "text-white" : "text-slate-900"}`}>
          {name}
        </span>
        <span className="text-sm font-black text-blue-500">{level}%</span>
      </div>
      
      <div className={`h-3 rounded-full overflow-visible ${isDark ? "bg-slate-800" : "bg-slate-100"}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "circOut" }}
          // Hover: Bar sedikit membesar dan glow makin terang
          whileHover={{ scaleY: 1.2, filter: "brightness(1.2)" }}
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_15px_rgba(37,99,235,0.4)] relative"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
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
  const accentGradient = isDark 
    ? "from-[#3B82F6] via-[#60A5FA] to-[#06B6D4]" 
    : "from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4]";

  const categories = [
    { id: 'sains', title: 'Sains (IPA)', icon: Beaker, items: subjects.sains },
    { id: 'sosial', title: 'Sosial (IPS)', icon: Globe2, items: subjects.sosial },
    { id: 'bahasa', title: 'Bahasa', icon: BookOpen, items: subjects.bahasa },
  ];

  return (
    <section id="skills" className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-500 ${bgColor}`}>
      
      {/* Glow Background */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none ${isDark ? "bg-blue-600" : "bg-blue-200"}`}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-blue-600"></div>
            <span className="font-bold tracking-[0.3em] text-[10px] uppercase text-blue-500">Academic Skills</span>
            <div className="w-8 h-[2px] bg-blue-600"></div>
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${accentGradient}`}>
            Pelajaran & Nilai
          </h2>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`h-1.5 mt-6 rounded-full bg-gradient-to-r ${accentGradient}`}
          />
        </motion.div>

        {/* Grid Card dengan Efek Hover */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              // Hover: Card melayang dan shadow makin tebal
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className={`relative p-8 md:p-10 rounded-[3rem] border transition-all duration-500 group ${cardBg}`}
            >
              {/* Icon Box */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 
                ${isDark ? "bg-blue-900/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]" : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white shadow-sm"}`}>
                <cat.icon size={32} />
              </div>

              <h3 className={`text-2xl font-black mb-8 tracking-tight ${textColor}`}>
                {cat.title}
              </h3>

              <div className="space-y-8">
                {cat.items.map((item, itemIdx) => (
                  <SkillBar 
                    key={item.name} 
                    name={item.name} 
                    level={item.level} 
                    isDark={isDark} 
                    delay={(idx * 0.1) + (itemIdx * 0.1)} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}