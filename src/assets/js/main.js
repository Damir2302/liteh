$(document).ready(function() {

    // POPULAR SLIDER
    $('.popular__tab-item').on('click', function() {
        $('.popular__tab-item').removeClass('active')
        $(this).addClass('active')

        $('.popular__slider').removeClass('active')
        $(`.popular__slider[data-show=${$(this).attr('data-active')}]`).addClass('active')
    })

    // FAQ
    $('.faq__question').on('click', function() {
        $(this).parent().toggleClass('expanded')
        $(this).parent().find('.faq__answer').slideToggle()
    })

    // CATALOG ASIDE
    $('.catalog__menu-title').on('click', function() {
        $(this).parent().toggleClass('expanded')
        $(this).parent().find('.catalog__list').slideToggle()
    })
    
    // FOOTER TAB
    $('.footer__tab-item').on('click', function() {
        $('.footer__tab-item').removeClass('active')
        $(this).addClass('active')

        $('.footer__block').removeClass('active')
        $(`.footer__block[data-show=${$(this).attr('data-active')}]`).addClass('active')
    })

})