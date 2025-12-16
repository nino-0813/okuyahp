import React from 'react';
import { Slider } from './Slider';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const OsusumeSection: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="osusume" className="bg-white">
      <div className="py-12 sm:py-16 md:py-20 lg:py-28">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
            <div ref={elementRef} className={`space-y-8 sm:space-y-12 md:space-y-16 ${isVisible ? 'fade-in-on-scroll visible' : 'fade-in-on-scroll'}`}>
               {/* Title Section */}
               <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
                     おくやの想い
                  </h2>
                  <div className="w-12 sm:w-16 h-px bg-gray-300 mx-auto"></div>
               </div>

               {/* Main Content */}
               <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
                  <div className="space-y-4 sm:space-y-6">
                     <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 font-serif text-center px-2">
                        酒菜　おくや
                     </p>
                     
                     <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 font-serif text-center px-2">
                        法要・祝辞にも
                     </p>
                  </div>

                  <div className="pt-6 sm:pt-8 border-t border-gray-200 space-y-4 sm:space-y-6">
                     <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 font-serif text-center px-2">
                        季節の旬な食材をつかい、<br/>
                        酒、魚、肉、野菜、<br/>
                        色とりどりな創作料理で<br/>
                        皆様をおもてなす。
                     </p>
                  </div>

                  <div className="pt-6 sm:pt-8 space-y-4 sm:space-y-6">
                     <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 font-serif text-center italic px-2">
                        「また、来るわ。」
                     </p>
                     
                     <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 font-serif text-center px-2">
                        そんな和気藹々な飾らず親しみもてるお店で<br/>
                        皆様をお待ちしております。
                     </p>
                  </div>

                  <div className="pt-6 sm:pt-8 border-t border-gray-200 space-y-4 sm:space-y-6">
                     <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 font-serif text-center px-2">
                        酒菜　おくやは、<br/>
                        宴会コースで賑やかに。も、<br/>
                        法要や、祝辞でも<br/>
                        ご利用いただいております。
                     </p>
                     
                     <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 font-serif text-center px-2">
                        また、仕出しなど、<br/>
                        ご利用のお客様より<br/>
                        ご好評いただいております。
                     </p>
                  </div>
               </div>

               {/* Decorative Element */}
               <div className="flex justify-center pt-8">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-px bg-gray-300"></div>
                     <span className="text-xs text-gray-500 font-serif tracking-widest">OKUYA</span>
                     <div className="w-12 h-px bg-gray-300"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Image Slider */}
      <Slider />
    </section>
  );
};
