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

// ok
// window.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });
// window.addEventListener("keydown", (e) => {
//   e.preventDefault();
// });

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

// box qr
const body = document.querySelector("body");
const qrmain = document.getElementById("boxqrcode");
const imageqr = document.getElementById("imgqr");
const closeqrcode = document.getElementById("closeqrcode");
const qrcode = document.getElementById("qrcode");
const qrloader = document.getElementById("loader");

function srcimageqr(url) {
  imageqr.src = url;
  body.classList.add("overflow-hidden");
  qrmain.classList.remove("hidden");
  setTimeout(() => {
    qrcode.classList.remove("scale-0");
  }, 10);

  const srcerror2 = "./src/picture/error/img.png";

  const lodallitem = document.getElementById("loader");

  imageqr.src = imageqr.src || srcerror2;

  imageqr.onload = function () {
    imageqr.classList.remove("hidden");
    lodallitem.classList.add("hidden");
  };

  imageqr.onerror = function () {
    imageqr.src = srcerror2;
  };
}

function hiddenbox() {
  body.classList.remove("overflow-hidden");
  qrmain.classList.add("hidden");
  qrcode.classList.add("scale-0");
  imageqr.classList.add("hidden");
  qrloader.classList.remove("hidden");
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
const modal = document.getElementById("project-modal");
const closeModal = document.getElementById("close-modal");
const exitConfirmation = document.getElementById("exit-confirmation");
const confirmExit = document.getElementById("confirm-exit");
const cancelExit = document.getElementById("cancel-exit");
// box 1 proje car
function btnproje() {
  modal.classList.remove("hidden");
  body.classList.add("overflow-hidden");
  setTimeout(() => {
    modal.querySelector("div").classList.remove("scale-0");
    modal.querySelector("div").classList.add("scale-100");
  }, 10);
}

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

// load main
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("mainbody").classList.remove("hidden");
    document.getElementById("lodmain").classList.add("hidden");

    // custom aos
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, 100);
});

// modal copy
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showFeedback());
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showFeedback();
  }
}

function showFeedback() {
  const feedback = document.getElementById("copyFeedback");
  feedback.classList.remove("hidden");
  setTimeout(() => {
    feedback.classList.add("hidden");
  }, 1000);
}

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

  languageModal.classList.remove("hidden");
  body.classList.add("overflow-hidden");
}

function closeLanguageModal() {
  languageModal.classList.add("hidden");
  body.classList.remove("overflow-hidden");
}
const boxlanguageModal = document.getElementById("boxlanguageModal");
languageModal.addEventListener("click", function (e) {
  if (!boxlanguageModal.contains(e.target)) {
    closeLanguageModal();
  }
});

// loader item card maharat all
const projectContainer = document.querySelector(".project");
const handleImageLoading = (imgItem, loaderItem) => {
  const errorSrc = "./src/picture/error/img.png";

  imgItem.onload = () => {
    imgItem.classList.remove("hidden");
    loaderItem.classList.add("hidden");
  };

  imgItem.onerror = () => {
    imgItem.src = errorSrc;
  };

  if (imgItem.complete) {
    imgItem.onload();
  }
};
//  data item card maharat all
const dataFile = "./src/js/data.json";
fetch(dataFile)
  .then((response) => response.json())
  .then((data) => {
    data.cards.forEach((item) => {
      const card = document.createElement("div");
      card.setAttribute("data-category", item.category);
      card.setAttribute("data-aos", "zoom-in-down");
      card.setAttribute("data-languages", item.languages.join(","));
      card.className =
        "block flex-[4_4_20%] min-w-60 max-w-80 bg-gray-50 dark:bg-gray-800 shadow-normal dark:shadow-normaldark p-3 rounded-lg";
      card.innerHTML = `
               <!-- image -->
             <div class="w-full aspect-video rounded-lg overflow-hidden relative -top-10">
             <a href="${item.websiteUrl}" target="_blank" rel="noopener noreferrer">
                 <img class="imglod size-full hidden hover:scale-105 transform transition duration-200 delay-75"
                     src="${item.image}" alt="${item.title}">
                 <div
                     class="loaderlod flex items-center justify-center animate-pulse size-full bg-gray-300 dark:bg-gray-700">
                     <svg class="size-14 md:size-20 text-gray-200 dark:text-gray-600">
                         <use href="#loaderimg"></use>
                     </svg>
                 </div>
             </a>
             </div
             <!-- title and description -->
              <div class=" block -mt-6">

                         <h2
                    class="font-BoldFt text-lg md:text-xl line-clamp-1 mb-1 -tracking-normal text-gray-800 dark:text-gray-100 hover:before:bg-green-400 dark:hover:before:bg-green-800 before:content-normal before:size-2.5  md:before:size-3 before:bg-orange-400 before:dark:bg-orange-800 before:inline-block md:before:ml-px before:rounded-l-full before:transition before:duration-200">
                    <a href="${item.websiteUrl}" target="_blank" rel="noopener noreferrer">
                    ${item.title}
                    </a>
                    </h2>
                    <h3
                    class="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 h-10">
                    ${item.description}
                    </h3>
                    </div> 


             <!-- btn time and qrcode -->
             <div class="flex justify-between items-center text-gray-500 dark:text-gray-400 mt-6 mb-3">
             <div class="flex items-center gap-1">
                 <svg class="size-6 stroke-current stroke-2">
                     <use href="#time"></use>
                 </svg>
                 <span class="text-sm">تاریخ ساخت: ${item.date}</span>
             </div>
             <button onclick="srcimageqr('${item.qrCodeImage}')" class="bg-transparent">
                 <svg
                     class="size-7 stroke-[1.4px] hover:text-gray-900 hover:dark:text-gray-100 transition duration-200">
                     <use href="#qr"></use>
                 </svg>
             </button>
             </div>
             <!-- btn copy and languages -->
             <div class="flex justify-between mb-3 text-gray-500 dark:text-gray-400">
             <div onclick="showLanguageModal(this)"
                 class="flex items-center gap-1 cursor-pointer hover:text-gray-900 hover:dark:text-gray-100 transition duration-200">
                 <svg class="size-6 stroke-[0.7px] stroke-current">
                     <use href="#zabans"></use>
                 </svg>
                 <p class="text-base">زبان‌های استفاده‌شده</p>
             </div>
             <button onclick="copyToClipboard('${item.websiteUrl}')"
                 class="flex items-center justify-center bg-transparent">
                 <svg
                     class="size-8 stroke-[1.5px] stroke-current hover:stroke-gray-900 hover:dark:stroke-gray-100 duration-200  fill-none">
                     <use href="#copy"></use>
                 </svg>
             </button>
             </div>
             <span
             class="w-full h-px block bg-neutral-200/70 dark:bg-white/10 shadow-normal dark:shadow-normaldark my-2 rounded-full"></span>
             <!-- btn view website -->
             <a href="${item.websiteUrl}" target="_blank" rel="noopener noreferrer"
             class="linkweb dark:hover:text-gray-200 text-base md:text-lg dark:text-blue-400 text-blue-500 hover:text-gray-700 flex items-center w-max mx-auto font-BoldFt transition duration-200 delay-75">
             <p>مشاهده وب‌سایت</p>
             <svg class="size-6 fill-current">
                 <use href="#arowleft"></use>
             </svg>
             </a>
 `;
      projectContainer.appendChild(card);
      const imgItem = card.querySelector(".imglod");
      const loaderItem = card.querySelector(".loaderlod");
      handleImageLoading(imgItem, loaderItem);
    });
  })
  .catch((error) => console.error("خطا در بارگذاری داده‌ها:", error));

