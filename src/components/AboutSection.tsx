import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Globe, Zap, GraduationCap, Quote, ChevronDown, Sparkles, Heart, Rocket } from 'lucide-react';

export default function AboutSection() {
  const [isDark, setIsDark] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
  
  const accentGradient = isDark 
    ? "from-[#3B82F6] via-[#60A5FA] to-[#06B6D4]" 
    : "from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4]";

  const stats = [
    { icon: Palette, value: 'Creative', label: 'Design Style' },
    { icon: Globe, value: 'Web', label: 'Exploration' },
    { icon: Zap, value: 'Tech', label: 'Enthusiast' },
    { icon: GraduationCap, value: 'X-10', label: 'Grade' },
  ];

  const personalData = [
    {
      title: "Student Life",
      icon: <Sparkles size={18} />,
      content: "Siswi kelas X-10 di MAN 1 Banda Aceh. Menjalani keseharian dengan semangat belajar tinggi dan aktif dalam kegiatan sekolah."
    },
    {
      title: "My Passion",
      icon: <Heart size={18} />,
      content: "Sangat menyukai hal-hal bertema estetika dan desain. Menjelajahi dunia digital adalah cara saya menyalurkan kreativitas."
    },
    {
      title: "The Vision",
      icon: <Rocket size={18} />,
      content: "Bercita-cita menjadi pribadi yang adaptif terhadap teknologi dan mampu menciptakan karya yang bermanfaat di masa depan."
    }
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
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-blue-600"></div>
            <span className="font-bold tracking-[0.3em] text-[10px] uppercase text-blue-500">About Me</span>
            <div className="w-8 h-[2px] bg-blue-600"></div>
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r leading-tight pb-2 ${accentGradient}`}>
            Get to Know About Me
          </h2>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`h-1.5 mt-6 rounded-full bg-gradient-to-r ${accentGradient}`}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 md:p-10 rounded-[3rem] border transition-all duration-500 group/main ${cardBg}`}
            >
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.1 }}
                className={`absolute -top-7 -left-5 w-14 h-14 rounded-2xl flex items-center justify-center text-white transform -rotate-12 transition-all duration-300
                  ${isDark ? "bg-[#1E3A8A] shadow-[0_0_20px_#1E3A8A]" : "bg-blue-600 shadow-xl"}`}>
                <Quote size={28} />
              </motion.div>

              <h3 className={`text-2xl md:text-3xl font-extrabold mb-6 tracking-tight ${textColor}`}>
                Merging Logic with <span className="text-blue-500">Creativity.</span>
              </h3>
              
              <div className={`space-y-4 text-base md:text-lg font-medium leading-relaxed ${subTextColor}`}>
                <p>
                  Halo! Perkenalkan saya <span className="text-blue-500 font-bold">Nabilah Quratul Aini</span> <span className="text-blue-500 font-bold"></span>.
                </p>
                <p>
                  Website ini adalah wadah belajar saya untuk memahami dunia teknologi digital. Saya percaya bahwa ketelitian dan kreativitas adalah kunci untuk menciptakan karya yang luar biasa.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {personalData.map((item, i) => (
                <div 
                  key={i} 
                  className={`border rounded-[2rem] transition-all duration-500 ${
                    openIndex === i 
                    ? "border-blue-500/50 bg-blue-50/10 dark:bg-blue-900/10 shadow-lg" 
                    : "border-slate-100 dark:border-blue-900/20 bg-white/50 dark:bg-transparent"
                  }`}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl transition-all ${openIndex === i ? "bg-blue-600 text-white shadow-lg" : "text-blue-500 bg-blue-100 dark:bg-blue-900/30"}`}>
                        {item.icon}
                      </div>
                      <span className={`font-bold transition-colors ${openIndex === i ? "text-blue-600 dark:text-blue-400" : textColor}`}>
                        {item.title}
                      </span>
                    </div>
                    <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }}>
                      <ChevronDown size={20} className={openIndex === i ? "text-blue-500" : "text-slate-400"} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`px-6 pb-6 pt-2 text-sm md:text-base leading-relaxed font-medium border-t border-slate-100 dark:border-blue-900/10 mt-2 ${subTextColor}`}>
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

          {/* STATS GRID - Tetap Dipertahankan Di Bawah Layout Sampingan */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`p-6 rounded-[2rem] border transition-all duration-500 group hover:z-20
                  ${isDark ? "border-slate-800 bg-[#0F172A]/50 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]" : "border-slate-100 bg-white shadow-md hover:shadow-xl"}`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 
                  ${isDark ? "bg-blue-900/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white" : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"}`}>
                  <item.icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h4 className={`font-black text-xl mb-1 transition-colors duration-300 group-hover:text-blue-500 ${textColor}`}>{item.value}</h4>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">{item.label}</p>
              </motion.div>
            ))}
          </div>

        </div> 
      </div>
    </section>
  );
}