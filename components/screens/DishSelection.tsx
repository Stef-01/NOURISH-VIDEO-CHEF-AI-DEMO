import React, { useState } from 'react';
import { ScreenProps } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IconSearch } from '../Icons';
import { IMAGES } from '../../assets';

export const DishSelection: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selected, setSelected] = useState(false);
  const chips = ['Dal', 'Palak', 'One-pot', 'High-protein', 'Quick', 'Comfort'];

  const handleChipClick = (chip: string) => {
    if (chip === 'Palak') {
      setSearchValue('Palak dal');
      setSelected(true);
    } else {
      setSearchValue(chip);
    }
  };
  
  return (
    <div className="h-full flex flex-col bg-nourish-cream relative overflow-hidden">
      <StatusBar />
      
      <div className="flex-1 px-6 pt-4 pb-6 flex flex-col z-10">
        <div className="text-center mb-6">
          <h1 className="text-[18px] font-bold tracking-widest text-nourish-green uppercase">NOURISH</h1>
        </div>

        <h2 className="text-[32px] font-bold text-gray-900 leading-[1.1] mb-6">
          What are we<br />
          <span className="text-nourish-gold">cooking</span> today?
        </h2>

        <div className="relative mb-6 group">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full h-[56px] px-6 pr-14 rounded-full text-[17px] outline-none bg-white shadow-sm border border-transparent focus:border-nourish-gold/30 focus:shadow-md transition-all duration-300 placeholder:text-gray-400 text-gray-800"
            placeholder="Search dishes..."
          />
          <div className="absolute right-5 top-1/2 -translate-y-1/2 text-nourish-gold">
            <IconSearch size={24} />
          </div>
        </div>

        <div className="flex gap-2.5 mb-8 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6">
          {chips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleChipClick(chip)}
              className="px-4 py-2.5 rounded-full text-[14px] font-medium transition-all duration-200 bg-white text-gray-500 border border-gray-100 hover:border-nourish-gold/30 hover:bg-nourish-cream whitespace-nowrap"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Hero Dish Card */}
        <div 
          className={`flex-1 min-h-[280px] rounded-[32px] overflow-hidden relative cursor-pointer transform transition-all duration-500 group ${selected ? 'ring-4 ring-nourish-gold ring-offset-2' : ''}`}
          onClick={() => selected && onNavigate('GOAL_SELECTION')}
        >
          <img 
            src={IMAGES.palakDalHero}
            alt="Palak Dal"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-white text-[24px] font-bold mb-1">Palak Dal & Rice</h3>
            <p className="text-white/80 text-[15px] font-medium mb-4">25 mins • Beginner</p>
            
            {selected && (
              <button 
                onClick={(e) => { e.stopPropagation(); onNavigate('GOAL_SELECTION'); }}
                className="w-full py-3.5 bg-nourish-gold text-white rounded-[20px] font-bold text-[16px] shadow-lg active:scale-[0.98] transition-transform"
              >
                Start
              </button>
            )}
          </div>
        </div>
      </div>
      <HomeIndicator />
    </div>
  );
};