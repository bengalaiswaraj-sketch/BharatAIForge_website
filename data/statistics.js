/**
 * Bharat AI Forge — Verified Statistics, Pillars, Projects & Booklet Data
 * Combines sourced insights from AI-Job-Ready-Programme-Booklet.pdf and program specifications.
 * Every external statistic preserves its exact source name, reference year, and accurate interpretation.
 */

window.BAF_DATA = window.BAF_DATA || {};

window.BAF_DATA.heroStats = [
  {
    value: "16 WEEKS",
    numericValue: 16,
    suffix: " WEEKS",
    label: "Structured Engineering Pathway",
    note: "Proposed program specification across foundational, GenAI, agentic, cloud & career tracks"
  },
  {
    value: "160 HOURS",
    numericValue: 160,
    suffix: " LEARNING HOURS",
    label: "Comprehensive Technical Depth",
    note: "Reconciled across 7 core modules from Python & ML foundations to MLOps and career readiness"
  },
  {
    value: "60%+ PRACTICAL",
    numericValue: 60,
    suffix: "%+ GUIDED PRACTICAL LEARNING",
    label: "Hands-On Labs, Code & Capstones",
    note: "Focused on building, evaluating, and deploying working AI systems rather than passive theory"
  }
];

window.BAF_DATA.wefGlobalStats = [
  {
    id: "wef-skills-change",
    displayValue: "39%",
    targetNumber: 39,
    suffix: "%",
    title: "Core Job Skills Transforming",
    description:
      "Existing worker skill sets projected to transform or become outdated between 2025 and 2030 as AI and automation reshape engineering workflows.",
    source: "World Economic Forum — Future of Jobs Report 2025",
    icon: "cpu"
  },
  {
    id: "wef-jobs-created",
    displayValue: "170 Million",
    targetNumber: 170,
    suffix: " Million",
    title: "New Roles Projected Globally",
    description:
      "Total new jobs projected to be created globally by 2030 across the broader macroeconomic and technological workforce transformation (not solely AI-specific roles).",
    source: "World Economic Forum — Future of Jobs Report 2025",
    icon: "globe"
  },
  {
    id: "wef-skills-barrier",
    displayValue: "63%",
    targetNumber: 63,
    suffix: "%",
    title: "Employers Citing Skills Gaps",
    description:
      "Share of surveyed employers globally identifying skills gaps in the labor market as the single biggest barrier to business and technological transformation.",
    source: "World Economic Forum — Future of Jobs Report 2025",
    icon: "layers"
  }
];

window.BAF_DATA.bookletAIMomentStats = [
  {
    id: "nasscom-builder-gap",
    metric: "90%+ vs 23%",
    headline: "AI Tool Users vs. AI-Native Builders",
    detail:
      "Over 90% of early-career tech professionals in India use AI tools, yet only 23% qualify as AI-native builders capable of architecting and shipping AI systems.",
    source: "NASSCOM (Reported July 2026 — Programme Booklet)"
  },
  {
    id: "naukri-ai-hiring",
    metric: "+16% YoY",
    headline: "AI Hiring Surge in Indian IT",
    detail:
      "AI-specific hiring in India's IT sector rose 16% year-on-year in June 2026, even as overall IT job listings contracted by 3% over the same period.",
    source: "Naukri JobSpeak Index (June 2026 — Programme Booklet)"
  },
  {
    id: "stanford-skill-penetration",
    metric: "2.95x Index",
    headline: "World's Highest Relative AI Skill Appetite",
    detail:
      "India leads globally in relative AI skill penetration on LinkedIn (2.95 vs 2.02 for the US), while entry-level general software roles face headwinds since 2024.",
    source: "Stanford AI Index 2026 (Programme Booklet)"
  }
];

