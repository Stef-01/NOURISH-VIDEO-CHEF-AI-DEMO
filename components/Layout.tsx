import React from 'react';

export const StatusBar: React.FC<{ light?: boolean }> = ({ light = false }) => {
  const color = light ? "#FFFFFF" : "#000000";
  const dimColor = light ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.3)";
  
  return (
    <div className="relative flex items-center justify-between px-6 h-11 pt-3 select-none z-50">
      <span className="text-[15px] font-semibold tracking-wide" style={{ color, fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
        9:41
      </span>
      {/* Notch simulation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[126px] h-[37px] bg-black rounded-b-[24px] z-50" />
      
      <div className="flex items-center gap-[6px]">
        <div className="flex items-end gap-[1.5px] h-[11px]">
          <div className="w-[3px] h-[4px] rounded-[0.5px]" style={{ backgroundColor: color }} />
          <div className="w-[3px] h-[6px] rounded-[0.5px]" style={{ backgroundColor: color }} />
          <div className="w-[3px] h-[8px] rounded-[0.5px]" style={{ backgroundColor: color }} />
          <div className="w-[3px] h-[11px] rounded-[0.5px]" style={{ backgroundColor: dimColor }} />
        </div>
        <svg width="16" height="12" viewBox="0 0 16 12" fill={color} className="ml-[2px]">
          <path d="M8 2.4c2.4 0 4.6.9 6.3 2.4l-1.2 1.4C11.6 4.9 9.9 4.2 8 4.2S4.4 4.9 2.9 6.2L1.7 4.8C3.4 3.3 5.6 2.4 8 2.4zm0 3.6c1.5 0 2.9.6 4 1.5l-1.2 1.4c-.7-.6-1.7-1-2.8-1s-2.1.4-2.8 1L4 7.5c1.1-.9 2.5-1.5 4-1.5zm0 3.6c.8 0 1.5.3 2 .8L8 12l-2-1.6c.5-.5 1.2-.8 2-.8z"/>
        </svg>
        <div className="flex items-center ml-[2px]">
          <div className="relative w-[25px] h-[12px] rounded-[3px] border-[1.5px]" style={{ borderColor: color }}>
            <div className="absolute top-[1.5px] left-[1.5px] bottom-[1.5px] rounded-[1.5px]" style={{ width: '50%', backgroundColor: color }} />
          </div>
          <div className="w-[1.5px] h-[5px] rounded-r-[1px] ml-[1px]" style={{ backgroundColor: color }} />
        </div>
      </div>
    </div>
  );
};

export const HomeIndicator: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <div className="flex justify-center pb-2 pt-4">
    <div className="w-[134px] h-[5px] rounded-full" style={{ backgroundColor: light ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)' }} />
  </div>
);

export const PhoneFrame: React.FC<{ children: React.ReactNode; currentScreen: number; isTransitioning: boolean }> = ({ children, currentScreen, isTransitioning }) => {
  return (
    <div className="relative bg-[#1A1A1A] rounded-[55px] p-[12px] shadow-2xl transition-all duration-500 ease-out hover:scale-[1.01]" 
         style={{ width: '393px', height: '852px', boxShadow: '0 50px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)' }}>
      {/* Glare effect */}
      <div className="absolute inset-[1px] rounded-[54px] pointer-events-none z-[60]" style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, transparent 40%)' }} />
      
      {/* Screen Content Container */}
      <div className={`w-full h-full rounded-[47px] overflow-hidden bg-black relative transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`} style={{ boxShadow: 'inset 0 0 2px rgba(0,0,0,0.8)' }}>
        {children}
      </div>

      {/* Physical Buttons */}
      <div className="absolute -left-[2px] top-[180px] w-[3px] h-[32px] bg-[#2A2A2A] rounded-l-full" />
      <div className="absolute -left-[2px] top-[230px] w-[3px] h-[64px] bg-[#2A2A2A] rounded-l-full" />
      <div className="absolute -left-[2px] top-[310px] w-[3px] h-[64px] bg-[#2A2A2A] rounded-l-full" />
      <div className="absolute -right-[2px] top-[250px] w-[3px] h-[90px] bg-[#2A2A2A] rounded-r-full" />
    </div>
  );
};