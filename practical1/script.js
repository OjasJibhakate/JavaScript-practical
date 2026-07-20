// EXTERNAL JAVASCRIPT
// This file is loaded by the <script src="script.js"> tag in the HTML.

// 1. Updating the DOM (Document Object Model)
const welcomeElement = document.getElementById("welcome-message");
welcomeElement.textContent = "Welcome to the JS Developer Dashboard!";
welcomeElement.style.color = "#2c3e50";

// 2. Demonstrating different Console Methods
// Open your browser's Developer Tools (F12 or Right-Click -> Inspect) to see these.

// Standard log for general information
console.log("External JS: Script loaded and welcome message updated.");

// Info log (similar to log, sometimes styled with an 'i' icon)
console.info("System: Initializing dashboard components...");

// Error log (outputs in red, useful for debugging failures)
console.error("Simulated Error: Failed to connect to backend database (mock error).");

// Table log (excellent for visualizing arrays or objects)
const sessionData = [
    { id: 1, action: "Page Load", timestamp: "10:23 AM" },
    { id: 2, action: "Script Init", timestamp: "10:23 AM" },
    { id: 3, action: "Data Fetch", timestamp: "Pending" }
];
console.table(sessionData);