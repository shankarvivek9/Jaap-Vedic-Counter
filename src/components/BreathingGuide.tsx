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

        {/* ========================================================= */}
        {/* COMPREHENSIVE EDUCATIONAL COMPENDIUM SECTION FOR ADSENSE */}
        {/* ========================================================= */}
        <section className="mt-12 pt-8 border-t border-white/10 space-y-8 text-xs sm:text-xs text-slate-300 leading-relaxed font-sans text-justify" id="breathing-educational-depth">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-teal-400 uppercase py-1 px-3 bg-teal-500/10 rounded-full border border-teal-500/15">
              Pranayama Biological Science & Physiology
            </span>
            <h2 className="text-md sm:text-lg font-black text-white tracking-tight">
              Biophysical Mechanisms of Breath Regulation and Nervous Control
            </h2>
            <p className="text-xs text-slate-400 font-semibold leading-relaxed">
              Explore how altering breathing frequency triggers direct parasympathetic activation and cerebral hemisphere balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
              <h3 className="text-xs font-black text-teal-400 uppercase tracking-wider border-b border-white/5 pb-1 flex items-center gap-1.5">
                <Wind className="w-4 h-4" />
                1. Autonomic Nervous System & Vagal Activation
              </h3>
              <p>
                The human respiratory system is uniquely positioned at the intersection of voluntary and involuntary bodily control. In standard day-to-day conditions, breathing is governed by the pacemakers of the brainstem. However, through conscious intention, we can easily change our rate of inhalation and exhalation. When we practice slow, deliberate breathing patterns (at a frequency of about 5 to 6 breath cycles per minute), we activate a beautiful cascade of physiological events.
              </p>
              <p>
                The major pathway of this calming response is the <strong>Vagus Nerve</strong> (the tenth cranial nerve). The Vagus nerve serves as a sensory superhighway connecting our thoracic organs directly to the brainstem. When you take deep, slow breaths, you expand the elastic tissue of your airways. This physical expansion stimulates the pulmonary stretch receptors. These receptors immediately send nerve signals back to the brainstem to inhibit the sympathetic "fight-or-flight" nervous system. This causes a gentle drop in heart rate, lowers arterial blood pressure, and calms salivary cortisol outputs.
              </p>
            </div>

            <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
              <h3 className="text-xs font-black text-teal-400 uppercase tracking-wider border-b border-white/5 pb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                2. Mechanics of Box Breathing & 4-7-8 Rhythms
              </h3>
              <p>
                Two of the most helpful paced pranayama practices are <strong>Box Breathing (Sama Vritti)</strong> and the <strong>4-7-8 Tranquilization (Prana Vardhak)</strong> pattern. Box Breathing relies entirely on equal square ratios: an equal length for inhaling, holding, exhaling, and keeping the lungs empty. In traditional yoga texts, the internal breath-hold is termed <em>Antar Kumbhaka</em>, while the external hold is termed <em>Bahir Kumbhaka</em>. 
              </p>
              <p>
                Keeping the breath still at equal ratios allows carbon dioxide reserves in the bloodstream to rise slightly to healthy levels. This slight rise relaxes vascular smooth muscles, improving oxygen delivery to key brain centers. The 4-7-8 pattern is designed specifically to act as an immediate natural tranquilizer. The long, prolonged 8-second exhale activates a deep parasympathetic response. It clears old, static air out of the lungs, reduces work anxiety, and helps the body settle into restorative sleep.
              </p>
            </div>

            <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
              <h3 className="text-xs font-black text-teal-450 uppercase tracking-wider border-b border-white/5 pb-1 flex items-center gap-1.5 text-teal-450">
                <Sliders className="w-4 h-4 text-teal-450" />
                3. The Five Dimensions of Prana (Pancha Pranas)
              </h3>
              <p>
                In the classical Upanishads, life-force energy (Prana) is undivided but manifests inside the body as five unique directions or dynamic fields, known as the <strong>Pancha Pranas</strong>:
              </p>
              <ul className="space-y-2 list-none pl-0">
                <li>
                  <strong className="text-white text-[11px] block">1. Prana Vayu (Inward Motion)</strong>
                  Located in the chest and nose. It governs of sensory reception, oxygenation, and general vital energy.
                </li>
                <li>
                  <strong className="text-white text-[11px] block">2. Apana Vayu (Downward Motion)</strong>
                  Located in the lower abdomen, ruling cleansing and grounding energy.
                </li>
                <li>
                  <strong className="text-white text-[11px] block">3. Samana Vayu (Equalizing Motion)</strong>
                  Centering around the solar plexus. Governs system assimilation and physical heat distribution.
                </li>
                <li>
                  <strong className="text-white text-[11px] block">4. Udana Vayu (Upward Motion)</strong>
                  Centering in the throat cavity. Supports vocal expression, mental clarity, and posture.
                </li>
                <li>
                  <strong className="text-white text-[11px] block">5. Vyana Vayu (Pervasive Motion)</strong>
                  Covers the entire nervous and circulatory system, regulating blood flow and muscle cohesion.
                </li>
              </ul>
            </div>

            <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
              <h3 className="text-xs font-black text-teal-400 uppercase tracking-wider border-b border-white/5 pb-1 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                4. Structured Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-extrabold text-white text-[10.5px]">Q: Why is breath-holding (Kumbhaka) practiced?</h4>
                  <p className="text-[10px] text-slate-400">
                    Sustained breath-holding calms sensory perception, lowers rapid thinking, and trains local neural receptors to adapt gracefully to fluctuations in blood oxygen and carbon dioxide levels.
                  </p>
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-[10.5px]">Q: Who should avoid advanced breath-retention?</h4>
                  <p className="text-[10px] text-slate-400">
                    Anyone dealing with respiratory disorders, high blood pressure, or cardiovascular history should consult a doctor and focus entirely on unhurried, natural breathing without long holding cycles.
                  </p>
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-[10.5px]">Q: How often should I practice paced breathwork?</h4>
                  <p className="text-[10px] text-slate-400">
                    A regular practice of 5 to 10 minutes right before your morning or evening Japa chanting is best. This sets a steady, peaceful foundation for deep focus.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-[#0e1424]/40 border border-white/5 rounded-2xl p-5 space-y-2 text-justify">
            <h3 className="font-extrabold text-[#fff] text-xs">Aesthetic Integration of Pranayama and Mantra Science</h3>
            <p>
              Combining paced pranayama with traditional Japa (mantra chanting) builds a complete wellness framework. The physical breath preparation lowers background mental noise, creating a quiet space that allows the syllables of Sanskrit chants to resonate clearly. This process calms sensory over-stimulation and supports emotional steadying. Whether seeking quiet stress relief or deep meditative contemplation, establishing a mindful sync between biological breath and vocalized sound frequencies helps restore overall mental peace.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}
