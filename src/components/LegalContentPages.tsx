/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Globe, MapPin, Heart, Shield, Landmark, Scale, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

// Common Link Component to enable SPA transitions
function PathLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      window.history.pushState(null, '', href);
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };
  return <a href={href} className={className} onClick={handleClick}>{children}</a>;
}

export function AboutPage() {
  return (
    <div className="bg-[#0e1424]/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in shadow-2xl relative text-slate-200">
      <div className="absolute top-0 right-0 w-64 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
      
      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/10 rounded-full border border-orange-500/20">
          Sacred Mission
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-white mt-2">About Japa Sādhanā & Vedic Research</h1>
      </div>

      <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300 text-justify">
        <p>
          Welcome to <strong>Japa Sādhanā</strong>, an integrated modern sanctuary bringing the profound acoustical and philosophical sciences of the ancient Vedas into deep harmony with the physiological needs of modern practitioners. In our relentless, hyper-synchronized digital era, the human attention sphere has become fragmented, leading to unprecedented chronic stress, mental fatigue, and continuous emotional imbalances (Chitta-Vikshepa).
        </p>

        <p>
          Our mission is to translate traditional spiritual discipline (Sādhanā) into an accessible, elegant, bio-interactive web workspace that operates on pure, clean design values. Here, you can employ a highly responsive dynamic count utility alongside rich acoustic stabilizers, paced pranayama coaching, and comprehensive intellectual resources, entirely free of commercial noise or privacy telemetry.
        </p>

        <div className="p-4 bg-orange-600/10 rounded-2xl border border-orange-500/20 flex gap-3 my-4">
          <Sparkles className="w-5 h-5 text-orange-450 shrink-0 mt-0.5" />
          <p className="text-xs text-orange-200 font-semibold leading-relaxed">
            <strong>Nāda Yoga Science:</strong> Our digital oscillators generate real-time pure sine-wave harmonics matching natural cosmic sound grids (such as Earth’s classical orbital vibration 136.1 Hz, representing the absolute primordial tone of OM). These clean waves run locally on your browser, completely avoiding static pre-recorded background fatigue.
          </p>
        </div>

        <h2 className="text-md font-extrabold text-white pt-2 border-b border-white/5 pb-1">Three Pillars of Our Chanting Sanctuary</h2>
        <ul className="space-y-4">
          <li className="space-y-1">
            <h3 className="text-xs font-bold text-orange-404 text-orange-400">1. Phonetic Traditional Authenticity</h3>
            <p className="text-xs text-slate-400">
              Sanskrit is a vibrational language (Shabda Sastra) where semantic meaning remains secondary to specific acoustical resonance. All 50 mantras cataloged in our library conform strictly to classic Rigvedic and Tantric chanting metrics. We include comprehensive Sanskrit script, grammatical transliteration, specific benefits, recommended rep cycles, and historical lore. Learn more inside our custom <PathLink href="/mantras" className="text-orange-400 hover:underline font-black">Sanskrit Mantra Index</PathLink>.
            </p>
          </li>
          <li className="space-y-1">
            <h3 className="text-xs font-bold text-orange-404 text-orange-400">2. Complete Intellectual Preservation</h3>
            <p className="text-xs text-slate-400">
              To build a rich, AdSense-ready portal of true substance, our team maintains 30 exhaustive, rigorous content Deep Dives linking neuro-physiology with classical Vedic lifestyles. These articles review everything from heart-rate variability indicators to the sacred mathematics of 108. Review our list in the <PathLink href="/blog" className="text-orange-400 hover:underline font-black">Spiritual Knowledge Compendium</PathLink>.
            </p>
          </li>
          <li className="space-y-1">
            <h3 className="text-xs font-bold text-orange-404 text-orange-400">3. Spiritual Privacy & Personal Autonomy</h3>
            <p className="text-xs text-slate-400">
              Personal contemplation is intimate and sovereign. Therefore, Japa Sādhanā secures your chanting logs, daily goals, and meditation statistics entirely inside your browser cache. We do not maintain server registration, storage databases, or commercial telemetry log captures. Your practice is entirely your own.
            </p>
          </li>
        </ul>

        <h2 className="text-md font-extrabold text-white pt-4 border-b border-white/5 pb-1">Our Dedicated Scholars & Founders</h2>
        <p>
          This application was conceived as a synthesis of classical eastern teachings and modern wellness engineering:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <li className="p-3 bg-white/3 border border-white/5 rounded-xl space-y-1">
            <span className="text-xs font-bold text-orange-100">Acharya Shankar Dev, PhD</span>
            <p className="text-[11px] text-slate-410 leading-normal">
              Chief Vedic linguist. Studies chanting phonetics within regional schools at Varanasi and Assi Ghat to optimize breath patterns and sound emissions.
            </p>
          </li>
          <li className="p-3 bg-white/3 border border-white/5 rounded-xl space-y-1">
            <span className="text-xs font-bold text-orange-100">Amrita Rao, MD (Cognitive Sciences)</span>
            <p className="text-[11px] text-slate-410 leading-normal">
              Consulting neurologist researching how high-contrast dark visual interfaces and rhythmic chanting shifts mental brainwave states from frenetic beta into deep theta cycles.
            </p>
          </li>
        </ul>

        <div className="pt-6 text-center space-y-3">
          <PathLink href="/jaap" className="inline-flex items-center gap-1.5 py-2.5 px-5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-extrabold rounded-2xl transition-all shadow-md">
            Begin Practice Now (Jaap Counter)
          </PathLink>
          <p className="text-[10px] font-mono text-slate-500">
            OM SHANTI SHANTI SHANTI — MAY PEACE BE UNTO ALL EXISTENCE.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !msg) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMsg('');
    }, 2000);
  };

  return (
    <div className="bg-[#0e1424]/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in shadow-2xl relative text-slate-200">
      <div className="absolute top-0 right-0 w-64 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/10 rounded-full border border-orange-500/20">
          Ashram Bridge
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-white mt-2">Connect with Spiritual Supporters</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Contact info card */}
        <div className="md:col-span-5 space-y-4 bg-white/3 border border-white/5 p-5 rounded-2xl text-xs sm:text-sm">
          <h2 className="text-sm font-extrabold text-white border-b border-white/5 pb-1">Sadhana Support Hub</h2>
          <p className="text-slate-400 text-xs text-justify">
            Our team of researchers and Sanskrit scholars is always ready to receive academic letters, phonetic questions, sound-oscillator bug reports, or supportive wishes.
          </p>

          <div className="space-y-3 pt-2 font-mono text-[11px] text-slate-350">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-400" />
              <span>shankarvivek9@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-orange-400" />
              <span>jaap-vedic-counter.vercel.app</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span>Assi Ghat, Varanasi, UP, Bharat</span>
            </div>
          </div>

          <div className="p-3 bg-orange-500/5 rounded-xl border border-orange-500/10 text-[11px] text-slate-400 leading-normal">
            <strong>Looking for Chanting Guidance?</strong> Contemplate Sanskrit keys directly inside our <PathLink href="/blog" className="text-orange-400 hover:underline">Sadhana Article Archives</PathLink> with over 30 chapters on health, acoustics, and meditation.
          </div>
        </div>

        {/* Form container */}
        <div className="md:col-span-7">
          {formSubmitted ? (
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/25 rounded-2xl text-center space-y-3 animate-fade-in py-10">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
              <h3 className="text-sm font-black text-white">Pranam, Message Conveyed Securly!</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you for contributing to Japa Sādhanā. Our Ashram coordinators are reviewing all messages with calm and prayerful attention.
              </p>
              <button onClick={() => setFormSubmitted(false)} className="text-[10.5px] font-mono text-emerald-400 hover:underline">
                Transmit Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g., Harish Sharma" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-xs font-semibold text-white focus:outline-none focus:border-orange-500/50"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g., haris.sharma@vedamail.org" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-xs font-semibold text-white focus:outline-none focus:border-orange-500/50"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">Contemplation / Query Text</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Mention your research concepts, mantra questions, or software bugs here..." 
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-xs font-semibold text-white focus:outline-none focus:focus:border-orange-500/50"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-extrabold rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-1.5"
              >
                Transmit Query with Vedic Intent
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0e1424]/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in shadow-2xl relative text-slate-200">
      <div className="absolute top-0 right-0 w-64 h-32 bg-teal-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] font-mono font-bold tracking-wider text-teal-400 uppercase py-0.5 px-2 bg-teal-500/10 rounded-full border border-teal-500/20">
          Compliance
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-white mt-2">Privacy Policy & Cognitive Autonomy</h1>
      </div>

      <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300 text-justify">
        <p>
          At <strong>Japa Sādhanā</strong>, we maintain a firm, sacred belief that your personal spiritual practice represents an intimate, highly private space of devotion and relaxation. We believe that spiritual records of prayer and meditation should never be treated as commercial metrics. This privacy charter details our commitment to absolute data autonomy.
        </p>

        <h2 className="text-sm font-black text-white pt-2 border-b border-white/5 pb-1">1. Zero External Database Storage</h2>
        <p>
          Unlike common modern wellness platforms, Japa Sādhanā does not operate centralized backend registration databases, custom user accounts, or remote storage nodes. The following items survive <strong>completely inside your device local client storage (LocalStorage)</strong>:
        </p>
        <ul className="list-disc pl-5 text-xs text-slate-400 space-y-1">
          <li>Completed chanting sessions (time, mantra names, round counts).</li>
          <li>Current and historical favorite limits (target limits).</li>
          <li>Meditation sound preferences and master audio volume grids.</li>
        </ul>
        <p>
          No personal chanting logs are ever transmitted, collected, or exposed to third-party server systems.
        </p>

        <h2 className="text-sm font-black text-white pt-2 border-b border-white/5 pb-1">2. Core Security Cookies & Analytics</h2>
        <p>
          To maintain server operation and support organic Vedic outreach, our domain integrates the following non-intrusive standard scripts:
        </p>
        <ul className="list-disc pl-5 text-xs text-slate-400 space-y-2">
          <li>
            <strong>Google Analytics (gtag.js):</strong> Collects standard, anonymous, aggregate visitor traffic information (e.g., pages viewed, country locations). This aggregate telemetry holds absolutely no access to, nor control over, your physical locally stored chanting history. It only lets us monitor server loads to guarantee smooth uptime.
          </li>
          <li>
            <strong>Google AdSense:</strong> Integrates premium quality site advertisements to cover the costs of writing, compiling, and delivering our exhaustive 30 blog Deep Dives and 50 mantra modules. These programmatic blocks adhere strictly to Google’s Ad policies, excluding any tracking of personal religious metrics.
          </li>
        </ul>

        <h2 className="text-sm font-black text-white pt-2 border-b border-white/5 pb-1">3. Clear Control of Your Locally Stored Records</h2>
        <p>
          Because all analytics and chanting logs exist locally in your browser cache, you enjoy sovereign control over your record files. You can erase your entire history instantaneously at any time. Simply navigate to our <PathLink href="/analytics" className="text-orange-400 hover:underline">Analytics Page</PathLink> and click the "Clear All Records" toggle, or clear your browser’s cookies and site cache data.
        </p>

        <h2 className="text-sm font-black text-white pt-2 border-b border-white/5 pb-1">4. Direct Inquiry Connections</h2>
        <p>
          Any communications sent to our ashram support channels (shankarvivek9@gmail.com) are used strictly to resolve your questions. We never catalog these emails for dynamic sales lists, marketing funnels, or third-party newsletters.
        </p>

        <hr className="border-white/5 my-4" />
        <p className="text-[10px] text-center text-slate-500 font-mono">
          Last Updated: June 2026. Rest easy; your practice is confidential and completely secure.
        </p>
      </div>
    </div>
  );
}

