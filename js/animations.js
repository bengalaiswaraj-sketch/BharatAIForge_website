/**
 * Bharat AI Forge — Scroll Animations, Counters & Parallax (js/animations.js)
 * Respects prefers-reduced-motion and pauses off-screen decorative motion.
 */

(function () {
  "use strict";

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initScrollReveals() {
    const revealElements = document.querySelectorAll(".reveal");
    if (!revealElements.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  function animateCounter(el) {
    const target = Number(el.getAttribute("data-counter-target"));
    const suffix = el.getAttribute("data-counter-suffix") || "";
    const prefix = el.getAttribute("data-counter-prefix") || "";

    if (!Number.isFinite(target)) return;

    if (prefersReducedMotion) {
      el.textContent = `${prefix}${target}${suffix}`;
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = `${prefix}${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = `${prefix}${target}${suffix}`;
      }
    }

    requestAnimationFrame(tick);
  }

  function initStatCounters() {
    const counters = document.querySelectorAll("[data-counter-target]");
    if (!counters.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      counters.forEach(animateCounter);
      return;
    }

    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    counters.forEach((el) => counterObserver.observe(el));
  }

  function initHeroParallax() {
    if (prefersReducedMotion) return;
    const heroSection = document.getElementById("home");
    const heroCard = document.getElementById("hero-parallax-card");
    if (!heroSection || !heroCard) return;

    heroSection.addEventListener("pointermove", (e) => {
      if (window.innerWidth < 1024) return;
      const rect = heroSection.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      const moveX = (relX * 10).toFixed(2);
      const moveY = (relY * 8).toFixed(2);
      heroCard.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });

    heroSection.addEventListener("pointerleave", () => {
      heroCard.style.transform = "translate3d(0, 0, 0)";
    });
  }

  function initOffscreenAnimationPause() {
    if (!("IntersectionObserver" in window)) return;
    const animatedSections = document.querySelectorAll("[data-animated-section]");
    if (!animatedSections.length) return;

    const pauseObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("offscreen-paused", !entry.isIntersecting);
        });
      },
      { threshold: 0.02 }
    );

    animatedSections.forEach((sec) => pauseObserver.observe(sec));
  }

  window.BAF_ANIMATIONS = {
    init: function () {
      initScrollReveals();
      initStatCounters();
      initHeroParallax();
      initOffscreenAnimationPause();
    }
  };
})();
