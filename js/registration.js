/**
 * Bharat AI Forge — Registration & Inquiry API Module (js/registration.js)
 * Handles Mode A (Register Your Interest) and Mode B (Ask a Question),
 * client-side validation, +91 phone normalization, structured description encoding,
 * and HTTPS POST submission to the Cloud Run endpoint.
 */

(function () {
  "use strict";

  const API_URL =
    (window.BAF_CONFIG && window.BAF_CONFIG.API_URL) ||
    "https://bharatai-forge-api-679998727179.asia-south1.run.app/register";

  let currentMode = "registration"; // "registration" | "inquiry"
  let isSubmitting = false;

  /**
   * Normalize standard Indian 10-digit mobile numbers to +91XXXXXXXXXX,
   * while supporting explicitly entered valid international E.164 numbers.
   */
  function normalizePhoneNumber(rawInput) {
    if (!rawInput || typeof rawInput !== "string") {
      return { valid: false, normalized: "" };
    }

    // Strip spaces, hyphens, parentheses
    const cleaned = rawInput.replace(/[\s\-().]/g, "").trim();

    // Case 1: Standard 10-digit Indian mobile number starting with 6, 7, 8, or 9
    if (/^[6-9]\d{9}$/.test(cleaned)) {
      return { valid: true, normalized: "+91" + cleaned };
    }

    // Case 2: 11-digit starting with 0 followed by valid Indian 10-digit mobile
    if (/^0[6-9]\d{9}$/.test(cleaned)) {
      return { valid: true, normalized: "+91" + cleaned.slice(1) };
    }

    // Case 3: 12-digit starting with 91 followed by valid Indian 10-digit mobile
    if (/^91[6-9]\d{9}$/.test(cleaned)) {
      return { valid: true, normalized: "+" + cleaned };
    }

    // Case 4: Explicit +91 followed by 10 digits
    if (/^\+91[6-9]\d{9}$/.test(cleaned)) {
      return { valid: true, normalized: cleaned };
    }

    // Case 5: Explicitly entered international number (+ followed by 8 to 15 digits)
    if (/^\+[1-9]\d{7,14}$/.test(cleaned)) {
      return { valid: true, normalized: cleaned };
    }

    return { valid: false, normalized: "" };
  }

  /**
   * Build the structured, human-readable description field for the backend API
   * without introducing unsupported top-level JSON parameters.
   */
  function buildStructuredDescription(mode, selectedInterests, questionCategory, freeTextMessage, gradYearNum) {
    const cleanText = (freeTextMessage || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 1000);

    const gradPart = gradYearNum ? "Graduation Year: " + gradYearNum : "";

    if (mode === "inquiry") {
      const category = (questionCategory || "General").trim();
      const inquiryParts = [
        "Submission Type: Program Inquiry",
        gradPart,
        "Question Category: " + category,
        "Question: " + cleanText
      ].filter(Boolean);
      return inquiryParts.join(" | ").slice(0, 1800);
    }

    const interestsStr = (selectedInterests || []).join(", ");
    const parts = [
      "Submission Type: Program Registration",
      gradPart,
      "Interested In: " + interestsStr
    ].filter(Boolean);
    if (cleanText) {
      parts.push("Question: " + cleanText);
    }
    return parts.join(" | ").slice(0, 1800);
  }

  /**
   * Submit payload to the official Cloud Run registration endpoint (or local mock adapter when ?mock=1)
   */
  async function submitRegistration(formData) {
    if (window.BAF_CONFIG && window.BAF_CONFIG.isMockMode()) {
      await new Promise((resolve) => setTimeout(resolve, 650));
      return {
        status: "mock_success",
        message: "Mock mode active (?mock=1): Validated payload ready without network transmission."
      };
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const contentType = response.headers.get("content-type") || "";
    let result;

    if (contentType.includes("application/json")) {
      result = await response.json();
    } else {
      result = await response.text();
    }

    if (!response.ok) {
      const errorDetail =
        result && typeof result === "object" && (result.detail || result.message)
          ? String(result.detail || result.message)
          : "Registration could not be completed. Please verify your details and try again.";
      throw new Error(errorDetail);
    }

    return result;
  }

  /**
   * Helper to show or clear field-level validation messages safely via textContent
   */
  function setFieldError(inputId, errorId, message) {
    const inputEl = document.getElementById(inputId);
    const errorEl = document.getElementById(errorId);
    if (inputEl) {
      if (message) {
        inputEl.classList.add("is-invalid");
        inputEl.setAttribute("aria-invalid", "true");
      } else {
        inputEl.classList.remove("is-invalid");
        inputEl.removeAttribute("aria-invalid");
      }
    }
    if (errorEl) {
      errorEl.textContent = message || "";
    }
  }

  function clearAllErrors() {
    const pairs = [
      ["reg-first-name", "err-first-name"],
      ["reg-last-name", "err-last-name"],
      ["reg-email", "err-email"],
      ["reg-mobile", "err-mobile"],
      ["reg-institute", "err-institute"],
      ["reg-grad-year", "err-grad-year"],
      ["reg-question-category", "err-question-category"],
      ["reg-message", "err-message"],
      ["reg-consent", "err-consent"]
    ];
    pairs.forEach(([inId, errId]) => setFieldError(inId, errId, ""));
    const interestsErr = document.getElementById("err-interests");
    if (interestsErr) interestsErr.textContent = "";
  }

  /**
   * Switch between Mode A (Registration) and Mode B (Ask a Question)
   */
  function setFormMode(mode, preselectCategory) {
    currentMode = mode === "inquiry" ? "inquiry" : "registration";

    const tabReg = document.getElementById("tab-mode-registration");
    const tabInq = document.getElementById("tab-mode-inquiry");
    const interestsBlock = document.getElementById("block-program-interests");
    const categoryBlock = document.getElementById("block-question-category");
    const messageLabel = document.getElementById("label-message-text");
    const messageInput = document.getElementById("reg-message");
    const submitBtnText = document.getElementById("submit-btn-text");
    const statusBanner = document.getElementById("form-status-banner");

    if (statusBanner) {
      statusBanner.hidden = true;
    }
    clearAllErrors();

    if (currentMode === "registration") {
      if (tabReg) {
        tabReg.classList.add("is-active");
        tabReg.setAttribute("aria-selected", "true");
      }
      if (tabInq) {
        tabInq.classList.remove("is-active");
        tabInq.setAttribute("aria-selected", "false");
      }
      if (interestsBlock) interestsBlock.hidden = false;
      if (categoryBlock) categoryBlock.hidden = true;
      if (messageLabel) {
        messageLabel.innerHTML = 'Additional Question / Message <span style="color: var(--color-text-subtle-dark); font-weight: 400;">(Optional)</span>';
      }
      if (messageInput) {
        messageInput.placeholder = "Optional: Share your current branch, society, or any specific question about upcoming cohorts...";
        messageInput.removeAttribute("required");
      }
      if (submitBtnText) {
        submitBtnText.textContent = "REGISTER YOUR INTEREST";
      }
    } else {
      if (tabReg) {
        tabReg.classList.remove("is-active");
        tabReg.setAttribute("aria-selected", "false");
      }
      if (tabInq) {
        tabInq.classList.add("is-active");
        tabInq.setAttribute("aria-selected", "true");
      }
      if (interestsBlock) interestsBlock.hidden = true;
      if (categoryBlock) categoryBlock.hidden = false;
      if (preselectCategory) {
        const catSelect = document.getElementById("reg-question-category");
        if (catSelect) catSelect.value = preselectCategory;
      }
      if (messageLabel) {
        messageLabel.innerHTML = 'Your Question <span class="req" aria-hidden="true">*</span>';
      }
      if (messageInput) {
        messageInput.placeholder = "Write your question regarding curriculum, schedule, eligibility, or college partnership...";
        messageInput.setAttribute("required", "required");
      }
      if (submitBtnText) {
        submitBtnText.textContent = "SUBMIT YOUR QUESTION";
      }
    }
  }

  /**
   * Validate all fields according to strict submission rules
   */
  function validateAndBuildPayload() {
    clearAllErrors();
    let isValid = true;

    const firstName = (document.getElementById("reg-first-name")?.value || "").trim();
    const lastName = (document.getElementById("reg-last-name")?.value || "").trim();
    const email = (document.getElementById("reg-email")?.value || "").trim();
    const mobileRaw = (document.getElementById("reg-mobile")?.value || "").trim();
    const institute = (document.getElementById("reg-institute")?.value || "").trim();
    const gradYearRaw = (document.getElementById("reg-grad-year")?.value || "").trim();
    const questionCategory = (document.getElementById("reg-question-category")?.value || "").trim();
    const message = (document.getElementById("reg-message")?.value || "").trim();
    const consentChecked = Boolean(document.getElementById("reg-consent")?.checked);

    if (!firstName || firstName.length < 2) {
      setFieldError("reg-first-name", "err-first-name", "Please enter your first name (at least 2 characters).");
      isValid = false;
    }

    if (!lastName || lastName.length < 1) {
      setFieldError("reg-last-name", "err-last-name", "Please enter your last name.");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      setFieldError("reg-email", "err-email", "Please enter a valid email address (e.g., name@college.edu.in).");
      isValid = false;
    }

    const phoneResult = normalizePhoneNumber(mobileRaw);
    if (!phoneResult.valid) {
      setFieldError(
        "reg-mobile",
        "err-mobile",
        "Enter a valid 10-digit Indian mobile number (auto-normalized to +91) or international number with +country code."
      );
      isValid = false;
    }

    if (!institute || institute.length < 3) {
      setFieldError("reg-institute", "err-institute", "Please enter your full institute or college name.");
      isValid = false;
    }

    const gradYearNum = Number(gradYearRaw);
    const minYear = (window.BAF_CONFIG && window.BAF_CONFIG.validation.minGraduationYear) || 1975;
    const maxYear = (window.BAF_CONFIG && window.BAF_CONFIG.validation.maxGraduationYear) || 2034;

    if (!gradYearRaw || !Number.isInteger(gradYearNum) || gradYearNum < minYear || gradYearNum > maxYear) {
      setFieldError(
        "reg-grad-year",
        "err-grad-year",
        `Enter a valid 4-digit graduation year between ${minYear} (alumni) and ${maxYear}.`
      );
      isValid = false;
    }

    // Collect selected interests in Registration Mode
    const checkedInterests = Array.from(
      document.querySelectorAll('input[name="program_interest"]:checked')
    ).map((el) => el.value);

    if (currentMode === "registration") {
      if (checkedInterests.length === 0) {
        const interestsErr = document.getElementById("err-interests");
        if (interestsErr) {
          interestsErr.textContent = "Please select at least one Program Area of Interest.";
        }
        isValid = false;
      }
    } else {
      if (!questionCategory) {
        setFieldError("reg-question-category", "err-question-category", "Please select a question category.");
        isValid = false;
      }
      if (!message || message.length < 10) {
        setFieldError("reg-message", "err-message", "Please enter your question (at least 10 characters).");
        isValid = false;
      }
    }

    if (!consentChecked) {
      setFieldError("reg-consent", "err-consent", "Please provide privacy consent before submitting.");
      isValid = false;
    }

    if (!isValid) {
      return null;
    }

    const description = buildStructuredDescription(
      currentMode,
      checkedInterests,
      questionCategory,
      message,
      gradYearNum
    );

    // Exact supported API payload contract
    return {
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile: phoneResult.normalized,
      institute_name: institute,
      year_of_graduation: gradYearNum,
      description: description
    };
  }

  function showStatusBanner(type, titleText, detailText) {
    const banner = document.getElementById("form-status-banner");
    const bannerTitle = document.getElementById("form-status-title");
    const bannerDetail = document.getElementById("form-status-detail");
    if (!banner || !bannerTitle || !bannerDetail) return;

    banner.className =
      "form-status-banner " +
      (type === "success" ? "form-status-banner--success" : "form-status-banner--error");
    bannerTitle.textContent = titleText;
    bannerDetail.textContent = detailText;
    banner.hidden = false;
    banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function initRegistrationForm() {
    const form = document.getElementById("bharat-registration-form");
    const tabReg = document.getElementById("tab-mode-registration");
    const tabInq = document.getElementById("tab-mode-inquiry");
    const submitBtn = document.getElementById("reg-submit-btn");
    const submitBtnText = document.getElementById("submit-btn-text");

    if (!form) return;

    if (tabReg) {
      tabReg.addEventListener("click", () => setFormMode("registration"));
    }
    if (tabInq) {
      tabInq.addEventListener("click", () => setFormMode("inquiry"));
    }

    // Select All / Complete Accelerator helper
    const acceleratorCheckbox = document.getElementById("interest-complete-accelerator");
    if (acceleratorCheckbox) {
      acceleratorCheckbox.addEventListener("change", () => {
        const interestsErr = document.getElementById("err-interests");
        if (interestsErr) interestsErr.textContent = "";
      });
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (isSubmitting) return;

      // Honeypot check (supplementary spam signal)
      const honeypot = document.getElementById("reg-website-hp");
      if (honeypot && honeypot.value.trim() !== "") {
        return;
      }

      const payload = validateAndBuildPayload();
      if (!payload) {
        const firstInvalid = form.querySelector(".is-invalid, #err-interests:not(:empty)");
        if (firstInvalid && typeof firstInvalid.focus === "function") {
          firstInvalid.focus();
        }
        return;
      }

      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute("aria-busy", "true");
      }
      if (submitBtnText) {
        submitBtnText.textContent =
          currentMode === "registration" ? "SUBMITTING REGISTRATION..." : "SENDING QUESTION...";
      }

      try {
        await submitRegistration(payload);

        // Clear form only after confirmed successful response
        form.reset();
        clearAllErrors();

        const successHeading =
          currentMode === "registration"
            ? "Interest Registered Successfully!"
            : "Your Question Has Been Submitted!";
        const successCopy =
          currentMode === "registration"
            ? "Thank you for registering your interest in Bharat AI Forge. Your details have been recorded by our registration service, and program updates will be shared with you."
            : "Thank you for reaching out to Bharat AI Forge. Our academic and institutional partnerships team has received your inquiry.";

        showStatusBanner("success", successHeading, successCopy);
      } catch (err) {
        const isCorsOrNetwork =
          err instanceof TypeError || (err && /failed to fetch|network/i.test(String(err.message)));
        const errMessage = isCorsOrNetwork
          ? "The registration service (bharatai-forge-api on Cloud Run) could not complete the request (HTTP 500 Internal Server Error or cross-origin block). Please retry shortly or open ?mock=1 to preview the local confirmation flow while the backend service is checked."
          : err && err.message
          ? err.message
          : "Submission could not be completed. Please review your details and try again.";

        showStatusBanner("error", "Submission Could Not Be Completed", errMessage);
      } finally {
        isSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.removeAttribute("aria-busy");
        }
        if (submitBtnText) {
          submitBtnText.textContent =
            currentMode === "registration" ? "REGISTER YOUR INTEREST" : "SUBMIT YOUR QUESTION";
        }
      }
    });
  }

  // Expose public API for deep-linking from any CTA on the page
  window.BAF_REGISTRATION = {
    init: initRegistrationForm,
    setMode: setFormMode,
    normalizePhoneNumber: normalizePhoneNumber,
    buildStructuredDescription: buildStructuredDescription
  };
})();
