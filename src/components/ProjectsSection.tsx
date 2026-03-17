import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Laptop, Sparkles, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Website Portfolio',
    description: 'Project website yang sedang Anda jelajahi saat ini. Dibangun dengan fokus pada pengalaman pengguna yang halus dan desain yang adaptif.',
    // --- MURNI PAKE ICON MELAYANG (GAMBAR AI HAPUS) ---
    icon: <Laptop size={72} />,
    color: 'from-blue-600/25 to-cyan-500/25', // Gradasi sedikit lebih tebal
    tags: ['React', 'Tailwind', 'Framer Motion'],
    demo: '#',
    isComingSoon: false
  },
  {
    title: 'Next Project',
    description: 'Nantikan project selanjutnya. Sedang dalam tahap riset dan pengembangan fitur-fitur baru.',
    icon: <Sparkles size={72} />,
    color: 'from-blue-600/25 to-indigo-500/25', 
    tags: ['Planning', 'Research'],
    demo: null,
    isComingSoon: true
  }
];

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // Deteksi Dark Mode agar senada dengan About
  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'));
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    check();
    
    // Auto-play Carousel (pindah tiap 5 detik)
    const interval = setInterval(next, 5000);
    return () => {
      obs.disconnect();
      clearInterval(interval);
    };
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const bgColor = isDark ? "bg-[#0B1120]" : "bg-[#FCFCFC]";
  const cardBg = isDark ? "bg-[#0F172A]/90 border-blue-900/50 shadow-[0_0_40px_rgba(30,58,138,0.3)]" : "bg-white border-slate-100 shadow-2xl";
  const textColor = isDark ? "text-white" : "text-slate-900";
  const accentGradient = isDark 
    ? "from-[#3B82F6] via-[#60A5FA] to-[#06B6D4]" 
    : "from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4]";

  return (
    <section id="projects" className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-500 ${bgColor}`}>
      
      {/* Glow Background - Senada dengan About */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none ${isDark ? "bg-blue-600" : "bg-blue-200"}`}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER - IDENTIK DENGAN ABOUT (DIPERBAIKI AGAR TIDAK KEPOTONG) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-blue-600"></div>
            <span className="font-bold tracking-[0.3em] text-[10px] uppercase text-blue-500">My Works</span>
            <div className="w-8 h-[2px] bg-blue-600"></div>
          </div>
          
          {/* Perbaikan: Menambahkan h-full dan py-4 agar gradasi teks tidak terpotong */}
          <h2 className={`h-full py-4 text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r leading-[1.1] ${accentGradient}`}>
            Selected Projects
          </h2>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`h-1.5 mt-6 rounded-full bg-gradient-to-r ${accentGradient}`}
          />
        </motion.div>

        {/* CAROUSEL SECTION */}
        <div className="relative max-w-5xl mx-auto">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              // HOVER: Card melayang (Sama dengan About)
              whileHover={{ y: -10 }}
              className={`relative z-10 p-8 md:p-14 rounded-[3rem] border transition-all duration-500 group ${cardBg}`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* Image/Icon Box dengan Animasi Gerak Melayang */}
                <div className={`aspect-square md:aspect-video rounded-[2rem] bg-gradient-to-br ${projects[index].color} flex items-center justify-center text-blue-500 shadow-inner relative overflow-hidden border border-white/10 group/img`}>
                  
                  {/* --- ANIMASI ICON MELAYANG (CLEAN & KEREN) --- */}
                  <motion.div 
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 4, 0]
                    }} 
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    // Efek shadow mentereng di belakang ikon
                    className={`drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] text-blue-600 dark:text-blue-400 group-hover/img:scale-110 transition-transform duration-500`}
                  >
                    {projects[index].icon}
                  </motion.div>

                  {/* Efek Kilatan Cahaya Bergerak (Shine) */}
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-1/2 h-full bg-white/10 dark:bg-blue-400/10 skew-x-[25deg] pointer-events-none"
                  />
                </div>
                
                {/* Project Info */}
                <div className="space-y-6 text-left">
                  <div className="space-y-4">
                    <h3 className={`text-3xl md:text-4xl font-black tracking-tight transition-colors duration-300 group-hover:text-blue-500 ${textColor}`}>
                      {projects[index].title}
                      {projects[index].isComingSoon && (
                        <span className="ml-3 text-[10px] px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg uppercase tracking-widest font-bold border border-blue-200 dark:border-blue-800">Soon</span>
                      )}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {projects[index].tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center gap-1 border border-blue-100 dark:border-blue-800 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                          <Code size={10} /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className={`text-base md:text-lg font-medium leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {projects[index].description}
                  </p>

                  {!projects[index].isComingSoon && (
                    <div className="pt-4">
                      <motion.a 
                        whileHover={{ x: 10 }}
                        href={projects[index].demo} 
                        className="flex items-center gap-2 font-bold text-sm tracking-widest text-blue-600 dark:text-blue-400 group/link"
                      >
                        <ExternalLink size={20} className="group-hover/link:-translate-y-1 transition-transform duration-300" /> 
                        <span className="relative">
                          EXPLORE PROJECT
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover/link:w-full transition-all duration-300" />
                        </span>
                      </motion.a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigasi Carousel */}
          <button 
            onClick={prev} 
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white dark:bg-slate-800 shadow-xl rounded-2xl text-blue-600 border border-slate-100 dark:border-slate-700 hover:scale-110 hover:bg-blue-600 hover:text-white transition-all"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={next} 
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white dark:bg-slate-800 shadow-xl rounded-2xl text-blue-600 border border-slate-100 dark:border-slate-700 hover:scale-110 hover:bg-blue-600 hover:text-white transition-all"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${i === index ? "w-12 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]" : "w-2 bg-slate-300 dark:bg-slate-700 hover:w-4"}`} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}