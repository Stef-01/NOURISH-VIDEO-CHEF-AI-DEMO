import React, { useState } from 'react';
import { ScreenProps } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IconVideo, IconCamera } from '../Icons';
import { IMAGES } from '../../assets';

export const AICheckpoint: React.FC<ScreenProps> = ({ onNavigate }) => {
  const feedbackChips = ['Too Oily', 'Too Spicy', 'Needs Flavor', 'Too Thick', 'Just Right'];
  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col bg-black relative">
      <StatusBar light />
      
      {/* Background Ambience */}
      <img
        src={IMAGES.heroBackground}
        alt="Dark Kitchen"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

      <div className="flex-1 relative z-10 flex flex-col justify-center px-6">
        <div className="bg-white/80 backdrop-blur-2xl rounded-[32px] p-8 shadow-2xl animate-[fadeIn_0.5s_ease-out] border border-white/20">
          <h2 className="text-[28px] font-bold text-gray-900 leading-tight">Let's check the Sauté.</h2>
          <p className="text-[20px] text-gray-600 mt-2 font-medium">Show us the pan.</p>
          
          <div className="mt-10 space-y-4">
            <button className="w-full py-5 rounded-[20px] font-semibold text-[17px] flex items-center justify-center gap-3 transition-all active:scale-[0.98] bg-[#F5F3F0] text-gray-800 hover:bg-[#EBE8E4] shadow-inner">
              <div className="p-1.5 bg-white rounded-full shadow-sm"><IconVideo color="#2C2C2C" size={20} /></div>
              Record 5s Clip
            </button>
            <button 
              onClick={() => onNavigate('CHECK_ONIONS')} 
              className="w-full py-5 rounded-[20px] font-semibold text-[17px] flex items-center justify-center gap-3 transition-all active:scale-[0.98] bg-gray-900 text-white shadow-xl shadow-gray-900/20 hover:bg-black"
            >
              <div className="p-1.5 bg-gray-800 rounded-full"><IconCamera color="#FFF" size={20} /></div>
              Take Photo
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 pb-8">
        <div className="rounded-[24px] p-5 bg-black/20 backdrop-blur-lg border border-white/5">
          <p className="text-white/60 text-xs font-medium uppercase tracking-widest text-center mb-4">Or Quick Feedback</p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {feedbackChips.map((chip) => (
              <button 
                key={chip} 
                onClick={() => setSelectedChip(chip)} 
                className={`px-5 py-3 rounded-full text-[14px] font-medium transition-all duration-200 ${
                  selectedChip === chip 
                    ? (chip === 'Just Right' ? 'bg-nourish-green text-white shadow-lg shadow-nourish-green/30 border-transparent' : 'bg-nourish-gold text-white shadow-lg shadow-nourish-gold/30 border-transparent')
                    : 'bg-white/10 text-white/90 border border-white/5 hover:bg-white/20'
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </div>

      <HomeIndicator light />
    </div>
  );
};