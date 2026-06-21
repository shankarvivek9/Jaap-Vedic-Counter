/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCcw, Volume2, VolumeX, Shield, Award, Sparkles, BookOpen, ChevronDown, Check } from 'lucide-react';
import { MANTRAS } from './MantraData';
import { AudioEngine } from './AudioEngine';
import { Mantra, ChantingSession } from '../types';

interface JaapCounterProps {
  onSessionComplete: (session: ChantingSession) => void;
  initialMantraName?: string | null;
  initialTargetLimit?: number | null;
  onClearInitialMantra?: () => void;
}

export default function JaapCounter({ 
  onSessionComplete,
  initialMantraName,
  initialTargetLimit,
  onClearInitialMantra
}: JaapCounterProps) {
  const [selectedMantra, setSelectedMantra] = useState<Mantra>(MANTRAS[0]);
  const [count, setCount] = useState<number>(0);
  const [target, setTarget] = useState<number>(108);
  const [completedMalas, setCompletedMalas] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [soundType, setSoundType] = useState<'ting' | 'low_tock'>('ting');
  const [showMantraDetail, setShowMantraDetail] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [touchActive, setTouchActive] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to initial values if passed from homepage or knowledge hub
  useEffect(() => {
    if (initialMantraName) {
      const match = MANTRAS.find(m => m.name.toLowerCase().includes(initialMantraName.toLowerCase()));
      if (match) {
        setSelectedMantra(match);
        setCount(0);
        setCompletedMalas(0);
        if (initialTargetLimit) {
          setTarget(initialTargetLimit);
        }
        setToastMessage(`Preselected: ${match.name}`);
      }
      if (onClearInitialMantra) {
        onClearInitialMantra();
      }
    }
  }, [initialMantraName, initialTargetLimit]);

  // References to handle keyboard shortcuts
  const counterRef = useRef<HTMLButtonElement>(null);

  // Reset starting time when mantra changes
  useEffect(() => {
    setStartTime(Date.now());
  }, [selectedMantra]);

  // Toast auto-clear
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Handle keyboard events (Space or Enter to increment)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        incrementCount();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [count, selectedMantra, target, soundEnabled, soundType]);

  const playClickSound = () => {
    if (!soundEnabled) return;
    if (soundType === 'ting') {
      AudioEngine.playTing(523.25); // C5 therapeutic bell tone
    } else {
      AudioEngine.playLowTock();
    }
  };

  const incrementCount = () => {
    playClickSound();
    
    setCount(prev => {
      const nextCount = prev + 1;
      
      // Calculate if a complete Mala cycle has been done
      if (nextCount > 0 && nextCount % target === 0) {
        setCompletedMalas(m => m + 1);
        // Special celebrative gong for completing a round
        if (soundEnabled) {
          setTimeout(() => {
            AudioEngine.playTing(329.63); // Deep E4 bell
            setTimeout(() => AudioEngine.playTing(440.00), 150); // Uplifting A4 bell
          }, 300);
        }
      }
      
      return nextCount;
    });
  };

  const handleReset = () => {
    if (count > 0) {
      if (window.confirm('Reset this chanting session? Completed counts will be saved if you submit.')) {
        submitSession();
        setCount(0);
        setCompletedMalas(0);
        setStartTime(Date.now());
        setToastMessage("Session auto-saved and reset.");
      }
    } else {
      setCount(0);
      setCompletedMalas(0);
      setStartTime(Date.now());
    }
  };

  const submitSession = () => {
    if (count === 0) return;
    
    const durationSeconds = Math.round((Date.now() - startTime) / 1000);
    const session: ChantingSession = {
      id: Math.random().toString(36).substring(2, 11),
      mantraId: selectedMantra.id,
      mantraName: selectedMantra.name,
      count: count,
      completedMalas: completedMalas === 0 && count > 0 ? Number((count / target).toFixed(2)) : completedMalas,
      timestamp: new Date().toISOString(),
      durationSeconds: Math.max(durationSeconds, 5), // dynamic session duration
    };

    onSessionComplete(session);
  };

  const forceSubmit = () => {
    submitSession();
    setToastMessage(`Sadhana saved! ${count} chants recorded under ${selectedMantra.name}.`);
    setCount(0);
    setCompletedMalas(0);
    setStartTime(Date.now());
  };

  const currentMalaProgress = count % target;
  const progressPercent = (currentMalaProgress / target) * 100;

  // Let's generate points for 108 beads arranged in a circle
  // We don't render all 108 individual divs if performance is heavy,
  // instead we can show a stunning representation of 108 beads using SVGs, or 54 beads for a half-mala loop.
  // Let's render a gorgeous loop of 54 circles (representing double speed beads or half-mala) to keep UI neat and responsive!
  const beadsCount = 54;
  const radius = 100; 
  const center = 120;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="jaap-container-section">
      {/* Chanting & Counter Zone */}
      <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between shadow-lg relative overflow-hidden text-slate-100">
        
        {/* Floating Toast notification overlay */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute bottom-20 left-4 right-4 bg-orange-600/90 backdrop-blur-md text-white border border-orange-500/30 font-semibold text-xs py-3 px-4 rounded-xl text-center shadow-lg z-50 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
              {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle glowing halo base */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

        {/* Top Header - Controls */}
        <div className="w-full flex justify-between items-center z-10">
          <div>
            <div className="text-xs font-mono text-orange-400 uppercase tracking-wider flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-505 bg-orange-500 animate-pulse"></span>
              Sadhana State
            </div>
            <h3 className="text-sm font-semibold text-slate-350 mt-1">Active Japa Practice</h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Click Sound Settings */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2.5 rounded-full border transition-all ${
                soundEnabled 
                  ? 'bg-orange-500/20 border-orange-500/30 text-orange-355 text-orange-350 shadow-md hover:bg-orange-500/30' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
              }`}
              title={soundEnabled ? "Disable Chime Sound" : "Enable Chime Sound"}
              id="sound-toggle-btn"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {soundEnabled && (
              <select
                value={soundType}
                onChange={(e) => setSoundType(e.target.value as any)}
                className="text-xs bg-[#121929] border border-white/10 text-slate-205 text-slate-200 py-1.5 px-3 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-500 font-medium"
              >
                <option value="ting">Singing Bowl</option>
                <option value="low_tock">Soft Tock</option>
              </select>
            )}
          </div>
        </div>

        {/* Interactive Mala Bead Circle and Tap Pad */}
        <div className="my-8 flex flex-col items-center justify-center relative w-full select-none">
          
          {/* Circular Bead Display Vector container */}
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] flex items-center justify-center">
            
            {/* The SVG Bead Necklace underlay */}
            <svg 
              className="absolute w-full h-full transform -rotate-90 pointer-events-none"
              viewBox={`0 0 ${center * 2} ${center * 2}`}
            >
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                className="opacity-70"
              />
              
              {/* Render beads around the circle */}
              {Array.from({ length: beadsCount }).map((_, i) => {
                const angle = (i * 2 * Math.PI) / beadsCount;
                const bx = center + radius * Math.cos(angle);
                const by = center + radius * Math.sin(angle);
                
                // Determine completion state of this bead
                // If current Mala progress covers this portion of the loop
                const progressUnit = (i / beadsCount) * target;
                const isChanted = currentMalaProgress > progressUnit;
                const isNext = Math.floor((currentMalaProgress / target) * beadsCount) === i;

                return (
                  <circle
                    key={i}
                    cx={bx}
                    cy={by}
                    r={isNext ? 4.5 : isChanted ? 3.5 : 2.5}
                    className="transition-all duration-300"
                    fill={isNext ? '#f97316' : isChanted ? '#f97316' : 'rgba(255, 255, 255, 0.25)'}
                    filter={isChanted || isNext ? 'drop-shadow(0 0 3px rgba(249,115,22,0.8))' : 'none'}
                  />
                );
              })}
            </svg>

            {/* Tap Area (Inner Sphere Cushion) */}
            <button
              ref={counterRef}
              onClick={incrementCount}
              onMouseDown={() => setTouchActive(true)}
              onMouseUp={() => setTouchActive(false)}
              onMouseLeave={() => setTouchActive(false)}
              onTouchStart={() => { setTouchActive(true); }}
              onTouchEnd={() => { setTouchActive(false); }}
              className={`absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/50 z-10 ${
                touchActive 
                  ? 'bg-orange-500/20 border border-orange-400/50 scale-98 shadow-inner shadow-orange-500/30' 
                  : 'bg-white/5 border border-white/15 shadow-xl hover:shadow-orange-500/5 hover:border-white/25 hover:bg-white/10'
              }`}
              style={{
                borderRadius: '50%',
                transitionTimingFunction: 'cubic-bezier(0.1, 0.8, 0.25, 1)',
              }}
              id="tap-chanting-pad-circle"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-dashed border-white/10 rounded-full animate-spin" style={{ animationDuration: '60s' }} />

              <span className="text-xs font-mono font-bold tracking-wider text-orange-400 mb-1">TAP TO CHANT</span>
              
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={count}
                  initial={{ scale: 0.8, opacity: 0, y: -5 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 1.1, opacity: 0, y: 5 }}
                  transition={{ duration: 0.12 }}
                  className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight select-none"
                >
                  {count}
                </motion.div>
              </AnimatePresence>

              {completedMalas > 0 && (
                <div className="mt-1 text-xs text-orange-355 font-bold bg-orange-500/20 py-1 px-2.5 rounded-full border border-orange-500/30 text-orange-300">
                  {completedMalas} {completedMalas === 1 ? 'Mala' : 'Malas'}
                </div>
              )}

              {/* Little dynamic ring indicating mala progress percent */}
              <div className="absolute bottom-4 text-[10px] font-mono text-slate-400">
                Mala progress: {Math.round(progressPercent)}%
              </div>
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-400 font-medium">
              Tip: Press <kbd className="px-1.5 py-0.5 rounded-md border border-white/10 bg-white/5 font-mono text-[10px] text-slate-300">Spacebar</kbd> in desktop to chant gracefully
            </p>
          </div>
        </div>

        {/* Bottom Control Bars */}
        <div className="w-full flex gap-3 sm:gap-4 z-10">
          <button
            onClick={handleReset}
            className="flex-1 flex justify-center items-center gap-2 py-3 border border-white/10 text-slate-300 hover:text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-colors bg-white/5 shadow-md"
            id="reset-session-btn"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Cycle
          </button>

          <button
            onClick={forceSubmit}
            disabled={count === 0}
            className={`flex-1 flex justify-center items-center gap-2 py-3 font-semibold text-sm rounded-xl transition-all shadow-md ${
              count > 0 
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-700 cursor-pointer shadow-lg shadow-orange-900/25 ring-1 ring-orange-500/40' 
                : 'bg-white/5 text-slate-500 border border-white/10 cursor-not-allowed'
            }`}
            id="complete-session-btn"
          >
            <Award className="w-4 h-4" />
            Save Sadhana
          </button>
        </div>
      </div>

      {/* Mantra Library & Core Details Sidecard */}
      <div className="lg:col-span-5 flex flex-col gap-6" id="mantra-selection-panel">
        
        {/* Selector Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg">
          <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">CHOOSE MANTRA</span>
          <h2 className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mt-1 mb-4">Vedic Repositories</h2>
          
          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
            {MANTRAS.map((m) => {
              const works = selectedMantra.id === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    setSelectedMantra(m);
                    setCount(0);
                    setCompletedMalas(0);
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                    works
                      ? 'border-orange-500/50 bg-orange-500/10 shadow-md text-white'
                      : 'border-white/5 hover:bg-white/5 hover:border-white/10 text-slate-300'
                  }`}
                >
                  <div className="flex-1 mr-2">
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold text-sm ${works ? 'text-white' : 'text-slate-200'}`}>{m.name}</span>
                      {works && (
                        <span className="bg-orange-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 shadow-md">
                          <Check className="w-2.5 h-2.5" /> Selected
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-1 italic mt-0.5 font-sans leading-relaxed">
                      {m.sanskrit}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-2 items-center justify-between">
            <span className="text-xs text-slate-400 font-semibold font-sans">Set Mala Target Size:</span>
            <div className="flex gap-1">
              {[27, 54, 108, 1008].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTarget(t);
                    setCount(0);
                    setCompletedMalas(0);
                  }}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-mono font-bold transition-all cursor-pointer ${
                    target === t 
                      ? 'bg-orange-600 text-white border-orange-500 shadow-md' 
                      : 'bg-white/5 text-slate-305 text-slate-300 border-white/10 hover:bg-white/10'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Mantra Deconstruction Panel */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg flex-1 flex flex-col justify-between animate-fade-in">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-orange-400 uppercase">DEEP KNOWLEDGE</span>
                <h3 className="text-lg font-bold text-white mt-0.5">{selectedMantra.name}</h3>
              </div>
              <BookOpen className="w-5 h-5 text-orange-505 text-orange-500" />
            </div>

            {/* Sacred Devnagari Writing */}
            <div className="mt-4 bg-orange-500/10 border border-orange-500/20 p-4 rounded-2xl shadow-inner text-center">
              <p className="text-lg sm:text-xl font-bold text-orange-350 font-serif leading-loose select-all tracking-wide">
                {selectedMantra.sanskrit}
              </p>
            </div>

            {/* Transliteration */}
            <div className="mt-3">
              <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase">Transliteration</span>
              <p className="text-xs text-orange-300 mt-1 font-medium bg-white/5 p-2.5 rounded-xl leading-relaxed italic border border-white/10">
                {selectedMantra.transliteration}
              </p>
            </div>

            {/* Benefit highlights */}
            <div className="mt-4 flex flex-col gap-3 text-xs text-amber-100 bg-orange-600/15 border border-orange-500/30 p-3.5 rounded-2xl">
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-orange-300">Sadhana Benefit</strong>
                  {selectedMantra.benefits}
                </div>
              </div>
              {selectedMantra.hindiBenefits && (
                <div className="flex items-start gap-2 border-t border-orange-500/10 pt-2.5">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/10 rounded-full border border-orange-500/20 shrink-0">हिन्दी अनुवाद</span>
                  <div className="text-orange-200 leading-normal font-medium">
                    {selectedMantra.hindiBenefits}
                  </div>
                </div>
              )}
            </div>

            {/* English meaning */}
            <div className="mt-4">
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">Spiritual Substance (English)</span>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed font-sans font-medium text-justify">
                {selectedMantra.meaning}
              </p>
            </div>

            {/* Hindi meaning */}
            {selectedMantra.hindiMeaning && (
              <div className="mt-4 pt-3 border-t border-white/5">
                <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase">मंत्र अर्थ (हिन्दी)</span>
                <p className="text-xs text-orange-100 mt-1 leading-relaxed font-serif text-justify font-medium">
                  {selectedMantra.hindiMeaning}
                </p>
              </div>
            )}
          </div>

          {/* Word by word breakdown Sheet trigger */}
          {selectedMantra.wordByWord && (
            <div className="mt-5 pt-4 border-t border-white/10">
              <button
                onClick={() => setShowMantraDetail(!showMantraDetail)}
                className="w-full flex items-center justify-between py-2 text-xs font-bold text-orange-300 hover:text-orange-200 select-all cursor-pointer"
              >
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-orange-505 text-orange-500" />
                  {showMantraDetail ? "Hide Word-by-Word Sanskrit Meaning" : "Expand Word-by-word Sanskrit Meaning"}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showMantraDetail ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showMantraDetail && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden mt-2 bg-white/5 rounded-2xl border border-white/10"
                  >
                    <div className="p-3 text-xs max-h-54 overflow-y-auto divide-y divide-white/10">
                      {selectedMantra.wordByWord.map((w, idx) => (
                        <div key={idx} className="py-2 flex flex-col sm:flex-row sm:justify-between gap-1">
                          <span className="font-bold text-orange-355 text-orange-350 font-serif text-sm">{w.word}</span>
                          <span className="text-slate-300 font-sans sm:text-right">{w.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
