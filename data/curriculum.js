/**
 * Bharat AI Forge — Complete 160-Hour Interactive Curriculum & 16-Week Journey
 * Synthesizes the 7-Module Program Architecture (160 Hours) with the Programme Booklet's
 * Conceptual Foundations, AI Tools Matrix, Weekly Learning Loop, and Checkpoint System.
 */

window.BAF_DATA = window.BAF_DATA || {};

window.BAF_DATA.curriculumCategories = [
  { id: "all", label: "Complete Pathway (160 Hrs)" },
  { id: "fundamentals", label: "AI Fundamentals (52 Hrs)" },
  { id: "genai", label: "GenAI & RAG (28 Hrs)" },
  { id: "agentic", label: "Agentic AI (24 Hrs)" },
  { id: "cloud", label: "Cloud & Capstone (44 Hrs)" },
  { id: "career", label: "Career Skills (12 Hrs)" }
];

window.BAF_DATA.curriculumModules = [
  {
    id: "module-01",
    number: "MODULE 01",
    shortNumber: "01",
    title: "AI & Python Foundations",
    duration: "24 Hours",
    hours: 24,
    category: "fundamentals",
    categoryLabel: "AI Fundamentals",
    icon: "terminal",
    summary:
      "Establish durable conceptual foundations in Python engineering, AI mathematics intuition, data manipulation, API workflows, and responsible AI evaluation.",
    topics: [
      "Artificial Intelligence foundations",
      "Python programming",
      "AI mathematics",
      "Data handling",
      "Statistics and probability",
      "Git and APIs",
      "Responsible AI"
    ],
    bookletFoundations: [
      "The AI Landscape: AI, ML, Deep Learning & GenAI relationships and industrial use cases",
      "Responsible & Safe AI: Bias, privacy, security risks, copyright, and red-teaming AI failure modes"
    ],
    outcome:
      "Write modular, version-controlled Python packages, consume REST APIs securely, process structured datasets, and audit AI outputs for bias and failure cases.",
    handsOnProject:
      "Data & API Intelligence CLI + Chatbot Red-Team Audit Report shipped to a live GitHub repository."
  },
  {
    id: "module-02",
    number: "MODULE 02",
    shortNumber: "02",
    title: "Machine Learning & Deep Learning",
    duration: "28 Hours",
    hours: 28,
    category: "fundamentals",
    categoryLabel: "AI Fundamentals",
    icon: "brain",
    summary:
      "Transition from classical supervised and unsupervised learning to training neural networks, computer vision pipelines, and Transformer building blocks in PyTorch.",
    topics: [
      "Regression and classification",
      "Clustering",
      "Feature engineering",
      "Model evaluation",
      "Neural networks",
      "PyTorch",
      "Computer vision",
      "Transformers introduction"
    ],
    bookletFoundations: [
      "Data & ML Basics: Features, labels, training/testing splits, overfitting, and rigorous evaluation metrics",
      "Neural Networks Intuition: How neurons, layers, gradients, and attention mechanisms learn representations"
    ],
    outcome:
      "Train, regularize, and evaluate classical ML models and PyTorch deep neural networks on real-world tabular and visual datasets with reproducible metrics.",
    handsOnProject:
      "End-to-End PyTorch Visual Classifier & Feature Engineering Benchmark with confusion-matrix diagnostics."
  },
  {
    id: "module-03",
    number: "MODULE 03",
    shortNumber: "03",
    title: "Generative AI, LLMs & RAG",
    duration: "28 Hours",
    hours: 28,
    category: "genai",
    categoryLabel: "GenAI & RAG",
    icon: "sparkles",
    summary:
      "Master how Large and Small Language Models work under the hood, engineer grounded Retrieval-Augmented Generation (RAG) pipelines, and apply LoRA fine-tuning and guardrails.",
    topics: [
      "Transformers",
      "LLMs and SLMs",
      "Prompt engineering",
      "Embeddings",
      "Vector databases",
      "RAG pipelines",
      "Retrieval and reranking",
      "Evaluation and guardrails",
      "Fine-tuning and LoRA"
    ],
    bookletFoundations: [
      "How LLMs Work: Tokens, embeddings, self-attention, pre-training vs. fine-tuning, context windows, and why models hallucinate",
      "Booklet Lab #1 & #4: Build a syllabus RAG assistant and evaluate accuracy, hallucinations, and safety filters"
    ],
    outcome:
      "Architect, evaluate, and harden production-grade RAG pipelines over custom document corpora using dense embeddings, vector databases, reranking, and automated guardrails.",
    handsOnProject:
      "Citation-Grounded Campus & Enterprise Document RAG Assistant with automated faithfulness evaluation."
  },
  {
    id: "module-04",
    number: "MODULE 04",
    shortNumber: "04",
    title: "Agentic AI Engineering",
    duration: "24 Hours",
    hours: 24,
    category: "agentic",
    categoryLabel: "Agentic AI",
    icon: "network",
    summary:
      "Build autonomous and human-in-the-loop AI agents that plan, invoke tools, collaborate across multi-agent state graphs, and connect via Model Context Protocol (MCP).",
    topics: [
      "AI agents",
      "Tool calling",
      "Agent workflows",
      "Multi-agent orchestration",
      "Google ADK",
      "LangGraph",
      "MCP",
      "Human-in-the-loop design",
      "Agent evaluation"
    ],
    bookletFoundations: [
      "Retrieval, Agents & System Thinking: Designing systems that plan, act, invoke tools, and verify their own output",
      "Booklet Lab #2 & #3: Campus workflow automation agent + AI-assisted software engineering with Antigravity, Copilot & Claude Code"
    ],
    outcome:
      "Design deterministic and multi-step agent architectures using Google ADK, LangGraph, and MCP servers with human-in-the-loop safety checkpoints and trajectory evaluation.",
    handsOnProject:
      "Multi-Agent Research & Workflow Orchestrator powered by LangGraph / Google ADK and custom MCP tool servers."
  },
  {
    id: "module-05",
    number: "MODULE 05",
    shortNumber: "05",
    title: "Cloud, Docker & MLOps",
    duration: "24 Hours",
    hours: 24,
    category: "cloud",
    categoryLabel: "Cloud & MLOps",
    icon: "cloud",
    summary:
      "Move beyond local notebooks by wrapping AI systems in FastAPI microservices, containerizing with Docker, deploying to cloud platforms, and implementing CI/CD and observability.",
    topics: [
      "FastAPI",
      "REST APIs",
      "Containerization",
      "Docker",
      "Cloud deployment concepts",
      "Google Cloud / AWS / Azure",
      "GPU fundamentals",
      "Model serving",
      "CI/CD",
      "Monitoring and observability"
    ],
    bookletFoundations: [
      "Cloud Deployment on Free/Student Tiers: Turning local scripts into live, shareable cloud links",
      "Production Readiness: Latency tracking, token budget observability, and containerized reproducibility"
    ],
    outcome:
      "Package ML/GenAI/Agentic applications into Docker containers, expose documented FastAPI endpoints, automate testing with CI/CD, and deploy live cloud demonstrations.",
    handsOnProject:
      "Containerized FastAPI Inference & Agent Microservice deployed to cloud with CI/CD pipeline and health telemetry."
  },
  {
    id: "module-06",
    number: "MODULE 06",
    shortNumber: "06",
    title: "Industry Capstone Project",
    duration: "20 Hours",
    hours: 20,
    category: "cloud",
    categoryLabel: "Cloud & Capstone",
    icon: "rocket",
    summary:
      "Collaborate in engineering pods of 3–4 students to formulate, architect, test, deploy, and publicly demonstrate a high-impact AI solution for real Indian challenges.",
    topics: [
      "Problem formulation",
      "Application architecture",
      "End-to-end development",
      "Testing",
      "Deployment",
      "Documentation",
      "Project demonstrations"
    ],
    bookletFoundations: [
      "Team Capstone Rubric: Judged on problem clarity, working live demo, code quality, quantitative evaluation of results, and documentation",
      "Make AI Work for India: Healthcare, agriculture, education, public services, and Indian languages"
    ],
    outcome:
      "Deliver a publicly deployed, thoroughly evaluated, and cleanly documented team capstone project with an architecture blueprint and live demonstration.",
    handsOnProject:
      "Full-Stack Domain AI Capstone (Healthcare, Agriculture Vision, Enterprise RAG, or Indic Multilingual System)."
  },
  {
    id: "module-07",
    number: "MODULE 07",
    shortNumber: "07",
    title: "Career & Open-Source Readiness",
    duration: "12 Hours",
    hours: 12,
    category: "career",
    categoryLabel: "Career Skills",
    icon: "award",
    summary:
      "Transform your engineering output into verifiable career proof: a 6-repo pinned GitHub portfolio, an open-source pull request, an ATS-ready impact resume, and mock technical interviews.",
    topics: [
      "GitHub portfolio",
      "Open-source contribution",
      "Technical resume",
      "LinkedIn",
      "Technical interview practice",
      "Project storytelling"
    ],
    bookletFoundations: [
      "One Story Everywhere: Aligning Resume, GitHub, and LinkedIn so every claim links directly to verifiable proof of work",
      "The 6-Step Open-Source Pathway: From finding a 'good first issue' to opening a clean Pull Request and responding to maintainer review"
    ],
    outcome:
      "Graduate with a mentor-reviewed one-page impact resume, an optimized LinkedIn profile, a live GitHub portfolio, an open-source contribution, and technical interview readiness.",
    handsOnProject:
      "Verified Developer Portfolio Launch: 6 Pinned GitHub Repos + 1 Open-Source PR + One-Page Impact Resume + Mock Interview Defense."
  }
];

