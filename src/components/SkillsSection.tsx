import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Di sini letak perbaikannya, semua ikon harus diabsen satu-satu:
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
    { 
      name: "Literary Lover", 
      desc: "Sangat suka membaca berbagai genre cerita & buku.", 
      icon: BookOpen, 
      color: "text-blue-500"
    },
    { 
      name: "Movie Enthusiast", 
      desc: "Menikmati dunia sinematografi & alur cerita film.", 
      icon: Film, 
      color: "text-purple-500"
    },
    { 
      name: "English Skill", 
      desc: "Mampu berkomunikasi & memahami teks Bahasa Inggris.", 
      icon: Languages, 
      color: "text-orange-500"
    },
    { 
      name: "Creative Thinking", 
      desc: "Berimajinasi luas berkat hobi membaca & menonton.", 
      icon: PenTool, 
      color: "text-pink-500"
    },
    { 
      name: "Storytelling", 
      desc: "Bisa menceritakan kembali hal menarik dengan seru.", 
      icon: Heart, 
      color: "text-red-500"
    },
    { 
      name: "Quick Learner", 
      desc: "Mudah menyerap informasi baru dari berbagai media.", 
      icon: Coffee, 
      color: "text-emerald-500"
    },
  ];

  return (
    <section id="skills" className={`py-24 transition-colors duration-500 ${isDark ? "bg-[#0B1120]" : "bg-[#FCFCFC]"}`}>
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-bold tracking-[0.3em] text-[10px] uppercase block mb-2">Personal Interest</span>
          <h2 className={`text-4xl md:text-6xl font-black mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
            Hobi <span className="text-blue-600">& Keahlian</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillList.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-8 rounded-[2.5rem] border transition-all duration-300 hover:-translate-y-2
                ${isDark 
                  ? "border-slate-800 bg-[#0F172A] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]" 
                  : "border-slate-100 bg-white shadow-xl shadow-slate-200/50 hover:shadow-2xl"}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-5 rounded-2xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${isDark ? "bg-slate-800/50" : "bg-blue-50"} ${skill.color}`}>
                  <skill.icon size={36} />
                </div>
                <div>
                  <h3 className={`font-bold text-xl mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                    {skill.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {skill.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}