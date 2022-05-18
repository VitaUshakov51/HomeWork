$(function () {

  $(".rateyo").rateYo({
    readOnly: false,
    rating: 4.5,
  });

  $('.testimonials__slider').slick({
    arrows: false,
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 4,
    appendDots: $(".testimonials__dots"),
    responsive:
    [
      {
        breakpoint: 610 ,
        settings: {
          slidesToShow: 1,
        
        } ,
      },
    ]
  });
  $('.testimonials__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('questions__acc-link--active')
    $(this).children('.questions__acc-text').slideToggle()
  })


  $('.burger , .overlay').on('click', function(e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })
});

