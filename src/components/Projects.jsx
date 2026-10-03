import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ExternalLink, ArrowUpRight, Code, Sparkles, CheckCircle2, Play } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-100">
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200/80 mb-3">
          <Code className="w-3.5 h-3.5" />
          <span>Interactive Creations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          HERE'S WHAT I'VE BEEN BUILDING.
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg">
          Focused technical projects engineered for real utility, playful learning, and intuitive performance.
        </p>
      </div>

      {/* Interactive Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl p-7 sm:p-8 bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Top decorative gradient ambient light on hover */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-purple-100/60 to-transparent rounded-full blur-2xl pointer-events-none group-hover:from-purple-200/80 transition-all" />

            <div className="space-y-5 relative z-10">
              {/* Category & Status Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                  {project.categoryBadge}
                </span>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live & Interactive
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Structured What it is / What it does / Why it matters */}
              <div className="space-y-2.5 text-xs text-slate-600 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <strong className="text-slate-900 font-semibold block mb-0.5">
                    What it is:
                  </strong>
                  <span>{project.whatItIs}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <strong className="text-slate-900 font-semibold block mb-0.5">
                    What it does:
                  </strong>
                  <span>{project.whatItDoes}</span>
                </div>

                <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-100 text-purple-900">
                  <strong className="text-purple-950 font-semibold block mb-0.5">
                    Why it matters:
                  </strong>
                  <span>{project.whyItMatters}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions: View Project / Live Demo */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
              <span className="text-xs text-slate-400 font-mono">
                Direct deployment
              </span>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-purple-700 rounded-xl transition-all duration-200 flex items-center gap-1.5 shadow-sm group-hover:shadow-md active:scale-95"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
