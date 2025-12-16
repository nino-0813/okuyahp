import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { CONTACT_INFO } from '../constants';
import { PhoneIcon, MapPinIcon } from '../components/Icon';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      <PageHeader 
        title="お店のご紹介" 
        subtitle="ACCESS & INFO" 
        image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <div className="max-w-5xl mx-auto px-4 py-16">
         <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
               <div>
                  <h2 className="text-2xl font-serif font-bold border-l-4 border-red-700 pl-4 mb-6">店舗情報</h2>
                  <div className="space-y-4 text-gray-700">
                     <div className="flex items-start">
                        <span className="w-24 font-bold shrink-0">店名</span>
                        <span>居酒屋たるすけ</span>
                     </div>
                     <div className="flex items-start">
                        <span className="w-24 font-bold shrink-0">電話番号</span>
                        <span className="flex items-center text-lg font-bold">
                           <PhoneIcon />
                           <span className="ml-2">{CONTACT_INFO.phone}</span>
                        </span>
                     </div>
                     <div className="flex items-start">
                        <span className="w-24 font-bold shrink-0">住所</span>
                        <div>
                           <div className="flex items-center mb-1">
                              <MapPinIcon />
                              <span className="ml-2">〒191-0031</span>
                           </div>
                           <p>{CONTACT_INFO.address}</p>
                        </div>
                     </div>
                     <div className="flex items-start">
                        <span className="w-24 font-bold shrink-0">アクセス</span>
                        <span>{CONTACT_INFO.access}</span>
                     </div>
                     <div className="flex items-start">
                        <span className="w-24 font-bold shrink-0">営業時間</span>
                        <span>{CONTACT_INFO.hours}</span>
                     </div>
                     <div className="flex items-start">
                        <span className="w-24 font-bold shrink-0">定休日</span>
                        <span>{CONTACT_INFO.closed}</span>
                     </div>
                     <div className="flex items-start">
                        <span className="w-24 font-bold shrink-0">決済方法</span>
                        <span>現金、PayPay、クレジットカード（VISA/Master）</span>
                     </div>
                  </div>
               </div>
               
               <div className="bg-paper-bg p-6 rounded-lg">
                  <h3 className="font-bold mb-2">ご予約について</h3>
                  <p className="text-sm text-gray-600 mb-4">
                     お席のご予約はお電話にて承っております。<br/>
                     当日のご予約も可能ですので、お気軽にお問い合わせください。
                  </p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="block w-full bg-red-700 text-center text-white font-bold py-3 rounded hover:bg-red-800 transition-colors">
                     電話で予約する
                  </a>
               </div>
            </div>

            {/* Map */}
            <div className="h-96 md:h-auto bg-gray-200 rounded-xl overflow-hidden shadow-inner relative">
               {/* Static Map Image (Mock) */}
               <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1200&q=80" alt="Map" className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded text-center shadow-lg">
                     <p className="font-bold mb-2">Google Maps Embed Placeholder</p>
                     <p className="text-xs text-gray-500">{CONTACT_INFO.address}</p>
                     <a href="https://maps.google.com/?q=Izakaya+Tarusuke+Hino" target="_blank" rel="noreferrer" className="text-blue-600 text-sm hover:underline mt-2 block">
                        Google Mapで開く
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
