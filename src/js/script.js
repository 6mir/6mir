// load main
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("mainbody").classList.remove("hidden");
  document.getElementById("loadbody").classList.add("hidden");
  // custom aos
  AOS.init({
    once: true,
  });
});

// golf web
["contextmenu", "dragstart"].forEach((event) => {
  window.addEventListener(event, (e) => e.preventDefault());
});

// scroll top sit
const totop = document.getElementById("topsite");
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    totop.style.bottom = "12px";
  } else {
    totop.style.bottom = "-999px";
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

// function lod img
function loadImg(IMG, LOADELEM) {
  const loadbg = document.getElementById(LOADELEM);
  const loadimgbg = document.getElementById(IMG);

  loadimgbg.src = loadimgbg.src

  loadimgbg.onload = function () {
    loadimgbg.classList.remove("hidden");
    loadbg.classList.add("hidden");
  };

  loadimgbg.onerror = function () {
    loadimgbg.classList.add("hidden");
    loadimgbg.src = "";
    loadbg.classList.remove("hidden");
    loadbg.classList.remove("animate-pulse")
    loadbg.querySelector("svg").querySelector("use").href.baseVal = "#error"
  };
}

// img top site big
loadImg("loadimgbg", "loadbg")

// set element proje
const dataProje = [
  {
    category: "shop",
    languages: ["HTML", "CSS"],
    title: "اسم آیتم در اینجا هست",
    websiteUrl: "https://6mir.github.io/audio",
    image: "./src/picture/project/image/img-1.jpg",
    qrCodeImage: "./src/picture/project/qr/img-1.png",
    date: "۱۴۰۲/۰۹/۲۳",
  },
  {
    category: "shop",
    languages: ["HTML", "CSS", "JavaScript"],
    title: "اسم آیتم در اینجا هست",
    websiteUrl: "https://6mir.github.io/test2",
    image: "./src/picture/project/image/img-2.jpg",
    qrCodeImage: "./src/picture/project/qr/img-1.png",
    date: "۱۴۰۲/۱۰/۰۵",
  },
  {
    category: "music",
    languages: ["HTML", "CSS", "TailwindCSS"],
    title: "اسم آیتم در اینجا هست",
    websiteUrl: "https://6mir.github.io/player",
    image: "./src/picture/project/image/img-3.jpg",
    qrCodeImage: "./src/picture/project/qr/img-3.jpg",
    date: "۱۴۰۲/۱۱/۱۵",
  },
  {
    category: "music",
    languages: ["HTML", "CSS", "Bootstrap"],
    title: "اسم آیتم در اینجا هست",
    websiteUrl: "https://6mir.github.io/search",
    image: "./src/picture/project/image/img-4.jpg",
    qrCodeImage: "./src/picture/project/qr/img-4.jpg",
    date: "۱۴۰۳/۰۱/۲۰",
  },
  {
    category: "personal",
    languages: ["HTML", "CSS"],
    title: "اسم آیتم در اینجا هست",
    websiteUrl: "https://stackoverflow.com",
    image: "./src/picture/project/image/img-5.jpg",
    qrCodeImage: "./src/picture/project/qr/img-5.jpg",
    date: "۱۴۰۳/۰۵/۱۰",
  },
  {
    category: "personal",
    languages: ["HTML", "CSS", "React"],
    title: "اسم آیتم در اینجا هست",
    websiteUrl: "https://portfolio.me",
    image: "./src/picture/project/image/img-6.jpg",
    qrCodeImage: "./src/picture/project/qr/img-6.jpg",
    date: "۱۴۰۳/۰۳/۱۵",
  },
  {
    category: "corporate",
    languages: ["HTML", "CSS", "JavaScript"],
    title: "اسم آیتم در اینجا هست",
    websiteUrl: "https://education-platform.com",
    image: "./src/picture/project/image/img-7.jpg",
    qrCodeImage: "./src/picture/project/qr/img-7.jpg",
    date: "۱۴۰۳/۰۴/۰۵",
  },
  {
    category: "corporate",
    languages: ["HTML", "CSS", "PHP"],
    title: "اسم آیتم در اینجا هست",
    websiteUrl: "https://www.google.com",
    image: "./src/picture/project/image/jpg",
    qrCodeImage: "./src/picture/project/qr/__error__",
    date: "۱۴۰۳/۰۶/۱۰",
  }
]
let dataResult = dataProje;

const projectContainer = document.querySelector(".project");

function setItemProje(data) {
  projectContainer.innerHTML = ""

  if (data.length) {
    data.forEach(dt => {
      const card = document.createElement("article");
      card.setAttribute("data-category", dt.category);
      card.setAttribute("data-aos", "zoom-in-down");
      card.setAttribute("data-languages", dt.languages.join(","));

      card.className =
        "block w-44 md:w-72 bg-gray-50 dark:bg-[rgb(27_52_77)] shadow-normal dark:shadow-normaldark p-1.5 md:p-3 rounded-md";
      card.innerHTML = `
                <div class="w-full aspect-video rounded-lg overflow-hidden relative -top-10">
                <a href="${dt.websiteUrl}" target="_blank" rel="noopener noreferrer">
                    <img alt="${dt.title}"
                        class="img-card size-full hidden hover:scale-105 transform transition duration-200 delay-75"
                        src="${dt.image}">
                    <div
                        class="loader-caed flex items-center justify-center animate-pulse size-full bg-gray-300 dark:bg-[rgb(37,57,79)]">
                        <svg class="size-14 md:size-20 text-gray-200 dark:text-gray-600">
                            <use href="#loaderimg"></use>
                        </svg>
                    </div>
                </a>
            </div>
            <div class="block -mt-8">
                <h2 class="font-BoldFt text-base md:text-xl line-clamp-1 text-gray-800 dark:text-gray-100">
                    <a href="${dt.websiteUrl}" target="_blank" rel="noopener noreferrer">
                        ${dt.title}
                    </a>
                </h2>
            </div>
            <div class="flex justify-between items-center text-gray-500 dark:text-gray-300 my-2">
                <time class="flex items-center gap-1">
                    <svg class="size-5 md:size-6 stroke-current stroke-2">
                        <use href="#time"></use>
                    </svg>
                    <span class="text-sm md:text-base">${dt.date}</span>
                </time>
                <div onclick="srcimageqr('${dt.qrCodeImage}')" class="bg-transparent cursor-pointer">
                    <svg
                        class="size-6 md:size-7 stroke-[1.4px] hover:text-gray-700 hover:dark:text-gray-200 transition duration-200">
                        <use href="#qr"></use>
                    </svg>
                </div>
            </div>
            <div class="flex justify-between mb-3 text-gray-500 dark:text-gray-300">
                <div onclick="showLanguageModal(this)"
                    class="flex items-center gap-1 cursor-pointer hover:text-gray-700 hover:dark:text-gray-200 transition duration-200">
                    <svg class="size-5 md:size-6 stroke-[0.7px] stroke-current">
                        <use href="#zabans"></use>
                    </svg>
                    <p class="text-sm md:text-base">زبان‌ها</p>
                </div>
                <div onclick="copyToClipboard('${dt.websiteUrl}')"
                    class="flex items-center justify-center bg-transparent cursor-pointer">
                    <svg
                        class="size-6 md:size-7 stroke-[1.5px] stroke-current hover:stroke-gray-700 hover:dark:stroke-gray-200 duration-200  fill-none">
                        <use href="#copy"></use>
                    </svg>
                </div>
            </div>
            <span
                class="w-full h-px block bg-neutral-200/70 dark:bg-white/10 shadow-normal dark:shadow-normaldark my-2 rounded-full"></span>
            <a href="${dt.websiteUrl}" target="_blank" rel="noopener noreferrer"
                class="linkweb dark:hover:text-gray-200 text-sm md:text-base dark:text-blue-400 text-blue-500 hover:text-gray-700 flex items-center w-max mx-auto font-BoldFt transition duration-200 delay-75">
                <p>مشاهده وب‌سایت</p>
                <svg class="size-5 md:size-6 fill-current">
                    <use href="#arowleft"></use>
                </svg>
            </a>
    `;

      const imglodElem = card.querySelector(".img-card")
      const loaderlodElem = card.querySelector(".loader-caed")

      imglodElem.onload = () => {
        imglodElem.classList.remove("hidden");
        loaderlodElem.classList.add("hidden");
      };

      imglodElem.onerror = () => {
        imglodElem.classList.add("hidden");
        imglodElem.src = "";
        loaderlodElem.classList.remove("hidden");
        loaderlodElem.classList.remove("animate-pulse")
        loaderlodElem.querySelector("svg").querySelector("use").href.baseVal = "#error"
      };

      projectContainer.appendChild(card);
    })
  } else {
    projectContainer.innerHTML = `<p class='text-gray-400 text-lg md:text-xl'>${searchInputElem.value} نتیجه‌ای یافت نشد</p>`;
  }
}

setItemProje(dataResult)

// search item proje
const searchInputElem = document.getElementById("searchInput")
const searchSubmitElem = document.getElementById("searchSubmit")

function searchProje() {
  searchInputElem.focus()

  dataResult = dataProje.filter(dt => {
    return dt.title.includes(searchInputElem.value)
  })

  setItemProje(dataResult)
}

searchSubmitElem.addEventListener("click", function () {
  searchProje()
})

searchInputElem.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    searchProje()
  }
})

