import React from 'react';
import { ScreenProps } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IMAGES } from '../../assets';

export const ColdOpen: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col relative bg-black">
      <StatusBar light />
      
      {/* Background Image - Hero */}
      <img
        src={IMAGES.heroBackground}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />

      <div className="relative z-10 flex flex-col h-full px-6 pb-12 pt-20 justify-end">
        <h1 className="text-[42px] font-bold text-white leading-[1.1] tracking-tight mb-4">
          Cook your culture.<br />
          <span className="text-nourish-gold">Support your health.</span>
        </h1>
        <p className="text-[19px] text-white/80 leading-relaxed mb-10 font-medium">
          AI cooking co-pilot for healthier Indian meals, in the moment.
        </p>

        <button 
          onClick={() => onNavigate('DISH_SELECTION')}
          className="w-full h-[56px] rounded-[28px] bg-white text-nourish-green font-bold text-[17px] tracking-wide active:scale-[0.98] transition-transform shadow-xl"
        >
          See how it works
        </button>

        <div className="mt-8 flex justify-center">
          <span className="text-white/40 text-[12px] font-bold tracking-[3px] uppercase">NOURISH</span>
        </div>
      </div>
      <HomeIndicator light />
    </div>
  );
};