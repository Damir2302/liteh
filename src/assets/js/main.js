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

    // INPUT MASK PHONE NUMBER
    $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99"});

    $('#fileUpload').on('change', function() {
        if ($(this).val().length) {
          let fileName = $('#fileUpload').val().split("\\");
          $('#fileUploadLabel span').html(fileName[fileName.length - 1]);
        }
    });

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

    // FRANCHISE PAGE VANTAGES
    function vantagesSlide() {
        
        $('.programs__item-wrap').on('click', function() {
            if ($(window).width() >= 744) {
                $('.programs__item').removeClass('active')
                $(this).parent().addClass('active')
                $('.programs__images-content').removeClass('active')
                $(`.programs__images-content[data-show=${$(this).parent().attr('data-active')}]`).addClass('active')
            } else {
                $(this).parent().toggleClass('active')
            }
        })
    }

    vantagesSlide()

    // CART TAB
    $('.cart__tab-item').on('click', function() {
        $('.cart__tab-item').removeClass('active')
        $(this).addClass('active')

        $('.cart__place').removeClass('active')
        $(`.cart__place[data-show=${$(this).attr('data-active')}]`).addClass('active')
    })

    // CART PERSONAL
    $('.cart__personal-edit').on('click', function() {
        $(this).parent().toggleClass('no-edit')
    })
    
    // FOOTER TAB
    $('.footer__tab-item').on('click', function() {
        $('.footer__tab-item').removeClass('active')
        $(this).addClass('active')

        $('.footer__block').removeClass('active')
        $(`.footer__block[data-show=${$(this).attr('data-active')}]`).addClass('active')
    })

    // HIDE SHOW TABLE
    function toogleTable() {

        if( $('.hided-table-wrapper').length ) {
    
            $('.hided-table__show-all').click(function() {
                $('.hided-table-wrapper tr').toggle();
            });
        }

    }

    toogleTable();

})