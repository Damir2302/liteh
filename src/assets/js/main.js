$(document).ready(function() {

    let anchors = document.querySelectorAll('.js-anchor')
    if (anchors.length > 0) {
        anchors.forEach(anchor => {
            anchor.onclick = function (e) {
                e.preventDefault();
                document.querySelector(`#${anchor.href.split('#')[1]}`).scrollIntoView({
                    block: 'start',
                    behavior: 'smooth',
                })
            }
        })
    }

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
    })

    // CATALOG ASIDE
    $('.catalog__menu-title').on('click', function() {
        $(this).parent().toggleClass('expanded')
    })

    // SALES ANALYZES
    $('.analyzes__item-title').on('click', function() {
        $(this).parent().toggleClass('expanded')
    })

    // CONTACTS TABS
    $('.contacts__tab-btn[data-show]').on('click', function() {
        $('.contacts__tab-btn').removeClass('active')
        $(this).addClass('active')

        $('.contacts__section').removeClass('active')
        $(`.contacts__section[data-active=${$(this).attr('data-show')}]`).addClass('active')
    })

    // SELECT PREPARATION
    $('.select-option[data-show]').on('click', function() {
        $('.select-option').removeClass('active')
        $(this).addClass('active')

        $('.preparation__content').removeClass('active')
        $(`.preparation__content[data-active=${$(this).attr('data-show')}]`).addClass('active')
    })
    
    // FOOTER TAB
    $('.footer__tab-item').on('click', function() {
        $('.footer__tab-item').removeClass('active')
        $(this).addClass('active')

        $('.footer__block').removeClass('active')
        $(`.footer__block[data-show=${$(this).attr('data-active')}]`).addClass('active')
    })

})