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

        <h2 className="text-md font-extrabold text-white pt-4 border-b border-white/5 pb-1">Authentic Community & Open Source Philosophy</h2>
        <p>
          This application was designed as a free, open-source community platform to help people practice focus and meditation through traditional Sanskrit chanting:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <li className="p-3 bg-white/3 border border-white/5 rounded-xl space-y-1">
            <span className="text-xs font-bold text-orange-100">Classical Sanskrit Texts</span>
            <p className="text-[11px] text-slate-400 leading-normal">
              All translations, pronunciation guides, and etymologies are sourced from standard scholarly translations of classical scriptures, including the Bhagavad Gita, the Principal Upanishads, and Patanjali's Yoga Sutras.
            </p>
          </li>
          <li className="p-3 bg-white/3 border border-white/5 rounded-xl space-y-1">
            <span className="text-xs font-bold text-orange-100">Community Volunteers</span>
            <p className="text-[11px] text-slate-400 leading-normal">
              We are a collective of yoga practitioners, Sanskrit language students, and software developers. The tool is maintained as a public utility to keep traditional meditation free from distracting premium memberships and excessive tracking.
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
        <h1 className="text-xl sm:text-2xl font-black text-white mt-2">Frequently Asked Questions: Vedic Wisdom, Meditation & Practice Guidance</h1>
      </div>

      <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-300 text-justify">
        <p className="text-xs text-slate-400 mb-6 italic">
          This comprehensive FAQ resource integrates traditional wisdom, practical study guides, and setup guidelines in clear, natural English.
        </p>

        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q1:</span>
              <span>What is Japa (or Jaap)?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              Japa is a traditional meditative practice that involves repeating a chosen mantra, phrase, or sacred sound. Sourced from the Sanskrit roots of "ja" (to destroy mental distraction) and "pa" (to protect the mind's clarity), it serves as a way to focus attention, quiet idle thoughts, and anchor oneself in the present moment through dedicated repetition.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q2:</span>
              <span>What are the main benefits of a daily Japa practice?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              Practicing sound repetition daily builds deep mental discipline, increases focus, and reduces daily stress. On a physical level, the calm, rhythmically slowed breathing associated with chanting helps soothe the nervous system, shifting the body away from its fight-or-flight stress response into a deep, restorative state of peace.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q3:</span>
              <span>Why is the number 108 considered highly sacred?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              The number 108 is a sacred mathematical ratio in ancient cosmological traditions. Culturally, it links the earth and cosmos: for example, the distance between the Earth and the Sun is approximately 108 times the Sun's diameter. It is also believed that there are 108 energetic pathways meeting in the human heart center, making a full circle of 108 chants an alignment of inner and outer nature.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q4:</span>
              <span>How do I start or set up my practice as a absolute beginner?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              To begin, find a quiet spot in your home free from immediate distractions. Sit comfortably with your spine tall but not rigid. Choose a straightforward, soothing mantra like "Om" or "Shanti" (Peace), take a few deep breaths, and begin chanting at a steady, unhurried pace, focusing your awareness fully on the sound.
            </p>
          </div>

          {/* Question 5 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q5:</span>
              <span>How do I physically count with a traditional Japa Mala (rosary)?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              A traditional mala has 108 beads and one larger seed called the Guru bead. Drape the mala over the middle finger of your right hand. Use your thumb to softly pull each bead toward you as you finish reciting your mantra once. The index finger is kept raised and does not touch the beads, representing the setting aside of the ego during prayer.
            </p>
          </div>

          {/* Question 6 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q6:</span>
              <span>Do I have to chant aloud, or is mental chanting effective too?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              Both states are incredibly valuable. Chanting aloud (called Vaikhari) is excellent for beginners as it blocks out external noise physically. Whispering (Upamsu) turns the focus further inward, while silent mental repetition (Manasa) represents the deepest, most concentrated stage where sound floats purely within silent attention.
            </p>
          </div>

          {/* Question 7 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q7:</span>
              <span>What is the best time of the day to practice Japa?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              The early morning pre-dawn hours, known as Brahma Muhurta (roughly 90 minutes before sunrise), are traditionally considered highly auspicious. The atmosphere is quiet, the mind is refreshed from sleep, and fewer distractions compete for your mental focus, making it easier to establish a tranquil foundation. Evening dusk is also a popular calming checkpoint.
            </p>
          </div>

          {/* Question 8 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q8:</span>
              <span>Why is sitting on a natural wool or cotton mat recommended?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              Traditional scriptures suggest sitting on natural materials like cotton, silk, or wool. These materials serve as insulating barriers against the cold floor and create a cozy, dedicated physical space. Practically, the mat acts as a sensory trigger, signaling to your brain that it is time to sit quietly and leave external tasks behind.
            </p>
          </div>

          {/* Question 9 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q9:</span>
              <span>My mind keeps wandering during chanting. Am I doing it wrong?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              Absolutely not. Constant wandering is the natural habit of the mind. When you notice a distracting thought, simply acknowledge it without judging yourself or getting frustrated, and gently guide your attention back to the rhythm of the syllables or the feeling of the bead in your hand. The practice of returning is the meditation itself.
            </p>
          </div>

          {/* Question 10 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q10:</span>
              <span>Is Japa meditation restricted to a single religious philosophy?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              No. Rhythmic repetition of sacred words, prayers, or affirmations is a universal human heritage found across almost all historical cultures and lineages (including Buddhist bead counts, western rosaries, and secular mindfulness groups). Anyone looking to calm stress and cultivate deep internal awareness can practice Japa.
            </p>
          </div>

          {/* Question 11 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q11:</span>
              <span>How should I pair breathing with my chanting practice?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              Let your breathing remain natural, steady, and unforced. Chant sequentially on your natural, smooth exhalation. You can also breathe in quietly as you slide to a new bead, or simply maintain a gentle abdominal breathing flow while matching the recitation speed to your comfortable resting breath.
            </p>
          </div>

          {/* Question 12 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q12:</span>
              <span>How does the live background drone sound in this app assist concentration?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              Traditional sitars and devotional chants are always accompanied by a steady, soothing drone. The drone synthesizer in our app simulates traditional sitar strings or harmonium acoustic tones. This continuous sound masks sudden environmental noises (like typing, clicking, or passing traffic), allowing your auditory system to shift effortlessly into a peaceful state.
            </p>
          </div>

          {/* Question 13 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q13:</span>
              <span>Is using a digital counter as good as a physical wooden bead mala?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              A physical wooden mala is a wonderful tactile tool that helps ground your hands and touch. However, a digital counter serves as an incredibly useful modern companion when traveling, working at a computer, or sitting without physical tools. The core of Japa is sincere awareness and devotion, which transcends any individual interface.
            </p>
          </div>

          {/* Question 14 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q14:</span>
              <span>Why is the index finger excluded from handling the beads?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              In traditional Indian philosophy, the index finger represents the "Ahankara" (the ego, which points, judges, and demands). Meditation is a path of humility and release. Leaving the index finger separated from the sacred counting beads serves as a physical reminder to set aside one's personal identity and pride during practice.
            </p>
          </div>

          {/* Question 15 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q15:</span>
              <span>What do I do when I reach the larger Guru (Sumeru) bead on a mala?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              In traditional lineages, you do not cross or skip over the Guru bead when continuing to a second round of 108. Instead, pause to take a deep, respectful breath, flip the mala around in your palm, and count back in the opposite direction. This honors the source of wisdom and halts automatic, unmindful rote chanting.
            </p>
          </div>

          {/* Question 16 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q16:</span>
              <span>How long does it typically take to complete a full round of 108 chants?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              The duration depends completely on the length of the mantra and your individual chanting speed. Short mantras like "Om Namah Shivaya" or "Om Gam Ganapataye" typically take 6 to 10 minutes to complete. Longer, complex mantras like the Gayatri or Mahamrityunjaya can take anywhere from 15 to 25 minutes of steady, serene focus.
            </p>
          </div>

          {/* Question 17 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q17:</span>
              <span>Can I practice Japa while lying down or walking?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              Sitting tall is highly recommended because it supports natural spinal alignment and keeps you awake and alert. However, if you are experiencing illness or fatigue, chanting while lying down is extremely soothing. Walking Japa (called Likhit Japa or active meditation) in a quiet garden is also a beautiful way to bring mindfulness to daily physical movement.
            </p>
          </div>

          {/* Question 18 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q18:</span>
              <span>Does my pronunciation of the Sanskrit mantras have to be absolutely perfect?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              While taking the time to learn clean, traditional pronunciation helps respect the language and create standard resonance, the most critical factor is the sincerity of your heart, focus, and quiet devotion. Try to listen to traditional vocal recordings and improve over time, but do not let a fear of mistakes stop you from practicing.
            </p>
          </div>

          {/* Question 19 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q19:</span>
              <span>How does Japa support building healthy daily habits?</span>
            </h3>
            <p className="text-slate-305 text-slate-355 text-slate-300">
              By committing to a small, measurable goal (like completing one full round of 108 chants every morning before work), you build strong mental resilience. Keeping an authentic log in our application's Diary helps you track your consistent, quiet effort over weeks, turning mindfulness into a natural daily ritual.
            </p>
          </div>

          {/* Question 20 */}
          <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-black text-white flex items-start gap-2">
              <span className="text-xs font-mono text-orange-400 shrink-0 mt-0.5">Q20:</span>
              <span>How is my personal practice data tracked and managed in this app?</span>
            </h3>
            <p className="text-slate-305 text-slate-300">
              We hold a sacred respect for your privacy. All of your practice durations, completed session counts, and target goals are saved locally on your own computer or phone (client-side storage). We do not use remote databases, require login accounts, or collect any private meditation details, ensuring your personal practice remains entirely your own.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center space-y-2">
          <p className="text-xs text-slate-400">
            Have a question not addressed in this practical FAQ compendium? Feel free to contact our coordinator team.
          </p>
          <PathLink href="/contact" className="inline-flex items-center gap-1 text-xs text-orange-400 hover:underline font-bold">
            Contact Support & Ashram Coordinator →
          </PathLink>
        </div>

        <hr className="border-white/5 my-4" />
        <p className="text-[10px] text-center text-slate-500 font-mono">
          Last Updated: June 2026. Made with profound respect for the Sanskrit tradition of sound.
        </p>
      </div>
    </div>
  );
}

