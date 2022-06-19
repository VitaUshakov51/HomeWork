
AOS.init(
  
);

$(function () {

    $('.feature').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });

$('.header__burger').on('click' , function(e) {
  e.preventDefault()
  $('.header__top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay--show')
})

    });