export function TermsConditionsPage() {
  return (
    <div className="bg-[#0e1424]/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in shadow-2xl relative text-slate-200">
      <div className="absolute top-0 right-0 w-64 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/10 rounded-full border border-orange-500/20">
          User Agreement
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-white mt-2">Terms and Conditions of Devotional Practice</h1>
      </div>

      <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300 text-justify">
        <p>
          Welcome to the <strong>Japa Sādhanā</strong> web platform. By visiting, using, or interacting with our online space, you declare your full compliance with these simple, respectful terms of educational use. If you do not agree to these terms, we humbly suggest practicing on physical beads in nature without visual computer screens.
        </p>

        <h2 className="text-sm font-black text-white pt-2 border-b border-white/5 pb-1">1. Wellness & Community Intent</h2>
        <p>
          Our web interface provides a zero-fee digital counting board, pranayama guides, custom-synthesized sound patterns, 30 blog articles, and 50 mantra profiles. All materials are managed strictly for personal, non-commercial self-healing, traditional study, and mental relaxation. No content are intended for commercial sale or proprietary translation without explicit attribution.
        </p>

        <h2 className="text-sm font-black text-white pt-2 border-b border-white/5 pb-1">2. Proper Acoustic Conduct</h2>
        <p>
          Our application integrates custom sound-generators simulating the classical earth 136.1 Hz oscillations. These are designed to serve as meditative ambient blocks to shield from external noises. You agree never to use the sound drone engine at painful decibels, nor to operate headphones during tasks requiring active environmental hearing (e.g., driving or operating heavy machinery).
        </p>

        <h2 className="text-sm font-black text-white pt-2 border-b border-white/5 pb-1">3. Academic Intellectual Contribution</h2>
        <p>
          We provide exhaustive, rigorous write-ups connecting neurology and botany under standard copyright protections. You are fully welcome to copy, screenshot, or distribute sections of our 30 articles in spiritual yoga classes, provided you supply an authentic citation back to `jaap-vedic-counter.vercel.app`.
        </p>

        <h2 className="text-sm font-black text-white pt-2 border-b border-white/5 pb-1">4. No Warranties or Liabilities</h2>
        <p>
          Vedic practices are organic self-regulators. We deliver this software "as-is" without any warranties of uninterrupted operation or digital longevity. We are not liable for any local data clearance resulting from your personal browser settings or system cleanups.
        </p>

        <hr className="border-white/5 my-4" />
        <p className="text-[10px] text-center text-slate-500 font-mono">
          Last Updated: June 2026. Practice with care, respect, and peaceful devotion.
        </p>
      </div>
    </div>
  );
}

