import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Film, Languages, PenTool, Coffee, Heart } from 'lucide-react';

export default function SkillsSection() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'));
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    check();
    return () => obs.disconnect();
  }, []);

  const skillList = [
    { name: "Literary Lover", desc: "Sangat suka membaca berbagai genre cerita & buku.", icon: BookOpen, color: "text-blue-500" },
    { name: "Movie Enthusiast", desc: "Menikmati dunia sinematografi & alur cerita film.", icon: Film, color: "text-purple-500" },
    { name: "English Skill", desc: "Mampu berkomunikasi & memahami teks Bahasa Inggris.", icon: Languages, color: "text-orange-500" },
    { name: "Creative Thinking", desc: "Berimajinasi luas berkat hobi membaca & menonton.", icon: PenTool, color: "text-pink-500" },
    { name: "Storytelling", desc: "Bisa menceritakan kembali hal menarik dengan seru.", icon: Heart, color: "text-red-500" },
    { name: "Quick Learner", desc: "Mudah menyerap informasi baru dari berbagai media.", icon: Coffee, color: "text-emerald-500" },
  ];

  const headerGradient = isDark 
    ? "from-[#1E3A8A] via-[#3B82F6] to-[#1E40AF]" 
    : "from-[#3B82F6] via-[#60A5FA] to-[#06B6D4]";

  return (
    <section id="skills" className={`relative py-24 transition-colors duration-500 overflow-hidden ${isDark ? "bg-[#0B1120]" : "bg-[#FCFCFC]"}`}>
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <span className="text-blue-500 font-bold tracking-[0.3em] text-[10px] uppercase block mb-2">Personal Interest</span>
          <h2 className={`text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r ${headerGradient}`}>
            Hobi & Keahlian <span className="opacity-80"></span>
          </h2>
          <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${headerGradient}`}></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {skillList.map((skill, index) => (
            <div key={index} className="relative group">
              
              <div className={`absolute -inset-4 transition-all duration-500 blur-3xl pointer-events-none rounded-[3rem] 
                ${isDark 
                  ? "bg-blue-600/20 opacity-40 group-hover:opacity-80 group-hover:bg-blue-500/30" 
                  : "bg-blue-400/15 opacity-30 group-hover:opacity-70 group-hover:bg-blue-300/40"}`}
              ></div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative z-10 p-8 rounded-[2.5rem] border transition-all duration-300 group-hover:-translate-y-2 h-full
                  ${isDark 
                    ? "border-slate-800 bg-[#0F172A] hover:border-blue-500/50 shadow-2xl" 
                    : "border-slate-100 bg-white shadow-xl shadow-blue-100/50 hover:border-blue-200"}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-5 rounded-2xl mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 
                    ${isDark ? "bg-slate-800 shadow-inner" : "bg-blue-50"} ${skill.color}`}>
                    <skill.icon size={36} />
                  </div>
                  
                  <h3 className={`text-xl font-black tracking-tight mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                    {skill.name}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}