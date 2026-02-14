// Switch from Welcome → Dashboard
function goToDashboard() {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('dashboardPage').style.display = 'flex';
}

// Show hidden section
function showSection(sectionId) {
    hideAllSections();
    const section = document.getElementById(sectionId);
    section.style.display = 'flex';
    section.style.flexDirection = 'column';
    section.style.alignItems = 'center';
    section.style.justifyContent = 'center';
    section.style.opacity = 0;

    // Fade-in animation
    let opacity = 0;
    const fade = setInterval(() => {
        opacity += 0.05;
        section.style.opacity = opacity;
        if (opacity >= 1) clearInterval(fade);
    }, 20);
}

// Hide all sections
function hideAllSections() {
    document.getElementById('askSection').style.display = 'none';
    document.getElementById('proSection').style.display = 'none';
    document.getElementById('feedbackSection').style.display = 'none';
    document.getElementById('mythSection').style.display = 'none';
    document.getElementById('mythResult').textContent = '';
}

// Myth or Fact Checker
function checkMyth() {
    const input = document.getElementById('mythInput').value.trim();
    const result = document.getElementById('mythResult');

    if (!input) {
        result.textContent = "Please type a statement!";
        result.style.color = "#a16b45";
        return;
    }

    const myths = [
        "Menstrual blood is dirty",
        "Girls can't exercise during periods",
        "Pads cause infertility",
        "You won't be able to retrieve menstrual cup after inserting"
    ];

    const isMyth = myths.some(m => input.toLowerCase().includes(m.toLowerCase()));
    if (isMyth) {
        result.textContent = "❌ Myth!";
        result.style.color = "#b22222";
    } else {
        result.textContent = "✅ Fact!";
        result.style.color = "#556b2f";
    }
}