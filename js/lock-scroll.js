document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.querySelector("nav ul"); // pilih UL, bukan LI

  let scrollPosition = 0;

  const observer = new MutationObserver(() => {
    if (window.innerWidth <= 1024) {
      if (navMenu.classList.contains("active")) {
        // Simpan posisi scroll
        scrollPosition = window.scrollY;

        // Lock scroll
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = "100%";
      } else {
        // Kembalikan scroll
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";

        // Balikin posisi scroll sebelumnya
        window.scrollTo(0, scrollPosition);
      }
    }
  });

  observer.observe(navMenu, { attributes: true, attributeFilter: ["class"] });
});