// filter item proje
document.getElementById("filter").addEventListener("change", function () {

  searchProje()
  if (this.value == "all") {
    dataResult = dataResult;
  }
  else {
    dataResult = dataResult.filter(dt => {
      return dt.category == this.value;
    })
  }

  setItemProje(dataResult)
})

// set url social
const dataSocial = [
  {
    phone: "09151234567",
    email: "#@gmail.com",
    telegram: "https://t.me/developerwebsite",
    instagram: "https://instagram.com/#",
    github: "https://github.com/6mir"
  }
]
dataSocial.forEach(dt => {
  document.querySelectorAll(".telegram-link").forEach((element) => {
    element.href = dt.telegram;
  });

  document.querySelectorAll(".instagram-link").forEach((element) => {
    element.href = dt.instagram;
  });

  document.querySelectorAll(".email-link").forEach((element) => {
    element.href = `mailto:${dt.email}`;
  });

  document.querySelectorAll(".phone-link").forEach((element) => {
    element.href = `tel:${dt.phone}`;
  });
  document.querySelectorAll(".github-link").forEach((element) => {
    element.href = dt.github;
  });
})

// set element skills
const dataSkills = [
  { name: "HTML", "percentage": 99 },
  { name: "CSS", "percentage": 99 },
  { name: "Tailwind Css", "percentage": 95 },
  { name: "JavaScript", "percentage": 50 },
  { name: "php", "percentage": 25 },
  { name: "MySql", "percentage": 25 }
]
const skillsContainer = document.getElementById("skills-container");
dataSkills.forEach(dt => {
  const item = document.createElement("div")
  item.className = 'w-11/12 md:w-2/5';
  item.innerHTML = `
    <div class="w-full h-5 md:h-7 rounded-full overflow-hidden border border-blue-400">
      <div class="progress-bar relative flex justify-between items-center overflow-hidden bg-blue-400 dark:bg-blue-600 h-full px-2" style="width: 0;">
        <p class="font-BoldFt text-sm md:text-base mt-1">${dt.name}</p>
        <p class="text-xs md:text-sm">${dt.percentage}%</p>
      </div>
    </div>
`

  item.querySelector('.progress-bar').style.width = `${dt.percentage}%`;

  skillsContainer.appendChild(item);
})


