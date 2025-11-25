
import React from 'react';
import { PracticeText } from '../types';
import { BookOpen, RefreshCw } from 'lucide-react';

interface ArticleDisplayProps {
  text: PracticeText | null;
  onNewText: () => void;
}

const ArticleDisplay: React.FC<ArticleDisplayProps> = ({ 
  text, 
  onNewText
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-full flex flex-col">
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 text-slate-700 font-medium">
          <BookOpen className="w-5 h-5 text-brand-600" />
          <h2>English Text</h2>
        </div>
        <button
          onClick={onNewText}
          className="text-sm text-slate-500 hover:text-brand-600 flex items-center gap-1 transition-colors whitespace-nowrap"
        >
          <RefreshCw className="w-4 h-4" />
          New Text
        </button>
      </div>
      
      <div className="p-6 flex-grow flex flex-col overflow-y-auto relative">
        {text ? (
           <div className="animate-fade-in">
              <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif leading-tight">
                {text.title}
              </h3>
              <div className="prose prose-slate max-w-none text-slate-700 font-serif text-lg leading-relaxed mb-6">
                <p>{text.englishContent}</p>
              </div>
           </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-slate-400">
            <p>Loading text...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleDisplay;
