$(function () {


  $('.topnow__body').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive:
      [
        {
          breakpoint: 1410,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1230,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]
  });

  $('.collection__content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive:
      [
        {
          breakpoint: 1410,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1230,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]
  });

  $('.burger').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
  })

  $('.footer__nav-acc-head').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('footer__nav-acc-head--active')
    $(this).children('.footer__nav-acc-text').slideToggle()

  })
});

