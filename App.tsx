import React, { useState } from 'react';
import { Header } from './components/Header';
import { ChatInput } from './components/ChatInput';
import { StructuredData } from './components/StructuredData';
import { Drawer } from './components/Drawer';
import { Share2, Star, ChevronRight, LayoutList } from 'lucide-react';
import { PAPER_INFO, AUTHORS, AI_POINTS, FIGURES, INTERPRETATION_TABS, STRUCTURED_DATA } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(INTERPRETATION_TABS[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 overflow-y-auto">
        {/* Paper Title Card */}
        <div className="bg-white p-4 mb-2 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-1.5 py-0.5 rounded border border-blue-100 tracking-wide">ARTICLE</span>
            <span className="text-gray-500 text-xs font-medium">{PAPER_INFO.journal}</span>
            {PAPER_INFO.isOA && <span className="text-red-500 text-[10px] font-bold border border-red-200 px-1 rounded ml-auto">OA</span>}
          </div>

          <h2 className="text-xl font-bold text-gray-900 leading-snug mb-2">
            {PAPER_INFO.title}
          </h2>
          <p className="text-gray-600 text-sm mb-3 leading-relaxed">
            {PAPER_INFO.subTitle}
          </p>
          <p className="text-gray-400 text-xs italic mb-4 font-serif">
            {PAPER_INFO.englishTitle}
          </p>

          <div className="flex items-center justify-between border-t border-gray-100 pt-3">
            <span className="text-[10px] text-gray-400 truncate max-w-[200px] font-mono">{PAPER_INFO.doi}</span>
            <div className="flex gap-4">
              <Share2 className="w-4 h-4 text-gray-400" />
              <Star className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Horizontal Authors Scroll */}
        <div className="bg-white p-4 mb-2 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-gray-800">主要作者</h3>
            <span className="text-xs text-blue-600 flex items-center font-medium">全部 <ChevronRight className="w-3 h-3" /></span>
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-4 pb-1">
            {AUTHORS.map((author, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[64px]">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-1 ${author.color}`}>
                  {author.initial}
                </div>
                <span className="text-xs text-gray-600 text-center truncate w-full">{author.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Key Points Section */}
        <div className="bg-white p-4 mb-2 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              AI要点总结
            </h3>
            <span className="text-[10px] text-gray-400 flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
               AI 生成
            </span>
          </div>

          <div className="flex overflow-x-auto no-scrollbar gap-2 mb-4">
            {INTERPRETATION_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  activeTab === tab 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="space-y-4">
            {AI_POINTS.map((point) => (
              <div key={point.id} className="flex gap-3 group">
                <div className="flex-shrink-0 w-5 h-5 rounded bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center text-xs font-bold mt-0.5">
                  {point.id}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800 mb-1">{point.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed text-justify">
                    {point.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Figures Carousel */}
        <div className="bg-white p-4 mb-2 shadow-sm">
          <h3 className="text-sm font-bold text-gray-800 mb-3">配图/图注</h3>
          <div className="flex overflow-x-auto no-scrollbar gap-3">
            {FIGURES.map((fig) => (
              <div key={fig.id} className="min-w-[140px] flex flex-col">
                <div className={`w-full h-24 ${fig.placeholderColor} rounded-lg mb-2 flex items-center justify-center border border-gray-100`}>
                  <span className="text-2xl font-bold text-slate-400">{fig.label}</span>
                </div>
                <span className="text-xs text-center text-gray-500 font-medium">{fig.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer spacing for sticky input */}
        <div className="h-16"></div>
      </main>

      {/* Floating Action Button for Structured Data */}
      <button 
        onClick={() => setIsDrawerOpen(true)}
        className="fixed bottom-20 right-4 z-40 bg-white text-blue-600 px-4 py-2.5 rounded-full shadow-lg border border-blue-100 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
      >
        <LayoutList className="w-5 h-5" />
        <span className="text-sm font-bold">结构化解读</span>
      </button>

      {/* Slide-out Drawer */}
      <Drawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        title="结构化解读"
      >
        <StructuredData data={STRUCTURED_DATA} />
      </Drawer>

      <ChatInput />
    </div>
  );
};

export default App;