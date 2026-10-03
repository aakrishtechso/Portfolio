import React, { useState } from 'react';
import { ASK_AJEET_QUESTIONS, PERSONAL_INFO } from '../data/portfolioData';
import { MessageCircle, Send, Sparkles, Check, RefreshCw, ArrowRight } from 'lucide-react';

export default function AskAjeet() {
  const [activeQuestionId, setActiveQuestionId] = useState('q-myryedo');
  const [conversationHistory, setConversationHistory] = useState([
    ASK_AJEET_QUESTIONS[0]
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSelectQuestion = (q) => {
    if (activeQuestionId === q.id) return;
    setActiveQuestionId(q.id);
    setIsTyping(true);

    // Add to history if not already present or bring to focus
    setTimeout(() => {
      setConversationHistory((prev) => {
        const withoutCurrent = prev.filter((item) => item.id !== q.id);
        return [...withoutCurrent, q];
      });
      setIsTyping(false);
    }, 280);
  };

  const handleResetChat = () => {
    setActiveQuestionId(ASK_AJEET_QUESTIONS[0].id);
    setConversationHistory([ASK_AJEET_QUESTIONS[0]]);
  };

  const currentQuestion =
    ASK_AJEET_QUESTIONS.find((q) => q.id === activeQuestionId) || ASK_AJEET_QUESTIONS[0];

  return (
    <section id="ask-ajeet" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-100">
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200/80 mb-3">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Personal Dialogue</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          WANT TO ASK ME SOMETHING?
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg">
          Click any question bubble below to start a direct conversation with me. I've personally answered
          the things people ask me most often.
        </p>
      </div>

      {/* Main Conversation Canvas */}
      <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Chat Stream Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              AP
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>Ajeet Patel</span>
                <span className="text-[11px] font-normal text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Active
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                Founder of MyRyedo · Builder of Aakrish Tech
              </p>
            </div>
          </div>

          <button
            onClick={handleResetChat}
            className="text-xs text-slate-400 hover:text-slate-700 flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
            title="Reset conversation"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        {/* Floating / Interactive Question Bubbles Container */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
            Choose what you'd like to ask:
          </span>

          <div className="flex flex-wrap gap-2">
            {ASK_AJEET_QUESTIONS.map((q) => {
              const isSelected = activeQuestionId === q.id;
              return (
                <button
                  key={q.id}
                  onClick={() => handleSelectQuestion(q)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-purple-600 text-white border-purple-600 shadow-xs scale-102 font-semibold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-purple-300 hover:bg-purple-50/60'
                  }`}
                >
                  <span>{q.question}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-purple-200" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Conversation Thread */}
        <div className="space-y-5 p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 min-h-[260px] flex flex-col justify-end">
          {/* Active Question Bubble (Visitor) */}
          <div className="flex justify-end">
            <div className="max-w-[85%] sm:max-w-[75%] rounded-2xl rounded-tr-xs px-5 py-3.5 bg-purple-600 text-white text-xs sm:text-sm font-semibold shadow-xs">
              {currentQuestion.question}
            </div>
          </div>

          {/* Active Response Bubble (Ajeet) */}
          <div className="flex justify-start">
            <div className="max-w-[92%] sm:max-w-[85%] rounded-2xl rounded-tl-xs p-5 sm:p-6 bg-white border border-purple-200 shadow-sm text-slate-800 text-sm sm:text-base leading-relaxed">
              {isTyping ? (
                <div className="flex items-center gap-1.5 py-1 text-slate-400 text-xs">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce [animation-delay:0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce [animation-delay:0.3s]" />
                  <span className="ml-1 text-slate-400 font-mono">Ajeet is writing...</span>
                </div>
              ) : (
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-purple-700 font-bold uppercase tracking-wider block">
                    Ajeet's Answer:
                  </span>
                  <p className="font-normal text-slate-700">
                    "{currentQuestion.answer}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Conversational Call-to-Action */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>Have a specific question not listed here?</span>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>Ask me directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
