const menuIcon = document.querySelector("#menu-icon");
const navUl = document.querySelector("nav ul");
const mainContent = document.querySelector("main");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navUl.classList.toggle("active");
  mainContent.classList.toggle("blur");

  // Tambahkan state di header
  const header = document.querySelector("header");
  if (navUl.classList.contains("active")) {
    header.classList.add("menu-open");
  } else {
    header.classList.remove("menu-open");
  }

  // Ganti ikon menu ↔ X
  if (menuIcon.classList.contains("active")) {
    menuIcon.classList.remove("bx-menu");
    menuIcon.classList.add("bx-x");
  } else {
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
  }
});

// Klik di luar navbar untuk menutup menu
document.addEventListener("click", (e) => {
  if (
    navUl.classList.contains("active") &&
    !navUl.contains(e.target) &&
    !menuIcon.contains(e.target)
  ) {
    navUl.classList.remove("active");
    mainContent.classList.remove("blur");
    menuIcon.classList.remove("active");
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
  }
});

// ...existing code...

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('active');
    mainContent.classList.remove('blur');
    menuIcon.classList.remove('active');
    menuIcon.classList.remove('bx-x');
    menuIcon.classList.add('bx-menu');
    // Jika ada efek menu-open di header, hilangkan juga
    const header = document.querySelector("header");
    header.classList.remove("menu-open");
  });
});

// ...existing code...

// animasi logo
const logo = document.querySelector(".mainIcon");

// Klik logo → reload halaman ke awal
logo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // scroll ke atas
  setTimeout(() => {
    location.reload(); // refresh halaman setelah 300ms
  }, 300);
});

// CURSOR
const cursorGlow = document.createElement("div");
cursorGlow.classList.add("cursor-glow");
document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.top = `${e.clientY}px`;
  cursorGlow.style.left = `${e.clientX}px`;
});

