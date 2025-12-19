import React from 'react';
import { NEWS_ITEMS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const NewsSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="news" className="py-12 sm:py-16 md:py-20 bg-white">
       <div ref={elementRef} className={`max-w-3xl mx-auto px-4 sm:px-6 ${isVisible ? 'fade-in-on-scroll visible' : 'fade-in-on-scroll'}`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 sm:mb-12 text-center">お知らせ</h2>

          <ul className="space-y-3 sm:space-y-4">
             {NEWS_ITEMS.map((item) => (
                <li key={item.id} className="border-b border-gray-200 pb-3 sm:pb-4 last:border-0">
                   <a href={item.url} className="block sm:flex items-baseline hover:opacity-70 transition-opacity touch-manipulation text-center sm:text-left">
                      <span className="text-xs text-gray-500 w-full sm:w-28 sm:w-32 flex-shrink-0 mb-1 sm:mb-0 block">{item.date}</span>
                      <span className="text-sm sm:text-base text-gray-900 block sm:inline">
                         {item.title}
                      </span>
                   </a>
                </li>
             ))}
          </ul>
       </div>
    </section>
  );
};
