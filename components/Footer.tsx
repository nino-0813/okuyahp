import React from 'react';
import { CONTACT_INFO, NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = 80; // ヘッダーの高さを考慮
        const targetPosition = targetElement.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="relative text-gray-100 py-12 sm:py-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/menu/スクリーンショット 2025-12-17 1.39.54.png')",
          filter: "brightness(0.3)"
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-gray-900/70"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Logo & Info */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4 sm:mb-6">酒菜おくや</h2>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
               <p className="text-gray-400">〒726-0012 広島県府中市中須町1069-1</p>
               <p>
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`} 
                    className="text-gray-200 hover:text-white transition-colors font-medium touch-manipulation"
                  >
                     TEL: {CONTACT_INFO.phone}
                  </a>
               </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">ナビゲーション</h3>
            <nav className="flex flex-col space-y-2 sm:space-y-3">
             {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm touch-manipulation"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleLinkClick(e, '#contact')} 
                className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm touch-manipulation"
              >
                ご予約・お問合せ
              </a>
            </nav>
          </div>

          {/* Business Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">営業情報</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
              <p>営業時間：{CONTACT_INFO.hours}</p>
              <p>定休日：{CONTACT_INFO.closed}</p>
              <p className="text-gray-400 text-xs mt-3 sm:mt-4">{CONTACT_INFO.lunch}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 sm:gap-4">
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} 酒菜おくや</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
