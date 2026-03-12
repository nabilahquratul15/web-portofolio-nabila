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

  // LOGIKA GRADASI (Light: Cerah, Dark: Biru Gelap ala Navbar)
  const headerGradient = isDark 
    ? "from-[#1E3A8A] via-[#3B82F6] to-[#1E40AF]" 
    : "from-[#3B82F6] via-[#60A5FA] to-[#06B6D4]";

  return (
    <section id="skills" className={`relative py-24 transition-colors duration-500 overflow-hidden ${isDark ? "bg-[#0B1120]" : "bg-[#FCFCFC]"}`}>
      
      {/* GLOW EFFECT BACKGROUND - Muncul di Light & Dark dengan intensitas beda */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none transition-all duration-700 ${isDark ? "bg-blue-600/20" : "bg-blue-400/20"}`}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="text-blue-500 font-bold tracking-[0.3em] text-[10px] uppercase block mb-2">Personal Interest</span>
          
          <h2 className={`text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r ${headerGradient}`}>
            Hobi dan Keahlian <span className="opacity-80"></span>
          </h2>

          {/* GARIS BAWAH GRADASI SAMA DENGAN TEKS */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`h-1.5 rounded-full bg-gradient-to-r ${headerGradient}`}
          />
        </motion.div>

        {/* GRID SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillList.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-8 rounded-[2.5rem] border transition-all duration-300 hover:-translate-y-2 relative overflow-hidden
                ${isDark 
                  ? "border-slate-800 bg-[#0F172A]/80 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(30,58,138,0.4)]" 
                  : "border-slate-100 bg-white shadow-xl shadow-blue-100/50 hover:shadow-2xl hover:border-blue-200"}`}
            >
              {/* INNER GLOW PAS DI-HOVER */}
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none ${isDark ? "bg-blue-600/10" : "bg-blue-400/10"}`}></div>

              <div className="flex flex-col items-center text-center relative z-10">
                <div className={`p-5 rounded-2xl mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 
                  ${isDark ? "bg-slate-800/80" : "bg-blue-50"} ${skill.color}`}>
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