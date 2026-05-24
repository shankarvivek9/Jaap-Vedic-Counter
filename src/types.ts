/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Mantra {
  id: string;
  name: string;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  benefits: string;
  wordByWord?: { word: string; meaning: string }[];
  translationHint?: string;
}

export interface ChantingSession {
  id: string;
  mantraId: string;
  mantraName: string;
  count: number;
  completedMalas: number;
  timestamp: string; // ISO String
  durationSeconds: number; // Duration of session
}

export interface VedicConcept {
  id: string;
  title: string;
  sanskritTitle: string;
  brief: string;
  description: string;
  pillars: {
    name: string;
    sanskritName?: string;
    meaning: string;
    details: string;
  }[];
  practicalApplication: string;
}

export interface BreathingPattern {
  id: string;
  name: string;
  sanskritName: string;
  inhale: number;
  holdIn: number;
  exhale: number;
  holdOut: number;
  description: string;
  benefit: string;
}