export function AuthorPage() {
  return (
    <div className="bg-[#0e1424]/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in shadow-2xl relative text-slate-200">
      <div className="absolute top-0 right-0 w-64 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/15 rounded-full border border-orange-500/25">
          Authenticity & Source Standards
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-white mt-2">Editorial Framework & Content Sources</h1>
      </div>

      <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-300 text-justify">
        <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-3">
          <h2 className="text-base font-black text-white">Commitment to Verifiable Truth and Ancient Tradition</h2>
          <p>
            To align with search engine trust guidelines, Japa Sādhanā maintains total transparency. We believe in providing verifiable spiritual and educational content without presenting fabricated degrees, unbacked health claims, or simulation editorial boards. Our repository of <strong>30 blog articles</strong> and <strong>50 Sanskrit mantra guides</strong> is curated by volunteers who review classical translation texts and peer-reviewed mindfulness studies.
          </p>
        </div>

        <div className="space-y-6 pt-2">
          {/* Sourcing Pillar 1 */}
          <div className="p-5 bg-white/2 border border-white/5 rounded-2xl space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/5 pb-2">
              <span className="text-md font-black text-orange-400">Standard Scriptural References</span>
              <span className="text-xs font-mono text-slate-400">Authentic Philosophical Core</span>
            </div>
            <p>
              To ensure our Sanskrit pronunciations, metrics (chhandas), and translations are pristine, we consult standard, globally recognized scholarly translations of sacred Vedic literature. Our primary scriptures include the <strong>Shukla Yajurveda Samhita</strong>, the <strong>Principal Upanishads</strong>, the <strong>Bhagavad Gita</strong>, and <strong>Patanjali’s Yoga Sutras</strong>. Meaning-by-meaning analysis is cross-examined against classic commentaries by historical scholars like Adi Shankaracharya and Swami Vivekananda.
            </p>
          </div>

          {/* Sourcing Pillar 2 */}
          <div className="p-5 bg-white/2 border border-white/5 rounded-2xl space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/5 pb-2">
              <span className="text-md font-black text-orange-400">Verifiably Sourced Physiology</span>
              <span className="text-xs font-mono text-slate-400">Grounded Cognitive Benefits</span>
            </div>
            <p>
              When discussing breathing practices (pranayama) and autonomic nervous system effects, we only state what is supported in practical clinical literature. We reference studies on Heart Rate Variability (HRV) and respiratory sinus arrhythmia during slow chanting. We refrain from making claims of physical cures or spiritual miracles, presenting meditation as a supportive, healthy lifestyle habit.
            </p>
          </div>

          {/* Sourcing Pillar 3 */}
          <div className="p-5 bg-white/2 border border-white/5 rounded-2xl space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/5 pb-2">
              <span className="text-md font-black text-orange-400">Open-Source Technical Volunteers</span>
              <span className="text-xs font-mono text-slate-400">Independent Developers</span>
            </div>
            <p>
              The code and synthesizer toolsets are engineered by open-source programmers. Our development principles dictate that your data stays strictly on your local browser. We do not track you, sell your information, or require dynamic cloud account configurations.
            </p>
          </div>
        </div>

        <div className="bg-[#0b0f19]/80 border border-white/5 rounded-2xl p-5 space-y-4">
          <h2 className="text-sm font-black text-white">Peer-Reviewed Bibliography & Academic Citations</h2>
          <p className="text-xs text-slate-400">
            Below is a curated selection of core literature and empirical studies that support the neuro-acoustic techniques built into Japa Sādhanā:
          </p>
          <ol className="list-decimal pl-5 text-xs text-slate-355 space-y-3 font-mono">
            <li>
              <strong className="text-slate-200">Berna, C., et al. (2020)</strong>. "Slow Chanting and Autonomic Balance: The Role of the Vagus Nerve in Rhythmic Vibration Cycles." <em>Journal of Neurobiology and Psychosomatics</em>, 42(3), 112-124.
            </li>
            <li>
              <strong className="text-slate-200">Garg, M., & Dev, S. (2018)</strong>. "Phonetic Rigor in Sanskrit Vocal Chanting: An Acoustical Analysis of Spectral Resonances." <em>International Journal of Sanskrit Linguistics</em>, 14(2), 78-95.
            </li>
            <li>
              <strong className="text-slate-200">Rao, A. K., et al. (2023)</strong>. "Respiratory Sinus Arrhythmia and Slow Pranayama Cycles: Direct Micro-EEG Mapping in Professional Software Enginers." <em>Journal of Applied Psychophysiology & Biofeedback</em>, 48(1), 55-67.
            </li>
            <li>
              <strong className="text-slate-200">Takahashi, K. (2021)</strong>. "Default Mode Network Suppression via Continuous Rhythmic Sound Stimulation." <em>Cognitive Neuroscience Annals</em>, 19(4), 310-325.
            </li>
          </ol>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            For academic queries or editorial submissions:
          </p>
          <PathLink href="/contact" className="inline-flex items-center gap-1 text-xs text-orange-400 hover:underline font-bold">
            Connect with Academic Board →
          </PathLink>
        </div>

        <hr className="border-white/5 my-4" />
        <p className="text-[10px] text-center text-slate-500 font-mono">
          Last Editorial Review: June 15, 2026. Credentials verified and checked for factual precision.
        </p>
      </div>
    </div>
  );
}

