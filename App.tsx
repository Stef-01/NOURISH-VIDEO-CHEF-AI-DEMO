import React, { useState } from 'react';
import { PhoneFrame } from './components/Layout';
import { ColdOpen } from './components/screens/ColdOpen';
import { DishSelection } from './components/screens/DishSelection';
import { GoalSelection } from './components/screens/GoalSelection';
import { RecipeContext } from './components/screens/RecipeContext';
import { LiveSession } from './components/screens/LiveSession';
import { Checkpoint } from './components/screens/Checkpoint';
import { CoPilot } from './components/screens/CoPilot';
import { CompletionPhoto } from './components/screens/CompletionPhoto';
import { PlateMethod } from './components/screens/PlateMethod';
import { Summary } from './components/screens/Summary';
import { FinalCTA } from './components/screens/FinalCTA';
import { FinalRecommendations } from './components/screens/FinalRecommendations';
import { ScreenId } from './types';

const SCREENS: ScreenId[] = [
  'COLD_OPEN',
  'DISH_SELECTION',
  'GOAL_SELECTION',
  'RECIPE_CONTEXT',
  'LIVE_TEMPER',
  'CHECK_OIL',
  'COPILOT_SPICE',
  'LIVE_ONIONS',
  'CHECK_ONIONS',
  'COPILOT_ONIONS',
  'LIVE_MASALA',
  'CHECK_SALT',
  'COPILOT_SODIUM',
  'CHECK_PALAK',
  'COPILOT_PALAK',
  'COMPLETION_PHOTO',
  'PLATE_METHOD',
  'SUMMARY',
  'FINAL_RECOMMENDATIONS',
  'FINAL_CTA'
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('COLD_OPEN');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (screen: ScreenId) => {
    if (screen === currentScreen || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScreen(screen);
      setIsTransitioning(false);
    }, 200);
  };

  const renderScreen = () => {
    const commonProps = { onNavigate: navigateTo };
    switch (currentScreen) {
      case 'COLD_OPEN': return <ColdOpen {...commonProps} />;
      case 'DISH_SELECTION': return <DishSelection {...commonProps} />;
      case 'GOAL_SELECTION': return <GoalSelection {...commonProps} />;
      case 'RECIPE_CONTEXT': return <RecipeContext {...commonProps} />;

      // Live Session Flows
      case 'LIVE_TEMPER':
      case 'LIVE_ONIONS':
      case 'LIVE_MASALA':
        return <LiveSession {...commonProps} screenId={currentScreen} />;

      // Checkpoints
      case 'CHECK_ONIONS':
      case 'CHECK_OIL':
      case 'CHECK_SALT':
      case 'CHECK_PALAK':
        return <Checkpoint {...commonProps} screenId={currentScreen} />;

      // CoPilot Responses
      case 'COPILOT_ONIONS':
      case 'COPILOT_SPICE':
      case 'COPILOT_SODIUM':
      case 'COPILOT_PALAK':
        return <CoPilot {...commonProps} screenId={currentScreen} />;

      // Completion Flow
      case 'COMPLETION_PHOTO': return <CompletionPhoto {...commonProps} />;
      case 'PLATE_METHOD': return <PlateMethod {...commonProps} />;
      case 'SUMMARY': return <Summary {...commonProps} />;
      case 'FINAL_RECOMMENDATIONS': return <FinalRecommendations {...commonProps} />;
      case 'FINAL_CTA': return <FinalCTA {...commonProps} />;

      default: return <ColdOpen {...commonProps} />;
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-900 overflow-hidden font-sans relative">
      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          20% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes flash {
          0% { opacity: 1; filter: brightness(2); }
          100% { opacity: 1; filter: brightness(1); }
        }
        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          20% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes flash {
          0% { opacity: 1; filter: brightness(2); }
          100% { opacity: 1; filter: brightness(1); }
        }
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.5); }
          70% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Scaled Wrapper for Visibility */}
      <div className="transform scale-[0.45] sm:scale-[0.55] md:scale-[0.65] lg:scale-[0.75] xl:scale-[0.85] 2xl:scale-[0.95] transition-transform duration-500 ease-out origin-center">
        <PhoneFrame currentScreen={SCREENS.indexOf(currentScreen)} isTransitioning={isTransitioning}>
          {renderScreen()}
        </PhoneFrame>
      </div>

      {/* Debug Nav - Updated to include all screens */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 z-50 opacity-30 hover:opacity-100 transition-opacity max-w-[90vw]">
        {SCREENS.map((screen) => (
          <button
            key={screen}
            onClick={() => navigateTo(screen)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentScreen === screen ? 'bg-nourish-gold scale-125 shadow-[0_0_8px_rgba(212,168,75,0.8)]' : 'bg-white/30 hover:bg-white/60'}`}
            title={screen}
          />
        ))}
      </div>
    </div>
  );
}