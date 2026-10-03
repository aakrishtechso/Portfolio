import React, { useState } from 'react';
import { CONVERSATIONAL_ABOUT, PERSONAL_INFO } from '../data/portfolioData';
import { MessageSquare, Sparkles, ArrowRight, UserCheck, Bot } from 'lucide-react';

export default function About() {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const handleSelectQuestion = (index) => {
    if (index === selectedQuestionIndex) return;
    setIsTyping(true);
    setSelectedQuestionIndex(index);
    setTimeout(() => {
      setIsTyping(false);
    }, 280);
  };

  const currentQA = CONVERSATIONAL_ABOUT[selectedQuestionIndex];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-100">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/80 mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Interactive Conversation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          OKAY, LET'S START WITH ME.
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg">
          No generic third-person biographies. Click any question below to hear my direct, unfiltered answer.
        </p>
      </div>

      {/* Interactive Conversational Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Floating Question Buttons/Bubbles */}
        <div className="lg:col-span-5 space-y-2.5">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
            Choose a question:
          </p>
          {CONVERSATIONAL_ABOUT.map((item, idx) => {
            const isSelected = selectedQuestionIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectQuestion(idx)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between group border ${
                  isSelected
                    ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-900/20 scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-200/90 hover:border-purple-300 hover:bg-purple-50/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                      isSelected
                        ? 'bg-purple-800 text-white'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-purple-100 group-hover:text-purple-700'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-tight">
                    {item.question}
                  </span>
                </div>
                <span
                  className={`text-[11px] font-mono shrink-0 ml-2 ${
                    isSelected ? 'text-purple-200' : 'text-slate-400 group-hover:text-purple-600'
                  }`}
                >
                  {item.shortTag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Conversational Chat-Style Answer Display */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-50 to-white border border-purple-200/90 shadow-sm relative overflow-hidden min-h-[300px] flex flex-col justify-between">
            {/* Chat header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  AP
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>Ajeet Patel</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" title="Online" />
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Direct conversation · Predefined responses
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 font-semibold">
                {currentQA.shortTag}
              </span>
            </div>

            {/* Conversational Stream */}
            <div className="space-y-4 py-2">
              {/* Question bubble (Visitor) */}
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-xs px-4 py-3 bg-purple-600 text-white text-xs sm:text-sm font-semibold shadow-xs">
                  {currentQA.question}
                </div>
              </div>

              {/* Answer bubble (Ajeet) */}
              <div className="flex justify-start">
                <div className="max-w-[92%] rounded-2xl rounded-tl-xs p-5 bg-white border border-purple-200/80 shadow-xs text-slate-800 text-sm sm:text-base leading-relaxed">
                  {isTyping ? (
                    <div className="flex items-center gap-1.5 py-1 text-slate-400 text-xs">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.3s]" />
                      <span className="ml-1 text-slate-400 font-mono">Ajeet is typing...</span>
                    </div>
                  ) : (
                    <p className="font-normal italic">
                      "{currentQA.answer}"
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom conversational prompt */}
            <div className="pt-4 mt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span>Click another question on the left to keep chatting</span>
              <a
                href="#startups"
                className="font-semibold text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-1"
              >
                <span>Explore my startups</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
