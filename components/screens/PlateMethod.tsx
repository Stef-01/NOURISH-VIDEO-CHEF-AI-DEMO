import React from 'react';
import { ScreenProps } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IMAGES } from '../../assets';

export const PlateMethod: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col bg-white relative">
      <StatusBar />
      
      <div className="flex-1 px-6 pt-8 flex flex-col">
        <h2 className="text-[28px] font-bold text-gray-900 mb-6">Plate check</h2>
        
        {/* Plate Diagram Overlay */}
        <div className="aspect-square relative mb-8 rounded-full overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-gray-200">
            {/* Food Image Layer */}
            <img 
                src={IMAGES.platedDish}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Plated food"
            />
            
            {/* Overlay Layer */}
            <div className="absolute inset-0">
                <svg viewBox="0 0 200 200" className="w-full h-full opacity-90">
                    <defs>
                        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3"/>
                        </filter>
                    </defs>
                    
                    {/* Left Half: Non-starchy Vegetables (Green) */}
                    <path 
                        d="M 100 0 A 100 100 0 0 0 100 200 L 100 0" 
                        fill="rgba(101, 163, 13, 0.25)" 
                        stroke="white" 
                        strokeWidth="3"
                        filter="url(#shadow)"
                    />
                    
                    {/* Top Right: Carbohydrates (Orange) */}
                    <path 
                        d="M 100 0 A 100 100 0 0 1 200 100 L 100 100 L 100 0" 
                        fill="rgba(234, 88, 12, 0.25)" 
                        stroke="white" 
                        strokeWidth="3"
                        filter="url(#shadow)"
                    />
                    
                    {/* Bottom Right: Protein (Red) */}
                    <path 
                        d="M 100 100 L 200 100 A 100 100 0 0 1 100 200 L 100 100" 
                        fill="rgba(220, 38, 38, 0.25)" 
                        stroke="white" 
                        strokeWidth="3"
                        filter="url(#shadow)"
                    />
                    
                    {/* Outer Border */}
                    <circle cx="100" cy="100" r="98" fill="none" stroke="white" strokeWidth="4" />
                </svg>

                {/* Labels */}
                <div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <span className="block text-white font-bold text-[19px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-tight">
                        Non-starchy<br/>Vegetables
                    </span>
                </div>
                <div className="absolute top-[28%] right-[22%] translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <span className="block text-white font-bold text-[17px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-tight">
                        Carbs
                    </span>
                </div>
                <div className="absolute bottom-[28%] right-[22%] translate-x-1/2 translate-y-1/2 text-center pointer-events-none">
                    <span className="block text-white font-bold text-[17px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-tight">
                        Protein
                    </span>
                </div>
            </div>
        </div>

        <div className="space-y-3 mb-6">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3">
                <span className="text-[18px]">🥗</span>
                <p className="text-gray-800 font-medium text-[15px] pt-0.5">Add cucumber salad to fill the green section.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex gap-3">
                <span className="text-[18px]">🍚</span>
                <p className="text-gray-800 font-medium text-[15px] pt-0.5">Perfect portion on the rice (Carbs).</p>
            </div>
        </div>

        <div className="mt-auto mb-6 flex gap-3">
             <button 
                onClick={() => onNavigate('SUMMARY')}
                className="flex-1 h-[56px] bg-nourish-green text-white rounded-[28px] font-bold text-[17px] shadow-lg active:scale-[0.98] transition-transform"
             >
                Save this plate
             </button>
             <button onClick={() => onNavigate('SUMMARY')} className="w-20 font-bold text-gray-400">Skip</button>
        </div>
      </div>
      <HomeIndicator />
    </div>
  );
};