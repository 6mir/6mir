// load main
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("mainbody").classList.remove("hidden");
  document.getElementById("loadbody").classList.add("hidden");
  // custom aos
  AOS.init({
    once: true,
  });
});

// no
// ["contextmenu", "keydown", "dragstart"].forEach((event) => {
//   window.addEventListener(event, (e) => e.preventDefault());
// });

// toglle them
const toggleTheme = () => {
  const theme = document.documentElement.classList.toggle("dark")
    ? "dark"
    : "light";
  localStorage.setItem("theme", theme);
};
document.documentElement.classList.toggle(
  "dark",
  localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

document.querySelector("#toggle-theme").addEventListener("click", toggleTheme);

//  scroll top sit
const totop = document.getElementById("topsite");
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    totop.classList.remove("-bottom-20");
    totop.classList.add("bottom-3");
  } else {
    totop.classList.add("-bottom-20");
    totop.classList.remove("bottom-3");
  }
});

// tolbar sit
const progrss = document.getElementById("tolbar");
window.addEventListener("scroll", () => {
  const winscroll = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (winscroll / height) * 100;
  progrss.style.width = `${scrolled}%`;
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-prev-slide",
    prevEl: ".swiper-button-next-slide",
  },
});
