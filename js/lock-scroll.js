document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.querySelector("nav ul");

  const observer = new MutationObserver(() => {
    if (window.innerWidth <= 1024) {
      if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden"; 
      } else {
        document.body.style.overflow = ""; 
      }
    }
  });

  observer.observe(navMenu, { attributes: true, attributeFilter: ["class"] });
});
