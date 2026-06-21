/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Play, Square, Music, Volume2, Sparkles, BookOpen, Sun, Radio, Info } from 'lucide-react';
import { AudioEngine } from './AudioEngine';

interface AmbientSoundSetting {
  id: 'om_drone' | 'solfeggio' | 'cosmic_silence';
  name: string;
  sanskritName: string;
  frequency: string;
  description: string;
  spiritualImpact: string;
  colorTheme: string;
}

const SOUNDS_DB: AmbientSoundSetting[] = [
  {
    id: 'om_drone',
    name: 'OM Sacred Drone',
    sanskritName: 'प्रणव नाद (Pranava Nada)',
    frequency: '136.10 Hz (Earth Day Frequency)',
    description: 'A deep, rich multi-harmonic drone tuned strictly to 136.1 Hz—the cosmic frequency of the Earth orbiting the Sun (calculated by Hans Cousto). Imparts absolute grounding.',
    spiritualImpact: 'Activates the Heart Chakra (Anahata), promotes absolute biological cell tuning, and connects your awareness with the organic heartbeat of nature.',
    colorTheme: 'shadow-orange-200 border-orange-250 bg-gradient-to-br from-orange-50/50 to-amber-50/20'
  },
  {
    id: 'solfeggio',
    name: 'Solfeggio Scale (Love Chord)',
    sanskritName: 'षड्ज राग (Vedic Chord Matrix)',
    frequency: '528 Hz & 432 Hz Healing Matrix',
    description: 'An ethereal sliding combination of healing frequencies. 432 Hz (the natural universe pitch) paired with 528 Hz (the transformation code frequency supporting cellular renewal). Includes ambient breath waves.',
    spiritualImpact: 'Calms internal stress hormones, stimulates deep peace, and repairs subtle structures of emotional/mental fatigue.',
    colorTheme: 'shadow-indigo-200 border-indigo-200 bg-gradient-to-br from-indigo-50/30 to-violet-50/10'
  },
  {
    id: 'cosmic_silence',
    name: 'Cosmic Silence (Chakra Hum)',
    sanskritName: 'शून्य आकाश (Shunya Sky)',
    frequency: '110 Hz / Warm Space Wind',
    description: 'Synthesizes deep, low-frequency atmospheric drafts and pink noise, simulating the quiet expanse of raw cosmos, eliminating rapid mental chatter.',
    spiritualImpact: 'Induces theta brainwave cycles, unlocks deep dreamless states, and frees your mind from the clutches of excessive physical attachment.',
    colorTheme: 'shadow-slate-200 border-slate-200 bg-gradient-to-br from-stone-50/40 to-slate-50/20'
  }
];

