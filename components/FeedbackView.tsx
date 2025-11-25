
import React from 'react';
import { PracticeText } from '../types';
import { CheckCircle, Award, ArrowRight, User, GitBranch } from 'lucide-react';

interface FeedbackViewProps {
  text: PracticeText;
  userTranslation: string;
  onNext: () => void;
}

const FeedbackView: React.FC<FeedbackViewProps> = ({ text, userTranslation, onNext }) => {
  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg border border-brand-100 overflow-hidden">
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-8 text-white flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-300" />
              Correction & Meanings
            </h2>
            <p className="text-brand-100 text-lg opacity-90">Compare your text with the reference below.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border-b border-slate-100">
          {/* User's Version */}
          <div className="p-6 bg-slate-50 border-r border-slate-100">
             <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-4 flex items-center gap-2">
               <User className="w-4 h-4" /> Your Translation
             </h3>
             <p className="text-slate-700 text-lg leading-relaxed font-serif whitespace-pre-wrap">
               {userTranslation}
             </p>
          </div>
          
          {/* Correct Version */}
          <div className="p-6 bg-green-50/30">
             <h3 className="text-sm font-bold text-green-600 uppercase tracking-wide mb-4 flex items-center gap-2">
               <CheckCircle className="w-4 h-4" /> Reference Translation
             </h3>
             <p className="text-slate-800 text-lg leading-relaxed font-serif">
               {text.portugueseContent}
             </p>
          </div>
        </div>
      </div>

      {/* Phrase by Phrase Breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden p-8">
        <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2 border-b pb-4 border-slate-100">
          <span className="w-2 h-6 bg-brand-500 rounded-full"></span>
          Detailed Meanings (Phrase by Phrase)
        </h3>
        
        <div className="grid gap-4">
          {text.segments.map((segment, idx) => (
            <div key={idx} className="group border-b border-slate-50 last:border-0 pb-4 last:pb-0 hover:bg-slate-50 transition-colors rounded-lg p-3">
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                 {/* English */}
                 <div className="flex-1 text-slate-600 font-medium md:pt-1">
                   {segment.english}
                 </div>
                 
                 <ArrowRight className="hidden md:block w-4 h-4 text-slate-300 flex-shrink-0 mt-2" />
                 
                 {/* Portuguese & Alternatives */}
                 <div className="flex-1">
                   <div className="text-brand-700 font-semibold text-lg md:text-base">
                     {segment.portuguese}
                   </div>
                   
                   {segment.alternatives && segment.alternatives.length > 0 && (
                     <div className="mt-2 text-sm text-slate-500 flex flex-col gap-1">
                       <span className="text-xs font-bold text-slate-400 uppercase flex items-center gap-1">
                         <GitBranch className="w-3 h-3" />
                         Outras opções:
                       </span>
                       <ul className="list-disc list-inside space-y-0.5 ml-1">
                         {segment.alternatives.map((alt, i) => (
                           <li key={i} className="text-slate-600 italic">{alt}</li>
                         ))}
                       </ul>
                     </div>
                   )}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center pb-8">
          <button 
            onClick={onNext}
            className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Next Text
          </button>
      </div>
    </div>
  );
};

export default FeedbackView;
