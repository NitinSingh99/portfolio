export function initProject() {
    const projectSection = document.getElementById("projects");

    projectSection.innerHTML = `<div id="projects-section" class="px-4 py-6 md:px-8 lg:px-16 lg:py-16 lg:mt-16  dark:bg-zinc-950 rounded-t-2xl shadow-[0_-10px_30px_-20px_rgba(0,0,0,0.15)]
          dark:shadow-none">
          <div class="flex items-center gap-2 block-header-title ">
            <!-- <span class="w-2.5 h-2.5 lg:w-2.5 lg:h-2.5 rounded-full 
           bg-black dark:bg-white 
           translate-y-[0.04em]">
            </span> -->
            <p class="font-bold lg:font-extrabold text-xl md:text-2xl lg:text-2xl text-zinc-800 dark:text-zinc-100">
              Recent works
            </p>
          </div>

          <div class="project-wrapper mt-6 lg:mt-18">
            <div class="project-container flex items-center justify-between cursor-pointer"
              >
              <div class="project-item">
                <div class="flex items-center gap-2 lg:gap-7">
                  <div class="project-title text-lg lg:text-5xl text-zinc-800 dark:text-zinc-100">
                    ossportal.in
                  </div>

                  <!-- LINK ICON -->
                  <a href="https://ossportal.in" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="portfolio-icon w-4 h-4 lg:w-10 lg:h-10 stroke-zinc-400 hover:stroke-teal-500
                   dark:stroke-zinc-600  dark:hover:stroke-teal-500 transition-colors duration-300 ease-in-out">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622
                 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- TOGGLE ICON -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="toggle-icon w-6 h-6 lg:w-14 lg:h-14
              stroke-zinc-400 hover:stroke-zinc-600
                   dark:stroke-zinc-600  dark:hover:stroke-zinc-300 transition-all duration-300 ease-in-out">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </div>

            <!-- EXPANDABLE CONTENT -->
            <div
              class="project-details overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out text-zinc-400">
              <div class="py-4 lg:pt-12 space-y-4">
                <p class="max-w-2xl lg:text-lg text-zinc-600 dark:text-zinc-400">
                  A government service portal for applying to official documents, with multi-role access, payments, SMS
                  alerts, and admin analytics.
                </p>

                <!-- <a href="https://github.com/yourrepo" target="_blank"
                  class="relative inline-flex items-center gap-2 text-zinc-400 dark:text-zinc-600 hover:text-teal-500 transition-colors duration-300 ease-in-out group">
                  View code
                  <span
                    class="absolute left-0 -bottom-1 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a> -->
              </div>
            </div>
          </div>

          <!-- DIVIDER -->
          <hr class="my-8 lg:my-14 border-0 h-px bg-zinc-300/50 dark:bg-zinc-600/50">

          <div class="project-wrapper mt-6 lg:mt-18">
            <div class="project-container flex items-center justify-between cursor-pointer"
              onclick="toggleProject(this)">
              <div class="project-item">
                <div class="flex items-center gap-2 lg:gap-7">
                  <div class="project-title text-lg lg:text-5xl text-zinc-800 dark:text-zinc-100">
                    kamakhyabooking.com
                  </div>

                  <!-- LINK ICON -->
                  <a href="https://ossportal.in" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="portfolio-icon w-4 h-4 lg:w-10 lg:h-10 stroke-zinc-400 hover:stroke-teal-500
                   dark:stroke-zinc-600  dark:hover:stroke-teal-500 transition-colors duration-300 ease-in-out">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622
                 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- TOGGLE ICON -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="toggle-icon w-6 h-6 lg:w-14 lg:h-14
              stroke-zinc-400 hover:stroke-zinc-600
                   dark:stroke-zinc-600  dark:hover:stroke-zinc-300 transition-all duration-300 ease-in-out">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </div>

            <!-- EXPANDABLE CONTENT -->
            <div
              class="project-details overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out text-zinc-400">
              <div class="py-4 lg:pt-12 space-y-4">
                <p class="max-w-2xl lg:text-lg text-zinc-600 dark:text-zinc-400">
                  A government service portal for applying to official documents, with multi-role access, payments, SMS
                  alerts, and admin analytics.
                </p>

                <!-- <a href="https://github.com/yourrepo" target="_blank"
                  class="relative inline-flex items-center gap-2 text-zinc-400 dark:text-zinc-600 hover:text-teal-500 transition-colors duration-300 ease-in-out group">
                  View code
                  <span
                    class="absolute left-0 -bottom-1 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </a> -->
              </div>
            </div>
          </div>
        </div>`;

    document.querySelectorAll(".project-container").forEach(container => {
        container.addEventListener("click", () => {
            toggleProject(container);
        });
    });
}

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
        el.classList.remove('scale-80');
    });

    if (!isOpen) {
        details.classList.remove("max-h-0", "opacity-0");
        details.classList.add("max-h-[500px]", "opacity-100");
        icon.classList.add("rotate-45");
        icon.classList.add('scale-80');
    }
}