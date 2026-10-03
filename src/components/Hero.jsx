import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, ArrowUpRight, MessageCircle, Rocket, Code2, FileText, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="flex flex-col items-start">
        {/* Conversational Greeting Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-xs font-semibold text-purple-800 mb-6">
          <span className="text-sm">👋</span>
          <span>HEY, I'M AJEET.</span>
        </div>

        {/* Powerful Gradient Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance">
          I turn ideas into real <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600">
            digital products & growth ventures.
          </span>
        </h1>

        {/* Supporting Conversational Narrative */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
          Founder of <strong className="text-slate-900 font-semibold">MyRyedo</strong> and builder of{' '}
          <strong className="text-slate-900 font-semibold">Aakrish Tech</strong>. I specialize in web development,
          digital marketing, and AI-powered solutions that people actually use.
        </p>

        {/* Clear Action CTAs */}
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-purple-700 rounded-xl transition-all duration-200 shadow-sm flex items-center gap-2 active:scale-98"
          >
            <Code2 className="w-4 h-4 text-purple-300" />
            <span>View My Work</span>
          </a>

          <a
            href="#startups"
            className="px-5 py-3.5 text-sm font-semibold text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl transition-all flex items-center gap-2 active:scale-98"
          >
            <Rocket className="w-4 h-4 text-purple-600" />
            <span>Explore Startups</span>
          </a>

          <div className="inline-flex rounded-xl bg-slate-100 p-0.5 border border-slate-200">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-white rounded-lg transition-all flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Ajeet_Patel_Resume.pdf"
              className="px-3 py-3 text-sm font-semibold text-purple-700 hover:text-purple-900 hover:bg-white rounded-lg transition-all flex items-center gap-1"
              title="Download Resume PDF"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </a>
          </div>

          <a
            href="#contact"
            className="px-5 py-3.5 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all flex items-center gap-1.5"
          >
            <span>Let's Connect</span>
          </a>
        </div>

        {/* Bottom Status / Value Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-400 block font-mono">PRODUCT</span>
            <span className="font-semibold text-slate-900 mt-0.5 block">MyRyedo (Now Live)</span>
          </div>
          <div>
            <span className="text-slate-400 block font-mono">AGENCY</span>
            <span className="font-semibold text-slate-900 mt-0.5 block">Aakrish Tech</span>
          </div>
          <div>
            <span className="text-slate-400 block font-mono">DISCIPLINES</span>
            <span className="font-semibold text-slate-900 mt-0.5 block">Web · Marketing · AI</span>
          </div>
          <div>
            <span className="text-slate-400 block font-mono">CONVERSATION</span>
            <span className="font-semibold text-emerald-600 mt-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to talk
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
