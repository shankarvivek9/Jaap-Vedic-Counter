/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, Mail, Globe, MapPin, Send, CheckCircle2, 
  ShieldCheck, Landmark, Heart, Info, MessageSquare, AlertCircle
} from 'lucide-react';

interface InfoModalProps {
  section: 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export default function InfoModal({ section, onClose }: InfoModalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');

  if (!section) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMsg) return;
    
    // Simulate locally
    setFormSubmitted(true);
    setTimeout(() => {
      setContactName('');
      setContactEmail('');
      setContactMsg('');
    }, 2000);
  };

  const getTitle = () => {
    switch (section) {
      case 'about': return 'About Us — Japa Sādhanā';
      case 'contact': return 'Contact Spiritual Support';
      case 'privacy': return 'Privacy Policy';
      case 'terms': return 'Terms & Conditions Of Practice';
      case 'disclaimer': return 'Medical & Spiritual Disclaimer';
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in" id="info-modal-backdrop">
      <div 
        className="bg-[#0e1424]/95 border border-white/10 rounded-3xl max-w-2xl w-full h-[90vh] md:h-auto md:max-h-[85vh] flex flex-col justify-between shadow-2xl relative overflow-hidden text-slate-100"
        id="info-modal-container"
      >
        {/* Aesthetic design accents */}
        <div className="absolute top-0 right-0 w-48 h-24 bg-orange-500/10 blur-2xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-24 bg-teal-500/10 blur-2xl rounded-full pointer-events-none" />

        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-serif text-orange-400 font-bold select-none">ॐ</span>
            <h3 className="text-base sm:text-lg font-black tracking-tight text-white leading-none">
              {getTitle()}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer text-slate-400 hover:text-white"
            id="close-info-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-xs sm:text-sm leading-relaxed text-slate-305 font-medium z-10 font-sans text-justify">
          
          {/* 1. ABOUT US SECTION */}
          {section === 'about' && (
            <div className="space-y-4 animate-fade-in">
              <p>
                <strong>Japa Sādhanā</strong> is a sacred digital temple designed to align ancient Vedic spiritual techniques with the physiological demands of modern living. In a relentless world characterized by fragmented attention spans, our goal is to render the science of mantra repetition, pranayama breathing, and acoustic therapy accessible, beautiful, and completely offline-friendly.
              </p>
              
              <div className="p-4 bg-orange-600/10 rounded-2xl border border-orange-500/20 flex gap-3 my-2 text-slate-205">
                <Info className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <p className="text-xs">
                  We formulate custom sound drone synthesizers that calculate natural planetary orbital frequencies (like Earth's cosmic year 136.1 Hz) and generate absolute, clean tone harmonics locally on your device—completely free from static, pre-recorded audio loops.
                </p>
              </div>

              <h4 className="text-sm font-bold text-white mt-4 border-b border-white/5 pb-1">Our Core Pillars</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-405 text-orange-400 font-bold font-serif">■</span>
                  <span><strong>Traditional Authenticity:</strong> All translations, Sanskrit keys, pronunciation codes, and breathing formats match the classical teachings of the Upanishads and orthodox Rishis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-405 text-orange-400 font-bold font-serif">■</span>
                  <span><strong>Privacy by Default:</strong> We hold a deep aversion to tracking or monetization. Sādhanā is an intimate personal communion; your logs belong entirely to you, locked securely inside your own local browser.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-405 text-orange-400 font-bold font-serif">■</span>
                  <span><strong>Elegance & Focus:</strong> Every graphic element, transitional animation, and typeface choice serves to induce tranquility and calm the mind's active fluctuations (Chitta Vritti).</span>
                </li>
              </ul>

              <div className="pt-4 flex items-center justify-center gap-1 text-[11px] font-mono text-slate-500 font-bold">
                <span>FORMULATED WITH</span>
                <Heart className="w-3 h-3 text-orange-500 fill-current animate-pulse" />
                <span>BY SPIRITUAL SEEKERS, FOR THE COSMIC SOUL. v1.4</span>
              </div>
            </div>
          )}

          {/* 2. CONTACT US SECTION */}
          {section === 'contact' && (
            <div className="space-y-4 animate-fade-in">
              <p>
                Have questions about mantra etymologies, technical feedback, or ideas to expand our spiritual tools? Reach out to us. We would love to collaborate or offer support.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 py-2">
                {/* Physical Contacts */}
                <div className="md:col-span-5 space-y-3 bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col justify-between">
                  <div className="space-y-2.5 font-mono text-[11px] text-slate-350">
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-orange-400" />
                      <span>sadhana-support@shankarvivek.io</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-orange-400" />
                      <span>shankarvivek9.github.io</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      <span>Assi Ghat, Varanasi, UP, Bharat</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed max-w-[180px] italic pt-4 mt-auto">
                    "Reach out under the quiet shelter of reflection."
                  </p>
                </div>

                {/* Submition Form */}
                <div className="md:col-span-7">
                  {formSubmitted ? (
                    <div className="h-full min-h-[180px] bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center animate-fade-in">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-2.5 animate-bounce" />
                      <h4 className="text-sm font-bold text-white">Pranam, Message Transmitted!</h4>
                      <p className="text-xs text-slate-300 mt-1 max-w-[220px]">
                        We have logged your query and will contemplate your feedback. Thank you for connecting.
                      </p>
                      <button 
                        onClick={() => setFormSubmitted(false)}
                        className="mt-4 text-[10px] font-mono text-emerald-400 hover:underline"
                      >
                        Send Another Note
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-3">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/40 font-medium"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          placeholder="Your Email" 
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/40 font-medium"
                        />
                      </div>
                      <div>
                        <textarea 
                          placeholder="How can we assist you in your Sadhana?" 
                          rows={3} 
                          required
                          value={contactMsg}
                          onChange={(e) => setContactMsg(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/40 font-medium resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2 px-4 bg-orange-600 hover:bg-orange-755 hover:bg-orange-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Send Spiritual Inquiry
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 3. PRIVACY POLICY SECTION */}
          {section === 'privacy' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex gap-3 mb-2.5">
                <ShieldCheck className="w-8 h-8 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-extrabold text-white">Our Absolute Privacy Mandate</h4>
                  <p className="text-[11px] text-slate-400">Zero database collections. Complete local containment.</p>
                </div>
              </div>

              <p>
                In an era dominated by hyper-surveillance, aggressive conversion cookies, and data monetizations, we uphold a absolute, non-negotiable policy that <strong>Sādhanā must remain strictly personal, private, and secure.</strong>
              </p>

              <h4 className="text-sm font-bold text-white mt-4 border-b border-white/5 pb-1">1. Active Local Containment</h4>
              <p>
                All statistics displayed on the Japa Sādhanā panels—including total chants count, mala counts, breathing speeds, current session timestamps, and custom logs history—are calculated directly and stored securely on your browser container via HTML5 Local Storage. No data package ever transits or leaves your computer terminal. We operate no external databases.
              </p>

              <h4 className="text-sm font-bold text-white mt-4 border-b border-white/5 pb-1">2. Zero Cookies & Diagnostics</h4>
              <p>
                We do not use Google Analytics, advertising pixels, login frameworks, or session identifiers. Your spiritual exercises are your sanctuary. No tracking cookies or telemetry files are compiled during your interactions.
              </p>

              <h4 className="text-sm font-bold text-white mt-4 border-b border-white/5 pb-1">3. Live Auditory Acoustics</h4>
              <p>
                The sound drones available in our workspace are synthesized live using the Web Audio API on your local computer CPU. Unlike other streaming outlets, we stream zero external audio assets or pre-recorded clips, conserving your bandwidth and isolating your practice environment.
              </p>
            </div>
          )}

          {/* 4. TERMS & CONDITIONS SECTION */}
          {section === 'terms' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex gap-3 mb-2.5">
                <Landmark className="w-8 h-8 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-extrabold text-white">Guidelines Of Peaceful Usage</h4>
                  <p className="text-[11px] text-slate-400">Sacred tools, mindful practice, personal growth.</p>
                </div>
              </div>

              <p>
                By navigating this webpage and utilizing our dynamic meditation and sound drone systems, you agree to follow standard, respectful terms of self-reflective study.
              </p>

              <h4 className="text-sm font-bold text-white mt-4 border-b border-white/5 pb-1">1. Introspective Purposing</h4>
              <p>
                These utilities—including the digital counting beads (mala), cosmic soundwaves, and breathing cycles (pranayama)—are offered as complementary mental training aids. They are intended strictly for personal cognitive alignment, intellectual reflection, and stress reduction. They do not comprise medical therapy.
              </p>

              <h4 className="text-sm font-bold text-white mt-4 border-b border-white/5 pb-1">2. Safe Audio Calibration</h4>
              <p>
                Our synthetic frequency controllers (like the custom Solfeggio 432 Hz / 528 Hz codes) emit high-quality pure sine waves. Always test sound levels at a low initial volume to avoid acoustic stress when using headphones or earbuds. Never practice advanced breathing breath-holds while driving or operating heavy equipment.
              </p>

              <h4 className="text-sm font-bold text-white mt-4 border-b border-white/5 pb-1">3. Absolute Free Distribution</h4>
              <p>
                The knowledge, layout, and Sanskrit translation keys contained in this applet are distributed unconditionally for the welfare of humanity. You are welcome to clone, copy, or redistribute this content under standard open-source parameters, provided you maintain references back to the sacred wisdom lineage of modern Vedic study.
              </p>
            </div>
          )}

          {/* 5. MEDICAL & SPIRITUAL DISCLAIMER SECTION */}
          {section === 'disclaimer' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex gap-3 mb-2.5">
                <AlertCircle className="w-8 h-8 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-extrabold text-[#fc8a8a]">Ecclesiastical & Medical Disclaimer</h4>
                  <p className="text-[11.5px] text-slate-400">Educational limits, sound limits, and practice boundaries.</p>
                </div>
              </div>

              <p>
                The information, metrics, recordings, and frequency generators offered throughout this platform (including the simulated Mala, Solfeggio soundscapes, and breathing rhythm scripts) are designed solely for educational, cultural, and spiritual exploration.
              </p>

              <h4 className="text-sm font-bold text-white mt-4 border-b border-white/5 pb-1">1. Not a Substitute for Medical Advice</h4>
              <p>
                Meditation and rhythmic breath-control (Pranayama) are powerful somatic practices but do NOT constitute professional clinical or psychological diagnosis, advice, or treatment. If you suffer from underlying cardiovascular conditions, respiratory illness, high blood pressure, pregnancy, or panic disorders, consult a certified physician before performing pranayama patterns (particularly those involving Kumbhaka or breath retention).
              </p>

              <h4 className="text-sm font-bold text-white mt-4 border-b border-white/5 pb-1">2. Acoustic Safety Guidelines</h4>
              <p>
                Our interactive signal oscillators are capable of producing pure frequency currents directly inside your headset. Please check sound outputs carefully before practice to preserve auditory safety. We are not responsible for any sensory strain or hearing issues resulting from continuous extreme loud headphone play.
              </p>

              <h4 className="text-sm font-bold text-white mt-4 border-b border-white/5 pb-1">3. Educational & Archival Focus</h4>
              <p>
                All dynamic materials, blog articles, and translations have been curated for literary and historical study of traditional Sanskrit culture. Your mental and physiological response to continuous chanting is completely unique; this tools is provided self-initially for introspective spiritual exploration/stress reduction without guaranteeing miraculous physical therapeutic outcomes.
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-white/10 flex justify-end z-10 shrink-0 bg-white/2">
          <button
            onClick={onClose}
            className="py-2.5 px-6 rounded-xl bg-orange-605 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-transform active:scale-95 cursor-pointer shadow-md"
            id="modal-close-footer-btn"
          >
            I Acknowledge
          </button>
        </div>

      </div>
    </div>
  );
}
