/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, Sparkles, Compass, HelpCircle, Search, 
  ChevronRight, ArrowRight, BookMarked, Brain, Heart,
  Activity, Star, Layers, CheckCircle2, ChevronDown
} from 'lucide-react';
import { MANTRAS } from './MantraData';

interface FAQItem {
  q: string;
  a: string;
  tag: string;
}

interface ArticleItem {
  id: string;
  title: string;
  tag: string;
  author: string;
  readTime: string;
  summary: string;
  content: string[];
  icon: React.ReactNode;
}

export default function WisdomLibrary() {
  const [subTab, setSubTab] = useState<'mantras' | 'guides' | 'articles' | 'faqs'>('mantras');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMantra, setSelectedMantra] = useState<typeof MANTRAS[0]>(MANTRAS[0]);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);
  const [activeArticle, setActiveArticle] = useState<string | null>(null);

  // Filtered mantras for search
  const filteredMantras = MANTRAS.filter(mantra => {
    const q = searchQuery.toLowerCase();
    return (
      mantra.name.toLowerCase().includes(q) ||
      mantra.sanskrit.toLowerCase().includes(q) ||
      mantra.transliteration.toLowerCase().includes(q) ||
      mantra.meaning.toLowerCase().includes(q) ||
      mantra.benefits.toLowerCase().includes(q)
    );
  });

  const faqs: FAQItem[] = [
    {
      q: "Do I need formal initiation (Deeksha) to chant these mantras?",
      a: "No. While formal initiation from a master (Guru) establishes an energetic seed lineage, universal peace mantras (Shanti), prayers like the Gayatri, and simple divine remembrance names can be chanted respectfully by anyone, anywhere. Pure devotion, sincerity, and direct focus override all external protocols.",
      tag: "Rules & Lineage"
    },
    {
      q: "Can I chant mentally while commuting or working?",
      a: "Yes. In the yogic texts, this constant awareness is known as Nitya Smarana (unbroken recollection). Silent mental chanting (Manasa Japa) is actually considered the most potent form. Performing Japa during daily tasks purifies your sub-conscious and creates a spiritual shield in busy environments.",
      tag: "Methodology"
    },
    {
      q: "What is the science behind 108 repetitions in a Mala?",
      a: "The number 108 represents cosmic alignment: the distance between the Earth and Sun is approximately 108 times the Sun's diameter, and the distance between Earth and Moon is 108 times the Moon's diameter. In yogic physiology, there are 108 primary energy channels (nadis) meeting inside the heart chakra. Astrologically, there are 12 zodiac houses and 9 planetary forces, multiplying to 108.",
      tag: "Cosmology"
    },
    {
      q: "Should I chant aloud, whisper, or chant silently?",
      a: "Classical yoga defines three modes: 1. Vaikhari (Audible) – ideal for beginners to drown out external sounds and anchor focus; 2. Upamsu (Whispered) – quiet, with lips moving, interiorizing the mind; 3. Manasa (Silent) – pure mental vibration, creating maximum spiritual resonance within the nervous system. You can cycle through these based on your focus level.",
      tag: "Methodology"
    },
    {
      q: "My mind feels restless and wanders constantly during Japa. What should I do?",
      a: "Restlessness is completely natural. Do not fight or judge your thoughts. Instead, view your mind as a neutral canvas. Observe the thoughts bypass like clouds, and gently redirect your ear back to the sound of the mantra, or coordinate each repetition with your breathing cycle (inhale for one repetition, exhale for the next).",
      tag: "Mind Control"
    },
    {
      q: "Are there preferred timings (Muhurtas) for chanting?",
      a: "Yes. The most auspicious hour is Brahma Muhurta (approximately 1.5 hours before sunrise, typically 4:00 AM to 6:00 AM), when physical atmospheric activity is lowest and the natural mind is clean and responsive. Sunset (Sandhyam) and before sleeping are also heavily recommended for establishing profound stability.",
      tag: "Timing"
    }
  ];

  const articles: ArticleItem[] = [
    {
      id: 'sound-resonance',
      title: 'The Science of Cosmic Resonance: How Sound Directs Matter',
      tag: 'Spiritual Acoustics',
      author: 'Shri Veda Vignan Parishad',
      readTime: '4 min read',
      icon: <Layers className="w-5 h-5 text-orange-400" />,
      summary: 'Explore Vedic metaphysics where sound (Nāda) is defined not just as an auditory perception, but as the fundamental primordial building energy of physical matter.',
      content: [
        "In the Upanishadic texts, space (Akasha) and sound (Shabda) are the first elements to unfold from absolute truth. Long before modern string theory hypothesized that particles are vibrating strings of energy, yogis recognized that every atomic arrangement has an inherent resonant frequency.",
        "When we chant a Sanskrit mantra, we are not reciting human-invented languages; we are vibrating structured acoustic keys designed by ancient seers through deep absorption (Samadhi). The geometric configuration of Sanskrit syllables directly imprints on the subconscious mind.",
        "Clinical trials analyzing EEG brainwave telemetry reveal that chanting harmonic frequencies shifts neurologically active brain waves from hyper-alert Beta bands into highly creative Alpha and deeply meditative Theta states. This acoustical remodeling clears chemical blockages and restores optimal cell-level coherence throughout the biological body."
      ]
    },
    {
      id: 'neuro-synchronization',
      title: 'Neuro-Spiritual Synchronization: Japa and the Vagus Nerve',
      tag: 'Yogic Biology',
      author: 'Institute of Vedic & Neurological Studies',
      readTime: '5 min read',
      icon: <Brain className="w-5 h-5 text-teal-400" />,
      summary: 'A look at how physical tongue movements on the 84 palate trigger points during Sanskrit chanting stimulate key cranial nerves to lower stress and reboot your nervous system.',
      content: [
        "The scientific validity of Japa lies in the anatomy of the human mouth. The upper palate contains 84 reflex auricle points – 64 in the hard palate and 20 in the soft palate. As the tongue moves during Sanskrit recitation, it taps these points as if typing on an electronic keyboard.",
        "This tactile palate-vibration fires signals directly into the hypothalamus, pineal gland, and pituitary gland. It stimulates the rapid release of neurotransmitters (including serotonin and dopamine) while regulating the master endocrine gland's secretion cycles.",
        "Furthermore, the structured exhalation pattern maintained during rhythmic chanting stimulates the Vagus nerve—the highway of the Parasympathetic Nervous System. This instantly downregulates the 'fight or flight' response, reducing heart rate variability stress, lower blood pressure, and calming inflammation biomarkers."
      ]
    },
    {
      id: 'four-stages-speech',
      title: 'The Four Stages of Speech (Vak) in Vedic Psychology',
      tag: 'Vedic Psychology',
      author: 'Sadhana Research Circle',
      readTime: '4 min read',
      icon: <Activity className="w-5 h-5 text-amber-400" />,
      summary: 'Analyze Sanskrit speech theory to understand how mantra meditation leads you on a beautiful interior journey from physical spoken syllables down to latent silent consciousness.',
      content: [
        "Vedic sages defined speech (Vak) as having four concentric dimensions. Understanding these stages illuminates how Japa serves as a spiritual vehicle to transport individual awareness back to the boundless Source.",
        "1. VAIKHARI (Physical Speech): The gross physical sound wave originating from the throat, teeth, and lips. It is the outer shell of sound that interacts with the material environment.",
        "2. MADHYAMA (Middle/Mental Stage): The silent mental concept that precedes physical sound, existing within the mind's domain of logic and thoughts.",
        "3. PASYANTI (Visual/Telepathic Stage): The intuitive flash of absolute pattern, where a entire idea or truth is seen all at once as a unified shape, before being split into words.",
        "4. PARA (Primordial/Latent Stage): The unmanifest, silent ocean of pure potential consciousness, resting in the naval center (Muladhara). Chanting Japa acts as a backward stream, dissolving Vaikhari into Madhyama, which reveals Pasyanti, ultimately plunging the practitioner into the absolute silence of Para."
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="wisdom-library-base-grid">
      
      {/* Sub-navigation Sidebar */}
      <div className="lg:col-span-3 space-y-3" id="wisdom-subnavigation-sidebar">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-lg text-slate-105">
          <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase">WISDOM VAULT</span>
          <h2 className="text-lg font-black bg-gradient-to-r from-white to-slate-350 bg-clip-text text-transparent mt-1 mb-1.5 leading-tight">Spiritual Library</h2>
          <p className="text-[11px] text-slate-400 leading-relaxed font-medium mb-4">
            Explore authentic manuals on Vedic acoustics, Sanskrit translation guides, benefits, and psychological deep-dives.
          </p>

          <div className="space-y-1.5">
            <button
              onClick={() => { setSubTab('mantras'); setActiveArticle(null); }}
              className={`w-full text-left p-3 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                subTab === 'mantras' && !activeArticle
                  ? 'border-orange-500/50 bg-orange-500/10 text-white font-bold shadow-md'
                  : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <BookOpen className={`w-4 h-4 ${subTab === 'mantras' ? 'text-orange-400' : 'text-slate-400'}`} />
              <span className="text-xs font-semibold">Mantras & Meanings</span>
            </button>

            <button
              onClick={() => { setSubTab('guides'); setActiveArticle(null); }}
              className={`w-full text-left p-3 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                subTab === 'guides' && !activeArticle
                  ? 'border-orange-500/50 bg-orange-500/10 text-white font-bold shadow-md'
                  : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Compass className={`w-4 h-4 ${subTab === 'guides' ? 'text-orange-400' : 'text-slate-400'}`} />
              <span className="text-xs font-semibold">Jaap Guides</span>
            </button>

            <button
              onClick={() => { setSubTab('articles'); }}
              className={`w-full text-left p-3 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                subTab === 'articles'
                  ? 'border-orange-500/50 bg-orange-500/10 text-white font-bold shadow-md'
                  : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <BookMarked className={`w-4 h-4 ${subTab === 'articles' ? 'text-orange-400' : 'text-slate-400'}`} />
              <span className="text-xs font-semibold">Spiritual Articles</span>
            </button>

            <button
              onClick={() => { setSubTab('faqs'); setActiveArticle(null); }}
              className={`w-full text-left p-3 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                subTab === 'faqs' && !activeArticle
                  ? 'border-orange-500/50 bg-orange-500/10 text-white font-bold shadow-md'
                  : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <HelpCircle className={`w-4 h-4 ${subTab === 'faqs' ? 'text-orange-400' : 'text-slate-400'}`} />
              <span className="text-xs font-semibold">Sadhana FAQs</span>
            </button>
          </div>
        </div>

        {/* Dynamic Tip Box */}
        <div className="bg-orange-600/15 border border-orange-500/20 p-5 rounded-3xl space-y-2.5 shadow-md text-slate-100">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-305">
            <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
            Veda Pro-Tip
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed font-sans font-medium text-justify">
            Keep your spine straight (Kaya-Griva-Siras-Samam) and breathe into your lower abdominal basin. Synchronizing breath with sound multiplies electrical neurological synchronization!
          </p>
        </div>
      </div>

      {/* Main Material Detail Canvas */}
      <div className="lg:col-span-9" id="wisdom-material-deck-canvas">
        
        {/* TAB 1: MANTRAS & MEANINGS EXPLORER */}
        {subTab === 'mantras' && !activeArticle && (
          <div className="space-y-6 animate-fade-in">
            {/* Search and header bar */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-lg text-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wide">ETIMOLOGY VAULT</span>
                <h3 className="text-md font-extrabold text-white">Interactive Mantra Dictionary</h3>
              </div>
              <div className="relative max-w-sm w-full">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter by name, meaning, or benefits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-xs rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-orange-500/40 font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Mantra sidebar list */}
              <div className="md:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-lg max-h-[450px] overflow-y-auto space-y-2">
                <span className="text-[9px] font-mono font-bold tracking-wider text-slate-400 uppercase px-2">CURATED CORPUS</span>
                {filteredMantras.length === 0 ? (
                  <p className="text-xs text-slate-400 px-2 py-4 italic">No matching mantras found.</p>
                ) : (
                  filteredMantras.map((mantra) => {
                    const isSelected = selectedMantra.id === mantra.id;
                    return (
                      <button
                        key={mantra.id}
                        onClick={() => setSelectedMantra(mantra)}
                        className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                          isSelected
                            ? 'border-orange-500 bg-orange-600/15 text-white'
                            : 'border-white/5 hover:bg-white/5 hover:border-white/10 text-slate-300'
                        }`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="text-xs font-bold leading-tight line-clamp-1">{mantra.name}</span>
                          <span className="text-[9px] font-mono py-0.5 px-1.5 rounded bg-white/10 text-slate-400 uppercase shrink-0 font-bold ml-1">
                            {mantra.id === 'shanti' || mantra.id === 'gayatri' ? 'Vedic' : 'Chant'}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-orange-400 line-clamp-1 italic font-bold">
                          {mantra.transliteration}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Detail display panel */}
              <div className="md:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg text-slate-100 flex flex-col justify-between h-fit min-h-[450px]">
                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">{selectedMantra.name}</h4>
                      <span className="text-[9px] font-mono text-orange-400 uppercase font-black tracking-wider">Acoustic Sanskrit Key</span>
                    </div>
                  </div>

                  {/* Devotional Sanskrit Panel */}
                  <div className="p-4 bg-orange-600/10 border border-orange-500/20 rounded-2xl text-center shadow-inner relative overflow-hidden">
                    <span className="absolute top-1 left-2 text-[8px] font-mono text-orange-400/50 uppercase font-black">ORIGINAL DEVANAgARI</span>
                    <p className="text-md sm:text-lg font-serif font-bold text-orange-350 tracking-wide select-all leading-relaxed py-1.5">
                      {selectedMantra.sanskrit}
                    </p>
                    <p className="text-xs font-sans text-slate-300 mt-2 font-medium italic border-t border-white/5 pt-2">
                       {selectedMantra.transliteration}
                    </p>
                  </div>

                  {/* Absolute translation meanings */}
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">MANTRA MEANING (English)</span>
                    <p className="text-xs text-slate-200 leading-relaxed font-sans font-medium text-justify p-3 bg-white/5 rounded-xl border border-white/5">
                      {selectedMantra.meaning}
                    </p>
                  </div>

                  {selectedMantra.hindiMeaning && (
                    <div>
                      <span className="text-[9px] font-mono font-bold tracking-wider text-orange-400 uppercase block mb-1">मंत्र अर्थ (हिन्दी)</span>
                      <p className="text-xs text-orange-100 leading-relaxed font-serif text-justify p-3 bg-white/5 rounded-xl border border-orange-500/10">
                        {selectedMantra.hindiMeaning}
                      </p>
                    </div>
                  )}

                  {/* Dedicated spiritual benefits */}
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">BIO-ENERGY BENEFITS (English)</span>
                    <p className="text-xs text-amber-300 font-sans font-semibold p-3 bg-amber-500/5 rounded-xl border border-amber-500/10 flex items-start gap-2 leading-relaxed">
                      <Star className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 fill-current animate-pulse" />
                      <span>{selectedMantra.benefits}</span>
                    </p>
                  </div>

                  {selectedMantra.hindiBenefits && (
                    <div>
                      <span className="text-[9px] font-mono font-bold tracking-wider text-orange-400 uppercase block mb-1">साधना के दिव्य लाभ (हिन्दी)</span>
                      <p className="text-xs text-orange-200 font-serif font-medium p-3 bg-orange-500/5 rounded-xl border border-orange-500/10 flex items-start gap-2 leading-relaxed">
                        <Star className="w-4 h-4 text-orange-400 shrink-0 mt-0.5 fill-current" />
                        <span>{selectedMantra.hindiBenefits}</span>
                      </p>
                    </div>
                  )}

                  {/* Word by word breakdown list if present */}
                  {selectedMantra.wordByWord && (
                    <div>
                      <span className="text-[9px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1.5">WORD-BY-WORD ETYMOLOGY</span>
                      <div className="grid grid-cols-2 gap-2 max-h-[140px] overflow-y-auto pr-1">
                        {selectedMantra.wordByWord.map((wb, idx) => (
                          <div key={idx} className="p-2 border border-white/5 bg-white/5 rounded-lg flex flex-col justify-center">
                            <span className="text-[10px] font-bold font-serif text-orange-400 leading-tight">{wb.word}</span>
                            <span className="text-[9.5px] text-slate-350 leading-snug mt-0.5 font-medium">{wb.meaning}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DETAILED JAAP GUIDES */}
        {subTab === 'guides' && !activeArticle && (
          <div className="space-y-5 animate-fade-in">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-lg text-slate-100">
              <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wide">SADHANĀ MANUAL</span>
              <h3 className="text-md font-bold text-white mt-0.5 mb-1.5">Golden Rules of Japa Practice</h3>
              <p className="text-xs text-slate-350 leading-relaxed font-medium">
                Sanskrit Japa is an exact spiritual science. Follow these four physiological guidelines curated from authentic Shastras to optimize mental cohesion and spiritual protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-lg flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-orange-500/10 rounded-2xl w-fit border border-orange-500/20 text-orange-400 font-bold font-mono text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Posture & Asana Secrets</h4>
                    <span className="text-[9px] font-mono text-orange-400">KAYA GRIVA SHIRAS SAMAM</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium text-justify">
                  Sit comfortably in Sukhasana (cross-legged) or Padmasana. Keep your spine, neck, and head perfectly straight. Aligning the vertebrae opens the central energetic channel (Sushumna Nadi), allowing energy generated from chanting to climb uninhibitedly to higher neural centers. Sit on a natural fiber carpet, wool sheet, or cotton blanket to prevent bio-electricity from grounding into the floor.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-lg flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-500/10 rounded-2xl w-fit border border-teal-500/20 text-teal-400 font-bold font-mono text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Mala Selection & Beads</h4>
                    <span className="text-[9px] font-mono text-teal-400">RUDRAKSHA & TULSI CODES</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium text-justify">
                  Using a physical rosary of 108 beads acts as an anchor. Tulsi beads are electric with peaceful energy, heavily favored for Vishnu and Krishna chanting. Rudraksha seeds hold powerful electromagnetic force, ideal for Shiva and Devi sadhana. Use your right hand and slide beads with the middle finger and thumb. Avoid touching beads using the index finger (representing the personal ego).
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-lg flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-500/10 rounded-2xl w-fit border border-amber-500/20 text-amber-400 font-bold font-mono text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Three-Tier Speech Art</h4>
                    <span className="text-[9px] font-mono text-amber-400">VAIKHARI • UPAMSU • MANASA</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium text-justify">
                  Cycle through speech modes depending on focus. When your surroundings are noisy or your head is highly cluttered, chant aloud (Vaikhari). This physically structures your environment. When slightly settled, transition to a whisper (Upamsu) where only lips move, driving the sound waves inwards. Finally, graduate to silent, mental recitation (Manasa), repeating the key purely in mental space.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-lg flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-rose-500/10 rounded-2xl w-fit border border-rose-500/20 text-rose-400 font-bold font-mono text-xs">
                    04
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Prana & Rhythm Linking</h4>
                    <span className="text-[9px] font-mono text-rose-400">SOHAM SYNCHRONICITY</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium text-justify">
                  Do not speed-chant. Sound gains power through structural purity, not rush. Match repetitions with the respiratory cycles or keep an absolute, mechanical pace. Let the sound wash over you. If your eyes wander, fix your gaze on the flame of a candle, a saffron dot, or look slightly upwards at your third-eye center (Bhrumadhya) with eyes closed to collect visual consciousness.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SPIRITUAL ARTICLES */}
        {subTab === 'articles' && (
          <div className="space-y-6 animate-fade-in">
            {!activeArticle ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((art) => (
                  <div 
                    key={art.id}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg hover:border-white/15 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div className="p-2 bg-white/5 border border-white/10 rounded-xl">
                          {art.icon}
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">{art.readTime}</span>
                      </div>
                      <span className="text-[9px] font-mono py-0.5 px-2 bg-orange-500/15 text-orange-300 border border-orange-500/20 rounded-md font-bold uppercase w-fit block">
                        {art.tag}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug">{art.title}</h4>
                      <p className="text-xs text-slate-400 line-clamp-4 font-medium leading-relaxed text-justify">
                        {art.summary}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveArticle(art.id)}
                      className="mt-5 w-full py-2.5 px-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-xs font-bold text-slate-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      Read Full Article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              (() => {
                const art = articles.find(a => a.id === activeArticle);
                if (!art) return null;
                return (
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-lg text-slate-100 space-y-6 animate-fade-in">
                    <button
                      onClick={() => setActiveArticle(null)}
                      className="py-1.5 px-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-300 cursor-pointer w-fit"
                    >
                      ← Back to Directory
                    </button>

                    <div className="border-b border-white/10 pb-5">
                      <span className="text-[10px] font-mono py-0.5 px-2 bg-orange-500/15 text-orange-300 border border-orange-500/20 rounded-md font-bold uppercase w-fit block mb-3">
                        {art.tag}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">{art.title}</h2>
                      <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono mt-3 font-semibold">
                        <span>By {art.author}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                      </div>
                    </div>

                    <div className="space-y-4 max-w-3xl">
                      {art.content.map((para, idx) => (
                        <p key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans text-justify font-medium">
                          {para}
                        </p>
                      ))}
                    </div>

                    <div className="border-t border-white/10 pt-5 flex items-center gap-2 text-xs italic text-orange-305 font-medium bg-orange-600/5 p-4 rounded-2xl border border-orange-500/10">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                      <span>Article synthesized in collaboration with the Vedic Science Foundation. Seek, practice, and realize.</span>
                    </div>
                  </div>
                );
              })()
            )}
          </div>
        )}

        {/* TAB 4: SADHANA FAQS */}
        {subTab === 'faqs' && !activeArticle && (
          <div className="space-y-4 animate-fade-in">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-lg text-slate-100 mb-2">
              <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wide">FAQ DECK</span>
              <h3 className="text-md font-bold text-white mt-0.5 mb-1.5">Frequently Asked Spiritual Questions</h3>
              <p className="text-xs text-slate-350 leading-relaxed font-medium">
                Find clear, non-dogmatic explanations regarding daily chanting, pronunciation doubts, environment setting, and bead physics.
              </p>
            </div>

            <div className="space-y-2.5">
              {faqs.map((f, idx) => {
                const isOpen = activeFAQ === idx;
                return (
                  <div 
                    key={idx}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-md transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFAQ(isOpen ? null : idx)}
                      className="w-full text-left p-4 flex items-center justify-between gap-4 transition-colors hover:bg-white/5 cursor-pointer"
                    >
                      <div className="flex-1">
                        <span className="text-[9px] font-mono font-bold text-orange-400 uppercase block mb-1">
                          {f.tag}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                          {f.q}
                        </h4>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-400' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed font-sans font-medium text-justify border-t border-white/5 bg-white/2 animate-fade-in">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
