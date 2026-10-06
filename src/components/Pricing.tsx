/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Star, Mail, Phone, Instagram, Youtube, Linkedin, ExternalLink } from 'lucide-react';

export default function Pricing() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const tiers = [
    {
      name: "YouTube Hook Pack",
      price: "$150",
      period: "per project",
      desc: "High-retention editing for shorter and mid-length YouTube videos. Perfect for building initial traction.",
      features: [
        "Hook-focused dynamic intro",
        "Pacing & retention-cut optimization",
        "Basic sound design & FX sync",
        "Deliver in up to 3 business days",
        "1 round of detailed feedback revision"
      ],
      btnText: "Discuss Hook Pack",
      whatsappMessage: "Hello CreoInk, I am interested in the YouTube Hook Pack.",
      colorClass: "bg-white",
      btnClass: "bg-white text-fg-slate hover:bg-pop-mint"
    },
    {
      name: "Documentary Master",
      price: "$300",
      period: "per project",
      desc: "Research-backed heavy storytelling edit for complete documentaries, essays, and premium long-form content.",
      features: [
        "Deep narrative structural script-to-edit",
        "Cinematic soundscapes & audio sweep design",
        "Bespoke animated lower thirds",
        "Visual pacing & custom overlay elements",
        "3 detailed revisions & high-priority speed",
        "Color grading consistent finishing filter"
      ],
      btnText: "Book Documentary Edit ⚡",
      whatsappMessage: "Hello CreoInk, I am interested in the Documentary Master package.",
      colorClass: "bg-white relative border-[4px] shadow-pop-pink z-10 scale-[1.03] lg:scale-[1.05]",
      btnClass: "bg-accent-violet text-white hover:bg-pop-pink shadow-pop"
    },
    {
      name: "Retention Retainer",
      price: "$500",
      period: "per month",
      desc: "Comprehensive production partnership for busy creators and brands looking to outsource editing completely.",
      features: [
        "Up to 4 complete premium edits per month",
        "Pre-production storytelling consultations",
        "Dedicated Google Drive sync pipeline",
        "Priority 48h turnaround times",
        "Continuous viewer retention metrics feedback",
        "Unrestricted revisions per piece"
      ],
      btnText: "Become Partner Creator",
      whatsappMessage: "Hello CreoInk, I am interested in the Retention Retainer package.",
      colorClass: "bg-white",
      btnClass: "bg-white text-fg-slate hover:bg-pop-yellow"
    }
  ];

  const reviews = [
    {
      author: "Alex Carter",
      title: "History Explainer Creator (1.2M Subs)",
      quote: "Rahul's documentary pacing is completely unmatched. He turned a dense, complex script about history into a 30-minute masterpiece. The viewer retention on that episode hit our highest statistical peak ever.",
      rating: 5
    },
    {
      author: "Sora Tanaka",
      title: "Tech Innovation Lead",
      quote: "The retention cuts and superb movie-like sound design Rahul applied literally saved our video. Average view duration soared up by 42%. He is an essential workflow asset for our media channel.",
      rating: 5
    },
    {
      author: "Marcus Brody",
      title: "Business Documentary Producer",
      quote: "Flawless attention to story detail, professional graphic animations, and crystal clear communication. Rahul doesn't just cut clips together; he actively helps produce the narrative.",
      rating: 5
    }
  ];

  const handleOpenMail = () => {
    window.location.href = "mailto:rahulmars001@gmail.com";
  };

  const handleOpenPhone = () => {
    window.location.href = "tel:7584810452";
  };

  return (
    <section id="pricing" className="py-20 bg-bg-cream border-b-4 border-fg-slate relative">
      <div className="absolute inset-0 bg-dot-grid opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex gap-2 px-3 py-1 bg-pop-yellow border-2 border-fg-slate rounded-full shadow-[2px_2px_0px_#001D39] mb-4">
            <span className="font-display font-extrabold text-xs uppercase tracking-wide text-fg-slate">
              Flat-Rate Production
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-fg-slate tracking-tight mb-4">
            Transparent Creative Services & Rates
          </h2>
          <p className="font-sans font-medium text-muted-text text-sm md:text-base leading-relaxed">
            Choose a plan built around story accuracy and engagement pacing. No hidden retainers, just raw storytelling power to increase your retention curves.
          </p>
        </div>

        {/* 3 cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-24 max-w-5xl mx-auto">
          {tiers.map((t, idx) => {
            const isFeatured = idx === 1;
            return (
              <motion.div
                key={t.name}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white border-4 border-fg-slate rounded-2xl p-6 shadow-pop transition-all flex flex-col justify-between min-h-[480px] relative ${t.colorClass} ${hoveredCard === idx ? 'rotate-1' : ''}`}
              >
                {/* Featured star badge overlay for card 2 */}
                {isFeatured && (
                  <div className="absolute top-0 right-0 -translate-y-8 translate-x-4 bg-pop-yellow border-2 border-fg-slate text-fg-slate font-display font-extrabold text-xs px-3.5 py-1.5 rounded-xl shadow-pop rotate-[15deg] flex items-center gap-1 z-30 select-none">
                    <Star className="w-3.5 h-3.5 text-fg-slate fill-fg-slate" /> PRIMARY CHOICE ★
                  </div>
                )}

                {/* Header */}
                <div>
                  <div className="flex justify-between items-center pb-4 border-b border-fg-slate mb-4">
                    <span className="font-display font-extrabold text-md uppercase text-fg-slate">
                      {t.name}
                    </span>
                    {isFeatured && (
                      <span className="px-2 py-0.5 bg-pop-pink text-white border border-fg-slate rounded text-[9px] font-mono uppercase font-bold">
                        RECOMMENDED
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="font-display font-extrabold text-4xl text-fg-slate">{t.price}</span>
                    <span className="font-sans text-xs text-muted-text font-semibold">{t.period}</span>
                  </div>

                  <p className="font-sans font-medium text-xs text-muted-text leading-relaxed mb-6">
                    {t.desc}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-3.5 mb-8">
                    {t.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <div className="w-4.5 h-4.5 rounded-full bg-pop-mint border border-fg-slate flex items-center justify-center shrink-0 text-fg-slate font-bold shadow-[0.8px_0.8px_0px_#001D39]">
                          <Check className="w-3 h-3 text-fg-slate stroke-[3px]" />
                        </div>
                        <span className="font-sans text-xs font-semibold text-fg-slate leading-normal">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action Candy Button */}
                {/* <button
                
                  onClick={handleOpenMail}
                  className={`w-full py-3 rounded-full border-2 border-fg-slate font-display font-extrabold text-xs text-center cursor-pointer transition-all ${t.btnClass} shadow-[3px_3px_0px_#001D39] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#001D39] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#001D39]`}
                >
                  {t.btnText}
                </button> */}
                <a
  href={`https://wa.me/917584810452?text=${encodeURIComponent(t.whatsappMessage)}`}
  target="_blank"
  rel="noopener noreferrer"
  className={`w-full py-3 rounded-full border-2 border-fg-slate font-display font-extrabold text-xs text-center cursor-pointer transition-all ${t.btnClass} shadow-[3px_3px_0px_#001D39] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#001D39] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#001D39]`}
>
  {t.btnText}
</a>

              </motion.div>
            );
          })}
        </div>

        {/* Realistic Video Editing Testimonials */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex gap-2 px-3 py-1 bg-pop-pink border-2 border-fg-slate rounded-full shadow-[2px_2px_0px_#001D39] mb-4">
              <span className="font-display font-extrabold text-xs uppercase tracking-wide text-white">
                Client Feedback
              </span>
            </div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-fg-slate tracking-tight">
              What Creators & Producers Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, revIdx) => (
              <div 
                key={revIdx}
                className="bg-white border-4 border-fg-slate rounded-2xl p-6 shadow-pop relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4 text-pop-yellow">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-pop-yellow text-fg-slate stroke-2" />
                    ))}
                  </div>
                  <p className="font-sans font-medium text-xs md:text-sm text-fg-slate leading-relaxed mb-6 italic">
                    "{rev.quote}"
                  </p>
                </div>
                
                <div className="border-t-2 border-dashed border-fg-slate/15 pt-4">
                  <div className="font-display font-extrabold text-sm text-fg-slate">{rev.author}</div>
                  <div className="font-mono text-[9px] text-muted-text uppercase font-bold mt-0.5">{rev.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Big CTA & Structured Contact Center */}
        <div id="contact" className="mb-24 bg-white border-4 border-fg-slate rounded-2xl p-8 shadow-pop-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            {/* Left Col and Copy */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
              <div className="inline-flex max-w-fit gap-2 px-3 py-1 bg-accent-violet border-2 border-fg-slate rounded-full shadow-[2px_2px_0px_#001D39] mb-1">
                <span className="font-display font-extrabold text-xs uppercase tracking-wide text-white">
                  Let’s Collaborate
                </span>
              </div>
              <h3 className="font-display font-extrabold text-3xl md:text-4xl text-fg-slate tracking-tight leading-tight">
                Let's Turn Your Footage Into Stories That People Watch Till The End
              </h3>
              <p className="font-sans font-medium text-slate-600 text-sm md:text-base leading-relaxed">
                Professional documentary and YouTube video editing that increases engagement, retention, and audience growth. Connect with me directly through any channel below to get started on your video.
              </p>

              {/* Big double buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="https://drive.google.com/drive/folders/10bsPfwp8iRikfhHnm7T28hTRxkLimsB-?usp=drive_link"
                  target="_blank"
                  rel="referrer noreferrer"
                  className="px-6 py-3.5 bg-pop-pink text-white font-display font-extrabold text-sm rounded-full border-2 border-fg-slate shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-pop-hover active:translate-x-[2px] active:translate-y-[2px] text-center"
                >
                  View Full Google Drive Portfolio
                </a>
                <button
                  onClick={handleOpenMail}
                  className="px-6 py-3.5 bg-white text-fg-slate font-display font-extrabold text-sm rounded-full border-2 border-fg-slate shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-pop-hover active:translate-x-[2px] active:translate-y-[2px] transition-all"
                >
                  Contact Me Via Email
                </button>
              </div>
            </div>

            {/* Right Contact Details Directory */}
            <div className="lg:col-span-5 bg-bg-cream border-2 border-fg-slate rounded-xl p-6 shadow-pop space-y-4">
              <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-fg-slate mb-4 border-b border-fg-slate/20 pb-2">
                Direct Contact Directory
              </h4>

              {/* Gmail details */}
              <div 
                onClick={handleOpenMail}
                className="p-3 bg-white hover:bg-pop-yellow rounded-xl border-2 border-fg-slate flex items-center gap-3.5 cursor-pointer shadow-[2px_2px_0px_#001D39] active:translate-y-[1px] transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-accent-violet border border-fg-slate text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase text-muted-text font-bold">EMAIL ADDRESS</div>
                  <div className="font-sans font-bold text-xs md:text-sm text-fg-slate break-all">rahulmars001@gmail.com</div>
                </div>
              </div>

              {/* Phone details */}
              <div 
                onClick={handleOpenPhone}
                className="p-3 bg-white hover:bg-pop-mint rounded-xl border-2 border-fg-slate flex items-center gap-3.5 cursor-pointer shadow-[2px_2px_0px_#001D39] active:translate-y-[1px] transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-pop-pink border border-fg-slate text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-muted-text font-bold">PHONE NUMBER</div>
                  <div className="font-sans font-bold text-xs md:text-sm text-fg-slate">7584810452</div>
                </div>
              </div>

              {/* Instagram details */}
              <a
  href="https://wa.me/917584810452?text=Hello%20CreoInk"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-white hover:bg-pop-yellow rounded-xl border-2 border-fg-slate flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_#001D39] active:translate-y-[1px] transition-all"
