import { initHeader } from "./components/header.js";
import { initHero } from "./components/hero.js";
import "./css/main.css";

console.log("JS running!");

init();

function init() {
    setSystemTheme();
    initHeader();
    initHero();
    initCodeAnimation();
}

// Function to set theme based on system preference
function setSystemTheme() {
    const html = document.documentElement;

    if (localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
}

// document.querySelector('.toggle').addEventListener('click', function () {
//     const svg = this.querySelector('svg');
//     svg.classList.toggle('rotate-45');
//     svg.classList.toggle('scale-80');
// });

function toggleProject(container) {
    const wrapper = container.parentElement;
    const details = wrapper.querySelector(".project-details");
    const icon = wrapper.querySelector(".toggle-icon");

    const isOpen = details.classList.contains("max-h-[500px]");

    // close all others (optional, accordion behavior)
    document.querySelectorAll(".project-details").forEach(el => {
      el.classList.remove("max-h-[500px]", "opacity-100");
      el.classList.add("max-h-0", "opacity-0");
    });

    document.querySelectorAll(".toggle-icon").forEach(el => {
      el.classList.remove("rotate-45");
    });

    if (!isOpen) {
      details.classList.remove("max-h-0", "opacity-0");
      details.classList.add("max-h-[500px]", "opacity-100");
      icon.classList.add("rotate-45");
    }
  }

export function initCodeAnimation() {
    const codeDisplay = document.getElementById('code-display');
    if (!codeDisplay) return;

    const codeSnippet =
        `const developer = {
    name: "Nitin Singh",
    whatIDo: "Digital solutions to real-world problems"
    };`;

    let currentIndex = 0;

    function typeCode() {
        if (currentIndex <= codeSnippet.length) {
            const lines = codeSnippet.slice(0, currentIndex).split('\n');

            codeDisplay.innerHTML = lines.map((line, i) => {
                const isLastLine = i === lines.length - 1;

                return `
                    <div class="flex leading-[1.4]">
                        <span class="text-zinc-600 mr-4 select-none">${i + 1}</span>
                        <span class="text-teal-400">
                            ${line}
                            ${isLastLine ? '<span class="inline-block w-2 h-4 bg-teal-400 animate-pulse align-middle"></span>' : ''}
                        </span>
                    </div>
                `;
            }).join('');

            currentIndex++;
            setTimeout(typeCode, 20);
        }
    }

    typeCode();
}