window.BAF_DATA.bcgIndia2026Comparison = {
  title: "Projected India AI / GenAI Talent Landscape (2026 Projection)",
  subtitle:
    "Comparative view of projected demand versus available talent pool in India for 2026. Note: These figures represent BCG projections for 2026, not a verified shortage for 2030.",
  source: "Boston Consulting Group (BCG) Analysis — February 2025 (2026 Projections)",
  metrics: [
    {
      label: "Projected Talent Demand (2026)",
      value: "11.15–11.35 Lakh",
      barPercent: 100,
      tone: "cyan",
      caption: "Estimated enterprise & technology sector demand for AI/GenAI-capable professionals in India"
    },
    {
      label: "Projected Available Talent (2026)",
      value: "7.30–7.40 Lakh",
      barPercent: 65,
      tone: "teal",
      caption: "Estimated supply of practitioners with relevant AI/GenAI technical skills"
    },
    {
      label: "Implied Demand–Supply Gap (2026)",
      value: "3.75–4.05 Lakh",
      barPercent: 35,
      tone: "gold",
      caption: "Projected shortfall between enterprise AI engineering requirements and job-ready talent"
    }
  ],
  bookletContext: [
    {
      figure: "2.3M vs 1.2M",
      label: "2027 India AI Roles vs Talent",
      note: "Demand is ~1.5x supply (2.3M openings vs 1.2M talent). Source: Bain & Company, Mar 2025."
    },
    {
      figure: "600,000+",
      label: "AI Professional Shortage by 2027",
      note: "Projected shortage of skilled AI practitioners in India. Source: NASSCOM."
    },
    {
      figure: "~850,000 / yr",
      label: "Engineering Bachelor's Graduates",
      note: "India graduates ~850K engineers annually vs ~1.5M in China and ~140K in the US. Source: Goldsea, Mar 2026."
    },
    {
      figure: "~2.6M Illustrative Gap",
      label: "2027–2030 Unprepared Graduates",
      note: "Booklet illustration (not a forecast): 850K/yr × 4 batches ≈ 3.4M; if only 23% are AI-native builders, 77% (~2.6M) risk graduating without builder skills."
    }
  ],
  challenges: [
    {
      id: "theory-practice",
      title: "THEORY–PRACTICE GAP",
      badge: "Academic Exposure vs. Applied Build",
      summary: "Students need more applied engineering exposure.",
      description:
        "While many students understand foundational concepts or use conversational AI tools, rapid technological shifts outpace traditional syllabus revision cycles—leaving a gap in building, evaluating, and defending end-to-end systems."
    },
    {
      id: "production-experience",
      title: "LIMITED PRODUCTION EXPERIENCE",
      badge: "Beyond Notebook Demonstrations",
      summary: "Graduates need experience beyond notebook demonstrations.",
      description:
        "Industry engineering requires moving past isolated Jupyter notebooks to REST APIs, vector retrieval pipelines, tool-calling agents, containerization with Docker, guardrails, and cloud deployment."
    },
    {
      id: "portfolio-employability",
      title: "PORTFOLIO & EMPLOYABILITY GAP",
      badge: "Verifiable Proof of Work",
      summary: "Students need credible evidence of technical competence.",
      description:
        "Hiring teams increasingly ask 'What have you built?' rather than 'What subjects did you take?'. Students need public GitHub repositories, clean README architectures, open-source PRs, and live application demos."
    }
  ]
};

