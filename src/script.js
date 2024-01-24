
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

// Acordions
document.addEventListener('DOMContentLoaded', function () {
    var accordionTriggers = document.querySelectorAll('.questions');
    var accordionContents = document.querySelectorAll('[id^="accordion-content"]');
    var arrowIcons = document.querySelectorAll('[id^="rotate"]');

    accordionTriggers.forEach(function (accordionTrigger, index) {
        accordionTrigger.addEventListener('click', function () {
            // Toggle the 'show' class for the clicked accordion item
            accordionContents[index].classList.toggle('show');

            // Close all other accordion items
            for (var i = 0; i < accordionContents.length; i++) {
                if (i !== index && accordionContents[i].classList.contains('show')) {
                    accordionContents[i].classList.remove('show');
                }
            }

            // Check if the rotate-180 class is present and add or remove it
            if (arrowIcons[index].classList.contains('rotate-180')) {
                arrowIcons[index].classList.remove('rotate-180');
            } else {
                // Remove rotate-180 from all arrow icons
                arrowIcons.forEach(function (icon) {
                    icon.classList.remove('rotate-180');
                });
                // Add rotate-180 to the clicked arrow icon
                arrowIcons[index].classList.add('rotate-180');
            }
        });
    });
});
