$(document).ready(function () {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем за пределы всплывающего окна, закрываем это окно]
    $("html").on("click", function (e) {
        if (
            !$(e.target).closest(".cat__tabs").length
        ) {
            $("body").removeClass("overflow-hidden")
            $('#page').removeClass('bg-overlay')

            $('.cat__tabs').removeClass('active')
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


});