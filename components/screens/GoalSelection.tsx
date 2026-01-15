import React, { useState } from 'react';
import { ScreenProps } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IconCheck } from '../Icons';

export const GoalSelection: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [selectedGoal, setSelectedGoal] = useState<'Lighter' | 'Filling' | null>(null);

  return (
    <div className="h-full flex flex-col bg-white relative">
      <StatusBar />
      
      <div className="flex-1 px-6 pt-12 flex flex-col">
        <h2 className="text-[32px] font-bold text-gray-900 mb-2">Tonight's goal</h2>
        <p className="text-[17px] text-gray-500 mb-8 leading-relaxed">We'll tailor guidance without changing the dish.</p>

        <div className="space-y-4">
          <button
            onClick={() => setSelectedGoal('Lighter')}
            className={`w-full p-6 rounded-[24px] border-2 text-left transition-all relative ${
              selectedGoal === 'Lighter' 
                ? 'border-nourish-green bg-nourish-green/5' 
                : 'border-gray-100 bg-gray-50'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[20px] font-bold text-gray-900 block mb-1">Lighter</span>
                <span className="text-[15px] text-gray-500">Less oil, more fiber focus.</span>
              </div>
              {selectedGoal === 'Lighter' && (
                <div className="w-8 h-8 rounded-full bg-nourish-green flex items-center justify-center text-white">
                  <IconCheck size={20} color="#FFF" />
                </div>
              )}
            </div>
          </button>

          <button
            onClick={() => setSelectedGoal('Filling')}
            className={`w-full p-6 rounded-[24px] border-2 text-left transition-all relative ${
              selectedGoal === 'Filling' 
                ? 'border-nourish-green bg-nourish-green/5' 
                : 'border-gray-100 bg-gray-50'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[20px] font-bold text-gray-900 block mb-1">More filling</span>
                <span className="text-[15px] text-gray-500">Protein boost, satiety focus.</span>
              </div>
              {selectedGoal === 'Filling' && (
                <div className="w-8 h-8 rounded-full bg-nourish-green flex items-center justify-center text-white">
                  <IconCheck size={20} color="#FFF" />
                </div>
              )}
            </div>
          </button>
        </div>

        <div className="flex-1" />

        <button 
          disabled={!selectedGoal}
          onClick={() => onNavigate('RECIPE_CONTEXT')}
          className={`w-full h-[56px] rounded-[28px] font-bold text-[17px] mb-6 transition-all ${
            selectedGoal 
              ? 'bg-nourish-green text-white shadow-xl shadow-nourish-green/30' 
              : 'bg-gray-100 text-gray-400'
          }`}
        >
          Continue
        </button>
      </div>
      <HomeIndicator />
    </div>
  );
};