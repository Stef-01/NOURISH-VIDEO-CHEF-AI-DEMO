import React from 'react';
import { ScreenProps } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IMAGES } from '../../assets';

export const FinalCTA: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col bg-black relative">
      <StatusBar light />
      <img
        src={IMAGES.heroBackground}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      
      <div className="relative z-10 flex flex-col h-full items-center justify-center px-8 text-center">
        <h1 className="text-[36px] font-bold text-white mb-6 leading-tight">
          Cook your culture.<br/>
          <span className="text-nourish-gold">Support your health.</span>
        </h1>
        
        <button className="w-full h-[56px] bg-white text-nourish-green rounded-[28px] font-bold text-[17px] shadow-xl mb-4 hover:scale-[1.02] transition-transform">
            Join the waitlist
        </button>
        
        <button onClick={() => onNavigate('COLD_OPEN')} className="text-white/80 font-bold text-[15px] underline decoration-white/30">
            Watch another dish
        </button>

        <div className="absolute bottom-12">
             <span className="text-white/30 text-[12px] font-bold tracking-[3px] uppercase">NOURISH</span>
        </div>
      </div>
      <HomeIndicator light />
    </div>
  );
};