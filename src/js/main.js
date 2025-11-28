console.log("JS running!");

init();

function init() {
    loadComponents();
    setTheme();
}

function loadComponents() {
    const components = {
        "header": "../src/components/header.html"
    }

    Object.keys(components).forEach(id => {
        fetch(components[id]).then(res => res.text()).then(data => {
            document.getElementById(id).innerHTML = data;
        });
    });
}

function setTheme() {
    const html = document.documentElement;
    // const modes = ["light", "dark"];

    function applyTheme(mode) {
        html.classList.remove("light", "dark");
        html.classList.add(mode);

        html.style.colorScheme = mode;
        localStorage.setItem("theme", mode);
    }

    let saved = localStorage.getItem("theme");

    if (!saved || saved === "system") {
        saved = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }

    applyTheme(saved);

    const themeToggleBtn = document.getElementById("theme-toggle");
    const lightIcon = document.getElementById("theme-toggle-light-icon");
    const darkIcon = document.getElementById("theme-toggle-dark-icon");

    // On page load, set the correct icon
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
        lightIcon.classList.remove("hidden");
    } else {
        document.documentElement.classList.remove("dark");
        darkIcon.classList.remove("hidden");
    }

    // Toggle theme on click
    themeToggleBtn.addEventListener("click", () => {
        lightIcon.classList.toggle("hidden");
        darkIcon.classList.toggle("hidden");

        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        }
    });
}
