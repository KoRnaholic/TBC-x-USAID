const btnEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.nav-list')

btnEl.addEventListener('click', function () {
    headerEl.classList.add('navbar-open');

})