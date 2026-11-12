/**
 * Bharat AI Forge — Central Frontend Configuration (js/config.js)
 * All endpoint settings and configurable institutional placeholders live here.
 */

window.BAF_CONFIG = {
  brandName: "Bharat AI Forge",
  tagline: "Learn AI. Engineer the Future.",
  mission: "Building India's Next Generation of AI Engineers.",
  campaign: "India AI Ready 2030",

  // Official Cloud Run Registration & Inquiry API Endpoint
  API_URL: "https://bharatai-forge-api-679998727179.asia-south1.run.app/register",

  // Safe local testing mode:
  // By default false (uses real API). Append ?mock=1 to URL during local testing
  // to simulate API responses without sending fake personal data to production.
  isMockMode: function () {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get("mock") === "1" || window.BAF_FORCE_MOCK === true;
    } catch (_) {
      return false;
    }
  },

  validation: {
    minGraduationYear: 1975,
    maxGraduationYear: 2034,
    maxDescriptionLength: 1800,
    maxMessageLength: 1000
  },

  // Configurable placeholders until official contact channels are supplied
  contactPlaceholders: {
    generalNote: "Official contact email & phone will be shared with registered participants and partner institutions.",
    locationNote: "Pan-India Engineering Education Initiative"
  }
};
