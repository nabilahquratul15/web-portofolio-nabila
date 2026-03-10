import { motion } from 'framer-motion';
import { Github, Instagram, Heart, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/nabilahquratul15", 
      label: 'GitHub' 
    },
    { 
      icon: Mail, 
      href: "mailto:nabilahaini1504@gmail.com", 
      label: 'Email' 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/nabbilaa.n/",
      label: 'Instagram' 
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#06B6D4] py-12 text-white shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
      {/* Garis cahaya dekoratif di bagian atas footer */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Sisi Kiri: Copyright & Identitas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span>© {currentYear} Made with</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Heart className="h-5 w-5 text-red-400 fill-red-400" />
              </motion.div>
              <span>by Nabila</span>
            </div>
            <p className="text-blue-100 text-sm opacity-80">
              X-10 • MAN 1 Banda Aceh • Web Portofolio Project
            </p>
          </motion.div>

          {/* Sisi Kanan: Ikon Media Sosial (Ditambah Email) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  rotate: 8 
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all text-white"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
          
        </div>

        {/* Baris dekorasi paling bawah */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-blue-100/60 tracking-widest uppercase">
            Lets build something great together! 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}