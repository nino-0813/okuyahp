import React from 'react';
import { MENU_CATEGORIES, DRINK_MENU } from '../constants';

export const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
         <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-center text-gray-900">メニュー・宴会プラン</h2>

         {/* Food Menu */}
         <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 text-center">お品書き</h3>
            <div className="space-y-12">
               {MENU_CATEGORIES.map((cat, idx) => (
                  <div key={idx}>
                     <h4 className="text-lg font-bold mb-4 border-b border-gray-300 pb-2">{cat.title}</h4>
                     {cat.description && <p className="text-sm text-gray-600 mb-4">{cat.description}</p>}
                     <ul className="space-y-3">
                        {cat.items.map((item, i) => (
                           <li key={i} className="flex justify-between items-center border-b border-gray-100 pb-2">
                              <span className="text-gray-800">{item.name}</span>
                              <span className="font-bold text-gray-900">¥{item.price}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>

         {/* Drink Menu */}
         <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 text-center">お飲み物</h3>
            <div className="space-y-12">
               {DRINK_MENU.map((cat, idx) => (
                  <div key={idx}>
                     <h4 className="text-lg font-bold mb-4 border-b border-gray-300 pb-2">{cat.title}</h4>
                     <ul className="space-y-3">
                        {cat.items.map((item, i) => (
                           <li key={i} className="flex justify-between items-center border-b border-gray-100 pb-2">
                              <span className="text-gray-800">{item.name}</span>
                              <span className="font-bold text-gray-900">¥{item.price}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>

         {/* Party Plan */}
         <div className="border border-gray-300 p-8 text-center">
            <h3 className="text-xl font-bold mb-4">ご宴会コース</h3>
            <p className="text-sm text-gray-600 mb-6">
               旬の食材をいかした和洋折衷の創作料理と、飲み放題付きのお得なコースです。<br/>
               忘年会、新年会、歓送迎会、法事、お祝いなど、各種ご宴会にご利用ください。
            </p>
            <div className="mb-6">
               <p className="text-lg font-bold mb-2">おくや満喫コース</p>
               <p className="text-sm text-gray-600 mb-2">（2時間飲み放題付）</p>
               <p className="text-4xl font-bold text-gray-900">¥4,500<span className="text-base font-normal ml-2 text-gray-600">（税込）</span></p>
            </div>
            <p className="text-xs text-gray-500 mb-6">※4名様より承ります。前日までにご予約ください。</p>
            <a href="#contact" className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors">
               宴会のご予約・お問合せ
            </a>
         </div>
      </div>
    </section>
  );
};
