import React from 'react';
import { SCRIBE_STORY } from '../constants';
import { Feather } from 'lucide-react';

export const TheScribe: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 md:p-12 pb-32">
      <div className="text-center mb-12">
        <div className="w-24 h-24 bg-[#722F37] rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-[#B8860B] shadow-xl">
          <Feather className="w-12 h-12 text-[#F4F1E8]" />
        </div>
        <h2 className="text-4xl font-[Cinzel] text-[#722F37] mb-2">The Scribe</h2>
        <div className="h-1 w-24 bg-[#B8860B] mx-auto opacity-50"></div>
      </div>

      <div className="bg-[#F4F1E8] border-2 border-[#B8860B] p-8 md:p-12 rounded-lg shadow-lg relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#87A96B] via-[#B8860B] to-[#722F37]"></div>
        
        <div className="prose prose-stone max-w-none font-serif text-lg leading-relaxed text-[#3C2415]">
          {SCRIBE_STORY.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 first-letter:text-5xl first-letter:font-[Cinzel] first-letter:text-[#722F37] first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="text-[#B8860B] text-2xl font-[Cinzel]">~ ❧ ~</div>
        </div>
      </div>
    </div>
  );
};