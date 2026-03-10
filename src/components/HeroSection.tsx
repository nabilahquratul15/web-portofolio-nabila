import React from 'react';
import { motion } from 'framer-motion';
// Mail sudah masuk ke import agar tidak ada garis merah
import { ArrowDown, Github, Instagram, Mail } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Email kamu sudah diset di sini
  const myEmail = "nabilahaini1504@gmail.com"; 

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#FCFCFC] pt-32 pb-16 overflow-hidden">
      
      {/* Background Glow Estetik */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-100 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          
          {/* --- FOTO BULAT (KIRI) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4] shadow-2xl shadow-blue-100/50">
              <div className="w-60 h-60 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-[6px] border-white bg-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" 
                  alt="Nabila Profile"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* --- BAGIAN TEKS (KANAN) --- */}
          <div className="flex-1 text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="w-8 h-[1px] bg-blue-400"></div>
              <span className="text-[#3B82F6] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">
                👋 Hi! Welcome On Nabila's Portfolio
              </span>
            </motion.div>

            {/* --- TIPOGRAFI NAMA --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 flex flex-col"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-none tracking-tighter">
                Nabilah Quratul
              </h1>
              {/* Posisi Aini ditarik ke tengah secara horizontal */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4] leading-tight tracking-tighter self-center lg:ml-[-100px]">
                Aini
              </h1>
            </motion.div>

            {/* FONT PARAGRAF DISAMAKAN DENGAN ABOUT ME */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-500 text-sm md:text-lg max-w-lg mb-12 font-medium leading-relaxed"
            >
              Siswi <span className="text-slate-900 font-bold">MAN 1 Banda Aceh</span> yang sedang belajar untuk mengembangkan website.
            </motion.p>

            {/* Aksi & Sosmed dengan Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-10"
            >
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 rounded-full bg-[#1E3A8A] text-white font-bold text-xs tracking-widest hover:bg-[#3B82F6] transition-all shadow-xl shadow-blue-100 hover:-translate-y-1"
              >
                MY PROJECTS
              </button>

              <div className="flex gap-6 items-center">
                <a href="https://github.com/nabilahquratul15" target="_blank" className="text-slate-400 hover:text-[#1E3A8A] transition-all">
                  <Github size={22} />
                </a>
                
                {/* Ikon Email Aktif */}
                <a href={`mailto:${myEmail}`} className="text-slate-400 hover:text-blue-500 transition-all">
                  <Mail size={22} />
                </a>

                <a href="https://www.instagram.com/nabbilaa.n" target="_blank" className="text-slate-400 hover:text-pink-500 transition-all">
                  <Instagram size={22} />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer opacity-30 hover:opacity-100 transition-opacity"
        onClick={scrollToAbout}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}