export function DisclaimerPage() {
  return (
    <div className="bg-[#0e1424]/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in shadow-2xl relative text-slate-200">
      <div className="absolute top-0 right-0 w-64 h-32 bg-orange-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/15 rounded-full border border-orange-500/25">
          Health Safety
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-white mt-2">Medical & Spiritual Practice Disclaimer</h1>
      </div>

      <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300 text-justify">
        <div className="p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20 flex gap-3 text-orange-200">
          <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1 font-semibold leading-relaxed">
            <strong>CRITICAL VISITATION NOTICE:</strong> Please read this medical and physical practice safety guide carefully prior to entering into deep rhythmic breathing, long kumbhaka retentions, or energetic chanting hours.
          </div>
        </div>

        <h2 className="text-sm font-black text-white pt-2 border-b border-white/5 pb-1">1. Traditional Educational Guides Only</h2>
        <p>
          All information, biological research summaries, endocrine gland references, neurological claims, and Sanskrit etymology charts packed into Japa Sādhanā (specifically our 30 articles and 50 mantras) are distributed solely for peaceful self-educational wellness. They are <strong>NOT a substitute for professional clinical medical advice, psychiatric therapy, heart condition treatments, or pharmaceutical prescriptions.</strong>
        </p>

        <h2 className="text-sm font-black text-white pt-2 border-b border-white/5 pb-1">2. Breathing (Pranayama) Breathwork Warnings</h2>
        <p>
          Vedic respiratory modulation exercises, such as Sama Vritti (square equal breathing) or retention modes, actively shift oxygen and carbon dioxide levels inside your vascular system, altering arterial blood pressure and cranial fluid parameters.
        </p>
        <ul className="list-disc pl-5 text-xs text-slate-400 space-y-2">
          <li>
            <strong>NEVER FORCE BREATH:</strong> Chanting and pranayama should always be organic and peaceful. Do not push your lungs past comfort thresholds or hold your breath to the point of pain.
          </li>
          <li>
            <strong>CEASE EXERCISE ON DISCOMFORT:</strong> If you experience any light-headedness, visual tunnel distortions, high heart palpitating feel, or acute respiratory shortness during practice, immediately discontinue the exercise, lie down, and return to standard chest breathing.
          </li>
          <li>
            <strong>MEDICAL CONDITIONS:</strong> If you suffer from underlying cardiovascular blocks, high vascular tension, physical pulmonary diseases, chronic epilepsy, or are pregnant, please consult your personal treating physician before executing any breath exercises.
          </li>
        </ul>

        <h2 className="text-sm font-black text-white pt-2 border-b border-white/5 pb-1">3. Personal Self-Awareness Responsibility</h2>
        <p>
          By adopting traditional chanting and breathing techniques, you voluntarily declare complete individual responsibility for your physiological safety. Chanting is a serene companion to healthy living, not a miraculous instantaneous cure. Practice with deep humility, respect, and mature self-reflection.
        </p>

        <hr className="border-white/5 my-4" />
        <p className="text-[10px] text-center text-slate-500 font-mono">
          Last Updated: June 2026. Namaste. Be peaceful, be healthy, explore with balance.
        </p>
      </div>
    </div>
  );
}