window.BAF_DATA.sixteenWeekJourney = [
  {
    phase: "WEEKS 1–4",
    title: "Stage 01: Conceptual, Python & ML Foundations",
    modulesCovered: "Modules 01 & 02 (First Half)",
    checkpoint: "GitHub Profile Live + First Evaluated ML Model",
    highlights: [
      "Master Python engineering, Git workflows, REST APIs, and AI mathematical intuition.",
      "Train and evaluate supervised/unsupervised ML models and PyTorch neural networks.",
      "Initialize professional GitHub profile and complete Red-Team Responsible AI lab."
    ]
  },
  {
    phase: "WEEKS 5–8",
    title: "Stage 02: Deep Learning, LLMs & Grounded RAG Systems",
    modulesCovered: "Module 02 (Completion) & Module 03",
    checkpoint: "Deployed Syllabus/Document RAG Assistant + Resume Workshop",
    highlights: [
      "Understand Transformer attention, token embeddings, context windows, and vector databases.",
      "Build, rerank, and evaluate a citation-backed RAG pipeline with hallucination guardrails.",
      "Complete the Before-and-After Impact Resume Workshop and 1-on-1 mentor resume review."
    ]
  },
  {
    phase: "WEEKS 9–12",
    title: "Stage 03: Agentic AI, MCP, Cloud & Open-Source Sprint",
    modulesCovered: "Modules 04 & 05",
    checkpoint: "Containerized Multi-Agent App + First Open-Source Pull Request",
    highlights: [
      "Orchestrate tool-calling AI agents using Google ADK, LangGraph, and Model Context Protocol (MCP).",
      "Practice AI-assisted software engineering (Antigravity, Copilot, Claude Code) with strict test critiques.",
      "Containerize services with FastAPI & Docker, deploy to cloud, and submit your first open-source PR."
    ]
  },
  {
    phase: "WEEKS 13–16",
    title: "Stage 04: Industry Capstone, Evaluation & Career Showcase",
    modulesCovered: "Modules 06 & 07",
    checkpoint: "Public Capstone Demo Day + Mock Technical Interviews",
    highlights: [
      "Collaborate in 3–4 member engineering pods to build and deploy an India-relevant AI capstone.",
      "Publish comprehensive README architecture diagrams, quantitative evaluation reports, and live demos.",
      "Align Resume ↔ GitHub ↔ LinkedIn ('One Story Everywhere') and defend your architecture in mock interviews."
    ]
  }
];
