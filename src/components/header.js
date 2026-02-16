export function initHeader() {
    const header = document.getElementById("header");

    header.innerHTML = `
    <section class="header relative pt-4 md:pt-8 px-4 lg:px-16">
    <div class="header-container flex justify-between items-center">
        <div class="logo"><span class="font-bold text-lg md:text-3xl"><span
                    class="text-teal-400 text-xl md:text-4xl"></span></span></div>
        <div
            class="hidden lg:flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            <a href="#" class="px-3 py-2 transition text-teal-500 dark:text-teal-400">Home</a>
            <a href="#" class="px-3 py-2 transition">About</a>
            <a href="#" class="px-3 py-2 transition">Skills</a>
            <a href="#" class="px-3 py-2 transition">Contact</a>
        </div>
        <div class="theme flex gap-2">
            <button id="menu-btn"
                class="lg:hidden rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:ring-white/10">
                <svg class="w-6 h-6fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                </svg>
            </button>
            <button id="theme-toggle"
                class="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                <svg id="theme-toggle-light-icon"
                    class="h-6 w-6 hidden fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                    aria-hidden="true">
                    <path
                        d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z">
                    </path>
                    <path
                        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                        fill="none"></path>
                </svg>

                <svg id="theme-toggle-dark-icon"
                    class="w-6 h-6 hidden fill-zinc-700 stroke-zinc-500 transition group-hover:stroke-zinc-400"
                    viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>

        </div>
    </div>

    <div id="mobile-menu"
        class="hidden lg:hidden absolute top-full mt-3
         left-4 right-4
         rounded-2xl bg-white/95 p-4 shadow-lg
         ring-1 ring-zinc-900/5 backdrop-blur-sm
         dark:bg-zinc-800/95 dark:ring-white/10
         z-50">
        <nav class="flex flex-col gap-3 text-sm font-medium">
            <a href="#" class="text-teal-500">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Contact</a>
        </nav>
    </div>
</section>
  `;

    setTimeout(() => {
        initMobileMenu();
        initThemeToggle();
    }, 200);
}

function initMobileMenu() {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("mobile-menu");

    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
}

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
        darkIcon.classList.remove("hidden");
    } else {
        document.documentElement.classList.remove("dark");
        lightIcon.classList.remove("hidden");
    }

    // Click handler
    themeToggleBtn.addEventListener("click", () => {
        lightIcon.classList.toggle("hidden");
        darkIcon.classList.toggle("hidden");
        console.log('www');
        if (document.documentElement.classList.contains("dark")) {
            console.log('x');
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            console.log('Y');
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        }
    });
}

