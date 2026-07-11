// 1. Gather configuration credentials stored from startup root
const selectedClass = localStorage.getItem("userClass");
const selectedSubject = localStorage.getItem("userSubject");

const statusLabel = document.getElementById("workspace-status");
const themeIcon = document.getElementById("theme-icon");

// 2. Setup structural environment state context indicators
if (selectedClass && selectedSubject) {
    statusLabel.innerText = `Class ${selectedClass} — Active ${selectedSubject} Track`;
} else {
    statusLabel.innerText = "Custom Workspace Track";
}

/* ==========================================================================
   THEME SWITCHING INFRASTRUCTURE
   ========================================================================== */
// Initialize theme on architecture boot load sequence
const activeTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", activeTheme);
updateThemeIcon(activeTheme);

/**
 * Toggles state interface between dark and light variables
 */
function toggleTheme() {
    const currentSetting = document.documentElement.getAttribute("data-theme");
    const targetSetting = currentSetting === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", targetSetting);
    localStorage.setItem("theme", targetSetting);
    updateThemeIcon(targetSetting);
}

function updateThemeIcon(theme) {
    if (theme === "dark") {
        themeIcon.innerText = "🌙";
    } else {
        themeIcon.innerText = "☀️";
    }
}

/* ==========================================================================
   NAVIGATION ARCHITECTURE ENGINES
   ========================================================================== */
/**
 * Processes selected workflow channel and targets the subsequent roadmap picker file
 * @param {string} modeCode - Values corresponding to 'flashcard', 'test', or 'study'
 */
function routeToChapters(modeCode) {
    localStorage.setItem("userMode", modeCode);
    console.log(`Routing path verified: [${modeCode}]. Loading path maps...`);
    window.location.href = "chapters.html";
}

/**
 * Returns to core onboarding parameters setup gatekeeper
 */
function goToSetup() {
    window.location.href = "../index.html";
}
