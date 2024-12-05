//  image qr
const body = document.querySelector("body");
const qrcode = document.getElementById("boxqrcode");
const imageqr = document.getElementById("imgqr");
const closeqrcode = document.getElementById("closeqrcode");
const bgqr = document.getElementById("bgqr");

function srcimageqr(url) {
  imageqr.src = url;
  body.classList.add("overflow-hidden");
  bgqr.classList.remove("hidden");
  qrcode.classList.add("flex");
  qrcode.classList.remove("hidden");
  setTimeout(() => {
    qrcode.classList.remove("scale-0");
    qrcode.classList.add("scale-1");
  }, 10);
}

closeqrcode.addEventListener("click", function () {
  hiddenbox();
});

bgqr.addEventListener("click", function () {
  hiddenbox();
});

function hiddenbox() {
  qrcode.classList.remove("scale-1");
  qrcode.classList.add("scale-0");
  setTimeout(() => {
    body.classList.remove("overflow-hidden");
    bgqr.classList.add("hidden");
    qrcode.classList.add("hidden");
  }, 90);
}

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

// filter item
document.getElementById("filter").addEventListener("change", function () {
  const selectedCategory = this.value;
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    if (
      selectedCategory === "all" ||
      project.getAttribute("data-category") === selectedCategory
    ) {
      project.style.display = "block";
      project.classList.add("aos-animate");
    } else {
      project.classList.remove("aos-animate");
      project.style.display = "none";
    }
  });
});

//  scroll top sit
const tops = document.getElementById("topsite");
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    tops.style.bottom = "12px";
  } else {
    tops.style.bottom = "-80px";
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

// link aos
AOS.init({
  duration: 1000,
  once: true,
});

// 2 box proje car
// گرفتن عناصر
const btnProje = document.getElementById("btn-proje");
const modal = document.getElementById("project-modal");
const closeModal = document.getElementById("close-modal");
const exitConfirmation = document.getElementById("exit-confirmation");
const confirmExit = document.getElementById("confirm-exit");
const cancelExit = document.getElementById("cancel-exit");

let isLinkSelected = false; // بررسی اینکه آیا کاربر لینکی انتخاب کرده است یا خیر

// باز کردن مودال وقتی که دکمه کلیک می‌شود
btnProje.addEventListener("click", () => {
  modal.classList.remove("hidden");
  body.classList.add("overflow-hidden");
});

// بستن مودال وقتی که دکمه بستن کلیک می‌شود (نمایش پیغام تایید)
closeModal.addEventListener("click", () => {
  exitConfirmation.classList.remove("hidden"); // نمایش پیغام تایید
  body.classList.add("overflow-hidden");
});

// وقتی کاربر روی "بله، می‌خواهم خارج شوم" کلیک کند
confirmExit.addEventListener("click", () => {
  modal.classList.add("hidden"); // مخفی کردن مودال
  exitConfirmation.classList.add("hidden"); // مخفی کردن پیغام تایید
  body.classList.remove("overflow-hidden");
});

// وقتی کاربر روی "نه، می‌خواهم ادامه دهم" کلیک کند
cancelExit.addEventListener("click", () => {
  exitConfirmation.classList.add("hidden"); // مخفی کردن پیغام تایید و ادامه دادن
  // body.classList.remove("overflow-hidden");
});
