import React, { useState } from 'react';
import { STARTUPS_DATA } from '../data/portfolioData';
import {
  Car,
  Key,
  ShieldCheck,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Layers,
  Palette,
  TrendingUp,
  Cpu,
  Bot
} from 'lucide-react';

export default function Startups() {
  const { myryedo, aakrishTech } = STARTUPS_DATA;
  const [activeRenterDuration, setActiveRenterDuration] = useState('1 Day');
  const [activeRoleTab, setActiveRoleTab] = useState('renter'); // 'renter' or 'owner'

  const aakrishIcons = [
    Globe,
    Smartphone,
    Layers,
    Palette,
    TrendingUp,
    CheckCircle2,
    Bot
  ];

  return (
    <section id="startups" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-100">
      {/* Main Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200/80 mb-3">
          <Car className="w-3.5 h-3.5" />
          <span>Ventures & Products</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          STARTUPS
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl text-base sm:text-lg">
          These aren't just coding projects. These are actual products and ventures I've conceptualized,
          architected, and built from the ground up.
        </p>
      </div>

      <div className="space-y-20">
        {/* ========================================================================= */}
        {/* STARTUP 01 — MyRyedo */}
        {/* ========================================================================= */}
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/50 border-2 border-purple-200/90 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          {/* Top Pill & Founder Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-600 text-white shadow-xs">
                STARTUP 01
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                ● {myryedo.status}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-500 font-medium hidden sm:inline-block">
                Role: {myryedo.myRole}
              </span>
              <a
                href={myryedo.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white transition-colors flex items-center gap-1 shadow-xs"
              >
                <span>Visit myryedo.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Headline & Subheadline */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                {myryedo.name}
              </h3>
              <a
                href={myryedo.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-purple-700 hover:underline flex items-center gap-1"
              >
                <span>https://myryedo.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 mt-1">
              {myryedo.subheadline}
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-4 max-w-3xl">
              “{myryedo.description}”
            </p>
          </div>

          {/* Interactive Role Switcher */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-xs mb-8">
            <button
              onClick={() => setActiveRoleTab('renter')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                activeRoleTab === 'renter'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              FOR RENTERS
            </button>
            <button
              onClick={() => setActiveRoleTab('owner')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                activeRoleTab === 'owner'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              FOR VEHICLE OWNERS
            </button>
          </div>

          {/* Two Interactive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Card 1: For Vehicle Owners */}
            <div
              onClick={() => setActiveRoleTab('owner')}
              className={`p-6 sm:p-7 rounded-2xl transition-all duration-200 cursor-pointer border ${
                activeRoleTab === 'owner'
                  ? 'bg-white border-purple-500 shadow-md ring-2 ring-purple-100'
                  : 'bg-white/80 border-slate-200/90 hover:border-purple-300'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Key className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-purple-700 font-semibold bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                  {myryedo.forOwners.badge}
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {myryedo.forOwners.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                “{myryedo.forOwners.text}”
              </p>

              <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-500">
                {myryedo.forOwners.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: For Renters */}
            <div
              onClick={() => setActiveRoleTab('renter')}
              className={`p-6 sm:p-7 rounded-2xl transition-all duration-200 cursor-pointer border ${
                activeRoleTab === 'renter'
                  ? 'bg-white border-purple-500 shadow-md ring-2 ring-purple-100'
                  : 'bg-white/80 border-slate-200/90 hover:border-purple-300'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  <Car className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-indigo-700 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                  {myryedo.forRenters.badge}
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {myryedo.forRenters.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                “{myryedo.forRenters.text}”
              </p>

              {/* Duration Pills selector demo */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-400 block font-semibold">
                  Select Rental Duration:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {myryedo.forRenters.durations.map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveRenterDuration(d);
                      }}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-lg transition-colors border ${
                        activeRenterDuration === d
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-indigo-50'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Philosophy Banner */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-purple-200/80 shadow-xs mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-purple-700 uppercase block mb-1">
                {myryedo.philosophyTitle}
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {myryedo.philosophyTagline}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-purple-50 text-purple-900 border border-purple-200">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>{myryedo.launchNote}</span>
            </div>
          </div>

          {/* Bottom Card Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/70 text-xs">
            <div className="flex flex-wrap items-center gap-1.5 text-slate-500 font-mono">
              <span className="text-slate-400">Stack:</span>
              {myryedo.technologies.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={myryedo.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>Explore Live Platform</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STARTUP 02 — Aakrish Tech */}
        {/* ========================================================================= */}
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white shadow-xl relative overflow-hidden">
          {/* Top Pill & Founder Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-indigo-500 text-white shadow-xs">
                STARTUP 02
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-200 border border-slate-700">
                Digital Agency & Ventures
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400 font-medium hidden sm:inline-block">
                Role: {aakrishTech.myRole}
              </span>
              <a
                href={aakrishTech.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1 shadow-xs"
              >
                <span>Visit aakrish.vercel.app</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Headline & Subheadline */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                {aakrishTech.name}
              </h3>
              <a
                href={aakrishTech.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-indigo-300 hover:underline flex items-center gap-1"
              >
                <span>https://aakrish.vercel.app</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-blue-300 mt-1 tracking-wider uppercase">
              {aakrishTech.subheadline}
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-4 max-w-3xl">
              “{aakrishTech.description}”
            </p>
            <p className="text-sm font-semibold text-purple-300 mt-2">
              {aakrishTech.mission}
            </p>
          </div>

          {/* What Aakrish Tech Works On (7 Core Pillars) */}
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-4 font-semibold">
              WHAT AAKRISH TECH DELIVERS FOR BUSINESSES:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {aakrishTech.capabilities.map((item, index) => {
                const IconComponent = aakrishIcons[index % aakrishIcons.length];
                return (
                  <div
                    key={item.name}
                    className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-indigo-400/80 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-indigo-900/60 text-indigo-300 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{item.name}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Agency Call-to-Action Bottom Banner */}
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">Need to build, improve, or grow digitally?</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Let's turn your business objectives into high-performing websites, web apps, and automated workflows.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={aakrishTech.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Launch Aakrish Tech</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
