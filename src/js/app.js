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

  const srcerror2 = "./src/picture/error/img.png"; // تصویر خطا

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

  // loader is yes
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
const btnProje = document.getElementById("btn-proje");
const modal = document.getElementById("project-modal");
const closeModal = document.getElementById("close-modal");
const exitConfirmation = document.getElementById("exit-confirmation");
const confirmExit = document.getElementById("confirm-exit");
const cancelExit = document.getElementById("cancel-exit");
// box 1 proje car
btnProje.addEventListener("click", () => {
  modal.classList.remove("hidden");
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

//  loading
document.addEventListener("DOMContentLoaded", function () {
  // load main
  // setTimeout(() => {
  document.getElementById("mainbody").classList.remove("hidden");
  document.getElementById("lodmain").classList.add("hidden");

  // custom aos
  AOS.init({
    duration: 1000,
    once: true,
  });
  // }, 1000);

  // load picture
});

// zaban and copy
function copyToClipboard(text) {
  // استفاده از Clipboard API برای مرورگرهای مدرن
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showFeedback());
  } else {
    // استفاده از روش قدیمی برای مرورگرهای قدیمی
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showFeedback();
  }
}

// نمایش بازخورد به کاربر
function showFeedback() {
  const feedback = document.getElementById("copyFeedback");
  feedback.classList.remove("hidden"); // نمایش پیام
  setTimeout(() => {
    feedback.classList.add("hidden"); // مخفی کردن پیام بعد از 1 ثانیه
  }, 1000);
}

// نمایش مدال زبان‌ها
const languageModal = document.getElementById("languageModal");
function showLanguageModal(button) {
  // دریافت زبان‌ها از data-languages آیتم
  const languages = button
    .closest("[data-languages]")
    .getAttribute("data-languages")
    .split(",");

  // پیدا کردن بخش زبان‌ها و پاک کردن محتویات قبلی
  const languageList = document.getElementById("languageList");
  languageList.innerHTML = ""; // ابتدا لیست قبلی را پاک می‌کنیم

  // افزودن زبان‌ها به لیست
  languages.forEach((language) => {
    const listItem = document.createElement("li");
    listItem.textContent = language;
    languageList.appendChild(listItem);
  });

  // نمایش مدال
  languageModal.classList.remove("hidden");
  body.classList.add("overflow-hidden");
}

// بستن مدال
function closeLanguageModal() {
  languageModal.classList.add("hidden");
  body.classList.remove("overflow-hidden");
}

// json data item maharat
// محل فایل JSON
const dataFile = "./src/js/data.json";

// عنصر کانتینر برای کارت‌ها
const projectContainer = document.querySelector(".project");

// تابع مدیریت لودینگ تصاویر
const handleImageLoading = (imgItem, loaderItem) => {
  const errorSrc = "./src/picture/error/img.png";

  // اضافه کردن رویدادها برای تصویر
  imgItem.onload = () => {
    imgItem.classList.remove("hidden");
    loaderItem.classList.add("hidden");
  };

  imgItem.onerror = () => {
    imgItem.src = errorSrc;
  };

  // اگر تصویر قبلاً در کش مرورگر بارگذاری شده باشد
  if (imgItem.complete) {
    imgItem.onload();
  }
};

