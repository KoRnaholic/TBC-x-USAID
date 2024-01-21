const btnEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.mobile-nav')

btnEl.addEventListener('click', function () {
    headerEl.classList.toggle('navbar-open');

})