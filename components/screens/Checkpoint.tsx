import React, { useState } from 'react';
import { ScreenProps, ScreenId } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IconCamera, IconVideo, IconScan } from '../Icons';
import { IMAGES } from '../../assets';

interface CheckpointConfig {
  title: string;
  subtitle: string;
  tasteChips: string[]; // User-selected taste test options
  aiChips: string[]; // AI-detected analysis options
  aiRemedies: Record<string, string>; // Remedies for each AI chip
  nextScreen: ScreenId; // Maps to chip selection logic usually, simplified here
  bgImage: string;
  isSaltCheck?: boolean;
}

export const Checkpoint: React.FC<ScreenProps & { screenId: ScreenId }> = ({ onNavigate, screenId }) => {
  const [captured, setCaptured] = useState(false);
  const [showScan, setShowScan] = useState(false);
  const [activeTab, setActiveTab] = useState<'ai' | 'taste'>('ai'); // Default to AI Analysis
  const [expandedChip, setExpandedChip] = useState<string | null>(null); // Track expanded chip

  const configs: Record<string, CheckpointConfig> = {
    'CHECK_ONIONS': {
      title: 'Quick check',
      subtitle: 'Show your onions for 2 seconds.',
      aiChips: ['Too brown', 'Sticking', 'Burning - decrease heat', 'Just right'],
      aiRemedies: {
        'Too brown': 'Lower heat to medium-low. Add 1 tbsp water to slow browning and prevent burning.',
        'Sticking': 'Add 1 tbsp water (not oil) and stir gently. Lower heat slightly.',
        'Burning - decrease heat': 'Immediately lower to medium-low. Remove from heat for 30 seconds, then continue.',
        'Just right': 'Perfect! Continue cooking as planned.'
      },
      tasteChips: ['Too bland?', 'Too oily?', 'Perfect taste?'],
      nextScreen: 'COPILOT_ONIONS',
      bgImage: IMAGES.checkOnions
    },
    'CHECK_OIL': {
      title: 'Quick check',
      subtitle: 'Show the oil surface for spice timing.',
      aiChips: ['Too hot', 'Smoking - decrease heat', 'Just right', 'Not ready'],
      aiRemedies: {
        'Too hot': 'Remove from heat for 30 seconds. Lower to medium. Add spices when oil shimmers.',
        'Smoking - decrease heat': 'Immediately lower heat to low. Wait 15 seconds before adding spices.',
        'Just right': 'Perfect temperature! Add cumin seeds now.',
        'Not ready': 'Keep on medium heat. Wait until oil shimmers (about 30 more seconds).'
      },
      tasteChips: ['Too spicy?', 'Not spicy enough?', 'Perfect balance?'],
      nextScreen: 'COPILOT_SPICE',
      bgImage: IMAGES.checkOil
    },
    'CHECK_SALT': {
      title: 'Salt check',
      subtitle: 'Analyze salt content',
      aiChips: ['Plain salt', 'Seasoning mix'],
      aiRemedies: {
        'Plain salt': 'Good! Use ½ tsp for this recipe. You can adjust later.',
        'Seasoning mix': 'Contains extra sodium. Use only ¼ tsp now, taste before adding more.'
      },
      tasteChips: ['Too salty?', 'Needs more salt?', 'Perfect?'],
      nextScreen: 'COPILOT_SODIUM',
      bgImage: IMAGES.checkSalt,
      isSaltCheck: true
    },
    'CHECK_PALAK': {
      title: 'Quick check',
      subtitle: 'Show spinach color and texture.',
      aiChips: ['Too thick - add water', 'Too watery - simmer more', 'Dull color', 'Perfect consistency'],
      aiRemedies: {
        'Too thick - add water': 'Add ¼ cup water. Stir gently and simmer 2 minutes.',
        'Too watery - simmer more': 'Simmer uncovered on medium-low for 3-4 minutes to reduce liquid.',
        'Dull color': 'Normal! Add a squeeze of lemon at the end to brighten flavor.',
        'Perfect consistency': 'Excellent! Your palak dal looks great.'
      },
      tasteChips: ['Bitter taste?', 'Too bland?', 'Perfect flavor?'],
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
            {/* Background image without blur */}
            <img src={config.bgImage} className="absolute inset-0 w-full h-full object-cover" />

            {/* Scanner overlay */}
            <div className="absolute inset-0 z-10">
                {/* Scanner box positioned over sodium label area */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72">
                    {/* Scanner border with glow effect */}
                    <div className="absolute inset-0 border-4 border-nourish-gold rounded-xl shadow-[0_0_30px_rgba(212,168,75,0.8)] animate-pulse">
                        {/* Corner accents */}
                        <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-nourish-gold rounded-tl-xl"></div>
                        <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-nourish-gold rounded-tr-xl"></div>
                        <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-nourish-gold rounded-bl-xl"></div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-nourish-gold rounded-br-xl"></div>
                    </div>

                    {/* Animated scan line */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl">
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_20px_rgba(239,68,68,0.8)] animate-[scan_2s_ease-in-out_infinite]" />
                    </div>

                    {/* Crosshair center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 border-2 border-nourish-gold rounded-full bg-nourish-gold/30"></div>
                    </div>
                </div>

                {/* Scanning status */}
                <div className="absolute bottom-32 w-full text-center z-20">
                    <p className="text-white text-xl font-bold mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Scanning nutritional label...</p>
                    <div className="inline-block bg-red-500/95 px-6 py-3 rounded-xl border-2 border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.6)]">
                        <p className="text-white font-bold text-lg">⚠️ High sodium: 900mg</p>
                        <p className="text-white/90 text-sm mt-1">Per serving</p>
                    </div>
                </div>
            </div>

            <button
                onClick={() => onNavigate('COPILOT_SODIUM')}
                className="absolute bottom-10 left-6 right-6 h-14 bg-white text-black font-bold rounded-full z-20 shadow-xl hover:scale-[1.02] transition-transform"
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
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col h-full justify-between pb-8 pt-12">
        <div className="px-6">
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block">
                <h2 className="text-[32px] font-bold text-white mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{config.title}</h2>
                <p className="text-[18px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{config.subtitle}</p>
            </div>
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
                <div className="animate-[scaleIn_0.4s_cubic-bezier(0.34,1.56,0.64,1)]">
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest text-center mb-4 animate-[fadeIn_0.5s_ease-out]">Analysis Results</p>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-4 bg-white/10 rounded-full p-1 animate-[slideUp_0.5s_cubic-bezier(0.34,1.56,0.64,1)_0.1s_both]">
                        <button
                            onClick={() => setActiveTab('ai')}
                            className={`flex-1 py-2 rounded-full text-[13px] font-bold transition-all ${
                                activeTab === 'ai'
                                    ? 'bg-nourish-gold text-black shadow-lg'
                                    : 'text-white/70 hover:text-white'
                            }`}
                        >
                            AI Analysis
                        </button>
                        <button
                            onClick={() => setActiveTab('taste')}
                            className={`flex-1 py-2 rounded-full text-[13px] font-bold transition-all ${
                                activeTab === 'taste'
                                    ? 'bg-nourish-gold text-black shadow-lg'
                                    : 'text-white/70 hover:text-white'
                            }`}
                        >
                            Taste Test
                        </button>
                    </div>

                    {/* Chips based on active tab */}
                    <div className="space-y-3">
                        {activeTab === 'ai' ? (
                            // AI Analysis - Expandable chips with remedies
                            config.aiChips.map((chip, index) => {
                                const isExpanded = expandedChip === chip;
                                return (
                                    <div
                                        key={chip}
                                        className="w-full animate-[slideUp_0.5s_cubic-bezier(0.34,1.56,0.64,1)_both]"
                                        style={{ animationDelay: `${0.15 + index * 0.05}s` }}
                                    >
                                        <button
                                            onClick={() => setExpandedChip(isExpanded ? null : chip)}
                                            className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-medium hover:bg-nourish-gold/20 hover:border-nourish-gold hover:scale-[1.02] transition-all text-left"
                                        >
                                            {chip}
                                        </button>
                                        {isExpanded && config.aiRemedies[chip] && (
                                            <div className="mt-2 px-5 py-4 rounded-2xl bg-nourish-gold/90 border border-nourish-gold animate-[scaleIn_0.3s_cubic-bezier(0.34,1.56,0.64,1)]">
                                                <p className="text-black font-medium text-[15px] leading-relaxed">
                                                    💡 {config.aiRemedies[chip]}
                                                </p>
                                                <button
                                                    onClick={() => handleChip(chip)}
                                                    className="mt-3 w-full py-2 bg-black/80 text-white rounded-xl font-bold text-sm hover:bg-black hover:scale-[1.02] transition-all"
                                                >
                                                    Apply this fix →
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        ) : (
                            // Taste Test - Simple selectable chips
                            <div className="flex flex-wrap gap-3 justify-center">
                                {config.tasteChips.map((chip, index) => (
                                    <button
                                        key={chip}
                                        onClick={() => handleChip(chip)}
                                        className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-nourish-gold hover:border-nourish-gold hover:scale-[1.05] transition-all animate-[scaleIn_0.4s_cubic-bezier(0.34,1.56,0.64,1)_both]"
                                        style={{ animationDelay: `${0.15 + index * 0.05}s` }}
                                    >
                                        {chip}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
      </div>
      <HomeIndicator light />
    </div>
  );
};