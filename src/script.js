
// displayng menu 
const btnEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.nav-list')

btnEl.addEventListener('click', function () {
    headerEl.classList.add('navbar-open');

})

// removing menu 
const btnCloseEl = document.querySelector('.btn-close-nav')
btnCloseEl.addEventListener('click', function () {
    headerEl.classList.remove('navbar-open');

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
