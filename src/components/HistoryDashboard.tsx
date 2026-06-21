/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Trash2, ShieldAlert, Award, Clock, Hash, Flame, Sparkles, Database } from 'lucide-react';
import { ChantingSession } from '../types';

interface HistoryDashboardProps {
  sessions: ChantingSession[];
  onDeleteSession: (id: string) => void;
  onClearAll: () => void;
}

export default function HistoryDashboard({ sessions, onDeleteSession, onClearAll }: HistoryDashboardProps) {
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  
  // Calculate stats
  const totalChants = sessions.reduce((acc, s) => acc + s.count, 0);
  const totalSeconds = sessions.reduce((acc, s) => acc + s.durationSeconds, 0);
  const totalMinutes = Math.ceil(totalSeconds / 60);
  const totalMalas = sessions.reduce((acc, s) => acc + s.completedMalas, 0);

  // Group by day for the last 7 days graph visualization
  const getWeeklyDistribution = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const distribution = Array.from({ length: 7 }).map((_, idx) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - idx));
      return {
        dateStr: d.toDateString(),
        dayName: days[d.getDay()],
        count: 0
      };
    });

    sessions.forEach(s => {
      const sessionDate = new Date(s.timestamp).toDateString();
      const match = distribution.find(d => d.dateStr === sessionDate);
      if (match) {
        match.count += s.count;
      }
    });

    const maxCount = Math.max(...distribution.map(d => d.count), 1);
    return distribution.map(d => ({
      ...d,
      ratio: d.count / maxCount,
    }));
  };

  const weeklyData = getWeeklyDistribution();

  // Calculate dynamic streak (consecutive days of practice)
  const calculateStreak = () => {
    if (sessions.length === 0) return 0;
    
    // Extract unique dates sorted descending
    const uniqueDates = Array.from(new Set(
      sessions.map(s => new Date(s.timestamp).toDateString())
    )).map(d => new Date(d));

    uniqueDates.sort((a, b) => b.getTime() - a.getTime());

    let streak = 0;
    const today = new Date();
    today.setHours(0,0,0,0);
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0,0,0,0);

    // If latest session is not today AND not yesterday, streak is broken
    const latestSession = uniqueDates[0];
    if (latestSession) {
      latestSession.setHours(0,0,0,0);
      if (latestSession.getTime() !== today.getTime() && latestSession.getTime() !== yesterday.getTime()) {
        return 0;
      }
    } else {
      return 0;
    }

    let checkDate = new Date(latestSession);
    streak = 1;

    for (let i = 1; i < uniqueDates.length; i++) {
      const nextDate = new Date(uniqueDates[i]);
      nextDate.setHours(0,0,0,0);
      
      const diffTime = checkDate.getTime() - nextDate.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        streak++;
        checkDate = new Date(nextDate);
      } else if (diffDays > 1) {
        break; // Streak broken
      }
    }

    return streak;
  };

  const streakVal = calculateStreak();

  // Helper to humanize timestamp
  const formatDateTime = (isoStr: string) => {
    const d = new Date(isoStr);
    return d.toLocaleDateString(undefined, { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const handleClearHistoryConfirm = () => {
    onClearAll();
    setShowConfirmClear(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="stats-history-dashboard">
      
      {/* Dynamic Key Metrics Bento Grid */}
      <div className="lg:col-span-8 space-y-6" id="bento-statistics-grid">
        
        {/* KPI Panel Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Total Chants */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-lg hover:border-white/15 transition-all text-slate-100">
            <div className="p-2.5 bg-orange-500/10 rounded-xl w-fit border border-orange-500/20">
              <Hash className="w-5 h-5 text-orange-400" />
            </div>
            <div className="text-[10px] font-mono text-slate-400 font-extrabold uppercase mt-4 mb-1">
              TOTAL CHANTS
            </div>
            <div className="text-2xl font-mono font-black text-white tracking-tight">
              {totalChants.toLocaleString()}
            </div>
          </div>

          {/* Sādhanā Minutes */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-lg hover:border-white/15 transition-all text-slate-100">
            <div className="p-2.5 bg-teal-500/10 rounded-xl w-fit border border-teal-500/20">
              <Clock className="w-5 h-5 text-teal-400" />
            </div>
            <div className="text-[10px] font-mono text-slate-400 font-extrabold uppercase mt-4 mb-1">
              PRACTICE MINS
            </div>
            <div className="text-2xl font-mono font-black text-white tracking-tight">
              {totalMinutes} <span className="text-xs text-slate-400 font-sans font-medium">Mins</span>
            </div>
          </div>

          {/* Malas completed */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-lg hover:border-white/15 transition-all text-slate-100">
            <div className="p-2.5 bg-amber-500/10 rounded-xl w-fit border border-amber-500/20">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-[10px] font-mono text-slate-400 font-extrabold uppercase mt-4 mb-1">
              MALAS DEPLOYED
            </div>
            <div className="text-2xl font-mono font-black text-white tracking-tight">
              {totalMalas.toFixed(1)} <span className="text-xs text-slate-400 font-sans font-medium">Rds</span>
            </div>
          </div>

          {/* Streak */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-lg hover:border-white/15 transition-all text-slate-100">
            <div className="p-2.5 bg-rose-500/10 rounded-xl w-fit border border-rose-500/20">
              <Flame className="w-5 h-5 text-rose-400 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-slate-400 font-extrabold uppercase mt-4 mb-1">
              CURRENT STREAK
            </div>
            <div className="text-2xl font-mono font-black text-white tracking-tight flex items-baseline gap-1.5">
              {streakVal} <span className="text-xs text-slate-400 font-sans font-medium">Days</span>
            </div>
          </div>
        </div>

        {/* 7-Day Weekly Progress Graph */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg text-slate-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-wider text-orange-400 uppercase">PROGRESS METRIC</span>
              <h3 className="text-md font-bold text-white mt-0.5">Sādhanā Frequency (Last 7 Days)</h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-305 bg-emerald-500/15 border border-emerald-500/20 py-1 px-3 rounded-full font-bold">
              + {sessions.length} recorded terms
            </span>
          </div>

          {/* Custom SVG vertical graph */}
          <div className="h-56 relative border-b border-white/10 flex items-end justify-between px-4 pb-2">
            
            {/* Background grid indicators */}
            <div className="absolute top-1/4 left-0 right-0 border-t border-white/5 border-dashed pointer-events-none" />
            <div className="absolute top-2/4 left-0 right-0 border-t border-white/5 border-dashed pointer-events-none" />
            <div className="absolute top-3/4 left-0 right-0 border-t border-white/5 border-dashed pointer-events-none" />

            {weeklyData.map((data, index) => {
              const active = data.count > 0;
              return (
                <div key={index} className="flex flex-col items-center flex-1 group">
                  {/* Tooltip trigger */}
                  <div className="invisible group-hover:visible absolute bg-slate-900 border border-white/10 text-white text-[10px] py-1 px-2.5 rounded-md -translate-y-12 shadow-lg transition-all font-mono font-bold z-20">
                    {data.count} chants
                  </div>

                  {/* Vertical pillar block */}
                  <div className="w-6 sm:w-10 rounded-t-lg relative bg-white/5 overflow-hidden h-36 flex items-end">
                    <div
                      className={`w-full rounded-t-md transition-all duration-700 ease-out ${
                        active 
                          ? 'bg-gradient-to-t from-orange-500 to-amber-500 shadow-md' 
                          : 'bg-white/5'
                      }`}
                      style={{ height: `${data.ratio * 100}%` }}
                    />
                  </div>

                  {/* Horizontal Axis names */}
                  <span className={`text-[10px] font-bold font-mono mt-3 ${active ? 'text-orange-400' : 'text-slate-500'}`}>
                    {data.dayName}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sādhanā History List Module */}
      <div className="lg:col-span-4" id="sessions-history-list-card">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg h-full flex flex-col justify-between text-slate-100">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-orange-400 uppercase">SESSION DIARY</span>
                <h3 className="text-md font-bold text-white">Recent Records</h3>
              </div>
              {sessions.length > 0 && !showConfirmClear && (
                <button
                  onClick={() => setShowConfirmClear(true)}
                  className="text-slate-400 hover:text-rose-450 hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer"
                  title="Purge database local history"
                  id="purge-history-btn"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Custom Clear Confirmation Panel */}
            {showConfirmClear && (
              <div className="p-4 rounded-2xl bg-rose-600/10 border border-rose-500/20 space-y-3 shrink-1 animate-fade-in text-slate-205">
                <div className="flex gap-2 items-start text-xs font-semibold leading-relaxed">
                  <ShieldAlert className="w-4 h-4 text-rose-405 text-rose-450 shrink-0 mt-0.5" />
                  <span>Are you sure you want to permanently erase your entire chanting history? This action cannot be undone.</span>
                </div>
                <div className="flex gap-2 justify-end text-xs font-extrabold">
                  <button
                    onClick={() => setShowConfirmClear(false)}
                    className="py-1.5 px-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleClearHistoryConfirm}
                    className="py-1.5 px-3 rounded-lg bg-rose-650 hover:bg-rose-750 bg-rose-600 hover:bg-rose-700 text-white cursor-pointer"
                  >
                    Yes, Erase All
                  </button>
                </div>
              </div>
            )}

            {sessions.length === 0 ? (
              <div className="py-12 text-center text-slate-400 flex flex-col items-center justify-center">
                <Database className="w-10 h-10 stroke-1 text-slate-550 text-slate-500 mb-2" />
                <p className="text-xs font-semibold">No finished chanting records found.</p>
                <p className="text-[11px] text-slate-400 mt-1 max-w-[200px] leading-relaxed mx-auto">
                  Click 'Save Sadhana' inside the Counter tab to post logs!
                </p>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-[385px] overflow-y-auto pr-1">
                {sessions.map((s) => {
                  const mMin = Math.ceil(s.durationSeconds / 60);
                  return (
                    <div
                      key={s.id}
                      className="p-3 border border-white/5 bg-white/5 hover:bg-white/10 hover:border-orange-500/20 rounded-xl transition-all flex justify-between items-center relative group"
                    >
                      <div className="flex-1 mr-3">
                        <div className="flex items-center gap-1.5">
                          <span className="font-extrabold text-xs text-white line-clamp-1">
                            {s.mantraName}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono mt-1 font-semibold">
                          <span className="text-orange-400">{s.count} chants</span>
                          <span>•</span>
                          <span>{mMin}m active</span>
                        </div>
                        <span className="text-[9px] font-mono text-slate-500 block mt-1">
                          {formatDateTime(s.timestamp)}
                        </span>
                      </div>

                      <button
                        onClick={() => onDeleteSession(s.id)}
                        className="text-slate-400 hover:text-rose-400 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all p-1.5 hover:bg-white/5 rounded-lg shrink-0 cursor-pointer"
                        title="Delete Session Record"
                        id={`delete-session-btn-${s.id}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-orange-600/15 border border-orange-500/20 rounded-2xl p-3.5 mt-4 flex gap-2.5 text-[11px] text-orange-200 font-medium">
            <Database className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Completed Japa runs are stored locally on your device via browser HTML5 local storage.</span>
          </div>

          {/* ========================================================= */}
          {/* COMPREHENSIVE EDUCATIONAL COMPENDIUM SECTION FOR ADSENSE */}
          {/* ========================================================= */}
          <section className="mt-12 pt-8 border-t border-white/10 space-y-8 text-xs sm:text-xs text-slate-300 leading-relaxed font-sans text-justify" id="sadhana-journal-educational-depth">
            
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase py-1 px-3 bg-orange-500/10 rounded-full border border-orange-500/15">
                Spiritual Science & Habit Psychology
              </span>
              <h2 className="text-md sm:text-lg font-black text-white tracking-tight">
                The Science of Sadhana Journaling & Mental Calibration
              </h2>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                Understand how logging your meditative efforts supports long-term habit formation and mental discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
                <h3 className="text-xs font-black text-orange-400 uppercase tracking-wider border-b border-white/5 pb-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  1. The Tradition of Sadhana Patra (Yoga Diaries)
                </h3>
                <p>
                  In traditional yogic schools, maintaining an honest, written record of one's daily spiritual practices (called a <strong>Sādhana Patra</strong>) was considered an essential tool for self-discovery. These diaries were not meant for vanity or self-praise, but served as a clear, objective mirror of the student's inner life. Guided by great sages (such as Swami Sivananda), practitioners recorded their waking hours, active chanting counts, hours spent in silence (Mauna), and any distractions or mental obstacles faced during their sessions.
                </p>
                <p>
                  Entering your daily practices into a diary fosters a healthy sense of personal accountability. Rather than relying on seasonal bursts of inspiration, a Sadhana Patra helps you build a steady, reliable rhythm. By keeping an objective look at your daily efforts, you can easily spot recurring patterns of mental restlessness (Rajas) or lethargy (Tamas) over time. This clear awareness makes it easier to adapt your environment, posture, and chanting times to cultivate stable focus.
                </p>
              </div>

              <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
                <h3 className="text-xs font-black text-orange-400 uppercase tracking-wider border-b border-white/5 pb-1 flex items-center gap-1.5">
                  <Flame className="w-4 h-4" />
                  2. Habit Psychology & Brain Neuroplasticity
                </h3>
                <p>
                  From the perspective of modern behavioral sciences, maintaining a daily practice streak is a powerful way to reinforce positive lifestyle shifts. Neuroscientists have shown that the adult human brain maintains a beautiful capacity for adaptation, known as <strong>neuroplasticity</strong>. Under stressful daily workloads, our neural pathways default to automatic, reactive stress responses. By intentionally dedicating a specific slot of time each day to focused sound contemplation, you train new, calming pathways to form.
                </p>
                <p>
                  Every time you complete a chanting session and update your log, you activate a natural habit loop composed of a cue, a routine, and a gentle reward. Seeing your personal streak grow acts as a visual milestone that keeps you encouraged. This positive reinforcement strengthens your resolve, helping your spiritual discipline transform from a conscious, effortful task into a natural, life-supporting habit that is seamlessly woven into the tapestry of your day.
                </p>
              </div>

              <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
                <h3 className="text-xs font-black text-orange-400 uppercase tracking-wider border-b border-white/5 pb-1 flex items-center gap-1.5 text-orange-404">
                  <Clock className="w-4 h-4 text-orange-404" />
                  3. The Physiological Impact of Rhythmic Focus
                </h3>
                <p>
                  Consistently logging your meditation times also helps you monitor your physical well-being. Studies evaluating heart rate variability (HRV) and respiratory cycles show that regular, rhythmic chanting exercises support cardiovascular harmony. When you chant Sanskrit sounds with steady concern for proper breathing, you naturally practice slow-paced exhalation. This gentle practice helps balance blood pressure, improves oxygenation, and encourages deep, restorative rest.
                </p>
                <p>
                  Tracking the duration of your sessions helps you build a gradual practice, starting with short 5-minute sessions and slowly expanding toward deeper, longer-duration contemplative states. This measured progress ensures you build sustainable cardiovascular and nervous stamina, preventing mental strain and making each step of your path stable, comfortable, and deeply rewarding.
                </p>
              </div>

              <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
                <h3 className="text-xs font-black text-orange-400 uppercase tracking-wider border-b border-white/5 pb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  4. Frequently Asked Practice Tracker Questions
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-extrabold text-white text-[10.5px]">Q: Is my personal practice data kept completely safe?</h4>
                    <p className="text-[10px] text-slate-400">
                      Yes. Your chanting logs and counts are stored entirely inside your browser's local cache (LocalStorage). No personal data or statistics are ever sent to external cloud databases, protecting your privacy completely.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-[10.5px]">Q: What happens if I clear my browser's cache?</h4>
                    <p className="text-[10px] text-slate-400">
                      Clearing your browser's local storage or cookies will remove your logged history. If you wish to save your history indefinitely, avoid deep cleanings of this specific tab's local files.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-[10.5px]">Q: Is a daily streak broken if I miss a single session?</h4>
                    <p className="text-[10px] text-slate-400">
                      The tracking system evaluates consecutive calendar days. While missing a day resets your digital streak, remember that physical consistency and personal dedication always represent the true heart of your practice.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-[#0e1424]/40 border border-white/5 rounded-2xl p-5 space-y-2 text-justify">
              <h3 className="font-extrabold text-[#fff] text-xs">Aesthetic Harmony in Practice Record keeping</h3>
              <p>
                Integrating your chanting sessions with a mindful practice diary transforms random meditative efforts into a cohesive, life-supporting lifestyle template. The tracker offers clear visual feedback on your progress, which naturally reinforces your dedication. By reflecting on your consistency, you can align your mental intention with ancient spiritual discipline. Balancing modern behavioral tracking with traditional Sanskrit science supports your mental resilience, deepens your focus, and brings lasting peace and clarity to your daily journey.
              </p>
            </div>

          </section>

        </div>
      </div>
    </div>
  );
}
