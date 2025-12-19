import React from 'react';
import { BLOG_ITEMS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const BlogSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
       <div ref={elementRef} className={`max-w-3xl mx-auto px-4 sm:px-6 ${isVisible ? 'fade-in-on-scroll visible' : 'fade-in-on-scroll'}`}>
          <h2 className="text-xl sm:text-2xl font-serif font-bold mb-8 sm:mb-12 text-center text-gray-900">おくやブログ</h2>

          <ul className="space-y-3 sm:space-y-4">
             {BLOG_ITEMS.map((item) => (
                <li key={item.id} className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-200 last:border-0 text-center sm:text-left">
                   <span className="text-xs text-gray-500 w-full sm:w-28 sm:w-32 mb-1 sm:mb-0">{item.date}</span>
                   <a href={item.url} className="text-sm sm:text-base text-gray-900 hover:opacity-70 transition-opacity touch-manipulation block sm:inline">
                      {item.title}
                   </a>
                </li>
             ))}
          </ul>
       </div>
    </section>
  );
};
