import { initHeader } from "./components/header.js";
import "./css/main.css";

console.log("JS running!");

init();

function init() {
    setSystemTheme();
    initHeader(); 
}

// Function to set theme based on system preference
function setSystemTheme() {
    const html = document.documentElement;
    
    // Check localStorage first, then fall back to system preference
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
}


