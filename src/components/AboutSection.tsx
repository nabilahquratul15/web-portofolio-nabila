import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Globe, Zap, GraduationCap } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Palette, value: 'Creative', label: 'Design Style' },
    { icon: Globe, value: 'Web', label: 'Exploration' },
    { icon: Zap, value: 'Tech', label: 'Enthusiast' },
    { icon: GraduationCap, value: 'X-10', label: 'Grade' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#FCFCFC] relative overflow-hidden text-slate-900">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[130px] opacity-50 z-0"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* HEADER SECTION - CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-blue-400"></div>
            <span className="text-[#3B82F6] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">
              About Me
            </span>
            <div className="w-8 h-[1px] bg-blue-400"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-none max-w-3xl">
            Get to Know About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* BAGIAN KIRI - VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-tr from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4] shadow-2xl shadow-blue-100/50">
              <div className="aspect-[4/5] rounded-[2.3rem] overflow-hidden border-[6px] border-white bg-slate-50">
                <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                   <span className="text-[100px]">👩‍💻</span>
                </div>
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
            <h3 className="text-2xl md:text-3xl font-extrabold mb-8 leading-tight tracking-tight">
              Merging <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4]">Logic with Creativity.</span>
            </h3>
            
            <div className="space-y-6 text-slate-500 text-sm md:text-lg font-medium leading-relaxed">
              <p>
                Perkenalkan, saya <span className="text-slate-900 font-bold">Nabilah Quratul Aini</span>, siswi kelas X-10 dari <span className="text-slate-900 font-bold">MAN 1 Banda Aceh</span>. Website ini dikembangkan sebagai bagian dari tugas praktik koding saya untuk memahami <span className="italic text-slate-800 font-semibold">web development workflow</span> serta meningkatkan kemampuan teknis dalam membangun tampilan digital yang rapi dan fungsional.
              </p>
              
              <p>
                Melalui proses ini, saya berupaya melatih ketelitian dan kreativitas dalam menghasilkan karya yang informatif. Sebagai pelajar, saya memiliki minat tinggi untuk terus belajar dan <span className="italic text-slate-800 font-semibold">stay adaptive</span> terhadap perkembangan teknologi digital guna menciptakan <span className="italic text-slate-800 font-semibold">high-quality digital interfaces</span> di masa depan.
              </p>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 gap-6 pt-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <stat.icon size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-extrabold text-xl leading-none">{stat.value}</h4>
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