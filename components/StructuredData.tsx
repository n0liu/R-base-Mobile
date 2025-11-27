import React, { useState } from 'react';
import { TagGroup, KeyValue, TableRow, SectionData } from '../types';
import { User, CheckCircle2, XCircle } from 'lucide-react';

interface StructuredDataProps {
  data: SectionData[];
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  const [selectedId, setSelectedId] = useState(data[0].id);

  const activeData = data.find(d => d.id === selectedId);

  const renderContent = (item: SectionData) => {
    switch (item.type) {
      case 'tags':
        return (
          <div className="space-y-6 pb-4">
            {(item.content as TagGroup[]).map((group, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-sm font-bold text-gray-800">{group.category}</span>
                </div>
                <div className="flex flex-wrap gap-2 pl-3">
                  {group.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-lg border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'key-value':
        return (
          <div className="space-y-1">
            {(item.content as KeyValue[]).map((kv, idx) => (
              <div key={idx} className="py-2 border-b border-gray-50 last:border-0">
                <span className="text-[10px] text-gray-400 block mb-0.5">{kv.label}</span>
                <span className="text-sm font-medium text-gray-800 block leading-tight">{kv.value}</span>
              </div>
            ))}
          </div>
        );

      case 'table':
        return (
          <div className="space-y-3">
            {(item.content as TableRow[]).map((row, idx) => (
              <div key={idx} className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex flex-col gap-2">
                 <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900">{row.col1}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border flex items-center gap-1 ${
                        row.tagType === 'success' ? 'bg-green-100 text-green-700 border-green-200' : 
                        row.tagType === 'danger' ? 'bg-red-100 text-red-700 border-red-200' : 'bg-gray-200 text-gray-600'
                    }`}>
                        {row.tagType === 'success' ? <CheckCircle2 className="w-3 h-3"/> : 
                         row.tagType === 'danger' ? <XCircle className="w-3 h-3"/> : null}
                        {row.tag}
                    </span>
                 </div>
                 <div className="flex flex-col gap-1 text-xs">
                    <div className="flex gap-2">
                        <span className="text-gray-400 w-12 flex-shrink-0">适应症</span>
                        <span className="text-gray-700">{row.col2}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-gray-400 w-12 flex-shrink-0">方法</span>
                        <span className="text-gray-700">{row.col3}</span>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        );
      
      case 'list':
          return (
             <div className="space-y-2">
                {(item.content as string[]).map((user, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                        <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium truncate">{user}</span>
                    </div>
                ))}
             </div>
          );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-full bg-white">
      {/* Left Sidebar - Navigation */}
      <div className="w-[85px] bg-gray-50 flex-shrink-0 overflow-y-auto no-scrollbar pb-10 border-r border-gray-100">
          {data.map((item) => (
          <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`w-full px-2 py-4 flex flex-col items-center justify-center gap-1 transition-all relative ${
              selectedId === item.id
                  ? 'bg-white text-blue-600'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
          >
              {/* Active Indicator Line */}
              {selectedId === item.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r"></div>
              )}
              <span className="text-xs font-medium text-center leading-tight">
                  {item.title}
              </span>
          </button>
          ))}
      </div>

      {/* Right Area - Content */}
      <div className="flex-1 overflow-y-auto p-4 pb-10">
          <div className="animate-fade-in">
              {activeData ? renderContent(activeData) : null}
          </div>
      </div>
    </div>
  );
};