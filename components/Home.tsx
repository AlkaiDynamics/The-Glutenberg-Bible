import React from 'react';
import { AlchemistTool } from './AlchemistTool';

export const Home: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center text-center p-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto border-4 border-[#B8860B] p-8 md:p-12 bg-[#F4F1E8]/90 shadow-2xl rounded-lg animate-float">
          <h1 className="text-5xl md:text-7xl font-[Cinzel] text-[#722F37] mb-4 drop-shadow-sm">The Glutenberg Bible</h1>
          <p className="text-xl md:text-2xl font-serif italic text-[#3C2415] mb-8">Ancient Wisdom for Modern Gluten-Free Living</p>
          <div className="flex items-center justify-center gap-4 text-[#B8860B]">
            <span className="h-px w-12 bg-current"></span>
            <span className="text-2xl">✦</span>
            <span className="h-px w-12 bg-current"></span>
          </div>
        </div>
      </div>

      {/* Transformation Tool Section */}
      <div className="bg-gradient-to-b from-[#E8E0D0] to-[#F4F1E8] flex-1 p-6 md:p-12" id="alchemist">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-[Cinzel] text-[#722F37] mb-4">The Recipe Transformation Alchemist</h2>
          <p className="text-[#87A96B] font-serif italic">Turn leaden loaves into golden, gluten-free sustenance.</p>
        </div>
        
        <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-[#B8860B]">
            <AlchemistTool />
        </div>
      </div>
    </div>
  );
};