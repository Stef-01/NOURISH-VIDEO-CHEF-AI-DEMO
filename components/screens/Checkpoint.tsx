import React, { useState } from 'react';
import { ScreenProps, ScreenId } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IconCamera, IconVideo, IconScan } from '../Icons';
import { IMAGES } from '../../assets';

interface CheckpointConfig {
  title: string;
  subtitle: string;
  chips: string[];
  nextScreen: ScreenId; // Maps to chip selection logic usually, simplified here
  bgImage: string;
  isSaltCheck?: boolean;
}

export const Checkpoint: React.FC<ScreenProps & { screenId: ScreenId }> = ({ onNavigate, screenId }) => {
  const [captured, setCaptured] = useState(false);
  const [showScan, setShowScan] = useState(false);

  const configs: Record<string, CheckpointConfig> = {
    'CHECK_ONIONS': {
      title: 'Quick check',
      subtitle: 'Show your onions for 2 seconds.',
      chips: ['Too pale', 'Too brown', 'Sticking', 'Too oily', 'Just right'],
      nextScreen: 'COPILOT_ONIONS',
      bgImage: IMAGES.checkOnions
    },
    'CHECK_OIL': {
      title: 'Quick check',
      subtitle: 'Show the oil surface for spice timing.',
      chips: ['Too hot', 'Just right', 'Not ready'],
      nextScreen: 'COPILOT_SPICE',
      bgImage: IMAGES.checkOil
    },
    'CHECK_SALT': {
      title: 'Salt check',
      subtitle: 'Is this plain salt or a seasoning mix?',
      chips: ['Plain salt', 'Seasoning mix'],
      nextScreen: 'COPILOT_SODIUM',
      bgImage: IMAGES.checkSalt,
      isSaltCheck: true
    },
    'CHECK_PALAK': {
      title: 'Quick check',
      subtitle: 'Show spinach color and texture.',
      chips: ['Too thick', 'Too watery', 'Dull color', 'Just right'],
      nextScreen: 'COPILOT_PALAK',
      bgImage: IMAGES.checkPalak
    }
  };

  const config = configs[screenId] || configs['CHECK_ONIONS'];

  const handleCapture = () => {
    setCaptured(true);
  };

  const handleChip = (chip: string) => {
    // Logic mapping for demo
    if (screenId === 'CHECK_ONIONS' && chip === 'Too pale') onNavigate('COPILOT_ONIONS');
    else if (screenId === 'CHECK_OIL' && chip === 'Too hot') onNavigate('COPILOT_SPICE');
    else if (screenId === 'CHECK_SALT' && chip === 'Seasoning mix') setShowScan(true);
    else if (screenId === 'CHECK_PALAK' && chip === 'Just right') onNavigate('COPILOT_PALAK');
    else {
        // Default fallbacks for demo flow if other chips clicked
        if (screenId === 'CHECK_ONIONS') onNavigate('COPILOT_ONIONS'); 
        if (screenId === 'CHECK_OIL') onNavigate('COPILOT_SPICE'); 
        if (screenId === 'CHECK_SALT') setShowScan(true);
        if (screenId === 'CHECK_PALAK') onNavigate('COPILOT_PALAK');
    }
  };

  if (showScan) {
    return (
        <div className="h-full flex flex-col bg-black relative">
            <StatusBar light />
            <div className="absolute inset-0 bg-black/50 z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-nourish-gold rounded-xl flex items-center justify-center">
                    <div className="w-full h-0.5 bg-red-500 animate-[scan_2s_infinite]" />
                </div>
                <div className="absolute bottom-32 w-full text-center">
                    <p className="text-white text-lg font-bold">Scanning...</p>
                    <p className="text-red-400 font-bold mt-2 bg-black/80 inline-block px-4 py-2 rounded-lg">High sodium: 480mg</p>
                </div>
            </div>
            {/* Fake auto advance after scan */}
            <img src={config.bgImage} className="absolute inset-0 w-full h-full object-cover" />
            <button 
                onClick={() => onNavigate('COPILOT_SODIUM')} 
                className="absolute bottom-10 left-6 right-6 h-14 bg-white text-black font-bold rounded-full z-20"
            >
                See results
            </button>
        </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-black relative">
      <StatusBar light />
      
      {/* Background Ambience */}
      <img 
        src={config.bgImage}
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm"
      />
      
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col h-full justify-between pb-8 pt-12">
        <div className="px-6">
            <h2 className="text-[32px] font-bold text-white mb-2">{config.title}</h2>
            <p className="text-[18px] text-white/80">{config.subtitle}</p>
        </div>

        <div className="w-full bg-black/40 backdrop-blur-xl rounded-t-[32px] p-6 pb-10 border-t border-white/10">
            {!captured ? (
                 <div className="space-y-4">
                    <button onClick={handleCapture} className="w-full py-4 rounded-[20px] bg-white text-black font-bold text-[17px] flex items-center justify-center gap-3">
                        <IconCamera size={22} />
                        {config.isSaltCheck ? 'Scan label' : 'Take photo'}
                    </button>
                    <button onClick={handleCapture} className="w-full py-4 rounded-[20px] bg-white/10 text-white font-bold text-[17px] flex items-center justify-center gap-3">
                        {config.isSaltCheck ? <IconScan size={22} color="white" /> : <IconVideo size={22} color="white" />}
                        {config.isSaltCheck ? "I'll enter it" : 'Record 5s clip'}
                    </button>
                 </div>
            ) : (
                <div className="animate-[fadeIn_0.3s_ease-out]">
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest text-center mb-4">Analysis Results</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {config.chips.map(chip => (
                            <button 
                                key={chip}
                                onClick={() => handleChip(chip)}
                                className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-nourish-gold hover:border-nourish-gold transition-colors"
                            >
                                {chip}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
      </div>
      <HomeIndicator light />
    </div>
  );
};