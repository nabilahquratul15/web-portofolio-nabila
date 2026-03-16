import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Laptop, Sparkles, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Website Portfolio',
    description: 'Project website yang sedang Anda jelajahi saat ini. Dibangun dengan fokus pada pengalaman pengguna yang halus dan desain yang adaptif.',
    icon: <Laptop size={48} />,
    color: 'from-blue-600/20 to-cyan-500/20',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    demo: '#',
    isComingSoon: false
  },
  {
    title: 'Next Project',
    description: 'Nantikan project selanjutnya',
    icon: <Sparkles size={48} />,
    color: 'from-blue-600/20 to-indigo-500/20', 
    tags: ['Planning', 'Research'],
    demo: null,
    isComingSoon: true
  }
];

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="py-24 bg-[#FCFCFC] dark:bg-[#0B1120] transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        <div className="text-center mb-20 flex flex-col items-center gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 
              dark:from-[#1E3A8A] dark:via-[#3B82F6] dark:to-[#1E40AF] 
              drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] py-4">
              My Projects
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[4px] rounded-full bg-blue-600 dark:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <motion.div
              key={`glow-${index}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 0.6 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute w-[80%] h-[70%] rounded-full blur-[110px] bg-blue-500/30 dark:bg-blue-600/20"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-xl p-8 md:p-14 rounded-[3rem] shadow-2xl border border-white/20 dark:border-blue-900/30"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                <div className={`aspect-video rounded-[2rem] bg-gradient-to-br ${projects[index].color} flex items-center justify-center text-blue-500 shadow-inner relative overflow-hidden group`}>
                  <motion.div 
                    key={index}
                    initial={{ scale: 0.5, rotate: -10 }} 
                    animate={{ scale: 1, rotate: 0 }} 
                    transition={{ type: "spring", damping: 15 }}
                  >
                    {projects[index].icon}
                  </motion.div>
                </div>
                
                <div className="space-y-6 text-left">
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-black dark:text-white tracking-tight flex items-center gap-3">
                      {projects[index].title}
                      {projects[index].isComingSoon && (
                        <span className="text-[10px] px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg uppercase tracking-widest font-bold border border-blue-200 dark:border-blue-800">Soon</span>
                      )}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {projects[index].tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full flex items-center gap-1 border border-slate-200 dark:border-slate-700">
                          <Code size={10} /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-base md:text-lg font-normal leading-relaxed text-slate-500 dark:text-slate-400">
                    {projects[index].description}
                  </p>

                  {!projects[index].isComingSoon && (
                    <div className="flex gap-6 pt-4">
                      <a 
                        href={projects[index].demo} 
                        className="flex items-center gap-2 font-bold text-sm tracking-widest text-blue-600 dark:text-blue-400 group"
                      >
                        <ExternalLink size={20} className="group-hover:-translate-y-1 transition-transform duration-300" /> 
                        <span className="relative">
                          LIHAT DETAIL
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300" />
                        </span>
                      </a>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={prev} 
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl rounded-2xl text-blue-600 border border-white dark:border-slate-700 hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={next} 
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl rounded-2xl text-blue-600 border border-white dark:border-slate-700 hover:scale-110 active:scale-95 transition-all"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-10 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)]" : "w-2 bg-slate-300 dark:bg-slate-700"}`} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}