
import React, { useState } from 'react';
import { ViewState } from './types';
import { Home } from './components/Home';
import { RecipeGallery } from './components/RecipeGallery';
import { AncientWisdom } from './components/AncientWisdom';
import { TheScribe } from './components/TheScribe';
import { Book, Utensils, Scroll, Feather } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#2b1d16] p-4 md:p-8 relative">
      {/* Outer Leather Binding Effect */}
      <div className="absolute inset-0 bg-[#2b1d16] opacity-90 z-0"></div>
      
      {/* Main Manuscript Container */}
      <div className="relative z-10 w-full h-full flex bg-[#F4F1E8] rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden border-8 border-[#3d2a20]">
        
        {/* Sidebar Navigation (Spine) */}
        <nav className="w-20 md:w-64 bg-[#2b1d16] text-[#E8E0D0] flex-shrink-0 flex flex-col relative shadow-[10px_0_20px_rgba(0,0,0,0.5)] z-20">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
          
          {/* Golden Spine Details */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-[#B8860B] shadow-[0_0_10px_#B8860B]"></div>
          <div className="absolute bottom-16 left-0 right-0 h-[2px] bg-[#B8860B] shadow-[0_0_10px_#B8860B]"></div>

          <div className="p-8 flex flex-col items-center border-b border-[#3d2a20] relative z-10 cursor-pointer" onClick={() => setView(ViewState.HOME)}>
            <div className="w-12 h-12 bg-[#B8860B] rounded-full flex items-center justify-center text-[#1a1612] font-bold font-[Cinzel] text-2xl shadow-lg border-2 border-[#E8E0D0]/20 mb-3 transform hover:scale-110 transition-transform">G</div>
            <h1 className="hidden md:block font-[Cinzel] font-bold text-xl text-[#B8860B] tracking-widest text-center leading-tight drop-shadow-md">
              The<br/>Glutenberg<br/>Bible
            </h1>
          </div>

          <div className="flex-1 py-8 space-y-4 relative z-10">
            <NavButton 
              active={view === ViewState.HOME} 
              onClick={() => setView(ViewState.HOME)} 
              icon={<Book size={24} />} 
              label="The Bible" 
            />
            <NavButton 
              active={view === ViewState.RECIPES} 
              onClick={() => setView(ViewState.RECIPES)} 
              icon={<Utensils size={24} />} 
              label="Sacred Recipes" 
            />
            <NavButton 
              active={view === ViewState.WISDOM} 
              onClick={() => setView(ViewState.WISDOM)} 
              icon={<Scroll size={24} />} 
              label="Ancient Wisdom" 
            />
            <NavButton 
              active={view === ViewState.SCRIBE} 
              onClick={() => setView(ViewState.SCRIBE)} 
              icon={<Feather size={24} />} 
              label="The Scribe" 
            />
          </div>

          <div className="p-6 relative z-10">
            <p className="hidden md:block text-xs text-[#87A96B] font-handwriting text-center leading-relaxed opacity-80">
              "Where ancient wisdom meets modern nourishment"
            </p>
          </div>
        </nav>

        {/* Main Content Area (Pages) */}
        <main className="flex-1 overflow-hidden relative parchment-texture bg-[#F4F1E8]">
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-[6px] border-l-[6px] border-[#B8860B] rounded-tl-3xl opacity-20 pointer-events-none m-4"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-[6px] border-r-[6px] border-[#B8860B] rounded-br-3xl opacity-20 pointer-events-none m-4"></div>
          
          {/* Page Shadow for Depth */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10"></div>

          <div className="relative z-10 h-full overflow-y-auto custom-scrollbar px-2">
            {view === ViewState.HOME && <Home />}
            {view === ViewState.RECIPES && <RecipeGallery />}
            {view === ViewState.WISDOM && <AncientWisdom />}
            {view === ViewState.SCRIBE && <TheScribe />}
          </div>
        </main>
      </div>
    </div>
  );
};

const NavButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 transition-all duration-300 relative group ${
      active 
        ? 'text-[#B8860B] bg-[#1a100c]/50 border-r-4 border-[#B8860B]' 
        : 'text-[#87A96B] hover:text-[#E8E0D0] hover:bg-[#3d2a20]/30'
    }`}
  >
    <span className={`group-hover:scale-110 transition-transform duration-300 drop-shadow-md ${active ? 'scale-110' : ''}`}>{icon}</span>
    <span className={`hidden md:block font-[Cinzel] tracking-wide text-sm ${active ? 'font-bold' : ''}`}>{label}</span>
  </button>
);

export default App;