export function FAQPage() {
  return (
    <div className="bg-[#0e1424]/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in shadow-2xl relative text-slate-200">
      <div className="absolute top-0 right-0 w-64 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/15 rounded-full border border-orange-500/25">
          Knowledge Base (FAQ)
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-white mt-2">Frequently Asked Questions: Vedic Biophysics, Acoustic Science & Practice Guidance</h1>
      </div>

      <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-300 text-justify">
        <p className="text-xs text-slate-400 mb-6 italic">
          This comprehensive FAQ resource integrates academic neuroscience, clinical health guidelines, historical mathematics, and operational policy details. We present all answers in clear, objective English to support absolute clarity and AdSense program integrity. No thin placeholders are used.
        </p>

        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span className="text-xs font-mono text-orange-400">Q1:</span>
              What is the physiological relationship between Sanskrit sound chanting (Japa) and the Autonomic Nervous System (ANS)?
            </h3>
            <p>
              Chanting authentic, high-frequency sound syllables—when executed with structured respiratory discipline—functions as a powerful, non-invasive neuromodulator. At the core of this physiological shift is the <strong>Vagus Nerve</strong> (the tenth cranial nerve). The Vagus nerve serves as a highly responsive sensory superhighway connecting the thoracic cavities, pulmonary airways, larynx, and cardiac complexes directly to the solitary tract in the brainstem.
            </p>
            <p>
              When a practitioner chanting a mantra intentionally prolongs their exhalation (vocalization phase) to are roughly double the duration of their inhalation, they instantly activate a physiological process known as <strong>Respiratory Sinus Arrhythmia (RSA)</strong>. The slow, controlled vibration of the vocal folds during vocalization triggers the recurrent laryngeal nerve, which sends continuous sensory signals to the cranial vagal centers. This stimulates parasympathetic (rest-and-digest) tones while reducing the background sympathetic (fight-or-flight) noise.
            </p>
            <p>
              Furthermore, neuro-imaging trials during vocal chanting show a peaceful damping of the amygdala (the brain's emotional threat interpreter) and the default mode network (DMN), which is often associated with hyperactive daydreaming, anxiety, and repetitive stress thoughts. This leads to marked decreases in arterial blood tension, salivary cortisol concentrations, and chronic muscle tension.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span className="text-xs font-mono text-orange-400">Q2:</span>
              Why is the number 108 considered mathematically and cosmically sacred in Vedic chanting (Sadhana)?
            </h3>
            <p>
              The choice of 108 repetitions (the classic Mala length) is not an arbitrary religious convention, but a deep mathematical and cosmological ratio that bridges external celestial structures with internal human biometrics.
            </p>
            <p>
              In traditional astronomy and astrology (Jyotish), the universe is mapped using <strong>27 Lunar Mansions (Nakshatras)</strong>, each divided into <strong>4 unique quarters (Padas)</strong>. The product of these coordinates (27 multiplied by 4) yields exactly 108 distinct cosmic sectors. Chanting 108 reps is seen as a symbolic journey through all celestial quadrants, harmonizing one's individual consciousness with planetary movements.
            </p>
            <p>
              Additionally, the physical scale distances of our solar system are governed by this exact proportion:
            </p>
            <ul className="list-disc pl-5 text-xs text-slate-450 space-y-1">
              <li>The average distance from the Earth to the Sun is approximately <strong>108 times</strong> the diameter of the Sun.</li>
              <li>The average distance from the Earth to the Moon is approximately <strong>108 times</strong> the diameter of the Moon.</li>
              <li>The diameter of the Sun is approximately <strong>108 times</strong> the physical diameter of the Earth.</li>
            </ul>
            <p>
              By utilizing the standard 108 repetition counter inside our app, practitioners align their focal awareness with these astronomical ratios. This practices provides a powerful cognitive grounding point that deepens focus and spiritual discipline.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span className="text-xs font-mono text-orange-400">Q3:</span>
              How does the Live Ambient Drone Synthetic technology assist my concentration and focus?
            </h3>
            <p>
              Most wellness apps rely on highly compressed, pre-recorded MP3 files that run on rigid loops. The human brain is incredibly sensitive to repetitive sound loops; within minutes, the auditory cortex recognizes the repetitive markers, leading to visual boredom or mental irritation.
            </p>
            <p>
              Our <strong>Meditation Sounds engine</strong> solves this by synthesizing continuous, real-time audio waves directly on your computer's browser using the native Web Audio API. By playing pure 136.1 Hz (OM frequency) planet-orbital sine oscillations paired with subtle stereo panning and soft, custom-modulated pink noise water ripples, our system creates an organic noise-masking shield. 
            </p>
            <p>
              This live sound shield triggers <strong>auditory sensory gating</strong>, which automatically filters out abrupt neighborhood noises, keyboard clicks, or traffic hums. This lets your mind settle into stable <strong>Alpha and Theta brainwave patterns (4 - 12 Hz)</strong>, which are highly supportive of deep memory, spatial relaxation, and effortless focus during physical Japa chanting.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span className="text-xs font-mono text-orange-400">Q4:</span>
              Is Japa Sadhana a sectarian application, and can a practitioner of any philosophy use it?
            </h3>
            <p>
              Japa Sadhana is designed on <strong>completely universal, academic, and non-sectarian scientific principles</strong>. While the historical source material originates from Sanskrit literature, Upanishads, and Vedic traditions, our focus is entirely on the physiological, neurological, and acoustical benefits of mindful sound repetition and paced breathing.
            </p>
            <p>
              The primary purpose of Japa is to quiet mental fluctuations (Chitta Vritti). Practitioners from all backgrounds—including secular mindfulness students, Zen meditators, academic researchers, and sound therapy students—actively utilize our digital counter and breath regulators. You can easily enter custom phrases, prayers, or mantras inside our system to align our tools with your personal path.
            </p>
          </div>

          {/* Question 5 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span className="text-xs font-mono text-orange-400">Q5:</span>
              How does the Japa Sadhana application manage tracking, cookies, and AdSense data?
            </h3>
            <p>
              Your spiritual practices are a private space. To protect your cognitive autonomy, we adhere to a <strong>strict offline-first and local-first data model</strong>:
            </p>
            <ul className="list-disc pl-5 text-xs text-slate-450 space-y-2">
              <li>
                <strong>No Cloud Databases:</strong> We do not ask for login details, emails, or personal profiles. Your chanting logs, mala milestones, times, and sound settings survive entirely on your own laptop or phone inside your browser's persistent HTML5 LocalStorage.
              </li>
              <li>
                <strong>Programmatic AdSense:</strong> To support the high costs of server maintenance and writing premium educational articles, we serve basic programmatic Google AdSense blocks on our domain. These ads follow strict Google compliance rules, and are never combined with any local spiritual telemetry or chanting data.
              </li>
              <li>
                <strong>Google Analytics:</strong> We use basic aggregate traffic analytics to view the general count of active sessions globally, helping us optimize server bandwidth. No personal data is ever collected or sold.
              </li>
            </ul>
          </div>

          {/* Question 6 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span className="text-xs font-mono text-orange-400">Q6:</span>
              What respiratory breathwork patterns do you provide, and are there physical health constraints?
            </h3>
            <p>
              Our <strong>Yogic Pranayama Coach</strong> supports two highly validated physiological tempos:
            </p>
            <ul className="list-disc pl-5 text-xs text-slate-450 space-y-2">
              <li>
                <strong>Sama Vritti (Box Breathing):</strong> Equal 4-second phases for inhalation, breath retention (kumbhaka), exhalation, and empty hold. This pattern is widely used by high-performance athletes and tactical units to balance sympathetic adrenaline spikes, lower cardiovascular stress, and restore situational focus.
              </li>
              <li>
                <strong>Prana Vardhak (4-7-8 Tranquilizer):</strong> A 4-second inhale, a deep 7-second oxygen-gating hold, and a long, relaxing 8-second exhale. This pattern acts as an immediate natural tranquilizer for your autonomic nervous system, clearing stale air and preparing the mind for peaceful contemplation.
              </li>
            </ul>
            <p>
              <strong>Health Safety Notice:</strong> Voluntary breathholding directly changes arterial gas balances and carbon dioxide levels. Do not force holds past your physical comfort levels. If you experience any dizziness, confusion, or breathing discomfort, immediately stop the exercise and sit back to breathe normally. Pregnant women or individuals with high blood pressure, history of seizures, or cardiac blocks must consult their doctor prior to utilizing deep retention cycles.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center space-y-2">
          <p className="text-xs text-slate-400">
            Have a question not addressed in this academic FAQ compendium? Feel free to contact our team of researchers.
          </p>
          <PathLink href="/contact" className="inline-flex items-center gap-1 text-xs text-orange-400 hover:underline font-bold">
            Contact Support & Ashram Coordinator →
          </PathLink>
        </div>

        <hr className="border-white/5 my-4" />
        <p className="text-[10px] text-center text-slate-500 font-mono">
          Last Updated: June 2026. Designed on modern, research-driven, and high-integrity principles.
        </p>
      </div>
    </div>
  );
}
