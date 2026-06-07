/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, Wind, Music, Hash, BookOpen, BarChart3, Database, Heart, BookOpenCheck } from 'lucide-react';
import JaapCounter from './components/JaapCounter';
import BreathingGuide from './components/BreathingGuide';
import MeditationSounds from './components/MeditationSounds';
import VedicConcepts from './components/VedicConcepts';
import HistoryDashboard from './components/HistoryDashboard';
import WisdomLibrary from './components/WisdomLibrary';
import InfoModal from './components/InfoModal';
import { ChantingSession } from './types';

// Curated list of inspirational spiritual verses for the ticker
const DAILY_VERSES = [
  { text: "Yogas Chitta Vritti Nirodha — Yoga is the calming of the fluctuations of the mind.", source: "Patanjali Yoga Sutras 1.2" },
  { text: "Karmanye vad hika raste Ma Phaleshu Kadachana — Act dedicatedly, but do not cling to rewards.", source: "Bhagavad Gita 2.47" },
  { text: "Ekam Sat Vipra Bahudha Vadanti — Truth is one, though wise sages call it by different names.", source: "Rig Veda 1.164" },
  { text: "The indwelling spiritual jewel rests inside the silent, peaceful lotus of the heart.", source: "Upanishadic Wisdom" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'jaap' | 'meditation' | 'sounds' | 'concepts' | 'wisdom' | 'analytics'>('jaap');
  const [sessions, setSessions] = useState<ChantingSession[]>([]);
  const [verseIndex, setVerseIndex] = useState<number>(0);
  const [modalSection, setModalSection] = useState<'about' | 'contact' | 'privacy' | 'terms' | null>(null);

  // Load chanting sessions from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('vedic_sadhana_sessions');
      if (saved) {
        setSessions(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load local storage sessions', e);
    }
  }, []);

  // Save sessions to localStorage whenever there is an incremental change
  useEffect(() => {
    try {
      localStorage.setItem('vedic_sadhana_sessions', JSON.stringify(sessions));
    } catch (e) {
      console.error('Failed to write to local storage', e);
    }
  }, [sessions]);

  // Rotational cycle for daily quote ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setVerseIndex(prev => (prev + 1) % DAILY_VERSES.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const handleAddSession = (newSession: ChantingSession) => {
    setSessions(prev => [newSession, ...prev]);
  };

  const handleDeleteSession = (id: string) => {
    setSessions(prev => prev.filter(s => s.id !== id));
  };

  const handleClearAllHistory = () => {
    setSessions([]);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans transition-all selection:bg-orange-900/40 relative overflow-hidden">
      
      {/* Ambient Blur Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-orange-600/10 blur-[130px]" />
        <div className="absolute top-1/3 right-[-200px] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-[-100px] left-1/3 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      {/* Upper Universal Topbar Alert */}
      <div className="bg-orange-600/20 backdrop-blur-md border-b border-orange-500/15 text-orange-200 text-center py-2.5 px-4 shadow-xs text-xs font-medium tracking-wide z-20 shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse fill-current" />
          <span className="font-semibold italic">Dhāraṇā & Japa:</span>
          <span className="hidden sm:inline">"Mananāt trāyate iti mantraḥ" — That which protects the mind when contemplated is a Mantra.</span>
          <span className="sm:hidden">That which protects is a Mantra.</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6 relative z-10">
        
        {/* Ashrama Header Banner */}
        <header className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden shrink-0">
          
          {/* Saffron visual aura */}
          <div className="absolute top-0 right-0 w-64 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
          
          <div className="flex items-center gap-4 z-10">
            {/* Spiritual Lotus geometric icon */}
            <div className="p-4 bg-orange-600 rounded-2xl text-white shadow-md shadow-orange-700/15 shrink-0 border border-orange-500 flex items-center justify-center">
              <span className="text-3xl font-serif leading-none select-none font-bold">ॐ</span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono bg-orange-500/20 text-orange-350 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-orange-500/30">
                  Vedic Modernism
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1 flex items-center gap-1.5 font-sans leading-none">
                Japa Sadhana
                <span className="text-xs text-slate-400 font-sans font-medium px-2 py-1 border border-white/10 rounded-md bg-white/5">v1.4</span>
              </h1>
              <p className="text-xs text-slate-350 mt-1.5 font-medium max-w-xl">
                Align your physiology and focus through divine repetition. Use our sound drone synthesizers, paced pranayama modules, and Vedic conceptual guides side-by-side with your chanting practice.
              </p>
            </div>
          </div>

          {/* Inspirational Verse Ticker */}
          <div className="w-full md:w-auto bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex-1 max-w-md z-10 transition-all duration-500">
            <span className="text-[9px] font-mono text-orange-400 block font-bold uppercase tracking-wider mb-1">
              {DAILY_VERSES[verseIndex].source}
            </span>
            <p className="text-xs text-slate-200 italic leading-relaxed font-serif">
              "{DAILY_VERSES[verseIndex].text}"
            </p>
          </div>
        </header>

        {/* Elegant Primary Navigation Tabs */}
        <nav className="bg-white/5 backdrop-blur-xl border border-white/10 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl shadow-md flex flex-wrap gap-1 z-10 shrink-0">
          <button
            onClick={() => setActiveTab('jaap')}
            className={`flex-1 min-w-[110px] py-3 px-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === 'jaap'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-500/20 font-bold ring-1 ring-orange-400/30'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
            id="nav-tab-jaap"
          >
            <Hash className="w-4 h-4 shrink-0" />
            Jaap Counter
          </button>

          <button
            onClick={() => setActiveTab('meditation')}
            className={`flex-1 min-w-[110px] py-3 px-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === 'meditation'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-500/20 font-bold ring-1 ring-orange-400/30'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
            id="nav-tab-meditation"
          >
            <Wind className="w-4 h-4 shrink-0" />
            Breathing Guide
          </button>

          <button
            onClick={() => setActiveTab('sounds')}
            className={`flex-1 min-w-[110px] py-3 px-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === 'sounds'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-500/20 font-bold ring-1 ring-orange-400/30'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
            id="nav-tab-sounds"
          >
            <Music className="w-4 h-4 shrink-0" />
            Meditation Sounds
          </button>

          <button
            onClick={() => setActiveTab('concepts')}
            className={`flex-1 min-w-[110px] py-3 px-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === 'concepts'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-500/20 font-bold ring-1 ring-orange-400/30'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
            id="nav-tab-concepts"
          >
            <BookOpenCheck className="w-4 h-4 shrink-0" />
            Vedic Concepts
          </button>

          <button
            onClick={() => setActiveTab('wisdom')}
            className={`flex-1 min-w-[110px] py-3 px-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === 'wisdom'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-500/20 font-bold ring-1 ring-orange-400/30'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
            id="nav-tab-wisdom"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            Wisdom Library
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex-1 min-w-[110px] py-3 px-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 text-xs font-extrabold transition-all cursor-pointer relative ${
              activeTab === 'analytics'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-500/20 font-bold ring-1 ring-orange-400/30'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
            id="nav-tab-analytics"
          >
            <BarChart3 className="w-4 h-4 shrink-0" />
            Analytics & Diary
            {sessions.length > 0 && (
              <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            )}
          </button>
        </nav>

        {/* Primary Screen Canvas Area */}
        <main className="flex-1 flex flex-col justify-between" id="active-screen-canvas-box">
          {activeTab === 'jaap' && (
            <JaapCounter onSessionComplete={handleAddSession} />
          )}

          {activeTab === 'meditation' && (
            <BreathingGuide />
          )}

          {activeTab === 'sounds' && (
            <MeditationSounds />
          )}

          {activeTab === 'concepts' && (
            <VedicConcepts />
          )}

          {activeTab === 'wisdom' && (
            <WisdomLibrary />
          )}

          {activeTab === 'analytics' && (
            <HistoryDashboard 
              sessions={sessions} 
              onDeleteSession={handleDeleteSession} 
              onClearAll={handleClearAllHistory} 
            />
          )}
        </main>
      </div>

      {/* Earthy Footer */}
      <footer className="border-t border-white/10 bg-white/5 backdrop-blur-xl py-6 px-4 shrink-0 mt-6 select-none z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-semibold font-sans">
          <div className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-orange-500 fill-current animate-pulse shrink-0" />
            <span>Formulated for mental peace, tranquility, and cellular rejuvenation. Practice daily.</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <button 
              onClick={() => setModalSection('about')} 
              className="hover:text-slate-200 cursor-pointer focus:outline-none"
            >
              About Us
            </button>
            <span>•</span>
            <button 
              onClick={() => setModalSection('contact')} 
              className="hover:text-slate-200 cursor-pointer focus:outline-none"
            >
              Contact Us
            </button>
            <span>•</span>
            <button 
              onClick={() => setModalSection('privacy')} 
              className="hover:text-slate-200 cursor-pointer focus:outline-none"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => setModalSection('terms')} 
              className="hover:text-slate-200 cursor-pointer focus:outline-none"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button 
              onClick={() => setActiveTab('wisdom')} 
              className="text-orange-400 hover:underline cursor-pointer"
            >
              Wisdom Library
            </button>
          </div>
        </div>
      </footer>

      {/* Info Modals */}
      {modalSection && (
        <InfoModal 
          section={modalSection} 
          onClose={() => setModalSection(null)} 
        />
      )}
    </div>
  );
}

