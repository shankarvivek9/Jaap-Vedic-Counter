/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wind, Play, Square, Sparkles, Sliders, RefreshCw, Info } from 'lucide-react';
import { BreathingPattern } from '../types';
import { AudioEngine } from './AudioEngine';

const BREATHING_PATTERNS: BreathingPattern[] = [
  {
    id: 'sama_vritti',
    name: 'Sama Vritti',
    sanskritName: 'समवृत्ति प्राणायाम (Box Breathing)',
    inhale: 4,
    holdIn: 4,
    exhale: 4,
    holdOut: 4,
    description: 'The ancient practice of equal-ratio breathing. Perfect for immediate stress relief, lowering heart rate, and inducing absolute cognitive balance.',
    benefit: 'Harmonizes both cerebral hemispheres, relieves anxiety, and stabilizes blood pressure.'
  },
  {
    id: 'prana_vardhak',
    name: 'Prana Vardhak',
    sanskritName: 'प्राणवर्धक (4-7-8 Balancing)',
    inhale: 4,
    holdIn: 7,
    exhale: 8,
    holdOut: 0,
    description: 'A powerful biohacking pattern designed by yogis to act as a natural tranquilizer for the nervous system, expelling residual toxins and stale carbon dioxide.',
    benefit: 'Soothes the sympathetic nervous system and acts as an ultimate sleep/relaxation trigger.'
  },
  {
    id: 'anulom_vilom_rhythm',
    name: 'Anulom Vilom Rhythm',
    sanskritName: 'अनुलोम विलोम लय (Alternate Nostril)',
    inhale: 5,
    holdIn: 5,
    exhale: 5,
    holdOut: 0,
    description: 'Paced breathing mimicking the alternate nostril prana redirection. Purifies the subtle energetic channels (Nadis) of the somatic body.',
    benefit: 'Purifies energy channels (Ida and Pingala), enhances focus, and oxygenates key brain clusters.'
  }
];

