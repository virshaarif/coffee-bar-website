const navLinks = document.querySelectorAll(".nav-menu .nav-link");
  const menuOpenButton = document.querySelector("#menu-open-button");
  
  const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");


menuOpenButton.addEventListener("click", () => {

  navMenu.style.left = "0";
});
menuCloseButton.addEventListener("click", () => {
 
  navMenu.style.left = "-300px";
});
navLinks.forEach(link => {
  link.addEventListener("click", () => 
 menuOpenButton.click());
  });
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor:true,
spaceBetween:25,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    }
  }
});

