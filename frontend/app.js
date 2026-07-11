// Reference node context container
const contentArea = document.getElementById("dynamic-content");

// Temporary runtime onboarding collection state
let onboardingData = {
    class: null,
    subject: null
};

/**
 * PHASE 1: Render Class Configuration Screen
 */
function renderClassScreen() {
    contentArea.innerHTML = `
        <h2>Welcome to StudyDen</h2>
        <p>Configure your workspace parameters to focus</p>
        <div class="btn-container">
            <button class="option-btn" onclick="selectClass(8)">Class 8 Syllabus</button>
            <button class="option-btn" onclick="selectClass(9)">Class 9 Syllabus</button>
            <button class="option-btn" onclick="selectClass(10)">Class 10 Syllabus</button>
            <button class="option-btn" onclick="selectClass(11)">Class 11 Syllabus</button>
            <button class="option-btn" onclick="selectClass(12)">Class 12 Syllabus</button>
        </div>
    `;
}

function selectClass(classNumber) {
    onboardingData.class = classNumber;
    renderSubjectScreen();
}

/**
 * PHASE 2: Render Subject Choice Screen
 */
function renderSubjectScreen() {
    contentArea.innerHTML = `
        <h2>Select Focus Track</h2>
        <p>Class ${onboardingData.class} Standard Stream</p>
        <div class="btn-container">
            <button class="option-btn" onclick="selectSubject('Physics')">⚛️ Physics Department</button>
            <button class="option-btn" onclick="selectSubject('Chemistry')">🧪 Chemical Sciences</button>
            <button class="option-btn" onclick="selectSubject('Mathematics')">📐 Pure Mathematics</button>
        </div>
        <button class="back-btn" onclick="renderClassScreen()">← Modify Class Target</button>
    `;
}

function selectSubject(subjectName) {
    onboardingData.subject = subjectName;
    renderLaunchScreen();
}

/**
 * PHASE 3: Launch Gatekeeper (Includes 3D interactive sheen launch trigger)
 */
function renderLaunchScreen() {
    contentArea.innerHTML = `
        <h2>Den Configuration Saved</h2>
        <p>Click below to open your localized workspace dashboard</p>
        
        <div style="background: rgba(255, 255, 255, 0.015); border: 1px solid rgba(255,255,255,0.04); padding: 22px; border-radius: 16px; margin-bottom: 28px; text-align: left;">
            <span style="display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em; color: #475569; font-weight: 700; margin-bottom: 4px;">Target Profile</span>
            <span style="font-size: 1.2rem; font-weight: 800; color: #3b82f6;">Class ${onboardingData.class} — ${onboardingData.subject}</span>
        </div>

        <button class="btn-3d-wrapper" onclick="commitAndRedirect()">
            <span class="btn-3d-front">LAUNCH STUDY DEN</span>
        </button>
        
        <br>
        <button class="back-btn" onclick="renderSubjectScreen()">← Modify Subject Track</button>
    `;
}

/**
 * CORE TELEPORTATION COMPILER
 * Serializes profile targets to localStorage and bridges architecture forward to the dashboard root layout
 */
function commitAndRedirect() {
    // 1. Permanently record structural configuration variables inside client instance memory
    localStorage.setItem("userClass", onboardingData.class);
    localStorage.setItem("userSubject", onboardingData.subject);
    
    // 2. Teleport location pathway out of onboarding hub root file straight into dashboard page root file
    window.location.href = "dashboard.html";
}

// Initializing onboarding boot execution sequence
renderClassScreen();
