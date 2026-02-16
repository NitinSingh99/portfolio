import { initHeader } from "./components/header.js";
import { initHero } from "./components/hero.js";
import { initProject } from "./components/project.js";
import { initExp } from "./components/experience.js";
import "./css/main.css";

console.log("JS running!");

init();

function init() {
    setSystemTheme();
    initHeader();
    initHero();
    initCodeAnimation();
    initProject();
    initExp();
}

function setSystemTheme() {
    const html = document.documentElement;

    if (localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
}

function initCodeAnimation() {
    const codeDisplay = document.getElementById('code-display');
    if (!codeDisplay) return;

    const codeSnippet =
        `const developer = {
    name: "Nitin Singh",
    whatIDo: "Digital solutions to real-world problems",
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
            requestAnimationFrame(() => {
                setTimeout(typeCode, 20);
            });

        }
    }

    typeCode();
}

const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



