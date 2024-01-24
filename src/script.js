
// displayng menu 
const btnEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.navbar-open')

btnEl.addEventListener('click', function () {
    headerEl.classList.add('navbar-open-nav');

})

// removing menu 
const btnCloseEl = document.querySelector('.btn-close-nav')
btnCloseEl.addEventListener('click', function () {
    headerEl.classList.remove('navbar-open-nav');

})

//transparent nav
const navEl = document.querySelector('.nav-container')

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navEl.classList.add('nav-transparent')
    } else {
        navEl.classList.remove('nav-transparent')
    }
})

//scrolling nav
document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.nav-container');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var currentScrollTop = window.scrollY;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            header.classList.add('nav-hidden');
        } else {
            // Scrolling up
            header.classList.remove('nav-hidden');
        }

        lastScrollTop = currentScrollTop;
    });
});

// ///////////////////////





