
import React from 'react';
import { Send, Edit3 } from 'lucide-react';

interface TranslationInputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
  disabled: boolean;
}

const TranslationInput: React.FC<TranslationInputProps> = ({ value, onChange, onSubmit, disabled }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      onSubmit();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden h-full flex flex-col">
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
        <div className="flex items-center gap-2 text-slate-700 font-medium">
          <Edit3 className="w-5 h-5 text-emerald-600" />
          <h2>Your Translation (Portuguese)</h2>
        </div>
      </div>
      
      <div className="flex-grow relative">
        <textarea
          className="w-full h-full p-6 resize-none focus:outline-none focus:ring-inset focus:ring-2 focus:ring-brand-500/20 bg-slate-900 text-white placeholder:text-slate-500 transition-all font-sans text-lg leading-relaxed"
          placeholder="Escreva sua tradução aqui..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        />
        {disabled && (
             <div className="absolute inset-0 bg-slate-50/50 flex items-center justify-center pointer-events-none">
             </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-200 bg-white flex justify-end">
        <button
          onClick={onSubmit}
          disabled={disabled || value.trim().length === 0}
          className={`
            flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-white shadow-md transition-all
            ${disabled || value.trim().length === 0
              ? 'bg-slate-300 cursor-not-allowed'
              : 'bg-brand-600 hover:bg-brand-700 hover:shadow-lg active:transform active:scale-95'
            }
          `}
        >
          <span>Check Translation</span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TranslationInput;
