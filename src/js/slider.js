const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 72,
  //ceterInsufficientSlides: true,
  //enteredSlides: true,
  //centeredSlidesBounds: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 4,
    },
  },

  // Pagination
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
    clickable: "true",
    /*namicBullets: true,
    dynamicMainBullets: "1",*/
  },

  // Navigation arrows
  navigation: {
    nextEl: ".carousel__button.next",
    prevEl: ".carousel__button.prev",
  },
});
