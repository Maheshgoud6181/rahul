/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, HelpCircle, Star, Sparkles, Smile, RefreshCw } from 'lucide-react';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const [clickCount, setClickCount] = useState(0);
  const [wiggleState, setWiggleState] = useState(false);

  const starColors = ['bg-pop-yellow', 'bg-pop-pink', 'bg-accent-violet', 'bg-pop-mint'];
  const currentStarColor = starColors[clickCount % starColors.length];

  return (
    <section id="hero" className="relative w-full overflow-hidden py-12 md:py-20 border-b-4 border-fg-slate bg-bg-cream">
      {/* Absolute floating shapes for "Wild Decoration" */}
      <div className="absolute top-10 left-[8%] hidden md:block opacity-75">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="w-14 h-14 bg-pop-yellow border-2 border-fg-slate shadow-pop flex items-center justify-center rounded-xl"
        >
          <Star className="w-6 h-6 text-fg-slate fill-fg-slate" />
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-[5%] hidden lg:block opacity-70">
        <motion.div 
          animate={{ 
            y: [0, -12, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-28 bg-pop-pink border-2 border-fg-slate rounded-t-full shadow-pop flex flex-col justify-end p-2 cursor-pointer"
          onClick={() => setClickCount(prev => prev + 1)}
        >
          <div className="w-full bg-white border border-fg-slate p-1 rounded-sm text-center font-mono text-[9px] font-bold">
            TAP ME
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-[10%] hidden md:block opacity-60">
        <div className="w-16 h-16 bg-dot-grid-light border border-dashed border-fg-slate rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left text block (Stable Grid Area) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-pop-yellow border-2 border-fg-slate rounded-full shadow-[2px_2px_0px_#001D39]"
          >
            <Sparkles className="w-4 h-4 text-fg-slate fill-fg-slate animate-spin" style={{ animationDuration: '4s' }} />
            <span className="font-display font-extrabold text-xs uppercase tracking-wide text-fg-slate">
              DOCUMENTARY & YOUTUBE VIDEO EDITOR
            </span>
          </motion.div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-fg-slate tracking-tight leading-[1.05]">
            I Turn Raw Footage Into <span className="text-white bg-accent-violet px-2 rounded-lg border-2 border-fg-slate inline-block select-none rotate-[-1deg]">Stories</span> That People Watch
          </h1>

          <p className="font-sans font-medium text-base md:text-lg text-fg-slate max-w-xl leading-relaxed">
            I help YouTube creators and brands turn ordinary footage into compelling stories. Transforming raw files with high-retention editing, motion graphics, color grading, and professional sound.
          </p>

          {/* Stats Section Block */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
            <div className="bg-white border-2 border-fg-slate p-3 rounded-xl shadow-[3px_3px_0px_#001D39] text-center">
              <div className="font-display font-extrabold text-2xl text-pop-pink">1+</div>
              <div className="font-mono text-[9px] text-muted-text font-bold uppercase tracking-wider mt-0.5">Year Experience</div>
            </div>
            <div className="bg-white border-2 border-fg-slate p-3 rounded-xl shadow-[3px_3px_0px_#001D39] text-center">
              <div className="font-display font-extrabold text-2xl text-pop-yellow">500+</div>
              <div className="font-mono text-[9px] text-muted-text font-bold uppercase tracking-wider mt-0.5">Videos Edited</div>
            </div>
            <div className="bg-white border-2 border-fg-slate p-3 rounded-xl shadow-[3px_3px_0px_#001D39] text-center">
              <div className="font-display font-extrabold text-2xl text-pop-mint">100K+</div>
              <div className="font-mono text-[9px] text-muted-text font-bold uppercase tracking-wider mt-0.5">Views Secured</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://drive.google.com/drive/folders/10bsPfwp8iRikfhHnm7T28hTRxkLimsB-?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="relative h-12 px-6 bg-accent-violet text-fg-slate font-display font-bold text-sm md:text-base rounded-full border-2 border-fg-slate shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-pop-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-pop-active transition-all cursor-pointer flex items-center gap-3 group"
            >
              <span>View Full Portfolio</span>
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center border border-fg-slate group-hover:rotate-45 transition-transform shrink-0">
                <ArrowRight className="w-4 h-4 text-fg-slate" />
              </div>
            </a>

            <button
              id="hero-btn-pricing"
              onClick={() => onScrollTo('pricing')}
              className="px-6 h-12 bg-transparent text-fg-slate font-display font-bold text-sm md:text-base border-2 border-fg-slate rounded-full hover:bg-pop-yellow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-pop active:translate-y-[1px] active:translate-x-[1px] active:shadow-none transition-all cursor-pointer flex items-center gap-2"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center gap-4 pt-2 text-xs font-mono text-muted-text font-bold uppercase">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-accent-violet border border-fg-slate inline-block" />
              Doc Storytelling
            </span>
            <span className="w-1.5 h-1.5 bg-fg-slate rounded-full" />
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-pop-pink border border-fg-slate inline-block" />
              High Retention
            </span>
          </div>
        </div>

        {/* Right graphical block (Wild Decoration Showcase) */}
        <div className="lg:col-span-5 relative flex justify-center">
          
          {/* Main geometric collage */}
          <div className="w-full max-w-[360px] aspect-[4/5] relative">
            <div className="absolute inset-0 bg-dot-grid rounded-2xl border-2 border-dashed border-fg-slate -z-10 transform rotate-1" />
            
            {/* Base block: White card */}
            <motion.div 
              whileHover={{ rotate: -1, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="absolute top-8 left-4 right-4 bg-white border-4 border-fg-slate rounded-2xl p-6 shadow-pop-lg select-none"
            >
              {/* Card visual capsule */}
              <div className="flex justify-between items-center border-b-2 border-fg-slate pb-3 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-pop-pink border border-fg-slate" />
                  <div className="w-3 h-3 rounded-full bg-pop-yellow border border-fg-slate" />
                  <div className="w-3 h-3 rounded-full bg-pop-mint border border-fg-slate" />
                </div>
                <span className="font-mono text-[9px] font-bold text-muted-text uppercase tracking-wider">
                  TACTILE UNIT // 01
                </span>
              </div>

              {/* Card graphic */}
              <div className="h-32 bg-dot-grid border-2 border-fg-slate rounded-xl relative overflow-hidden mb-4 flex items-center justify-center">
                {/* Wobbly shape sitting in card */}
                <motion.div 
                  animate={{ 
                    borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 40% 60% 40% 60%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-24 h-24 ${currentStarColor} border-2 border-fg-slate flex items-center justify-center cursor-pointer shadow-pop`}
                  onClick={() => setClickCount(prev => prev + 1)}
                  onMouseEnter={() => setWiggleState(true)}
                  onMouseLeave={() => setWiggleState(false)}
                >
                  <Smile className={`w-10 h-10 text-fg-slate ${wiggleState ? 'animate-geo-wiggle' : ''}`} />
                </motion.div>
                
                <span className="absolute bottom-1 right-2 font-mono text-[9px] bg-white border border-fg-slate px-1.5 py-0.5 rounded-sm font-extrabold text-fg-slate">
                  SHAPE SELECTOR
                </span>
              </div>

              {/* Decorative tags */}
              <div className="space-y-2">
                <div className="text-sm font-display font-extrabold text-fg-slate">
                  Tape Reel #001: High Retention Edit
                </div>
                <div className="text-xs font-sans text-muted-text font-medium leading-relaxed">
                  Tap the liquid wave inside to rotate the theme accents! Experience physical offset block shadows with zero-blur.
                </div>
              </div>

              {/* Shadow effect tester */}
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-fg-slate">
                <span className="text-[10px] font-mono font-bold text-muted-text uppercase">
                  WAVE CLICKS: {clickCount}
                </span>
                <span className="inline-flex px-2 py-0.5 bg-pop-mint text-fg-slate font-mono text-[9px] font-extrabold border border-fg-slate rounded">
                  CLICKABLE LIQUID
                </span>
              </div>
            </motion.div>

            {/* Behind layout accents */}
            <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 bg-pop-pink border-2 border-fg-slate text-fg-slate font-display font-bold text-xs p-2 rounded-xl shadow-pop -rotate-6 hidden sm:block">
              100% High Retention! ⚡
            </div>

            <div className="absolute bottom-4 left-[-24px] bg-pop-yellow border-2 border-fg-slate text-fg-slate font-mono text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-pop rotate-6 hidden sm:flex items-center gap-1">
              <span>★</span> story driven
            </div>
          </div>

        </div>

      </div>

      {/* Infinite Scrolling Marquee Banner representing the design's pop signature */}
      <div className="w-full bg-fg-slate text-white border-t-4 border-b-4 border-fg-slate py-3.5 mt-16 overflow-hidden select-none whitespace-nowrap rotate-1 scale-102">
        <div className="flex w-[200%]">
          <div className="animate-marquee flex gap-8 font-display font-extrabold text-lg md:text-xl uppercase shrink-0">
            <span>HIGH-RETENTION EDITING ★</span>
            <span className="text-pop-yellow">CINEMATIC STORYTELLING ★</span>
            <span className="text-pop-pink">DYNAMIC MOTION GRAPHICS ★</span>
            <span className="text-pop-mint">PROFESSIONAL SOUND DESIGN ★</span>
            <span>HIGH-RETENTION EDITING ★</span>
            <span className="text-pop-yellow">CINEMATIC STORYTELLING ★</span>
            <span className="text-pop-pink">DYNAMIC MOTION GRAPHICS ★</span>
            <span className="text-pop-mint">PROFESSIONAL SOUND DESIGN ★</span>
          </div>
          <div className="animate-marquee flex gap-8 font-display font-extrabold text-lg md:text-xl uppercase shrink-0">
            <span>HIGH-RETENTION EDITING ★</span>
            <span className="text-pop-yellow">CINEMATIC STORYTELLING ★</span>
            <span className="text-pop-pink">DYNAMIC MOTION GRAPHICS ★</span>
            <span className="text-pop-mint">PROFESSIONAL SOUND DESIGN ★</span>
            <span>HIGH-RETENTION EDITING ★</span>
            <span className="text-pop-yellow">CINEMATIC STORYTELLING ★</span>
            <span className="text-pop-pink">DYNAMIC MOTION GRAPHICS ★</span>
            <span className="text-pop-mint">PROFESSIONAL SOUND DESIGN ★</span>
          </div>
        </div>
      </div>
    </section>
  );
}