window.BAF_DATA.forgePillars = [
  {
    id: "pillar-foundations",
    number: "01",
    title: "CONCEPTUAL FOUNDATIONS",
    shortDesc: "AI, mathematics, Python, data science.",
    expandedDesc:
      "Tools change every few months; core concepts last. Students master Python programming, linear algebra & probability intuition, data engineering, classical ML, neural network mechanics, and responsible AI red-teaming.",
    keywords: ["Python 3", "AI Mathematics", "Data Science", "Model Evaluation", "Responsible AI"],
    angle: -90
  },
  {
    id: "pillar-modern-ai",
    number: "02",
    title: "MODERN AI ENGINEERING",
    shortDesc: "Machine Learning, Deep Learning, GenAI, LLMs, RAG.",
    expandedDesc:
      "Deep dive into PyTorch, Transformer architectures, token embeddings, vector databases, semantic retrieval & reranking (RAG), prompt & context engineering, LoRA fine-tuning, and hallucination evaluation.",
    keywords: ["PyTorch", "Transformers", "LLMs & SLMs", "RAG Pipelines", "Vector DBs", "LoRA"],
    angle: -30
  },
  {
    id: "pillar-agentic",
    number: "03",
    title: "AGENTIC SYSTEMS",
    shortDesc: "AI agents, tool calling, orchestration, MCP.",
    expandedDesc:
      "Design autonomous and human-in-the-loop agentic workflows that plan, invoke external APIs, critique outputs, and collaborate across multi-agent graphs using Google ADK, LangGraph, and Model Context Protocol (MCP).",
    keywords: ["AI Agents", "Tool Calling", "Google ADK", "LangGraph", "MCP", "Agent Evaluation"],
    angle: 30
  },
  {
    id: "pillar-cloud",
    number: "04",
    title: "CLOUD & DEPLOYMENT",
    shortDesc: "FastAPI, Docker, cloud, model serving, MLOps.",
    expandedDesc:
      "Package AI models and agents into resilient microservices with FastAPI and Docker containers. Learn cloud deployment across Google Cloud, AWS, and Azure, CI/CD automation, latency monitoring, and safety guardrails.",
    keywords: ["FastAPI", "Docker", "GCP / AWS / Azure", "Model Serving", "CI/CD & MLOps"],
    angle: 90
  },
  {
    id: "pillar-projects",
    number: "05",
    title: "REAL-WORLD PROJECTS",
    shortDesc: "Capstones, architecture, testing, demonstrations.",
    expandedDesc:
      "Follow the weekly 'Learn → Build → Review → Ship' loop. Build domain-focused capstones addressing Indian challenges in healthcare, agriculture, education, enterprise RAG, and multilingual intelligence.",
    keywords: ["System Architecture", "Automated Testing", "Red-Teaming", "Live Cloud Demos"],
    angle: 150
  },
  {
    id: "pillar-career",
    number: "06",
    title: "CAREER CREDIBILITY",
    shortDesc: "GitHub, open source, LinkedIn, resumes, interviews.",
    expandedDesc:
      "Unify your engineering story across three recruiter touchpoints: a verified GitHub portfolio with 6 pinned repositories, real open-source pull requests, an ATS-ready impact resume, and an optimized LinkedIn presence.",
    keywords: ["GitHub Portfolio", "Open-Source PRs", "Impact Resume", "LinkedIn Branding", "Mock Interviews"],
    angle: 210
  }
];

window.BAF_DATA.industryToolsMatrix = [
  {
    area: "Prompt & Context Engineering",
    examples: "Leading chat and reasoning models (Gemini, Claude, GPT series)",
    outcome: "Reliable system prompts, structured JSON outputs & reusable prompt libraries"
  },
  {
    area: "LLM APIs & Tool Use",
    examples: "Model APIs with structured function calling & tool schemas",
    outcome: "Applications that securely invoke external APIs, databases & calculators"
  },
  {
    area: "Retrieval-Augmented Generation (RAG)",
    examples: "Dense embeddings, chunking strategies, vector databases & rerankers",
    outcome: "Grounded question-answering assistant over custom enterprise/campus documents"
  },
  {
    area: "AI Agents & Orchestration",
    examples: "LangGraph, Google ADK, Model Context Protocol (MCP)",
    outcome: "Multi-step autonomous & human-in-the-loop agents that plan, act & self-verify"
  },
  {
    area: "AI-Assisted Software Engineering",
    examples: "Antigravity, GitHub Copilot, Claude Code",
    outcome: "Features, bug fixes & unit test suites written with AI pair-programmers and critically reviewed"
  },
  {
    area: "Evaluation & Guardrails",
    examples: "Golden test sets, LLM-as-a-judge metrics, safety & bias filters",
    outcome: "Quantitative evaluation report measuring faithfulness, latency, hallucination & safety"
  },
  {
    area: "Cloud & Container Deployment",
    examples: "FastAPI, Docker containers, Google Cloud / AWS deployment tiers",
    outcome: "Publicly accessible, containerized live project demonstration with API docs"
  }
];

