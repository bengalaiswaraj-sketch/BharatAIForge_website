/**
 * Bharat AI Forge — Main Application Controller (js/main.js)
 * Coordinates Navigation, Active-Section Highlighting, Mobile Menu,
 * Floating CTA, Back-to-Top, and Interactive Section Modules.
 */

(function () {
  "use strict";

  function initNavigationAndScroll() {
    const header = document.getElementById("site-header");
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const navLinksContainer = document.getElementById("primary-nav-links");
    const navLinks = document.querySelectorAll(".nav-link[href^='#']");
    const floatingBar = document.getElementById("floating-action-bar");
    const backToTopBtn = document.getElementById("back-to-top-btn");

    function closeMobileMenu() {
      if (!navLinksContainer || !mobileToggle) return;
      navLinksContainer.classList.remove("is-open");
      mobileToggle.setAttribute("aria-expanded", "false");
    }

    if (mobileToggle && navLinksContainer) {
      mobileToggle.addEventListener("click", () => {
        const isOpen = navLinksContainer.classList.toggle("is-open");
        mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      navLinksContainer.addEventListener("click", (e) => {
        if (e.target.closest("a")) {
          closeMobileMenu();
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navLinksContainer.classList.contains("is-open")) {
          closeMobileMenu();
          mobileToggle.focus();
        }
      });
    }

    function handleWindowScroll() {
      const y = window.scrollY || window.pageYOffset;
      if (header) {
        header.classList.toggle("is-scrolled", y > 36);
      }
      if (floatingBar) {
        floatingBar.classList.toggle("is-visible", y > 680);
      }
    }

    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    handleWindowScroll();

    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Active-section highlighting via IntersectionObserver
    if ("IntersectionObserver" in window && navLinks.length) {
      const trackedSections = Array.from(navLinks)
        .map((link) => {
          const id = (link.getAttribute("href") || "").replace("#", "");
          return document.getElementById(id);
        })
        .filter(Boolean);

      const spyObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const activeId = entry.target.id;
              navLinks.forEach((link) => {
                const match = link.getAttribute("href") === `#${activeId}`;
                link.classList.toggle("is-active", match);
                if (match) {
                  link.setAttribute("aria-current", "page");
                } else {
                  link.removeAttribute("aria-current");
                }
              });
            }
          });
        },
        {
          rootMargin: "-28% 0px -60% 0px",
          threshold: 0
        }
      );

      trackedSections.forEach((sec) => spyObserver.observe(sec));
    }
  }

  function initRegistrationTriggers() {
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-open-registration]");
      if (!trigger) return;

      const requestedMode = trigger.getAttribute("data-open-registration") || "registration";
      const requestedCategory = trigger.getAttribute("data-question-category") || "";

      if (window.BAF_REGISTRATION && typeof window.BAF_REGISTRATION.setMode === "function") {
        window.BAF_REGISTRATION.setMode(requestedMode, requestedCategory);
      }

      const registerSection = document.getElementById("register");
      if (registerSection) {
        e.preventDefault();
        registerSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          const firstInput = document.getElementById("reg-first-name");
          if (firstInput) firstInput.focus({ preventScroll: true });
        }, 450);
      }
    });
  }

  function initFooterYear() {
    const yearEl = document.getElementById("current-copyright-year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNavigationAndScroll();
    initRegistrationTriggers();
    initFooterYear();

    if (window.BAF_CURRICULUM && typeof window.BAF_CURRICULUM.init === "function") {
      window.BAF_CURRICULUM.init();
    }

    if (window.BAF_UI) {
      window.BAF_UI.initPillarsExplorer();
      window.BAF_UI.initProjectsShowcase();
      window.BAF_UI.initGitHubSimulator();
      window.BAF_UI.initFaqAccordion();
    }

    if (window.BAF_REGISTRATION && typeof window.BAF_REGISTRATION.init === "function") {
      window.BAF_REGISTRATION.init();
    }

    if (window.BAF_ANIMATIONS && typeof window.BAF_ANIMATIONS.init === "function") {
      window.BAF_ANIMATIONS.init();
    }
  });
})();
