/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Sparkles, Compass, HelpCircle, Search, 
  ChevronRight, ArrowRight, BookMarked, Brain, Heart,
  Activity, Star, Layers, CheckCircle2, ChevronDown, 
  Check, Hash, Wind, Music, AlertCircle, Info, Mail
} from 'lucide-react';
import { MANTRAS_DATABASE, ARTICLES, GUIDES, MantraItem, ArticleItem, GuideItem } from '../data/spiritualData';

interface SpiritualKnowledgeHubProps {
  onSelectMantraForCounter?: (mantraName: string, suggestedLimit: number) => void;
  activeArticleId?: string | null;
  onNavigateArticle?: (id: string | null) => void;
  activeMantraId?: string | null;
  onNavigateMantra?: (id: string | null) => void;
  activeGuideId?: string | null;
  onNavigateGuide?: (id: string | null) => void;
}

export default function SpiritualKnowledgeHub({
  onSelectMantraForCounter,
  activeArticleId,
  onNavigateArticle,
  activeMantraId,
  onNavigateMantra,
  activeGuideId,
  onNavigateGuide
}: SpiritualKnowledgeHubProps) {
  const [subTab, setSubTab] = useState<'mantras' | 'articles' | 'guides' | 'faqs' | 'sitemap'>('mantras');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMantra, setSelectedMantra] = useState<MantraItem>(MANTRAS_DATABASE[0]);
  const [selectedGuide, setSelectedGuide] = useState<GuideItem>(GUIDES[0]);
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Handle external deep navigations
  useEffect(() => {
    if (activeArticleId) {
      setSubTab('articles');
    }
  }, [activeArticleId]);

  useEffect(() => {
    if (activeMantraId) {
      setSubTab('mantras');
      const found = MANTRAS_DATABASE.find(m => m.id === activeMantraId);
      if (found) setSelectedMantra(found);
    }
  }, [activeMantraId]);

  useEffect(() => {
    if (activeGuideId) {
      setSubTab('guides');
      const found = GUIDES.find(g => g.id === activeGuideId);
      if (found) setSelectedGuide(found);
    }
  }, [activeGuideId]);

  // Sync internal states back if user hits close
  const clearSelection = () => {
    if (onNavigateArticle) onNavigateArticle(null);
    if (onNavigateMantra) onNavigateMantra(null);
    if (onNavigateGuide) onNavigateGuide(null);
  };

  // Modern word highlights to search queries
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() 
            ? <mark key={i} className="bg-orange-500/35 text-white rounded-xs px-0.5">{part}</mark> 
            : part
        )}
      </span>
    );
  };

  // Search filter lists
  const filteredMantras = MANTRAS_DATABASE.filter(mantra => {
    const q = searchQuery.toLowerCase();
    return (
      mantra.name.toLowerCase().includes(q) ||
      mantra.sanskrit.toLowerCase().includes(q) ||
      mantra.transliteration.toLowerCase().includes(q) ||
      mantra.meaning.toLowerCase().includes(q) ||
      mantra.benefits.toLowerCase().includes(q) ||
      mantra.significance.toLowerCase().includes(q)
    );
  });

  const uniqueArticleCategories = ['All', ...Array.from(new Set(ARTICLES.map(a => a.category)))];
  
  const filteredArticles = ARTICLES.filter(art => {
    const q = searchQuery.toLowerCase();
    const matchesCategory = filterCategory === 'All' || art.category === filterCategory;
    const matchesSearch = 
      art.title.toLowerCase().includes(q) ||
      art.summary.toLowerCase().includes(q) ||
      art.category.toLowerCase().includes(q) ||
      art.keywords.some(k => k.toLowerCase().includes(q)) ||
      art.content.some(sect => sect.heading.toLowerCase().includes(q) || sect.paragraphs.some(p => p.toLowerCase().includes(q)));
    return matchesCategory && matchesSearch;
  });

  const filteredGuides = GUIDES.filter(guide => {
    const q = searchQuery.toLowerCase();
    return (
      guide.title.toLowerCase().includes(q) ||
      guide.subtitle.toLowerCase().includes(q) ||
      guide.brief.toLowerCase().includes(q) ||
      guide.sections.some(s => s.title.toLowerCase().includes(q) || s.steps.some(st => st.toLowerCase().includes(q)))
    );
  });

  // Dynamic schema injecting for SEO crawls
  useEffect(() => {
    let activeItem: ArticleItem | MantraItem | null = null;
    let schemaJson = {};

    if (subTab === 'articles' && activeArticleId) {
      activeItem = ARTICLES.find(a => a.id === activeArticleId) || null;
      if (activeItem) {
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": (activeItem as ArticleItem).title,
          "description": (activeItem as ArticleItem).metaDescription,
          "genre": (activeItem as ArticleItem).category,
          "keywords": (activeItem as ArticleItem).keywords.join(", "),
          "author": {
            "@type": "Organization",
            "name": "Japa Sadhana Vedic Hub"
          }
        };
      }
    } else if (subTab === 'mantras' && selectedMantra) {
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": selectedMantra.name,
        "abstract": selectedMantra.meaning,
        "about": {
          "@type": "Thing",
          "name": "Vedic Chant Meditation"
        }
      };
    }

    if (Object.keys(schemaJson).length > 0) {
      const existing = document.getElementById('dynamic-jsonld-schema');
      if (existing) existing.remove();
      
      const script = document.createElement('script');
      script.id = 'dynamic-jsonld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaJson);
      document.head.appendChild(script);
    }
  }, [subTab, activeArticleId, selectedMantra]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="spiritual-knowledge-hub-container">
      
      {/* 1. LEFT SIDEBAR: CONTENT PANES */}
      <div className="lg:col-span-3 space-y-3" id="knowledge-hub-sidebar">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/10 rounded-full border border-orange-500/20">
              Spiritual Library
            </span>
          </div>
          <h2 className="text-md font-black text-white mt-1 mb-2 leading-tight">Vedic Knowledge Hub</h2>
          <p className="text-[11px] text-slate-400 leading-relaxed font-semibold mb-4">
            Search 50 authentic Sanskrit mantras, 30 SEO articles, and 8 step-by-step guides.
          </p>

          <div className="space-y-1">
            <button
              onClick={() => { setSubTab('mantras'); clearSelection(); }}
              className={`w-full text-left p-2.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                subTab === 'mantras' && !activeArticleId
                  ? 'border-orange-500/40 bg-orange-500/10 text-white font-bold'
                  : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
              id="subtab-mantras"
            >
              <div className="flex items-center gap-2.5 text-xs font-bold">
                <span className="text-md leading-none">ॐ</span>
                Mantra Library
              </div>
              <span className="text-[10.5px] font-mono font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded-md">50</span>
            </button>

            <button
              onClick={() => { setSubTab('articles'); clearSelection(); }}
              className={`w-full text-left p-2.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                subTab === 'articles'
                  ? 'border-orange-500/40 bg-orange-500/10 text-white font-bold'
                  : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
              id="subtab-articles"
            >
              <div className="flex items-center gap-2.5 text-xs font-bold">
                <BookBookMarkIcon />
                Spiritual Articles
              </div>
              <span className="text-[10.5px] font-mono font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded-md">30</span>
            </button>

            <button
              onClick={() => { setSubTab('guides'); clearSelection(); }}
              className={`w-full text-left p-2.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                subTab === 'guides' && !activeArticleId
                  ? 'border-orange-500/40 bg-orange-500/10 text-white font-bold'
                  : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
              id="subtab-guides"
            >
              <div className="flex items-center gap-2.5 text-xs font-bold">
                <Compass className="w-4 h-4 text-orange-400" />
                Spiritual Guides
              </div>
              <span className="text-[10.5px] font-mono font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded-md">8</span>
            </button>

            <button
              onClick={() => { setSubTab('faqs'); clearSelection(); }}
              className={`w-full text-left p-2.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                subTab === 'faqs' && !activeArticleId
                  ? 'border-orange-500/40 bg-orange-500/10 text-white font-bold'
                  : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
              id="subtab-faqs"
            >
              <div className="flex items-center gap-2.5 text-xs font-bold">
                <HelpCircle className="w-4 h-4 text-emerald-400" />
                Sadhana FAQs
              </div>
              <span className="text-[10.5px] font-mono font-bold text-emerald-400/90 bg-emerald-500/5 px-2 py-0.5 rounded-md">Live</span>
            </button>

            <button
              onClick={() => { setSubTab('sitemap'); clearSelection(); }}
              className={`w-full text-left p-2.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                subTab === 'sitemap' && !activeArticleId
                  ? 'border-orange-500/40 bg-orange-500/10 text-white font-bold'
                  : 'border-transparent text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
              id="subtab-sitemap"
            >
              <div className="flex items-center gap-2.5 text-xs font-bold">
                <Layers className="w-4 h-4 text-purple-400" />
                Spiritual Sitemap
              </div>
              <span className="text-[10.5px] font-mono font-bold text-purple-400/95 bg-purple-500/5 px-2 py-0.5 rounded-md">Index</span>
            </button>
          </div>
        </div>

        {/* Informative Tip Block */}
        <div className="bg-orange-600/10 border border-orange-500/20 p-4 rounded-2xl text-slate-300">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            AdSense Compliance
          </div>
          <p className="text-[10.5px] text-justify leading-relaxed font-semibold font-sans">
            Every mantra, blog, and guide is meticulously structured with genuine, non-duplicate textual insights, Sanskrit glyphs, word-by-word etymology, and dynamic schema tags to guarantee maximum compliance and search engine indexability.
          </p>
        </div>
      </div>

      {/* 2. RIGHT PANEL: DETAILED CARD STACKS */}
      <div className="lg:col-span-9" id="spititual-knowledge-main-deck">
        
        {/* SUBTAB 1: MANTRA LIBRARY (50 items) */}
        {subTab === 'mantras' && (
          <div className="space-y-4 animate-fade-in">
            
            {/* Search filter for Mantras */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">CHORAL DICTIONARY</span>
                <h3 className="text-sm font-black text-white">50 Authentic Hymns & Sanskrit Keys</h3>
              </div>
              <div className="relative max-w-xs w-full">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Seach 50 mantras..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-xs rounded-xl py-2 pl-9 pr-3 text-white focus:outline-none focus:border-orange-500/50 font-semibold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Left Column: List of 50 mantras */}
              <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-3 max-h-[550px] overflow-y-auto space-y-1.5 custom-scrollbar">
                {filteredMantras.length === 0 ? (
                  <p className="text-xs text-slate-450 italic px-2 py-4">No matching mantras found.</p>
                ) : (
                  filteredMantras.map((mantra) => {
                    const isSelected = selectedMantra.id === mantra.id;
                    return (
                      <button
                        key={mantra.id}
                        onClick={() => {
                          setSelectedMantra(mantra);
                          if (onNavigateMantra) onNavigateMantra(mantra.id);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 ${
                          isSelected
                            ? 'border-orange-500 bg-orange-600/15 text-white shadow-xs'
                            : 'border-white/5 hover:bg-white/5 hover:border-white/10 text-slate-350'
                        }`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="text-xs font-black truncate max-w-[80%] leading-tight">
                            {highlightText(mantra.name, searchQuery)}
                          </span>
                          <span className="text-[8px] font-mono bg-white/5 text-slate-400 py-0.5 px-1.5 rounded font-black shrink-0">
                            Count: {mantra.recommendedCount}
                          </span>
                        </div>
                        <span className="text-[9.5px] font-mono text-orange-400/90 line-clamp-1 italic font-semibold">
                          {mantra.transliteration}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Right Column: Active Mantra Details */}
              <div className="md:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <div>
                      <h4 className="text-sm font-black text-white">{selectedMantra.name}</h4>
                      <p className="text-[9px] font-mono text-orange-400 font-bold uppercase tracking-wide">Acoustic Cellular Resonance</p>
                    </div>
                    {onSelectMantraForCounter && (
                      <button
                        onClick={() => onSelectMantraForCounter(selectedMantra.name, selectedMantra.recommendedCount)}
                        className="py-1.5 px-2.5 bg-orange-600 text-white rounded-lg text-xs font-black hover:bg-orange-500 transition-all cursor-pointer flex items-center gap-1 shadow-xs shadow-orange-500/15"
                      >
                        <Hash className="w-3 h-3" />
                        Chant Now
                      </button>
                    )}
                  </div>

                  {/* original devanagari display */}
                  <div className="p-4 bg-orange-500/5 border border-orange-500/15 rounded-xl text-center relative overflow-hidden">
                    <span className="absolute top-1 left-2 text-[8px] font-mono text-orange-400/40 uppercase font-black">ORIGINAL DEVANAGARI VIBRATION</span>
                    <p className="text-md sm:text-lg font-serif font-black text-orange-350 select-all leading-normal py-1.5">
                      {selectedMantra.sanskrit}
                    </p>
                    <p className="text-xs font-semibold text-slate-300 border-t border-white/5 pt-2 mt-2 leading-relaxed">
                      "{selectedMantra.transliteration}"
                    </p>
                  </div>

                  {/* literal translation */}
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono font-black text-slate-400 tracking-wider uppercase block">ENGLISH TRANSLATION</span>
                    <p className="text-xs text-slate-200 leading-relaxed font-sans font-semibold p-3 bg-white/2 rounded-xl border border-white/5 text-justify">
                      {highlightText(selectedMantra.meaning, searchQuery)}
                    </p>
                  </div>

                  {/* detailed physical and medical benefits */}
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono font-black text-slate-400 tracking-wider uppercase block font-sans">AYURVEDIC PHYSIOLOGICAL BENEFITS</span>
                    <div className="text-xs text-amber-300 bg-amber-500/5 p-3 rounded-xl border border-amber-505/10 flex items-start gap-2.5 leading-relaxed font-semibold">
                      <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 fill-current" />
                      <span>{highlightText(selectedMantra.benefits, searchQuery)}</span>
                    </div>
                  </div>

                  {/* parameters */}
                  <div className="grid grid-cols-2 gap-3.5 text-xs">
                    <div className="p-2.5 bg-white/2 border border-white/5 rounded-lg flex flex-col gap-0.5">
                      <span className="text-[8px] font-mono text-slate-450 uppercase font-black">IDEAL HOUR</span>
                      <span className="font-semibold text-slate-200 line-clamp-1">{selectedMantra.bestTime}</span>
                    </div>
                    <div className="p-2.5 bg-white/2 border border-white/5 rounded-lg flex flex-col gap-0.5">
                      <span className="text-[8px] font-mono text-slate-450 uppercase font-black">RECOMMENDED LOOP</span>
                      <span className="font-semibold text-slate-250">{selectedMantra.recommendedCount} Counts (1 Mala)</span>
                    </div>
                  </div>

                  {/* word etymology list if configured */}
                  {selectedMantra.wordByWord && selectedMantra.wordByWord.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-black text-slate-405 tracking-wider uppercase block">ETHYMOLOGY MATRIX</span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {selectedMantra.wordByWord.map((w, i) => (
                          <div key={i} className="p-2 bg-orange-600/5 border border-orange-500/10 rounded-lg">
                            <div className="text-[10px] font-black text-orange-400">{w.word}</div>
                            <div className="text-[9px] text-slate-400 leading-tight mt-0.5 line-clamp-2">{w.meaning}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* customized faq items representing deep content */}
                  {selectedMantra.faqs && selectedMantra.faqs.length > 0 && (
                    <div className="space-y-1.5 border-t border-white/5 pt-3">
                      <span className="text-[9px] font-mono font-black text-slate-450 tracking-wider uppercase block">MANTRA FAQS</span>
                      {selectedMantra.faqs.map((f, i) => (
                        <div key={i} className="p-2.5 bg-white/2 border border-white/5 rounded-lg text-xs space-y-1">
                          <div className="font-black text-white">Q: {f.q}</div>
                          <div className="text-slate-400 font-semibold">{f.a}</div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: SPIRITUAL ARTICLES (30 Items) */}
        {subTab === 'articles' && (
          <div className="space-y-5 animate-fade-in">
            
            {/* If no article is actively being read, list them */}
            {!activeArticleId ? (
              <div className="space-y-4">
                
                {/* Search / Category filters */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">SACRED WRITINGS</span>
                    <h3 className="text-sm font-black text-white">30 Scientific & Philosophical Articles</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-slate-450 mr-1" />
                    <input
                      type="text"
                      placeholder="Search 30 topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-white/5 border border-white/10 text-[11px] rounded-lg py-1.5 px-3 text-white focus:outline-none focus:border-orange-500/40 font-semibold w-40 sm:w-48"
                    />
                    <select
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="bg-slate-900 border border-white/10 text-[11px] rounded-lg py-1.5 px-2 text-slate-300 focus:outline-none font-semibold cursor-pointer"
                    >
                      {uniqueArticleCategories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Grid Deck */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredArticles.length === 0 ? (
                    <div className="col-span-2 text-center py-12 p-6 bg-white/2 rounded-2xl text-slate-400 italic">
                      No matching theological topics found. Try resetting filters or search queries.
                    </div>
                  ) : (
                    filteredArticles.map((art) => (
                      <div 
                        key={art.id}
                        className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all flex flex-col justify-between space-y-4 shadow-sm"
                      >
                        <div className="space-y-2.5">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] font-mono py-0.5 px-2 bg-orange-500/10 text-orange-405 border border-orange-500/15 rounded-md font-black uppercase">
                              {art.category}
                            </span>
                            <span className="text-[9.5px] font-mono text-slate-450 font-bold">{art.readTime}</span>
                          </div>
                          <h4 className="text-xs sm:text-xs font-black text-white leading-snug line-clamp-2">{art.title}</h4>
                          <p className="text-[11px] text-slate-400 line-clamp-3 leading-relaxed text-justify font-semibold">
                            {art.summary}
                          </p>
                        </div>

                        <button
                          onClick={() => {
                            if (onNavigateArticle) onNavigateArticle(art.id);
                          }}
                          className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-slate-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          Read Article
                          <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ) : (
              /* Reading Mode: 1200-2000 Words detailed structured layout */
              (() => {
                const art = ARTICLES.find(a => a.id === activeArticleId);
                if (!art) return null;
                return (
                  <article className="bg-[#0e1424]/90 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in shadow-2xl relative">
                    
                    {/* Back header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <button
                        onClick={() => {
                          if (onNavigateArticle) onNavigateArticle(null);
                        }}
                        className="py-1.5 px-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-black text-slate-300 cursor-pointer flex items-center gap-1.5"
                      >
                        ← Back to Directory
                      </button>
                      <span className="text-[9.5px] font-mono font-black text-slate-450">READING MODE</span>
                    </div>

                    {/* Metadata Header */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[9px] font-mono py-0.5 px-2 bg-orange-500/10 text-orange-400 border border-orange-500/15 rounded-md font-black uppercase">
                          {art.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-450 font-semibold">{art.readTime}</span>
                      </div>
                      <h1 className="text-md sm:text-lg font-black text-white tracking-tight leading-snug">
                        {art.title}
                      </h1>
                      <div className="text-[10.5px] text-slate-400 border-l-2 border-orange-600 pl-3 italic font-semibold py-1">
                        {art.summary}
                      </div>
                    </div>

                    {/* Content Section: Render extensive detailed headings and content */}
                    <div className="space-y-6 max-w-4xl text-slate-200 font-sans leading-relaxed text-justify">
                      {art.content.map((sect, i) => (
                        <div key={i} className="space-y-3">
                          <h2 className="text-xs sm:text-xs font-black text-orange-350 tracking-wide border-b border-white/5 pb-1 uppercase">
                            {sect.heading}
                          </h2>
                          {sect.paragraphs.map((p, pIdx) => (
                            <p key={pIdx} className="text-xs sm:text-[11.5px] text-slate-350 font-semibold leading-relaxed">
                              {/* Build manual internal link anchors dynamically */}
                              {p.includes("Japa") || p.includes("mantra") ? (
                                <span>
                                  {p} Enjoy chanting via our prominent{" "}
                                  <a href="#/jaap" className="text-orange-450 hover:underline inline-flex items-center font-bold">
                                    Jaap Counter tool
                                  </a>.
                                </span>
                              ) : p}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Internal Cross links */}
                    <div className="bg-orange-600/5 p-4 rounded-xl border border-orange-500/10 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-black text-orange-400">
                        <Compass className="w-4 h-4" />
                        Related Spiritual Knowledge
                      </div>
                      <p className="text-[10.5px] text-slate-300 font-semibold leading-normal">
                        Ready to establish a physical practice? Consult our{" "}
                        <button 
                          onClick={() => { setSubTab('guides'); clearSelection(); }} 
                          className="text-orange-400 hover:underline inline font-black focus:outline-none"
                        >
                          8 Spiritual Handbooks
                        </button>{" "}
                        or check classical sounds inside the{" "}
                        <a href="#/sounds" className="text-orange-400 hover:underline font-black">
                          Drone Synthesizer
                        </a>.
                      </p>
                    </div>

                    {/* Structured FAQs */}
                    {art.faqs && art.faqs.length > 0 && (
                      <div className="space-y-3 border-t border-white/5 pt-4">
                        <h3 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                          <HelpCircle className="w-4 h-4 text-emerald-400" />
                          Article Frequently Asked Questions
                        </h3>
                        <div className="space-y-2.5">
                          {art.faqs.map((f, fIdx) => (
                            <div key={fIdx} className="p-3 bg-white/2 border border-white/5 rounded-xl text-xs space-y-1">
                              <div className="font-extrabold text-slate-205">Q: {f.q}</div>
                              <div className="text-slate-400 font-semibold leading-relaxed text-justify">{f.a}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Keyword Matrix */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {art.keywords.map((k, kIdx) => (
                        <span key={kIdx} className="text-[9px] font-mono text-slate-400 px-2 py-0.5 bg-white/2 border border-white/5 rounded-md font-bold">
                          #{k}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })()
            )}
          </div>
        )}

        {/* SUBTAB 3: SPIRITUAL GUIDES (8 Guides) */}
        {subTab === 'guides' && (
          <div className="space-y-4 animate-fade-in">
            
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest block">SADHANĀ BLUEPRINTS</span>
                <h3 className="text-sm font-black text-white">8 Deep Spiritual Handbooks</h3>
              </div>
              <div className="relative max-w-xs w-full">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search 8 guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-xs rounded-xl py-2 pl-9 pr-3 text-white focus:outline-none focus:border-orange-500/50 font-semibold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Guides List Selection */}
              <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-2.5 max-h-[500px] overflow-y-auto space-y-1.5 custom-scrollbar">
                {filteredGuides.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => {
                      setSelectedGuide(g);
                      if (onNavigateGuide) onNavigateGuide(g.id);
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                      selectedGuide.id === g.id
                        ? 'border-orange-500 bg-orange-600/15 text-white shadow-xs'
                        : 'border-white/5 hover:bg-white/5 hover:border-white/10 text-slate-350'
                    }`}
                  >
                    <Compass className={`w-4 h-4 shrink-0 ${selectedGuide.id === g.id ? 'text-orange-400' : 'text-slate-400'}`} />
                    <div className="truncate">
                      <div className="text-xs font-black truncate">{g.title}</div>
                      <div className="text-[9.5px] font-mono text-slate-400 font-bold">{g.readTime}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Guide Contents Detail Panel */}
              <div className="md:col-span-8 bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg space-y-4">
                <div>
                  <h3 className="text-sm font-black text-white">{selectedGuide.title}</h3>
                  <p className="text-xs text-orange-400 font-semibold italic mt-0.5">{selectedGuide.subtitle}</p>
                </div>
                
                <p className="text-xs text-slate-350 leading-relaxed font-semibold text-justify p-3 bg-white/2 rounded-xl border border-white/5">
                  {selectedGuide.brief}
                </p>

                {/* Step contents */}
                <div className="space-y-4 pt-1">
                  {selectedGuide.sections.map((sect, sIdx) => (
                    <div key={sIdx} className="space-y-2.5">
                      <h4 className="text-xs font-extrabold text-white uppercase tracking-wide border-l-2 border-orange-500 pl-2">
                        {sect.title}
                      </h4>
                      <div className="space-y-2">
                        {sect.steps.map((st, stIdx) => (
                          <div key={stIdx} className="p-3 bg-white/2 border border-white/5 rounded-xl flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-orange-600/15 border border-orange-500/30 flex items-center justify-center text-[10px] font-mono font-black text-orange-400 shrink-0 mt-0.5">
                              {stIdx + 1}
                            </span>
                            <p className="text-xs text-slate-300 font-semibold leading-relaxed text-justify">{st}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/5 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <span className="text-slate-450 font-bold font-mono">Status: Pure Sattvic Instruction</span>
                  <a href="#/jaap" className="text-orange-400 hover:underline font-black flex items-center gap-1.5 focus:outline-none">
                    Start Countdown Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: SADHANA FAQS (Detailed drawer list) */}
        {subTab === 'faqs' && (
          <div className="space-y-4 animate-fade-in bg-white/5 border border-white/10 p-5 rounded-2xl shadow-lg">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-450 uppercase tracking-widest block">SADHANĀ KNOWLEDGE DECK</span>
              <h3 className="text-sm font-black text-white mt-0.5 mb-1">Frequently Asked Theological Questions</h3>
              <p className="text-xs text-slate-350 font-semibold leading-relaxed">
                A highly comprehensive, non-dogmatic analytical compilation representing pure Vedic guidelines regarding times, rules, and materials.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {[
                { 
                  q: "What is the science behind 108 repetitions in a Mala?", 
                  a: "The absolute coordinates of 108 represent deep planetary ratios: the average distance between the Earth and the Sun is exactly 108 times the Sun's diameter. Astrologically, multiplying 12 houses by 9 planets yields 108. Physiologically, 108 core nerve channels meet in the heart chakra cavity, establishing full pranic alignment.",
                  cat: "Cosmological Math"
                },
                {
                  q: "Is standard initiation (Deeksha) mandatory to repeat these mantras?",
                  a: "No. Universal names of peace (like Shanti prayers, Ganesha mantras, and divine names) are free for anyone seeking cognitive clarity and quietude. Pure heart focus and correct breathing are major prerequisites that empower chanting beyond external rituals.",
                  cat: "Sadhana Protocols"
                },
                {
                  q: "How do I deal with heavy restlessness and deep mind drifts during practice?",
                  a: "Mind drift is entirely natural. Do not fight or aggressively force-suppress thoughts. Instead, treat thoughts like passing clouds. Simply observe their transition and gently pull your auditory attention back to the physical bead wood and spoken sound vibrations.",
                  cat: "Subconscious Controls"
                },
                {
                  q: "Can I perform Japa mentally while on trains or commuting?",
                  a: "Yes. Mental repetition (Manasa Japa) is actually parsed by ancient Shastras as the most potent form because it entirely interiorizes the nervous system. It sets up an energetic shield (Kavacha) in highly chaotic urban spots.",
                  cat: "Urban Chanting"
                },
                {
                  q: "What physical setups and blankets are recommended?",
                  a: "Always sit on a dry woolen sheet, silk cloth, or cotton blanket draped over your chair or mat. Classical yoga books state that these fibers act as electromagnetic insulators, retaining the restorative electrical bio-charges inside your nervous system instead of grounding them into the floor.",
                  cat: "Somatic Insulators"
                }
              ].map((faq, i) => {
                const isOpen = activeFAQ === faq.q;
                return (
                  <div key={i} className="border border-white/5 bg-white/2 rounded-xl overflow-hidden transition-all">
                    <button
                      onClick={() => setActiveFAQ(isOpen ? null : faq.q)}
                      className="w-full text-left p-3.5 flex items-center justify-between gap-4 hover:bg-white/5 cursor-pointer focus:outline-none"
                    >
                      <div>
                        <span className="text-[8px] font-mono font-black text-emerald-450 uppercase block mb-0.5">{faq.cat}</span>
                        <h4 className="text-xs font-black text-slate-200">{faq.q}</h4>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-orange-400' : ''}`} />
                    </button>
                    {isOpen && (
                      <p className="p-3.5 text-xs text-slate-400 leading-relaxed border-t border-white/5 bg-white/2 text-justify font-semibold">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SUBTAB 5: SPIRITUAL SITEMAP */}
        {subTab === 'sitemap' && (
          <div className="space-y-4 animate-fade-in bg-white/5 border border-white/10 p-5 rounded-2xl shadow-lg text-slate-300">
            <div>
              <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block">VISUAL INDEX locator</span>
              <h3 className="text-sm font-black text-white mt-0.5 mb-1">Index of All Platform Nodes</h3>
              <p className="text-xs text-slate-350 font-semibold leading-relaxed">
                Click any of the 100+ organized spiritual and technical content layers to jump directly into deep research notes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 text-xs">
              
              {/* Mantras index block - 50 items */}
              <div className="space-y-2 p-3 bg-white/2 border border-white/5 rounded-xl">
                <span className="font-black text-orange-400 block border-b border-white/5 pb-1 uppercase text-[10px]">
                  ॐ Mantras ({MANTRAS_DATABASE.length} Nodes)
                </span>
                <div className="space-y-1 max-h-[250px] overflow-y-auto pr-1 text-[11px] font-semibold">
                  {MANTRAS_DATABASE.map(m => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setSelectedMantra(m);
                        setSubTab('mantras');
                        if (onNavigateMantra) onNavigateMantra(m.id);
                      }}
                      className="w-full text-left truncate text-slate-400 hover:text-orange-450 hover:underline block cursor-pointer transition-all"
                    >
                      • {m.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Articles index block - 30 items */}
              <div className="space-y-2 p-3 bg-white/2 border border-white/5 rounded-xl">
                <span className="font-black text-orange-400 block border-b border-white/5 pb-1 uppercase text-[10px]">
                  📖 Articles ({ARTICLES.length} Nodes)
                </span>
                <div className="space-y-1 max-h-[250px] overflow-y-auto pr-1 text-[11px] font-semibold">
                  {ARTICLES.map(a => (
                    <button
                      key={a.id}
                      onClick={() => {
                        setSubTab('articles');
                        if (onNavigateArticle) onNavigateArticle(a.id);
                      }}
                      className="w-full text-left truncate text-slate-400 hover:text-orange-450 hover:underline block cursor-pointer transition-all"
                    >
                      • {a.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guides index block - 8 items */}
              <div className="space-y-2 p-3 bg-white/2 border border-white/5 rounded-xl">
                <span className="font-black text-orange-400 block border-b border-white/5 pb-1 uppercase text-[10px]">
                  🧭 Handbooks ({GUIDES.length} Nodes)
                </span>
                <div className="space-y-1 max-h-[250px] overflow-y-auto pr-1 text-[11px] font-semibold">
                  {GUIDES.map(g => (
                    <button
                      key={g.id}
                      onClick={() => {
                        setSelectedGuide(g);
                        setSubTab('guides');
                        if (onNavigateGuide) onNavigateGuide(g.id);
                      }}
                      className="w-full text-left truncate text-slate-400 hover:text-orange-450 hover:underline block cursor-pointer transition-all"
                    >
                      • {g.title}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function BookBookMarkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-marked w-4 h-4 text-orange-450"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/><path d="M6 14h10"/><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/></svg>
  );
}
