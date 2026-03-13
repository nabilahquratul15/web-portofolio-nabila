import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Heart, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'));
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    check();
    return () => obs.disconnect();
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/nabilahquratul15", label: 'GitHub' },
    { icon: Mail, href: "mailto:nabilahaini1504@gmail.com", label: 'Email' },
    { icon: Instagram, href: "https://www.instagram.com/nabbilaa.n/", label: 'Instagram' },
  ];

  const bgGradient = isDark 
    ? "bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#1E40AF]" // Dark Mode
    : "bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4]"; // Light Mode

  return (
    <footer className="w-full flex justify-center px-4 pb-6 pt-10 transition-all duration-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`w-full max-w-6xl rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden ${bgGradient}`}
      >
        {/* Efek Garis Cahaya di Atas (Sama seperti Navbar) */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          {/* Sisi Kiri: Copyright & Identitas */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-lg font-bold">
              <span className="tracking-tight">© {currentYear} Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Heart className="h-5 w-5 text-red-500 fill-red-500 shadow-xl" />
              </motion.div>
              <span className="tracking-tight">by Nabila</span>
            </div>
            <p className="text-white/70 text-xs font-medium tracking-wider uppercase text-center md:text-left">
              X-10 • MAN 1 Banda Aceh • Web Portofolio Project
            </p>
          </div>

          {/* Sisi Kanan: Sosial Media */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-all shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider & Slogan Bawah */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-[10px] text-white/40 tracking-[0.4em] font-black uppercase">
            Let's build something great together! 🚀
          </p>
        </div>
      </motion.div>
    </footer>
  );
}