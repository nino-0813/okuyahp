import React from 'react';
import { SLIDER_IMAGES } from '../constants';

export const Slider: React.FC = () => {
  // Duplicate images for seamless loop
  const images = [...SLIDER_IMAGES, ...SLIDER_IMAGES];

  return (
    <div className="w-full overflow-hidden bg-gray-900 py-4">
      <div className="relative w-full">
        <div className="flex animate-scroll hover:animation-play-state-paused w-max">
          {images.map((src, index) => (
            <div key={index} className="w-64 h-48 mx-2 flex-shrink-0 rounded-lg overflow-hidden relative group">
              <img 
                src={src} 
                alt={`Slide ${index}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\\:animation-play-state-paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
