import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { MENU_CATEGORIES, DRINK_MENU } from '../constants';

export const Menu: React.FC = () => {
  return (
    <div className="bg-paper-bg min-h-screen pb-20">
      <PageHeader 
        title="メニュー・宴会" 
        subtitle="MENU & PARTY" 
        image="https://images.unsplash.com/photo-1574484284008-59d730545264?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <div className="max-w-5xl mx-auto px-4 py-16">
         {/* Food Menu */}
         <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 relative inline-block w-full">
               <span className="relative z-10 px-4 bg-paper-bg">お品書き</span>
               <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 -z-0"></div>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
               {MENU_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                     <h3 className="text-xl font-bold text-red-700 mb-4 border-b pb-2">{cat.title}</h3>
                     {cat.description && <p className="text-sm text-gray-500 mb-6">{cat.description}</p>}
                     <ul className="space-y-4">
                        {cat.items.map((item, i) => (
                           <li key={i} className="flex justify-between items-end border-b border-dashed border-gray-200 pb-1">
                              <span className="font-medium text-gray-800">{item.name}</span>
                              <span className="font-bold text-gray-600">¥{item.price}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>

         {/* Drink Menu */}
         <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-center mb-12 relative inline-block w-full">
               <span className="relative z-10 px-4 bg-paper-bg">お飲み物</span>
               <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 -z-0"></div>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
               {DRINK_MENU.map((cat, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                     <h3 className="text-xl font-bold text-blue-900 mb-4 border-b pb-2">{cat.title}</h3>
                     <ul className="space-y-4">
                        {cat.items.map((item, i) => (
                           <li key={i} className="flex justify-between items-end border-b border-dashed border-gray-200 pb-1">
                              <span className="font-medium text-gray-800">{item.name}</span>
                              <span className="font-bold text-gray-600">¥{item.price}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>

         {/* Party Plan */}
         <div className="bg-gray-900 text-white rounded-xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-700 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
            <div className="relative z-10 text-center">
               <h2 className="text-3xl font-serif font-bold mb-6">ご宴会コース</h2>
               <p className="text-lg text-gray-300 mb-8">
                  季節の食材をふんだんに使用した、飲み放題付きのお得なコースです。<br/>
                  忘年会、新年会、歓送迎会など、各種ご宴会にご利用ください。
               </p>
               <div className="inline-block border-2 border-white p-6 rounded-lg mb-8">
                  <p className="text-xl font-bold mb-2">たるすけ満喫コース（2時間飲み放題付）</p>
                  <p className="text-4xl font-bold text-red-500">¥4,500<span className="text-base text-white font-normal ml-2">（税込）</span></p>
               </div>
               <p className="text-sm text-gray-400 mb-8">※4名様より承ります。前日までにご予約ください。</p>
               <a href="/contact" className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-8 rounded transition-colors">
                  宴会のご予約・お問合せ
               </a>
            </div>
         </div>
      </div>
    </div>
  );
};
