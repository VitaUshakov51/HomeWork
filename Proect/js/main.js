$(function () {

  $('.question__link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('question__link--active')
    $(this).children('.question__text').slideToggle()

  })

  $('.reviews__slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    // autoplay: true,
    responsive:
      [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            arrows:false,
            // centerMode: true,
            // vertical:true,
            // verticalSwiping: true,
          },
        },
      ]
  });

  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })

});