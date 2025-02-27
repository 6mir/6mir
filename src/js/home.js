// src img error
const errorSrc = "./src/picture/error.png";

// img 1 top site big
const loadbg = document.getElementById("loadbg");
const loadimgbg = document.getElementById("loadimgbg");

loadimgbg.src = loadimgbg.src || errorSrc;

loadimgbg.onload = function () {
  loadimgbg.classList.remove("hidden");
  loadbg.classList.add("hidden");
};

loadimgbg.onerror = function () {
  loadimgbg.src = errorSrc;
};

// box qr code is item proje
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
  const lodallitem = document.getElementById("loader");

  imageqr.src = imageqr.src || errorSrc;

  imageqr.onload = function () {
    imageqr.classList.remove("hidden");
    lodallitem.classList.add("hidden");
  };

  imageqr.onerror = function () {
    imageqr.src = errorSrc;
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
  document.querySelectorAll(".project > article").forEach((project) => {
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

// modal copy
const copyToClipboard = async (text) => {
  try {
    (await navigator.clipboard?.writeText(text)) ||
      (() => {
        const t = document.createElement("textarea");
        Object.assign(t, {
          value: text,
          style: { position: "absolute", left: "-9999px" },
        });
        document.body.append(t);
        t.select();
        document.execCommand("copy");
        t.remove();
      })();
    document.getElementById("copyFeedback").classList.toggle("hidden", false);
    setTimeout(
      () =>
        document
          .getElementById("copyFeedback")
          .classList.toggle("hidden", true),
      1000
    );
  } catch (e) {
    console.error("Copy failed:", e);
  }
};

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

// loader item card proje all
const projectContainer = document.querySelector(".project");
const handleImageLoading = (imgItem, loaderItem) => {
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

//  data item card proje all
const dataFile = "./src/js/data.json";
fetch(dataFile)
  .then((response) => response.json())
  .then((data) => {
    data.cards.forEach((item) => {
      const card = document.createElement("article");
      card.setAttribute("data-category", item.category);
      card.setAttribute("data-aos", "zoom-in-down");
      card.setAttribute("data-languages", item.languages.join(","));
      card.className =
        "itemproje block w-44 md:w-72 bg-gray-50 dark:bg-[rgb(27_52_77)] shadow-normal dark:shadow-normaldark p-1.5 md:p-3 rounded-lg";
      card.innerHTML = `
               <!-- image -->
             <div class="w-full aspect-video rounded-lg overflow-hidden relative -top-10">
             <a href="${item.websiteUrl}" target="_blank" rel="noopener noreferrer">
                 <img alt="${item.title}" class="imglod size-full hidden hover:scale-105 transform transition duration-200 delay-75"
                     src="${item.image}">
                 <div
                     class="loaderlod flex items-center justify-center animate-pulse size-full bg-gray-300 dark:bg-gray-700">
                     <svg class="size-14 md:size-20 text-gray-200 dark:text-gray-600">
                         <use href="#loaderimg"></use>
                     </svg>
                 </div>
             </a>
             </div
             <!-- title and description -->
              <div class="block -mt-8">
                      <h2
                         class="font-BoldFt text-base md:text-xl line-clamp-1 text-gray-800 dark:text-gray-100">
                        <a href="${item.websiteUrl}" target="_blank" rel="noopener noreferrer">
                         ${item.title}
                        </a>
                      </h2>
                    </div> 


             <!-- btn time and qrcode -->
             <div class="flex justify-between items-center text-gray-500 dark:text-gray-300 my-2">
             <time class="flex items-center gap-1">
                 <svg class="size-5 md:size-6 stroke-current stroke-2">
                     <use href="#time"></use>
                 </svg>
                 <span class="text-sm md:text-base">${item.date}</span>
             </time>
             <div onclick="srcimageqr('${item.qrCodeImage}')" class="bg-transparent cursor-pointer">
                 <svg
                     class="size-6 md:size-7 stroke-[1.4px] hover:text-gray-700 hover:dark:text-gray-200 transition duration-200">
                     <use href="#qr"></use>
                 </svg>
             </div>
             </div>
             <!-- btn copy and languages -->
             <div class="flex justify-between mb-3 text-gray-500 dark:text-gray-300">
             <div onclick="showLanguageModal(this)"
                 class="flex items-center gap-1 cursor-pointer hover:text-gray-700 hover:dark:text-gray-200 transition duration-200">
                 <svg class="size-5 md:size-6 stroke-[0.7px] stroke-current">
                     <use href="#zabans"></use>
                 </svg>
                 <p class="text-sm md:text-base">زبان‌ها</p>
             </div>
             <div onclick="copyToClipboard('${item.websiteUrl}')"
                 class="flex items-center justify-center bg-transparent cursor-pointer">
                 <svg
                     class="size-6 md:size-7 stroke-[1.5px] stroke-current hover:stroke-gray-700 hover:dark:stroke-gray-200 duration-200  fill-none">
                     <use href="#copy"></use>
                 </svg>
             </div>
             </div>
             <span
             class="w-full h-px block bg-neutral-200/70 dark:bg-white/10 shadow-normal dark:shadow-normaldark my-2 rounded-full"></span>
             <!-- btn view website -->
             <a href="${item.websiteUrl}" target="_blank" rel="noopener noreferrer"
             class="linkweb dark:hover:text-gray-200 text-sm md:text-base dark:text-blue-400 text-blue-500 hover:text-gray-700 flex items-center w-max mx-auto font-BoldFt transition duration-200 delay-75">
             <p>مشاهده وب‌سایت</p>
             <svg class="size-5 md:size-6 fill-current">
                 <use href="#arowleft"></use>
             </svg>
             </a>
             <span class="codeproje hidden">${item.code}</span>
 `;
      projectContainer.appendChild(card);
      const imgItem = card.querySelector(".imglod");
      const loaderItem = card.querySelector(".loaderlod");
      handleImageLoading(imgItem, loaderItem);
    });
  })
  .catch((error) => {
    document.querySelector(".project").innerHTML = `
    <div class="flex items-center gap-1 p-2 md:p-4 mb-5 bg-gray-100 dark:bg-[rgb(27_52_77)] text-gray-600 dark:text-gray-300 shadow-sm rounded-md">
    <svg class="size-9 md:size-12 stroke-current stroke-[1.4px]">
    <use href="#error">
    </svg>
      <p class="text-base md:text-lg">مشکلی در بارگذاری پیش آمد است، خطای (404).</p>
    </div>
    `;
  });

// menu mobile
const menu = document.getElementById("menubox");
const menuas = document.querySelectorAll("#menubox li");
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
  .catch((error) => console.log("Error Link (404)."));

function proje() {
  document.getElementById("pj").scrollIntoView();
}

function maharat() {
  document.getElementById("mt").scrollIntoView();
}

function checkScreenWidth() {
  if (window.innerWidth < 280) {
    body.classList.add("hidden");
    alert("برای مشاهده بهتر، از دستگاه با صفحه‌نمایش بزرگ‌تر استفاده کنید.");
  }
}
checkScreenWidth();

// maharat
const jsonFilePath = "./src/js/data.json";

// تابع ایجاد مهارت
function createSkillElement(skill) {
  const skillDiv = document.createElement("div");
  skillDiv.className = "w-11/12 md:w-2/5 skill";

  skillDiv.innerHTML = `
<div class="w-full h-5 md:h-7 rounded-full overflow-hidden border border-orange-400">
  <div class="progress-bar relative flex justify-between items-center overflow-hidden bg-orange-400 dark:bg-orange-800 h-full px-2" style="width: 0;">
    <p class="font-BoldFt text-sm md:text-base mt-1">${skill.name}</p>
    <p class="text-xs md:text-sm">${skill.percentage}%</p>
  </div>
</div>

  `;

  return skillDiv;
}

// تابع برای بارگذاری مهارت‌ها
async function loadSkills() {
  const skillsContainer = document.getElementById("skills-container");

  try {
    const response = await fetch(jsonFilePath);
    if (!response.ok) throw new Error("مشکلی در دریافت فایل JSON پیش آمد.");

    const { skills } = await response.json(); // استخراج داده‌های مهارت‌ها

    skills.forEach((skill) => {
      const skillDiv = createSkillElement(skill);
      skillsContainer.appendChild(skillDiv);
    });

    setupIntersectionObserver(skills);
  } catch (error) {
    displayErrorMessage();
  }
}

// تنظیمات Intersection Observer
function setupIntersectionObserver(skillsData) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector(".progress-bar");
          const skillName = entry.target.querySelector("p").textContent;
          const skillData = skillsData.find(
            (skill) => skill.name === skillName
          );

          if (skillData) {
            progressBar.style.transition = "width 1s ease-in-out";
            progressBar.style.width = `${skillData.percentage}%`;

            observer.unobserve(entry.target); // حذف از مشاهده‌گر پس از نمایش
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  document
    .querySelectorAll(".skill")
    .forEach((skill) => observer.observe(skill));
}

// نمایش پیام خطا
function displayErrorMessage() {
  const skillsContainer = document.getElementById("skills-container");
  skillsContainer.innerHTML = `
    <div class="flex items-center gap-1 p-2 md:p-4 mt-3 mb-5 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 shadow-sm rounded-md">
      <svg class="size-9 md:size-12 stroke-current stroke-[1.4px]">
        <use href="#error"></use>
      </svg>
      <p class="text-base md:text-lg">مشکلی در بارگذاری پیش آمد است، خطای (404).</p>
    </div>
  `;
}

// اجرای پس از بارگذاری صفحه
window.addEventListener("load", loadSkills);

// تابع جستجو
function searchproje() {
  var noserch = false;
  var numsearch = 0;
  var nosc = 0;
  const inputsearch = document.getElementById("searchInput").value;
  const mainsearch = document.querySelectorAll(".itemproje");
  const itemmainproje = document.getElementById("no-search");
  const itemnumsearch = document.getElementById("itemnumsearch");

  // اگر ورودی خالی باشد، جستجو انجام نشود و تمامی آیتم‌ها نمایش داده شوند
  if (inputsearch === "") {
    mainsearch.forEach((main) => {
      // بازگرداندن متن‌ها به حالت اولیه (بدون هایلایت)
      const titlesc = main.querySelector("h2");

      titlesc.innerHTML = titlesc.textContent;

      main.classList.remove("hidden"); // نمایش تمامی آیتم‌ها
    });

    itemmainproje.classList.add("hidden"); // مخفی کردن پیام "یافت نشد"
    itemnumsearch.textContent = ""; // پاک کردن تعداد نتایج
    document.getElementById("closesearch_btn").style.display = "none";
    return; // از اجرای باقی کد جلوگیری می‌کنیم
  }

  // جستجو و نمایش نتایج مرتبط
  mainsearch.forEach((main) => {
    const titlesc = main.querySelector("h2").textContent;
    const codeproje = main.querySelector(".codeproje").textContent;

    // تابعی برای هایلایت کردن کلمات جستجو شده
    function highlightText(text, search) {
      const regex = new RegExp(`(${search})`, "gi");
      return text.replace(
        regex,
        '<span class="text-yellow-600 dark:text-yellow-500 font-bold">$1</span>'
      );
    }

    // هایلایت کردن کلمات جستجو شده در عنوان و توضیحات
    main.querySelector("h2").innerHTML = highlightText(titlesc, inputsearch);

    // اگر جستجو با متن‌های موجود تطابق داشت، نمایش داده شود
    if (
      titlesc.includes(inputsearch) ||
      codeproje.includes(inputsearch)
    ) {
      main.removeAttribute("data-aos");
      main.classList.remove("hidden");
      noserch = true;
      numsearch++;
      nosc++;
    } else {
      nosc++;
      main.classList.add("hidden");
    }
  });

  // در صورت عدم یافتن نتیجه
  if (!noserch) {
    itemmainproje.textContent = inputsearch + " یافت نشد.";
    itemmainproje.classList.remove("hidden");
  } else {
    itemmainproje.classList.add("hidden");
  }

  // نمایش تعداد نتایج
  itemnumsearch.textContent = `${numsearch} / ${nosc}`;
  document.getElementById("closesearch_btn").style.display = "block";
}

// تابع بستن جستجو
function closesearch() {
  // پاک کردن ورودی جستجو
  document.getElementById("searchInput").value = "";

  // نمایش تمامی آیتم‌ها و بازگرداندن متن‌ها به حالت اولیه
  const mainsearch = document.querySelectorAll(".itemproje");
  const itemmainproje = document.getElementById("no-search");
  const itemnumsearch = document.getElementById("itemnumsearch");

  mainsearch.forEach((main) => {
    const titlesc = main.querySelector("h2");

    // بازگرداندن متن به حالت اولیه (بدون هایلایت)
    titlesc.innerHTML = titlesc.textContent;

    // نمایش تمامی آیتم‌ها
  });

  // مخفی کردن پیام "یافت نشد"
  itemmainproje.classList.add("hidden");

  // پاک کردن تعداد نتایج
  itemnumsearch.textContent = "";
  document.getElementById("closesearch_btn").style.display = "none";
}

function closesearch_filter() {
  closesearch();
}
function closesearch_btn() {
  closesearch();
  const mainsearch = document.querySelectorAll(".itemproje");
  mainsearch.forEach((main) => {
    main.classList.remove("hidden");
  });
}
