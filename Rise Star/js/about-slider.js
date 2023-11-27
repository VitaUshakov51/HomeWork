(function (){
    $('.team__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: '20px',
        arrows: false,
        appendDots: $(".team__arrows"),
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    });

    $(".team__arrow-left").click(function () {
        $(".team__slider").slick("slickPrev")
    })

    $(".team__arrow-right").click(function () {
        $(".team__slider").slick("slickNext")
    })

})();

