/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  ExternalLink, 
  Sparkles, 
  Youtube, 
  Film, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  TrendingUp, 
  Clock, 
  Eye, 
  X, 
  Tv, 
  Volume2, 
  Maximize2 
} from 'lucide-react';

interface ShortFormProject {
  title: string;
  category: string; // "Instagram Reel" | "YouTube Shorts" | "TikTok Style"
  creator: string;
  views: string;
  duration: string;
  likes: string;
  comments: string;
  shares: string;
  thumbnail: string;
  badgeBg: string;
}

interface LongFormProject {
  title: string;
  category: string; // "Documentary Edit" | "YouTube Video" | "Case Study" | "Storytelling Project"
  duration: string;
  views: string;
  description: string;
  thumbnail: string;
  youtubeUrl?: string; // Optional specific Youtube URL
}

export default function PortfolioShowcase() {
  const driveLink = "https://drive.google.com/drive/folders/10bsPfwp8iRikfhHnm7T28hTRxkLimsB-?usp=drive_link";
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    category: string;
    duration: string;
    views: string;
    thumbnail: string;
    isVertical: boolean;
    description: string;
    url: string;
  } | null>(null);

  const shortFormProjects: ShortFormProject[] = [
    {
      title: "Fintech Secret Strategy",
      category: "YouTube Shorts",
      creator: "@rahulmars_cuts",
      views: "184K Views",
      duration: "0:48",
      likes: "15.2K",
      comments: "482",
      shares: "1.2K",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop",
      badgeBg: "bg-red-600 text-white border-red-700"
    },
    {
      title: "AI Automation Workflow",
      category: "Instagram Reel",
      creator: "@creoink_fps",
      views: "112K Views",
      duration: "0:35",
      likes: "9.2K",
      comments: "295",
      shares: "840",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      badgeBg: "bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white border-pink-600"
    },
    {
      title: "Urban Tokyo Cyber-Vibe",
      category: "Viral TikTok Style",
      creator: "@creoink_fps",
      views: "245K Views",
      duration: "0:52",
      likes: "28.4K",
      comments: "812",
      shares: "3.4K",
      thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=600&auto=format&fit=crop",
      badgeBg: "bg-black text-white border-slate-800"
    }
  ];

  const longFormProjects: LongFormProject[] = [
    {
      title: "The Lost Generation of Cinema",
      category: "Documentary Edit",
      duration: "18:24",
      views: "45K Views",
      description: "A deep narrative analysis exploring historical pacing, retro audio mastering, and early film color palettes.",
      thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1000&auto=format&fit=crop",
      youtubeUrl: driveLink
    },
    {
      title: "How Storytellers Control Attention",
      category: "YouTube Video",
      duration: "12:40",
      views: "89K Views",
      description: "Visual retention breakdown showing structural script timing, kinetic typography overlays, and text mechanics.",
      thumbnail: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=1000&auto=format&fit=crop",
      youtubeUrl: driveLink
    },
    {
      title: "Symphony of the Silent Valley",
      category: "Storytelling Project",
      duration: "14:15",
      views: "32K Views",
      description: "Scenic essay pairing organic environmental ambient audio tracks seamlessly with dynamic landscape editing.",
      thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1000&auto=format&fit=crop",
      youtubeUrl: driveLink
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-bg-cream border-b-4 border-fg-slate relative">
      <div className="absolute inset-0 bg-dot-grid opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex gap-2 px-3 py-1 bg-accent-violet border-2 border-fg-slate rounded-full shadow-[2px_2px_0px_#001D39] mb-4">
            <span className="font-display font-extrabold text-xs uppercase tracking-wide text-white">
              OUR WORK
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-fg-slate tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="font-sans font-medium text-muted-text text-sm md:text-base leading-relaxed">
            Explore a selection of high-performing edits across short-form and long-form content designed to maximize engagement, retention, and audience growth.
          </p>
        </div>

        {/* ──── SECTION 1: SHORT-FORM CONTENT ──── */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 border-b-2 border-dashed border-fg-slate/25 pb-4">
            <div>
              <span className="font-mono text-xs text-muted-text uppercase font-bold tracking-wider">SHORT FORM VIDEOS</span>
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-fg-slate uppercase tracking-wide flex items-center gap-2 mt-1">
                <span className="w-2.5 h-2.5 bg-pop-pink rounded-full border border-fg-slate inline-block" />
                Short-Form Content
              </h3>
            </div>
            <div className="flex gap-2 flex-wrap text-[10px] font-mono font-bold text-muted-text uppercase">
              <span className="px-2.5 py-1 bg-white border border-fg-slate rounded shadow-[1px_1px_0px_#001D39]">Instagram Reels</span>
              <span className="px-2.5 py-1 bg-white border border-fg-slate rounded shadow-[1px_1px_0px_#001D39]">YouTube Shorts</span>
              <span className="px-2.5 py-1 bg-white border border-fg-slate rounded shadow-[1px_1px_0px_#001D39]">Viral Content</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {shortFormProjects.map((p, idx) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -4, rotate: idx % 2 === 0 ? -1 : 1 }}
                onClick={() => setSelectedVideo({
                  title: p.title,
                  category: p.category,
                  duration: p.duration,
                  views: p.views,
                  thumbnail: p.thumbnail,
                  isVertical: true,
                  description: `${p.category} viral cut focusing on high-impact hooks, color-corrected with strategic graphics for audience retention.`,
                  url: driveLink
                })}
                className="relative bg-black border-4 border-fg-slate rounded-3xl overflow-hidden shadow-pop hover:shadow-[8px_8px_0px_#001D39] group flex flex-col justify-between aspect-[9/16] cursor-pointer"
              >
                {/* Standard Video Stream Cover */}
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 pointer-events-none" />

                {/* Header elements: platform badge + duration */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className={`px-2.5 py-1 border rounded-md font-mono text-[9px] font-extrabold uppercase shadow-[1px_1px_0px_#000] ${p.badgeBg}`}>
                    {p.category}
                  </span>
                  <span className="bg-black/75 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-full border border-white/20">
                    {p.duration}
                  </span>
                </div>

                {/* Simulated Interaction Panel on Right Margin */}
                <div className="absolute right-3.5 bottom-24 flex flex-col items-center gap-4 z-10 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-9 h-9 rounded-full bg-black/45 border border-white/20 flex items-center justify-center backdrop-blur-xs">
                      <Heart className="w-4 h-4 fill-pop-pink text-pop-pink" />
                    </div>
                    <span className="font-mono text-[9px] font-extrabold">{p.likes}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-9 h-9 rounded-full bg-black/45 border border-white/20 flex items-center justify-center backdrop-blur-xs">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-mono text-[9px] font-extrabold">{p.comments}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-9 h-9 rounded-full bg-black/45 border border-white/20 flex items-center justify-center backdrop-blur-xs">
                      <Share2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-mono text-[9px] font-extrabold">{p.shares}</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-black/45 border border-white/20 flex items-center justify-center backdrop-blur-xs">
                    <Bookmark className="w-4 h-4 text-pop-yellow fill-pop-yellow" />
                  </div>
                </div>

                {/* Cinematic Hover Play State overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity duration-300 pointer-events-none z-20">
                  <div className="w-14 h-14 bg-pop-pink border-[3px] border-fg-slate rounded-full flex items-center justify-center shadow-pop transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom detail card block */}
                <div className="absolute bottom-4 left-4 right-16 z-10 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 bg-pop-yellow rounded-full border border-fg-slate flex items-center justify-center text-[10px] font-bold text-fg-slate">
                      ★
                    </div>
                    <span className="font-sans font-bold text-xs brightness-125">
                      {p.creator}
                    </span>
                  </div>
                  <h4 className="font-display font-black text-sm uppercase tracking-wide line-clamp-1">
                    {p.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 font-mono text-[9px] font-extrabold text-slate-300">
                    <Eye className="w-3.5 h-3.5 shrink-0 text-pop-mint" />
                    <span>{p.views}</span>
                    <span>•</span>
                    <span className="text-pop-yellow">95% RETENTION</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ──── SECTION 2: LONG-FORM CONTENT ──── */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 border-b-2 border-dashed border-fg-slate/25 pb-4">
            <div>
              <span className="font-mono text-xs text-muted-text uppercase font-bold tracking-wider">LONG FORM VIDEOS</span>
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-fg-slate uppercase tracking-wide flex items-center gap-2 mt-1">
                <span className="w-2.5 h-2.5 bg-pop-yellow rounded-full border border-fg-slate inline-block" />
                Long-Form Content
              </h3>
            </div>
            <div className="flex gap-2 flex-wrap text-[10px] font-mono font-bold text-muted-text uppercase">
              <span className="px-2.5 py-1 bg-white border border-fg-slate rounded shadow-[1px_1px_0px_#001D39]">Documentaries</span>
              <span className="px-2.5 py-1 bg-white border border-fg-slate rounded shadow-[1px_1px_0px_#001D39]">YouTube Long-Form</span>
              <span className="px-2.5 py-1 bg-white border border-fg-slate rounded shadow-[1px_1px_0px_#001D39]">Storytelling</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {longFormProjects.map((p, idx) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -4, rotate: idx % 2 === 0 ? 0.5 : -0.5 }}
                onClick={() => setSelectedVideo({
                  title: p.title,
                  category: p.category,
                  duration: p.duration,
                  views: p.views,
                  thumbnail: p.thumbnail,
                  isVertical: false,
                  description: p.description,
                  url: p.youtubeUrl || driveLink
                })}
                className="relative bg-white border-4 border-fg-slate rounded-2xl overflow-hidden shadow-pop hover:shadow-[8px_8px_0px_#001D39] group cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Thumbnail Frame */}
                <div className="relative aspect-video border-b-2 border-fg-slate overflow-hidden bg-slate-900">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  {/* Widescreen player shade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 duration-350 z-10">
                    <div className="w-14 h-14 bg-red-600 border-2 border-fg-slate rounded-full flex items-center justify-center text-white shadow-pop transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Platform / Genre badge */}
                  <div className="absolute top-3 left-3 bg-white border border-fg-slate text-fg-slate font-mono text-[9px] font-extrabold px-2 py-0.5 rounded shadow-[1.5px_1.5px_0px_#001D39]">
                    {p.category}
                  </div>

                  {/* YouTube Player Style Duration Stamp */}
                  <div className="absolute bottom-3 right-3 bg-black/85 text-white font-mono text-[10px] font-bold px-1.5 py-0.5 rounded mr-1">
                    {p.duration}
                  </div>
                </div>

                {/* Description details content */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-white relative">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[9px] font-extrabold text-muted-text uppercase flex items-center gap-1 text-red-600">
                        <Youtube className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                        Platform Stream
                      </span>
                      <div className="flex items-center gap-1 font-mono text-[9px] font-bold text-muted-text">
                        <Eye className="w-3 h-3 text-slate-400" />
                        <span>{p.views}</span>
                      </div>
                    </div>
                    <h4 className="font-display font-extrabold text-md text-fg-slate uppercase tracking-wide group-hover:text-accent-violet transition-colors">
                      {p.title}
                    </h4>
                    <p className="font-sans font-medium text-[11px] text-muted-text leading-relaxed mt-1">
                      {p.description}
                    </p>
                  </div>

                  <div className="border-t border-dashed border-slate-200 mt-4 pt-3 flex items-center justify-between font-mono text-[9px] font-extrabold text-slate-400">
                    <span>16:9 CINEMATIC FLOW</span>
                    <span className="text-fg-slate group-hover:translate-x-1 transition-transform">PLAY PREVIEW →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global CTA Button Centered below both categories */}
        <div className="flex justify-center pt-4">
          <a
            href={driveLink}
            target="_blank"
            rel="noreferrer"
            className="group relative h-14 px-8 bg-pop-pink text-white font-display font-extrabold text-sm md:text-base rounded-full border-4 border-fg-slate shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-pop-hover active:translate-x-[2px] active:translate-y-[2px] active:shadow-pop-active transition-all cursor-pointer flex items-center gap-3.5"
          >
            <span>View Full Portfolio</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-fg-slate group-hover:rotate-45 transition-transform shrink-0">
              <Play className="w-3.5 h-3.5 text-fg-slate fill-fg-slate ml-0.5" />
            </div>
          </a>
        </div>

      </div>

      {/* ──── CINEMATIC MODAL PREVIEW PLAYER CONTAINER ──── */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 bg-[#001D39]/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white border-4 border-fg-slate rounded-3xl overflow-hidden max-w-3xl w-full shadow-pop-lg relative"
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-25 p-2 bg-white hover:bg-pop-pink rounded-full border-2 border-fg-slate text-fg-slate hover:text-white transition-colors shadow-[2px_2px_0px_#001D39]"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Simulated Player Box on left/top */}
                <div className={`relative bg-black border-r-0 md:border-r-4 border-b-4 md:border-b-0 border-fg-slate flex items-center justify-center overflow-hidden ${selectedVideo.isVertical ? 'md:col-span-5 h-[400px] md:h-[500px]' : 'md:col-span-12 aspect-video h-auto'}`}>
                  
                  <img 
                    src={selectedVideo.thumbnail} 
                    alt={selectedVideo.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />

                  {/* Dark Glass Shade / Film grain overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-4" />

                  {/* Dynamic platform icons flashing in corners */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-0.5 bg-pop-yellow text-fg-slate border border-fg-slate rounded text-[8px] font-mono font-black shadow-[1px_1px_0px_#000]">
                      {selectedVideo.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Overlay Big Play Button */}
                  <a 
                    href={selectedVideo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute w-16 h-16 bg-pop-pink hover:bg-pop-yellow active:scale-95 border-2 border-fg-slate rounded-full flex items-center justify-center text-white shadow-pop cursor-pointer transition-all hover:rotate-3"
                  >
                    <Play className="w-6 h-6 text-white fill-white ml-1 animate-pulse" />
                  </a>

                  {/* Dynamic simulated system info bottom bars */}
                  <div className="absolute bottom-4 left-4 right-4 text-white font-mono text-[9px] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-3.5 h-3.5 text-pop-mint animate-bounce" />
                      <span>LIVE PREVIEW SIMULATOR</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{selectedVideo.duration}</span>
                      <Maximize2 className="w-3 h-3 text-slate-300" />
                    </div>
                  </div>
                </div>

                {/* Right / Bottom Info specifications metadata */}
                <div className={`p-6 flex flex-col justify-between ${selectedVideo.isVertical ? 'md:col-span-7' : 'md:col-span-12'}`}>
                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-[10px] font-extrabold text-pop-pink uppercase">
                        Active Project Spec File
                      </span>
                      <h3 className="font-display font-extrabold text-xl md:text-2xl text-fg-slate uppercase tracking-wide mt-1">
                        {selectedVideo.title}
                      </h3>
                      <div className="flex gap-2 flex-wrap text-[9px] font-mono uppercase font-bold text-muted-text mt-1.5">
                        <span className="px-2 py-0.5 bg-bg-cream border border-fg-slate rounded">{selectedVideo.duration} Long</span>
                        <span className="px-2 py-0.5 bg-bg-cream border border-fg-slate rounded">{selectedVideo.views}</span>
                        <span className="px-2 py-0.5 bg-bg-cream border border-fg-slate rounded">Google Drive Host</span>
                      </div>
                    </div>

                    <p className="font-sans font-medium text-xs md:text-sm text-slate-600 leading-relaxed bg-bg-cream border-2 border-fg-slate border-dashed p-3.5 rounded-xl">
                      {selectedVideo.description}
                    </p>

                    <div className="space-y-2">
                      <div className="font-mono text-[9px] font-black text-fg-slate uppercase tracking-wider">
                        Key Editing Directives Employed:
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] font-sans font-semibold text-fg-slate">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-pop-pink" />
                          <span>Audiometric pacing sync</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-pop-yellow" />
                          <span>Dynamic typography callouts</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-pop-mint" />
                          <span>Cinematic foley FX mastering</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                          <span>Color-matched look filter</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t-2 border-dashed border-slate-200 mt-6 justify-end">
                    <button
                      onClick={() => setSelectedVideo(null)}
                      className="px-5 py-2 border-2 border-fg-slate rounded-full font-display font-extrabold text-xs text-fg-slate hover:bg-slate-100 cursor-pointer"
                    >
                      Close Specs
                    </button>
                    <a
                      href={selectedVideo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2 bg-pop-pink hover:bg-pop-yellow text-white active:scale-95 text-center border-2 border-fg-slate rounded-full font-display font-extrabold text-xs flex items-center justify-center gap-1.5 shrink-0 transition-colors shadow-[2px_2px_0px_#001D39]"
                    >
                      <span>Open on Google Drive</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
