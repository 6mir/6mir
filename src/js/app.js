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
    tops.classList.add("bottom-3");
    tops.classList.remove("-bottom-20");
  } else {
    tops.classList.remove("bottom-3");
    tops.classList.add("-bottom-20");
  }
});

// tolbar sit
const progrss = document.getElementById("tolbar");
window.addEventListener("scroll", () => {
  const winscroll = window.pageYOffset;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (winscroll / height) * 100;
  progrss.style.width = `${scrolled}%`;
});

// link aos
AOS.init({
  duration: 1000,
  once: true,
});
