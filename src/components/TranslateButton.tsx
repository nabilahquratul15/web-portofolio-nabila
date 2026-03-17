import React from 'react';
import { Languages } from 'lucide-react';

// Menambahkan definisi tipe global agar TypeScript mengenali fungsi Google Translate
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
  }
}

export default function TranslateButton() {
  const toggleTranslate = () => {
    // Mencari elemen dropdown asli Google Translate
    const googleDiv = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    
    if (googleDiv) {
      // Ganti bahasa: ID <-> EN
      googleDiv.value = googleDiv.value === 'en' ? 'id' : 'en';
      googleDiv.dispatchEvent(new Event('change'));
    } else {
      // Memanggil fungsi init secara aman tanpa 'any'
      if (window.googleTranslateElementInit) {
        window.googleTranslateElementInit();
      }
      alert("Sedang menghubungkan ke server Google Translate. Tunggu 3 detik lalu klik lagi ya!");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        onClick={toggleTranslate}
        className="group flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1 active:scale-95"
      >
        <Languages size={18} className="group-hover:rotate-12 transition-transform" />
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">
          EN / ID
        </span>
      </button>
    </div>
  );
}