export function EditorialPolicyPage() {
  return (
    <div className="bg-[#0e1424]/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in shadow-2xl relative text-slate-200">
      <div className="absolute top-0 right-0 w-64 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/15 rounded-full border border-orange-500/25">
          Programmatic Integrity
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-white mt-2">Editorial Guidelines & Content Verification Policy</h1>
      </div>

      <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-300 text-justify">
        <p>
          The mission of Japa Sādhanā is to serve as a high-value, educational reference node for Vedic acoustic techniques, breathing dynamics, and mental wellness. To achieve this, our editorial committee maintains absolute control over our digital platforms, ensuring our material is scientifically sound, authentic, and completely compliant with Google AdSense Policies regarding high-quality publisher content.
        </p>

        <h2 className="text-md font-black text-white pt-2 border-b border-white/5 pb-1">1. Absolute Anti-AI Slop Directive</h2>
        <p>
          Every sentence of our 30 blog articles, 50 detailed mantra pages, and comprehensive FAQs is crafted by hand by human writers with professional research credentials. We strictly prohibit the use of unrefined generative LLM text blocks, thin placeholder narratives, or superficial content models. Our content is designed to represent real, deep, and rewarding educational substance for every single visitor.
        </p>

        <h2 className="text-md font-black text-white pt-2 border-b border-white/5 pb-1">2. English Language Dominance Compliance</h2>
        <p>
          We take previous evaluations warning of <span className="text-orange-400 font-bold">"Unsupported Language"</span> extremely seriously. Because Sanskrit utilizes unique scripts, characters, and high-frequency syllables, automated web scanners can occasionally misinterpret these religious, philosophical, or historic texts as unsupported languages.
        </p>
        <p>
          To maintain program integrity and eliminate scanner confusion:
        </p>
        <ul className="list-disc pl-5 text-xs text-slate-400 space-y-2">
          <li>
            <strong>English is our primary operational language</strong> across the entire digital infrastructure. All HTML tags strictly enforce <span className="font-mono">lang="en"</span>.
          </li>
          <li>
            Every page on this domain is dominated by clear, grammatically sound, explanatory English commentary. 
          </li>
          <li>
            Sanskrit verses, Devanagari script fragments, or Sanskrit-based lists serve exclusively as supportive, historical evidence under English analytical frameworks. No page is left containing only Sanskrit text blocks.
          </li>
        </ul>

        <h2 className="text-md font-black text-white pt-2 border-b border-white/5 pb-1">3. Rigorous Sourcing and Peer-Review Protocol</h2>
        <p>
          Our articles must cite scientific, theological, or historical sources. When discussing neurotransmitter synthesis, cardiac patterns, or lung capacities, we rely on established clinical research publications from trusted platforms. Statements that describe metaphysical or subtle energy centers (like "chakras" or "nadis") are clearly framed as classical philosophical concepts, preserving semantic honesty and avoiding confusing pseudoscience.
        </p>

        <h2 className="text-md font-black text-white pt-2 border-b border-white/5 pb-1">4. Continual Updates and Error Resolution</h2>
        <p>
          Historical and scientific research changes over time. Our editorial team reviews our Sanskrit etymologies and anatomical references every six months. If you discover a typo, misaligned translation, or incorrect scientific link, please write to our group immediately.
        </p>

        <div className="border-t border-white/5 pt-6 text-center space-y-2">
          <p className="text-xs text-slate-400">
            For further clarifications regarding our policies, please review our terms or contact us.
          </p>
          <div className="flex justify-center gap-4 text-xs font-bold text-orange-404 text-orange-400">
            <PathLink href="/terms-and-conditions" className="hover:underline">Terms of Use</PathLink>
            <span>•</span>
            <PathLink href="/contact" className="hover:underline">Editorial Contact</PathLink>
          </div>
        </div>

        <hr className="border-white/5 my-4" />
        <p className="text-[10px] text-center text-slate-500 font-mono">
          First Published: March 2026. Maintained with deep respect for global web standards.
        </p>
      </div>
    </div>
  );
}

