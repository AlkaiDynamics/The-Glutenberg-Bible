import React, { useState } from 'react';
import { RECIPES } from '../constants';
import { Clock, Star } from 'lucide-react';
import { RecipeArt } from './RecipeArt';

export const RecipeGallery: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'quick', 'classic', 'flex', 'dessert', 'snack', 'bread'];

  const filteredRecipes = filter === 'all' 
    ? RECIPES 
    : RECIPES.filter(r => r.category.toLowerCase().includes(filter) || (filter === 'flex' && r.category === 'flex') || (filter === 'quick' && r.category === 'quick'));

  return (
    <div className="p-6 md:p-12 min-h-full pb-32">
      <header className="text-center mb-12">
        <h2 className="text-4xl font-[Cinzel] text-[#722F37] mb-4">Sacred Recipes</h2>
        <p className="text-[#3C2415] italic font-serif">"Nourishment for the body, delight for the soul."</p>
      </header>
      
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full font-[Cinzel] text-sm border-2 transition-all duration-300 ${
              filter === cat 
                ? 'bg-[#722F37] text-[#F4F1E8] border-[#722F37] shadow-md transform scale-105' 
                : 'bg-[#F4F1E8] text-[#3C2415] border-[#B8860B] hover:bg-[#E8E0D0] hover:border-[#722F37]'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="bg-[#F4F1E8] border-2 border-[#B8860B] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group h-full relative">
            <div className="h-48 bg-[#2b231d] relative overflow-hidden flex items-center justify-center border-b-2 border-[#B8860B]">
               {/* Procedural Art Generation */}
               <div className="w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700">
                 <RecipeArt seed={recipe.imageSeed || recipe.id} />
               </div>
               
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3">
                 <span className="text-[#F4F1E8] text-xs font-bold uppercase tracking-widest font-[Cinzel] text-shadow">{recipe.category}</span>
               </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col relative">
              <h3 className="text-xl font-[Cinzel] text-[#722F37] mb-3 leading-tight">{recipe.title}</h3>
              <div className="w-12 h-0.5 bg-[#B8860B] mb-4 opacity-50"></div>
              
              {recipe.quote && (
                <p className="text-xs text-[#87A96B] italic mb-4 font-serif border-l-2 border-[#87A96B]/30 pl-3">
                  "{recipe.quote}"
                </p>
              )}
              
              <p className="text-[#3C2415] text-sm leading-relaxed mb-6 flex-1 font-serif line-clamp-4">
                {recipe.description}
              </p>
              
              <div className="flex justify-between items-center text-xs text-[#5c4d4d] border-t border-[#B8860B]/20 pt-4 mt-auto font-mono-custom">
                <span className="flex items-center gap-2 bg-[#E8E0D0]/50 px-2 py-1 rounded">
                  <Clock size={14} className="text-[#B8860B]" /> {recipe.time}
                </span>
                <span className="flex items-center gap-2 bg-[#E8E0D0]/50 px-2 py-1 rounded">
                  <Star size={14} className="text-[#B8860B]" /> {recipe.difficulty}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};