/**
 * Bharat AI Forge — Interactive 160-Hour Curriculum Explorer (js/curriculum.js)
 * Renders the 7-module roadmap, category filter tabs, active module indicators,
 * and accessible expand/collapse panels.
 */

(function () {
  "use strict";

  let activeCategory = "all";
  const expandedModuleIds = new Set(["module-01", "module-03", "module-04"]);

  function createModuleCardHTML(mod) {
    const isExpanded = expandedModuleIds.has(mod.id);
    const bodyId = `${mod.id}-body`;
    const btnId = `${mod.id}-trigger`;

    const topicsHTML = (mod.topics || [])
      .map((topic) => `<span class="topic-chip">${topic}</span>`)
      .join("");

    const foundationsHTML = (mod.bookletFoundations || [])
      .map((item) => `<li style="margin-bottom: 0.35rem;">• ${item}</li>`)
      .join("");

    return `
      <article class="module-card ${isExpanded ? "is-expanded" : ""}" data-module-id="${mod.id}" data-category="${mod.category}">
        <h3>
          <button
            type="button"
            id="${btnId}"
            class="module-card__trigger"
            aria-expanded="${isExpanded ? "true" : "false"}"
            aria-controls="${bodyId}"
          >
            <span class="module-card__left">
              <span class="module-badge-num">${mod.number}</span>
              <span class="module-card__title">${mod.title}</span>
              <span class="tag">${mod.categoryLabel}</span>
            </span>
            <span class="module-card__meta">
              <span class="module-duration-pill">${mod.duration}</span>
              <span class="module-chevron" aria-hidden="true">▼</span>
            </span>
          </button>
        </h3>
        <div
          id="${bodyId}"
          class="module-card__body"
          role="region"
          aria-labelledby="${btnId}"
          ${isExpanded ? "" : "hidden"}
        >
          <p style="margin-top: 1rem; color: var(--color-text-muted-light); font-size: 0.96rem;">
            ${mod.summary}
          </p>
          <div class="module-body-grid">
            <div>
              <h4 style="font-family: var(--font-heading); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-secondary-navy);">
                Core Technical Topics (${mod.topics.length})
              </h4>
              <div class="topic-chip-list">
                ${topicsHTML}
              </div>
              <div style="margin-top: 1.15rem; font-size: 0.84rem; color: var(--color-text-muted-light);">
                <strong style="color: var(--color-text-dark); display: block; margin-bottom: 0.25rem;">Booklet Conceptual &amp; Lab Focus:</strong>
                <ul>${foundationsHTML}</ul>
              </div>
            </div>
            <div class="module-outcome-box">
              <div style="margin-bottom: 0.9rem;">
                <strong style="font-family: var(--font-mono); font-size: 0.74rem; text-transform: uppercase; color: #0369A1; display: block; margin-bottom: 0.25rem;">
                  Learning Outcome
                </strong>
                <p style="font-size: 0.88rem; color: var(--color-text-dark);">
                  ${mod.outcome}
                </p>
              </div>
              <div style="padding-top: 0.8rem; border-top: 1px solid #BAE6FD;">
                <strong style="font-family: var(--font-mono); font-size: 0.74rem; text-transform: uppercase; color: #0F766E; display: block; margin-bottom: 0.25rem;">
                  Suggested Hands-On Deliverable
                </strong>
                <p style="font-size: 0.88rem; font-weight: 600; color: var(--color-secondary-navy);">
                  ${mod.handsOnProject}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function renderCurriculumList() {
    const listContainer = document.getElementById("curriculum-modules-container");
    const countLabel = document.getElementById("curriculum-filtered-summary");
    if (!listContainer || !window.BAF_DATA || !window.BAF_DATA.curriculumModules) return;

    const allModules = window.BAF_DATA.curriculumModules;
    const filtered =
      activeCategory === "all"
        ? allModules
        : allModules.filter((m) => m.category === activeCategory);

    const totalHours = filtered.reduce((acc, m) => acc + (m.hours || 0), 0);

    if (countLabel) {
      countLabel.textContent = `Showing ${filtered.length} of ${allModules.length} Modules (${totalHours} Learning Hours) • Total Program: 160 Hours`;
    }

    listContainer.innerHTML = filtered.map(createModuleCardHTML).join("");
  }

  function initCurriculumExplorer() {
    const tabsContainer = document.getElementById("curriculum-filter-tabs");
    const listContainer = document.getElementById("curriculum-modules-container");
    const expandAllBtn = document.getElementById("curriculum-expand-all-btn");

    if (!tabsContainer || !listContainer) return;

    // Render Category Tabs
    const categories = (window.BAF_DATA && window.BAF_DATA.curriculumCategories) || [];
    tabsContainer.innerHTML = categories
      .map(
        (cat) => `
        <button
          type="button"
          class="filter-tab-btn ${cat.id === activeCategory ? "is-active" : ""}"
          data-cur-category="${cat.id}"
          aria-pressed="${cat.id === activeCategory ? "true" : "false"}"
        >
          ${cat.label}
        </button>
      `
      )
      .join("");

    renderCurriculumList();

    // Event Delegation for Filter Tabs
    tabsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-cur-category]");
      if (!btn) return;
      activeCategory = btn.getAttribute("data-cur-category") || "all";

      tabsContainer.querySelectorAll("[data-cur-category]").forEach((el) => {
        const isCurrent = el.getAttribute("data-cur-category") === activeCategory;
        el.classList.toggle("is-active", isCurrent);
        el.setAttribute("aria-pressed", isCurrent ? "true" : "false");
      });

      renderCurriculumList();
    });

    // Event Delegation for Module Accordion Toggle
    listContainer.addEventListener("click", (e) => {
      const trigger = e.target.closest(".module-card__trigger");
      if (!trigger) return;
      const card = trigger.closest(".module-card");
      if (!card) return;

      const modId = card.getAttribute("data-module-id");
      const bodyEl = card.querySelector(".module-card__body");
      const isNowExpanded = !card.classList.contains("is-expanded");

      card.classList.toggle("is-expanded", isNowExpanded);
      trigger.setAttribute("aria-expanded", isNowExpanded ? "true" : "false");
      if (bodyEl) {
        bodyEl.hidden = !isNowExpanded;
      }

      if (modId) {
        if (isNowExpanded) {
          expandedModuleIds.add(modId);
        } else {
          expandedModuleIds.delete(modId);
        }
      }
    });

    // Expand / Collapse All button
    if (expandAllBtn) {
      expandAllBtn.addEventListener("click", () => {
        const allModules = (window.BAF_DATA && window.BAF_DATA.curriculumModules) || [];
        const allExpanded = expandedModuleIds.size === allModules.length;
        if (allExpanded) {
          expandedModuleIds.clear();
          expandAllBtn.textContent = "Expand All Modules";
        } else {
          allModules.forEach((m) => expandedModuleIds.add(m.id));
          expandAllBtn.textContent = "Collapse All Modules";
        }
        renderCurriculumList();
      });
    }
  }

  window.BAF_CURRICULUM = {
    init: initCurriculumExplorer
  };
})();