// خواندن داده‌ها از JSON
fetch(dataFile)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      // ساخت هر کارت
      const card = document.createElement("div");
      card.setAttribute("data-category", item.category);
      card.setAttribute("data-aos", "zoom-in-down");
      card.setAttribute("data-languages", item.languages.join(","));
      card.className =
        "block flex-[4_4_20%] min-w-60 max-w-80 2xl:max-w-xl bg-white dark:bg-gray-800 shadow-lg p-3 pt-1 rounded-xl";

      // محتوای HTML کارت
      card.innerHTML = `
                        <!-- image -->
                        <div class="w-full aspect-video rounded-lg overflow-hidden relative -top-10">
                            <a href="${item.websiteUrl}" target="_blank" rel="noopener noreferrer">
                                <img class="imglod w-full h-full hidden hover:scale-105 duration-200 delay-75"
                                    src="${item.image}" alt="${item.title}">
                                 <div
                                    class="loaderlod flex items-center justify-center animate-pulse w-full h-full bg-gray-300 dark:bg-gray-700">
                                    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600">
                                        <use href="#loaderimg"></use>
                                    </svg>
                                </div> 
                            </a>
                        </div>


                        <!-- title -->
                        <div class="h-16 block -mt-6">
                          <h2
                            class="font-BoldFt text-xl line-clamp-2 -tracking-normal text-gray-800 dark:text-gray-100 hover:before:bg-green-400 dark:hover:before:bg-green-800 hover:before:rounded before:content-normal before:w-2 before:h-2 md:before:w-3 md:before:h-3 before:bg-orange-400 before:dark:bg-orange-800 before:inline-block md:before:ml-px before:rounded-full before:transition before:duration-200">
                              <a href="${item.websiteUrl}" target="_blank" rel="noopener noreferrer">
                                  ${item.title}
                                </a>
                            </h2>
                          </div>

                        <!-- btn time and qrcode -->
                        <div class="flex justify-between items-center text-gray-600 dark:text-gray-400 mt-6 mb-3">
                            <div class="flex items-center text-sm gap-1">
                                <svg class="w-5 h-5 stroke-gray-600 dark:stroke-gray-400 ">
                                    <use href="#time"></use>
                                </svg>
                                <span>تاریخ ساخت: ${item.date}</span>
                            </div>

                            <button onclick="srcimageqr('${item.qrCodeImage}')" class="bg-transparent">
                                <svg
                                    class="w-7 h-7  text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-gray-100 duration-200">
                                    <use href="#qr"></use>
                                </svg>
                            </button>
                        </div>


                        <!-- btn copy and languages -->
                        <div class="flex justify-between mb-3">
                            <div onclick="showLanguageModal(this)"
                                class="flex items-center gap-1 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-gray-100 duration-200">
                                <svg class="w-5 h-5 stroke-current">
                                    <use href="#zabans"></use>
                                </svg>
                                <p class="text-sm">زبان‌های استفاده‌شده</p>
                            </div>

                            <button onclick="copyToClipboard('${item.websiteUrl}')"
                                class="flex items-center justify-center bg-transparent">
                                <svg
                                    class="w-7 h-7 stroke-gray-600 dark:stroke-gray-400 hover:stroke-gray-900 hover:dark:stroke-gray-100 duration-200  fill-none">
                                    <use href="#copy"></use>
                                </svg>
                            </button>
                        </div>
                        <span
                            class="w-full h-px block bg-neutral-200/70 dark:bg-white/10 shadow-normal dark:shadow-normaldark my-2 rounded-full"></span>

                        <!-- btn view website -->
                        <a href="${item.websiteUrl}" target="_blank" rel="noopener noreferrer"
                            class="dark:hover:text-gray-200 text-base md:text-lg dark:text-blue-400 text-blue-500 hover:text-gray-700 flex items-center w-max mx-auto font-BoldFt duration-200 delay-75">
                            <p>مشاهده وب‌سایت</p>
                            <svg class="w-6 h-7 fill-current">
                                <use href="#arowleft"></use>
                            </svg>
                        </a>
   `;

      // اضافه کردن کارت به کانتینر
      projectContainer.appendChild(card);

      // پیدا کردن تصویر و لودر در کارت
      const imgItem = card.querySelector(".imglod");
      const loaderItem = card.querySelector(".loaderlod");

      // مدیریت لودینگ تصویر
      handleImageLoading(imgItem, loaderItem);
    });
  })
  .catch((error) => console.error("خطا در بارگذاری داده‌ها:", error));

// masdood
window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
window.addEventListener("keydown", (e) => {
  e.preventDefault();
});
