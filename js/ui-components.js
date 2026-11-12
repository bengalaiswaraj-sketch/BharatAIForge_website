/**
 * Bharat AI Forge — Interactive UI Components (js/ui-components.js)
 * Powers the 6-Pillar Radial Network, Project Showcase Gallery & Modal,
 * GitHub Portfolio Simulator, and Accessible FAQ Accordion.
 */

(function () {
  "use strict";

  let lastFocusedTrigger = null;

  /* ========================================================================
     1. SIX-PILLAR RADIAL NETWORK EXPLORER (SECTION 5)
     ======================================================================== */
  function initPillarsExplorer() {
    const grid = document.getElementById("pillars-interactive-grid");
    const detailPanel = document.getElementById("pillar-detail-panel");
    if (!grid || !detailPanel || !window.BAF_DATA || !window.BAF_DATA.forgePillars) return;

    const pillars = window.BAF_DATA.forgePillars;
    let activePillarId = pillars[0].id;

    function renderPillarDetail(pillar) {
      const keywordsHTML = (pillar.keywords || [])
        .map((kw) => `<span class="tag">${kw}</span>`)
        .join("");

      detailPanel.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
          <span class="tag tag--gold">PILLAR ${pillar.number} OF 06</span>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-electric-cyan);">
            BHARAT AI FORGE CORE
          </span>
        </div>
        <h3 style="font-family: var(--font-heading); font-size: var(--text-2xl); font-weight: 800; color: var(--color-white); margin-bottom: 0.65rem;">
          ${pillar.title}
        </h3>
        <p style="font-size: 1rem; color: var(--color-electric-cyan); font-weight: 600; margin-bottom: 0.9rem;">
          ${pillar.shortDesc}
        </p>
        <p style="font-size: 0.95rem; color: var(--color-text-muted-dark); line-height: 1.7; margin-bottom: 1.35rem;">
          ${pillar.expandedDesc}
        </p>
        <div>
          <strong style="display: block; font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-text-subtle-dark); margin-bottom: 0.55rem;">
            Key Competencies &amp; Stack
          </strong>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${keywordsHTML}
          </div>
        </div>
      `;
    }

    function renderPillarsGrid() {
      grid.innerHTML = pillars
        .map((p) => {
          const isActive = p.id === activePillarId;
          return `
            <button
              type="button"
              class="pillar-node-btn ${isActive ? "is-active" : ""}"
              data-pillar-id="${p.id}"
              aria-expanded="${isActive ? "true" : "false"}"
              aria-controls="pillar-detail-panel"
            >
              <span class="pillar-node-btn__num">PILLAR ${p.number}</span>
              <span class="pillar-node-btn__title">${p.title}</span>
              <span class="pillar-node-btn__short">${p.shortDesc}</span>
            </button>
          `;
        })
        .join("");
    }

    renderPillarsGrid();
    renderPillarDetail(pillars[0]);

    grid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-pillar-id]");
      if (!btn) return;
      const selectedId = btn.getAttribute("data-pillar-id");
      const found = pillars.find((p) => p.id === selectedId);
      if (!found) return;

      activePillarId = found.id;
      grid.querySelectorAll("[data-pillar-id]").forEach((el) => {
        const isCurrent = el.getAttribute("data-pillar-id") === activePillarId;
        el.classList.toggle("is-active", isCurrent);
        el.setAttribute("aria-expanded", isCurrent ? "true" : "false");
      });
      renderPillarDetail(found);
    });
  }

  /* ========================================================================
     2. PROJECT SHOWCASE GALLERY & ACCESSIBLE MODAL (SECTION 8)
     ======================================================================== */
  function initProjectsShowcase() {
    const filterContainer = document.getElementById("projects-filter-tabs");
    const gridContainer = document.getElementById("projects-showcase-grid");
    const modalBackdrop = document.getElementById("project-detail-modal");
    const modalCloseBtn = document.getElementById("project-modal-close");
    const modalContent = document.getElementById("project-modal-body");
    const modalTitle = document.getElementById("project-modal-title");
    const modalCtaBtn = document.getElementById("project-modal-register-cta");

    if (!gridContainer || !window.BAF_DATA || !window.BAF_DATA.projectsShowcase) return;

    const projects = window.BAF_DATA.projectsShowcase;
    let activeFilter = "all";

    function renderProjects() {
      const list =
        activeFilter === "all"
          ? projects
          : projects.filter((p) => p.category === activeFilter);

      gridContainer.innerHTML = list
        .map((proj) => {
          const techTags = (proj.technologies || [])
            .map((t) => `<span class="tag">${t}</span>`)
            .join("");

          const deliverablesList = (proj.deliverables || [])
            .map((d) => `<li>${d}</li>`)
            .join("");

          return `
            <article class="card-dark project-card" data-project-id="${proj.id}">
              <div>
                <div class="project-card__top-meta">
                  <span class="tag">${proj.categoryLabel}</span>
                  <span class="tag tag--gold">${proj.difficulty}</span>
                </div>
                <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--color-text-subtle-dark); margin-bottom: 0.25rem;">
                  SAMPLE TRACK ${proj.number}
                </div>
                <h3 class="project-card__title">${proj.title}</h3>
                <p style="font-size: 0.88rem; color: var(--color-text-muted-dark); line-height: 1.6;">
                  ${proj.problemStatement}
                </p>
                <div class="project-card__tech-list" aria-label="Core AI technologies">
                  ${techTags}
                </div>
                <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--color-electric-cyan); text-transform: uppercase; margin-bottom: 0.35rem;">
                  Expected Deliverables:
                </div>
                <ul class="project-card__deliverables" style="color: var(--color-text-muted-dark);">
                  ${deliverablesList}
                </ul>
              </div>
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                style="width: 100%; margin-top: 0.5rem;"
                data-open-project="${proj.id}"
              >
                <span>View Architecture &amp; Details</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </article>
          `;
        })
        .join("");
    }

    function openProjectModal(projId, triggerButton) {
      const proj = projects.find((p) => p.id === projId);
      if (!proj || !modalBackdrop || !modalContent || !modalTitle) return;

      lastFocusedTrigger = triggerButton || document.activeElement;
      modalTitle.textContent = `${proj.number}. ${proj.title}`;

      const d = proj.modalDetails || {};
      const techTags = (proj.technologies || [])
        .map((t) => `<span class="tag">${t}</span>`)
        .join("");

      modalContent.innerHTML = `
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.25rem;">
          <span class="tag">${proj.categoryLabel}</span>
          <span class="tag tag--gold">Difficulty: ${proj.difficulty}</span>
          <span class="tag">Sample Capstone Track</span>
        </div>
        <div style="display: grid; gap: 1.15rem; font-size: 0.94rem; line-height: 1.65;">
          <div style="background: rgba(16, 42, 67, 0.55); border: 1px solid rgba(54, 217, 255, 0.2); border-radius: 12px; padding: 1.1rem;">
            <strong style="color: var(--color-electric-cyan); font-family: var(--font-mono); font-size: 0.76rem; text-transform: uppercase; display: block; margin-bottom: 0.3rem;">
              1. The Engineering Problem
            </strong>
            <p style="color: var(--color-text-muted-dark);">${d.problem || proj.problemStatement}</p>
          </div>
          <div style="background: rgba(16, 42, 67, 0.55); border: 1px solid rgba(54, 217, 255, 0.2); border-radius: 12px; padding: 1.1rem;">
            <strong style="color: var(--color-ai-teal); font-family: var(--font-mono); font-size: 0.76rem; text-transform: uppercase; display: block; margin-bottom: 0.3rem;">
              2. What Students Build
            </strong>
            <p style="color: var(--color-text-muted-dark);">${d.whatStudentsBuild || ""}</p>
          </div>
          <div style="background: rgba(16, 42, 67, 0.55); border: 1px solid rgba(54, 217, 255, 0.2); border-radius: 12px; padding: 1.1rem;">
            <strong style="color: var(--color-accent-gold); font-family: var(--font-mono); font-size: 0.76rem; text-transform: uppercase; display: block; margin-bottom: 0.3rem;">
              3. Technical Architecture &amp; Stack
            </strong>
            <p style="color: var(--color-text-muted-dark); margin-bottom: 0.75rem;">${d.technicalApproach || ""}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">${techTags}</div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
            <div style="background: rgba(7, 20, 38, 0.8); border: 1px solid rgba(54, 217, 255, 0.18); border-radius: 12px; padding: 1rem;">
              <strong style="color: var(--color-white); font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; display: block; margin-bottom: 0.3rem;">
                4. Evaluation &amp; Guardrails
              </strong>
              <p style="color: var(--color-text-muted-dark); font-size: 0.86rem;">${d.evaluation || ""}</p>
            </div>
            <div style="background: rgba(7, 20, 38, 0.8); border: 1px solid rgba(54, 217, 255, 0.18); border-radius: 12px; padding: 1rem;">
              <strong style="color: var(--color-white); font-family: var(--font-mono); font-size: 0.75rem; text-transform: uppercase; display: block; margin-bottom: 0.3rem;">
                5. GitHub Portfolio Showcase
              </strong>
              <p style="color: var(--color-text-muted-dark); font-size: 0.86rem;">${d.githubShowcase || ""}</p>
            </div>
          </div>
        </div>
      `;

      modalBackdrop.classList.add("is-open");
      modalBackdrop.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";

      if (modalCloseBtn) {
        modalCloseBtn.focus();
      }
    }

    function closeProjectModal() {
      if (!modalBackdrop) return;
      modalBackdrop.classList.remove("is-open");
      modalBackdrop.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
        lastFocusedTrigger.focus();
      }
    }

    renderProjects();

    if (filterContainer) {
      filterContainer.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-proj-filter]");
        if (!btn) return;
        activeFilter = btn.getAttribute("data-proj-filter") || "all";

        filterContainer.querySelectorAll("[data-proj-filter]").forEach((el) => {
          const isCurrent = el.getAttribute("data-proj-filter") === activeFilter;
          el.classList.toggle("is-active", isCurrent);
          el.setAttribute("aria-pressed", isCurrent ? "true" : "false");
        });

        renderProjects();
      });
    }

    gridContainer.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-open-project]");
      if (!btn) return;
      const projId = btn.getAttribute("data-open-project");
      openProjectModal(projId, btn);
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", closeProjectModal);
    }

    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) {
          closeProjectModal();
        }
      });
    }

    if (modalCtaBtn) {
      modalCtaBtn.addEventListener("click", () => {
        closeProjectModal();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalBackdrop && modalBackdrop.classList.contains("is-open")) {
        closeProjectModal();
      }
    });
  }

  /* ========================================================================
     3. GITHUB PORTFOLIO SIMULATOR HOTSPOTS (SECTION 9)
     ======================================================================== */
  function initGitHubSimulator() {
    const hotspotGroup = document.getElementById("github-hotspot-buttons");
    const guidancePanel = document.getElementById("github-guidance-panel");
    if (!hotspotGroup || !guidancePanel || !window.BAF_DATA || !window.BAF_DATA.githubHotspots) return;

    const hotspots = window.BAF_DATA.githubHotspots;
    let activeHotspotId = hotspots[0].id;

    function renderGuidance(item) {
      const listHTML = (item.checklist || [])
        .map(
          (point) => `
          <li style="display: flex; align-items: flex-start; gap: 0.65rem; margin-bottom: 0.75rem;">
            <span style="color: var(--color-ai-teal); font-weight: 800;">✓</span>
            <span style="color: var(--color-text-muted-dark); font-size: 0.92rem;">${point}</span>
          </li>
        `
        )
        .join("");

      guidancePanel.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem;">
          <span class="tag tag--gold">${item.badge}</span>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--color-electric-cyan);">
            PORTFOLIO PLAYBOOK
          </span>
        </div>
        <h3 style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800; color: var(--color-white); margin-bottom: 0.5rem;">
          ${item.title}
        </h3>
        <p style="font-size: 0.94rem; color: var(--color-electric-cyan); margin-bottom: 1.15rem;">
          ${item.summary}
        </p>
        <ul style="margin-bottom: 1.25rem;">
          ${listHTML}
        </ul>
        <div style="padding: 0.9rem 1rem; border-radius: 10px; background: rgba(7, 20, 38, 0.75); border: 1px solid rgba(54, 217, 255, 0.2); font-size: 0.82rem; color: var(--color-text-muted-dark);">
          <strong style="color: var(--color-accent-gold);">Booklet Milestone Goal:</strong> Every graduate leaves with a live GitHub portfolio of deployed AI projects, an open-source contribution, a mentor-reviewed resume, and an optimized LinkedIn profile.
        </div>
      `;
    }

    hotspotGroup.innerHTML = hotspots
      .map((h) => {
        const isCurrent = h.id === activeHotspotId;
        return `
          <button
            type="button"
            class="github-hotspot-btn ${isCurrent ? "is-active" : ""}"
            data-gh-hotspot="${h.id}"
            aria-pressed="${isCurrent ? "true" : "false"}"
          >
            <strong style="display: block; font-size: 0.84rem; color: var(--color-electric-cyan); margin-bottom: 0.2rem;">
              ${h.title}
            </strong>
            <span style="font-size: 0.76rem; color: var(--color-text-muted-dark);">
              Click to inspect guidance →
            </span>
          </button>
        `;
      })
      .join("");

    renderGuidance(hotspots[0]);

    hotspotGroup.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-gh-hotspot]");
      if (!btn) return;
      const targetId = btn.getAttribute("data-gh-hotspot");
      const found = hotspots.find((h) => h.id === targetId);
      if (!found) return;

      activeHotspotId = found.id;
      hotspotGroup.querySelectorAll("[data-gh-hotspot]").forEach((el) => {
        const isCurrent = el.getAttribute("data-gh-hotspot") === activeHotspotId;
        el.classList.toggle("is-active", isCurrent);
        el.setAttribute("aria-pressed", isCurrent ? "true" : "false");
      });
      renderGuidance(found);
    });
  }

  /* ========================================================================
     4. ACCESSIBLE FAQ ACCORDION (SECTION 13)
     ======================================================================== */
  function initFaqAccordion() {
    const faqContainer = document.getElementById("faq-accordion-list");
    const faqFilterTabs = document.getElementById("faq-filter-tabs");
    if (!faqContainer || !window.BAF_DATA || !window.BAF_DATA.faqItems) return;

    const allFaqs = window.BAF_DATA.faqItems;
    let activeFaqCategory = "all";
    const openFaqIds = new Set(["faq-01", "faq-05"]);

    function renderFaqs() {
      const filtered =
        activeFaqCategory === "all"
          ? allFaqs
          : allFaqs.filter((item) => item.category === activeFaqCategory);

      faqContainer.innerHTML = filtered
        .map((item) => {
          const isOpen = openFaqIds.has(item.id);
          const panelId = `${item.id}-panel`;
          const triggerId = `${item.id}-trigger`;
          return `
            <div class="faq-item" data-faq-id="${item.id}">
              <h3>
                <button
                  type="button"
                  id="${triggerId}"
                  class="faq-trigger"
                  aria-expanded="${isOpen ? "true" : "false"}"
                  aria-controls="${panelId}"
                >
                  <span>${item.question}</span>
                  <span class="module-chevron" aria-hidden="true" style="transform: ${isOpen ? "rotate(180deg)" : "none"};">
                    ▼
                  </span>
                </button>
              </h3>
              <div
                id="${panelId}"
                class="faq-panel"
                role="region"
                aria-labelledby="${triggerId}"
                ${isOpen ? "" : "hidden"}
              >
                <p>${item.answer}</p>
              </div>
            </div>
          `;
        })
        .join("");
    }

    renderFaqs();

    faqContainer.addEventListener("click", (e) => {
      const trigger = e.target.closest(".faq-trigger");
      if (!trigger) return;
      const itemEl = trigger.closest(".faq-item");
      if (!itemEl) return;

      const faqId = itemEl.getAttribute("data-faq-id");
      const panel = itemEl.querySelector(".faq-panel");
      const chevron = trigger.querySelector(".module-chevron");
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      const nextState = !isExpanded;

      trigger.setAttribute("aria-expanded", nextState ? "true" : "false");
      if (panel) panel.hidden = !nextState;
      if (chevron) chevron.style.transform = nextState ? "rotate(180deg)" : "none";

      if (faqId) {
        if (nextState) {
          openFaqIds.add(faqId);
        } else {
          openFaqIds.delete(faqId);
        }
      }
    });

    if (faqFilterTabs) {
      faqFilterTabs.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-faq-cat]");
        if (!btn) return;
        activeFaqCategory = btn.getAttribute("data-faq-cat") || "all";

        faqFilterTabs.querySelectorAll("[data-faq-cat]").forEach((el) => {
          const isCurrent = el.getAttribute("data-faq-cat") === activeFaqCategory;
          el.classList.toggle("is-active", isCurrent);
          el.setAttribute("aria-pressed", isCurrent ? "true" : "false");
        });

        renderFaqs();
      });
    }
  }

  window.BAF_UI = {
    initPillarsExplorer: initPillarsExplorer,
    initProjectsShowcase: initProjectsShowcase,
    initGitHubSimulator: initGitHubSimulator,
    initFaqAccordion: initFaqAccordion
  };
})();
