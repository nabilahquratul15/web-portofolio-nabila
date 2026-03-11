import React, { useState, useEffect } from 'react';
import { Github, Instagram, Mail } from 'lucide-react';

export default function HeroSection() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'));
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    check();
    return () => obs.disconnect();
  }, []);

  const myEmail: string = "nabilahaini1504@gmail.com";

  return (
    <section id="home" className={`relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden transition-colors duration-500 ${isDark ? "bg-[#0B1120]" : "bg-[#FCFCFC]"}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className="flex-1 text-left order-2 lg:order-1">
            <div className="mb-4 flex items-center gap-4">
              <div className={`w-10 h-[1.5px] rounded-full ${isDark ? "bg-[#1E3A8A] shadow-[0_0_15px_#1E3A8A]" : "bg-blue-600"}`}></div>
              <span className={`text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                Hi, Welcome To My Space
              </span>
            </div>

            <div className="mb-8 whitespace-nowrap">
              <h1 className={`text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${isDark ? "from-[#1E3A8A] via-[#3B82F6] to-[#1E40AF]" : "from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4]"}`}>
                Nabilah Quratul Aini
              </h1>
            </div>

            <div className="max-w-xl mb-12">
              <p className={`text-base md:text-lg font-normal leading-relaxed tracking-wide ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Siswi <span className={`font-bold ${isDark ? "text-white" : "text-[#1E3A8A]"}`}>MAN 1 Banda Aceh</span> yang sedang belajar mengembangkan website.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <button className={`relative px-10 py-4 rounded-full font-bold text-xs tracking-widest transition-all hover:-translate-y-1 active:scale-95 text-white overflow-hidden border-none ${isDark ? "bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#111827] shadow-[0_0_25px_rgba(30,58,138,0.7)]" : "bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4] shadow-[0_0_20px_rgba(59,130,246,0.4)]"}`}>
                <span className="relative z-10 uppercase">SEE MY PROJECTS</span>
              </button>
              
              <div className="flex gap-6 items-center text-slate-400">
                <a href="https://github.com/nabilahquratul15" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><Github size={22} /></a>
                <a href={`mailto:${myEmail}`} className="hover:text-blue-400 transition-colors"><Mail size={22} /></a>
                <a href="https://www.instagram.com/nabbila.n" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors"><Instagram size={22} /></a>
              </div>
            </div>
          </div>

          <div className="relative flex-shrink-0 order-1 lg:order-2">
            <div className={`absolute inset-[-60px] rounded-full blur-[90px] transition-all duration-700 ${isDark ? "bg-blue-600/60 opacity-100" : "bg-blue-400/40 opacity-70"}`}></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full flex items-center justify-center p-[5px] shadow-[0_0_60px_rgba(30,58,138,0.5)] bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4] group cursor-pointer active:scale-95 transition-transform">
              {/* Div di bawah ini yang bikin efek zoom gambar di dalamnya pas kursor di arahkan (group-hover:scale-110) */}
              <div className={`relative z-10 w-full h-full rounded-full overflow-hidden border-[4px] ${isDark ? "border-[#0B1120]" : "border-white"}`}>
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" 
                  alt="Nabila" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}