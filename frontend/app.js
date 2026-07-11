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
 */// Syllabus Database Map for StudyDen
const syllabusData = {
    "Physics": [
        { num: "01", name: "Light: Reflection & Refraction" },
        { num: "02", name: "Human Eye & Colorful World" },
        { num: "03", name: "Electricity Management" },
        { num: "04", name: "Magnetic Effects of Current" }
    ],
    "Chemistry": [
        { num: "01", name: "Chemical Reactions & Equations" },
        { num: "02", name: "Acids, Bases and Salts" },
        { num: "03", name: "Metals and Non-metals" },
        { num: "04", name: "Carbon and its Compounds" }
    ],
    "Mathematics": [
        { num: "01", name: "Real Numbers & Polynomials" },
        { num: "02", name: "Pair of Linear Equations" },
        { num: "03", name: "Quadratic Equations" },
        { num: "04", name: "Arithmetic Progressions" },
        { num: "05", name: "Trigonometric Foundations" }
    ]
};

/**
 * ACTION: Core Launch Engine
 * Transforms the onboarding window cleanly into the full operational dashboard
 */
function launchStudySession() {
    const appCard = document.getElementById("app-card");
    
    // Step 1: Trigger structural glass card expansion
    appCard.classList.add("dashboard-mode");

    // Fetch matching chapters based on curriculum choices, fall back to Maths if missing
    const chapters = syllabusData[sessionSetup.subject] || syllabusData["Mathematics"];

    // Step 2: Build and compile HTML rows for each chapter element
    let chapterRowsHTML = "";
    chapters.forEach(ch => {
        chapterRowsHTML += `
            <div class="chapter-row">
                <div class="chapter-info">
                    <span class="chapter-num">Chapter ${ch.num}</span>
                    <span class="chapter-name">${ch.name}</span>
                </div>
                <div class="modes-group">
                    <button class="mode-card-btn flash" onclick="startMode('Flashcards', '${ch.name}')">📇 Cards</button>
                    <button class="mode-card-btn quiz" onclick="startMode('Quiz', '${ch.name}')">📝 Quiz</button>
                    <button class="mode-card-btn tutor" onclick="startMode('AI Tutor', '${ch.name}')">🤖 Tutor</button>
                </div>
            </div>
        `;
    });

    // Step 3: Inject the complete compiled dashboard workspace interface
    contentArea.innerHTML = `
        <div class="dashboard-container">
            <div class="dashboard-header">
                <div>
                    <h2>Study Workspace</h2>
                    <p style="margin: 0;">Class ${sessionSetup.class} — ${sessionSetup.subject} Track</p>
                </div>
                <button class="back-btn" style="margin: 0;" onclick="exitDashboard()">⚙️ Leave Den</button>
            </div>
            
            <div class="chapters-scroll-area">
                ${chapterRowsHTML}
            </div>
        </div>
    `;
}

/**
 * ROUTING: Mode Initialization Engine
 */
function startMode(modeName, chapterName) {
    alert(`Entering ${modeName} room for: ${chapterName}`);
    // This is where your individual operational screens will link up later!
}

/**
 * ROUTING: De-escalate Dashboard view back to Onboarding sequence
 */
function exitDashboard() {
    const appCard = document.getElementById("app-card");
    appCard.classList.remove("dashboard-mode");
    renderStartScreen();
}

// System initialization trigger
renderClassScreen();
