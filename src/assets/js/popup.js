$(document).ready(function () {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем за пределы всплывающего окна, закрываем это окно]
    $("html").on("click", function (e) {
        if (
            !$(e.target).closest(".cat__tabs").length &&
            !$(e.target).closest(".select-custom").length &&
            !$(e.target).closest(".popup").length &&
            !$(e.target).closest(".popup-open").length
        ) {
            $("body").removeClass("overflow-hidden")
            $('#page').removeClass('bg-overlay')

            $('.cat__tabs').removeClass('active')
            $('.select-custom').removeClass('active')
        }
    });

    // HEADER MENU
    $('.header__burger').on('click', function() {
        $('body').addClass('overflow-hidden')

        $(this).toggleClass('opened')
        $('.header__menu').slideToggle()
    })

    $('.nav__item-link').on('click', function(e) {
        if ($(this).hasClass(e.target.classList) && $(window).width() < 1024) {
            $(this).parent().toggleClass('opened')
            $(this).next().slideToggle()
        }
    })

    // CATALOG INNER TABS
    $('.cat__tabs-select').on('click', function() {
        $(this).parent().toggleClass('active')
    })

    if ($(window).width() < 1024) {
        $('.cat__tabs-btn[data-selected]').on('click', function() {
            $('.cat__tabs-btn').removeClass('active')
            $(this).addClass('active')

            $('.cat__tabs-select').text($(this).text())

            $('.cat__tabs').toggleClass('active')

            $('.cat__content').removeClass('active')
            $(`.cat__content[data-active=${$(this).attr('data-selected')}]`).addClass('active')
        })
    }

    if ($(window).width() >= 1024) {
        $('.cat__tabs-btn[data-selected]').on('click', function() {
            $('.cat__tabs-btn').removeClass('active')
            $(this).addClass('active')

            $('.cat__content').removeClass('active')
            $(`.cat__content[data-active=${$(this).attr('data-selected')}]`).addClass('active')
        })
    }

    // CONTACTS PAGE SELECT
    $('.select-value').on('click', function() {
        $(this).parent().toggleClass('active')
    })

    $('.select-option').on('click', function() {
        $('.select-option').removeClass('active')
        $(this).addClass('active')

        $('.select-value').text($(this).text())

        $('.select-custom').toggleClass('active')
    })

    // POPUP CART ADDED
    $('.popup-open').on('click', function() {
        $('#popup-cart-added').addClass('opened')
        $('#page').addClass('bg-overlay')

        setTimeout(() => {
            $('#popup-cart-added').removeClass('opened')
            $('#page').removeClass('bg-overlay')
        }, 3000);
    })

    $('.popup-close').on('click', function() {
        $('.popup').removeClass('opened')
        $('#page').removeClass('bg-overlay')
    })

});