import React from 'react';
import { Menu, Search, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-blue-600 tracking-tight">R<span className="text-blue-400 mx-0.5">•</span>base</h1>
        <span className="bg-blue-50 text-blue-600 text-[10px] px-2 py-0.5 rounded-full border border-blue-100">文献</span>
      </div>
      <div className="flex items-center gap-4 text-gray-500">
        <Search className="w-5 h-5" />
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-sm font-semibold text-gray-600">U</span>
        </div>
      </div>
    </header>
  );
};
