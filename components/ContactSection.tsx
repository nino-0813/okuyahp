import React from 'react';
import { CONTACT_INFO } from '../constants';
import { PhoneIcon, MapPinIcon } from './Icon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ContactSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="pt-8 pb-12 sm:pb-16 md:pt-10 md:pb-20 bg-white">
      <div ref={elementRef} className={`max-w-4xl mx-auto px-4 sm:px-6 ${isVisible ? 'fade-in-on-scroll visible' : 'fade-in-on-scroll'}`}>
         <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-6 sm:mb-8 text-center text-gray-900">お店のご紹介</h2>

         <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row border-b border-gray-200 pb-3 gap-1 sm:gap-0">
               <span className="w-full sm:w-24 font-bold text-gray-500 shrink-0 text-sm sm:text-base">店名</span>
               <span className="text-sm sm:text-base">酒菜おくや</span>
            </div>
            <div className="flex flex-col sm:flex-row border-b border-gray-200 pb-3 gap-1 sm:gap-0">
               <span className="w-full sm:w-24 font-bold text-gray-500 shrink-0 text-sm sm:text-base">電話番号</span>
               <a href={`tel:${CONTACT_INFO.phone}`} className="text-base sm:text-lg font-bold text-gray-900 hover:opacity-80 transition-opacity">
                  {CONTACT_INFO.phone}
               </a>
            </div>
            <div className="flex flex-col sm:flex-row border-b border-gray-200 pb-3 gap-1 sm:gap-0">
               <span className="w-full sm:w-24 font-bold text-gray-500 shrink-0 text-sm sm:text-base">住所</span>
               <div className="text-sm sm:text-base">
                  <p>〒726-0003</p>
                  <p>{CONTACT_INFO.address}</p>
               </div>
            </div>
            <div className="flex flex-col sm:flex-row border-b border-gray-200 pb-3 gap-1 sm:gap-0">
               <span className="w-full sm:w-24 font-bold text-gray-500 shrink-0 text-sm sm:text-base">アクセス</span>
               <span className="text-sm sm:text-base">{CONTACT_INFO.access}</span>
            </div>
            <div className="flex flex-col sm:flex-row border-b border-gray-200 pb-3 gap-1 sm:gap-0">
               <span className="w-full sm:w-24 font-bold text-gray-500 shrink-0 text-sm sm:text-base">営業時間</span>
               <span className="text-sm sm:text-base">{CONTACT_INFO.hours}</span>
            </div>
            <div className="flex flex-col sm:flex-row border-b border-gray-200 pb-3 gap-1 sm:gap-0">
               <span className="w-full sm:w-24 font-bold text-gray-500 shrink-0 text-sm sm:text-base">定休日</span>
               <span className="text-sm sm:text-base">{CONTACT_INFO.closed}</span>
            </div>
            <div className="flex flex-col sm:flex-row border-b border-gray-200 pb-3 gap-1 sm:gap-0">
               <span className="w-full sm:w-24 font-bold text-gray-500 shrink-0 text-sm sm:text-base">ランチ</span>
               <div className="text-sm sm:text-base">
                  <p>{CONTACT_INFO.lunch}</p>
                  <p className="text-xs text-gray-500 mt-1">※事前予約制</p>
               </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
               <span className="w-full sm:w-24 font-bold text-gray-500 shrink-0 text-sm sm:text-base">決済方法</span>
               <span className="text-sm sm:text-base">現金、PayPay、クレジットカード</span>
            </div>
         </div>

         <div className="text-center border border-gray-300 p-4 sm:p-5">
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">お席のご予約はお電話にて承っております。</p>
            <a href={`tel:${CONTACT_INFO.phone}`} className="inline-block w-full sm:w-auto border border-gray-900 text-gray-900 px-6 sm:px-8 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors touch-manipulation">
               電話で予約する
            </a>
         </div>
      </div>
    </section>
  );
};
