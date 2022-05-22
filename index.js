// NAVBAR SCROLL ANIMATION
// Creates a smooth transition in the appearance/disappearance
// of the navigation bar when scrolling.
window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    navbar.classList.toggle('scrolling-active', windowPosition);
})


// SIDE MENU
// Shows the navigation links at the right side of the screen
// when the hamburger menu is clicked.
var menu = document.getElementsByClassName('menu') [0]
var toggle = document.getElementsByClassName('toggle-btn') [0]
var close = document.getElementsByClassName('close-btn') [0]

if(toggle) {
    toggle.addEventListener('click', () => {
        menu.classList.add('show')
    })
}

if(close) {
    close.addEventListener('click', () => {
        menu.classList.remove('show')
    })
}


// Makes the screen not shrink when a keyboard appears.
addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
})


// Code for the carousel using jQuery.
$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, // 2000ms == 2s
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});


var typed = new Typed(".auto-input", {
    strings: ["Adventure", "Lifestyle", "Passion", "Imagination"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
})