window.BAF_DATA.projectsShowcase = [
  {
    id: "proj-healthcare",
    number: "01",
    title: "Healthcare Knowledge Assistant",
    category: "rag",
    categoryLabel: "RAG & Guardrails",
    difficulty: "Intermediate",
    problemStatement:
      "Clinicians and rural health workers face information overload when cross-referencing clinical guidelines, drug interactions, and triage protocols.",
    technologies: ["Python", "Embeddings", "Vector DB", "RAG Pipeline", "Safety Guardrails", "FastAPI"],
    deliverables: [
      "Citation-backed medical guideline retrieval engine",
      "Strict hallucination & medical disclaimer guardrail layer",
      "Evaluation benchmark report on clinical QA accuracy"
    ],
    modalDetails: {
      problem:
        "Unverified generative models can hallucinate clinical facts. Healthcare support systems require strict grounding in verified protocols with transparent source citations.",
      whatStudentsBuild:
        "A domain-grounded Retrieval-Augmented Generation (RAG) assistant indexed over open clinical guidelines, featuring hybrid search, cross-encoder reranking, and deterministic safety guardrails.",
      technicalApproach:
        "Semantic document chunking with metadata preservation, vector indexing, retrieval relevance thresholds, automated refusal for out-of-scope queries, and FastAPI backend endpoints.",
      evaluation:
        "Evaluated using a curated golden test set measuring context recall, citation faithfulness, refusal accuracy on adversarial prompts, and response latency.",
      githubShowcase:
        "Complete repository with system architecture diagram, evaluation scorecard markdown, containerized Docker setup, and interactive demo video."
    }
  },
  {
    id: "proj-tutor",
    number: "02",
    title: "Intelligent AI Tutor",
    category: "genai",
    categoryLabel: "GenAI & EdTech",
    difficulty: "Intermediate",
    problemStatement:
      "Engineering students often receive generic answers from standard chatbots instead of Socratic, syllabus-aligned step-by-step guidance.",
    technologies: ["LLMs", "Prompt Engineering", "Syllabus RAG", "Session Memory", "FastAPI", "Docker"],
    deliverables: [
      "Syllabus-grounded Socratic tutoring engine",
      "Adaptive quiz generator & code explanation module",
      "Student comprehension tracking dashboard"
    ],
    modalDetails: {
      problem:
        "Standard chatbots give away final answers without building conceptual mastery or aligning with a college's specific syllabus and lecture notes.",
      whatStudentsBuild:
        "An adaptive AI tutor that ingests university course notes, asks guiding Socratic questions, diagnoses misconceptions in student code, and generates targeted practice quizzes.",
      technicalApproach:
        "Multi-turn conversation state management, structured JSON output schemas for quiz generation, syllabus-scoped vector retrieval, and rubric-based code feedback.",
      evaluation:
        "Tested against sample student queries across varying difficulty levels to verify pedagogical scaffolding, factual accuracy, and zero leakage of direct exam solutions.",
      githubShowcase:
        "Clean modular Python package, prompt template library, sample syllabus dataset, and live deployed web interface."
    }
  },
  {
    id: "proj-agriculture",
    number: "03",
    title: "Agriculture Computer Vision System",
    category: "vision",
    categoryLabel: "Computer Vision & ML",
    difficulty: "Intermediate–Advanced",
    problemStatement:
      "Early detection of crop leaf diseases and pest stress is critical for Indian farmers, yet expert agronomy diagnostics are often delayed.",
    technologies: ["PyTorch", "Computer Vision", "Transfer Learning", "Multimodal RAG", "FastAPI", "Cloud Serving"],
    deliverables: [
      "Fine-tuned crop pathology vision classifier",
      "Agronomy advisory retrieval module",
      "Low-latency mobile-friendly inference API"
    ],
    modalDetails: {
      problem:
        "Visual symptoms of crop diseases can be subtle and easily confused, leading to incorrect pesticide usage or preventable yield loss.",
      whatStudentsBuild:
        "An end-to-end computer vision and advisory pipeline that classifies plant leaf imagery and retrieves localized, actionable treatment guidelines.",
      technicalApproach:
        "Data augmentation and transfer learning in PyTorch, confusion-matrix error analysis, confidence calibration, and a FastAPI inference service coupled with agronomy knowledge retrieval.",
      evaluation:
        "Measured via precision, recall, macro F1-score across disease classes, out-of-distribution image rejection, and CPU/GPU inference latency.",
      githubShowcase:
        "Model training pipeline, reproducible evaluation notebook, Grad-CAM visual explainability plots, and Dockerized REST API."
    }
  },
  {
    id: "proj-enterprise-rag",
    number: "04",
    title: "Enterprise Document RAG",
    category: "rag",
    categoryLabel: "RAG & Cloud MLOps",
    difficulty: "Advanced",
    problemStatement:
      "Organizations struggle to query thousands of complex PDFs containing tables, compliance policies, and technical specifications accurately.",
    technologies: ["Hybrid RAG", "Vector Databases", "Reranking", "FastAPI", "Docker", "CI/CD"],
    deliverables: [
      "Multi-document ingestion & hybrid search pipeline",
      "Page-level citation & table-aware synthesis engine",
      "Automated RAG evaluation & observability suite"
    ],
    modalDetails: {
      problem:
        "Naive chunking fails on complex enterprise PDFs with tables, cross-references, and strict compliance clauses.",
      whatStudentsBuild:
        "A production-grade Enterprise Document RAG architecture supporting dense + keyword hybrid search, reciprocal rank fusion, cross-encoder reranking, and strict inline citations.",
      technicalApproach:
        "Structured document parsing, metadata filtering, embedding pipelines, reranker integration, and containerized cloud deployment with request logging.",
      evaluation:
        "Benchmarked on retrieval precision@k, answer relevance, groundedness score, and adversarial prompt injection resistance.",
      githubShowcase:
        "End-to-end microservice repo with CI/CD workflow, benchmark comparison chart (naive vs hybrid RAG), and API documentation."
    }
  },
  {
    id: "proj-multi-agent",
    number: "05",
    title: "Multi-Agent Research Assistant",
    category: "agentic",
    categoryLabel: "Agentic AI & MCP",
    difficulty: "Advanced",
    problemStatement:
      "Complex technical research requires decomposing questions, querying multiple tools, verifying facts, and synthesizing structured reports.",
    technologies: ["Google ADK", "LangGraph", "MCP", "Tool Calling", "Human-in-the-Loop", "Agent Evaluation"],
    deliverables: [
      "Planner, Researcher & Critic multi-agent workflow",
      "Model Context Protocol (MCP) tool integrations",
      "Execution trace logger & verification checkpoint UI"
    ],
    modalDetails: {
      problem:
        "Single-pass LLM calls fail on multi-step engineering workflows that require planning, external tool execution, and self-correction.",
      whatStudentsBuild:
        "A coordinated multi-agent system where a Planner decomposes objectives, a Tool Agent retrieves live technical documentation via MCP, and a Critic Agent audits accuracy before final synthesis.",
      technicalApproach:
        "State-graph orchestration using LangGraph / Google ADK, standardized tool interfaces via MCP, deterministic loop bounds, and human-in-the-loop approval gates.",
      evaluation:
        "Evaluated on task completion rate, tool-call efficiency, recovery from simulated API errors, and citation verification accuracy.",
      githubShowcase:
        "State-graph architecture diagram, MCP server implementation, agent trace logs, and live workflow walkthrough."
    }
  },
  {
    id: "proj-multilingual",
    number: "06",
    title: "Multilingual Indian Language Assistant",
    category: "india",
    categoryLabel: "Bharat AI & Indic NLP",
    difficulty: "Intermediate–Advanced",
    problemStatement:
      "Millions of Indian citizens interact primarily in regional languages and code-mixed speech, requiring inclusive AI interfaces for public and educational services.",
    technologies: ["Indic LLMs", "Multilingual Embeddings", "Cross-Lingual RAG", "Guardrails", "Cloud Deployment"],
    deliverables: [
      "Cross-lingual retrieval & response pipeline (Hindi, Tamil, Telugu, Kannada, etc.)",
      "Code-mixed query normalization & intent router",
      "Cultural & factual evaluation benchmark"
    ],
    modalDetails: {
      problem:
        "English-centric AI systems exclude vast segments of India's population and often degrade in accuracy when handling Indic scripts or Hinglish/Tanglish queries.",
      whatStudentsBuild:
        "A multilingual AI assistant capable of understanding regional and code-mixed queries, retrieving verified information from English/Indic knowledge bases, and responding naturally in the user's chosen language.",
      technicalApproach:
        "Multilingual embedding alignment, language detection and routing, grounded cross-lingual generation, and output quality verification.",
      evaluation:
        "Assessed across multiple Indian languages for semantic parity, translation fidelity, factual grounding, and latency.",
      githubShowcase:
        "Multilingual evaluation dataset, architecture documentation, containerized API, and interactive multi-language showcase."
    }
  }
];

