// Reference point for content rendering
const contentArea = document.getElementById("dynamic-content");

// Global configuration state
let sessionSetup = {
    class: null,
    subject: null
};

/**
 * SCREEN 1: Class Selection Setup
 */
function renderClassScreen() {
    contentArea.innerHTML = `
        <h2>Welcome to StudyDen</h2>
        <p>Set up your workspace to lock in your focus</p>
        <div class="btn-container">
            <button class="option-btn" onclick="handleClassSelect(8)">Class 8</button>
            <button class="option-btn" onclick="handleClassSelect(9)">Class 9</button>
            <button class="option-btn" onclick="handleClassSelect(10)">Class 10</button>
            <button class="option-btn" onclick="handleClassSelect(11)">Class 11</button>
            <button class="option-btn" onclick="handleClassSelect(12)">Class 12</button>
        </div>
    `;
}

function handleClassSelect(selectedClass) {
    sessionSetup.class = selectedClass;
    renderSubjectScreen();
}

/**
 * SCREEN 2: Subject Selection Setup
 */
function renderSubjectScreen() {
    contentArea.innerHTML = `
        <h2>Select Your Focus</h2>
        <p>Class ${sessionSetup.class} Curriculum</p>
        <div class="btn-container">
            <button class="option-btn" onclick="handleSubjectSelect('Physics')">⚛️ Physics</button>
            <button class="option-btn" onclick="handleSubjectSelect('Chemistry')">🧪 Chemistry</button>
            <button class="option-btn" onclick="handleSubjectSelect('Mathematics')">📐 Mathematics</button>
        </div>
        <button class="back-btn" onclick="renderClassScreen()">← Back to Classes</button>
    `;
}

function handleSubjectSelect(selectedSubject) {
    sessionSetup.subject = selectedSubject;
    renderStartScreen();
}

/**
 * SCREEN 3: The Launchpad (Featuring the premium 3D glowing button)
 */
function renderStartScreen() {
    contentArea.innerHTML = `
        <h2>Your Den is Ready</h2>
        <p>Everything is configured for optimal focus</p>
        
        <div style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: 14px; margin-bottom: 24px; border: 1px solid rgba(255,255,255,0.04)">
            <span style="color: #64748b; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">Target Track</span>
            <span style="color: #3b82f6; font-weight: 700; font-size: 1.25rem;">Class ${sessionSetup.class} — ${sessionSetup.subject}</span>
        </div>

        <button class="btn-3d-wrapper" onclick="launchStudySession()">
            <span class="btn-3d-front">ENTER STUDY DEN</span>
        </button>
        
        <br>
        <button class="back-btn" onclick="renderSubjectScreen()">Modify Configuration</button>
    `;
}

/**
 * ACTION: Core Launch Engine
 */
function launchStudySession() {
    console.log("Launching Workspace Architecture...", sessionSetup);
    
    // Smooth exit transition placeholder for dashboard loading
    contentArea.style.opacity = "0.3";
    setTimeout(() => {
        contentArea.innerHTML = `
            <h2>Entering Session...</h2>
            <p>Loading your personalized educational assets.</p>
        `;
        contentArea.style.opacity = "1";
    }, 400);
}

// System initialization trigger
renderClassScreen();
