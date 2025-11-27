import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export const ChatInput: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-50 pb-safe">
      <div className="flex items-center gap-2">
        <button className="bg-blue-600 text-white rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap flex items-center gap-1 shadow-sm hover:bg-blue-700 transition-colors">
          <Sparkles className="w-3 h-3" />
          AI问答
        </button>
        <div className="relative flex-1">
          <input 
            type="text" 
            placeholder="输入问题，对话权威文献"
            className="w-full bg-gray-100 text-gray-800 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-shadow"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-blue-600">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
