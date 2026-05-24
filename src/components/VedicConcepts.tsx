/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VEDIC_CONCEPTS } from './VedicConceptsData';
import { VedicConcept } from '../types';
import { Compass, Sparkles, BookOpen, ChevronRight, HelpCircle, FileText, CheckCircle2 } from 'lucide-react';

export default function VedicConcepts() {
  const [activeConcept, setActiveConcept] = useState<VedicConcept>(VEDIC_CONCEPTS[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="vedic-concepts-exploration-grid">
      
      {/* Concept Directory Sidebar (Left) */}
      <div className="lg:col-span-4 space-y-4" id="concepts-directory-sidebar">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg text-slate-100">
          <span className="text-xs font-mono font-bold tracking-wider text-orange-400 uppercase">VEDIC PHILOSOPHY</span>
          <h2 className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mt-0.5 mb-2">Sacred Epistemologies</h2>
          <p className="text-xs text-slate-300 mb-5 leading-relaxed font-sans font-medium">
            Explore compiled structural guides on yogic psychology, universal duties, and energetic layers of existence.
          </p>

          <div className="space-y-2">
            {VEDIC_CONCEPTS.map((concept) => {
              const isSelected = activeConcept.id === concept.id;
              return (
                <button
                  key={concept.id}
                  onClick={() => setActiveConcept(concept)}
                  className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'border-orange-500/50 bg-orange-500/10 shadow-md text-white font-bold'
                      : 'border-white/5 hover:bg-white/5 hover:border-white/10 text-slate-300'
                  }`}
                  id={`select-concept-btn-${concept.id}`}
                >
                  <div>
                    <h3 className="text-sm font-extrabold">{concept.title}</h3>
                    <p className="text-[10.5px] text-orange-400 font-serif font-bold mt-0.5">
                      {concept.sanskritTitle}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-orange-404 text-orange-400 translate-x-1' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Practical Application Banner */}
        <div className="bg-orange-600/15 text-orange-200 border border-orange-500/30 p-5 rounded-3xl space-y-3 shadow-md">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-orange-300">
            <Compass className="w-4 h-4 text-orange-400 animate-pulse" />
            PRACTical Sadhana Advice
          </div>
          <p className="text-xs leading-relaxed font-sans font-medium text-justify">
            {activeConcept.practicalApplication}
          </p>
        </div>
      </div>

      {/* Main Concept Exploration Space (Right) */}
      <div className="lg:col-span-8 flex flex-col" id="concept-details-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeConcept.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between flex-1 shadow-lg text-slate-100"
          >
            {/* Topic Header details */}
            <div className="border-b border-white/10 pb-5">
              <div className="flex items-center gap-2 text-orange-400 text-xs font-bold font-mono">
                <BookOpen className="w-4 h-4 text-orange-505 text-orange-500" />
                Veda & Upanishad Corpus
              </div>
              <h1 className="text-2xl font-black text-white tracking-tight mt-1">
                {activeConcept.title}
              </h1>
              <p className="text-sm text-orange-300 font-serif font-bold mt-1.5 leading-relaxed">
                {activeConcept.sanskritTitle}
              </p>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed font-sans font-medium text-justify">
                {activeConcept.description}
              </p>
            </div>

            {/* Decomposition Pillars Grid or Timeline */}
            <div className="my-6">
              <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-4">
                CONSTITUENT BLOCKS
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeConcept.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="border border-white/10 rounded-2xl p-4 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-xs font-mono font-bold text-slate-500">
                            STEP {idx + 1}
                          </h4>
                          <h3 className="font-extrabold text-sm text-white mt-0.5 leading-tight">
                            {pillar.name}
                          </h3>
                        </div>
                        {pillar.sanskritName && (
                          <span className="text-xs font-serif font-bold bg-orange-600/20 border border-orange-500/30 text-orange-300 py-0.5 px-2 rounded-md">
                            {pillar.sanskritName}
                          </span>
                        )}
                      </div>

                      <p className="text-[11px] text-orange-400 font-sans tracking-wide font-bold mt-1">
                        {pillar.meaning}
                      </p>

                      <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-sans text-justify font-medium">
                        {pillar.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification marker footers */}
            <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-400 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-555 text-emerald-500 shrink-0" />
                Vetted against orthodox spiritual literature and translation manuals.
              </span>
              <span className="font-mono text-[10px] uppercase font-bold text-orange-400">
                VEDA STUDY NODE
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
