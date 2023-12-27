var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function() {
  var textCooperation1 = document.querySelector('.text__cooperation-1');

  function handleScroll() {
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;

    var elementOffsetTop = textCooperation1.getBoundingClientRect().top + scrollY;

    if (scrollY + windowHeight > elementOffsetTop) {
      textCooperation1.classList.add('appear');
      textCooperation1.classList.remove('disappear');
    } else {
      textCooperation1.classList.remove('appear');
      textCooperation1.classList.add('disappear');
    }
  }

  window.addEventListener('scroll', handleScroll);
  // Запускаем проверку при загрузке страницы
  handleScroll();
});

/* AOS */

AOS.init({
  disable: 'mobile'
  /*   once: true */
});