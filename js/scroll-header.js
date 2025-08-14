const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY && window.scrollY > 50) {
    header.classList.add("hide"); // Scroll down
  } else if (window.scrollY < lastScrollY) {
    header.classList.remove("hide"); // Scroll up
  }
  lastScrollY = window.scrollY;
});




// skillset aboutme
document.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".skill-card");
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});
