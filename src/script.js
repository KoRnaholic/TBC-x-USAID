
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
