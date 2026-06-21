/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Sparkles, 
  Activity, 
  Heart, 
  Layers, 
  Compass, 
  BookOpen, 
  HelpCircle, 
  Flame, 
  ShieldCheck, 
  ChevronDown, 
  Sun, 
  Moon, 
  Anchor, 
  Award, 
  Hash, 
  UserCheck 
} from 'lucide-react';

interface HomepageWisdomProps {
  onSelectMantra?: (mantraName: string, suggestedLimit: number) => void;
  onNavigateTab?: (tab: 'wisdom' | 'meditation' | 'sounds') => void;
  children?: React.ReactNode;
}

export default function HomepageWisdom({ onSelectMantra, onNavigateTab, children }: HomepageWisdomProps) {
  // Local state to manage the expanded story
  const [activeStory, setActiveStory] = useState<'valmiki' | 'dhruva' | 'hanuman'>('valmiki');
  
  // Local state for the 20-FAQ accordion block on the homepage
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const stories = {
    valmiki: {
      title: "The Transfiguration of Sage Vālmīki",
      subtitle: "How the repetitive friction of sound inverted a highway robber's heart into a legendary sage.",
      content: [
        "In the dense, ancient forests of classical India, there lived a fierce robber named Ratnakar, who made his living by plundering travelers. One day, he crossed paths with the wandering celestial scholar Sage Narada. When Ratnakar demanded Narada surrender his possessions, Narada smiled and asked him a simple, piercing question: 'Are those for whom you commit these violent acts willing to share the weight of your moral karmic debts?'",
        "Ratnakar returned home to ask his wife and family, only to receive a unanimous refusal—they would enjoy the wealth, but the moral burden remained his alone. Distressed and deeply shaken, Ratnakar ran back to Narada, collapsing at his feet, begging for a path to clear his past of violence. Recognizing the robber's sincere desire to change, Narada decided to initiate him into spiritual meditation.",
        "However, Ratnakar's mind was so heavy with past actions that he was physically unable to pronounce the holy name of 'Rāma'. Every time he tried to say the sound, his throat seized. Instantly adapting to his student's capacity, Narada instructed him to repeat the word 'Marā' instead, which translates to 'death, decay, or let go.' Narada told him to chant 'Marā, Marā, Marā' continuously without stopping.",
        "Ratnakar sat beneath a banyan tree, closed his eyes, and began to chant: 'Marā... Marā... Marā...' As his concentration intensified and his chanting speed naturally accelerated, the trailing sounds merged: 'Marā-marā-marā-marā' naturally inverted in his mouth into 'Rāma-rāma-rāma-rāma'. He fell into a deep absorption (Samadhi) that lasted for decades. He became so completely unmoving and quiet that forest ants built a massive soil mound (Valmika) covering his entire somatic body.",
        "When Narada returned years later, he broke open the anthill and woke the meditator. Because he emerged fully illuminated from the anthill, Narada gave him the spiritual name 'Vālmīki' (He Who Emerged from the Anthill). Valmiki went on to write the epic Ramayana, using his transformed linguistic genius to compose pristine Sanskrit poetry. His tale stands as the ultimate traditional proof of Japa's transmuting power—how the continuous rhythmic friction of simple vocal sounds can reshape a human brain and destiny."
      ]
    },
    dhruva: {
      title: "The Unbending Will of Prince Dhruva",
      subtitle: "A five-year-old child's singular dedication that established the North Pole Star.",
      content: [
        "Dhruva was a young royal prince, the son of King Uttanapada. However, the King favored his second wife and stepson, while Dhruva's mother was neglected. One afternoon, when the five-year-old Dhruva attempted to sit on his father's royal lap, his stepmother publicly dragged him away, mocking his maternal lineage and telling him that if he wished to deserve the throne, he must go pray to the universe in the dense wilderness.",
        "Deeply hurt and seeking absolute Justice, young Dhruva left the palace and marched into the dangerous, wild forest of Madhuvan. Intrigued by the child's raw, unbending determination, Sage Narada appeared before him. Narada tried to dissuade him, citing the forest's dangerous predators, bitter cold, and the extreme difficulty of spiritual focus for a young child. Dhruva, however, remained completely unshaken.",
        "Inspired by his courage, Narada initiated him into the twelve-syllable (Dvadashakshara) mantra: 'Oṁ Namo Bhagavate Vāsudevāya'. Narada instructed him to sit tall by the banks of the Yamuna River and repeat this formula with absolute, singular focus. The young prince sat in Sukhasana, adjusted his posture, and began his Japa Sadhana, letting go of his royal identity, his home, and his childhood fears.",
        "Dhruva's practice became a masterpiece of discipline. In the first month, he ate only wild fruits every three days. In the second, he ate dry leaves. By the fourth month, he survived purely on inhaling ambient air, standing on a single leg with his mind completely locked onto the mantra rhythm. His mental concentration became so intense, and his life-force (Prana) so dense, that it is said the gravity of his breath balanced the fluctuations of the surrounding natural elements.",
        "The universe, moved by such unprecedented, unmoving concentration from a child, appeared before him as a serene, infinite presence. Dhruva requested no material kingdom or revenge; he simply asked for an eternal anchor of peace and direction. He was granted a permanent celestial seat in our skies as the northern star (Dhruva Nakshatra). To this day, the Pole Star stands as the ultimate guiding constant for navigator ships and travelers—an unmoving monument to the immense power of young focus and unyielding Japa Sadhana."
      ]
    },
    hanuman: {
      title: "The Silent Prāṇic Strength of Hanumān",
      subtitle: "How constant inner repetition of a single name unlocked boundless physiological courage.",
      content: [
        "In the classic scriptures of India, the legendary Hanuman represents the absolute peak of physical power, speed, agility, and courage. He could leap across oceans, carry entire mountain ranges, and stand untouched by weapons. Yet, Hanuman never claimed credit for his feats. He did not train with heavy iron weights or boast about his natural lineage; his strength was a direct byproduct of his continuous, unceasing mental Japa of the name of Rāma.",
        "While other warriors relied on complex strategies, armored shields, and physical bows, Hanuman's weapon was his silent, humming focus. Sages explain that Hanuman's breathing was completely coordinated with his mental repetitions. On every inhalation and exhalation, his lung capacity synchronized with the phonetic beats of his mantra, keeping his heart rate completely stable and his adrenaline under serene conscious control.",
        "Traditional stories tell that once, when presented with a precious necklace of physical gems by Queen Sita, Hanuman began to break the pearls one by one with his teeth, peer inside, and throw them away with disappointment. When the courtiers mockingly asked why he was destroying precious jewels, Hanuman replied that any object—even a beautiful pearl—was worthless to him if it did not contain the loving vibration of Rāma.",
        "To prove his point, Hanuman gently parted the skin over his chest chest cavity. Beneath his skin, the courtiers were astounded to see his actual beating heart, where every single cardiovascular pulse and muscle fiber literally resonated with the audible hum of his mantra. Hanuman's life shows us that Japa is not a dry, repetitive chore. When practiced with deep, loving devotion, it transforms every nerve, tissue, and breath of your body into a highly charged battery of pure life force, strength, and unwavering calm."
      ]
    }
  };

  return (
    <section className="mt-4 space-y-12 pb-16" id="homepage-wisdom-root">
      
      {/* 1. HERO SECTION */}
      <div className="relative overflow-hidden bg-slate-950/40 rounded-3xl border border-white/10 p-8 sm:p-12 text-center space-y-6" id="wisdom-hero">
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/15 via-transparent to-transparent pointer-events-none opacity-60" />
        <span className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-orange-400 uppercase py-1 px-3 bg-orange-500/10 rounded-full border border-orange-500/15">
          <Sparkles className="w-3.5 h-3.5" /> Traditional Vedic Science Hub
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
          The Ancient Wisdom of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400">Japa Meditation</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-medium">
          Learn how mantra repetition transforms focus, discipline, inner peace, and spiritual awareness. Explore authentic traditional guides, historical narratives, and scientific benefits.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {onNavigateTab && (
            <button 
              onClick={() => onNavigateTab('wisdom')}
              className="py-2.5 px-5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-black transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
            >
              Explore 50 Mantras Library
            </button>
          )}
          <a 
            href="#jaap-counter-app-block"
            className="py-2.5 px-5 bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            Start Digital Practice ↓
          </a>
        </div>
      </div>

      {/* 2. FEATURED STORY SECTION */}
      <div className="bg-[#0e1424]/90 border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 relative shadow-2xl" id="wisdom-stories">
        <div className="border-b border-white/5 pb-4">
          <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/15 rounded-full border border-orange-500/25">
            Sanskrit Lore & Inspiration
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-2">Tales of Transmutative Repetition</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl font-medium">
            Explore authentic, detailed stories of how great historical and scriptural figures utilized the continuous discipline of Japa to completely transform their inner focus.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-white/10 gap-1 overflow-x-auto pb-1">
          {Object.keys(stories).map((key) => (
            <button
              key={key}
              onClick={() => setActiveStory(key as 'valmiki' | 'dhruva' | 'hanuman')}
              className={`py-2.5 px-4 rounded-t-xl text-xs font-black transition-all cursor-pointer shrink-0 border-t border-x ${
                activeStory === key 
                  ? 'bg-[#080d1a] text-orange-400 border-white/10 border-b-[#080d1a]' 
                  : 'text-slate-400 hover:text-white border-transparent'
              }`}
            >
              {key === 'valmiki' ? '1. Sage Valmiki' : key === 'dhruva' ? '2. Young Dhruva' : '3. Lord Hanuman'}
            </button>
          ))}
        </div>

        {/* Story Rendering Box (800+ words combined across stories, highly detailed) */}
        <div className="bg-[#080d1a]/80 border border-white/5 rounded-2xl p-5 sm:p-8 space-y-5" id="story-content-box">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-black text-orange-400 flex items-center gap-2">
              <Award className="w-5 h-5 text-orange-400" />
              {stories[activeStory].title}
            </h3>
            <p className="text-xs text-slate-400 italic font-semibold">{stories[activeStory].subtitle}</p>
          </div>
          <div className="space-y-4 text-xs sm:text-xs leading-relaxed text-slate-300 text-justify font-sans font-medium">
            {stories[activeStory].content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SPIRITUAL LESSONS SECTION (Plain English, high value) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="wisdom-lessons">
        <div className="bg-[#0e1424]/80 border border-white/5 rounded-2xl p-6 space-y-4 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center border border-orange-500/25">
            <Anchor className="w-5 h-5 text-orange-400" />
          </div>
          <h3 className="text-sm font-black text-white">What Japa Chanting Really Is</h3>
          <p className="text-xs text-[#94a3b8] leading-relaxed text-justify font-medium">
            Japa is not a thoughtless chore or an empty physical ritual. It is a structured psychological training system that uses a single sacred sound (or mantra) as a focal anchor. By offering your attention to the rhythm and acoustic vibration of the sound over and over, you naturally quiet the constant, busy chatter in your head.
          </p>
        </div>

        <div className="bg-[#0e1424]/80 border border-white/5 rounded-2xl p-6 space-y-4 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center border border-orange-500/25">
            <Flame className="w-5 h-5 text-orange-400" />
          </div>
          <h3 className="text-sm font-black text-white">Why We Repeat Sound Phrases</h3>
          <p className="text-xs text-[#94a3b8] leading-relaxed text-justify font-medium">
            Our brains are wired to grasp onto thoughts. When we chant a mantra, we block out outside noise and busy thoughts, replacing them with a single healthy focus. The ancient Sanskrit syllables trigger subtle nerves in the mouth and throat, calming your heart rate and allowing your mind to rest in deep comfort.
          </p>
        </div>

        <div className="bg-[#0e1424]/80 border border-white/5 rounded-2xl p-6 space-y-4 shadow-md">
          <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center border border-orange-500/25">
            <ShieldCheck className="w-5 h-5 text-orange-400" />
          </div>
          <h3 className="text-sm font-black text-white">The Practical Life Benefits</h3>
          <p className="text-xs text-[#94a3b8] leading-relaxed text-justify font-medium">
            A regular chanting practice trains your attention and blocks out modern digital distractions. It builds strong habits, replaces daily worry with inner emotional balance, and resets your stress levels by slowing down your nervous system, leaving you refreshed, clear-headed, and deeply grounded.
          </p>
        </div>
      </div>

      {/* 4. BEGINNER GUIDES SECTION (Practical tips) */}
      <div className="bg-[#0e1424]/90 border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8" id="wisdom-beginner-guides">
        <div className="border-b border-white/5 pb-4">
          <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/15 rounded-full border border-orange-500/25">
            Step-By-Step Practice
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-2">Essential Beginner Guidelines</h2>
          <p className="text-xs text-slate-400 mt-1 font-medium">
            A simple, practical guide to help you establish a sustainable, clear Japa meditation routine at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-xs">
          
          <div className="p-5 bg-[#080d1a]/85 border border-white/5 rounded-2xl space-y-2">
            <span className="text-orange-400 font-bold block">1. Setting up your sacred space</span>
            <p className="text-[#94a3b8] leading-relaxed text-justify font-medium">
              Find a clean, quiet corner of your room dedicated fully to your quiet times. Sit on a clean cotton blanket or cozy mat to keep yourself comfortable, and face either East or North to greet the natural morning light.
            </p>
          </div>

          <div className="p-5 bg-[#080d1a]/85 border border-white/5 rounded-2xl space-y-2">
            <span className="text-orange-400 font-bold block">2. How to handle and hold a mala</span>
            <p className="text-[#94a3b8] leading-relaxed text-justify font-medium">
              Hold your bead necklace gently draped over your middle finger. Use your thumb to pull each individual bead toward you as you finish reciting your mantra. Keep your index finger raised, honoring the release of personal ego.
            </p>
          </div>

          <div className="p-5 bg-[#080d1a]/85 border border-white/5 rounded-2xl space-y-2">
            <span className="text-orange-400 font-bold block">3. Why we count exactly 108</span>
            <p className="text-[#94a3b8] leading-relaxed text-justify font-medium">
              108 is a beautiful cosmic number. Traditional astronomy notes that the distance from Earth to the Sun is roughly 108 times the Sun's diameter. In Sanskrit practice, the number aligns individual attention with cosmic rhythm.
            </p>
          </div>

          <div className="p-5 bg-[#080d1a]/85 border border-white/5 rounded-2xl space-y-2">
            <span className="text-orange-400 font-bold block">4. The best time of day to chant</span>
            <p className="text-[#94a3b8] leading-relaxed text-justify font-medium">
              The early pre-dawn morning hours (before 6:00 AM) are highly peaceful. The world is naturally quiet, your mind is fresh, and practicing early sets an unshakeable standard of peace for the rest of your daily duties.
            </p>
          </div>

          <div className="p-5 bg-[#080d1a]/85 border border-white/5 rounded-2xl space-y-2">
            <span className="text-orange-400 font-bold block">5. Avoid common beginner mistakes</span>
            <p className="text-[#94a3b8] leading-relaxed text-justify font-medium">
              Avoid rushing through the chant simply to check off numbers. Rushing breeds tension. If your mind drifts, do not get upset or judge your thoughts; simply smile and return to your breathing and sound.
            </p>
          </div>

          <div className="p-5 bg-[#080d1a]/85 border border-white/5 rounded-2xl space-y-2">
            <span className="text-orange-400 font-bold block">6. Synchronize with slow breath</span>
            <p className="text-[#94a3b8] leading-relaxed text-justify font-medium">
              Take regular, steady breaths through your abdomen. Gently coordinate the flow of your chanting with your natural slow breathing, maintaining an unhurried, cozy rhythm that lets your throat and jaw stay loose.
            </p>
          </div>

        </div>
      </div>

      {/* 5. INTERACTIVE PRACTICE SANCTUARY (SUPPORTING FEATURE) */}
      <div id="jaap-counter-app-block" className="scroll-mt-24 p-6 sm:p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1 text-[9px] font-mono tracking-widest text-[#a855f7] uppercase py-1 px-3 bg-purple-500/10 rounded-full border border-purple-500/15">
            <Activity className="w-3 h-3 text-[#a855f7]" /> Interactive Practice Feature
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Interactive Practice & Counting Companion</h2>
          <p className="text-xs text-slate-400 font-semibold leading-relaxed">
            Ready to apply the ancient lessons? Chant below with our offline-first tactile digital counter, sound synthesizer, and pranayama coach.
          </p>
        </div>
        
        {children}
      </div>

      {/* 6. FEATURED ARTICLES */}
      <div className="space-y-6" id="wisdom-featured-articles">
        <div className="border-b border-white/5 pb-2">
          <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/15 rounded-full border border-orange-500/25">
            Knowledge Hub
          </span>
          <h2 className="text-xl font-black text-white mt-2">Curated Educational Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-xs">
          
          <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
            <h4 className="text-orange-350 font-bold text-orange-350 flex items-center gap-1">
              <BookOpen className="w-4 h-4 text-orange-400" />
              Sanskrit: The Palate Keyboard System
            </h4>
            <p className="text-slate-350 text-slate-400 text-justify leading-relaxed font-semibold">
              Discover how Sanskrit shapes are designed as a keyboard system for the upper mouth palate. Reciting sounds stimulates targeted hypothalamus reflex points to coordinate clear focus.
            </p>
          </div>

          <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
            <h4 className="text-orange-350 font-bold text-orange-350 flex items-center gap-1">
              <Compass className="w-4 h-4 text-orange-400" />
              Using Intention (Sankalpa) in Practice
            </h4>
            <p className="text-slate-350 text-slate-400 text-justify leading-relaxed font-semibold">
              Learn how setting a sincere, heartfelt intention before you play sound anchors your subconscious. Giving yourself a clear focus boosts your daily follow-through and builds solid habits.
            </p>
          </div>

          <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
            <h4 className="text-orange-350 font-bold text-orange-350 flex items-center gap-1">
              <Layers className="w-4 h-4 text-orange-400" />
              The Stages of speech: Loud to Silent
            </h4>
            <p className="text-slate-350 text-slate-400 text-justify leading-relaxed font-semibold">
              Explore the four classical Sanskrit levels of vocalization, scaling from aloud physical voice down into deep, entirely inner mental prayers (Manasa) that support absolute memory absorption.
            </p>
          </div>

          <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
            <h4 className="text-orange-350 font-bold text-orange-350 flex items-center gap-1">
              <Activity className="w-4 h-4 text-orange-400" />
              Vagal Resonance & Heart Harmony
            </h4>
            <p className="text-slate-350 text-slate-400 text-justify leading-relaxed font-semibold">
              Review basic clinical research exploring how slow vocal tones send comforting signals along the vagus nerve back to the brain, pacing breathing and matching heart rhythm.
            </p>
          </div>

          <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
            <h4 className="text-orange-350 font-bold text-orange-350 flex items-center gap-1">
              <ChevronDown className="w-4 h-4 text-orange-400" />
              Modern Auditory Gating & Concentration
            </h4>
            <p className="text-slate-350 text-slate-400 text-justify leading-relaxed font-semibold">
              Read how steady support noises (like traditional acoustic tanpuras and sitars) trigger gating, allowing the brain to effortlessly mute sudden environmental background noises.
            </p>
          </div>

          <div className="bg-[#0e1424]/60 border border-white/5 rounded-2xl p-5 space-y-3 shadow-md">
            <h4 className="text-orange-350 font-bold text-orange-350 flex items-center gap-1">
              <HelpCircle className="w-4 h-4 text-orange-400" />
              Establishing a Minimalist Daily Routine
            </h4>
            <p className="text-slate-350 text-slate-400 text-justify leading-relaxed font-semibold">
              Practical strategies to craft and honor daily checkpoints without over-engineering your schedules, keeping your spiritual growth humble, quiet, and stable over decades.
            </p>
          </div>

        </div>
      </div>

      {/* 7. FEATURED MANTRAS SECTION */}
      <div className="bg-[#0e1424]/90 border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8" id="wisdom-mantras">
        <div className="border-b border-white/5 pb-4">
          <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/15 rounded-full border border-orange-500/25">
            Mantra Compendium
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-2">Authentic Sanskrit Mantras</h2>
          <p className="text-xs text-slate-400 mt-1 font-medium">
            Discover 5 traditional formulas, complete with original Sanskrit text, pronunciation lookups, and meanings.
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-xs">
          {[
            {
              name: "1. The Sāvitrī Gāyatrī Mantra",
              sanskrit: "ॐ भूर्भुवः स्वः । तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ॥",
              trans: "Oṁ Bhūr Bhuvaḥ Svaḥ | Tat Savitur Vareṇyaṁ Bhargo Devasya Dhīmahi | Dhiyo Yo Naḥ Pracodayāt",
              meaning: "We contemplate the adorable radiant glory of the solar creator. May that light inspire our intelligence with clear focus and remove all mental listlessness.",
              significance: "Sourced from the Rigveda, it is the primary foundational mantra for daily morning meditation, intellect, and memory cultivation."
            },
            {
              name: "2. The Mahāmṛtyuñjaya Mantra",
              sanskrit: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् । उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात् ॥",
              trans: "Oṁ Tryambakaṁ Yajāmahe Sugandhiṁ Puṣṭi-Vardhanam | Urvārukam-Iva Bandhanān Mṛtyor-Mukṣīya Mā'mṛtāt",
              meaning: "We offer our reverence to the three-eyed divine observer who nourishes our physical and spiritual strength. May we be detached from mortality and worry, just as a ripe melon slips effortlessly from its vine.",
              significance: "Sourced from the Yajurveda, this formula is traditionally practiced to support physical healing, tissue strength, and dispel deep emotional shadows."
            },
            {
              name: "3. Śiva Pañcākṣara Mantra",
              sanskrit: "ॐ नमः शिवाय ॥",
              trans: "Oṁ Namaḥ Śivāya",
              meaning: "I bow respectfully to the auspicious inner consciousness. Namas connects the local heart to the physical elements (Earth, Water, Fire, Air, Space) of outer nature.",
              significance: "A highly accessible, calming five-syllable focus phrase that is widely practiced by beginners to rest high heart rate and nervous tension."
            },
            {
              name: "4. Hanumān Vīra Mantra",
              sanskrit: "ॐ हं हनुमते नमः ॥",
              trans: "Oṁ Haṁ Hanumate Namaḥ",
              meaning: "I offer respect to the infinite protective, unyielding wind-force represented as Hanuman. May my mind inherit unshakeable courage, stamina, and strength.",
              significance: "Chanted during active physical movements, morning exercise, or challenges to clear immediate worries, fear, or mental blocks."
            },
            {
              name: "5. Viṣṇu Śānti Mantra",
              sanskrit: "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं... ॥",
              trans: "Śāntākāraṁ Bhujaga-Śayanaṁ Padma-Nābhaṁ Sureśaṁ",
              meaning: "I bow to the cosmic presence who remains peaceful, resting beautifully even upon the fearsome coils of the worldly serpent. He is the anchor of universal peace.",
              significance: "A classic Upanishadic peace prayer traditionally chanted to cultivate a deep sense of expansive safety, gratitude, and tranquil rest."
            }
          ].map((m, idx) => (
            <div key={idx} className="p-5 bg-[#080d1a]/85 border border-white/5 rounded-2xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/5 pb-2">
                <span className="text-sm font-black text-white">{m.name}</span>
                <span className="text-[10px] font-mono text-orange-400">Standard Vedic Text</span>
              </div>
              <div className="text-right text-base sm:text-lg font-black text-orange-200 font-sans pr-2 select-text">{m.sanskrit}</div>
              <div className="text-[11px] font-mono text-[#94a3b8] italic">Pronunciation: {m.trans}</div>
              <div className="space-y-1 text-[#cbd5e1] text-justify leading-relaxed">
                <p><strong>Universal Translation:</strong> {m.meaning}</p>
                <p className="text-slate-400"><strong>Traditional Context:</strong> {m.significance}</p>
              </div>
              {onSelectMantra && (
                <button
                  onClick={() => {
                    const cleanName = m.name.replace(/^\d+\.\s*/, '').replace(/\s*Mantra.*$/, '');
                    onSelectMantra(cleanName, 108);
                  }}
                  className="mt-3 inline-flex items-center gap-1 text-[11px] text-orange-400 font-black hover:underline cursor-pointer"
                >
                  Select this Mantra for Practice →
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 8. HOME FAQ SECTION WITH 20 INTERACTIVE ACCORDIONS */}
      <div className="bg-[#0e1424]/90 border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8" id="wisdom-faqs">
        <div className="border-b border-white/5 pb-4">
          <span className="text-[10px] font-mono font-bold tracking-wider text-orange-400 uppercase py-0.5 px-2 bg-orange-500/15 rounded-full border border-orange-500/25">
            Knowledge Base
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-2">Practice Learning Resource (20 FAQs)</h2>
          <p className="text-xs text-slate-400 mt-1 font-medium">
            Explore 20 detailed, practical items covering beginner guidance, physical setups, mantras, and software security.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What is the primary spiritual goal of Japa meditation?",
              a: "The final target is to quiet mental waves (Chitta-Vritti). In daily living, we are constantly bombarded with alerts, concerns, and duties. Repeating a simple vocal phrase serves as a reliable mental resting baseline, restoring your spacious focus and emotional stability."
            },
            {
              q: "How does mantra repeating differ from secular mindfulness?",
              a: "Secular mindfulness often focuses on watching breath or physical body scans. Japa adds a powerful vocal acoustic vibration. Repeating Sanskrit sounds stimulates physical palate reflex points, utilizing both tactile touch and sound resonance to steady active brains."
            },
            {
              q: "Why is 108 the standard length for a Japa Mala?",
              a: "108 is a sacred astronomical ratio that bridges skies and human biometrics. The physical distance between Earth and the Sun approximates 108 times the Sun's diameter. In standard cosmology, there are 27 Nakshatras divided into 4 quarters, producing exactly 108 cosmic fields."
            },
            {
              q: "I am a total beginner. Can I practice with any chant or phrase?",
              a: "Yes. You can use standard phrases like 'Om', short soothing affirmations in plain English, or secular peace words like 'Shanti'. Japa is designed as a peaceful, open, and non-sectarian platform welcoming of everyone looking to anchor focus."
            },
            {
              q: "How should I hold the mala beads with my right hand?",
              a: "Drape the necklace gently over the middle finger. Use your thumb to softly slide each bead toward you. The index finger should remain raised and must not touch the counting beads, representing the setting aside of your personal pride."
            },
            {
              q: "Why is loud vocal chanting recommended at first?",
              a: "Audible vocal chanting (Vaikhari) is excellent for newcomers because it physically overrides surrounding household noises and sudden thoughts. Once focus naturally steadies, you can transition into quiet whispering and silent inner repetition."
            },
            {
              q: "What is Brahma Muhurta, and why chant then?",
              a: "It is the auspicious pre-dawn timeframe (typically between 4:00 AM and 5:30 AM). The environment is incredibly quiet, your home is asleep, your mind is free of yesterday's problems, and chanting then establishes a serene baseline for the day."
            },
            {
              q: "Is sitting on a cotton, wool, or silk mat necessary?",
              a: "It is highly recommended for insulation against cold floors. Sitting on natural textiles provides physical comfort and creates a consistent ritual space. Mentally, sitting on your mat acts as a trigger showing your brain it is time to quiet down."
            },
            {
              q: "How do I handle distracting thoughts or random memories?",
              a: "Never battle with distractions. Struggling breeds frustration and tension. Simply acknowledge the random thought as a passing cloud, smile, give yourself permission to let it go, and bring your focus back to the tactile bead and sound."
            },
            {
              q: "Is Japa restricted to any single lifestyle or lineage?",
              a: "No. The practice of repeating sacred formulas is a universal human heritage. Whether you use eastern Sanskrit mantras, western rosary beads, or simple secular affirmations, anyone looking to establish deep calm can utilize our counting interface."
            },
            {
              q: "How do I coordinate my breathing while chanting?",
              a: "Let your breath remain loose, deep, and abdominal. Avoid forcing breaths. Typically, you chant comfortably during your slow exhalations. Inhale quietly while moving to the next bead, maintaining an unforced, easy rhythm."
            },
            {
              q: "How does the live synthesizer drone sound help my focus?",
              a: "The app's synthesizers create a steady, organic 136.1 Hz tone (replicating traditional sitar strings) without compressed loops. This continuous noise-masking shield blocks sudden background noises, helping your brain transition into slow Alpha wave relaxation."
            },
            {
              q: "Is using a digital counter as effective as a wooden bead mat?",
              a: "While physical wooden beads provide unmatched organic tactile feedback, a digital counter is an exceptional modern companion. It allows you to practice quietly at your office desk, during travel, or when physical beads are not available."
            },
            {
              q: "Why is the index finger kept away from the beads?",
              a: "In ancient Indian philosophy, the index finger represents the ego (Ahankara)—the part of us that points, judges, and demands. Meditation is a path of humility. Keeping the index finger separate serves as a beautiful physical cue of letting go."
            },
            {
              q: "What do I do when I reach the larger Guru (Sumeru) bead?",
              a: "Traditionally, you do not cross over the Guru bead. Crossing is seen as disruptive. Pause to take a slow deep breath, turn the mala around in your palm, and count back in the opposite direction. This honors wisdom and prevents robotic chanting."
            },
            {
              q: "How long does a full round of 108 chants usually take?",
              a: "Duration is completely dependent on your speed. Short phrases like 'Om' take 4 to 6 minutes, whereas longer traditional hymns like the Gayatri or Mahamrityunjaya can take anywhere from 15 to 20 minutes of steady, unhurried focus."
            },
            {
              q: "Can I practice Japa while resting, walking, or cooking?",
              a: "Yes. Sitting tall is recommended for deep focus, but practicing 'Likhit Japa' (mindful coordinates while walking) is a gorgeous way to integrate peace into daily duties. If you are unwell, chanting in bed is exceptionally soothing."
            },
            {
              q: "Does my pronunciation of the Sanskrit words have to be flawless?",
              a: "We should always make standard efforts to learn clean, traditional pronunciation, but the absolute core is the sincerity of your heart, focus, and quiet devotion. Do not let fear of mistakes stop you from establishing a practice."
            },
            {
              q: "How does Japa support building healthy daily discipline?",
              a: "By choosing a small, consistent daily target (such as one round of 108 chants before breakfast) and tracking your streak using our local Analytics and Diary, you build strong willpower, reliability, and mental clear-headedness."
            },
            {
              q: "How is my personal practice data protected in this app?",
              a: "We adhere to a strict local-first and offline-first design. All of your practice durations, completed rounds, and goals survive solely inside your own device's LocalStorage. We never use remote databases or ask for your email, respecting your privacy."
            }
          ].map((faq, i) => {
            const isExpanded = expandedFaq === i;
            return (
              <div 
                key={i} 
                className="bg-[#080d1a]/85 border border-white/5 rounded-2xl overflow-hidden transition-all duration-250 hover:border-white/10"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer text-xs font-black text-white hover:text-orange-400 transition-all font-sans"
                >
                  <span className="flex items-start gap-2.5">
                    <span className="text-orange-400 font-mono">Q{i + 1}:</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-orange-400' : ''
                    }`} 
                  />
                </button>
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed text-justify border-t border-white/5 bg-white/1 font-sans font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
