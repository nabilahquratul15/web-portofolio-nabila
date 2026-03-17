import { motion } from 'framer-motion';

const subjects = {
  sains: [
    { name: 'Fisika', level: 88 },
    { name: 'Kimia', level: 85 },
    { name: 'Biologi', level: 95 },
    { name: 'Matematika IPA', level: 85 },
  ],
  sosial: [
    { name: 'Sosiologi', level: 90 },
    { name: 'Ekonomi', level: 89 },
    { name: 'Geografi', level: 89 },
    { name: 'Sejarah', level: 92 },
  ],
  bahasa: [
    { name: 'Bahasa Indonesia', level: 92 },
    { name: 'Bahasa Inggris', level: 96},
    { name: 'Bahasa Arab', level: 85 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
        <span className="font-medium">{name}</span>
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{level}%</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_12px_rgba(37,99,235,0.4)]"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[#FCFCFC] dark:bg-[#0B1120] transition-colors duration-500 overflow-hidden relative">
      
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.5 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-[120%] h-[120%] rounded-full blur-[150px] bg-blue-500/20 dark:bg-blue-600/10"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex flex-col items-center gap-4"
        >
          <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm block">Akademik</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white drop-shadow-[0_0_10px_rgba(37,99,235,0.2)] py-2">
            Pelajaran & <span className="text-blue-600">Nilai</span>
          </h2>
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[5px] bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_rgba(37,99,235,0.7)]" 
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -15, scale: 1.02 }}
            className="p-9 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] border border-slate-200/60 dark:border-blue-900/30 shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="p-4 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                <span className="text-3xl">🧬</span>
              </div>
              <h3 className="text-3xl font-black dark:text-white tracking-tight">Sains (IPA)</h3>
            </div>
            <div className="space-y-8">
              {subjects.sains.map((item, idx) => (
                <SkillBar key={item.name} {...item} delay={idx * 0.1} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -15, scale: 1.02 }}
            className="p-9 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] border border-slate-200/60 dark:border-blue-900/30 shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="p-4 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-3xl font-black dark:text-white tracking-tight">Sosial (IPS)</h3>
            </div>
            <div className="space-y-8">
              {subjects.sosial.map((item, idx) => (
                <SkillBar key={item.name} {...item} delay={idx * 0.1} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -15, scale: 1.02 }}
            className="p-9 bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] border border-slate-200/60 dark:border-blue-900/30 shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="p-4 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-3xl font-black dark:text-white tracking-tight">Bahasa</h3>
            </div>
            <div className="space-y-8">
              {subjects.bahasa.map((item, idx) => (
                <SkillBar key={item.name} {...item} delay={idx * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}