$(document).ready(function () {

    new WOW({
            animateClass: 'animate__animated',
        }
    ).init();

    $(function () {
        $('#nav-icon1').click(function () {
            $(this).toggleClass('open');
            $('.header__nav').toggleClass('active');
            $('body').toggleClass('scroll');
            $('.header__link').click(function () {
                $('.header__nav').removeClass('active');
                $('#nav-icon1').removeClass('open');
                $('body').removeClass('scroll');
            })
        });
    });

    $('.masters__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $('.masters__dots'),
        responsive: [
            {
                breakpoint: 1115,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 755,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $(".masters__arrow-prev").click(function () {
        $(".masters__slider").slick("slickPrev");
    });
    $(".masters__arrow-next").click(function () {
        $(".masters__slider").slick("slickNext");
    });

    $('#eat').on('click', function (e) {
        e.preventDefault();
        $('#eat').addClass('active');
        $('#kalyan').removeClass('active');
        $('#bar').removeClass('active');
        $('#tea').removeClass('active');
        $('.price__inner-cal').css('display', 'none');
        $('.price__inner-tea').css('display', 'none');
        $('.price__inner-bar').css('display', 'none');
        $('.price__inner-eat').fadeIn(600);
        $('.price__inner-eat').css('display', 'flex');
    })

    $('#tea').on('click', function (e) {
        e.preventDefault();
        $('#tea').addClass('active');
        $('#eat').removeClass('active');
        $('#kalyan').removeClass('active');
        $('#bar').removeClass('active');
        $('.price__inner-cal').css('display', 'none');
        $('.price__inner-tea').fadeIn(600);
        $('.price__inner-tea').css('display', 'flex');
        $('.price__inner-bar').css('display', 'none');
        $('.price__inner-eat').css('display', 'none');
    })

    $('#kalyan').on('click', function (e) {
        e.preventDefault();
        $('#kalyan').addClass('active');
        $('#eat').removeClass('active');
        $('#bar').removeClass('active');
        $('#tea').removeClass('active');
        $('.price__inner-cal').fadeIn(600);
        $('.price__inner-cal').css('display', 'flex');
        $('.price__inner-tea').css('display', 'none');
        $('.price__inner-bar').css('display', 'none');
        $('.price__inner-eat').css('display', 'none');
    })

    $('#bar').on('click', function (e) {
        e.preventDefault();
        $('.price__inner-bar').fadeIn(600);
        $('#bar').addClass('active');
        $('#eat').removeClass('active');
        $('#kalyan').removeClass('active');
        $('#tea').removeClass('active');
        $('.price__inner-cal').css('display', 'none');
        $('.price__inner-tea').css('display', 'none');
        $('.price__inner-bar').css('display', 'flex');
        $('.price__inner-eat').css('display', 'none');
    })


    $('.promo__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        appendDots: $('.promo__dots'),
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 756,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    $('.interior__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        appendDots: $('.interior__dots'),
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 510,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
    });


    $('.interior__image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    ymaps.ready(init);

    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.74224384, 37.65533961],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17,
            controls: [],
        }, {
            suppressMapOpenBlock: true
        });
        var myPlacemark = new ymaps.Placemark([55.74224384, 37.65533961], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../../dist/images/mapbar.png',
            iconImageSize: [138, 40],
            iconImageOffset: [-3, -42],

        });
        myMap.geoObjects.add(myPlacemark);


    }


    $('#phone').usPhoneFormat({
        format: '(xxx) xxx-xxxx',
    });
    let loader = $('.loader');

    $('#submit').click(function (e) {
        e.preventDefault();
        let name = $('#name');
        let phone = $('#phone');
        let hasError = false;

        $('.booking__error-input').hide();

        if (!name.val()) {
            name.prev().show();
            name.css('border', '1px solid red');
            hasError = true;
        }
        if (!phone.val()) {
            phone.prev().show();
            phone.css('border', '1px solid red');
            hasError = true;
        }

        if (!hasError) {
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        $('.booking__form').hide();
                        $('.booking__title').text('Спасибо, мы свяжемся с вами в ближайшее время!».');
                    } else {
                        alert('Ошибка, попробуйте еще раз');
                    }
                });
        }
    })


})