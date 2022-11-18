// change navbar onscroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});

//show hide faq
const faqEls = document.querySelectorAll(".faq");
faqEls.forEach((faqEl) => {
  faqEl.addEventListener("click", () => {
    faqEl.classList.toggle("open");
    // change icon
    const icon = faqEl.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// show / hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", function () {
  menu.style = "display: flex";
  closeBtn.style = "display: inline-block";
  menuBtn.style = "display: none";
});
closeBtn.addEventListener("click", function () {
  menu.style = "display: none";
  menuBtn.style = "display: inline-block";
  closeBtn.style = "display: none";
});
