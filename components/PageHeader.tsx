import React from 'react';

interface Props {
  title: string;
  subtitle: string;
  image: string;
}

export const PageHeader: React.FC<Props> = ({ title, subtitle, image }) => (
  <div className="relative h-64 md:h-80 w-full overflow-hidden flex items-center justify-center bg-gray-900">
    <div className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform hover:scale-105 duration-10000" style={{ backgroundImage: `url('${image}')` }}></div>
    <div className="relative z-10 text-center text-white p-4">
       <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
       <h1 className="text-3xl md:text-5xl font-serif font-bold mb-3 tracking-widest shadow-black text-shadow-lg">{title}</h1>
       <p className="text-xs md:text-sm font-medium opacity-90 tracking-widest uppercase">{subtitle}</p>
    </div>
  </div>
);
