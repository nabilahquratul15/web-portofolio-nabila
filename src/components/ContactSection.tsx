import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, MessageSquare, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [isDark, setIsDark] = useState(false);
  const myEmail = "nabilahaini1504@gmail.com";

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
    ? "from-[#3B82F6] via-[#60A5FA] to-[#06B6D4]" 
    : "from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4]"; 

  return (
    <section id="contact" className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-500 ${bgColor}`}>
      
      {/* Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none ${isDark ? "bg-blue-600" : "bg-blue-200"}`}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
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
          
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r leading-[1.2] pb-2 ${accentGradient}`}>
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

        <div className="max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10 }} 
            className={`relative p-8 md:p-14 rounded-[3rem] border transition-all duration-500 group/card ${cardBg}`}
          >
            {/* Floating Icon */}
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              className={`absolute -top-7 -left-5 w-16 h-16 rounded-2xl flex items-center justify-center text-white transform -rotate-12 transition-all duration-300
                ${isDark ? "bg-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.6)]" : "bg-blue-600 shadow-xl"}`}>
              <Send size={32} />
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-12">
              
              {/* LEFT SIDE: INFO */}
              <div className="lg:col-span-2 text-left space-y-8">
                <div>
                  <h3 className={`text-2xl md:text-3xl font-extrabold mb-6 tracking-tight ${textColor}`}>
                    Let's Work <span className="text-blue-500">Together.</span>
                  </h3>
                  <p className={`text-base md:text-lg font-medium leading-relaxed mb-8 ${subTextColor}`}>
                    Apakah Kamu memiliki proyek menarik atau hanya ingin menyapa? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk berdiskusi atau <span className="text-blue-500">just sharing ideas!</span>
                  </p>
                </div>
                
                <div className="space-y-4">
                  {/* Email Item */}
                  <a href={`mailto:${myEmail}`} className="flex items-center gap-4 group cursor-pointer w-fit">
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      <Mail size={20} />
                    </div>
                    <span className={`font-bold transition-colors ${textColor} group-hover:text-blue-500`}>{myEmail}</span>
                  </a>

                  {/* Location Item (Sekarang sudah ada efek biru pas dipencet/hover) */}
                  <a 
                    href="https://maps.google.com/?q=MAN+1+Banda+Aceh" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-4 group cursor-pointer w-fit"
                  >
                    <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      <MapPin size={20} />
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-bold transition-colors ${textColor} group-hover:text-blue-500`}>MAN 1 Banda Aceh</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Where I Learn</span>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-blue-500 font-bold text-xs uppercase tracking-tighter">
                   <Sparkles size={14} className="animate-pulse" /> Available for new projects
                </div>
              </div>

              {/* RIGHT SIDE: DIRECT EMAIL FORM */}
              <div className="lg:col-span-3">
                <div className={`p-8 rounded-[2.5rem] transition-all duration-500 ${isDark ? "bg-blue-900/10 border-blue-800/20 shadow-inner" : "bg-slate-50 border-slate-200 shadow-inner"} border`}>
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare size={20} className="text-blue-500" />
                    <h4 className={`font-bold ${textColor}`}>Quick Message</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className={`w-full px-6 py-4 rounded-2xl border bg-transparent outline-none transition-all focus:ring-4 focus:ring-blue-500/10 ${isDark ? "border-slate-800 text-white focus:border-blue-500" : "border-slate-200 text-slate-900 focus:border-blue-500"}`}
                    />
                    <textarea 
                      placeholder="Tell me something..." 
                      rows={4}
                      className={`w-full px-6 py-4 rounded-2xl border bg-transparent outline-none transition-all focus:ring-4 focus:ring-blue-500/10 resize-none ${isDark ? "border-slate-800 text-white focus:border-blue-500" : "border-slate-200 text-slate-900 focus:border-blue-500"}`}
                    ></textarea>
                    
                    <button 
                      onClick={() => window.location.href = `mailto:${myEmail}?subject=Halo Nabilah!&body=Hai Nabilah, saya ingin mengobrol tentang...`}
                      className="group relative w-full py-5 rounded-2xl bg-blue-600 text-white font-black tracking-[0.2em] text-[10px] uppercase overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/40 active:scale-95 flex items-center justify-center gap-3"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      SEND MESSAGE
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div> 
      </div>
    </section>
  );
}