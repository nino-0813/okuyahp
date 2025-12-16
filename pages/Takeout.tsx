import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { TAKEOUT_MENU } from '../constants';

export const Takeout: React.FC = () => {
  return (
    <div className="bg-paper-bg min-h-screen pb-20">
      <PageHeader 
        title="お持ち帰り" 
        subtitle="TAKE OUT" 
        image="https://images.unsplash.com/photo-1594508496839-81d0f5ce2e64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
         <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
               <div className="flex-1">
                  <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                     お店の味を、ご家庭で。
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                     たるすけの人気メニューをお持ち帰りいただけます。<br/>
                     夕食の一品に、家飲みのお供に、ぜひご利用ください。<br/>
                     お電話での事前予約も承っております。
                  </p>
                  <div className="mt-6">
                     <p className="font-bold text-red-700 text-lg">お電話でのご予約</p>
                     <p className="text-3xl font-serif font-bold text-gray-900">042-599-0420</p>
                     <p className="text-xs text-gray-500">受付時間 16:00〜22:00</p>
                  </div>
               </div>
               <div className="flex-1">
                  <img src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80" alt="Bento" className="rounded-lg shadow-md w-full h-64 object-cover"/>
               </div>
            </div>

            <div className="border-t-2 border-dashed border-gray-200 pt-10">
               <h3 className="text-xl font-bold text-center mb-8 bg-gray-100 py-2 rounded">テイクアウトメニュー</h3>
               <div className="grid md:grid-cols-2 gap-6">
                  {TAKEOUT_MENU.map((item, idx) => (
                     <div key={idx} className="flex justify-between items-start border-b border-gray-100 pb-4">
                        <div>
                           <h4 className="font-bold text-gray-800 text-lg">{item.name}</h4>
                           <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                        <p className="font-bold text-red-700 whitespace-nowrap ml-4">¥{item.price}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         
         <div className="text-center text-sm text-gray-500">
            ※価格は全て税込です。<br/>
            ※季節や仕入れ状況により内容が変更になる場合がございます。<br/>
            ※お持ち帰り後はなるべくお早めにお召し上がりください。
         </div>
      </div>
    </div>
  );
};
