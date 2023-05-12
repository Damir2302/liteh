$(document).ready(function () {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем за пределы всплывающего окна, закрываем это окно]
    $("html").on("click", function (e) {
        if (
            !$(e.target).closest(".cat__tabs").length &&
            !$(e.target).closest(".contacts__select").length
        ) {
            $("body").removeClass("overflow-hidden")
            $('#page').removeClass('bg-overlay')

            $('.cat__tabs').removeClass('active')
            $('.contacts__select').removeClass('active')
        }
    });

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
    $('.contacts__select-value').on('click', function() {
        $(this).parent().toggleClass('active')
    })

    $('.contacts__select-option').on('click', function() {
        $('.contacts__select-option').removeClass('active')
        $(this).addClass('active')

        $('.contacts__select-value').text($(this).text())

        $('.contacts__select').toggleClass('active')
    })

});