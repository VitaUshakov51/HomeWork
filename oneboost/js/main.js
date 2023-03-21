$(document).ready(function () {


    new WOW({
        animateClass: 'animate__animated',
    }).init();


    $('#search').bind('click', function (e) {
        e.preventDefault();
        alert('Поиск пока недоступен :(');
    })

    $('.slider').slick({
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
    });

    $(".arrowLeft").click(function () {
        $(".slider").slick("slickPrev");
    });

    $(".arrowRight").click(function () {
        $(".slider").slick("slickNext");
    });

    $('.image-link').magnificPopup({type:'image'});



    var icons = {
        header: "ui-icon-caret-1-s",
        activeHeader: "ui-icon-caret-1-n"
    };
    $("#accordion").accordion({
        icons: icons
    });
    $("#toggle").button().on("click", function () {
        if ($("#accordion").accordion("option", "icons")) {
            $("#accordion").accordion("option", "icons", null);
        } else {
            $("#accordion").accordion("option", "icons", icons);
        }
    });



    $('#index').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

    let form = $('form');
    form.bind('submit', function (e) {
        e.preventDefault();
        if ($('#name').val().length < 1) {
            alert('Заполните поле Имя');
        } else if ($('#lastName').val().length < 1) {
            alert('Заполните фамилию')
        } else if ($('#phone').val().length < 1) {
            alert('Заполните номер телефона')
        } else if ($('#country').val().length < 1) {
            alert('Заполните страну')
        } else if ($('#index').val().length < 1) {
            alert('Заполните индекс')
        } else if ($('#address').val().length < 1) {
            alert('Заполните адрес')
        } else {
            $('#orderTitle').text('Данные отправлены');
            form.css('display', 'none');
            $('.thanks').removeClass('d-none');
        }
    })

    $('#phone').inputmask({"mask": "8 (999)-999-9999"});


});