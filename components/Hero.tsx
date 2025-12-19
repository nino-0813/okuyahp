import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from './Icon';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    }
  };

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="relative min-h-[60vh] sm:min-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('/images/hero/スクリーンショット%202025-12-19%2014.00.41.png')",
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform'
        }}
      ></div>

      {/* Additional Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 z-0 bg-black/20"></div>

      {/* Content with Fade-in Animation */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          酒菜おくや
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-serif mb-4 sm:mb-6 md:mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] px-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          旬の食材をいかした和洋折衷の創作料理。<br className="hidden sm:block"/>
          広島県府中市で心を込めておもてなし。
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-4 sm:mb-6 md:mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] px-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          法事・お祝い・イベントのランチも承ります。
        </p>
      </div>
    </div>
  );
};
