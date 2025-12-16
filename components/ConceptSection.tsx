import React, { useState } from 'react';
import { MENU_CATEGORIES, DRINK_MENU } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type TabType = 'food' | 'drink' | 'party' | 'sake';

export const ConceptSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('food');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDrinkCategory, setSelectedDrinkCategory] = useState<string | null>(null);
  const { elementRef, isVisible } = useScrollAnimation();

  const tabs = [
    { id: 'food' as TabType, label: '料理' },
    { id: 'drink' as TabType, label: 'ドリンク' },
    { id: 'party' as TabType, label: '宴会プラン' },
    { id: 'sake' as TabType, label: 'オードブル（お持ち帰り）' },
  ];

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
    <section id="omotenashi" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
       <div ref={elementRef} className={`max-w-5xl mx-auto px-4 sm:px-6 md:px-8 ${isVisible ? 'fade-in-on-scroll visible' : 'fade-in-on-scroll'}`}>
          {/* Title */}
          <div className="text-center mb-8 sm:mb-12">
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
                メニュー
             </h2>
             <div className="w-12 sm:w-16 h-px bg-gray-300 mx-auto"></div>
          </div>

          {/* Tabs - Mobile scrollable */}
          <div className="mb-8 sm:mb-12">
             <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <div className="flex gap-2 border-b border-gray-200 min-w-max sm:min-w-0 sm:justify-center">
                   {tabs.map((tab) => (
                   <button
                      key={tab.id}
                      onClick={() => {
                         setActiveTab(tab.id);
                         setSelectedCategory(null);
                      }}
                      className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 border-b-2 whitespace-nowrap touch-manipulation ${
                         activeTab === tab.id
                            ? 'border-gray-900 text-gray-900 bg-gray-50 scale-105'
                            : 'border-transparent text-gray-600 active:text-gray-900 hover:scale-105'
                      }`}
                   >
                      {tab.label}
                   </button>
                   ))}
                </div>
             </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
             {activeTab === 'food' && (
                <div>
                   {/* Category Sub-navigation - Mobile scrollable */}
                   <div className="mb-8 sm:mb-12 pb-4 border-b border-gray-200">
                      <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                         <div className="flex gap-3 sm:gap-4 justify-center min-w-max sm:min-w-0 sm:flex-wrap">
                            {MENU_CATEGORIES.map((category) => (
                               <button
                                  key={category.title}
                                  onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
                                  className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap touch-manipulation ${
                                     selectedCategory === category.title
                                        ? 'text-gray-900 border-b-2 border-gray-900 scale-105'
                                        : 'text-gray-600 active:text-gray-900 hover:scale-105'
                                  }`}
                               >
                                  {category.title}
                               </button>
                            ))}
                         </div>
                      </div>
                   </div>

                   {/* Food Menu Content */}
                   <div className="space-y-10 sm:space-y-12 md:space-y-16">
                      {MENU_CATEGORIES
                         .filter((category) => !selectedCategory || category.title === selectedCategory)
                         .map((category, idx) => (
                            <div key={idx} className="border-b border-gray-200 pb-8 sm:pb-12 last:border-0 last:pb-0">
                               <div className="mb-6 sm:mb-8 text-center">
                                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
                                     {category.title}
                                  </h3>
                                  {category.description && (
                                     <p className="text-xs sm:text-sm text-gray-600 font-serif mb-6 sm:mb-8 px-2">{category.description}</p>
                                  )}
                               </div>
                               
                               {/* Image Gallery with Description - 2 columns on mobile, 4 on desktop */}
                               {category.items.some(item => item.image) && (
                                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                                     {category.items
                                        .filter(item => item.image)
                                        .map((item, i) => (
                                           <div key={i} className="text-center hover-lift">
                                              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 transition-transform duration-300 hover:scale-105">
                                                 <img 
                                                    src={item.image} 
                                                    alt={item.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                                 />
                                              </div>
                                              <div className="space-y-1">
                                                 <p className="text-xs sm:text-sm font-bold text-gray-900 font-serif">{item.name}</p>
                                                 {item.description && (
                                                    <p className="text-xs text-gray-600 mt-1 px-1">{item.description}</p>
                                                 )}
                                                 {item.price && (
                                                    <p className="text-xs sm:text-sm font-bold text-gray-900 mt-2">¥{item.price}</p>
                                                 )}
                                              </div>
                                           </div>
                                        ))}
                                  </div>
                               )}
                            </div>
                         ))}
                   </div>
                </div>
             )}

             {activeTab === 'drink' && (
                <div>
                   {/* Drink Category Selection - Mobile scrollable */}
                   <div className="mb-8 sm:mb-12 pb-4 border-b border-gray-200">
                      <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                         <div className="flex gap-3 sm:gap-4 justify-center min-w-max sm:min-w-0 sm:flex-wrap">
                            {DRINK_MENU.map((category) => (
                               <button
                                  key={category.title}
                                  onClick={() => setSelectedDrinkCategory(selectedDrinkCategory === category.title ? null : category.title)}
                                  className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap touch-manipulation ${
                                     selectedDrinkCategory === category.title
                                        ? 'text-gray-900 border-b-2 border-gray-900 scale-105'
                                        : 'text-gray-600 active:text-gray-900 hover:scale-105'
                                  }`}
                               >
                                  {category.title}
                               </button>
                            ))}
                         </div>
                      </div>
                   </div>

                   {/* 本日の日本酒 Section */}
                   <div className="mb-10 sm:mb-16 text-center">
                      <div className="w-px h-12 sm:h-16 bg-gray-300 mx-auto mb-4 sm:mb-6"></div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">本日の日本酒</h3>
                      <div className="w-px h-12 sm:h-16 bg-gray-300 mx-auto"></div>
                   </div>

                   {/* Drink Menu Content */}
                   <div className="space-y-8 sm:space-y-12">
                      {DRINK_MENU
                         .filter((category) => !selectedDrinkCategory || category.title === selectedDrinkCategory)
                         .map((category, idx) => (
                            <div key={idx} className="border-b border-gray-200 pb-8 sm:pb-12 last:border-0">
                               <div className="mb-6 sm:mb-8">
                                  <h4 className="text-lg sm:text-xl font-serif font-bold text-gray-800 mb-6 sm:mb-8 text-center">{category.title}</h4>
                                  
                                  {/* Image Gallery with Description - 2 columns on mobile, 4 on desktop */}
                                  {category.items.some(item => item.image) && (
                                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                                        {category.items
                                           .filter(item => item.image)
                                           .map((item, i) => (
                                              <div key={i} className="text-center hover-lift">
                                                 <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 transition-transform duration-300 hover:scale-105">
                                                    <img 
                                                       src={item.image} 
                                                       alt={item.name}
                                                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                                    />
                                                 </div>
                                                 <div className="space-y-1">
                                                    {item.reading && (
                                                       <p className="text-xs text-gray-600 font-serif">{item.reading}</p>
                                                    )}
                                                    <p className="text-xs sm:text-sm font-bold text-gray-900 font-serif">{item.name}</p>
                                                    {item.type && (
                                                       <p className="text-xs text-gray-600 font-serif">{item.type}</p>
                                                    )}
                                                    {item.prefecture && (
                                                       <p className="text-xs text-gray-500 font-serif px-1">
                                                          {item.prefecture} | {item.type === '日本酒' ? '日本酒' : '焼酎'}
                                                       </p>
                                                    )}
                                                    <p className="text-xs sm:text-sm font-bold text-gray-900 mt-2">¥{item.price}</p>
                                                 </div>
                                              </div>
                                           ))}
                                     </div>
                                  )}
                               </div>
                            </div>
                         ))}
                   </div>
                </div>
             )}

             {activeTab === 'party' && (
                <div className="text-center py-8 sm:py-12">
                   <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">ご宴会コース</h3>
                   <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 px-2">
                      旬の食材をいかした和洋折衷の創作料理と、飲み放題付きのお得なコースです。<br className="hidden sm:block"/>
                      忘年会、新年会、歓送迎会、法事、お祝いなど、各種ご宴会にご利用ください。
                   </p>
                   <div className="border border-gray-300 p-6 sm:p-8 max-w-md mx-auto mb-6 sm:mb-8">
                      <p className="text-base sm:text-lg font-bold mb-2">おくや満喫コース</p>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">（2時間飲み放題付）</p>
                      <p className="text-3xl sm:text-4xl font-bold text-gray-900">¥4,500<span className="text-sm sm:text-base font-normal ml-2 text-gray-600">（税込）</span></p>
                   </div>
                   <p className="text-xs text-gray-500 mb-6 sm:mb-8 px-2">※4名様より承ります。前日までにご予約ください。</p>
                   <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="inline-block w-full sm:w-auto border border-gray-900 text-gray-900 px-6 sm:px-8 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors touch-manipulation max-w-xs mx-auto">
                      宴会のご予約・お問合せ
                   </a>
                </div>
             )}

             {activeTab === 'sake' && (
                <div className="py-8 sm:py-12">
                   <div className="text-center mb-8 sm:mb-12">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">オードブル</h3>
                      <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 px-2">
                         法事・お祝いの席にご利用いただける、お持ち帰り用のオードブルをご用意しております。<br className="hidden sm:block"/>
                         旬の食材をいかしたこだわりの一品を、ご自宅でもお楽しみいただけます。
                      </p>
                   </div>
                   
                   {MENU_CATEGORIES.filter(cat => cat.title === 'オードブル').map((category, idx) => (
                      <div key={idx} className="mb-10 sm:mb-16">
                         <div className="text-center mb-6 sm:mb-8">
                            <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">{category.title}</h4>
                         </div>
                         
                         {/* Image Gallery with Description - 2 columns on mobile, 4 on desktop */}
                         {category.items.some(item => item.image) && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                               {category.items
                                  .filter(item => item.image)
                                  .map((item, i) => (
                                     <div key={i} className="text-center hover-lift">
                                        <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 transition-transform duration-300 hover:scale-105">
                                           <img 
                                              src={item.image} 
                                              alt={item.name}
                                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                           />
                                        </div>
                                        <div className="space-y-1">
                                           <p className="text-xs sm:text-sm font-bold text-gray-900 font-serif">{item.name}</p>
                                           <p className="text-xs sm:text-sm font-bold text-gray-900 mt-2">¥{item.price}</p>
                                        </div>
                                     </div>
                                  ))}
                            </div>
                         )}
                      </div>
                   ))}
                </div>
             )}
          </div>

          {/* Note */}
          <div className="mt-8 mb-4 text-center">
             <p className="text-xs text-gray-500 leading-relaxed">
                ※価格は全て税込です。<br/>
                ※季節や仕入れ状況により内容が変更になる場合がございます。<br/>
                ※入荷・注文の状況によってご用意ができない場合もございます。予めご了承ください。<br/>
                ※お持ち帰り後はなるべくお早めにお召し上がりください。
             </p>
          </div>
       </div>
    </section>
  );
};
