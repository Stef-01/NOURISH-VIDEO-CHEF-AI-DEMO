import React, { useState } from 'react';
import { ScreenProps } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IconCamera } from '../Icons';
import { IMAGES } from '../../assets';

export const CompletionPhoto: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [captured, setCaptured] = useState(false);

  const handleCapture = () => {
    setCaptured(true);
    setTimeout(() => {
        onNavigate('PLATE_METHOD');
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col bg-black relative">
      <StatusBar light />
      
      {captured ? (
         <img 
            src={IMAGES.platedDish}
            className="absolute inset-0 w-full h-full object-cover animate-[flash_0.2s_ease-out]" 
         />
      ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
             <div className="w-full h-[400px] bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 border-2 border-white/20 m-8 rounded-[32px] flex items-center justify-center">
                    <p className="text-white/40 font-medium">Align bowl here</p>
                </div>
             </div>
          </div>
      )}

      <div className="absolute bottom-0 w-full p-8 pb-12 bg-gradient-to-t from-black via-black/80 to-transparent">
        <h2 className="text-white text-[28px] font-bold text-center mb-8">You did it!<br/>Snap your bowl.</h2>
        <button 
            onClick={handleCapture}
            className="w-20 h-20 rounded-full border-4 border-white mx-auto flex items-center justify-center bg-white/20 backdrop-blur-md active:scale-90 transition-transform"
        >
            <div className="w-14 h-14 bg-white rounded-full" />
        </button>
      </div>
      <HomeIndicator light />
    </div>
  );
};