export default function BreathingGuide() {
  const [selectedPattern, setSelectedPattern] = useState<BreathingPattern>(BREATHING_PATTERNS[0]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [currentSegment, setCurrentSegment] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Hold Out'>('Inhale');
  const [secondsRemaining, setSecondsRemaining] = useState<number>(selectedPattern.inhale);
  const [sessionDuration, setSessionDuration] = useState<number>(0);
  const [totalBreaths, setTotalBreaths] = useState<number>(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Restart breathing tracker when pattern is selected or switched
  useEffect(() => {
    stopBreathing();
    setSecondsRemaining(selectedPattern.inhale);
    setCurrentSegment('Inhale');
  }, [selectedPattern]);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setSessionDuration(prev => prev + 1);
        setSecondsRemaining(prevSec => {
          if (prevSec <= 1) {
            // Move to next segment
            return transitionToNextSegment();
          }
          return prevSec - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, currentSegment, selectedPattern]);

  const transitionToNextSegment = () => {
    const { inhale, holdIn, exhale, holdOut } = selectedPattern;

    if (currentSegment === 'Inhale') {
      if (holdIn > 0) {
        setCurrentSegment('Hold');
        playTickBell(392); // G4 soft drone bell
        return holdIn;
      } else {
        setCurrentSegment('Exhale');
        playTickBell(293.66); // D4 slow down
        return exhale;
      }
    } else if (currentSegment === 'Hold') {
      setCurrentSegment('Exhale');
      playTickBell(293.66);
      return exhale;
    } else if (currentSegment === 'Exhale') {
      if (holdOut > 0) {
        setCurrentSegment('Hold Out');
        playTickBell(261.63); // C4 quiet
        return holdOut;
      } else {
        // Completed full cycle!
        setTotalBreaths(prev => prev + 1);
        setCurrentSegment('Inhale');
        playTickBell(523.25); // C5 refresh
        return inhale;
      }
    } else { // Hold Out
      // Completed full cycle!
      setTotalBreaths(prev => prev + 1);
      setCurrentSegment('Inhale');
      playTickBell(523.25);
      return inhale;
    }
  };

  const playTickBell = (freq: number) => {
    // Subtle breathing transition indicator (crystal clear)
    AudioEngine.playTing(freq);
  };

  const startBreathing = () => {
    setIsActive(true);
    playTickBell(523.25);
  };

  const stopBreathing = () => {
    setIsActive(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleReset = () => {
    stopBreathing();
    setSecondsRemaining(selectedPattern.inhale);
    setCurrentSegment('Inhale');
    setSessionDuration(0);
    setTotalBreaths(0);
  };

  // Humanize session duration in standard clock structure
  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Dynamic colors and phrases matching the respiration mechanics
  const getSegmentMeta = () => {
    switch (currentSegment) {
      case 'Inhale':
        return {
          text: 'Prana Absorption (Inhale)',
          color: 'from-sky-400 to-teal-400 border-teal-200',
          bgBlur: 'bg-teal-500/10',
          sanskrit: 'पूरक (Puraka)',
          scale: 1.8,
          instruction: 'Gently breathe in, filling your abdomen, ribs, and collarbones.'
        };
      case 'Hold':
        return {
          text: 'Internal Suspension (Hold)',
          color: 'from-amber-400 to-orange-400 border-amber-300',
          bgBlur: 'bg-amber-500/10',
          sanskrit: 'अन्तः कुम्भक (Antar Kumbhaka)',
          scale: 1.8, // Hold at state size
          instruction: 'Relax your shoulders and absorb the divine oxygen silently.'
        };
      case 'Exhale':
        return {
          text: 'Toxin Release (Exhale)',
          color: 'from-rose-400 to-indigo-400 border-indigo-200',
          bgBlur: 'bg-indigo-500/10',
          sanskrit: 'रेचक (Rechaka)',
          scale: 1.0, // Shrink
          instruction: 'Release completely, letting go of any physical or mental stress.'
        };
      case 'Hold Out':
        return {
          text: 'Void Suspension (Hold out)',
          color: 'from-stone-400 to-slate-500 border-stone-300',
          bgBlur: 'bg-stone-500/10',
          sanskrit: 'वाह्य कुम्भक (Bahya Kumbhaka)',
          scale: 1.0,
          instruction: 'Remain empty and enjoy the pure space of non-arising thoughts.'
        };
    }
  };

  const meta = getSegmentMeta();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="breathing-companion-module">
      
      {/* Pattern Selector / List Sidecard */}
      <div className="lg:col-span-5 flex flex-col gap-6" id="breath-patterns-library">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg text-slate-100">
          <span className="text-xs font-mono font-bold tracking-wider text-orange-400 block uppercase">PRANAYAMA DIRECTORY</span>
          <h2 className="text-xl font-bold bg-gradient-to-r from-white to-slate-305 bg-clip-text text-transparent mt-1 mb-4">Breathing Modalities</h2>

          <div className="space-y-3">
            {BREATHING_PATTERNS.map((p) => {
              const isActivePattern = selectedPattern.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPattern(p)}
                  disabled={isActive}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    isActivePattern
                      ? 'border-orange-500/50 bg-orange-500/10 shadow-md text-white'
                      : 'border-white/5 hover:bg-white/5 hover:border-white/10 text-slate-300'
                  } ${isActive ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-sm text-slate-100">{p.name}</h4>
                      <span className="text-[10px] text-orange-400 font-serif font-bold">
                        {p.sanskritName}
                      </span>
                    </div>
                    {/* Compact structure tag */}
                    <span className="text-[10px] font-mono font-semibold bg-white/5 text-slate-300 py-1 px-2.5 rounded-full border border-white/10">
                      {p.inhale}-{p.holdIn}-{p.exhale}-{p.holdOut}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed font-medium">
                    {p.description}
                  </p>
                </button>
              );
            })}
          </div>

          {isActive && (
            <div className="mt-4 p-3 bg-orange-500/15 rounded-xl border border-orange-500/30 text-xs text-orange-300 font-medium">
              Note: Selection is locked while practice is active. Click 'Stop Session' to switch breathing styles.
            </div>
          )}

          <div className="mt-5 pt-4 border-t border-white/10 space-y-3">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">YOGIC SCIENCE BENEFIT</span>
            <div className="flex items-start gap-2.5 bg-orange-600/15 border border-orange-500/30 p-3.5 rounded-2xl text-xs text-orange-200 font-medium leading-relaxed">
              <Sparkles className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <strong>Physiological Benefit:</strong> {selectedPattern.benefit}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Breath Guidance Ring Visualizer */}
      <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center relative overflow-hidden min-h-[460px] text-slate-100">
        
        {/* Dynamic color atmosphere rings in the background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-1000 bg-gradient-to-tr from-sky-500 via-teal-500 to-indigo-500" />

        {/* Header telemetry and clock */}
        <div className="w-full flex justify-between items-center z-10 bg-white/5 border border-white/10 p-3 rounded-2xl">
          <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-orange-400">
            <Wind className="w-4 h-4 text-orange-500 animate-pulse" />
            Vedic Oxygen Level
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right font-semibold">
              <span className="text-[9px] font-mono text-slate-400 block uppercase">Elapsed</span>
              <span className="text-xs font-mono font-bold text-white">{formatTime(sessionDuration)}</span>
            </div>
            <div className="text-right border-l border-white/10 pl-6 font-semibold">
              <span className="text-[9px] font-mono text-slate-400 block uppercase">Cycles Done</span>
              <span className="text-xs font-mono font-bold text-white">{totalBreaths} Breaths</span>
            </div>
          </div>
        </div>

        {/* Circular Breath Expander Node */}
        <div className="my-10 relative flex items-center justify-center w-full z-10 select-none">
          
          {/* Dynamic ring sizing */}
          <div className="w-64 h-64 flex items-center justify-center relative">
            
            {/* Pulsating outer orb aura */}
            <AnimatePresence mode="popLayout">
              {isActive && (
                <motion.div
                  key={currentSegment}
                  initial={{ scale: 0.9, opacity: 0.1 }}
                  animate={{ 
                    scale: meta.scale,
                    opacity: currentSegment === 'Hold' || currentSegment === 'Hold Out' ? 0.45 : 0.25
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: currentSegment === 'Inhale' 
                      ? selectedPattern.inhale 
                      : currentSegment === 'Hold' 
                      ? selectedPattern.holdIn 
                      : currentSegment === 'Exhale' 
                      ? selectedPattern.exhale 
                      : selectedPattern.holdOut,
                    ease: 'easeInOut'
                  }}
                  className={`absolute w-32 h-32 rounded-full blur-xl pointer-events-none transition-colors duration-500 bg-gradient-to-tr ${meta.color}`}
                />
              )}
            </AnimatePresence>

            {/* Inner primary breath circle containing the countdown and text */}
            <motion.div
              animate={{ 
                scale: isActive ? meta.scale : 1.0,
              }}
              transition={{ 
                duration: !isActive 
                  ? 0.5 
                  : currentSegment === 'Inhale' 
                  ? selectedPattern.inhale 
                  : currentSegment === 'Hold' 
                  ? selectedPattern.holdIn 
                  : currentSegment === 'Exhale' 
                  ? selectedPattern.exhale 
                  : selectedPattern.holdOut,
                ease: 'easeInOut'
              }}
              className="w-32 h-32 rounded-full border bg-white/5 backdrop-blur-xl border-white/15 flex flex-col justify-center items-center shadow-lg transition-colors duration-500 z-10 animate-fade-in"
            >
              <div className="text-center p-3 select-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSegment + secondsRemaining}
                    initial={{ y: -3, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 3, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-4xl font-mono font-black text-white tracking-tight"
                  >
                    {isActive ? secondsRemaining : 'ॐ'}
                  </motion.div>
                </AnimatePresence>
                <div className="text-[10px] font-mono tracking-wider font-bold text-slate-400 mt-0.5 uppercase">
                  {isActive ? 'Seconds' : 'Ready'}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* State Information Display */}
        <div className="w-full text-center z-10 px-4">
          <div className="inline-flex flex-col items-center justify-center">
            <span className="text-[11px] font-serif font-bold text-orange-300 bg-orange-600/20 border border-orange-500/30 py-0.5 px-3 rounded-full mb-1">
              {isActive ? meta.sanskrit : 'प्राणायाम (Guided Pranayama)'}
            </span>
            <h4 className="text-md font-extrabold text-white font-sans tracking-tight">
              {isActive ? meta.text : 'Find a Calm Seated Position'}
            </h4>
            <p className="text-xs text-slate-300 max-w-sm mt-1 leading-relaxed font-sans font-medium">
              {isActive ? meta.instruction : 'Select a pattern on the left, align your spine, and prepare to expand your life force. Close your eyes and practice.'}
            </p>
          </div>
        </div>

        {/* Run / Pause Controls */}
        <div className="w-full flex items-center justify-center gap-4 z-10 mt-6 border-t border-white/10 pt-5">
          {!isActive ? (
            <button
              onClick={startBreathing}
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-sm shadow-md cursor-pointer transition-all"
              id="start-breath-btn"
            >
              <Play className="w-4 h-4 fill-current" />
              Begin Pranayama Session
            </button>
          ) : (
            <button
              onClick={stopBreathing}
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-sm shadow-md cursor-pointer transition-all"
              id="stop-breath-btn"
            >
              <Square className="w-4 h-4 fill-current" />
              Stop Session
            </button>
          )}

          <button
            onClick={handleReset}
            className="p-3 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 rounded-xl transition-all cursor-pointer shrink-0"
            title="Reset Counters"
            id="reset-breath-btn"
          >
            <RefreshCw className="w-4 h-4 text-slate-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
