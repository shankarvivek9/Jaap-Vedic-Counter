/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Star, Heart, Activity, ShieldCheck, Compass, HelpCircle, Layers, CheckCircle } from 'lucide-react';

interface HomepageWisdomProps {
  onSelectMantra?: (mantraName: string, suggestedLimit: number) => void;
  onNavigateTab?: (tab: 'wisdom' | 'meditation' | 'sounds') => void;
}

export default function HomepageWisdom({ onSelectMantra, onNavigateTab }: HomepageWisdomProps) {
  return (
    <section className="mt-8 space-y-8 border-t border-white/10 pt-8" id="homepage-wisdom-section">
      
      {/* 1. SECTION INTRO HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase py-1 px-3 bg-orange-500/10 rounded-full border border-orange-500/15">
          Vedic Compendium & Science of Sound
        </span>
        <h2 className="text-lg sm:text-lg font-black text-white tracking-tight">
          The Comprehensive Guide to Japa Yoga and Mantra Science
        </h2>
        <p className="text-xs text-slate-400 font-semibold leading-relaxed">
          Embark on an analytical journey through the neurological, cosmological, and spiritual dimensions of Sanskrit recitation.
        </p>
      </div>

      {/* 3. COLLAPSIBLE OR SIDE-BY-SIDE CONTENT BLOCK (Over 1500 target words) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="comprehensive-homepage-wisdom-grid">
        
        {/* LEFT COLUMN: CRITICAL DOCTRINE */}
        <div className="lg:col-span-8 space-y-6 text-xs sm:text-xs text-slate-300 leading-relaxed font-sans font-semibold text-justify">
          
          {/* ARTICLE CARD 1: What is Jaap? */}
          <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md" id="wisdom-what-is-jaap">
            <h3 className="text-xs font-black text-orange-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-white/5 pb-1">
              <Activity className="w-4 h-4" />
              1. What is Japa (Jaap)? The Metaphysics of primordial vibration
            </h3>
            <p>
              The Sanskrit term <strong>Japa</strong> (popularly pronounced as 'Jaap') is formulated from two phonetic roots: <em>'Ja'</em> (to destroy the cycle of birth, death, and mental friction) and <em>'Pa'</em> (to protect the practitioner from worldly and neurological instability). It represents a ancient, meditative practice in which a sacred Sanskrit mantra, phoneme, or divine name is repeatedly chanted. This repetition can occur audibly, in quiet whispers, or in absolute silence within the mind's container.
            </p>
            <p>
              In the Upanishads and Patanjali's Yoga Sutras, Japa is termed as <em>Svadhyaya</em> (spiritual self-study) and is classified under <em>Kriya Yoga</em>—the yoga of action. Unlike secular concentration exercises, Japa relies on <strong>Shabda Brahman</strong> (sound as the ultimate material cause of creation). Sages noted that the cosmos is not silent; it is composed of fluctuating energy bundles whose inherent state is vibrational sound (Nāda). Chanting represents the deliberate alignment of local biological energy with this macrocosmic current.
            </p>
          </div>

          {/* ARTICLE CARD 2: Benefits of Daily Jaap */}
          <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md" id="wisdom-benefits-of-daily-jaap">
            <h3 className="text-xs font-black text-orange-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-white/5 pb-1">
              <Heart className="w-4 h-4 text-rose-400" />
              2. Empirical Benefits of Daily Japa Practice: somatic and neural
            </h3>
            <p>
              Daily implementation of Japa yoga triggers a cascade of chemical and physiological changes in the human neuro-network:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-white/2 rounded-xl border border-white/5">
                <span className="font-extrabold text-white text-[11px] block text-orange-300">Vagal nerve activation</span>
                Rhythmic chant vibrations stimulate the sensory branches of the auricular glossopharyngeal and vagus nerves inside the throat cavity, shifting the nervous system from a fight-or-flight sympathetic response to a deeply restorative parasympathetic mode.
              </div>
              <div className="p-3 bg-white/2 rounded-xl border border-white/5">
                <span className="font-extrabold text-white text-[11px] block text-orange-300">Endocrine balancing</span>
                The tactile movement of the tongue across the 84 upper-palate reflex points fires signals to the hypothalamus, assisting the pituitary gland in regulating melatonin and reducing inflammatory chemical markers (cortisol).
              </div>
              <div className="p-3 bg-white/2 rounded-xl border border-white/5">
                <span className="font-extrabold text-white text-[11px] block text-orange-300">Synaptic synchronization</span>
                Electroencephalogram (EEG) research shows that sequential auditory repetition synchronizes the left and right hemispheres of the brain, creating strong alpha (relaxation) and theta (creative dream-state) wave rhythms.
              </div>
              <div className="p-3 bg-white/2 rounded-xl border border-white/5">
                <span className="font-extrabold text-white text-[11px] block text-orange-300">Cardiorespiratory coherence</span>
                Pronouncing mantras like "Om Namah Shivaya" naturally stretches the individual breath pattern to an average of six cycles per minute, facilitating cardiovascular blood pressure resonance with the heart rhythm.
              </div>
            </div>
          </div>

          {/* ARTICLE CARD 3: Why 108 Counts Matter */}
          <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md" id="wisdom-why-108-counts-matter">
            <h3 className="text-xs font-black text-orange-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-white/5 pb-1">
              <Layers className="w-4 h-4 text-amber-400" />
              3. Cosmic architecture of the number 108: why loops match planets
            </h3>
            <p>
              The count of <strong>108</strong> is not an arbitrary cultural preference; it is a profound scientific number that bridges biological anatomy with planetary coordinates:
            </p>
            <table className="w-full text-left text-[11px] border-collapse bg-white/2 rounded-xl overflow-hidden mt-1.5 border border-white/5">
              <thead>
                <tr className="bg-white/5 text-white">
                  <th className="p-2 border border-white/5">Index Dimension</th>
                  <th className="p-2 border border-white/5">Scientific Coordination Ratio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-white/5 font-bold">Solar-Lunar Clocks</td>
                  <td className="p-2 border border-white/5">The average physical distance from Earth to the Sun is approximately 108 times the Sun's diameter. Similarly, the distance between Earth and the Moon is 108 times the Moon's diameter.</td>
                </tr>
                <tr className="bg-white/2">
                  <td className="p-2 border border-white/5 font-bold">Yogic Physiology</td>
                  <td className="p-2 border border-white/5">The human energetic system contains 72,000 psychic channels (Nadis). Of these, 108 primary channels meet inside the heart chakra to regulate life energy (prana).</td>
                </tr>
                <tr>
                  <td className="p-2 border border-white/5 font-bold">Cosmological Math</td>
                  <td className="p-2 border border-white/5">Vedic astrology outlines 12 stellar zodiac signs and 9 active planetary influences. Multiplying 12 by 9 yields 108, aligning each chant bead with cosmic shifts.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ARTICLE CARD 4: How to Use Jaap Counter */}
          <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md" id="wisdom-how-to-use">
            <h3 className="text-xs font-black text-orange-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-white/5 pb-1">
              <Compass className="w-4 h-4 text-sky-400" />
              4. How to integrate this digital Japa Sadhana tool into your spiritual routine
            </h3>
            <p>
              Our application is formatted to serve both newcomers and advanced practitioners. For optimal integration, follow these practical steps:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-slate-350 font-semibold my-2">
              <li>
                <strong>Postural setup:</strong> Open the tool, sit facing East or North on an insulating cotton or wool blanket to retain your electrical bio-frequencies.
              </li>
              <li>
                <strong>Drone synchronization:</strong> Toggle the <em>Meditation Sounds</em> dashboard and adjust the volume on the cosmic 136.1 Hz Earth drone. Let this pure acoustic tone quiet your environmental background.
              </li>
              <li>
                <strong>Pranayama preparation:</strong> Visit the <em>Breathing Guide</em> tab, selecting the "Sama Vritti" (Equal Breathing) pattern for 3 to 5 minutes to clear airway carbon reserves.
              </li>
              <li>
                <strong>Active Counting:</strong> Return to the <em>Jaap Counter</em>, choose a traditional mantra (e.g., Mahamrityunjaya or Lakshmi Mantra) and start reciting. You can click the physical circular beads, use the keyboard Spacebar, or tap on mobile. The system logs active session durations and records daily counts in your local storage diary automatically.
              </li>
            </ol>
          </div>

        </div>

        {/* RIGHT COLUMN: DISCOVER DECK */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* FEATURED MANTRAS WIDGET */}
          <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-4.5 space-y-4 shadow-md text-xs font-semibold" id="featured-mantras-homepage-box">
            <span className="text-[9px] font-mono font-bold text-orange-450 uppercase tracking-widest block">FEATURED SADHANAS</span>
            <div className="space-y-3">
              {[
                { name: "Gayatri Mantra", desc: "Savitur radiance, ideal for intellect expansion.", count: 108 },
                { name: "Mahamrityunjaya Mantra", desc: "Shiva absolute, ideal for tissue healing and cellular strength.", count: 108 },
                { name: "Ganesh Mantra", desc: "Rampart remover of material barriers.", count: 108 },
              ].map((m, i) => (
                <div key={i} className="p-3 bg-white/2 border border-white/5 rounded-xl hover:border-orange-500/25 transition-all flex flex-col justify-between">
                  <div>
                    <h4 className="font-extrabold text-white text-[11px]">{m.name}</h4>
                    <p className="text-[10px] text-slate-400">{m.desc}</p>
                  </div>
                  {onSelectMantra && (
                    <button
                      onClick={() => onSelectMantra(m.name, m.count)}
                      className="mt-2 text-[10px] text-orange-400 hover:underline text-left cursor-pointer font-black"
                    >
                      Select to Chant →
                    </button>
                  )}
                </div>
              ))}
            </div>
            {onNavigateTab && (
              <button
                onClick={() => onNavigateTab('wisdom')}
                className="w-full py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-[10.5px] font-bold text-slate-300 text-center cursor-pointer transition-all"
              >
                View 50 Mantras Library
              </button>
            )}
          </div>

          {/* DYNAMIC FAQ ACCORDION BLOCK (Homepage Exceeds word counts) */}
          <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-4.5 space-y-4 shadow-md text-xs font-semibold" id="homepage-faqs-accordion-box">
            <span className="text-[9px] font-mono font-black text-emerald-450 uppercase tracking-widest block">HOMEPAGE FAQS</span>
            <div className="space-y-3">
              {[
                { 
                  q: "What should I do if my mind wanders during recitation?", 
                  a: "Do not judge your intellectual slips or feel disappointed. Treat mental drift as a normal physiological reaction. Gently restore focus to the physical motion of your hand or coordinate repetitions with slow respiratory holds." 
                },
                { 
                  q: "Can women practice Gayatri Mantra chanting daily?", 
                  a: "Yes. Authentic historical Vedic records confirm that noble female sages practiced Yajnas and recited the Gayatri without restriction. Sincere devotion is the only true spiritual criterion." 
                },
                { 
                  q: "Why is practicing on a wool or cotton mat important?", 
                  a: "Earth has a powerful structural ground potential. Biological nerves generate delicate micro-volt charges during rhythmic sound play. Sitting on natural insulating fabrics stops this restorative energy from routing directly into the ground." 
                }
              ].map((faq, i) => (
                <div key={i} className="p-3 bg-white/2 border border-white/5 rounded-xl space-y-1">
                  <h5 className="font-extrabold text-white text-[10.5px]">Q: {faq.q}</h5>
                  <p className="text-[10px] text-slate-400 leading-relaxed text-justify">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
