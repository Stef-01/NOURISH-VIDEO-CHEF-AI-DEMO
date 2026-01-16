import React, { useState } from 'react';
import { ScreenProps } from '../../types';
import { StatusBar, HomeIndicator } from '../Layout';
import { IconStar } from '../Icons';

export const Summary: React.FC<ScreenProps> = ({ onNavigate }) => {
    const [rating, setRating] = useState(0);

    return (
        <div className="h-full flex flex-col bg-nourish-cream relative">
            <StatusBar />

            <div className="flex-1 px-6 pt-10 flex flex-col overflow-y-auto no-scrollbar">
                <div className="flex flex-col items-center justify-center mb-8 animate-[scaleIn_0.5s_ease-out]">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-200" />
                            <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="351.86" strokeDashoffset="52.78" className="text-nourish-green" />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-4xl font-bold text-gray-900">85</span>
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Score</span>
                        </div>
                    </div>
                </div>

                <h2 className="text-[28px] font-bold text-gray-900 mb-6 leading-tight text-center">Healthier choices<br />you made today</h2>

                <div className="space-y-4 mb-10">
                    {[
                        { text: 'Hit translucent onions without burning', type: 'good' },
                        { text: 'Improvement: Decrease heat to not burn spices', type: 'improve' },
                        { text: 'Reduced sodium using label-aware swaps', type: 'good' },
                        { text: 'Balanced the meal with Plate Method', type: 'good' }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-3 items-start animate-[fadeInUp_0.5s_ease-out]" style={{ animationDelay: `${i * 100}ms` }}>
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${item.type === 'good' ? 'bg-nourish-green/10' : 'bg-orange-100'}`}>
                                {item.type === 'good' ? (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-nourish-green"><polyline points="20 6 9 17 4 12" /></svg>
                                ) : (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-500"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> // Using plus as generic info, or maybe alert icon
                                )}
                            </div>
                            <p className={`text-[16px] font-medium leading-relaxed ${item.type === 'good' ? 'text-gray-800' : 'text-orange-700'}`}>{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 text-center">
                    <p className="text-gray-500 font-bold uppercase text-[12px] tracking-wider mb-4">Rate session</p>
                    <div className="flex justify-center gap-2 mb-6">
                        {[1, 2, 3, 4, 5].map(r => (
                            <button key={r} onClick={() => setRating(r)}>
                                <IconStar size={32} filled={r <= rating} />
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
                        {['Make it faster', 'Make it spicier', 'Fewer checkpoints'].map(tag => (
                            <button key={tag} className="px-3 py-1.5 rounded-full border border-gray-200 text-[13px] font-medium text-gray-600 hover:bg-gray-50">
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1" />

                <button
                    onClick={() => onNavigate('FINAL_RECOMMENDATIONS')}
                    className="w-full h-[56px] bg-nourish-green text-white rounded-[28px] font-bold text-[17px] shadow-lg mt-6 mb-4"
                >
                    Done
                </button>
            </div>
            <HomeIndicator />
        </div>
    );
};