const bgcolortarElem = document.getElementById("bgcolortar")
function tarabg(isTrOrFa) {

  if (isTrOrFa) {
    bgcolortarElem.style.display = "block"
  } else {
    bgcolortarElem.style.display = "none"
  }
}


// box qr code is item proje
const qrcode = document.getElementById("qrcode");
const closeqrcode = document.getElementById("closeqrcode");
const imageqr = document.getElementById("imgqr");
const qrloader = document.getElementById("loader");

function srcimageqr(url) {
  imageqr.src = url;
  document.body.classList.add("overflow-hidden");
  qrcode.classList.add("scale-100");
  loadImg("imgqr", "loader")
  tarabg(true)
}

function hiddenbox() {
  if (qrcode.classList.contains("scale-100")) {
    document.body.classList.remove("overflow-hidden");
    qrcode.classList.remove("scale-100");
    imageqr.classList.add("hidden");
    qrloader.classList.remove("hidden");
    tarabg(false)
  }
}

closeqrcode.addEventListener("click", function () {
  hiddenbox();
});

bgcolortarElem.addEventListener("click", function (e) {
  if (!qrcode.contains(e.target)) {
    hiddenbox();
  }
});


// box 1 proje car
const modal = document.getElementById("project-modal");
const closeModal = document.getElementById("close-modal");

function btnproje() {
  document.body.classList.add("overflow-hidden");
  modal.classList.add("scale-100");
  tarabg(true)
}

closeModal.addEventListener("click", () => {
  document.body.classList.remove("overflow-hidden");
  modal.classList.remove("scale-100");
  tarabg(false)
});

// scrool to proje
function proje() {
  document.getElementById("pj").scrollIntoView();
}

// modal copy
function copyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.display = "hidden";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  const feedback = document.getElementById("copyFeedback");
  feedback.style.right = "8px";
  setTimeout(() => feedback.style.right = "-999px", 2000);
};




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


// modal zaban
const languageModal = document.getElementById("languageModal");
function showLanguageModal(button) {
  const languages = button
    .closest("[data-languages]")
    .getAttribute("data-languages")
    .split(",");

  const languageList = document.getElementById("languageList");
  languageList.innerHTML = "";

  languages.forEach((language) => {
    const listItem = document.createElement("li");
    listItem.textContent = language;
    languageList.appendChild(listItem);
  });

  document.body.classList.add("overflow-hidden");
  languageModal.classList.add("scale-100");
  tarabg(true)
}

function closeLanguageModal() {
  if (languageModal.classList.contains("scale-100")) {
    languageModal.classList.remove("scale-100");
    document.body.classList.remove("overflow-hidden");
    tarabg(false)
  }
}

bgcolortarElem.addEventListener("click", function (e) {
  if (!languageModal.contains(e.target)) {
    closeLanguageModal();
  }
});