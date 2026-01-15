import React, { useState } from 'react';
import { ScreenProps } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IconStar } from '../Icons';

export const Completion: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [rating, setRating] = useState(5);
  const [selectedFeedback, setSelectedFeedback] = useState<string | null>(null);
  const feedbackChips = ['Too many prompts', 'Perfect', 'Want spicier', 'Want faster'];

  return (
    <div className="h-full flex flex-col bg-nourish-cream relative">
      <StatusBar />
      
      {/* Confetti/Celebration Ambience */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />

      <div className="flex-1 px-6 pt-4 pb-4 flex flex-col overflow-y-auto no-scrollbar z-10">
        
        {/* Food Hero */}
        <div className="rounded-[36px] overflow-hidden flex-shrink-0 relative h-[280px] shadow-2xl shadow-orange-900/20 animate-[scaleIn_0.6s_cubic-bezier(0.16,1,0.3,1)] group">
           <img 
              src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop"
              alt="Finished Dish"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="mt-8 flex-shrink-0 animate-[fadeInUp_0.5s_ease-out_0.2s_both]">
          <h2 className="text-[26px] font-bold text-gray-800 leading-[1.2]">
            Great job! You made this<br />
            <span className="text-nourish-green">Palak Dahl</span> healthier by:
          </h2>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-[#F0EDE8]">
              <div className="w-[24px] h-[24px] rounded-full bg-nourish-green/10 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-nourish-green" />
              </div>
              <p className="text-[17px] text-gray-700 font-medium">Reducing oil saturation.</p>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-[#F0EDE8]">
              <div className="w-[24px] h-[24px] rounded-full bg-nourish-green/10 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-nourish-green" />
              </div>
              <p className="text-[17px] text-gray-700 font-medium">Adding 4g fiber per serving.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center flex-shrink-0 animate-[fadeInUp_0.5s_ease-out_0.4s_both]">
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button 
                key={star} 
                onClick={() => setRating(star)} 
                className="transition-transform active:scale-125 focus:outline-none"
              >
                <IconStar filled={star <= rating} size={36} className="drop-shadow-sm" />
              </button>
            ))}
          </div>
          <p className="text-[15px] text-gray-500 mt-3 font-medium">Was this advice useful?</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5 justify-center flex-shrink-0 animate-[fadeInUp_0.5s_ease-out_0.5s_both]">
          {feedbackChips.map((chip, index) => (
            <button 
              key={index} 
              onClick={() => setSelectedFeedback(chip)} 
              className={`px-5 py-3 rounded-full text-[14px] font-medium transition-all ${
                selectedFeedback === chip 
                  ? 'bg-nourish-green text-white shadow-lg shadow-nourish-green/20' 
                  : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        <div className="flex-1 min-h-8" />
        
        <button 
          onClick={() => onNavigate('DISH_SELECTION')} 
          className="w-full py-4 rounded-[20px] text-white font-bold text-[17px] flex-shrink-0 transition-all active:scale-[0.98] bg-nourish-green shadow-xl shadow-nourish-green/30 hover:shadow-2xl hover:shadow-nourish-green/40 mb-2"
        >
          Cook Something New
        </button>
      </div>
      <HomeIndicator />
    </div>
  );
};