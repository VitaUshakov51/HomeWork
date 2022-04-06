$(function () {
 
  $(".feedback__info-rateYo").rateYo({
    rating: 3.6 ,
    starWidth: "20px", 
  });
 
  $('.feedback__slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed: 2000,
  });
});