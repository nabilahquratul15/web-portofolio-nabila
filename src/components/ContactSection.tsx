import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Instagram, Send, MapPin } from 'lucide-react';

export default function ContactSection() {
  const myEmail = "nabilahquratul15@gmail.com";

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-[#3B82F6] font-medium italic text-sm tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter">
              Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">Together.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- INFO KONTAK (KIRI) --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif italic">Contact Details</h3>
              <p className="text-slate-500 font-light leading-relaxed max-w-sm">
                Sangat terbuka untuk kolaborasi, proyek baru, atau sekadar bertanya-tanya tentang Web Development.
              </p>
            </div>

            <div className="space-y-6">
              {/* Item Email */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Email Me</p>
                  <p className="text-slate-900 font-medium">{myEmail}</p>
                </div>
              </div>

              {/* Item Lokasi */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-slate-900 font-medium">Banda Aceh, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- TOMBOL DIRECT (KANAN) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-white rounded-full shadow-sm text-blue-500">
                <Send size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 font-sans">Kirim Pesan Langsung</h4>
              <p className="text-slate-400 text-sm mb-8 font-light italic">
                Klik tombol di bawah untuk membuka aplikasi email kamu.
              </p>
              
              <a 
                href={`mailto:${myEmail}`}
                className="w-full py-5 rounded-3xl bg-slate-900 text-white font-bold tracking-[0.2em] text-xs uppercase hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-blue-200 flex items-center justify-center gap-3 active:scale-95"
              >
                Launch Mail App
                <Mail size={16} />
              </a>

              {/* Link Sosmed Tambahan */}
              <div className="mt-10 flex gap-6">
                <a href="#" className="text-slate-300 hover:text-[#1E3A8A] transition-colors"><Github size={20}/></a>
                <a href="#" className="text-slate-300 hover:text-pink-400 transition-colors"><Instagram size={20}/></a>
              </div>
            </div>
            
            {/* Ornamen Floating */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100/50 rounded-full blur-2xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}