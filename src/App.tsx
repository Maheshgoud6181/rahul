/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StickerMaker from './components/StickerMaker';
import FeatureGrid from './components/FeatureGrid';
import Pricing from './components/Pricing';
import PortfolioShowcase from './components/PortfolioShowcase';
import AboutRahul from './components/AboutRahul';
import { Sparkles, Heart } from 'lucide-react';

export default function App() {
  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-bg-cream flex flex-col selection:bg-pop-yellow selection:text-fg-slate antialiased overflow-x-hidden">
      
      {/* Absolute floating shapes for wild decoration at page level */}
      <div className="fixed top-24 left-4 h-96 w-4 opacity-5 bg-stripes-pink hidden lg:block -z-10" />
      <div className="fixed top-96 right-4 h-96 w-8 opacity-[0.03] bg-dot-grid hidden lg:block -z-10" />

      {/* Structured Header */}
      <Header onScrollTo={handleScrollTo} />

      {/* Main Core Layout Primitives (Stacked vertically with strict borders) */}
      <main className="flex-1 w-full flex flex-col">
        
        {/* Section 1: Hero collage */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Section 2: Core Philosophy Features */}
        <FeatureGrid />

        {/* Section 2.1: Featured Projects Portfolios */}
        <PortfolioShowcase />

        {/* Section 2.2: Biography About Rahul */}
        <AboutRahul onScrollTo={handleScrollTo} />

        {/* Section 4: Sticker Maker Studio with Persistent Bulletin Wall */}
        {/* <StickerMaker /> */}

        {/* Section 5: Flat Pricing & Tokens Board Grid */}
        <Pricing />

      </main>

      {/* Designer Footnote (Anti Tech-Larping, Humorous and aesthetic) */}
      <footer className="w-full bg-fg-slate text-white border-t-4 border-fg-slate py-12 px-4 md:px-8 relative overflow-hidden select-none">
        {/* Dotted backdrop lines */}
        <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-extrabold text-lg uppercase">
              RAHUL MARS CHRONICLES
            </span>
            <p className="font-mono text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-bold">
              Documentary & YouTube Video Editor • Stories Restructured
            </p>
          </div>

          <div className="flex items-center gap-1.5 font-sans font-semibold text-xs text-slate-300">
            <span>Formulated with absolute joy using</span>
            <div className="w-6 h-6 bg-pop-pink rounded-full flex items-center justify-center border border-fg-slate text-white shadow-[1px_1px_0px_#001D39]">
              <Heart className="w-3.5 h-3.5 fill-white text-white" />
            </div>
            <span>and stories that engage.</span>
          </div>

          <div className="text-center md:text-right font-mono text-[9px] text-slate-400">
            <div>V1.0.0 RELEASE OK</div>
            <div className="mt-1 font-bold">STRICT ACCESS AAA CONTRAST • ALL RIGHTS RESERVED</div>
          </div>

        </div>
      </footer>
      
    </div>
  );
}