>
                <div className="flex items-center gap-3.5 w-full">
                  <div className="w-9 h-9 rounded-full bg-pop-yellow border border-fg-slate text-fg-slate flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-muted-text font-bold">WHATSAPP HANDLE</div>
                    <div className="font-sans font-bold text-xs md:text-sm text-fg-slate">@creoink_fps</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 justify-self-end ml-auto shrink-0" />
              </a>

              {/* YouTube details */}
              <a 
                href="https://youtube.com/@creoinkfps?si=uiKFhX9doBUjnQT3"
                target="_blank"
                rel="referrer noreferrer"
                className="p-3 bg-white hover:bg-pop-mint rounded-xl border-2 border-fg-slate flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_#001D39] active:translate-y-[1px] transition-all"
              >
                <div className="flex items-center gap-3.5 w-full">
                  <div className="w-9 h-9 rounded-full bg-pop-pink border border-fg-slate text-white flex items-center justify-center shrink-0">
                    <Youtube className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-muted-text font-bold">YOUTUBE CHANNEL</div>
                    <div className="font-sans font-bold text-xs md:text-sm text-fg-slate truncate max-w-[200px]">@Creoinkfps</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 justify-self-end ml-auto shrink-0" />
              </a>

              {/* LinkedIn / Drive link details */}
              <a 
                href="https://drive.google.com/drive/folders/10bsPfwp8iRikfhHnm7T28hTRxkLimsB-?usp=drive_link"
                target="_blank"
                rel="referrer noreferrer"
                className="p-3 bg-white hover:bg-pop-pink rounded-xl border-2 border-fg-slate flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_#001D39] active:translate-y-[1px] transition-all"
              >
                <div className="flex items-center gap-3.5 w-full">
                  <div className="w-9 h-9 rounded-full bg-accent-violet border border-fg-slate text-white flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-muted-text font-bold">LINKEDIN CONNECT</div>
                    <div className="font-sans font-bold text-xs md:text-sm text-fg-slate">Rahul Saha • Portfolio Connect</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 justify-self-end ml-auto shrink-0" />
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