export default function MeditationSounds() {
  const [playingId, setPlayingId] = useState<'om_drone' | 'solfeggio' | 'cosmic_silence' | null>(null);
  const [volume, setVolume] = useState<number>(0.4);

  // Sync volume with compiler engine and clean up on component unmount
  useEffect(() => {
    if (playingId) {
      AudioEngine.setVolume(volume);
    }
  }, [volume, playingId]);

  // Clean up sound drone on screen navigate or component disposal
  useEffect(() => {
    return () => {
      AudioEngine.stop();
    };
  }, []);

  const handleSoundToggle = (sound: AmbientSoundSetting) => {
    if (playingId === sound.id) {
      AudioEngine.stop();
      setPlayingId(null);
    } else {
      AudioEngine.startDrone(sound.id, volume);
      setPlayingId(sound.id);
    }
  };

  const forceStopAll = () => {
    AudioEngine.stop();
    setPlayingId(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="synthesized-meditation-sounds-panel">
      
      {/* Sound Controller Grid */}
      <div className="lg:col-span-8 space-y-4 flex flex-col justify-between" id="drone-selections-column">
        <div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-orange-400 uppercase">SYNTHETIC RESONANCE</span>
              <h2 className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mt-0.5">Atmospheric Sound Drones</h2>
            </div>

            {playingId && (
              <button
                onClick={forceStopAll}
                className="flex items-center gap-2 py-2 px-4 rounded-xl border border-rose-500/30 bg-rose-600/20 text-rose-305 hover:bg-rose-600/30 text-xs font-bold focus:outline-none transition-colors cursor-pointer"
                id="stop-all-drones-btn"
              >
                <Square className="w-3.5 h-3.5 fill-current" />
                Silence Sound Drones
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SOUNDS_DB.map((sound) => {
              const isPlaying = playingId === sound.id;
              return (
                <div
                  key={sound.id}
                  className={`border rounded-2xl p-5 flex flex-col justify-between shadow-lg hover:shadow-orange-500/5 transition-all relative overflow-hidden backdrop-blur-3xl ${
                    isPlaying 
                      ? 'border-orange-500 bg-orange-500/15 scale-102 text-white shadow-orange-950/20' 
                      : 'border-white/15 bg-white/5 text-slate-300 hover:border-white/20 animate-fade-in'
                  }`}
                >
                  <div className="z-10">
                    <span className="text-[10px] font-mono select-none tracking-wider text-slate-300 bg-white/5 rounded-md py-0.5 px-2 font-bold uppercase border border-white/10">
                      {sound.frequency}
                    </span>
                    <h3 className="text-sm font-extrabold text-white mt-2 leading-tight">
                      {sound.name}
                    </h3>
                    <p className="text-[10.5px] text-orange-400 font-serif font-bold mt-0.5">
                      {sound.sanskritName}
                    </p>
                    <p className="text-xs text-slate-400 mt-3 line-clamp-4 leading-relaxed font-sans text-justify font-medium">
                      {sound.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between z-10 font-bold">
                    <span className="text-[10px] font-mono text-slate-400">
                      {isPlaying ? 'SOUND ON' : 'SOUND OFF'}
                    </span>
                    <button
                      onClick={() => handleSoundToggle(sound)}
                      className={`flex items-center gap-1.5 py-2 px-3.5 rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer ${
                        isPlaying
                          ? 'bg-orange-600 text-white hover:bg-orange-700'
                          : 'bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 hover:bg-white/10'
                      }`}
                      id={`play-sound-btn-${sound.id}`}
                    >
                      {isPlaying ? (
                        <>
                          <Square className="w-3 h-3 fill-current" />
                          Pause Drone
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 fill-current" />
                          Listen Sound
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Master Sound Volume controller bar */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
              <Volume2 className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">ACOUSTIC CONTROL</span>
              <h4 className="text-xs font-bold text-white mt-0.5">Master Sound Gain Control</h4>
            </div>
          </div>

          <div className="flex-1 max-w-sm flex items-center gap-3 font-mono text-xs">
            <span className="text-slate-500">0%</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1 accent-orange-600 h-2 bg-white/10 rounded-lg cursor-pointer focus:outline-none"
              id="drone-volume-slider"
            />
            <span className="text-orange-400 font-bold">{Math.round(volume * 100)}%</span>
          </div>
        </div>
      </div>

      {/* Acoustic Explanatory Sidebar */}
      <div className="lg:col-span-4" id="sound-education-sidebar">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg space-y-5 h-full flex flex-col justify-between text-slate-100 animate-fade-in">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-orange-400 uppercase">YOGIC SCIENCE</span>
              <h3 className="text-base font-bold text-white mt-0.5">Acoustics & Sound Therapy</h3>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans text-justify font-medium">
              In Vedic cosmology, sound (Nāda) is the fundamental building element of creation. Everything in the universe has a frequency. Listening to pure waves helps tune the active mind (Manas) to perfect resonance.
            </p>

            <div className="p-4 bg-orange-600/15 rounded-2xl border border-orange-500/20 space-y-3 shrink-0">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-300">
                <Sun className="w-4 h-4 text-orange-400" />
                Solfeggio Frequency Codes
              </div>
              <ul className="text-xs text-slate-305 space-y-2 leading-relaxed">
                <li className="flex gap-1 font-medium text-slate-300">
                  <span className="font-extrabold text-orange-400 font-mono">432 Hz:</span> 
                  Corresponds to sacred geometry. Realigns biological rhythms.
                </li>
                <li className="flex gap-1 font-medium text-slate-300">
                  <span className="font-extrabold text-orange-400 font-mono">528 Hz:</span> 
                  Known as the frequency of transformation and DNA repair.
                </li>
                <li className="flex gap-1 font-medium text-slate-300">
                  <span className="font-extrabold text-orange-400 font-mono">136.1 Hz:</span> 
                  Calculated from Earth's orbital period. Grounding and balancing.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 flex gap-2 text-xs text-slate-300 italic bg-white/5 p-3 rounded-xl border border-white/10 font-medium">
            <Info className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
            <span>Our meditation sound generator synthesizes harmonics live on your computer. Zero pre-recorded tracking.</span>
          </div>

          {/* ========================================================= */}
          {/* COMPREHENSIVE EDUCATIONAL COMPENDIUM SECTION FOR ADSENSE */}
          {/* ========================================================= */}
          <section className="mt-12 pt-8 border-t border-white/10 space-y-8 text-xs sm:text-xs text-slate-300 leading-relaxed font-sans text-justify" id="meditation-sounds-educational-depth">
            
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase py-1 px-3 bg-indigo-500/10 rounded-full border border-indigo-500/15">
                Neuro-Acoustic Resonance & Auditory Biophysics
              </span>
              <h2 className="text-md sm:text-lg font-black text-white tracking-tight">
                The Neurobiology of Frequency Entrainment in Meditation
              </h2>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                Explore how continuous harmonic waveforms influence brainwave synchronization and somatic relaxation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
                <h3 className="text-xs font-black text-indigo-400 uppercase tracking-wider border-b border-white/5 pb-1 flex items-center gap-1.5">
                  <Radio className="w-4 h-4" />
                  1. Auditory Drones & Cortical Response
                </h3>
                <p>
                  The human brain is continuously processing sensory inputs, with the auditory cortex operating as a highly sensitive environmental sensor. Under standard conditions, sudden sounds around us spark bursts of beta brainwave activity, keeping the mind alert and scanning for potential dangers. By contrast, listening to a steady, unchanging low-frequency soundscape (such as a 136.1 Hz OM drone) triggers a process called <strong>auditory sensory gating</strong>. 
                </p>
                <p>
                  As the auditory system adapts to the continuous drone, it filters out sudden background distractions. This lets the nervous system relax its hyper-alert posture. The cortical neurons begin to coordinate and sync with the slow, steady rhythm of the sound waves. This natural transition helps shift brainwave states from fast, reactive beta waves down into slower, deeply relaxing alpha and theta waves (ranging between 4 and 12 Hz), which are most commonly found in states of deep meditation.
                </p>
              </div>

              <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
                <h3 className="text-xs font-black text-indigo-400 uppercase tracking-wider border-b border-white/5 pb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  2. Science of 432 Hz and Solfeggio 528 Hz Matrix
                </h3>
                <p>
                  The pitches we choose to listen to hold unique physical relationships with the world around us. Standard modern Western musical instruments are tuned to a reference pitch of A = 440 Hz (established as an international standard in the mid-20th century). However, many historical tuning systems used a pitch of <strong>A = 432 Hz</strong>, which aligns naturally with ratios found in sacred geometry, natural proportions, and planetary orbit calculations. Listening to sounds tuned to 432 Hz offers a softer, more soothing experience that is gentler on the ear and supportive of autonomic rest.
                </p>
                <p>
                  Similarly, the Solfeggio Scale includes frequencies with historically celebrated wellness benefits. Among these, <strong>528 Hz</strong> is famously known as the frequency of transformation. Cellular biology studies indicate that playing 528 Hz waves can increase cell-membrane vitality and support natural restoration processes. When paired with the 136.1 Hz planetary pitch—which matches the calculated orbital vibration of the Earth—this harmonic combination provides a deeply grounding audio canvas for meditation.
                </p>
              </div>

              <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
                <h3 className="text-xs font-black text-indigo-400 uppercase tracking-wider border-b border-white/5 pb-1 flex items-center gap-1.5 text-indigo-404">
                  <BookOpen className="w-4 h-4 text-indigo-404" />
                  3. Traditional Sonic Metaphysics (Nada Yoga)
                </h3>
                <p>
                  In the classical philosophical traditions of India, sound (Shabda) is not merely a physical wave but is recognized as the primary vibration of the cosmos. The practice of <strong>Nāda Yoga</strong> (the Yoga of Sound) divides vibration into two distinct categories:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li>
                    <strong className="text-white text-[11px] block">1. Ahata Nāda (Struck Sound)</strong>
                    Physical sounds created by objects colliding, such as string vibrations, flowing water, vocal chords, or our synthesized electronic oscillators.
                  </li>
                  <li>
                    <strong className="text-white text-[11px] block">2. Anahata Nāda (Unstruck Sound)</strong>
                    The silent, absolute vibration of the universe, perceived only in deepest meditation when the physical senses are completely quiet.
                  </li>
                </ul>
                <p>
                  By using fine struck sounds—like our pure, live-synthesized cosmic drones—we build a bridge for our awareness. Focusing the active mind on these clean physical frequencies makes it easier to let go of external thoughts and step closer to experiencing peaceful inner quiet.
                </p>
              </div>

              <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
                <h3 className="text-xs font-black text-indigo-400 uppercase tracking-wider border-b border-white/5 pb-1 flex items-center gap-1.5">
                  <Info className="w-4 h-4" />
                  4. Frequently Asked Sound Therapy Questions
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-extrabold text-white text-[10.5px]">Q: Why use live-synthesized sound over recorded files?</h4>
                    <p className="text-[10px] text-slate-400">
                      Live synthesis generates clean, seamless mathematical waves that don't repeat or loop, which prevents the brain from noticing artificial breaks and staying alert.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-[10.5px]">Q: Do I need headphones to experience these sounds?</h4>
                    <p className="text-[10px] text-slate-400">
                      While headphones capture subtle stereo splits and deep resonances best, standard speakers are completely sufficient to mask background noise and create a calming ambiance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-[10.5px]">Q: Are there any safe limits to audio volume?</h4>
                    <p className="text-[10px] text-slate-400">
                      Yes. Always keep your volume at a gentle, comfortable level (around 40% to 50% scale) to support relaxation without causing auditory fatigue.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-[#0e1424]/40 border border-white/5 rounded-2xl p-5 space-y-2 text-justify">
              <h3 className="font-extrabold text-[#fff] text-xs">Unifying Chanting and Acoustic Drones</h3>
              <p>
                Using a steady ambient drone alongside your daily Japa counting builds a highly supportive, distraction-free meditation environment. The drone provides a reassuring acoustic base that helps stabilize pitch, matches biological rhythms, and eases vocal tension. At the same time, maintaining a slow, rhythmic chant engages your natural breathing cycles. This combination creates a deeply calming feedback loop that settles the mind, protects your focus, and makes your practice a restful, restorative experience.
              </p>
            </div>

          </section>

        </div>
      </div>
    </div>
  );
}
