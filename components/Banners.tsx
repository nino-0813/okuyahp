import React from 'react';

export const Banners: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Menu / Party Plan Banner */}
          <a href="#menu" className="group relative h-64 rounded-xl overflow-hidden shadow-lg block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
               <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                 <h3 className="text-2xl font-bold text-white mb-2 font-serif">たるすけで宴会</h3>
                 <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   季節のコース料理と飲み放題プラン
                 </p>
               </div>
            </div>
            <div className="absolute bottom-6 right-6 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white transform transition-all duration-300 group-hover:bg-white group-hover:text-red-600">
               <span className="text-xl">→</span>
            </div>
          </a>

          {/* Recruit Banner */}
          <a href="#staff" className="group relative h-64 rounded-xl overflow-hidden shadow-lg block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
               <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                 <h3 className="text-2xl font-bold text-white mb-2 font-serif">スタッフ募集</h3>
                 <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   私たちと一緒に働きませんか？
                 </p>
               </div>
            </div>
            <div className="absolute bottom-6 right-6 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white transform transition-all duration-300 group-hover:bg-white group-hover:text-blue-600">
               <span className="text-xl">→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
