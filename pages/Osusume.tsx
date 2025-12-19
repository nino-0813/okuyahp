import React from 'react';
import { PageHeader } from '../components/PageHeader';

export const Osusume: React.FC = () => {
  return (
    <div className="bg-paper-bg min-h-screen pb-20">
      <PageHeader 
        title="今月のおすすめ" 
        subtitle="RECOMMENDED" 
        image="https://images.unsplash.com/photo-1549221193-4a632df51774?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">旬の味覚を愉しむ</h2>
            <p className="text-gray-600">四季折々の食材を使用した、今月限定の特別メニューです。</p>
         </div>

         <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
               <div className="h-64 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1616428780775-65476a6e7686?auto=format&fit=crop&w=800&q=80" alt="Sanma" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded">期間限定</div>
               </div>
               <div className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-2">秋刀魚の塩焼き</h3>
                  <p className="text-gray-600 text-sm mb-4">
                     脂の乗った旬の秋刀魚を、炭火で香ばしく焼き上げました。大根おろしとすだちでどうぞ。
                  </p>
                  <p className="text-red-700 font-bold text-lg">¥850</p>
               </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
               <div className="h-64 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1574484284008-59d730545264?auto=format&fit=crop&w=800&q=80" alt="Nabe" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded">冬季限定</div>
               </div>
               <div className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-2">鶏と生姜のあったか小鍋</h3>
                  <p className="text-gray-600 text-sm mb-4">
                     寒い夜にはこれ。たっぷりの生姜と鶏の出汁が身体の芯まで温めます。1人前からご注文いただけます。
                  </p>
                  <p className="text-red-700 font-bold text-lg">¥980</p>
               </div>
            </div>
            
             <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
               <div className="h-64 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1629851604533-3d077b91950d?auto=format&fit=crop&w=800&q=80" alt="Fried Oysters" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded">季節のおすすめ</div>
               </div>
               <div className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-2">広島産 カキフライ</h3>
                  <p className="text-gray-600 text-sm mb-4">
                     大粒の牡蠣をサクサクの衣で包みました。自家製タルタルソースが決め手です。
                  </p>
                  <p className="text-red-700 font-bold text-lg">¥780</p>
               </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg group flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300">
               <div className="text-center p-8">
                  <h3 className="text-lg font-bold text-gray-500 mb-2">他にも季節のメニュー<br/>ご用意しております</h3>
                  <p className="text-sm text-gray-400">店内黒板をご覧ください</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
