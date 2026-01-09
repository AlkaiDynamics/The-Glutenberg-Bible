import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { consultPantry } from '../services/gemini';
import ReactMarkdown from 'react-markdown';

export const PantryOracle: React.FC = () => {
  const [ingredients, setIngredients] = useState('');
  const [constraints, setConstraints] = useState('');
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConsult = async () => {
    if (!ingredients.trim()) return;

    setIsLoading(true);
    setAdvice('');

    try {
      const response = await consultPantry(ingredients, constraints);
      setAdvice(response);
    } catch (error) {
      console.error(error);
      setAdvice("The Oracle is clouded. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#fdfbf7] p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Input Section */}
        <div className="space-y-6">
          <header>
            <h2 className="text-3xl font-bold font-[Cinzel Decorative] text-[#5e7e63] mb-2">The Pantry Oracle</h2>
            <p className="text-[#8c7b65] font-serif">
              "Tell me what remains in your storehouse, and I shall reveal the feast hidden within."
            </p>
          </header>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-[#2b231d] uppercase tracking-wider mb-2">
                Your Provisions
              </label>
              <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="e.g., Rice, half an onion, can of black beans, wilted spinach..."
                className="w-full p-4 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#5e7e63] outline-none h-32 resize-none font-serif bg-white shadow-inner"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#2b231d] uppercase tracking-wider mb-2">
                Constraints (Optional)
              </label>
              <input
                type="text"
                value={constraints}
                onChange={(e) => setConstraints(e.target.value)}
                placeholder="e.g., Quick meal, kid-friendly, spicy..."
                className="w-full p-4 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#5e7e63] outline-none font-serif bg-white shadow-inner"
              />
            </div>

            <button
              onClick={handleConsult}
              disabled={isLoading || !ingredients.trim()}
              className="w-full bg-[#5e7e63] text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#4a634e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Consult the Oracle <Sparkles className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="relative min-h-[400px] md:min-h-[600px] bg-white rounded-lg p-8 shadow-xl border border-[#c5a059]/30 flex flex-col">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="w-24 h-24 text-[#c5a059]" />
          </div>

          {advice ? (
            <div className="animate-in fade-in duration-700 overflow-y-auto custom-scrollbar">
              <div className="prose prose-stone font-serif prose-headings:font-[Cinzel Decorative] prose-headings:text-[#5e7e63] prose-p:leading-relaxed">
                <ReactMarkdown>{advice}</ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center text-[#8c7b65] opacity-60">
              <div className="w-20 h-20 rounded-full border-2 border-[#c5a059] flex items-center justify-center mb-4">
                <span className="text-3xl">?</span>
              </div>
              <p className="font-serif text-lg italic">The Oracle awaits your offering...</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};