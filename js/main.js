
const menuBtn = document.querySelector(".page-header__mobile-menu-open");
const menu = document.querySelector(".page-header__nav");

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('page-header__nav--animate');
    menuBtn.classList.toggle('page-header__mobile-menu-open--opened');
});



/* Слайдер */

const slideArr = document.querySelectorAll('.slider__item');
const slideNextBtn = document.querySelector('.slider__btn-next');
const slidePrevBtn = document.querySelector('.slider__btn-prev');

slideMaxId =  (slideArr.length - 1)
slideFirstId =  0;

slideNextBtn.addEventListener('click', function() {
    slideArr.forEach(function(el) {
        el.classList.remove('slider__item--active');
    });

    if ((slideFirstId >= slideMaxId) == false) {
    slideFirstId = slideFirstId + 1;
    } else {slideFirstId = 0};

    slideArr[slideFirstId].classList.add('slider__item--active');
});

slidePrevBtn.addEventListener('click', function() {
    slideArr.forEach(function(el) {
        el.classList.remove('slider__item--active');
    });

    if ((slideFirstId <= 0) == false) {
        
    slideFirstId = slideFirstId - 1;
    } else {slideFirstId = slideMaxId};
    slideArr[slideFirstId].classList.add('slider__item--active');
});

slidePrevBtn.addEventListener('touchstart', function(e) {
    slideArr.forEach(function(el) {
        el.classList.remove('slider__item--active');
    });

    if ((slideFirstId <= 0) == false) {
        
    slideFirstId = slideFirstId - 1;
    } else {slideFirstId = slideMaxId};
    slideArr[slideFirstId].classList.add('slider__item--active');
});

slideNextBtn.addEventListener('touchstart', function(e) {
    slideArr.forEach(function(el) {
        el.classList.remove('slider__item--active');
    });

    if ((slideFirstId >= slideMaxId) == false) {
    slideFirstId = slideFirstId + 1;
    } else {slideFirstId = 0};

    slideArr[slideFirstId].classList.add('slider__item--active');
});