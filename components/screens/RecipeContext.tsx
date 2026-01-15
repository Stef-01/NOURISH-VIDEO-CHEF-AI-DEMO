import React from 'react';
import { ScreenProps } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IconBack, IconChevronDown } from '../Icons';
import { IMAGES } from '../../assets';

export const RecipeContext: React.FC<ScreenProps> = ({ onNavigate }) => {
  const steps = ['Prep', 'Rinse', 'Temper', 'Onion stage', 'Masala base', 'Simmer dal', 'Add palak', 'Plate'];
  const ingredients = [
    { name: 'Moong dal', amount: '3/4 cup' },
    { name: 'Spinach', amount: '2 packed cups' },
    { name: 'Onion', amount: '1 medium' },
    { name: 'Tomato', amount: '1 medium' },
    { name: 'Garlic', amount: '3 cloves' },
    { name: 'Ginger', amount: '1 tsp' },
    { name: 'Turmeric', amount: '1/2 tsp' },
    { name: 'Cumin', amount: '1 tsp' },
    { name: 'Salt', amount: 'measured' },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Top Half Visual */}
      <div className="relative h-[40%] shrink-0">
        <img 
          src={IMAGES.ingredientsFlatlay}
          alt="Ingredients"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <StatusBar light />
        
        <div className="absolute top-12 left-0 right-0 flex items-center justify-between px-5 z-20">
          <button onClick={() => onNavigate('GOAL_SELECTION')} className="p-2 -ml-2 rounded-full bg-black/20 backdrop-blur-md">
            <IconBack color="#FFFFFF" size={24} />
          </button>
          <div className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md">
            <span className="text-[14px] font-semibold text-white">Step 1 of 8</span>
          </div>
          <div className="w-10" />
        </div>

        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-nourish-green/90 backdrop-blur text-white text-[12px] font-bold rounded-lg uppercase tracking-wide shadow-lg">
          Goal: Lighter
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col -mt-6 bg-white rounded-t-[32px] relative z-10 overflow-hidden">
        
        {/* Horizontal Stepper */}
        <div className="flex overflow-x-auto no-scrollbar px-6 pt-6 pb-4 gap-2">
          {steps.map((step, i) => (
            <div key={i} className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[13px] font-medium border ${i === 0 ? 'bg-gray-900 text-white border-gray-900' : 'text-gray-400 border-gray-100'}`}>
              {step}
            </div>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-20">
          <h2 className="text-[18px] font-bold text-gray-900 mb-4">Ingredients</h2>
          <div className="space-y-0">
            {ingredients.map((ing, i) => (
              <div key={i} className="flex justify-between py-3 border-b border-gray-50">
                <span className="text-[16px] text-gray-800 font-medium">{ing.name}</span>
                <span className="text-[16px] text-gray-500">{ing.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pt-10">
          <button 
            onClick={() => onNavigate('LIVE_TEMPER')}
            className="w-full h-[56px] bg-nourish-green text-white rounded-[28px] font-bold text-[17px] shadow-xl shadow-nourish-green/30 active:scale-[0.98] transition-transform"
          >
            Start cooking
          </button>
          <HomeIndicator />
        </div>
      </div>
    </div>
  );
};