
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
// document.addEventListener('DOMContentLoaded', function () {
//     var accordionTrigger = document.getElementById('accordion-trigger');
//     var accordionContent = document.getElementById('accordion-content');
//     var accordionArrow = document.getElementById('rotate');





//     accordionTrigger.addEventListener('click', function () {
//         accordionArrow.classList.toggle('rotate-arrow')
//         // Toggle the 'show' class
//         accordionContent.classList.toggle('show');

//         // Adjust max-height based on the actual height of the content

//         if (accordionContent.classList.contains('show')) {
//             accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
//         } else {
//             accordionContent.style.maxHeight = '0';
//         }
//     });

//     // Detect the end of the CSS transition
//     accordionContent.addEventListener('transitionend', function () {
//         // Remove the max-height property after the transition is complete
//         if (!accordionContent.classList.contains('show')) {
//             accordionContent.style.maxHeight = null;
//         }
//     });
// });
// document.addEventListener('DOMContentLoaded', function () {
//     var accordionTrigger = document.getElementById('accordion-trigger-2');
//     var accordionContent = document.getElementById('accordion-content-2');
//     var accordionArrow = document.getElementById('rotate-2');


//     accordionTrigger.addEventListener('click', function () {
//         accordionArrow.classList.toggle('rotate-arrow')
//         // Toggle the 'show' class
//         accordionContent.classList.toggle('show');


//         // Adjust max-height based on the actual height of the content
//         if (accordionContent.classList.contains('show')) {

//             accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
//         } else {
//             accordionContent.style.maxHeight = '0';
//         }
//     });

//     // Detect the end of the CSS transition
//     accordionContent.addEventListener('transitionend', function () {
//         // Remove the max-height property after the transition is complete
//         if (!accordionContent.classList.contains('show')) {
//             accordionContent.style.maxHeight = null;
//         }
//     });
// });
// document.addEventListener('DOMContentLoaded', function () {
//     var accordionTrigger = document.getElementById('accordion-trigger-3');
//     var accordionContent = document.getElementById('accordion-content-3');
//     var accordionArrow = document.getElementById('rotate-3');


//     accordionTrigger.addEventListener('click', function () {
//         accordionArrow.classList.toggle('rotate-arrow')
//         // Toggle the 'show' class
//         accordionContent.classList.toggle('show');

//         // Adjust max-height based on the actual height of the content
//         if (accordionContent.classList.contains('show')) {
//             accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
//         } else {
//             accordionContent.style.maxHeight = '0';
//         }
//     });

//     // Detect the end of the CSS transition
//     accordionContent.addEventListener('transitionend', function () {
//         // Remove the max-height property after the transition is complete
//         if (!accordionContent.classList.contains('show')) {
//             accordionContent.style.maxHeight = null;
//         }
//     });
// });


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

            // Rotate the arrow icon for the clicked accordion item
            arrowIcons[index].classList.toggle('rotate-180');
        });
    });
});
