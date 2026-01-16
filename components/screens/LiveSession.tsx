import React, { useEffect, useState } from 'react';
import { ScreenProps, ScreenId } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IconCamera, IconInfo } from '../Icons';
import { IMAGES } from '../../assets';

interface LiveConfig {
  step: string;
  instructions: string[];
  nextScreen: ScreenId;
  isPersonalized?: boolean;
  hasMicroLearning?: boolean;
  microLearningConfig?: { title: string; bullets: string[] };
}

export const LiveSession: React.FC<ScreenProps & { screenId: ScreenId }> = ({ onNavigate, screenId }) => {
  const [showMicroLearning, setShowMicroLearning] = useState(false);

  const configs: Record<string, LiveConfig> = {
    'LIVE_TEMPER': {
      step: 'Temper',
      instructions: ['Heat pan on medium. Add 1 tsp oil.', 'Add cumin seeds when oil shimmers.'],
      nextScreen: 'CHECK_OIL'
    },
    'LIVE_ONIONS': {
      step: 'Onion stage',
      instructions: ['Cook 2 minutes more.', 'Stir every 20 seconds.'],
      nextScreen: 'CHECK_ONIONS',
      isPersonalized: true
    },
    'LIVE_MASALA': {
      step: 'Masala base',
      instructions: ['Add garlic + ginger. Stir 15 seconds.', 'Add turmeric + chili. Stir 10 seconds.', 'Add tomato. Cook until raw smell fades.'],
      nextScreen: 'CHECK_SALT',
      hasMicroLearning: true,
      microLearningConfig: {
        title: 'How to tell tomato is cooked',
        bullets: ['Sharp raw smell softens', 'Color deepens', 'Oil separates slightly']
      }
    }
  };

  const config = configs[screenId] || configs['LIVE_TEMPER'];



  const timeline = ['Temper', 'Onions', 'Masala', 'Simmer', 'Salt', 'Palak', 'Plate'];
  const activeIndex = timeline.findIndex(t => config.step.includes(t)) !== -1
    ? timeline.findIndex(t => config.step.includes(t))
    : 0;

  return (
    <div className="h-full flex flex-col bg-black relative overflow-hidden">
      <StatusBar light />

      {/* Dynamic Background based on step */}
      <img
        src={
          screenId === 'LIVE_TEMPER' ? IMAGES.liveTemper :
            screenId === 'LIVE_ONIONS' ? IMAGES.liveOnions :
              IMAGES.liveMasala
        }
        alt="Cooking Step"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Live Camera UI Overlay */}
      <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 rounded-md z-20 flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        <span className="text-white text-[10px] font-bold uppercase tracking-wider">Live Camera</span>
      </div>

      {/* Timeline */}
      <div className="relative z-20 pt-14 px-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {timeline.map((item, i) => (
            <div key={i} className={`flex-shrink-0 px-3 py-1 rounded-full text-[12px] font-medium backdrop-blur-sm border ${i === activeIndex ? 'bg-nourish-gold text-black border-nourish-gold' : 'bg-black/40 text-white/60 border-white/10'
              }`}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1" />

      {/* Instruction Card */}
      <div className="relative z-30 m-4 p-5 bg-white/95 backdrop-blur-xl rounded-[24px] shadow-2xl transition-all duration-500 animate-[slideUp_0.5s_ease-out]">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h2 className="text-[20px] font-bold text-gray-900">{config.step}</h2>
            {config.isPersonalized && (
              <div className="group relative inline-block mt-1">
                <span className="px-2 py-0.5 bg-nourish-green/10 text-nourish-green text-[11px] font-bold uppercase tracking-wider rounded cursor-help">Personalized</span>
                <div className="hidden group-hover:block absolute bottom-full left-0 mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-50 animate-[fadeIn_0.2s_ease-out]">
                  because you said you prefer medium caramalized onions
                  <div className="absolute top-full left-4 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            )}
          </div>
          {config.hasMicroLearning && (
            <button
              onClick={() => setShowMicroLearning(true)}
              className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"
            >
              <IconInfo size={20} />
            </button>
          )}
        </div>

        <div className="space-y-2 mb-6">
          {config.instructions.map((line, i) => (
            <p key={i} className="text-[16px] text-gray-700 leading-snug">• {line.replace('Cook 2 minutes more', 'Cook 2 minutes')}</p>
          ))}
        </div>

        <div className="flex gap-3">
          <button onClick={() => onNavigate(config.nextScreen)} className="w-full py-3 rounded-xl bg-gray-100 text-gray-600 font-bold text-[14px] hover:bg-gray-200 active:scale-[0.98] transition-all">
            Next
          </button>
        </div>
      </div>

      {/* Micro-learning Overlay */}
      {showMicroLearning && config.microLearningConfig && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end">
          <div className="w-full bg-white rounded-t-[32px] p-8 animate-[slideUp_0.3s_ease-out]">
            <h3 className="text-[20px] font-bold text-gray-900 mb-4">{config.microLearningConfig.title}</h3>
            <ul className="space-y-3 mb-8">
              {config.microLearningConfig.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-nourish-gold" />
                  {b}
                </li>
              ))}
            </ul>
            <button
              onClick={() => { setShowMicroLearning(false); onNavigate(config.nextScreen); }}
              className="w-full py-4 bg-nourish-green text-white rounded-[20px] font-bold"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      <HomeIndicator light />
    </div>
  );
};