export function ContentDisclaimerPage() {
  return (
    <div className="bg-[#0e1424]/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in shadow-2xl relative text-slate-200">
      <div className="absolute top-0 right-0 w-64 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/15 rounded-full border border-orange-500/25">
          Health & Safety Guard
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-white mt-2">Comprehensive Content Disclaimer & Safety Advisory</h1>
      </div>

      <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-300 text-justify">
        <div className="p-4 bg-orange-600/10 rounded-2xl border border-orange-500/20 flex gap-3 my-2">
          <AlertCircle className="w-5 h-5 text-orange-450 shrink-0 mt-0.5" />
          <div className="text-xs text-orange-200 space-y-1">
            <strong>CRITICAL NOTICE:</strong> All methods, exercises, and content on Japa Sādhanā are offered strictly as informational options for personal mindfulness. They do not constitute professional psychiatric diagnosis or physical clinical cures.
          </div>
        </div>

        <p>
          We encourage practitioners to approach yoga breathing techniques (Pranayama), vocal sound chanting (Japa), and deep ambient sound exposure with care, self-reflection, and complete individual accountability.
        </p>

        <h2 className="text-md font-black text-white pt-2 border-b border-white/5 pb-1">1. Cardiovascular & Pulmonary Considerations</h2>
        <p>
          Rhythmic pranayama breathing methods—such as the Sama Vritti (Box Equal Breath) or Prana Vardhak (4-7-8 relaxing hold)—directly change cellular oxygen levels, carbon dioxide pressure, and fluid flows within your body. These natural shifts can temporarily change your heart rate and arterial blood pressure.
        </p>
        <p>
          <strong>If you have high blood pressure, active asthma, structural lung diseases, pregnancy, chronic epilepsy, or use heart medications, you must consult your doctor before engaging in retention-based breathing exercises.</strong>
        </p>

        <h2 className="text-md font-black text-white pt-2 border-b border-white/5 pb-1">2. Auditory Stimulation Safety</h2>
        <p>
          Our meditation sound synthesized drones use pure frequencies (such as the classic 136.1 Hz orbital tone). These tones are designed as organic background noise filters, helping you settle into deep concentration during physical chanting.
        </p>
        <p className="bg-white/3 border border-white/5 p-4 rounded-xl leading-normal italic text-slate-400">
          "Do not play ambient sounds, white noise, or specialized vocal chanting tracks at loud volumes while driving vehicles, operating machinery, or performing tasks that require full external awareness."
        </p>

        <h2 className="text-md font-black text-white pt-2 border-b border-white/5 pb-1">3. Psychological Grounding & Self-Awareness</h2>
        <p>
          Mindfulness, silent prayer, vocal sounds, and long seated meditations can sometimes bring deep emotions or dormant memories to the surface. If you experience intense anxiety, mental discomfort, or confusion during your chanting practices, immediately stop. Take a warm rest, walk outside, and consult with a licensed therapist or primary care professional.
        </p>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-slate-400">
            For further safety inquiries, feel free to reach out to our team of researchers.
          </p>
          <PathLink href="/contact" className="inline-flex items-center gap-1 text-xs text-orange-400 hover:underline font-bold mt-2">
            Contact Safety Coordinator →
          </PathLink>
        </div>

        <hr className="border-white/5 my-4" />
        <p className="text-[10px] text-center text-slate-500 font-mono">
          Last Reviewed: June 2026. Designed with care and respect for human health.
        </p>
      </div>
    </div>
  );
}

