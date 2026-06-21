/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { ARTICLES, MANTRAS_DATABASE, GUIDES } from './src/data/spiritualData.js';

async function startServer() {
  const app = express();
  const PORT = 3000;
  const isProd = process.env.NODE_ENV === 'production';

  // 1. DYNAMIC SITEMAP GENERATION
  app.get('/sitemap.xml', (req, res) => {
    const protocol = req.secure || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http';
    const host = req.headers.host || 'localhost:3000';
    const baseUrl = `${protocol}://${host}`;

    // Main Pages
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
      '/disclaimer'
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add main pages
    mainPaths.forEach(p => {
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}${p}</loc>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>${p === '' ? '1.0' : '0.8'}</priority>\n`;
      xml += `  </url>\n`;
    });

    // Add 30 articles
    ARTICLES.forEach(art => {
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}/blog/${art.slug}</loc>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.7</priority>\n`;
      xml += `  </url>\n`;
    });

    // Add 50 mantras
    MANTRAS_DATABASE.forEach(m => {
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}/mantras/${m.id}</loc>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.status(200).send(xml);
  });

  // 2. ROBOTS.TXT
  app.get('/robots.txt', (req, res) => {
    const protocol = req.secure || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http';
    const host = req.headers.host || 'localhost:3000';
    const baseUrl = `${protocol}://${host}`;

    let txt = `User-agent: *\n`;
    txt += `Allow: /\n`;
    txt += `Sitemap: ${baseUrl}/sitemap.xml\n`;

    res.header('Content-Type', 'text/plain');
    res.status(200).send(txt);
  });

  // Serve static public folder if it exists
  const publicDir = path.join(process.cwd(), 'public');
  if (fs.existsSync(publicDir)) {
    app.use(express.static(publicDir, { index: false }));
  }

  // 3. VITE DISPATCHER SETUP FOR DEVELOPMENT
  let vite: any = null;
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), 'dist'), { index: false }));
  }

  // 4. SEO PRE-RENDERER & MAIN FALLBACK ROUTE
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl;
    
    // Ignore static assets inside code
    if (url.includes('.') && !url.startsWith('/sitemap.xml')) {
      return next();
    }

    try {
      // Load raw index template
      let templatePath = isProd 
        ? path.join(process.cwd(), 'dist', 'index.html')
        : path.join(process.cwd(), 'index.html');
      
      if (!fs.existsSync(templatePath)) {
        if (isProd) {
          return res.status(500).send('Production index.html missing. Run npm run build first.');
        } else {
          templatePath = path.join(process.cwd(), 'index.html');
        }
      }

      let html = fs.readFileSync(templatePath, 'utf-8');

      // Setup Dev Vite compilation
      if (!isProd && vite) {
        html = await vite.transformIndexHtml(url, html);
      }

      // Default SEO fields
      let statusCode = 200;
      let seoTitle = 'Japa Sadhana - Modern Jaap Counter & Vedic Knowledge Platform';
      let seoDesc = 'Calm your mind, align your physiology, and track your daily Japa repetitions. Includes 50 authentic Sanskrit mantras, 30 blog articles, and sound synthesis.';
      let seoKeywords = 'Japa Sadhana, Jaap Counter, Gayatri Mantra, Shiva chanting, Vedic science, breathing helper, neuro-acoustics';
      let preRenderText = '';

      // Main Pages Internal Links (Nav) for crawling integrity
      const navLinks = `
        <nav style="padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; margin-bottom: 20px;">
          <a href="/">Home (Jaap Counter)</a> | 
          <a href="/meditation">Breathing Guide</a> | 
          <a href="/sounds">Meditation Sounds</a> | 
          <a href="/concepts">Vedic Concepts</a> | 
          <a href="/analytics">Analytics & Diary</a> | 
          <a href="/blog">Spiritual Articles Blog</a> | 
          <a href="/mantras">Mantra Library</a> | 
          <a href="/about">About Us</a> | 
          <a href="/contact">Contact Us</a> | 
          <a href="/privacy-policy">Privacy Policy</a> | 
          <a href="/terms-and-conditions">Terms & Conditions</a> | 
          <a href="/disclaimer">Disclaimer</a>
        </nav>
      `;

      // Determine SEO parameters and pre-render text base
      if (url === '/' || url === '/jaap') {
        seoTitle = 'Japa Sadhana - Modern Online Jaap Counter & Vedic Hub';
        preRenderText = `
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
        `;
      } else if (url === '/meditation') {
        seoTitle = 'Pranayama breathing exercise & Breathe Coach - Japa Sadhana';
        seoDesc = 'Discover Sama Vritti and alternate nostril practices side-by-side with your Japa rep count.';
        preRenderText = `
          <h1>Yogic Pranayama & Breathwork Guides</h1>
          <p>Align your biological breathing cycles with micro-volt neural charges. Practice rhythmic Sama Vritti (Equal Breathing) and Nadi Shodhana to settle acute environmental anxiety before physical mantra recitation.</p>
          ${navLinks}
          <p><a href="/">Return to Jaap Counter</a></p>
        `;
      } else if (url === '/sounds') {
        seoTitle = 'Meditation Sounds & ambient Drone Synthesizers - Japa Sadhana';
        seoDesc = 'Toggle professional 136.1 Hz Earth drone and celestial ambient sound play to drown background room noises.';
        preRenderText = `
          <h1>Resonating Spiritual Soundscapes & Drones</h1>
          <p>Deepen your auditory concentration. Play high-quality non-distracting 136.1 Hz (Om frequency) ambient space coordinates and soft water ripples side-by-side with Japa.</p>
          ${navLinks}
        `;
      } else if (url === '/concepts') {
        seoTitle = 'Vedic Philosophical and Cosmetology Concepts - Japa Sadhana';
        seoDesc = 'Read detailed insights regarding the Upanishads, Karma Yoga, Shabda Brahman, and Patanjali Kriyas.';
        preRenderText = `
          <h1>Core Vedic Philosophical Pillars</h1>
          <p>Study the profound metaphysical concepts ruling Vedic lifestyles, including Karma (intentional action loops), Svadhyaya (contemplative study), and Shabda Brahman (the absolute vibration of supreme space).</p>
          ${navLinks}
        `;
      } else if (url === '/analytics') {
        seoTitle = 'Your Japa Sadhana Diary, analytics and history logs';
        seoDesc = 'Review and manage your local chanting history, daily counts, and completed rounds securely.';
        preRenderText = `
          <h1>Sadhana Diary & Practice Analytics</h1>
          <p>Keep track of your spiritual progress. Your local diary compiles and secures active chanting duration stats, mala milestones, and historical logs locally in your browser cache.</p>
          ${navLinks}
        `;
      } else if (url === '/blog') {
        seoTitle = 'Vedic Wisdom Blog - 30 Science & Sadhana articles - Japa Sadhana';
        seoDesc = 'Read 30 rigorous scientific, botanical, and physiological deep dives regarding Japa Yoga and Sanskrit acoustics.';
        
        let articleBullets = '';
        ARTICLES.forEach(art => {
          articleBullets += `
            <div style="margin-bottom: 25px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px;">
              <h3><a href="/blog/${art.slug}">${art.title}</a></h3>
              <p><strong>Category:</strong> ${art.category} | <strong>Read Time:</strong> ${art.readTime}</p>
              <p>${art.summary}</p>
            </div>
          `;
        });

        preRenderText = `
          <h1>The Spiritual & Scientific Knowledge Compendium</h1>
          <p>Browse our exhaustive list of 30 research-backed articles connecting ancient Vedic chanting sciences with modern neurobiology, cardiology, and botany.</p>
          ${navLinks}
          <h2>Article Index (30 entries)</h2>
          ${articleBullets}
        `;
      } else if (url.startsWith('/blog/')) {
        const slug = url.split('/blog/')[1]?.split('?')[0];
        const art = ARTICLES.find(a => a.slug === slug);

        if (art) {
          seoTitle = `${art.title} - Science of Mantra Blog`;
          seoDesc = art.metaDescription;
          seoKeywords = art.keywords.join(', ');

          let contentHtml = '';
          art.content.forEach(s => {
            contentHtml += `
              <h2>${s.heading}</h2>
              ${s.paragraphs.map(p => `<p>${p}</p>`).join('')}
            `;
          });

          let faqsHtml = '';
          art.faqs.forEach(f => {
            faqsHtml += `<p><strong>Q: ${f.q}</strong><br><em>A: ${f.a}</em></p>`;
          });

          preRenderText = `
            <article>
              <h1>${art.title}</h1>
              <p><strong>Published Category:</strong> ${art.category} | <strong>Length:</strong> ${art.readTime}</p>
              <p><em>Summary: ${art.summary}</em></p>
              ${navLinks}
              <div class="content">${contentHtml}</div>
              ${art.faqs.length > 0 ? `<h3>Related Questions & Answers</h3>${faqsHtml}` : ''}
              <hr>
              <p><a href="/blog">← Back to spiritual Blog Directory</a></p>
            </article>
          `;
        } else {
          // Article slug mismatch, serve list instead of 404
          statusCode = 404;
          seoTitle = 'Blog article not found - Japa Sadhana';
          preRenderText = `
            <h1>Theological Topic Not Found</h1>
            <p>The requested blog article is not found in our index. Please visit our main folder directory.</p>
            ${navLinks}
            <p><a href="/blog">Browse 30 Blog Articles</a></p>
          `;
        }
      } else if (url === '/mantras') {
        seoTitle = 'Mantra Library - 50 Sanskrit Mantras with Transliteration & Meaning';
        seoDesc = 'Explore 50 authentic Sanskrit mantras with word-by-word etymology, benefits, recommended counts, and detailed FAQs.';

        let mantraBullets = '';
        MANTRAS_DATABASE.forEach(m => {
          mantraBullets += `
            <div style="margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px;">
              <h3><a href="/mantras/${m.id}">${m.name}</a></h3>
              <p><strong>Sanskrit:</strong> ${m.sanskrit}</p>
              <p><strong>Transliteration:</strong> ${m.transliteration}</p>
              <p><em>${m.meaning}</em></p>
            </div>
          `;
        });

        preRenderText = `
          <h1>The Sanskrit Mantra Library</h1>
          <p>Discover 50 authentic Vedic and Tantric mantras with precise transcripts, audio instructions, and scientific significance.</p>
          ${navLinks}
          <h2>Mantra List (50 items)</h2>
          ${mantraBullets}
        `;
      } else if (url.startsWith('/mantras/')) {
        const id = url.split('/mantras/')[1]?.split('?')[0];
        const m = MANTRAS_DATABASE.find(item => item.id === id);

        if (m) {
          seoTitle = `Chant ${m.name} - Sanskrit, Transliteration, Meaning, and Benefits`;
          seoDesc = `Learn how to chant the sacred ${m.name}. Meaning: ${m.meaning.slice(0, 120)}...`;

          let etymologyHtml = '';
          if (m.wordByWord) {
            etymologyHtml += '<h3>Word-by-word Sanskrit Etymology</h3><ul>';
            m.wordByWord.forEach(w => {
              etymologyHtml += `<li><strong>${w.word}:</strong> ${w.meaning}</li>`;
            });
            etymologyHtml += '</ul>';
          }

          let mFaqHtml = '';
          if (m.faqs && m.faqs.length > 0) {
            mFaqHtml += '<h3>Mantra Specific FAQs</h3>';
            m.faqs.forEach(f => {
              mFaqHtml += `<p><strong>Q: ${f.q}</strong><br><em>A: ${f.a}</em></p>`;
            });
          }

          preRenderText = `
            <div>
              <h1>Sanskrit Mantra: ${m.name}</h1>
              <h2>संसार ध्वनि - Authentic Script</h2>
              <p style="font-size: 20px; font-weight: bold; padding: 15px; border-left: 4px solid var(--color-orange); background: rgba(255,255,255,0.02)">
                ${m.sanskrit}
              </p>
              <p><strong>Transliteration:</strong> ${m.transliteration}</p>
              ${navLinks}
              <h2>Vedic Meaning</h2>
              <p>${m.meaning}</p>
              
              <h2>Empirical Benefits</h2>
              <p>${m.benefits}</p>
              
              <p><strong>Best Time to Recite:</strong> ${m.bestTime} | <strong>Recommended Daily Count:</strong> ${m.recommendedCount} iterations</p>
              <p><strong>Historical Significance:</strong> ${m.significance}</p>
              
              ${etymologyHtml}
              ${mFaqHtml}
              
              <hr>
              <p><a href="/mantras">← Back to Complete Mantra Index</a> | <a href="/jaap">Select this Mantra in Japa Counter →</a></p>
            </div>
          `;
        } else {
          statusCode = 404;
          seoTitle = 'Mantra not found - Japa Sadhana';
          preRenderText = `
            <h1>Sanskrit Mantra Not Found</h1>
            <p>The requested mantra is not found in our compendium. Please consult the full index library.</p>
            ${navLinks}
            <p><a href="/mantras">Browse 50 Sanskrit Mantras</a></p>
          `;
        }
      } else if (url === '/about') {
        seoTitle = 'About Japa Sadhana - Our Team, Mission, and Vedic Science Advocacy';
        seoDesc = 'Learn about our team of researchers, Sanskrit teachers, and biophysicists committed to spreading Japa Science and peace worldwide.';
        preRenderText = `
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
        `;
      } else if (url === '/contact') {
        seoTitle = 'Contact Us - Get in touch with Japa Sadhana Ashram support';
        seoDesc = 'Have questions regarding Sanskrit pronunciation, Rudraksha selection, or application bugs? Drop our team of researchers an email.';
        preRenderText = `
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
        `;
      } else if (url === '/privacy-policy') {
        seoTitle = 'Privacy Policy - Your Data Autonomy - Japa Sadhana';
        seoDesc = 'Read our strict data privacy policies. We do not track, capture, or stream your meditation history to third parties.';
        preRenderText = `
          <h1>Privacy Policy: Your Sacred Data Stays Local</h1>
          <p>At Japa Sadhana, we carry a deep belief that your personal spiritual practice is a private and sacred space. To protect your cognitive autonomy, our application does not operate external databases, tracking systems, commercial marketing pixels, or remote telemetry logs.</p>
          
          ${navLinks}

          <h2>1. Data Collection & Autonomy</h2>
          <p>We do not collect any personal identifier info. Your name, email, chanting history, daily mala counts, and meditation minutes are stored entirely within your local device cache (browser LocalStorage). No data ever leaves your laptop or mobile. It is never streamed to third parties or sold to advertisement agencies.</p>

          <h2>2. External Scripts and Third-Party Packages</h2>
          <p>To assist researchers, we integrate basic non-commercial visitor coordination: Google Analytics for aggregate counts (to measure server loads) and Google AdSense to serve highly targeted quality ads covering basic server and content costs. These scripts do not hold access to your local spiritual counting logs.</p>

          <h2>3. Cookies and Local Cache</h2>
          <p>Our application uses standard cookies and browser storage files solely to remember your chosen tab preferences, custom target count settings, and the selected meditation drone vol. You can clean these files out anytime by clearing your browser cache.</p>
        `;
      } else if (url === '/terms-and-conditions') {
        seoTitle = 'Terms and Conditions of Use - Japa Sadhana';
        seoDesc = 'Understand our terms of use. All Sanskrit tools, sound systems, and articles are provided free of cost for personal relaxation.';
        preRenderText = `
          <h1>Terms and Conditions of Use</h1>
          <p>By entering and using Japa Sadhana, you signify your compliance with these standard, humble rules of use. If you do not accept these rules, feel free to close the tab and pursue your practices on manual physical rosaries.</p>
          
          ${navLinks}

          <h2>1. Terms of Educational Service</h2>
          <p>Our 50 Sanskrit mantras, 30 blog articles, and 8 step-by-step guides are delivered solely for non-commercial personal wellness, academic study, and relaxing meditation aid. You are welcome to copy and teach these materials in yoga associations, provided you give appropriate citations to Japa Sadhana.</p>

          <h2>2. Sound Engine Disclaimer</h2>
          <p>The professional 136.1 Hz binaural drones and water ripple sound oscillators are intended as noise block aids. Do not listen to these resonating frequencies with high-volume headsets while driving motor vehicles, operating machinery, or performing dangerous physical acts.</p>

          <h2>3. Acceptable Intellectual Conduct</h2>
          <p>We expect all users to keep our public forums and ashram connect emails supportive, kind, and scientific. We reserve the absolute right to discard emails that contain promotional spam, hateful words, or aggressive sectarian arguments.</p>
        `;
      } else if (url === '/disclaimer') {
        seoTitle = 'Medical and Spiritual Practice Disclaimer - Japa Sadhana';
        seoDesc = 'Critical safety measures and health guidelines. Spiritual breathing and chanting practices are wellness aids, not medical cures.';
        preRenderText = `
          <h1>Medical & Spiritual Practice Disclaimer</h1>
          <p>Please read these health guidelines with mature and respectful attention before pursuing any deep, long-duration breath holds or intense Sanskrit chanting practices.</p>
          
          ${navLinks}

          <h2>1. Not Professional Medical Consultation</h2>
          <p>All biological references, brainwave shifts, vagual nerve stimulation details, and research-backed articles compiled on this website are distributed for educational wellness reference only. They are not intended as, and do NOT replace, professional psychiatric diagnosis, physical therapy, or physical medicine cures. If you have severe anxiety, chronic depression, or epilepsy, please consult a certified doctor before using mindfulness tools.</p>

          <h2>2. Pranayama Breathwork Limits</h2>
          <p>Yogic retention routines (Kumbhaka) are powerful bio-stimulators. NEVER push your lung capacity to pain or discomfort. If you feel light-headed, dizzy, or short of breath during our Sama Vritti guides, immediately stop the exercise, sit back, relax, and breathe normally. Pregnant women or individuals suffering from cardiac disorders or high blood pressure should avoid long breath retentions.</p>

          <h2>3. Devotional Practices</h2>
          <p>Chanting mantras is a peaceful tool to quiet mental fluctuations (Chitta Vritti). This tool is built to assist focus and relaxation, and should be treated as a beautiful companion to health, not a magic cure. Use with common sense, respect, and continuous self-awareness.</p>
        `;
      } else {
        statusCode = 404;
        seoTitle = 'Page Not Found - Japa Sadhana';
        preRenderText = `
          <h1>404: Sacred Path Not Found</h1>
          <p>The requested route does not lead to an active temple of wisdom. Please consult our directory below and return to the correct path.</p>
          ${navLinks}
        `;
      }

      // Inject the computed SEO Metadata
      html = html.replace(/<title>.*?<\/title>/, `<title>${seoTitle}</title>`);
      
      const metaTags = `
        <meta name="description" content="${seoDesc}" />
        <meta name="keywords" content="${seoKeywords}" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="${seoTitle}" />
        <meta property="og:description" content="${seoDesc}" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://${req.headers.host || 'japasadhana.org'}${url}" />
      `;

      html = html.replace('</head>', `${metaTags}\n</head>`);

      // Inject crawlable content directly into <div id="root">
      // This is crucial: the crawler instantly reads the text list and links, while the React App 
      // hydrates over it cleanly when loaded!
      const crawledContentShell = `
        <div id="root">
          <div id="seo-crawlabale-static-container" style="background:#0b0f19; color:#f1f5f9; padding:20px; font-family:sans-serif; max-width:800px; margin:0 auto; display:block;">
            ${preRenderText}
            <p style="font-size:10px; color:#475569; margin-top:40px; text-align:center;">
              Pre-rendered by Japa Sadhana SEO engine for search bots, AdSense compliance, and low-bandwidth web access.
            </p>
          </div>
        </div>
      `;

      html = html.replace('<div id="root"></div>', crawledContentShell);

      res.status(statusCode).set({ 'Content-Type': 'text/html' }).send(html);
    } catch (e: any) {
      if (vite) vite.handleStartError(e);
      res.status(500).send(e.stack || e.message || 'Internal Server Error');
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Japa Sadhana] Server successfully launched on http://localhost:${PORT}`);
  });
}

startServer();
