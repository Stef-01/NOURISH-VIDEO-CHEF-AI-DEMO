import React from 'react';
import { ScreenProps, ScreenId } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';

interface CoPilotConfig {
  header: string;
  cards: { title: string; body: string }[];
  nextScreen: ScreenId;
  curiosity?: { question: string; options: string[] };
}

export const CoPilot: React.FC<ScreenProps & { screenId: ScreenId }> = ({ onNavigate, screenId }) => {
  
  const configs: Record<string, CoPilotConfig> = {
    'COPILOT_ONIONS': {
      header: 'Almost there.',
      cards: [
        { title: 'Get to translucent', body: 'Cook 2 minutes more on medium. Stir every 20 seconds.' },
        { title: 'Avoid extra oil', body: 'If sticking, add 1 tbsp water, not more oil.' }
      ],
      nextScreen: 'LIVE_ONIONS'
    },
    'COPILOT_SPICE': {
      header: 'Spice timing',
      curiosity: { question: 'Want it milder or same spice level?', options: ['Milder', 'Same'] },
      cards: [
        { title: 'Prevent burnt spices', body: 'Reduce heat 20 seconds. Add cumin first.' },
        { title: 'Rescue move', body: 'If spices darken, deglaze with 2 tbsp water.' }
      ],
      nextScreen: 'LIVE_MASALA'
    },
    'COPILOT_SODIUM': {
      header: 'High sodium detected.',
      cards: [
        { title: 'Use half now', body: 'Use half the mix now. Finish flavor with lemon + cumin.' },
        { title: 'Taste gate', body: 'Taste after simmer. Add salt only if needed.' }
      ],
      nextScreen: 'CHECK_PALAK' // Skipping Simmer live screen for demo brevity if desired, or insert LIVE_SIMMER logic
    },
    'COPILOT_PALAK': {
      header: 'Perfect.',
      cards: [
        { title: 'Keep it bright', body: 'Simmer 2 minutes only, then turn off heat.' }
      ],
      nextScreen: 'COMPLETION_PHOTO'
    }
  };

  const config = configs[screenId] || configs['COPILOT_ONIONS'];

  return (
    <div className="h-full flex flex-col bg-[#0D0D0D] relative">
      <StatusBar light />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      
      <div className="relative z-10 flex flex-col h-full p-6 pt-4">
        <div className="flex-1 overflow-y-auto no-scrollbar pt-8">
            
            {/* Header / Curiosity */}
            <div className="flex justify-start mb-8 animate-[slideInLeft_0.4s_ease-out]">
                <div className="bg-white/95 backdrop-blur-md rounded-[24px] rounded-tl-sm px-6 py-5 shadow-lg max-w-[90%]">
                    {config.curiosity ? (
                        <>
                            <p className="text-[17px] text-gray-800 font-medium mb-4">{config.curiosity.question}</p>
                            <div className="flex gap-2">
                                {config.curiosity.options.map(opt => (
                                    <button key={opt} className="px-4 py-2 bg-nourish-green text-white rounded-full text-sm font-bold">
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p className="text-[17px] text-gray-800 font-medium">{config.header}</p>
                    )}
                </div>
            </div>

            {/* Suggestion Cards */}
            <div className="space-y-4">
                {config.cards.map((card, i) => (
                    <div key={i} className="bg-white rounded-[28px] p-6 shadow-xl animate-[fadeInUp_0.5s_ease-out] delay-100">
                        <h3 className="text-[19px] font-bold text-gray-900 mb-2">{card.title}</h3>
                        <p className="text-[16px] text-gray-600 mb-6 leading-relaxed">{card.body}</p>
                        
                        <div className="flex gap-3">
                            <button 
                                onClick={() => onNavigate(config.nextScreen)}
                                className="flex-1 py-3.5 rounded-[16px] bg-nourish-green text-white font-bold text-[15px] shadow-lg shadow-nourish-green/20 active:scale-[0.98] transition-transform"
                            >
                                I'll do it
                            </button>
                            <button className="flex-1 py-3.5 rounded-[16px] border border-gray-200 text-gray-500 font-bold text-[15px]">
                                Not today
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <p className="text-center text-white/30 text-xs mt-8">We'll update your steps automatically.</p>
        </div>
      </div>
      <HomeIndicator light />
    </div>
  );
};