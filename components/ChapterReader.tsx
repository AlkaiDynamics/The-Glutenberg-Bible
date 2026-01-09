import React, { useState } from 'react';
import { CHAPTERS } from '../constants';
import { ChevronLeft, ChevronRight, BookOpen, Feather, Scroll, Wheat, Utensils, Star } from 'lucide-react';

export const ChapterReader: React.FC = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const chapter = CHAPTERS[currentChapterIndex];

  const nextChapter = () => {
    if (currentChapterIndex < CHAPTERS.length - 1) {
      setCurrentChapterIndex(prev => prev + 1);
    }
  };

  const prevChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(prev => prev - 1);
    }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Scroll': return <Scroll size={32} />;
      case 'Wheat': return <Wheat size={32} />;
      case 'Utensils': return <Utensils size={32} />;
      default: return <Feather size={32} />;
    }
  };

  return (
    <div className="flex flex-col h-full parchment-texture text-[#3b2f2f] overflow-hidden relative selection:bg-[#c5a059]/30">
      
      {/* Decorative Borders SVG - visible on large screens */}
      <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block p-8">
        <svg className="w-full h-full border-2 border-[#8c7b65]/20" width="100%" height="100%">
           <defs>
             <pattern id="corner" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
               <path d="M0 0 L30 0 L30 5 L5 5 L5 30 L0 30 Z" fill="#c5a059" />
             </pattern>
           </defs>
           <rect x="10" y="10" width="40" height="40" fill="none" stroke="#c5a059" strokeWidth="2" />
           <rect x="10" y="100%" transform="translate(0, -50)" width="40" height="40" fill="none" stroke="#c5a059" strokeWidth="2" />
        </svg>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-[#3b2f2f]/10 z-30 bg-[#fdfbf7]/60 backdrop-blur-sm">
        <h2 className="text-xl md:text-2xl font-bold text-[#8a3324] flex items-center gap-2 font-[Cinzel Decorative]">
          <BookOpen className="w-6 h-6 text-[#c5a059]" />
          The Glutenberg Bible
        </h2>
        <span className="font-handwriting text-xl text-[#5c4d4d]">Folio {currentChapterIndex + 1}</span>
      </div>

      {/* Main Content: 3 Column Layout for Book Feel */}
      <div className="flex-1 overflow-y-auto w-full scroll-smooth">
        <div className="max-w-7xl mx-auto w-full min-h-full grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12 lg:px-16">
          
          {/* Left Gutter: Decorative Elements & Mottos */}
          <div className="hidden lg:flex lg:col-span-2 flex-col items-center pt-24 opacity-60">
            <div className="h-64 w-[1px] bg-[#c5a059]"></div>
            <div className="my-4 font-serif italic text-xs tracking-widest uppercase text-[#c5a059] [writing-mode:vertical-rl] rotate-180">
              Hic sunt grana
            </div>
            <div className="h-64 w-[1px] bg-[#c5a059]"></div>
          </div>

          {/* Center Column: The Text */}
          <article className="col-span-1 lg:col-span-7 prose prose-stone lg:prose-xl mx-auto font-serif text-justify text-[#3b2f2f]">
            <header className="text-center mb-16 relative">
               <div className="text-[#8a3324] text-sm tracking-[0.3em] uppercase mb-4 font-bold">{chapter.subtitle}</div>
               <h1 className="text-5xl md:text-6xl font-[Cinzel Decorative] text-[#3b2f2f] mb-8">{chapter.title}</h1>
               <div className="flex justify-center items-center gap-4 text-[#c5a059]">
                 <span className="h-[1px] w-24 bg-current"></span>
                 <Star size={16} fill="currentColor" />
                 <span className="h-[1px] w-24 bg-current"></span>
               </div>
            </header>
            
            <div className="leading-loose text-lg relative z-10">
              <span className="drop-cap">{chapter.content.charAt(0)}</span>
              {chapter.content.substring(1)}
            </div>

            {chapter.recipe && (
              <div className="mt-16 mb-12 relative">
                {/* Recipe Card / "Painting" */}
                <div className="relative bg-white p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border-8 border-[#3d322a] rotate-1 transform transition hover:rotate-0 duration-500">
                  <div className="absolute inset-0 border border-[#c5a059] m-1 pointer-events-none z-10"></div>
                  <div className="relative overflow-hidden bg-[#2b231d]">
                     <img 
                        src={chapter.recipe.imageUrl} 
                        alt={chapter.recipe.title}
                        className="w-full h-80 object-cover painting-effect opacity-90"
                      />
                  </div>
                  <div className="p-6 text-center bg-[#fdfbf7]">
                    <h3 className="text-2xl font-[Cinzel Decorative] text-[#8a3324] mb-2">{chapter.recipe.title}</h3>
                    <div className="w-full h-[1px] bg-[#c5a059]/50 mx-auto my-4 w-1/2"></div>
                    <p className="font-handwriting text-xl text-[#5c4d4d]">"{chapter.recipe.description}"</p>
                  </div>
                </div>
                
                {/* Recipe Details */}
                <div className="mt-12 pl-4 border-l-4 border-[#8a3324] ml-2">
                  <h4 className="font-[Cinzel Decorative] text-xl text-[#3b2f2f] mb-4">The Elements</h4>
                  <ul className="list-none space-y-2 mb-8 font-handwriting text-xl">
                    {chapter.recipe.ingredients.map((ing, i) => <li key={i}>~ {ing}</li>)}
                  </ul>

                  <h4 className="font-[Cinzel Decorative] text-xl text-[#3b2f2f] mb-4">The Ritual</h4>
                  <ol className="list-none space-y-4 font-serif">
                    {chapter.recipe.instructions.map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="font-bold text-[#8a3324] font-[Cinzel Decorative] text-lg">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            <div className="flex justify-center mt-16 text-[#c5a059] opacity-50">
               ~ ❦ ~
            </div>
          </article>

          {/* Right Column: Marginalia */}
          <div className="hidden lg:block lg:col-span-3 relative h-full">
            <div className="sticky top-24 space-y-16 pr-8">
              {chapter.marginalia?.map((item) => (
                <div 
                  key={item.id} 
                  className={`flex flex-col gap-2 p-2 ${item.type === 'note' ? 'border-l border-[#8a3324]/30 pl-4' : ''}`}
                  style={{ color: item.color || '#5c4d4d' }}
                >
                  {item.type === 'illustration' && (
                    <div className="text-[#3b2f2f]/80 self-center opacity-80 rotate-3 hover:rotate-12 transition-transform duration-500">
                      {getIcon(item.content)}
                    </div>
                  )}
                  {item.type !== 'illustration' && (
                    <div className="font-handwriting text-xl leading-snug">
                       {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer Navigation */}
      <div className="p-6 border-t border-[#3b2f2f]/10 flex justify-between items-center bg-[#fdfbf7]/80 backdrop-blur-sm z-30">
        <button 
          onClick={prevChapter}
          disabled={currentChapterIndex === 0}
          className={`flex items-center gap-2 px-4 py-2 font-[Cinzel Decorative] transition-colors ${currentChapterIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-[#8a3324] text-[#3b2f2f]'}`}
        >
          <ChevronLeft className="w-5 h-5" /> Previous Folio
        </button>
        
        <div className="hidden md:flex items-center gap-2">
            <div className="h-[1px] w-12 bg-[#3b2f2f]/20"></div>
            <div className="w-2 h-2 rounded-full bg-[#8a3324]"></div>
            <div className="h-[1px] w-12 bg-[#3b2f2f]/20"></div>
        </div>

        <button 
          onClick={nextChapter}
          disabled={currentChapterIndex === CHAPTERS.length - 1}
          className={`flex items-center gap-2 px-4 py-2 font-[Cinzel Decorative] transition-colors ${currentChapterIndex === CHAPTERS.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:text-[#8a3324] text-[#3b2f2f]'}`}
        >
          Next Folio <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};