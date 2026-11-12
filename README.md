# Bharat AI Forge — India AI Ready 2030

> **Tagline:** "Learn AI. Engineer the Future."  
> **Mission:** "Building India's Next Generation of AI Engineers."  
> **Campaign:** "India AI Ready 2030"

A complete, production-ready, zero-dependency static website built for **Bharat AI Forge**, an industry-integrated AI engineering education initiative designed for students and engineering colleges across India.

---

## 1. Project Overview

Bharat AI Forge transforms classroom AI awareness into verifiable AI engineering capability across **16 weeks (160 learning hours, 60%+ guided practical learning)**. The website is built using pure **HTML5, Modern CSS3 (Custom Properties, CSS Grid, Flexbox), and Vanilla ES6+ JavaScript** with zero frontend framework or build-step dependencies, making it immediately deployable to **GitHub Pages** (`https://USERNAME.github.io/bharat-ai-forge/`).

---

## 2. Folder Structure

```text
/
  index.html                      # Complete 14-section interactive landing experience
  privacy.html                    # Transparent Privacy Notice & data handling disclosures
  .nojekyll                       # Disables Jekyll processing on GitHub Pages
  README.md                       # Deployment, maintenance, API & CORS documentation
  AI-Job-Ready-Programme-Booklet.pdf # Source programme booklet examined & incorporated

  assets/
    images/
      students-ai-lab.jpg         # Editorial Indian AI engineering lab visual
      og-preview.jpg              # Open Graph / LinkedIn / WhatsApp social share card
    icons/
      favicon.svg                 # Custom geometric neural forge SVG favicon
    illustrations/
      hero-neural-forge.svg       # 3D-inspired hexagonal neural lattice vector illustration
      architecture-blueprint.svg  # End-to-end RAG + Agentic MCP + Cloud MLOps diagram
    fonts/                        # Reserved for optional local font hosting

  css/
    reset.css                     # Modern accessible CSS reset
    variables.css                 # Brand palette, typography, spacing & shadow tokens
    components.css                # Reusable buttons, cards, badges, modals & floating bar
    animations.css                # IntersectionObserver reveals, keyframes & reduced-motion
    style.css                     # Master layout & styling for all 14 sections
    responsive.css                # Mobile-first breakpoints (320px to 1920px)

  js/
    config.js                     # Central API URL, validation bounds & mock mode switch
    registration.js               # Mode A & Mode B form validation, +91 normalization & fetch()
    curriculum.js                 # Interactive 7-module (160h) roadmap & category filters
    ui-components.js              # 6-pillar radial explorer, project modal, GitHub & FAQ
    animations.js                 # Scroll reveals, stat counters & pointer parallax
    main.js                       # Sticky header, scroll spy, mobile menu & CTA triggers

  data/
    statistics.js                 # Verified WEF, BCG, NASSCOM, Stanford, Bain & Booklet data
    curriculum.js                 # 7 modules (160 hours) + 16-week checkpoint journey
    faq.js                        # 14 mandatory program FAQs with category metadata

  tools/
    extract-ppt-content.py        # Development-only utility to parse .pptx / .pdf files
```

---

## 3. Local Development

No `npm install`, bundler, or compile step is required. All asset paths use relative URLs (`./css/...`, `./js/...`, `./assets/...`) so the site runs identically at a domain root or under a GitHub Pages repository subpath (`/bharat-ai-forge/`).

---

## 4. How to Preview Using a Local HTTP Server

Run any lightweight static HTTP server from the repository root:

### Option A: Python 3 (built-in)
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

### Option B: Node `npx serve` (if Node is installed)
```bash
npx serve -l 8080 .
```

---

## 5. How the Presentation / Booklet Content Was Incorporated

All 15 pages of `AI-Job-Ready-Programme-Booklet.pdf` (alongside the master program specifications) were extracted and mapped into interactive web sections:

