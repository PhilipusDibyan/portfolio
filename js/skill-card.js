document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("show");
        } else {
          el.classList.remove("show");
        }
      });
    },
    { threshold: 0.3 }
  );

  skillCards.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`; // delay tiap elemen
    observer.observe(el);
  });
});
