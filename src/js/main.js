import { initHeader } from "../components/header.js";

console.log("JS running!");

init();

function init() {
    setSystemTheme();
    initHeader(); 
}

// Function to set theme based on system preference
function setSystemTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const html = document.documentElement;
    
    if (prefersDark) {
        html.classList.add('dark');
    } else {
        html.classList.add('light');
    }
}