| Booklet Page / Topic | Website Section & Interactive Feature |
| :--- | :--- |
| **Pages 1–2:** Foreword & Core Equation (`Concepts + Tools + Career Readiness = AI Job-Ready`) | **Section 2 (Hero)** & **Footer** formula badges and mission narrative |
| **Page 3:** The AI Moment (`AI User` 90%+ vs `AI Builder` 23% — NASSCOM Jul 2026; `+16%` AI hiring — Naukri Jun 2026; Stanford AI Index 2026) | **Section 3 (Why AI Education Matters)** alongside WEF *Future of Jobs Report 2025* (`39%`, `170M`, `63%`) |
| **Page 4:** The 2030 Vacuum (Bain `2.3M vs 1.2M`, NASSCOM `600K+` shortage, Goldsea `~850K/yr` grads, QS `5th vs 18th`) | **Section 4 (India's AI Talent Challenge)** alongside BCG Feb 2025 India 2026 projections (`11.15–11.35L` demand vs `7.30–7.40L` supply = `3.75–4.05L` gap) |
| **Pages 6–8:** Programme at a Glance, Conceptual Foundations & Recent AI Tools Matrix | **Section 5 (Introducing Bharat AI Forge)** 6-Pillar Radial Network + Interactive Tools Hiring Table |
| **Pages 7–8 & Spec:** 7 Modules reconciling to 160 Hours (24+28+28+24+24+20+12) | **Section 6 (Interactive Curriculum)** with track filters & expandable modules |
| **Pages 9–10:** Weekly Learning Loop (`Learn → Build → Review → Ship`), 4 Sample Labs & 7-Feature Learning Portal | **Section 7 (Hands-On Learning Experience)** & **Section 8 (Project Showcase)** |
| **Page 12:** A GitHub Profile That Speaks for You & 6-Step Open-Source Pathway | **Section 9 (GitHub & Open-Source Credibility)** interactive demo portfolio hotspots |
| **Pages 11 & 13:** Resume Before/After & LinkedIn (`One Story Everywhere: Resume ↔ GitHub ↔ LinkedIn`) | **Section 10 (Career Readiness)** comparison cards & 5-stage learner progression |
| **Page 5:** Route to 2030, IndiaAI Mission (₹10,371.92 Cr) & 2027–2030 Rollout Ambitions | **Section 11 (India AI Ready 2030)** with explicit non-endorsement & ambition disclaimers |
| **Pages 14–15:** Student Journey Checkpoints & "Bring the Programme to Your Campus" | **Section 12 (Program Experience)** 16-week roadmap & 4-step campus collaboration banner |

If a new `.pptx` or `.pdf` file is placed in the root directory, run:
```bash
python tools/extract-ppt-content.py
```
to generate `tools/extracted-presentation.json`.

---

## 6. How to Update Curriculum Content

Open `data/curriculum.js`:
- Edit `window.BAF_DATA.curriculumModules` to update module titles, hours, topics, outcomes, or hands-on deliverables.
- Edit `window.BAF_DATA.sixteenWeekJourney` to update the 4-stage weekly checkpoints.
- No HTML changes are required—`js/curriculum.js` renders the cards and recalculates filtered hour totals automatically.

---

## 7. How to Configure the API URL

Open `js/config.js` and update `API_URL`:

```javascript
window.BAF_CONFIG = {
  API_URL: "https://bharatai-forge-api-679998727179.asia-south1.run.app/register",
  // ...
};
```

All request formatting and field mapping is isolated in `js/registration.js`. The payload strictly uses the supported backend schema:

```json
{
  "first_name": "Demo",
  "last_name": "User",
  "email": "demo@example.com",
  "mobile": "+919876543210",
  "institute_name": "IIT Delhi",
  "year_of_graduation": 2027,
  "description": "Submission Type: Program Registration | Interested In: Generative AI & LLMs, Agentic AI & Multi-Agent Systems | Question: I would like to know the next cohort date."
}
```

---

## 8. How to Test Forms Without Submitting Real Personal Data

To test validation, phone normalization, loading states, and confirmation banners locally **without sending fake test records to the production Cloud Run API**, append `?mock=1` to the page URL:

```text
http://localhost:8080/?mock=1#register
```

When `?mock=1` is active, `js/registration.js` runs all validation and payload construction rules identically to production, then resolves via a local mock adapter without making a network request.

---

## 9. How to Deploy to GitHub Pages

1. Push the repository contents to your GitHub repository (`main` branch).
2. Open your repository on GitHub and click **Settings**.
3. In the left sidebar, select **Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Select branch **`main`** and folder **`/ (root)`**, then click **Save**.
6. Wait 1–2 minutes for GitHub Actions to publish your site at:
   `https://USERNAME.github.io/bharat-ai-forge/`

---

## 10. How to Troubleshoot CORS & Configure the Cloud Run Backend

Because the static frontend is hosted on GitHub Pages (`https://USERNAME.github.io`) and the registration API is hosted on Google Cloud Run (`https://bharatai-forge-api-679998727179.asia-south1.run.app`), browser requests are **cross-origin**.

A `POST` request with `Content-Type: application/json` triggers a browser `OPTIONS` preflight request. Ensure the Cloud Run backend service is configured as follows:

1. **Allowed Origins (`Access-Control-Allow-Origin`):**
   - Allow your production GitHub Pages origin: `https://USERNAME.github.io` *(Note: Browser `Origin` headers contain only `scheme://hostname[:port]`, never the `/bharat-ai-forge` repository subpath).*
   - Allow local development origins: `http://localhost:8080`, `http://127.0.0.1:8080`, `http://localhost:5500`.
2. **Allowed Methods (`Access-Control-Allow-Methods`):**
   - `POST, OPTIONS`
3. **Allowed Headers (`Access-Control-Allow-Headers`):**
   - `Content-Type, Accept`
4. **Preflight Response:**
   - Respond to `OPTIONS /register` with HTTP `200` or `204` and include the CORS headers above on both preflight and actual `POST` responses.
5. **Public API Hardening Recommendations:**
   - Implement server-side rate limiting (per IP / per email), strict schema & length validation, spam detection, and abuse monitoring on the Cloud Run service.

---

## 11. How to Replace Placeholder Images

- Replace `assets/images/students-ai-lab.jpg` with your own campus/cohort photograph (recommended aspect ratio `16:10`, optimized JPEG/WebP).
- Replace `assets/images/og-preview.jpg` with your updated social share card (`1200×630` pixels) and update the `og:url` and `canonical` URL in `index.html` once your final GitHub Pages domain is live.

---

## 12. How to Update Program Contact & Privacy Details

- Open `js/config.js` to update `contactPlaceholders`.
- Open `privacy.html` (Section 4) and the footer in `index.html` to replace the explicit operator name, contact email, and data retention policy placeholders once confirmed by your legal/operations team.