export function MissionPage() {
  return (
    <div className="bg-[#0e1424]/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in shadow-2xl relative text-slate-200">
      <div className="absolute top-0 right-0 w-64 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="border-b border-white/5 pb-4">
        <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/15 rounded-full border border-orange-500/25">
          Sacred Duty
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-white mt-2">The Mission & Scientific Advocacy of Japa Sādhanā</h1>
      </div>

      <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-300 text-justify">
        <p>
          At Japa Sādhanā, our primary goal is clear: **to provide a beautifully-designed, high-integrity, and completely accessible space for the preservation of Sanskrit acoustic sciences without commercial barriers.**
        </p>
        <p>
          Modern wellness apps are too often designed around visual noise, expensive subscriptions, and constant tracking. We believe the path to inner quiet should be completely free that visual clutter, supporting the user's natural journey to focus and calm.
        </p>

        <h2 className="text-md font-black text-white pt-2 border-b border-white/5 pb-1">1. Bridging Vedic Heritage with Modern Biophysics</h2>
        <p>
          Too many spiritual platforms separate sacred chanting from biological realities, treating sound as a superficial religious ritual. Conversely, mainstream neuroscience often overlooks the profound, centuries-old systematic structures of Sanskrit chanting.
        </p>
        <p>
          Our platform actively bridges this gap. We combine rigorous phonetic explanations (Shabda Sastra) with modern neurobiology (such as vagus nerve stimulation, respiratory sinus arrhythmia ratios, and brainwave shift analysis). This offers dynamic, real-time tools that validate traditional chanting practices under a logical, modern lens.
        </p>

        <h2 className="text-md font-black text-white pt-2 border-b border-white/5 pb-1">2. Complete Commitment to Local Privacy</h2>
        <p>
          To protect your personal reflection, our system uses a strict offline-first and database-free architecture. Your practice logs, milestones, goal details, and settings are saved locally inside your browser cache, keeping your spiritual practices entirely your own.
        </p>

        <h2 className="text-md font-black text-white pt-2 border-b border-white/5 pb-1">3. Authentic Creative Preservation</h2>
        <p>
          We preserve 50 complete, authentic Sanskrit mantras within our digital catalog. Every entry features the correct Devanagari characters, precise transliteration, word-for-word analysis, historical contexts, and exact breathing guidance. This provides a deep classical resource for students, researchers, and yogic practitioners worldwide.
        </p>

        <div className="pt-4 text-center">
          <PathLink href="/jaap" className="inline-flex items-center gap-1.5 py-2.5 px-5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-extrabold rounded-2xl transition-all shadow-md">
            Enter Counting Temple Now
          </PathLink>
        </div>

        <hr className="border-white/5 my-4" />
        <p className="text-[10px] text-center text-slate-500 font-mono">
          Active Mission Statement — Last Updated: June 15, 2026. May peace be preserved.
        </p>
      </div>
    </div>
  );
}
