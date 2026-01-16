import React from 'react';
import { ScreenProps } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IMAGES } from '../../assets';

export const FinalRecommendations: React.FC<ScreenProps> = ({ onNavigate }) => {
    const sides = [
        { title: 'Aloo Sabji', image: IMAGES.alooSabji, prep: '15 min' },
        { title: 'Baingan Bharta', image: IMAGES.eggplantBaked, prep: '25 min' },
        { title: 'Cucumber Raita', image: IMAGES.cucumberRaita, prep: '5 min' }
    ];

    const education = [
        { title: 'Mastering Aromatics', duration: '3 min read', color: 'bg-orange-100 text-orange-700', image: IMAGES.eduAromatics },
        { title: 'Perfect Curry Gravy', duration: '4 min video', color: 'bg-yellow-100 text-yellow-700', image: IMAGES.eduGravy },
        { title: 'Blood Sugar Impact', duration: '2 min read', color: 'bg-green-100 text-green-700', image: IMAGES.eduBloodSugar }
    ];

    return (
        <div className="h-full flex flex-col bg-white relative">
            <StatusBar />

            <div className="flex-1 overflow-y-auto no-scrollbar pb-8 pt-6">
                <div className="px-6 mb-6">
                    <h2 className="text-[28px] font-bold text-gray-900 leading-tight">Complete your meal</h2>
                    <p className="text-gray-500 text-[16px] mt-1">Recommended pairings for Palak Dal.</p>
                </div>

                {/* Sides Carousel */}
                <div className="relative">
                    <style>{`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-scroll {
                            animation: scroll 20s linear infinite;
                        }
                        .pause-hover:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                    <div className="flex overflow-hidden pb-6 -mx-6 px-6">
                        <div className="flex gap-4 animate-scroll pause-hover w-max">
                            {/* Duplicate items for seamless scrolling */}
                            {[...sides, ...sides, ...sides, ...sides].map((side, i) => (
                                <div key={i} className="w-[180px] flex-shrink-0 bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-300">
                                    <div className="h-[140px] w-full overflow-hidden relative">
                                        <img
                                            src={side.image}
                                            alt={side.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-900 text-[15px] leading-tight mb-1">{side.title}</h3>
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-3 h-3 text-nourish-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="text-gray-500 text-[11px] font-bold uppercase tracking-wider">{side.prep}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="px-6 mt-4 mb-6">
                    <h2 className="text-[24px] font-bold text-gray-900 mb-4">Level up your skills</h2>
                    <div className="space-y-4">
                        {education.map((mod, i) => (
                            <button key={i} className="w-full p-3 rounded-[20px] bg-white border border-gray-100 flex items-center gap-4 group hover:bg-gray-50 transition-colors text-left shadow-sm">
                                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                                    <img src={mod.image} alt={mod.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 text-[15px] leading-tight mb-1">{mod.title}</h3>
                                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${mod.color}`}>
                                        {mod.duration}
                                    </span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-gray-200 transition-colors">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400 group-hover:text-gray-600"><polyline points="9 18 15 12 9 6" /></svg>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="px-6">
                    <div className="p-5 rounded-[24px] bg-nourish-cream border border-[#E6E0D6]">
                        <h3 className="font-bold text-gray-900 text-[16px] mb-2">Did you know?</h3>
                        <p className="text-gray-700 text-[14px] leading-relaxed">
                            Adding a side of fiber-rich vegetables like eggplant to your dal helps stablize blood sugar spikes by 30%.
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-white border-t border-gray-100">
                <button
                    onClick={() => onNavigate('FINAL_CTA')}
                    className="w-full h-[56px] bg-gray-900 text-white rounded-[28px] font-bold text-[17px] shadow-lg active:scale-[0.98] transition-transform"
                >
                    Finish
                </button>
            </div>
            <HomeIndicator />
        </div>
    );
};
