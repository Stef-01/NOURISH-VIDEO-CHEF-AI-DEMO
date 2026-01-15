import React, { useState } from 'react';
import { ScreenProps } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IconStar } from '../Icons';

export const Summary: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="h-full flex flex-col bg-nourish-cream relative">
      <StatusBar />
      
      <div className="flex-1 px-6 pt-10 flex flex-col overflow-y-auto no-scrollbar">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6 leading-tight">Healthier choices<br/>you made today</h2>

        <div className="space-y-4 mb-10">
            {[
                'Hit translucent onions without burning',
                'Prevented burnt spices with oil timing',
                'Reduced sodium using label-aware swaps',
                'Balanced the meal with Plate Method'
            ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start animate-[fadeInUp_0.5s_ease-out]" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="w-6 h-6 rounded-full bg-nourish-green flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <p className="text-[16px] text-gray-800 font-medium leading-relaxed">{item}</p>
                </div>
            ))}
        </div>

        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 text-center">
            <p className="text-gray-500 font-bold uppercase text-[12px] tracking-wider mb-4">Rate session</p>
            <div className="flex justify-center gap-2 mb-6">
                {[1,2,3,4,5].map(r => (
                    <button key={r} onClick={() => setRating(r)}>
                        <IconStar size={32} filled={r <= rating} />
                    </button>
                ))}
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
                 {['Make it faster', 'Make it spicier', 'Fewer checkpoints'].map(tag => (
                     <button key={tag} className="px-3 py-1.5 rounded-full border border-gray-200 text-[13px] font-medium text-gray-600 hover:bg-gray-50">
                        {tag}
                     </button>
                 ))}
            </div>
        </div>

        <div className="flex-1" />
        
        <button 
            onClick={() => onNavigate('FINAL_CTA')}
            className="w-full h-[56px] bg-nourish-green text-white rounded-[28px] font-bold text-[17px] shadow-lg mt-6 mb-4"
        >
            Done
        </button>
      </div>
      <HomeIndicator />
    </div>
  );
};