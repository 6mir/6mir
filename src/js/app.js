// toglle them
const toggleThemeBtn = document.querySelector("#toggle-theme");
toggleThemeBtn.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});
const userPreferredTheme =
  localStorage.theme ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (userPreferredTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// custom aos
AOS.init({
  duration: 1000,
  once: true,
});

//  scroll top sit
const tops = document.getElementById("topsite");
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    tops.classList.remove("-bottom-20");
    tops.classList.add("bottom-3");
  } else {
    tops.classList.add("-bottom-20");
    tops.classList.remove("bottom-3");
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

// box qr
const body = document.querySelector("body");
const qrmain = document.getElementById("boxqrcode");
const imageqr = document.getElementById("imgqr");
const closeqrcode = document.getElementById("closeqrcode");
const qrcode = document.getElementById("qrcode");

function srcimageqr(url) {
  imageqr.src = url;
  body.classList.add("overflow-hidden");
  qrmain.classList.remove("hidden");
  body.classList.add("pr-[3.21px]");
  setTimeout(() => {
    qrcode.classList.remove("scale-0");
  }, 10);
}

function hiddenbox() {
  body.classList.remove("overflow-hidden");
  body.classList.remove("pr-[3.21px]");
  qrmain.classList.add("hidden");
  qrcode.classList.add("scale-0");
}

closeqrcode.addEventListener("click", function () {
  hiddenbox();
});

qrmain.addEventListener("click", function (e) {
  if (!qrcode.contains(e.target)) {
    hiddenbox();
  }
});

// box 1--2 proje car
const btnProje = document.getElementById("btn-proje");
const modal = document.getElementById("project-modal");
const closeModal = document.getElementById("close-modal");
const exitConfirmation = document.getElementById("exit-confirmation");
const confirmExit = document.getElementById("confirm-exit");
const cancelExit = document.getElementById("cancel-exit");
// box 1 proje car
btnProje.addEventListener("click", () => {
  modal.classList.remove("hidden");
  body.classList.add("pr-[3.21px]");
  body.classList.add("overflow-hidden");
  setTimeout(() => {
    modal.querySelector("div").classList.remove("scale-0");
    modal.querySelector("div").classList.add("scale-100");
  }, 10);
});

closeModal.addEventListener("click", () => {
  exitConfirmation.classList.remove("hidden");
  setTimeout(() => {
    exitConfirmation.classList.remove("-top-[999px]");
    exitConfirmation.classList.add("top-0");
  }, 10);
});
// box 2 proje car
confirmExit.addEventListener("click", () => {
  modal.classList.add("hidden");
  exitConfirmation.classList.add("hidden");
  body.classList.remove("overflow-hidden");
  body.classList.remove("pr-[3.21px]");
  modal.querySelector("div").classList.add("scale-0");
  modal.querySelector("div").classList.remove("scale-100");
  setTimeout(() => {
    exitConfirmation.classList.remove("top-0");
    exitConfirmation.classList.add("-top-[999px]");
  }, 10);
});

cancelExit.addEventListener("click", () => {
  exitConfirmation.classList.add("hidden");
  setTimeout(() => {
    exitConfirmation.classList.remove("top-0");
    exitConfirmation.classList.add("-top-[999px]");
  }, 10);
});

// filter item
document.getElementById("filter").addEventListener("change", function () {
  const selectedCategory = this.value;
  document.querySelectorAll(".project > div").forEach((project) => {
    if (
      selectedCategory === "all" ||
      project.getAttribute("data-category") === selectedCategory
    ) {
      project.classList.remove("hidden");
      project.classList.add("aos-animate");
    } else {
      project.classList.add("hidden");
    }
  });
});
