import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './Icon';
import { CONTACT_INFO } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setIsOpen(false); // モバイルメニューを閉じる
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 sm:py-3 text-gray-900' : 'bg-transparent py-3 sm:py-5 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-2">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className={`font-serif font-bold text-xl sm:text-2xl md:text-3xl tracking-wider ${isScrolled ? 'text-gray-900' : 'text-white'} hover:opacity-80 transition-opacity`}>
              酒菜おくや
            </a>
          </div>

          {/* Mobile Phone - Always visible on mobile */}
          <div className="lg:hidden flex items-center gap-3">
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className={`flex items-center text-sm sm:text-base font-bold font-serif ${isScrolled ? 'text-gray-900' : 'text-white'} hover:opacity-80 transition-opacity`}
            >
              <span className="hidden sm:inline mr-1 text-xs">TEL:</span>
              {CONTACT_INFO.phone}
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 sm:p-3 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'} hover:opacity-80 focus:outline-none touch-manipulation`}
              aria-label="メニュー"
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Desktop Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end text-right">
              <p className={`text-xs mb-1 ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>{CONTACT_INFO.access}</p>
              <a href={`tel:${CONTACT_INFO.phone}`} className={`flex items-center text-xl font-bold font-serif ${isScrolled ? 'text-gray-900' : 'text-white'} hover:opacity-80 transition-opacity`}>
                <span className="mr-1 text-sm">TEL:</span>
                {CONTACT_INFO.phone}
              </a>
            </div>
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')} 
              className={`px-6 py-2 rounded-sm text-sm font-bold shadow transition-colors ${
                isScrolled 
                  ? 'bg-gray-900 text-white hover:bg-gray-800' 
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
              }`}
            >
              ご予約・お問合せ
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="p-4 flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">
                <XIcon />
              </button>
           </div>
           <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col justify-center">
              <div className="text-center space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">酒菜おくや</h3>
                  <p className="text-xs text-gray-500 mb-4">{CONTACT_INFO.access}</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-2xl font-bold font-serif text-gray-900 block mb-6 hover:opacity-80 transition-opacity">
                    TEL: {CONTACT_INFO.phone}
                  </a>
                </div>
                <a 
                  href="#contact" 
                  onClick={(e) => { handleLinkClick(e, '#contact'); setIsOpen(false); }} 
                  className="block w-full bg-gray-900 text-white py-3 rounded-sm text-center font-bold shadow hover:bg-gray-800 transition-colors"
                >
                  ご予約・お問合せ
                </a>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
};
