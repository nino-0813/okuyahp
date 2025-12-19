import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Slider } from '../components/Slider';

export const Omotenashi: React.FC = () => {
  return (
    <div className="bg-paper-bg min-h-screen">
      <PageHeader 
        title="たるすけのおもてなし" 
        subtitle="HOSPITALITY" 
        image="https://images.unsplash.com/photo-1542653139-4d640243178b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <div className="max-w-4xl mx-auto px-6 py-20">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-800 leading-relaxed mb-8">
               「ただいま」「おかえり」<br/>
               そんな温かい場所でありたい
            </h2>
            <p className="text-gray-600 leading-loose">
               たるすけは、日野市高幡不動尊のすぐそばにある<br/>
               小さな居酒屋です。<br/>
               美味しいお酒と、手作りの創作料理、<br/>
               そしてスタッフの笑顔で<br/>
               お客様をお迎えいたします。
            </p>
         </div>

         <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
               <img src="https://images.unsplash.com/photo-1606214502840-798835269785?auto=format&fit=crop&w=800&q=80" alt="Yakitori Grill" className="rounded-lg shadow-xl" />
            </div>
            <div className="space-y-6">
               <h3 className="text-2xl font-serif font-bold text-gray-800 border-l-4 border-red-700 pl-4">
                  備長炭で焼く、こだわりの串
               </h3>
               <p className="text-gray-600 leading-relaxed">
                  毎朝一本一本丁寧に串打ちし、備長炭でじっくりと焼き上げます。<br/>
                  外はカリッと、中はジューシー。<br/>
                  秘伝のタレと、こだわりの塩で素材の味を最大限に引き出します。
               </p>
            </div>
         </div>

         <div className="grid md:grid-cols-2 gap-12 items-center direction-rtl">
             <div className="md:order-2">
               <img src="https://images.unsplash.com/photo-1582260656828-56846c4f316e?auto=format&fit=crop&w=800&q=80" alt="Sake Collection" className="rounded-lg shadow-xl" />
            </div>
            <div className="space-y-6 md:order-1">
               <h3 className="text-2xl font-serif font-bold text-gray-800 border-l-4 border-red-700 pl-4">
                  店主厳選の地酒
               </h3>
               <p className="text-gray-600 leading-relaxed">
                  季節の料理に合う日本酒を、全国各地から取り寄せています。<br/>
                  定番の銘柄から、珍しい一本まで。<br/>
                  お好みに合わせておすすめさせていただきますので、お気軽にお声がけください。
               </p>
            </div>
         </div>
      </div>
      
      <Slider />

      <div className="bg-white py-20 text-center">
         <h2 className="text-2xl font-serif font-bold mb-8">みなさまのご来店を心よりお待ちしております</h2>
         <a href="/contact" className="bg-red-700 text-white px-8 py-3 rounded hover:bg-red-800 transition-colors">
            店舗情報・アクセスはこちら
         </a>
      </div>
    </div>
  );
};
