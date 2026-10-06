/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StickerShape, PatternStyle, ColorScheme } from './types';

export const SHAPES: StickerShape[] = [
  {
    id: 'speech-bubble',
    name: 'Speech Bubble',
    className: 'rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-none',
  },
  {
    id: 'badge-arch',
    name: 'Retro Arch',
    className: 'rounded-t-full rounded-b-lg',
  },
  {
    id: 'shield',
    name: 'Shield Sharp',
    className: 'rounded-t-2xl rounded-bl-3xl rounded-br-none',
  },
  {
    id: 'pill-capsule',
    name: 'Tactile Pill',
    className: 'rounded-full',
  },
  {
    id: 'starburst',
    name: 'Geometric Box',
    className: 'rounded-2xl',
  },
];

export const PATTERNS: PatternStyle[] = [
  {
    id: 'none',
    name: 'Solid Color',
    className: '',
  },
  {
    id: 'dot-grid',
    name: 'Polka Dot Formation',
    className: 'bg-dot-grid-light',
  },
  {
    id: 'stripes-diagonal',
    name: 'Retro Stripes',
    className: 'bg-stripes-pink opacity-25',
  },
  {
    id: 'grid-lines',
    name: 'Grid Lines',
    className: 'bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-15',
  },
];

export const EMOJIS = ['⚡', '🤖', '👾', '🌈', '🛸', '🍉', '🎳', '🎯', '🥑', '🎈', '🍿', '💡', '🎵', '🔥', '🛹', '🍕'];

export const COLOR_THEMES: Record<ColorScheme, {
  bg: string;
  fg: string;
  accent: string;
  shadow: string;
  border: string;
  name: string;
  tint: string;
}> = {
  violet: {
    bg: 'bg-violet-500',
    fg: 'text-white',
    accent: '#8B5CF6',
    shadow: '#1E293B',
    border: 'border-fg-slate',
    name: 'Vivid Violet',
    tint: 'bg-violet-50',
  },
  pink: {
    bg: 'bg-pop-pink',
    fg: 'text-white',
    accent: '#F472B6',
    shadow: '#1E293B',
    border: 'border-fg-slate',
    name: 'Hot Pink',
    tint: 'bg-pink-50',
  },
  yellow: {
    bg: 'bg-pop-yellow',
    fg: 'text-fg-slate',
    accent: '#FBBF24',
    shadow: '#1E293B',
    border: 'border-fg-slate',
    name: 'Amber Yellow',
    tint: 'bg-amber-50',
  },
  mint: {
    bg: 'bg-pop-mint',
    fg: 'text-fg-slate',
    accent: '#34D399',
    shadow: '#1E293B',
    border: 'border-fg-slate',
    name: 'Minty Fresh',
    tint: 'bg-emerald-50',
  },
};
