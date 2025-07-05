// // navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// click diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// dark mode toogle
// const darkToggle = document.querySelector("#dark-toggle");
// const html = document.querySelector("html");

// darkToggle.addEventListener("click", function () {
//   if (darkToggle.checked) {
//     html.classList.add("dark");
//   } else {
//     html.classList.remove("dark");
//   }
// });

// const darkToggle = document.querySelector("#dark-toggle");
// const html = document.documentElement;

// // Cek apakah dark mode sudah aktif sebelumnya
// if (localStorage.getItem("darkMode") === "enabled") {
//   html.classList.add("dark");
//   darkToggle.checked = true;
// }

// // Event listener untuk toggle dark mode
// darkToggle.addEventListener("change", function () {
//   if (this.checked) {
//     html.classList.add("dark");
//     localStorage.setItem("darkMode", "enabled");
//   } else {
//     html.classList.remove("dark");
//     localStorage.setItem("darkMode", "disabled");
//   }
// });

// window.matchMedia("(prefers-color-scheme: dark)").matches;

// Check for dark mode preference at the start
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

// Set the initial state based on localStorage
if (localStorage.getItem("darkMode") === "dark") {
  html.classList.add("dark");
  darkToggle.checked = true;
}

// Toggle dark mode
darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.setItem("darkMode", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("darkMode", "light");
  }
});
