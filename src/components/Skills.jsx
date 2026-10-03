import React from 'react';
import { SKILLS } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-100">
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
          Skills & Technologies
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          What I work with every day.
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl text-base">
          A focused stack of modern tools, languages, and strategic frameworks I use to engineer products
          and scale ventures.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SKILLS.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-purple-200 transition-colors"
          >
            <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              {skillGroup.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/60 hover:bg-purple-50 hover:text-purple-800 hover:border-purple-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
