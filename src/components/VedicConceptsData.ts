/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { VedicConcept } from '../types';

export const VEDIC_CONCEPTS: VedicConcept[] = [
  {
    id: 'ashtanga_yoga',
    title: 'The Eight Limbs of Yoga',
    sanskritTitle: 'अष्टाङ्गयोग (Ashtanga Yoga)',
    brief: 'A systematic, step-by-step psychological path of self-purification and cosmic absorption compiled by Sage Patanjali.',
    description: 'Traditional Yoga extends far beyond simple physical stretching (Asana). Patanjali’s Yoga Sutras establish an integrated 8-stage ladder of moral codes, bodily control, sensory refinement, concentration, and supreme union.',
    pillars: [
      {
        name: 'Yama',
        sanskritName: 'यम',
        meaning: 'Social Restraints / Outer Ethics',
        details: 'Essential guidelines for harmonious relationship with the external ecosystem. Comprises Ahimsa (Non-violence), Satya (Truthfulness), Asteya (Non-stealing), Brahmacharya (Sensory restraint), and Aparigraha (Non-hoarding).'
      },
      {
        name: 'Niyama',
        sanskritName: 'नियम',
        meaning: 'Personal Disciplines',
        details: 'Habits for personal growth and inner purity. Comprises Shaucha (Clarity/Cleanliness), Santosha (Contentment), Tapas (Self-discipline), Svadhyaya (Self-study and reading sacred texts), and Ishvara Pranidhana (Surrender to a higher sovereign energy).'
      },
      {
        name: 'Asana',
        sanskritName: 'आसन',
        meaning: 'Steady Posture',
        details: 'Stabilizing the somatic vehicle. The posture needs to be "Sthira" (steady) and "Sukham" (comfortable) to prepare the physiology for profound seated meditation without tension.'
      },
      {
        name: 'Pranayama',
        sanskritName: 'प्राणायाम',
        meaning: 'Vital-force / Breath Direction',
        details: 'Regulating respiratory cycles to redirect "Prana" (cosmic life-force). Helps quiet mental oscillations and directly affect heart rate variability and brain waves.'
      },
      {
        name: 'Pratyahara',
        sanskritName: 'प्रत्याहार',
        meaning: 'Sensory Recoil',
        details: 'Withdrawing individual sensory receptors (vision, hearing, touch, taste, smell) from external distractions, turning attention inward like a tortoise drawing in its limbs.'
      },
      {
        name: 'Dharana',
        sanskritName: 'धारणा',
        meaning: 'One-Pointed Attention',
        details: 'Binding the attention field to a single vector, such as the heart center, a sacred mantra, or the rhythmic breath, without drifting.'
      },
      {
        name: 'Dhyana',
        sanskritName: 'ध्यान',
        meaning: 'Meditative Absorption',
        details: 'An uninterrupted, flowing current of attention towards the point of focus. Unlike Dharana (which takes active effort), Dhyana is a natural, effortless flow.'
      },
      {
        name: 'Samadhi',
        sanskritName: 'समाधि',
        meaning: 'Supreme Integration',
        details: 'The final stage where the ego completely dissolves, and the mediator merging indistinguishably with the object of contemplation. Pure, unalloyed awareness.'
      }
    ],
    practicalApplication: 'Integrate Yama and Niyama into daily communication, and practice the breathing tools (Pranayama) before your chanting (Jaap) sessions for maximum mental alignment.'
  },
  {
    id: 'purusharthas',
    title: 'The Four Goals of Human Life',
    sanskritTitle: 'पुरुषार्थाः (Purusharthas)',
    brief: 'Sacred blueprints establishing balance between worldly engagement, physical wellbeing, social duty, and spiritual liberation.',
    description: 'Vedic philosophy does not reject material comfort or natural desires. Instead, it frames them within a balanced architectural system of four human aspirations.',
    pillars: [
      {
        name: 'Dharma',
        sanskritName: 'धर्म',
        meaning: 'Cosmic Duty, Ethics & Order',
        details: 'Living in agreement with natural law, social responsibility, integrity, and personal ethics. It is the righteous baseline that supports all other pursuits.'
      },
      {
        name: 'Artha',
        sanskritName: 'अर्थ',
        meaning: 'Material Welfare & Security',
        details: 'Acquiring sustainable wealth, resources, profession, and security. Vedic culture supports the creation of prosperity, provided it is earned and distributed via "Dharma".'
      },
      {
        name: 'Kama',
        sanskritName: 'काम',
        meaning: 'Aesthetics, Love & Desire',
        details: 'Experiencing natural sensory beauty, love, artistic expression, pleasure, and emotional fulfillment. Life should be vibrant, rich, and full of creative celebration.'
      },
      {
        name: 'Moksha',
        sanskritName: 'मोक्ष',
        meaning: 'Spiritual Liberation',
        details: 'Freedom from the cycle of conditioning, limitation, and sorrow. Recognizing one’s true, immortal, non-dual cosmic identity ("Atman") beyond the transient physical vehicle.'
      }
    ],
    practicalApplication: 'Check if your actions are balanced: material goals (Artha) and pleasures (Kama) must always be rooted in ecological morality (Dharma) to lead towards spiritual release (Moksha).'
  },
  {
    id: 'trigunas',
    title: 'The Three Qualities of Mind & Nature',
    sanskritTitle: 'त्रिगुणाः (Tri-Gunas)',
    brief: 'The fundamental psychological and physical gears of nature that govern human intelligence, mood, and habits.',
    description: 'According to Sankhya philosophy, the entire manifest universe is composed of three energetic strands. Their combination controls the color of our thoughts and environments.',
    pillars: [
      {
        name: 'Sattva',
        sanskritName: 'सत्त्व',
        meaning: 'Purity, Harmony & Intelligence',
        details: 'Characterized by calmness, wisdom, lightness, truthfulness, and altruism. In a Sattvic mindset, the intellect is transparent, empathetic, and experiences indwelling joy.'
      },
      {
        name: 'Rajas',
        sanskritName: 'रजस',
        meaning: 'Activity, Passion & Motion',
        details: 'Characterized by intense desire, ambition, dynamic speed, and egocentric effort. Driven by reward, attachment, and the urge to change the outer world. Can lead to extreme stress.'
      },
      {
        name: 'Tamas',
        sanskritName: 'तमस',
        meaning: 'Inertia, Darkness & Resistance',
        details: 'Characterized by heavy sloth, delusion, ignorance, sleepiness, and deep hesitation. Necessary for restful sleep, but in excess, causes procrastination, depression, and neglect.'
      }
    ],
    practicalApplication: 'You can alter your state dynamically! Reduce Tamas (sluggishness) with rapid physical movement. Calm Rajas (over-activity) with peaceful ambient chants and slow breathing to dwell in Sattva.'
  },
  {
    id: 'pancha_koshas',
    title: 'The Five Sheaths of Human Existence',
    sanskritTitle: 'पञ्चकोशाः (Pancha-Koshas)',
    brief: 'A spiritual anatomy of the self, progressing from the densest physical skin to the most refined sheath of pure ecstasy.',
    description: 'We are not just a physical bag of bones. Vedic wisdom charts our individual structure into five distinct concentric sheaths that shield our inner spark of pure consciousness.',
    pillars: [
      {
        name: 'Annamaya Kosha',
        sanskritName: 'अन्नमय कोश',
        meaning: 'The Physical Body (Food Sheath)',
        details: 'The densest skin made of food we ingest. Balanced by proper plant-based organic nutrition, exercise, clean air, and structural yoga asanas.'
      },
      {
        name: 'Pranamaya Kosha',
        sanskritName: 'प्राणमय कोश',
        meaning: 'The Vital Energy (Breath Sheath)',
        details: 'The biological electromagnetic system that powers cellular functioning. Governed directly by respiration, heart rate, and pranic currents.'
      },
      {
        name: 'Manomaya Kosha',
        sanskritName: 'मनोमय कोश',
        meaning: 'The Mental Field (Mind/Emotion)',
        details: 'The receptacle of thoughts, sensory receipts, instincts, and immediate desires. Highly reactive. Calmed and nourished by Mantra chanting (Jaap) and sound therapy.'
      },
      {
        name: 'Vijnanamaya Kosha',
        sanskritName: 'विज्ञानमय कोश',
        meaning: 'The Intellectual Sheath (Wisdom/Discernment)',
        details: 'The higher subconscious wisdom, discriminative logic ("Buddhi"), and pure intuitive knowing. Cultivated by self-study, Vedic concepts meditation, and self-observation.'
      },
      {
        name: 'Anandamaya Kosha',
        sanskritName: 'आनन्दमय कोश',
        meaning: 'The Ecstatic/Bliss Sheath',
        details: 'The deepest layer closest to our spiritual core. Pure non-causal joy, complete alignment, and peace. Touched in brief moments of deep samadhi or effortless silent consciousness.'
      }
    ],
    practicalApplication: 'Chanting acts directly on the Manomaya and Pranamaya levels, releasing mental knots and opening up intellectual channels to touch the Anandamaya layer of absolute bliss.'
  }
];