window.BAF_DATA.githubHotspots = [
  {
    id: "gh-profile",
    title: "1. Professional Identity & Profile README",
    badge: "First Impression",
    summary: "Clear bio, engineering focus, and a living introductory README.",
    checklist: [
      "Professional username, clear photo, and a concise two-line AI engineering bio.",
      "Custom profile README.md introducing technical stack, focus areas, and links to best shipped systems.",
      "Direct cross-links connecting GitHub, LinkedIn, and your one-page ATS resume ('One Story Everywhere').",
      "Zero leaked secrets: strict .env hygiene and secret scanning from day one."
    ]
  },
  {
    id: "gh-pinned",
    title: "2. Six Pinned Portfolio Repositories",
    badge: "Proof of Work",
    summary: "Curated repositories demonstrating RAG, Agents, Vision, and Cloud MLOps.",
    checklist: [
      "Up to 6 pinned repositories—each representing a complete, runnable engineering project rather than a raw notebook dump.",
      "Every repo includes a problem statement, system architecture diagram, setup instructions, and live demo link.",
      "Explicit open-source license (e.g., MIT / Apache 2.0) and clean modular directory structure.",
      "Quantitative evaluation section showing how accuracy, latency, and hallucinations were measured."
    ]
  },
  {
    id: "gh-commits",
    title: "3. Consistent Engineering Cadence & PR Workflow",
    badge: "Engineering Habits",
    summary: "Steady weekly shipping rhythm instead of a last-minute upload.",
    checklist: [
      "Follows the weekly 'Learn → Build → Review → Ship' habit so commit history reflects authentic progression.",
      "Meaningful commit messages, feature branching, and self-documented pull requests.",
      "Automated test suites and linting integrated via GitHub Actions CI workflows.",
      "Code written with AI pair-programmers (Antigravity, Copilot, Claude Code) is critically reviewed and tested."
    ]
  },
  {
    id: "gh-opensource",
    title: "4. The 6-Step Open-Source Contribution Pathway",
    badge: "External Credibility",
    summary: "Real collaboration with maintainers in the Python, Data, and AI ecosystem.",
    checklist: [
      "Step 1: Select a beginner-friendly project in the Python, data, or AI ecosystem using 'good first issue' labels.",
      "Step 2: Read CONTRIBUTING.md thoroughly and set up the development environment and test suite locally.",
      "Step 3: Start focused—improve documentation, add unit test coverage, or resolve a reproducible bug.",
      "Step 4–6: Fork, create a clean branch, open a well-documented Pull Request, respond politely to code review, and celebrate the merge!"
    ]
  }
];