// menu mobile
const menu = document.getElementById("menubox");
const menuas = document.querySelectorAll("#menubox a ,#menubox button");
const overlay = document.getElementById("overlay");

function showmenu() {
  menu.classList.remove("-right-96");
  menu.classList.add("right-0");
  overlay.classList.remove("hidden");
  body.classList.add("overflow-hidden");
  overlay.addEventListener("click", hiddenmenu);
}

function hiddenmenu() {
  menu.classList.add("-right-96");
  menu.classList.remove("right-0");
  overlay.classList.add("hidden");
  body.classList.remove("overflow-hidden");
  overlay.removeEventListener("click", hiddenmenu);
}

menuas.forEach((menua) => {
  menua.addEventListener("click", function () {
    hiddenmenu();
  });
});

// sochal media data
fetch("./src/js/data.json")
  .then((response) => response.json())
  .then((data) => {
    const { phone, email, telegram, instagram, github } = data.socialLinks;

    // درج لینک‌ها در تمام المان‌هایی که کلاس مشترک دارند
    document.querySelectorAll(".telegram-link").forEach((element) => {
      element.href = telegram;
    });

    document.querySelectorAll(".instagram-link").forEach((element) => {
      element.href = instagram;
    });

    document.querySelectorAll(".email-link").forEach((element) => {
      element.href = `mailto:${email}`;
    });

    document.querySelectorAll(".phone-link").forEach((element) => {
      element.href = `tel:${phone}`;
    });
    document.querySelectorAll(".github-link").forEach((element) => {
      element.href = github;
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));


  // internet
// گرفتن المان‌ها برای استفاده مجدد
const noElement = document.getElementById("no");
const yesElement = document.getElementById("yes");

// وضعیت قبلی (آفلاین یا آنلاین) را ذخیره می‌کنیم
let wasOffline = localStorage.getItem("wasOffline") === "true"; // از localStorage وضعیت قبلی را می‌گیریم

// مخفی کردن یا نشان دادن پیام‌ها
function toggleMessage(isOnline) {
  if (isOnline) {
    if (wasOffline) {
      // اگر قبلاً آفلاین بود، پیام آنلاین را نشان می‌دهیم و بعد از 2 ثانیه مخفی می‌کنیم
      yesElement.classList.remove("hidden");
      setTimeout(() => yesElement.classList.add("hidden"), 2000); // مخفی کردن پیام آنلاین بعد از 2 ثانیه
      wasOffline = false; // اکنون دیگر آفلاین نیستیم
      localStorage.setItem("wasOffline", "false"); // ذخیره وضعیت آنلاین در localStorage
    }
    noElement.classList.add("hidden"); // پیام آفلاین مخفی می‌شود
  } else {
    // اگر آفلاین هستیم، پیام آفلاین نمایش داده می‌شود
    yesElement.classList.add("hidden");
    noElement.classList.remove("hidden");
    wasOffline = true; // وضعیت قبلی آفلاین شده است
    localStorage.setItem("wasOffline", "true"); // ذخیره وضعیت آفلاین در localStorage
  }
}

// هنگام بارگذاری صفحه یا رفرش صفحه
window.addEventListener("DOMContentLoaded", () => {
  const isOnline = navigator.onLine;
  toggleMessage(isOnline);
});

// اضافه کردن لیسنر برای رویدادهای آنلاین و آفلاین
window.addEventListener("online", () => toggleMessage(true));
window.addEventListener("offline", () => toggleMessage(false));

// در صورتی که آفلاین شویم و صفحه رفرش شود، مطمئن شویم که پیغام آفلاین نمایش داده شود.
if (!navigator.onLine) {
  toggleMessage(false);  // پیام آفلاین را نمایش می‌دهیم
}
