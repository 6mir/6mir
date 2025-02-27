// box mobile header and ertebat
const box_ertebat = document.getElementById("box-ertebat");
const box_ertebat_div = document.querySelector("#box-ertebat > div");
const btn_ertebat = document.getElementById("btn-ertebat");

btn_ertebat.addEventListener("click", function () {
  box_ertebat.classList.add("!flex");
});

window.addEventListener("click", function (e) {
  if (!box_ertebat_div.contains(e.target) && !btn_ertebat.contains(e.target)) {
    box_ertebat.classList.remove("!flex");
  }
});

const box_mobile = document.getElementById("box-mobile");
const box_mobile_div = document.querySelector("#box-mobile > div");
const nav_mobile = document.getElementById("nav-mobile");
const close_modal = document.getElementById("close-modal");

function close_modal_f() {
  box_mobile_div.classList.add("-bottom-96");
  box_mobile_div.classList.remove("bottom-0");
  setTimeout(() => {
    box_mobile.classList.add("hidden");
  }, 100);
}

nav_mobile.addEventListener("click", function () {
  box_mobile.classList.remove("hidden");
  setTimeout(() => {
    box_mobile_div.classList.remove("-bottom-96");
    box_mobile_div.classList.add("bottom-0");
  }, 10);
});

close_modal.addEventListener("click", function () {
  close_modal_f();
});

window.addEventListener("click", function (e) {
  if (!box_mobile_div.contains(e.target) && !nav_mobile.contains(e.target)) {
    close_modal_f();
  }
});
