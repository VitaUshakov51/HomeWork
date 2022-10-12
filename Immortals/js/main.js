
$(function () {



$('.burger').on('click' , function(e) {
  e.preventDefault()
  $('.header__nav').toggleClass('header__nav--open')
  $('.overlay').toggleClass('overlay--show')
})


$('.nft__slider').slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  appendDots: $('.nft__dots'),
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});

$('.nft__arrow-left').on('click', function (e) {
  e.preventDefault()
  $('.nft__slider').slick('slickPrev')
})
$('.nft__arrow-right').on('click', function (e) {
  e.preventDefault()
  $('.nft__slider').slick('slickNext')
})

    });