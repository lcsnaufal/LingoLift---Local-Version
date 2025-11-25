
import React, { useState, useEffect } from 'react';
import { PracticeText, AppStatus } from './types';
import { getRandomText } from './services/gemini';
import ArticleDisplay from './components/ArticleDisplay';
import TranslationInput from './components/TranslationInput';
import FeedbackView from './components/FeedbackView';
import { Languages, Globe2 } from 'lucide-react';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>('translating');
  const [currentText, setCurrentText] = useState<PracticeText | null>(null);
  const [userTranslation, setUserTranslation] = useState<string>('');
  const [seenIds, setSeenIds] = useState<number[]>([]);

  // Function to handle loading the next text
  const handleNext = () => {
    // Get a random text excluding the ones we have already seen
    const nextText = getRandomText(seenIds);
    
    setCurrentText(nextText);
    setUserTranslation('');
    setStatus('translating');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update history
    if (seenIds.includes(nextText.id)) {
        // If the service returned a text we've seen (because the pool reset),
        // we start a new history cycle with just this text.
        setSeenIds([nextText.id]);
    } else {
        // Otherwise, add it to our seen list
        setSeenIds(prev => [...prev, nextText.id]);
    }
  };

  const handleSubmit = () => {
    if (!currentText || !userTranslation.trim()) return;
    setStatus('viewing_results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Initial load
  useEffect(() => {
    // Load the first text on mount
    const initialText = getRandomText([]);
    setCurrentText(initialText);
    setSeenIds([initialText.id]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
               <Globe2 size={20} />
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">LingoLift</h1>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
             <div className="hidden sm:flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                <span>English</span>
             </div>
             <Languages className="w-4 h-4 text-slate-400" />
             <div className="hidden sm:flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>Portuguese</span>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Translation View */}
          {status === 'translating' && (
            <div className="grid lg:grid-cols-2 gap-6 lg:h-[600px]">
              <div className="h-full">
                <ArticleDisplay 
                  text={currentText} 
                  onNewText={handleNext}
                />
              </div>
              <div className="h-full">
                <TranslationInput 
                  value={userTranslation} 
                  onChange={setUserTranslation} 
                  onSubmit={handleSubmit}
                  disabled={!currentText}
                />
              </div>
            </div>
          )}

          {/* Results View */}
          {status === 'viewing_results' && currentText && (
            <FeedbackView 
              text={currentText} 
              userTranslation={userTranslation}
              onNext={handleNext} 
            />
          )}

        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
         <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm flex flex-col items-center gap-2">
            <p>Practice Mode. Translate texts and compare with the reference.</p>
            <p>Contact: <a href="mailto:contact.lingolift@gmail.com" className="hover:text-brand-600 transition-colors font-medium">contact.lingolift@gmail.com</a></p>
         </div>
      </footer>
    </div>
  );
};

export default App;
