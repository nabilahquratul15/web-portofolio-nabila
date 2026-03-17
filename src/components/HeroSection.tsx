import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Mail } from 'lucide-react';

export default function HeroSection() {
  // Sudah menggunakan email baru kamu
  const myEmail = "nabilahaini1504@gmail.com";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-[#FCFCFC] dark:bg-[#0B1120] transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className="flex-1 text-left order-2 lg:order-1">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center gap-4"
            >
              <div className="w-10 h-[1.5px] rounded-full bg-blue-600 dark:bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400">
                Hi, Welcome To My Space
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4] dark:from-[#1E3A8A] dark:via-[#3B82F6] dark:to-[#1E40AF]">
                Nabilah Quratul Aini
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-xl mb-12"
            >
              <p className="text-base md:text-lg font-normal leading-relaxed tracking-wide text-slate-500 dark:text-slate-400">
                Siswi <span className="font-bold text-blue-600 dark:text-blue-500">MAN 1 Banda Aceh</span> yang sedang belajar mengembangkan website.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-8"
            >
              <a 
                href="#projects"
                className="px-10 py-4 rounded-full font-bold text-xs tracking-widest text-white shadow-lg transition-all hover:-translate-y-1 active:scale-95 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] dark:from-[#0F172A] dark:to-[#1E3A8A] dark:shadow-blue-900/40"
              >
                SEE MY PROJECTS
              </a>
              
              <div className="flex gap-6 items-center text-slate-400">
                <a href="https://github.com/nabilahquratul15" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><Github size={22} /></a>
                <a href={`mailto:${myEmail}`} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><Mail size={22} /></a>
                <a href="https://www.instagram.com/nabbilaa.n" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors"><Instagram size={22} /></a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex-shrink-0 order-1 lg:order-2"
          >
            <div className="absolute inset-[-60px] rounded-full blur-[90px] bg-blue-400/40 dark:bg-blue-600/60 transition-all duration-700"></div>
            
            <div className="relative w-64 h-64 md:w-80 lg:w-[380px] lg:h-[380px] rounded-full flex items-center justify-center p-[5px] bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4] shadow-2xl">
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-[4px] border-white dark:border-[#0B1120]">
                <img 
                  src="https://i.pinimg.com/736x/72/97/27/729727b6bc49950fcb183bb67e5ec66d.jpg" 
                  alt="Nabilah" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}