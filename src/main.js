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

document.querySelector('.toggle').addEventListener('click', function () {
    const svg = this.querySelector('svg');
    svg.classList.toggle('rotate-45');
    svg.classList.toggle('scale-80');
});

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



