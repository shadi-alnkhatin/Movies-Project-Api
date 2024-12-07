export const initializeToggles = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const searchBox = document.querySelector("[search-box]");
      const searchTogglers = document.querySelectorAll("[search-toggler]");
      const sidebar = document.querySelector("[sidebar]");
      const sidebarBtn = document.querySelector("[menu-btn]");
      const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
      const sidebarClose = document.querySelectorAll("[menu-close]");
      const overlay = document.querySelector("#overlay");
  
      if (searchTogglers) {
        searchTogglers.forEach((toggle) => {
          toggle.addEventListener("click", () => {
            searchBox?.classList.toggle("active");
          });
        });
      }
  
      if (sidebarTogglers) {
        sidebarTogglers.forEach((toggle) => {
          toggle.addEventListener("click", () => {
            sidebar?.classList.toggle("active");
            sidebarBtn?.classList.toggle("active");
            overlay?.classList.toggle("active");
          });
        });
      }
  
      if (sidebarClose) {
        sidebarClose.forEach((close) => {
          close.addEventListener("click", () => {
            sidebar?.classList.remove("active");
            sidebarBtn?.classList.remove("active");
            overlay?.classList.remove("active");
          });
        });
      }
    });
  };
  