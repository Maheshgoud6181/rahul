/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Film, Youtube, Sparkles, SlidersHorizontal, Music, Zap } from 'lucide-react';

interface FeatureCardProps {
  key?: React.Key | string;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  accentShadow: string;
  index: number;
}

function FeatureCard({ title, description, badge, badgeColor, icon, accentShadow, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 120, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`relative bg-white border-4 border-fg-slate rounded-2xl p-6 shadow-pop hover:shadow-[8px_8px_0px_#001D39] transition-all flex flex-col justify-between overflow-hidden group`}
    >
      {/* Absolute dot grid texture overlay inside cards */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03] pointer-events-none" />

      {/* Circle div containing icon */}
      <div className="flex justify-between items-start mb-6">
        <div className={`w-12 h-12 rounded-full ${badgeColor} border-2 border-fg-slate flex items-center justify-center text-fg-slate shadow-[2px_2px_0px_#001D39] group-hover:animate-geo-wiggle`}>
          {icon}
        </div>
        
        <span className="font-mono text-[9px] bg-fg-slate text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">
          {badge}
        </span>
      </div>

      <div className="space-y-3">
        <h3 className="font-display font-extrabold text-xl text-fg-slate group-hover:text-accent-violet transition-colors">
          {title}
        </h3>
        <p className="font-sans font-medium text-xs md:text-sm text-muted-text leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative indicator lines */}
      <div className="border-t-2 border-dashed border-slate-200 mt-6 pt-4 flex items-center justify-between">
        <span className="font-mono text-[10px] text-muted-text uppercase font-bold">
          Feature // 0{index + 1}
        </span>
        <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  );
}

export default function FeatureGrid() {
  const features = [
    {
      title: "Documentary Editing",
      description: "Story-driven high-end editing crafted with research-based narratives and cinematic pacing that builds real retention.",
      badge: "Storytelling",
      badgeColor: "bg-accent-violet",
      accentShadow: "#7CBCE8",
      icon: <Film className="w-5 h-5 text-fg-slate stroke-[2.5px]" />
    },
    {
      title: "YouTube Long-Form",
      description: "Retention-focused cuts and engagement optimizations designed to hook viewers instantly and keep them watching.",
      badge: "Engagement",
      badgeColor: "bg-pop-pink",
      accentShadow: "#F472B6",
      icon: <Youtube className="w-5 h-5 text-fg-slate stroke-[2.5px]" />
    },
    {
      title: "Motion Graphics",
      description: "Dynamic typographic titles, stylized lower thirds, map tracking, callouts, and animated layout structures.",
      badge: "Style Assets",
      badgeColor: "bg-pop-yellow",
      accentShadow: "#FBBF24",
      icon: <Sparkles className="w-5 h-5 text-fg-slate stroke-[2.5px]" />
    },
    {
      title: "Color Grading",
      description: "Cinematic digital look, balanced skin tones, custom color profiles, and consistent styles across different cameras.",
      badge: "Aesthetic",
      badgeColor: "bg-pop-mint",
      accentShadow: "#34D399",
      icon: <SlidersHorizontal className="w-5 h-5 text-fg-slate stroke-[2.5px]" />
    },
    {
      title: "Sound Design",
      description: "Detailed audio mixing, atmospheric context, strategic royalty-free music overlays, and realistic foley/sound effects.",
      badge: "Audio FX",
      badgeColor: "bg-accent-violet",
      accentShadow: "#7CBCE8",
      icon: <Music className="w-5 h-5 text-fg-slate stroke-[2.5px]" />
    },
    {
      title: "Content Optimization",
      description: "Comprehensive viewer retention reviews, narrative pacing checks, and storytelling edits for organic YouTube algorithm gains.",
      badge: "Optimization",
      badgeColor: "bg-pop-pink",
      accentShadow: "#F472B6",
      icon: <Zap className="w-5 h-5 text-fg-slate stroke-[2.5px]" />
    }
  ];

  return (
    <section id="features" className="py-20 bg-white border-b-4 border-fg-slate relative">
      <div className="absolute inset-0 bg-dot-grid opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Title layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div className="max-w-xl">
            <div className="inline-flex gap-2 px-3 py-1 bg-pop-mint border-2 border-fg-slate rounded-full shadow-[2px_2px_0px_#001D39] mb-4">
              <span className="font-display font-extrabold text-xs uppercase tracking-wide text-fg-slate">
                High-Impact Production
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-fg-slate tracking-tight">
              Six Pillars of Engaging Storytelling
            </h2>
            <p className="font-sans font-medium text-muted-text text-sm md:text-base mt-2">
              Combining research-backed narrative structures with high-energy visuals to turn ordinary footage into irresistible videos.
            </p>
          </div>

          <div className="h-10 px-4 bg-bg-cream border-2 border-fg-slate rounded-full flex items-center justify-center font-mono text-xs font-extrabold text-fg-slate shadow-[2px_2px_0px_#001D39]">
            RETENTION FIRST WORKFLOW ★
          </div>
        </div>

        {/* 6 cards connecting via responsive structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {features.map((f, i) => (
            <FeatureCard
              key={f.title}
              title={f.title}
              description={f.description}
              badge={f.badge}
              badgeColor={f.badgeColor}
              accentShadow={f.accentShadow}
              icon={f.icon}
              index={i}
            />
          ))}
        </div>

        {/* Dynamic visual rule widget */}
        <div className="mt-16 bg-bg-cream border-4 border-fg-slate rounded-2xl p-6 shadow-pop relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid-light opacity-25 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-pop-yellow rounded-full border-2 border-fg-slate flex items-center justify-center text-2xl shadow-[2.5px_2.5px_0px_#001D39] shrink-0">
                💡
              </div>
              <div>
                <h4 className="font-display font-extrabold text-base text-fg-slate">
                  Storyteller's Visual Guarantee
                </h4>
                <p className="font-sans font-semibold text-xs text-muted-text mt-0.5 max-w-xl">
                  Every sequence, edit point, static image composition, sound wave pacing, and animated title asset is built focused primarily on viewer duration metrics and conversion.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="px-3.5 py-1.5 bg-white border-2 border-fg-slate rounded-full font-mono text-xs font-bold text-fg-slate shadow-[2px_2px_0px_#001D39]">
                Cinematic Pace
              </span>
              <span className="px-3.5 py-1.5 bg-white border-2 border-fg-slate rounded-full font-mono text-xs font-bold text-fg-slate shadow-[2px_2px_0px_#001D39]">
                Clean Soundscapes
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
