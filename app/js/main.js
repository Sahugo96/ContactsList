if (window.navigator.appCodeName === 'Safari') {
  document.body.classList.add("no-webp");
} else {
  document.body.classList.add("webp");
}

var elements = document.querySelectorAll(".gallery__favorite");

elements.forEach(function(element) {
  element.addEventListener("click", function() {
    if (this.classList.contains('gallery__favorite--active')) {
      this.classList.remove('gallery__favorite--active');
    } else {
      this.classList.add('gallery__favorite--active');
    }
  });
});

$('.cart__favorite').on('click', function (e) {
  $(this).closest(".cart").toggleClass('cart--favorite');
  e.preventDefault();
});

$('.menu-mob__login').on('click', function (e) {
  e.preventDefault();
  $(this).closest(".menu-mob__top").removeClass('menu-mob__top--undefined');
});

$('.menu-mob__btn').on('click', function (e) {
  e.preventDefault();
  $(".menu-mob").addClass('menu-mob--active');
  $('body').addClass('body--active');
  $(".menu-mob__wrapper").slideToggle();
});

$(document).mouseup(function (e) {
  if ($(".menu-mob__inner").has(e.target).length === 0) {
    $('.menu-mob__wrapper').css('display', 'none')  
    $('body').removeClass('body--active');
    $(".menu-mob").removeClass('menu-mob--active');
  }
});

const categories_swiper = new Swiper('.categories__inner', {
  slidesPerView: 3.62,
  spaceBetween: 15.5,
  loop: true,
  centeredSlides: true,

  navigation: {
    nextEl: '.categories__next',
    prevEl: '.categories__prev',
  },

  breakpoints: {
    769: {
      slidesPerView: 5,
      spaceBetween: 29,
    },
  }
});