window.BAF_DATA.rolloutMilestones = [
  {
    year: "2027",
    phase: "Phase 1 — Foundation Cohort",
    colleges: "25 Partner Colleges",
    learners: "10,000 Cumulative Learners",
    bookletNote: "Booklet Phase 1 baseline: 15–20 engineering colleges and ~10,000 students establishing the initial benchmark.",
    focus: "Core curriculum deployment, campus lab integration, faculty enablement, and open outcome reporting."
  },
  {
    year: "2028",
    phase: "Phase 2 — Regional Expansion",
    colleges: "150 Partner Colleges",
    learners: "70,000 Cumulative Learners",
    bookletNote: "Expanding deep into Tier-2 and Tier-3 engineering hubs across India.",
    focus: "Scaling mentor review networks, regional language AI capstones, and open-source contribution sprints."
  },
  {
    year: "2029",
    phase: "Phase 3 — Ecosystem Acceleration",
    colleges: "450 Partner Colleges",
    learners: "200,000 Cumulative Learners",
    bookletNote: "Broad institutional adoption across state and autonomous technical universities.",
    focus: "Advanced multi-agent and cloud MLOps tracks, cross-campus hackathons, and national project showcases."
  },
  {
    year: "2030",
    phase: "Phase 4 — India AI Ready 2030 Ambition",
    colleges: "1,000 Partner Colleges",
    learners: "500,000 Cumulative Learners",
    bookletNote: "Proposed long-term expansion ambition (not a guaranteed forecast or historical figure).",
    focus: "Sustained pipeline of job-ready Indian AI engineers building, evaluating, and shipping systems for India and the world."
  }
];
