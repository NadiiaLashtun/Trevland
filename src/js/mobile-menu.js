let mobileMenu = document.querySelector(".mobile-menu");
let btnOpen = document.querySelector(".menu-btn-open");
let btnClose = document.querySelector(".menu-btn-close");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("is-open");
  console.log("toggle menu");
}

btnOpen.addEventListener("click", toggleMobileMenu);
btnClose.addEventListener("click", toggleMobileMenu);
