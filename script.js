// Switch from Welcome/Login page to Dashboard
function goToDashboard() {
    document.getElementById('welcomePage').style.display = 'none';
    document.getElementById('dashboardPage').style.display = 'flex';
}

// Show the respective section when a box is clicked
function showSection(sectionId) {
    hideAllSections(); // hide other sections first
    const section = document.getElementById(sectionId);
    section.style.display = 'flex';
    section.style.flexDirection = 'column';
    section.style.alignItems = 'center';
    section.style.justifyContent = 'center';

    // Fade-in animation
    section.style.opacity = 0;
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
}