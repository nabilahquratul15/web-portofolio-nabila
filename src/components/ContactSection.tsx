import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [isDark, setIsDark] = useState(false);
  const myEmail = "nabilahquratul15@gmail.com";

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'));
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    check();
    return () => obs.disconnect();
  }, []);

  const bgColor = isDark ? "bg-[#0B1120]" : "bg-[#FCFCFC]";
  
  const cardBg = isDark 
    ? "bg-[#0F172A]/90 border-blue-900/50 shadow-[0_0_50px_rgba(30,58,138,0.4)]" 
    : "bg-white border-slate-100 shadow-2xl";
    
  const textColor = isDark ? "text-white" : "text-slate-900";
  const subTextColor = isDark ? "text-slate-400" : "text-slate-500";
  
  const accentGradient = isDark 
    ? "from-[#0F172A] via-[#1E3A8A] to-[#1E40AF]" 
    : "from-[#3B82F6] via-[#60A5FA] to-[#06B6D4]"; 

  return (
    <section id="contact" className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-500 ${bgColor}`}>
      
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none ${isDark ? "bg-blue-600" : "bg-blue-100"}`}></div>

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
            <span className="font-bold tracking-[0.3em] text-[10px] uppercase text-blue-500">Contact Me</span>
            <div className="w-8 h-[2px] bg-blue-600"></div>
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${accentGradient}`}>
            Get In Touch
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
              ${isDark ? "bg-[#1E40AF] shadow-[0_0_25px_rgba(30,64,175,0.6)]" : "bg-blue-600 shadow-xl"}`}>
              <Send size={32} />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className={`text-2xl md:text-3xl font-extrabold mb-6 tracking-tight ${textColor}`}>
                  Let's Work <span className="text-blue-500">Together.</span>
                </h3>
                <p className={`text-base md:text-lg font-medium leading-relaxed mb-8 ${subTextColor}`}>
                  Apakah Kamu memiliki proyek menarik atau hanya ingin menyapa? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk berdiskusi atau just sharing ideas!
                </p>
                
                <div className="space-y-4">
                  {/* Email Item */}
                  <a href={`mailto:${myEmail}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer w-fit">
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                      <Mail size={20} />
                    </div>
                    <span className={`font-bold transition-colors ${textColor} group-hover:text-blue-500`}>{myEmail}</span>
                  </a>

                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=MAN+1+Banda+Aceh" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-4 group cursor-pointer w-fit"
                  >
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                      <MapPin size={20} />
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-bold transition-colors ${textColor} group-hover:text-blue-500`}>MAN 1 Banda Aceh</span>
                        <span className="text-[10px] text-slate-400"> Where I Learn </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className={`w-full p-8 rounded-[2rem] ${isDark ? "bg-blue-900/20" : "bg-slate-50"} border border-dashed border-blue-500/30 flex flex-col items-center`}>
                  <p className={`text-sm mb-6 font-medium italic text-center ${subTextColor}`}>
                    Klik tombol di bawah untuk mengirim email langsung.
                  </p>
                  <a 
                    href={`mailto:${myEmail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full py-5 rounded-2xl bg-blue-600 text-white font-black tracking-widest text-xs uppercase overflow-hidden transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    LAUNCH MAIL APP
                    <Mail size={18} className="group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div> 
      </div>
    </section>
  );
}