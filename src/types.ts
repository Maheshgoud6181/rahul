/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ColorScheme = 'violet' | 'pink' | 'yellow' | 'mint';

export interface StickerShape {
  id: string;
  name: string;
  className: string; // Tailwind class
  svgPath?: string;
}

export interface PatternStyle {
  id: string;
  name: string;
  className: string;
}

export interface StickerConfig {
  shape: string;
  color: ColorScheme;
  pattern: string;
  title: string;
  subtitle: string;
  stickerStyle: string; // 'flat', 'skewed', 'retro'
  rotation: number;     // -10 to 10 degrees
  emoji: string;
}

export interface SandboxInteractiveState {
  isWiggling: boolean;
  buttonClickCount: number;
  inputStatus: string;
  selectedColor: ColorScheme;
  checkedState: boolean;
}

export interface CustomSticker {
  id: string;
  config: StickerConfig;
  createdAt: string;
}
