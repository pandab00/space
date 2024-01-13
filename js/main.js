$(function(){
    $('.slider__box').slick({
        prevArrow: '<img src="images/Arrow-left.svg" alt="arrow-left" class="slider__arrow slider__arrow-left ">',
        nextArrow: '<img src="images/Arrow-right.svg" alt="arrow-right" class="slider__arrow slider__arrow-right ">',
    });

    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    })

});