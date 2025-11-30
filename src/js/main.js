console.log("JS running!");

init();

function init() {
    loadComponents();
    setSystemTheme();
}

function loadComponents() {
    const components = {
        "header": "../src/components/header.html"
    }

    Object.keys(components).forEach(id => {
        fetch(components[id]).then(res => res.text()).then(data => {
            document.getElementById(id).innerHTML = data;
            if (id === "header") {
                initThemeToggle();
            }
        });
    });
}

// Function to set theme based on system preference
function setSystemTheme() {
    // Check if user's system prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(prefersDark);
    // Get the html element
    const html = document.documentElement;

    // Set the theme class
    if (prefersDark) {
        console.log('x');
        // html.classList.remove('light');
        html.classList.add('dark');
    } else {
        console.log('y');
        // html.classList.remove('dark');
        html.classList.add('light');
    }
}

// Run immediately when script loads
// setSystemTheme();

// Optional: Listen for system theme changes and update automatically
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
//     const html = document.documentElement;
//     if (e.matches) {
//         html.classList.add('dark');
//     } else {
//         html.classList.remove('dark');
//     }
// });

// function applyTheme(mode) {
//     html.classList.remove("light", "dark");
//     html.classList.add(mode);

//     html.style.colorScheme = mode;
//     localStorage.setItem("theme", mode);
// }

function initThemeToggle() {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const lightIcon = document.getElementById("theme-toggle-light-icon");
    const darkIcon = document.getElementById("theme-toggle-dark-icon");

    if (!themeToggleBtn || !lightIcon || !darkIcon) {
        console.error("Theme toggle elements not found");
        return;
    }

    // Initial state
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
        lightIcon.classList.remove("hidden");
    } else {
        document.documentElement.classList.remove("dark");
        darkIcon.classList.remove("hidden");
    }

    // Click handler
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


