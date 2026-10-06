/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Video, Eye, ArrowRight, Star } from 'lucide-react';

interface AboutRahulProps {
  onScrollTo: (sectionId: string) => void;
}

export default function AboutRahul({ onScrollTo }: AboutRahulProps) {
  const driveLink = "https://drive.google.com/drive/folders/10bsPfwp8iRikfhHnm7T28hTRxkLimsB-?usp=drive_link";
  const workstationImg = "/src/assets/images/rahul_editor_workstation_1780165117159.png";

  const stats = [
    {
      label: "Experience",
      value: "1+ Years",
      sub: "Professional Editing",
      color: "bg-pop-pink",
      icon: <Calendar className="w-5 h-5 text-fg-slate" />
    },
    {
      label: "Videos Completed",
      value: "500+",
      sub: "Across Channels",
      color: "bg-pop-yellow",
      icon: <Video className="w-5 h-5 text-fg-slate" />
    },
    {
      label: "Views Generated",
      value: "100K+",
      sub: "Audience Achieved",
      color: "bg-pop-mint",
      icon: <Eye className="w-5 h-5 text-fg-slate" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-bg-cream border-b-4 border-fg-slate relative">
      <div className="absolute inset-0 bg-dot-grid opacity-5 pointer-events-none" />

      {/* Decorative side badge */}
      <div className="absolute top-10 right-4 hidden lg:flex items-center gap-1 bg-white border-2 border-fg-slate text-fg-slate font-mono text-[9px] font-bold px-2 py-1 rounded shadow-[2px_2px_0px_#001D39] rotate-3 select-none">
        <span>★</span> STORYTELLING SPECIALIST
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Core Multi-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editor Workstation Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Background absolute stripes container */}
            <div className="absolute -inset-2 bg-stripes-pink opacity-20 -rotate-1 rounded-2xl border-2 border-fg-slate -z-10" />

            {/* High impact border panel for workstation photo */}
            <div className="relative bg-white border-4 border-fg-slate rounded-2xl overflow-hidden shadow-pop-lg">
              <img
                src={workstationImg}
                alt="Rahul Mars Editing Workstation"
                referrerPolicy="no-referrer"
                className="w-full object-cover aspect-[4/5] object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Dynamic decorative banner overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-fg-slate text-white border-2 border-fg-slate p-3.5 rounded-xl shadow-pop">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-pop-pink rounded-full border border-white animate-ping" />
                    <span className="font-mono text-[8px] tracking-wider uppercase font-extrabold text-slate-300">
                      EDIT SUITE STATE: ONLINE
                    </span>
                  </div>
                  <span className="font-mono text-[9px] font-bold text-pop-yellow">
                    CHRONICLES // 🎬
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative vinyl/stamp ornament poking behind the image */}
            <div className="absolute top-0 left-0 -translate-x-6 -translate-y-6 bg-pop-yellow border-2 border-fg-slate text-fg-slate font-display font-extrabold text-xs p-2 rounded-xl shadow-pop -rotate-12 hidden sm:block">
              RAHUL SAHA 🔥
            </div>

            <div className="absolute bottom-20 right-[-16px] bg-pop-mint border-2 border-fg-slate text-fg-slate font-mono text-[9px] font-bold px-3 py-1.5 rounded-full shadow-pop rotate-6 hidden sm:flex items-center gap-1">
              <span>★</span> story driven
            </div>
          </div>

          {/* Right Column: Bio Content and Stats */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex gap-2 px-3 py-1 bg-pop-pink border-2 border-fg-slate rounded-full shadow-[2px_2px_0px_#001D39]">
                <span className="font-display font-extrabold text-xs uppercase tracking-wide text-white">
                  ABOUT ME
                </span>
              </div>
              
              <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-fg-slate tracking-tight">
                More Than Just An Editor
              </h2>
            </div>

            {/* Structured and elegantly styled copy blocks matching standard fonts and weights */}
            <div className="font-sans font-semibold text-sm md:text-base text-fg-slate leading-relaxed space-y-4">
              <p>
                I'm <span className="text-white bg-accent-violet px-1.5 py-0.5 rounded border border-fg-slate inline-block font-extrabold select-none rotate-[-1deg]">Rahul Saha</span>, a Documentary and YouTube Video Editor passionate about transforming raw footage into engaging stories that people actually watch till the end.
              </p>
              
              <p className="text-slate-600 font-medium text-xs md:text-sm">
                With over <span className="font-bold text-fg-slate underline decoration-pop-pink decoration-2">1 year of editing experience</span> and more than <span className="font-bold text-fg-slate underline decoration-pop-yellow decoration-2">500 videos completed</span>, I specialize in documentary storytelling, YouTube long-form content, motion graphics, sound design, and cinematic editing.
              </p>

              <p className="text-slate-600 font-medium text-xs md:text-sm">
                I've helped creators generate over <span className="font-extrabold text-fg-slate">100K+ views</span> through strategic editing techniques focused strictly on audience retention metrics and visual hook optimizations.
              </p>

              <p className="text-slate-600 font-medium text-xs md:text-sm">
                My approach combines premium creativity, script-to-screen storytelling, rhythmic pacing, and tactical audio alignment to build videos that don't just look spectacular—they perform.
              </p>
            </div>

            {/* Symmetrical Statistics Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white border-2 border-fg-slate p-4 rounded-xl shadow-[3px_3px_0px_#001D39] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] text-muted-text font-extrabold uppercase">
                      {s.label}
                    </span>
                    <div className={`w-8 h-8 rounded-full ${s.color} border border-fg-slate flex items-center justify-center shadow-[1px_1px_0px_#001D39] shrink-0`}>
                      {s.icon}
                    </div>
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-xl md:text-2xl text-fg-slate">
                      {s.value}
                    </div>
                    <div className="font-mono text-[9px] text-muted-text font-bold mt-0.5 uppercase tracking-wide">
                      {s.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom CTA Actions for instant navigation or drive retrieval */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onScrollTo('contact')}
                className="relative h-12 px-6 bg-accent-violet text-white font-display font-extrabold text-sm rounded-full border-2 border-fg-slate shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-pop-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-pop-active transition-all cursor-pointer flex items-center gap-2 group"
              >
                <span>Hire Me</span>
                <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center border border-fg-slate group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-fg-slate" />
                </span>
              </button>

              <a
                href={driveLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 h-12 bg-transparent text-fg-slate font-display font-extrabold text-sm border-2 border-fg-slate rounded-full hover:bg-pop-yellow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-pop active:translate-y-[1px] active:translate-x-[1px] active:shadow-none transition-all cursor-pointer flex items-center gap-2"
              >
                View Portfolio
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
