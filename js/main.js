const menuBtn = document.querySelector(".page-header__mobile-menu-open");
const menu = document.querySelector(".page-header__nav");

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('page-header__nav--hidden');
    menu.classList.toggle('page-header__nav--show');
    menuBtn.classList.toggle('page-header__mobile-menu-open--opened');

    if (!menu.classList.contains('page-header__nav--show')) {
        setTimeout(hidden , 800)
    } else {menu.classList.remove('none')
 }

});

function hidden() {
    menu.classList.add('none')
}

function fixHeader() {
/* Фиксированная шапка */
let header = document.querySelector('.page-header');
let headerHeight = header.offsetHeight;

if (window.scrollY > headerHeight) {
    menu.classList.add('page-header__nav-sticky');
} else {
    menu.classList.remove('page-header__nav-sticky');
}
}
  
setInterval(fixHeader,500)

console.log(window.scrollY)

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

/* Таймер */

// Set the date we're counting down to
var countDownDate = new Date("July 5, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + " : " + hours + " : "
    + minutes + " : " + seconds;
    
}, 1000);