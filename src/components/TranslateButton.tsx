import React from 'react';
import { Languages } from 'lucide-react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
  }
}

export default function TranslateButton() {
  const switchLanguage = () => {
    // Mencari elemen dropdown asli Google
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;

    if (selectElement) {
      // Switch antara Inggris (en) dan Indonesia (id)
      const targetLang = selectElement.value === 'en' ? 'id' : 'en';
      selectElement.value = targetLang;
      
      // Memicu event agar Google langsung menerjemahkan
      selectElement.dispatchEvent(new Event('change'));
    } else {
      if (window.googleTranslateElementInit) {
        window.googleTranslateElementInit();
      }
      
      // Coba lagi otomatis dalam 1 detik tanpa campur tangan user
      setTimeout(switchLanguage, 1000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        onClick={switchLanguage}
        className="group flex items-center gap-3 px-5 py-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95 border-none cursor-pointer"
      >
        <Languages size={20} className="group-hover:rotate-12 transition-transform" />
        <span className="text-[10px] font-bold tracking-widest uppercase">
          Translate
        </span>
      </button>
    </div>
  );
}