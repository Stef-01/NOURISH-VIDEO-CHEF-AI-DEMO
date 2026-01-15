import React from 'react';

interface IngredientIconProps {
  type: string;
}

export const IngredientIcon: React.FC<IngredientIconProps> = ({ type }) => {
  const images: Record<string, string> = {
    lentils: "https://images.unsplash.com/photo-1515543904379-3d757afe72e3?auto=format&fit=crop&q=80&w=200",
    spinach: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=200",
    onion: "https://images.unsplash.com/photo-1618512496248-a07fe83aa829?auto=format&fit=crop&q=80&w=200",
    tomato: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=200",
    garlic: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=200",
    ginger: "https://images.unsplash.com/photo-1615485500704-3e995f827d51?auto=format&fit=crop&q=80&w=200",
    yogurt: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=200",
    salt: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=200",
    turmeric: "https://images.unsplash.com/photo-1615485290341-24da95f87990?auto=format&fit=crop&q=80&w=200",
    lemon: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=200",
  };

  const imgSrc = images[type] || images.lentils;

  return (
    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-100 shadow-sm">
      <img src={imgSrc} alt={type} className="w-full h-full object-cover" />
    </div>
  );
};