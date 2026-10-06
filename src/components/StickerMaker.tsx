/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trash2, Heart, Plus, Share2, Layers, Smile, Stamp, HelpCircle } from 'lucide-react';
import { SHAPES, PATTERNS, EMOJIS, COLOR_THEMES } from '../utils';
import { StickerConfig, CustomSticker, ColorScheme } from '../types';

export default function StickerMaker() {
  // Config state
  const [shape, setShape] = useState('speech-bubble');
  const [color, setColor] = useState<ColorScheme>('pink');
  const [pattern, setPattern] = useState('dot-grid');
  const [title, setTitle] = useState('Mars Edits!');
  const [subtitle, setSubtitle] = useState('Stories Restructured');
  const [rotation, setRotation] = useState(-3);
  const [selectedEmoji, setSelectedEmoji] = useState('🎬');
  
  // Bulletin Wall state with persistent LocalStorage
  const [stickers, setStickers] = useState<CustomSticker[]>([]);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('geoplay-stickers');
    if (saved) {
      try {
        setStickers(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load stickers', e);
      }
    } else {
      // Default initial wall items
      const defaults: CustomSticker[] = [
        {
          id: 'def-1',
          config: {
            shape: 'speech-bubble',
            color: 'violet',
            pattern: 'dot-grid',
            title: 'Documentary Edit',
            subtitle: '100% Story Centered',
            stickerStyle: 'flat',
            rotation: 4,
            emoji: '🎬'
          },
          createdAt: new Date().toISOString()
        },
        {
          id: 'def-2',
          config: {
            shape: 'badge-arch',
            color: 'yellow',
            pattern: 'grid-lines',
            title: 'Retention King',
            subtitle: 'Viewer Hook Active',
            stickerStyle: 'flat',
            rotation: -5,
            emoji: '🔥'
          },
          createdAt: new Date().toISOString()
        }
      ];
      setStickers(defaults);
      localStorage.setItem('geoplay-stickers', JSON.stringify(defaults));
    }
  }, []);

  const saveToWall = () => {
    const newSticker: CustomSticker = {
      id: 'st-' + Date.now(),
      config: {
        shape,
        color,
        pattern,
        title: title || 'Awesome Idea',
        subtitle: subtitle || 'Design System',
        stickerStyle: 'flat',
        rotation,
        emoji: selectedEmoji
      },
      createdAt: new Date().toISOString()
    };

    const updated = [newSticker, ...stickers];
    setStickers(updated);
    localStorage.setItem('geoplay-stickers', JSON.stringify(updated));

    // Blow celebratory scale effect
    setCelebrate(true);
    setTimeout(() => {
      setCelebrate(false);
    }, 1200);
  };

  const deleteSticker = (id: string) => {
    const updated = stickers.filter(item => item.id !== id);
    setStickers(updated);
    localStorage.setItem('geoplay-stickers', JSON.stringify(updated));
  };

  const clearWall = () => {
    if (window.confirm('Are you sure you want to clear your collection wall?')) {
      setStickers([]);
      localStorage.removeItem('geoplay-stickers');
    }
  };

  const activeShapeConfig = SHAPES.find(s => s.id === shape) || SHAPES[0];
  const activePatternConfig = PATTERNS.find(p => p.id === pattern) || PATTERNS[0];
  const activeTheme = COLOR_THEMES[color];

  return (
    <section id="stickermaker" className="py-20 bg-bg-cream border-b-4 border-fg-slate relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Module title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex gap-2 px-3 py-1 bg-accent-violet border-2 border-fg-slate rounded-full shadow-[2px_2px_0px_#001D39] mb-4">
              <span className="font-display font-extrabold text-xs uppercase tracking-wide text-white">
                CREATIVE STUDIO
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-fg-slate tracking-tight">
              Interactive Video Stamp Creator
            </h2>
            <p className="font-sans font-medium text-muted-text text-sm md:text-base mt-2 max-w-xl">
              Construct mock assets, retention badges, and watermark stamps by tweaking shape edges, patterns, and custom colors!
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-muted-text">STORYTELLER PORTFOLIO •</span>
            <span className="w-2.5 h-2.5 bg-pop-pink rounded-full border border-fg-slate inline-block" />
          </div>
        </div>

        {/* Studio Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-white border-4 border-fg-slate rounded-2xl p-6 shadow-pop-lg">
            
            <div className="border-b-2 border-fg-slate pb-4 mb-6 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Stamp className="w-5 h-5 text-accent-violet stroke-[2.5px]" />
                <span className="font-display font-extrabold text-sm uppercase text-fg-slate">
                  Sticker Blueprint Setup
                </span>
              </div>
              <span className="font-mono text-[10px] text-muted-text font-bold bg-muted-slate px-2 py-0.5 rounded border border-fg-slate">
                LAYOUT ENGINE v0.4
              </span>
            </div>

            <div className="space-y-6">
              
              {/* Row 1: Titles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <label className="font-display font-extrabold text-xs uppercase tracking-wider text-fg-slate">
                    Sticker Title Label
                  </label>
                  <input
                    type="text"
                    maxLength={20}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="px-4 py-2.5 bg-bg-cream/40 border-2 border-fg-slate rounded-xl text-sm font-bold text-fg-slate focus:outline-none focus:bg-white focus:shadow-pop transition-all"
                    placeholder="E.g., Super Fly"
                  />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className="font-display font-extrabold text-xs uppercase tracking-wider text-fg-slate">
                    Sub-Badge Description
                  </label>
                  <input
                    type="text"
                    maxLength={24}
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="px-4 py-2.5 bg-bg-cream/40 border-2 border-fg-slate rounded-xl text-sm font-bold text-fg-slate focus:outline-none focus:bg-white focus:shadow-pop transition-all"
                    placeholder="E.g., Est. 1989"
                  />
                </div>
              </div>

              {/* Row 2: Primative Shape Selector */}
              <div className="space-y-2">
                <label className="font-display font-extrabold text-xs uppercase tracking-wider text-fg-slate block">
                  Select Primitive Corner Base Geometry
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {SHAPES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setShape(s.id)}
                      className={`py-3.5 px-2 rounded-xl border-2 border-fg-slate text-center font-display font-extrabold text-xs transition-all cursor-pointer shadow-[2px_2px_0px_#001D39] ${shape === s.id ? 'bg-pop-pink text-white translate-x-[-1px] translate-y-[-1px] shadow-[3px_3px_0px_#001D39]' : 'bg-white hover:bg-muted-slate text-fg-slate'}`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 3: Color Palette rotate */}
              <div className="space-y-2">
                <label className="font-display font-extrabold text-xs uppercase tracking-wider text-fg-slate block">
                  Confetti Color Saturation
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(Object.keys(COLOR_THEMES) as ColorScheme[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`h-11 rounded-full border-2 border-fg-slate font-display font-extrabold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#001D39] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#001D39] transition-all capitalize ${COLOR_THEMES[c].bg} ${COLOR_THEMES[c].fg} ${color === c ? 'ring-4 ring-offset-1 ring-accent-violet' : ''}`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-white border border-fg-slate shrink-0" />
                      {COLOR_THEMES[c].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Pattern Texture Inlay */}
              <div className="space-y-2">
                <label className="font-display font-extrabold text-xs uppercase tracking-wider text-fg-slate block">
                  Tactile Stencil Texture
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {PATTERNS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPattern(p.id)}
                      className={`h-10 rounded-lg border-2 border-fg-slate text-center font-display font-extrabold text-xs transition-all cursor-pointer shadow-[2px_2px_0px_#001D39] ${pattern === p.id ? 'bg-pop-yellow text-fg-slate translate-y-[-1px] shadow-[3px_3px_0px_#001D39]' : 'bg-white hover:bg-muted-slate text-fg-slate'}`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 5: Emoji Sticker Overlay */}
              <div className="space-y-2">
                <label className="font-display font-extrabold text-xs uppercase tracking-wider text-fg-slate block">
                  Pick Center Sticker Overlay Icon
                </label>
                <div className="flex flex-wrap gap-2.5 p-3.5 bg-bg-cream border-2 border-fg-slate rounded-xl max-h-[110px] overflow-y-auto">
                  {EMOJIS.map((e) => (
                    <button
                      key={e}
                      onClick={() => setSelectedEmoji(e)}
                      className={`w-10 h-10 text-xl flex items-center justify-center rounded-lg border-2 border-fg-slate transition-all cursor-pointer ${selectedEmoji === e ? 'bg-pop-mint translate-y-[-2px] shadow-[2px_2px_0px_#1E293B]' : 'bg-white hover:scale-110'}`}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider rotation */}
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-display font-extrabold text-xs uppercase tracking-wider text-fg-slate">
                    Sticker Poster Spin Rotation
                  </label>
                  <span className="font-mono text-xs font-bold bg-muted-slate border border-fg-slate px-1.5 py-0.5 rounded">
                    {rotation}° skew
                  </span>
                </div>
                <input
                  type="range"
                  min="-10"
                  max="100" // Support larger rotation if wanted
                  value={rotation}
                  onChange={(e) => setRotation(Number(e.target.value))}
                  className="w-full h-2.5 bg-bg-cream border-2 border-fg-slate rounded-lg appearance-none cursor-pointer accent-accent-violet"
                />
              </div>

            </div>

          </div>

          {/* Real-time Showcase Canvas (5 cols) */}
          <div className="lg:col-span-5 flex flex-col h-full bg-white border-4 border-fg-slate rounded-2xl p-6 shadow-pop-lg relative overflow-hidden justify-between">
            {/* Visual Grid Behind */}
            <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />

            {/* Stage title */}
            <div className="border-b-2 border-fg-slate pb-3 mb-6 relative z-10 bg-white/95 p-1 rounded-md flex items-center justify-between">
              <span className="font-display font-extrabold text-xs uppercase text-fg-slate flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-pop-pink border border-fg-slate animate-pulse" />
                Active Canvas Blueprint
              </span>
              <span className="font-mono text-[9px] font-bold bg-pop-yellow px-1.5 py-0.5 rounded border border-fg-slate uppercase">
                Ready to Print
              </span>
            </div>

            {/* Highly Interactive Centered Sticker Rendering Box */}
            <div className="flex-1 flex items-center justify-center py-8">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${shape}-${color}-${pattern}-${title}-${selectedEmoji}`}
                  initial={{ scale: 0.7, rotate: rotation - 2, opacity: 0 }}
                  animate={{ 
                    scale: celebrate ? [1, 1.25, 0.95, 1.05, 1] : 1,
                    rotate: rotation,
                    opacity: 1 
                  }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 220, 
                    damping: 15,
                    scale: { duration: 0.6 }
                  }}
                  className={`relative w-64 h-64 border-4 border-fg-slate p-6 flex flex-col justify-between shadow-pop-lg shrink-0 ${activeTheme.bg} ${activeTheme.fg} ${activeShapeConfig.className}`}
                >
                  {/* Textured pattern overlay inside absolute */}
                  {pattern !== 'none' && (
                    <div className={`absolute inset-0 ${activeShapeConfig.className} ${activePatternConfig.className}`} />
                  )}

                  {/* Stamp inner headers */}
                  <div className="flex justify-between items-center relative z-10 w-full mb-3">
                    <div className="w-6 h-6 rounded-full bg-white border border-fg-slate flex items-center justify-center text-fg-slate font-extrabold text-[10px]">
                      ★
                    </div>
                    <span className="font-mono text-[8px] bg-fg-slate text-white px-1.5 py-0.5 rounded-sm uppercase tracking-wider font-extrabold">
                      GEOMETRY STRETCH
                    </span>
                  </div>

                  {/* Stamp Emoji Center */}
                  <div className="w-full flex justify-center py-2 relative z-10">
                    <motion.div 
                      key={selectedEmoji}
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 0.4 }}
                      className="w-16 h-16 bg-white border-2 border-fg-slate rounded-full flex items-center justify-center text-3xl shadow-[3px_3px_0px_#001D39] rotate-2"
                    >
                      {selectedEmoji}
                    </motion.div>
                  </div>

                  {/* Stamp Titles Block */}
                  <div className="text-center relative z-10 w-full mt-3">
                    <h4 className="font-display font-extrabold text-base uppercase leading-tight line-clamp-1 border-t-2 border-dashed border-fg-slate/20 pt-2 break-all px-0.5">
                      {title || 'STICKER TEXT'}
                    </h4>
                    <p className="font-mono text-[9px] uppercase tracking-wider font-extrabold opacity-80 mt-1">
                      {subtitle || 'MEMBER BADGE'}
                    </p>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

            {/* Print trigger button */}
            <div className="border-t-2 border-fg-slate pt-5 relative z-10 mt-6 bg-white/95 p-1 rounded-md">
              <button
                onClick={saveToWall}
                className="w-full h-12 bg-pop-mint text-fg-slate font-display font-extrabold text-sm rounded-full border-2 border-fg-slate shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-pop-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-pop-active transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Print & Stamp to the Wall! ⚡</span>
                <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center border border-fg-slate font-extrabold group-hover:scale-110 transition-transform">
                  +
                </span>
              </button>
            </div>

          </div>

        </div>

        {/* Persistent Bulletin Wall Layout */}
        <div className="bg-white border-4 border-fg-slate rounded-2xl p-6 shadow-pop relative overflow-hidden">
          {/* Dot grid backdrop */}
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />

          <div className="border-b-2 border-fg-slate pb-4 mb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4 relative z-10 bg-white/95 p-1.5 rounded-md">
            <div>
              <h3 className="font-display font-extrabold text-xl text-fg-slate flex items-center gap-2">
                <Stamp className="w-5 h-5 text-pop-pink" /> 
                Production Bulletin Wall ({stickers.length})
              </h3>
              <p className="font-sans font-medium text-xs text-muted-text mt-0.5">
                Saved watermarks, stickers and brand badges you printed reside here. They persist across tab sessions!
              </p>
            </div>

            {stickers.length > 0 && (
              <button
                onClick={clearWall}
                className="px-4 py-2 bg-transparent text-muted-text hover:text-fg-slate font-mono text-xs font-bold border-2 border-slate-200 hover:border-fg-slate rounded-full transition-all cursor-pointer flex items-center gap-2"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear Live Wall
              </button>
            )}
          </div>

          {/* Bulletin Grid */}
          <div className="relative z-10">
            {stickers.length === 0 ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-bg-cream rounded-full border-2 border-dashed border-fg-slate flex items-center justify-center text-xl mb-4 text-slate-400">
                  ?
                </div>
                <h4 className="font-display font-bold text-base text-fg-slate">No badges pinned yet!</h4>
                <p className="font-sans text-xs text-muted-text mt-1 max-w-xs">
                  Create your first customized watermark piece using the builder tool above and stamp it to display here!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
                <AnimatePresence>
                  {stickers.map((item, index) => {
                    const t = COLOR_THEMES[item.config.color];
                    const sh = SHAPES.find(s => s.id === item.config.shape) || SHAPES[0];
                    const pat = PATTERNS.find(p => p.id === item.config.pattern) || PATTERNS[0];
                    
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ scale: 0, rotate: index % 2 === 0 ? -4 : 4 }}
                        animate={{ scale: 1, rotate: item.config.rotation }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                        transition={{ type: "spring", stiffness: 220, damping: 15 }}
                        className={`relative aspect-square border-2 border-fg-slate p-4 flex flex-col justify-between shadow-pop hover:shadow-[6px_6px_0px_0px_#001D39] ${t.bg} ${t.fg} ${sh.className} group select-none`}
                      >
                        {/* Pattern background */}
                        {item.config.pattern !== 'none' && (
                          <div className={`absolute inset-0 ${sh.className} ${pat.className}`} />
                        )}
+
                        <div className="flex justify-between items-center relative z-10">
                          <span className="font-mono text-[8px] font-bold bg-fg-slate text-white px-1.5 py-0.5 rounded-sm">
                            PIN #{index + 1}
                          </span>
                          
                          {/* Sledge-trash button inside hover state */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteSticker(item.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 bg-white hover:bg-pop-pink rounded-full border border-fg-slate p-1 cursor-pointer transition-all shrink-0 shadow-[1px_1px_0px_#001D39] active:translate-y-[1px]"
                            title="Unpin from Grid"
                          >
                            <Trash2 className="w-3.5 h-3.5 text-fg-slate" />
                          </button>
                        </div>

                        {/* Centered emoji */}
                        <div className="flex justify-center relative z-10 my-1">
                          <div className="w-11 h-11 bg-white border border-fg-slate rounded-full flex items-center justify-center text-2xl shadow-[2px_2px_0px_#001D39]">
                            {item.config.emoji}
                          </div>
                        </div>

                        {/* Text stamp */}
                        <div className="text-center relative z-10 border-t border-dashed border-fg-slate/20 pt-1.5">
                          <h5 className="font-display font-extrabold text-[12px] uppercase tracking-wide leading-tight line-clamp-1 block break-all">
                            {item.config.title}
                          </h5>
                          <p className="font-mono text-[7.5px] uppercase opacity-85 font-extrabold mt-0.5">
                            {item.config.subtitle}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
