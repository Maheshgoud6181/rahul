/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, HelpCircle, Layers, Paintbrush, Heart } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [logoWiggle, setLogoWiggle] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-cream/90 backdrop-blur-md border-b-4 border-fg-slate px-4 py-3 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Playful Geometric Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onScrollTo('hero')}
          onMouseEnter={() => setLogoWiggle(true)}
          onMouseLeave={() => setLogoWiggle(false)}
        >
          {/* Compound shape container: Arch + Square + Circle */}
          <div className="relative flex items-center h-10 w-24 bg-pop-pink border-2 border-fg-slate rounded-lg overflow-hidden shrink-0 shadow-[2px_2px_0px_#001D39]">
            <div className={`absolute top-0 left-0 w-8 h-full bg-accent-violet border-r-2 border-fg-slate transition-transform duration-300 ${logoWiggle ? 'translate-y-1' : ''}`} />
            <div className={`absolute top-1 right-2 w-7 h-7 bg-pop-yellow rounded-full border-2 border-fg-slate transition-transform duration-500 ${logoWiggle ? 'scale-110 rotate-45' : ''} flex items-center justify-center`}>
              <span className="text-xs font-bold font-display">★</span>
            </div>
            <div className="absolute bottom-0 right-10 w-4 h-4 bg-pop-mint border-t-2 border-l-2 border-fg-slate" />
          </div>
          
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg md:text-xl leading-none tracking-tight group-hover:text-accent-violet transition-colors">
              RAHUL SAHA
            </span>
            <span className="font-mono text-[9px] tracking-wider text-muted-text font-bold uppercase">
              Doc & YouTube Video Editor
            </span>
          </div>
        </div>

        {/* Quick Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {/* <button 
            id="nav-btn-playground"
            onClick={() => onScrollTo('sandbox')}
            className="font-display font-bold text-sm hover:text-accent-violet transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Paintbrush className="w-4 h-4" /> Component Playground
          </button> */}
          
          {/* <button 
            id="nav-btn-creator"
            onClick={() => onScrollTo('stickermaker')}
            className="font-display font-bold text-sm hover:text-pop-pink transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" /> Custom Sticker Maker
          </button> */}
          
          <button 
            id="nav-btn-tokens"
            onClick={() => onScrollTo('pricing')}
            className="font-display font-bold text-sm hover:text-pop-yellow transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Layers className="w-4 h-4" /> Pricing & Token Board
          </button>
        </nav>

        {/* Decorative CTA candy button */}
        <div>
          <button
            id="nav-btn-cta"
            onClick={() => onScrollTo('contact')}
            className="relative px-4 py-2 bg-pop-mint text-fg-slate font-display font-extrabold text-sm rounded-full border-2 border-fg-slate shadow-[3px_3px_0px_#001D39] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#001D39] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#001D39] transition-all cursor-pointer flex items-center gap-2"
          >
            Contact Me
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center border border-fg-slate font-bold text-xs shrink-0">
              →
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
