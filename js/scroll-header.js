document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main"); // pastikan konten dibungkus <main>
  let lastScrollY = window.scrollY;

  // Set padding-top otomatis sesuai tinggi header
  const setMainPadding = () => {
    main.style.paddingTop = header.offsetHeight + "px";
  };
  setMainPadding();
  window.addEventListener("resize", setMainPadding);

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      header.classList.add("hide");
    } else if (currentScrollY < lastScrollY) {
      header.classList.remove("hide");
      header.style.top = "0";
    }

    lastScrollY = currentScrollY;
  });

  // Skillset about me animation
  document.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".skill-card");
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add("show");
      }
    });
  });
});
