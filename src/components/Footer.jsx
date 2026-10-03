import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200 text-xs text-slate-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-bold text-slate-900 text-sm tracking-tight block">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-slate-500">
            Founder of MyRyedo · Builder of Aakrish Tech
          </span>
        </div>

        <div className="flex items-center gap-5 text-xs font-medium">
          <a
            href="#home"
            className="hover:text-purple-600 transition-colors"
          >
            Back to Top ↑
          </a>
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors flex items-center gap-1"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-purple-600 transition-colors"
          >
            Email
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="hover:text-purple-600 transition-colors"
          >
            Phone
          </a>
        </div>

        <div className="text-slate-400">
          © {new Date().getFullYear()} Ajeet Patel · Conversational Portfolio
        </div>
      </div>
    </footer>
  );
}
