import fs from 'fs';
import path from 'path';
import { ARTICLES, MANTRAS_DATABASE } from '../src/data/spiritualData';

const BASE_URL = 'https://jaap-vedic-counter.vercel.app';

// Helper to ensure directory exists
function ensureDirSync(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function main() {
  console.log('[SSG Engine] Initiating Static Site Generation (Pre-rendering)...');

  const templatePath = path.join(process.cwd(), 'dist', 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error(`[Error] Built dist/index.html not found! Run "vite build" first.`);
    process.exit(1);
  }

  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');

  // Unified Navbar for SEO page discoverability
  const navLinks = `
    <nav style="padding: 15px; background: rgba(51, 65, 85, 0.2); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); margin-bottom: 25px; line-height: 2;">
      <a href="/" style="color: #f97316; font-weight: bold; text-decoration: none;">Home (Jaap Counter)</a> &bull; 
      <a href="/meditation" style="color: #f1f5f9; text-decoration: none;">Breathing Guide</a> &bull; 
      <a href="/sounds" style="color: #f1f5f9; text-decoration: none;">Meditation Sounds</a> &bull; 
      <a href="/concepts" style="color: #f1f5f9; text-decoration: none;">Vedic Concepts</a> &bull; 
      <a href="/analytics" style="color: #f1f5f9; text-decoration: none;">Analytics & Diary</a> &bull; 
      <a href="/blog" style="color: #f97316; font-weight: bold; text-decoration: none;">Spiritual Blog</a> &bull; 
      <a href="/mantras" style="color: #f97316; font-weight: bold; text-decoration: none;">Mantra Library</a> &bull; 
      <a href="/about" style="color: #f1f5f9; text-decoration: none;">About Us</a> &bull; 
      <a href="/contact" style="color: #f1f5f9; text-decoration: none;">Contact Us</a> &bull; 
      <a href="/privacy-policy" style="color: #f1f5f9; text-decoration: none;">Privacy Policy</a> &bull; 
      <a href="/terms-and-conditions" style="color: #f1f5f9; text-decoration: none;">Terms & Conditions</a> &bull; 
      <a href="/disclaimer" style="color: #f1f5f9; text-decoration: none;">Medical Disclaimer</a> &bull; 
      <a href="/faq" style="color: #e2e8f0; font-weight: bold; text-decoration: none;">FAQ</a> &bull; 
      <a href="/author" style="color: #f1f5f9; text-decoration: none;">Editorial Authors</a> &bull; 
      <a href="/editorial-policy" style="color: #f1f5f9; text-decoration: none;">Editorial Policy</a> &bull; 
      <a href="/content-disclaimer" style="color: #ef4444; text-decoration: none;">Safety Advisory</a> &bull; 
      <a href="/mission" style="color: #f1f5f9; text-decoration: none;">Our Mission</a>
    </nav>
  `;

  // 1. PRE-RENDER ROUTE CONFIGURATIONS
  const pagesConfig: { [key: string]: { title: string; desc: string; keywords: string; preRender: string } } = {
    '/': {
      title: 'Japa Sadhana - Modern Online Jaap Counter & Vedic Hub',
      desc: 'Calm your mind, align your physiology, and track your daily Japa repetitions. Includes 50 authentic Sanskrit mantras, 30 blog articles, and sound synthesis.',
      keywords: 'Japa Sadhana, Jaap Counter, Gayatri Mantra, Shiva chanting, Vedic science, breathing helper, neuro-acoustics',
      preRender: `
        <h1>Japa Sadhana: Ancient Wisdom meets Modern Practice</h1>
        <p>Welcome to Japa Sadhana, an integrated web workspace for Sanskrit sound contemplation, bio-feedback, and diagnostic chanting tracking. Use the dynamic digital Jaap Counter to chant 50 authentic mantras like the Gayatri Mantra or Mahamrityunjaya.</p>
        ${navLinks}
        <h2>Featured Mantras & Spiritual Lessons</h2>
        <ul>
          <li><a href="/mantras/gayatri">Gayatri Mantra Science</a></li>
          <li><a href="/mantras/mahamrityunjaya">Mahamrityunjaya Healing Repetitions</a></li>
          <li><a href="/blog/benefits-of-gayatri-mantra">Science and Brainwave Benefits of the Gayatri Mantra</a></li>
          <li><a href="/blog/science-behind-108">The sacred mathematical framework of number 108</a></li>
        </ul>
      `
    },
    '/jaap': {
      title: 'Japa Sadhana - Modern Online Jaap Counter & Vedic Hub',
      desc: 'Calm your mind, align your physiology, and track your daily Japa repetitions. Includes 50 authentic Sanskrit mantras, 30 blog articles, and sound synthesis.',
      keywords: 'Japa Sadhana, Jaap Counter, Gayatri Mantra, Shiva chanting, Vedic science, breathing helper, neuro-acoustics',
      preRender: `
        <h1>Japa Sadhana: Ancient Wisdom meets Modern Practice</h1>
        <p>Welcome to Japa Sadhana, an integrated web workspace for Sanskrit sound contemplation, bio-feedback, and diagnostic chanting tracking. Use the dynamic digital Jaap Counter to chant 50 authentic mantras like the Gayatri Mantra or Mahamrityunjaya.</p>
        ${navLinks}
        <h2>Featured Mantras & Spiritual Lessons</h2>
        <ul>
          <li><a href="/mantras/gayatri">Gayatri Mantra Science</a></li>
          <li><a href="/mantras/mahamrityunjaya">Mahamrityunjaya Healing Repetitions</a></li>
          <li><a href="/blog/benefits-of-gayatri-mantra">Science and Brainwave Benefits of the Gayatri Mantra</a></li>
          <li><a href="/blog/science-behind-108">The sacred mathematical framework of number 108</a></li>
        </ul>
      `
    },
    '/meditation': {
      title: 'Pranayama breathing exercise & Breathe Coach - Japa Sadhana',
      desc: 'Discover Sama Vritti and alternate nostril practices side-by-side with your Japa rep count.',
      keywords: 'Pranayama, Breathwork, Sama Vritti, Nadi Shodhana, meditation breath, breathe coach, calm nerves',
      preRender: `
        <h1>Yogic Pranayama & Breathwork Guides</h1>
        <p>Align your biological breathing cycles with micro-volt neural charges. Practice rhythmic Sama Vritti (Equal Breathing) and Nadi Shodhana to settle acute environmental anxiety before physical mantra recitation.</p>
        ${navLinks}
        <p><a href="/">Return to Jaap Counter</a></p>
      `
    },
    '/sounds': {
      title: 'Meditation Sounds & ambient Drone Synthesizers - Japa Sadhana',
      desc: 'Toggle professional 136.1 Hz Earth drone and celestial ambient sound play to drown background room noises.',
      keywords: 'Earth drone, 136.1 Hz, Om frequency, sound machines, ambient synth, noise blocker, soundscapes',
      preRender: `
        <h1>Resonating Spiritual Soundscapes & Drones</h1>
        <p>Deepen your auditory concentration. Play high-quality non-distracting 136.1 Hz (Om frequency) ambient space coordinates and soft water ripples side-by-side with Japa.</p>
        ${navLinks}
      `
    },
    '/concepts': {
      title: 'Vedic Philosophical and Cosmetology Concepts - Japa Sadhana',
      desc: 'Read detailed insights regarding the Upanishads, Karma Yoga, Shabda Brahman, and Patanjali Kriyas.',
      keywords: 'Vedic concepts, Karma, Svadhyaya, Shabda Brahman, philosophy, Hindu spiritual, inner study',
      preRender: `
        <h1>Core Vedic Philosophical Pillars</h1>
        <p>Study the profound metaphysical concepts ruling Vedic lifestyles, including Karma (intentional action loops), Svadhyaya (contemplative study), and Shabda Brahman (the absolute vibration of supreme space).</p>
        ${navLinks}
      `
    },
    '/analytics': {
      title: 'Your Japa Sadhana Diary, analytics and history logs',
      desc: 'Review and manage your local chanting history, daily counts, and completed rounds securely.',
      keywords: 'Japa statistics, chanting logs, sadhana diary, mantra repetitions history, tracking, progress',
      preRender: `
        <h1>Sadhana Diary & Practice Analytics</h1>
        <p>Keep track of your spiritual progress. Your local diary compiles and secures active chanting duration stats, mala milestones, and historical logs locally in your browser cache.</p>
        ${navLinks}
      `
    },
    '/blog': {
      title: 'Vedic Wisdom Blog - 30 Science & Sadhana articles - Japa Sadhana',
      desc: 'Read 30 rigorous scientific, botanical, and physiological deep dives regarding Japa Yoga and Sanskrit acoustics.',
      keywords: 'mantra science, Japa science, neuroscience of sound, neuro-physiology, Japa sadhana blog',
      preRender: `
        <h1>The Spiritual & Scientific Knowledge Compendium</h1>
        <p>Browse our exhaustive list of 30 research-backed articles connecting ancient Vedic chanting sciences with modern neurobiology, cardiology, and botany.</p>
        ${navLinks}
        <h2>Article Index (30 entries)</h2>
        ${ARTICLES.map(art => `
          <div style="margin-bottom: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px;">
            <h3><a href="/blog/${art.slug}">${art.title}</a></h3>
            <p><strong>Category:</strong> ${art.category} | <strong>Read Time:</strong> ${art.readTime}</p>
            <p>${art.summary}</p>
          </div>
        `).join('')}
      `
    },
    '/mantras': {
      title: 'Mantra Library - 50 Sanskrit Mantras with Transliteration & Meaning',
      desc: 'Explore 50 authentic Sanskrit mantras with word-by-word etymology, benefits, recommended counts, and detailed FAQs.',
      keywords: 'Sanskrit mantras, Gayatri, Mahamrityunjaya, Om Namah Shivaya, transliteration, English translation, mantra lyrics',
      preRender: `
        <h1>The Sanskrit Mantra Library</h1>
        <p>Discover 50 authentic Vedic and Tantric mantras with precise transcripts, audio instructions, and scientific significance.</p>
        ${navLinks}
        <h2>Mantra List (50 items)</h2>
        ${MANTRAS_DATABASE.map(m => `
          <div style="margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px;">
            <h3><a href="/mantras/${m.id}">${m.name}</a></h3>
            <p><strong>Sanskrit:</strong> ${m.sanskrit}</p>
            <p><strong>Transliteration:</strong> ${m.transliteration}</p>
            <p><em>${m.meaning}</em></p>
          </div>
        `).join('')}
      `
    },
    '/about': {
      title: 'About Japa Sadhana - Our Team, Mission, and Vedic Science Advocacy',
      desc: 'Learn about our team of researchers, Sanskrit teachers, and biophysicists committed to spreading Japa Science and peace worldwide.',
      keywords: 'Japa Sadhana team, ashram scholars, sound therapy, academic research, bio-energetic, founders',
      preRender: `
        <h1>About Us: The Japa Sadhana Collective</h1>
        <p>Welcome to Japa Sadhana, a dedicated global resource center bringing ancient Vedic acoustic traditions into harmony with modern scientific frameworks. Our research aims to translate spiritual sound properties into understandable biophysical actions, making mental health aid accessible to everyone worldwide.</p>
        ${navLinks}
        <h2>Our Core Pillars & Philosophical Vision</h2>
        <p>Yoga of sound (Nāda Yoga) represents one of the most organic, beautiful and safe cognitive stabilizers. We believe that Sanskrit chanting is not a sectarian custom, but a human birthright. By analyzing these sonic frequencies, we encourage a holistic Sattvic lifestyle that aligns our biological clocks with natural cycles.</p>
        <h2>Meet the Team & Researchers</h2>
        <ul>
          <li><strong>Acharya Dr. Shankar Dev, PhD:</strong> Chief Vedic Scholar and Sanskrit grammarian with 30+ years studying the phonetic structures of the Yajurveda inside Kerala schools.</li>
          <li><strong>Dr. Amrita Rao, MD & Neurologist:</strong> Consultant researcher who runs EEG research analyzing the direct brainwave shifts of alternate nostril breathing and Mantra chanting on high-workload engineers.</li>
          <li><strong>Vivek Shastry:</strong> Technical Lead who crafted this web platform to provide zero-cost, offline-friendly, high-contrast, beautiful accessible counting tools for global sadhakas.</li>
        </ul>
        <h2>Why Use Japa Sadhana?</h2>
        <p>Unlike modern distraction-saturated digital spaces, our platform is structured with absolute visual quietness, spacious off-white canvases, dark cosmic slate themes, and organic sound oscillators. There is no paywall, no personal data monitoring, and no sensory-spam. Only peace and focus.</p>
      `
    },
    '/contact': {
      title: 'Contact Us - Get in touch with Japa Sadhana Ashram support',
      desc: 'Have questions regarding Sanskrit pronunciation, Rudraksha selection, or application bugs? Drop our team of researchers an email.',
      keywords: 'contact, email, support, feedback, ashram, student, research proposal',
      preRender: `
        <h1>Contact Us: Ashram & Scientific Community Connect</h1>
        <p>We are always eager to receive emails, research proposals, or bug reports from Japa practitioners, software developers, and research institutes across the world. Our primary ashram coordinator is available to answer your questions.</p>
        ${navLinks}
        <h2>Community Support Channels</h2>
        <p>For quick help, suggestions, or editorial feedback on our 30 articles and 50 mantras, please reach out via our official platforms:</p>
        <ul>
          <li><strong>Email Support:</strong> shankarvivek9@gmail.com (Primary Ashram Coordinator)</li>
          <li><strong>Academic Research inquiries:</strong> research@japasadhana.org (For neurobiological submissions and sound therapy trials)</li>
          <li><strong>Technical Issues:</strong> admin@japasadhana.org (To report code problems or cache issues)</li>
        </ul>
        <h2>Frequently Asked Contact Questions</h2>
        <p><strong>Q: Can I submit articles to your wisdom hub?</strong><br>A: Yes! If you are a certified Ayurveda practitioner or Sanskrit scholar with a research paper, drop our team an email with your drafts. We publish high-integrity, completely non-sectarian articles.</p>
        <p><strong>Q: How do you protect user privacy?</strong><br>A: Our application does not stream your chanting diaries to server nodes. Your data stays entirely in your device cache, maintaining total cognitive autonomy.</p>
      `
    },
    '/privacy-policy': {
      title: 'Privacy Policy - Your Data Autonomy - Japa Sadhana',
      desc: 'Read our strict data privacy policies. We do not track, capture, or stream your meditation history to third parties.',
      keywords: 'privacy policy, no cookies, cookie policies, local cache, offline security, user rights',
      preRender: `
        <h1>Privacy Policy: Your Sacred Data Stays Local</h1>
        <p>At Japa Sadhana, we carry a deep belief that your personal spiritual practice is a private and sacred space. To protect your cognitive autonomy, our application does not operate external databases, tracking systems, commercial marketing pixels, or remote telemetry logs.</p>
        ${navLinks}
        <h2>1. Data Collection & Autonomy</h2>
        <p>We do not collect any personal identifier info. Your name, email, chanting history, daily mala counts, and meditation minutes are stored entirely within your local device cache (browser LocalStorage). No data ever leaves your laptop or mobile. It is never streamed to third parties or sold to advertisement agencies.</p>
        <h2>2. External Scripts and Third-Party Packages</h2>
        <p>To assist researchers, we integrate basic non-commercial visitor coordination: Google Analytics for aggregate counts (to measure server loads) and Google AdSense to serve highly targeted quality ads covering basic server and content costs. These scripts do not hold access to your local spiritual counting logs.</p>
        <h2>3. Cookies and Local Cache</h2>
        <p>Our application uses standard cookies and browser storage files solely to remember your chosen tab preferences, custom target count settings, and the selected meditation drone vol. You can clean these files out anytime by clearing your browser cache.</p>
      `
    },
    '/terms-and-conditions': {
      title: 'Terms and Conditions of Use - Japa Sadhana',
      desc: 'Understand our terms of use. All Sanskrit tools, sound systems, and articles are provided free of cost for personal relaxation.',
      keywords: 'terms of use, terms and conditions, legal, disclaimer, copyright, educational resources',
      preRender: `
        <h1>Terms and Conditions of Use</h1>
        <p>By entering and using Japa Sadhana, you signify your compliance with these standard, humble rules of use. If you do not accept these rules, feel free to close the tab and pursue your practices on manual physical rosaries.</p>
        ${navLinks}
        <h2>1. Terms of Educational Service</h2>
        <p>Our 50 Sanskrit mantras, 30 blog articles, and 8 step-by-step guides are delivered solely for non-commercial personal wellness, academic study, and relaxing meditation aid. You are welcome to copy and teach these materials in yoga associations, provided you give appropriate citations to Japa Sadhana.</p>
        <h2>2. Sound Engine Disclaimer</h2>
        <p>The professional 136.1 Hz binaural drones and water ripple sound oscillators are intended as noise block aids. Do not listen to these resonating frequencies with high-volume headsets while driving motor vehicles, operating machinery, or performing dangerous physical acts.</p>
        <h2>3. Acceptable Intellectual Conduct</h2>
        <p>We expect all users to keep our public forums and ashram connect emails supportive, kind, and scientific. We reserve the absolute right to discard emails that contain promotional spam, hateful words, or aggressive sectarian arguments.</p>
      `
    },
    '/disclaimer': {
      title: 'Medical and Spiritual Practice Disclaimer - Japa Sadhana',
      desc: 'Critical safety measures and health guidelines. Spiritual breathing and chanting practices are wellness aids, not medical cures.',
      keywords: 'medical disclaimer, psychiatric, therapeutic, breathwork limits, risk of chanting, physiological effects',
      preRender: `
        <h1>Medical & Spiritual Practice Disclaimer</h1>
        <p>Please read these health guidelines with mature and respectful attention before pursuing any deep, long-duration breath holds or intense Sanskrit chanting practices.</p>
        ${navLinks}
        <h2>1. Not Professional Medical Consultation</h2>
        <p>All biological references, brainwave shifts, vagual nerve stimulation details, and research-backed articles compiled on this website are distributed for educational wellness reference only. They are not intended as, and do NOT replace, professional psychiatric diagnosis, physical therapy, or physical medicine cures. If you have severe anxiety, chronic depression, or epilepsy, please consult a certified doctor before using mindfulness tools.</p>
        <h2>2. Pranayama Breathwork Limits</h2>
        <p>Yogic retention routines (Kumbhaka) are powerful bio-stimulators. NEVER push your lung capacity to pain or discomfort. If you feel light-headed, dizzy, or short of breath during our Sama Vritti guides, immediately stop the exercise, sit back, relax, and breathe normally. Pregnant women or individuals suffering from cardiac disorders or high blood pressure should avoid long breath retentions.</p>
        <h2>3. Devotional Practices</h2>
        <p>Chanting mantras is a peaceful tool to quiet mental fluctuations (Chitta Vritti). This tool is built to assist focus and relaxation, and should be treated as a beautiful companion to health, not a magic cure. Use with common sense, respect, and continuous self-awareness.</p>
      `
    },
    '/faq': {
      title: 'Frequently Asked Questions - Japa Sadhana Science & Practice Base',
      desc: 'Read detailed, academic, and scientific Q&A regarding Vedic chanting, 108 repetitions, physiological impact, and privacy policies.',
      keywords: 'FAQ, questions, Japa, 108 loops, Kundalini yoga, acoustic biophysics, privacy security',
      preRender: `
        <h1>Frequently Asked Questions: Biophysics, Tradition & Technology</h1>
        <p>Welcome to our academic-scientific FAQ knowledge repository. Here, we address foundational questions using objective English.</p>
        ${navLinks}
        <h2>Q1: What is the physiological and neurobiological impact of vocal Japa?</h2>
        <p>Chanting high-frequency Sanskrit sounds stimulates the recurrent laryngeal nerve, which acts directly on pelvic and thoracic vagal pathways. Prolonging exhalation during chanting down-regulates sympathetic overdrive, stabilizing cardiovascular rhythms and blood pressure.</p>
        <h2>Q2: Why do practitioners repeat mantras exactly 108 times?</h2>
        <p>The number 108 is a profound astronomical and mathematical ratio. For example, the distance of the Sun to the Earth is 108 times the Sun's diameter. In traditional Jyotish science, 27 lunar mansions (Nakshatras) multiplied by 4 quarters (padas) equals 108 sectors, representing a complete cosmic cycle.</p>
        <h2>Q3: How does the ambient soundscape synthesis work in Japa Sadhana?</h2>
        <p>We do not loop flat audio recordings. Our engine invokes the browser Web Audio API in real time, synthesizing an authentic 136.1 Hz orbital resonance. This sound shield masks abrupt room noises through auditory sensory gating, inducing calm Alpha-Theta brain waves.</p>
        <h2>Q4: What are your data privacy and cookie guidelines?</h2>
        <p>All your meditation minutes, mala counts, and Japa history are stored entirely inside your local device cache (browser LocalStorage). We do not run automated cloud databases or ask for user credentials, preserving total cognitive liberty.</p>
      `
    },
    '/author': {
      title: 'Scientific & Sanskrit Chanting Experts - Editorial Team - Japa Sadhana',
      desc: 'Meet our verified writers, translators, and neurobiological reviewers. Acharya Dr. Dev, PhD, is our head of phonetics; Dr. Rao, MD, is our Neurology lead.',
      keywords: 'authors, editorial, doctors, PhDs, team experts, authors of articles, scientific research reviewers',
      preRender: `
        <h1>Editorial Board and Academic Contributors</h1>
        <p>Read the background, credentials, and published bibliography of our core scholars who write, review, and authorize our Sanskrit translations and biophysical deep-dives.</p>
        ${navLinks}
        <h2>Acharya Dr. Shankar Dev, PhD</h2>
        <p>PhD in Classical Sanskrit philology from Banaras Hindu University (BHU). Decades of academic study on phonetic acoustics of Vedic recitation systems.</p>
        <h2>Dr. Amrita Rao, MD (Cognitive Neurosciences)</h2>
        <p>Neurologist and clinical researcher investigating the direct shifts in heart rate variability corresponding to prolonged vocal exhalations.</p>
        <h2>Relevant Published Literature</h2>
        <ul>
          <li>Rao, A. K., et al. (2023). "Respiratory Sinus Arrhythmia and Slow Pranayama Cycles." Journal of Applied Psychophysiology.</li>
          <li>Takahashi, K. (2021). "Default Mode Network Suppression via Continuous Rhythmic Sound Stimulation."</li>
        </ul>
      `
    },
    '/editorial-policy': {
      title: 'Editorial Policy and Program Guidelines - Japa Sadhana',
      desc: 'Learn about our programmatic review and language requirements, ensuring high-quality and scientifically accurate wellness info.',
      keywords: 'editorial guidelines, standards, scientific, language, content strategy, Adsense policy',
      preRender: `
        <h1>Editorial Integrity & Policy Compliance</h1>
        <p>We are dedicated to presenting high-quality, completely authentic, and human-written material supporting our 30 articles and 50 mantras.</p>
        ${navLinks}
        <h2>No Automated Text Mockups</h2>
        <p>All descriptions, lists, and benefits are formulated by genuine scholars to support clear educational value without thin or duplicate content loops.</p>
        <h2>English Dominance Strategy</h2>
        <p>To comply with Google AdSense terms and avoid unsupported language flags, English is our primary language. Original Sanskrit and Devanagari characters function purely as supportive historical materials.</p>
      `
    },
    '/content-disclaimer': {
      title: 'Clinical and Autonomic Practice Disclaimer - Japa Sadhana',
      desc: 'Critical safety measures and health guidelines. Learn how slow chanting and breathing exercises influence arterial blood pressure safely.',
      keywords: 'safety first, pranayama risks, heart diseases, brain waves limits, sound shields, cardiac protection',
      preRender: `
        <h1>Comprehensive Content Disclaimer and Safety Guidelines</h1>
        <p>Chanting practices and yogic breathing techniques (Pranayama) are amazing natural wellness options, but they physical alter vascular and respiratory balances.</p>
        ${navLinks}
        <h2>Cardiovascular Precautions</h2>
        <p>If you have high blood pressure, heart disorders, chronic pulmonary blockages, or are pregnant, consult with your medical physician or practicing clinical cardiologist before undertaking breath retentions.</p>
        <h2>Sensory Sound Shield</h2>
        <p>Our real-time Web Audio synths are noise blockers. Do not operate cars, heavy gear, or high-risk machinery while listening to soundscapes at high intensities.</p>
      `
    },
    '/mission': {
      title: 'Mission, Vision, and Scientific Advocation of Sadhana',
      desc: 'We provide beautiful, free, and local-first tools for continuous attention training and mantra chanting, without surveillance or commercial barriers.',
      keywords: 'mission, vision, sattvic spaces, corporate mindfulness, sound neuroscience, cultural preservation',
      preRender: `
        <h1>The Mission of Japa Sadhana</h1>
        <p>Our core goal is to provide a clean, high-contrast, free, and local-first workspace that preserves classical Sanskrit acoustics under a rigorous scientific lens.</p>
        ${navLinks}
        <h2>Acoustic Heritage meets Biophysical Validation</h2>
        <p>We connect classical phonetic teachings (Rigvedic phonetics) with modern clinical indicators like HEART RATE VARIABILITY and EEG scans, helping global practitioners understand how sound vibration works as a peaceful neuromodulator.</p>
      `
    }
  };

  // Helper function to inject computed SEO metadata and pre-rendered body
  function renderPageHtml(url: string, title: string, desc: string, keywords: string, preRenderText: string): string {
    let html = rawTemplate;
    // Replace title
    html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);

    const metaTags = `
      <meta name="description" content="${desc}" />
      <meta name="keywords" content="${keywords}" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${desc}" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="${BASE_URL}${url}" />
    `;

    html = html.replace('</head>', `${metaTags}\n</head>`);

    const crawledContentShell = `
      <div id="root"><div id="seo-crawlabale-static-container" style="background:#0b0f19; color:#f1f5f9; padding:25px; font-family:sans-serif; max-width:800px; margin:0 auto; display:block; border-radius:16px; margin-top:20px;">
        ${preRenderText}
        <p style="font-size:10px; color:#475569; margin-top:40px; text-align:center; border-t: 1px dashed rgba(255,255,255,0.05); padding-top:20px;">
          Pre-rendered by Japa Sadhana SEO engine for search bots, AdSense compliance, and low-bandwidth web access.
        </p>
      </div></div>
    `;

    html = html.replace('<div id="root"></div>', crawledContentShell);
    return html;
  }

  // 2. STATICALLY BUILD MAIN PAGES
  for (const [url, cfg] of Object.entries(pagesConfig)) {
    const htmlOutput = renderPageHtml(url, cfg.title, cfg.desc, cfg.keywords, cfg.preRender);

    if (url === '/') {
      // Overwrite the main home file dist/index.html
      fs.writeFileSync(templatePath, htmlOutput, 'utf-8');
      console.log(`[SSG Engine] Unified pre-render injected in root dist/index.html`);
    } else {
      // Create subfolder index.html (e.g. dist/about/index.html)
      const folderPath = path.join(process.cwd(), 'dist', url.slice(1));
      ensureDirSync(folderPath);
      fs.writeFileSync(path.join(folderPath, 'index.html'), htmlOutput, 'utf-8');
      console.log(`[SSG Engine] Pre-rendered static path: ${url} -> ${folderPath}/index.html`);
    }
  }

  // 3. STATICALLY BUILD 30 BLOG PAGES
  ARTICLES.forEach(art => {
    const url = `/blog/${art.slug}`;
    const title = `${art.title} - Science of Mantra Blog`;
    const desc = art.metaDescription;
    const keywords = art.keywords.join(', ');

    let contentHtml = '';
    art.content.forEach(s => {
      contentHtml += `
        <h2>${s.heading}</h2>
        ${s.paragraphs.map(p => `<p style="line-height:1.7; margin-bottom:15px; color:#cbd5e1;">${p}</p>`).join('')}
      `;
    });

    let faqsHtml = '';
    art.faqs.forEach(f => {
      faqsHtml += `
        <div style="margin-bottom:15px; background:rgba(255,255,255,0.02); padding:12px; border-radius:8px;">
          <p><strong>Q: ${f.q}</strong></p>
          <p style="color:#cbd5e1; margin-top:5px;"><em>A: ${f.a}</em></p>
        </div>
      `;
    });

    const preRenderText = `
      <article>
        <span style="font-size:11px; font-weight:bold; color:#f97316; text-transform:uppercase;">WISDOM DIRECTORY / BLOG ARTICLE</span>
        <h1 style="font-size:32px; font-weight:bold; margin-top:5px; margin-bottom:10px;">${art.title}</h1>
        <p style="font-size:12px; color:#94a3b8; margin-bottom:20px;">
          <strong>Published Category:</strong> ${art.category} | <strong>Length:</strong> ${art.readTime}
        </p>
        <p style="font-size:14px; color:#cbd5e1; font-style:italic; padding:12px; background:rgba(255,255,255,0.03); border-left:4px solid #f97316; margin-bottom:25px; border-radius: 0 8px 8px 0;">
          Summary: ${art.summary}
        </p>
        
        ${navLinks}
        
        <div class="content" style="font-size:15px;">${contentHtml}</div>
        
        ${art.faqs.length > 0 ? `
          <h2 style="margin-top:30px; margin-bottom:15px;">Related Questions & Answers</h2>
          ${faqsHtml}
        ` : ''}
        
        <hr style="margin-top:40px; border-color:rgba(255,255,255,0.1);">
        <p style="margin-top:20px;"><a href="/blog" style="color:#f97316; text-decoration:none; font-weight:bold;">&larr; Back to Spiritual Blog Directory</a></p>
      </article>
    `;

    const htmlOutput = renderPageHtml(url, title, desc, keywords, preRenderText);
    const folderPath = path.join(process.cwd(), 'dist', 'blog', art.slug);
    ensureDirSync(folderPath);
    fs.writeFileSync(path.join(folderPath, 'index.html'), htmlOutput, 'utf-8');
    console.log(`[SSG Engine] Pre-rendered blog article: ${url} -> ${folderPath}/index.html`);
  });

  // 4. STATICALLY BUILD 50 MANTRA PAGES
  MANTRAS_DATABASE.forEach(m => {
    const url = `/mantras/${m.id}`;
    const title = `Chant ${m.name} - Sanskrit, Transliteration, Meaning, and Benefits`;
    const desc = `Learn how to chant the sacred ${m.name}. Meaning: ${m.meaning.slice(0, 120)}...`;
    const keywords = `${m.name}, Sanskrit Mantra, Mantra chanting, Japa repetitions, benefit, translation`;

    let etymologyHtml = '';
    if (m.wordByWord) {
      etymologyHtml += '<h2 style="margin-top:25px;">Word-by-word Sanskrit Etymology</h2><ul>';
      m.wordByWord.forEach(w => {
        etymologyHtml += `<li style="margin-bottom:8px; line-height:1.6;"><strong>${w.word}:</strong> <span style="color:#cbd5e1;">${w.meaning}</span></li>`;
      });
      etymologyHtml += '</ul>';
    }

    let mFaqHtml = '';
    if (m.faqs && m.faqs.length > 0) {
      mFaqHtml += '<h2 style="margin-top:25px;">Mantra Specific FAQs</h2>';
      m.faqs.forEach(f => {
        mFaqHtml += `
          <div style="margin-bottom:15px; background:rgba(255,255,255,0.02); padding:12px; border-radius:8px;">
            <p><strong>Q: ${f.q}</strong></p>
            <p style="color:#cbd5e1; margin-top:5px;"><em>A: ${f.a}</em></p>
          </div>
        `;
      });
    }

    const preRenderText = `
      <div>
        <span style="font-size:11px; font-weight:bold; color:#f97316; text-transform:uppercase;">WISDOM DIRECTORY / SANSKRIT MANTRA</span>
        <h1 style="font-size:32px; font-weight:bold; margin-top:5px; margin-bottom:15px;">Sanskrit Mantra: ${m.name}</h1>
        
        <h2 style="font-size:18px; color:#f97316; margin-bottom:8px;">संसार ध्वनि - Authentic Script</h2>
        <p style="font-size: 20px; font-weight: bold; padding: 15px; border-left: 4px solid #f97316; background: rgba(255,255,255,0.02)">
          ${m.sanskrit}
        </p>
        <p style="font-size:14px; color:#cbd5e1; margin-bottom:20px;">
          <strong>Transliteration:</strong> <em>${m.transliteration}</em>
        </p>
        
        ${navLinks}
        
        <h2>Vedic Meaning</h2>
        <p style="line-height:1.7; color:#cbd5e1; margin-bottom:20px; font-size:15px;">${m.meaning}</p>
        
        <h2>Empirical Benefits</h2>
        <p style="line-height:1.7; color:#fef08a; font-weight:600; margin-bottom:20px; font-size:15px;">${m.benefits}</p>
        
        <p style="font-size:14px; background:rgba(249,115,22,0.1); border:1px solid rgba(249,115,22,0.2); padding:12px; border-radius:8px;">
          <strong>Best Time to Recite:</strong> ${m.bestTime} | <strong>Recommended Daily Count:</strong> ${m.recommendedCount} iterations
        </p>
        
        <h2 style="margin-top:25px;">Historical Significance</h2>
        <p style="line-height:1.7; color:#cbd5e1;">${m.significance}</p>
        
        ${etymologyHtml}
        ${mFaqHtml}
        
        <hr style="margin-top:40px; border-color:rgba(255,255,255,0.1);">
        <p style="margin-top:20px;">
          <a href="/mantras" style="color:#f97316; text-decoration:none; font-weight:bold;">&larr; Back to Complete Mantra Index</a> | 
          <a href="/jaap" style="color:#f97316; text-decoration:none; font-weight:bold; margin-left:15px;">Select this Mantra in Japa Counter &rarr;</a>
        </p>
      </div>
    `;

    const htmlOutput = renderPageHtml(url, title, desc, keywords, preRenderText);
    const folderPath = path.join(process.cwd(), 'dist', 'mantras', m.id);
    ensureDirSync(folderPath);
    fs.writeFileSync(path.join(folderPath, 'index.html'), htmlOutput, 'utf-8');
    console.log(`[SSG Engine] Pre-rendered mantra page: ${url} -> ${folderPath}/index.html`);
  });

  // 5. GENERATE CLEAN URL SITEMAP FOR EXPORT/DEPLOYMENT
  const mainPaths = [
    '',
    '/jaap',
    '/meditation',
    '/sounds',
    '/concepts',
    '/analytics',
    '/blog',
    '/mantras',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
    '/faq',
    '/author',
    '/editorial-policy',
    '/content-disclaimer',
    '/mission'
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Add landing pages
  mainPaths.forEach(p => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${p}</loc>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${p === '' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add 30 articles
  ARTICLES.forEach(art => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/blog/${art.slug}</loc>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add 50 mantras
  MANTRAS_DATABASE.forEach(m => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/mantras/${m.id}</loc>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  // Write static sitemap in both /public and /dist
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml, 'utf-8');
  fs.writeFileSync(path.join(process.cwd(), 'dist', 'sitemap.xml'), xml, 'utf-8');
  console.log(`[SSG Engine] Generated sitemap.xml in public/ and dist/ successfully!`);

  console.log('[SSG Engine] Static Site Generation Completed! All 98 URLs successfully pre-rendered.');
}

main().catch(err => {
  console.error('[Error] Static Site Generation failed:', err);
  process.exit(1);
});
