let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
let links = document.querySelectorAll(".header__list");

function toggleMobileMenu() {
  burger.classList.toggle("is-open");
  menu.classList.toggle("is-open");
}

/* Open/close mobile menu */
burger.addEventListener("click", toggleMobileMenu);

/* Close menu after choose link */
links.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMobileMenu();
  });
});

/* Close menu after click on free space */
menu.addEventListener("click", (event) => {
  if (event.target === menu) {
    toggleMobileMenu();
  }
});
