import React, { useState, useRef } from 'react';
import { Upload, Wand2, Loader2 } from 'lucide-react';
import { convertRecipe } from '../services/gemini';
import ReactMarkdown from 'react-markdown';

export const AlchemistTool: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTransmute = async () => {
    if (!inputText && !selectedFile) return;

    setIsLoading(true);
    setResult('');

    try {
      const input = selectedFile ? selectedFile : inputText;
      const response = await convertRecipe(input);
      setResult(response);
    } catch (error) {
      console.error(error);
      setResult("The transmutation circle was broken. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setInputText(''); // Clear text if file selected
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#fdfbf7] p-6 overflow-y-auto">
      <div className="max-w-3xl mx-auto w-full space-y-8">
        <header className="text-center space-y-4">
          <h2 className="text-4xl font-bold font-[Cinzel Decorative] text-[#2b231d]">The Alchemist's Hearth</h2>
          <p className="text-[#8c7b65] italic font-serif text-lg">
            "Bring me your burdened wheat, your heavy loaves, and I shall breathe new, lighter life into them."
          </p>
        </header>

        <div className="bg-white p-8 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] border border-[#e5e7eb] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5e7e63] via-[#c5a059] to-[#5e7e63]"></div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#5e7e63] uppercase tracking-wider mb-2">
                Upload a Recipe Image
              </label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-[#c5a059]/50 rounded-lg p-8 text-center cursor-pointer hover:bg-[#fdfbf7] transition-colors group"
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept="image/*" 
                  className="hidden" 
                />
                <Upload className="w-10 h-10 mx-auto mb-4 text-[#c5a059] group-hover:scale-110 transition-transform" />
                {selectedFile ? (
                  <p className="text-[#5e7e63] font-medium">{selectedFile.name}</p>
                ) : (
                  <p className="text-[#8c7b65]">Click to upload a parchment (image) of your recipe</p>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500 font-serif italic">Or transcribe the ancient texts</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#5e7e63] uppercase tracking-wider mb-2">
                Paste Recipe Text
              </label>
              <textarea
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                  setSelectedFile(null);
                }}
                placeholder="Paste your gluten-filled recipe here..."
                className="w-full p-4 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#c5a059] focus:border-transparent outline-none h-32 resize-none font-serif bg-[#fdfbf7]"
              />
            </div>

            <button
              onClick={handleTransmute}
              disabled={isLoading || (!inputText && !selectedFile)}
              className="w-full bg-[#2b231d] text-[#fdfbf7] py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#4a3e36] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Transmuting...
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5" /> Transmute to Gluten-Free
                </>
              )}
            </button>
          </div>
        </div>

        {result && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-[#fdfbf7] border-2 border-[#c5a059] p-8 rounded-lg shadow-xl relative">
              <div className="prose prose-stone max-w-none font-serif prose-headings:font-[Cinzel Decorative] prose-headings:text-[#5e7e63]">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#c5a059]"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#c5a059]"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};