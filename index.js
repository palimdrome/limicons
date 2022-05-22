const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

// NAVBAR SCROLL ANIMATION
window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    navbar.classList.toggle('scrolling-active', windowPosition);
})

// SIDE MENU OF THE NAVBAR
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

// SMOOTH SCROLL
$('.link').click(function(){
    $('html').css("scrollBehavior", "smooth");
});

// makes the screen not shrink when a keyboard appears
addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
})

$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, // 2000 ms = 2 s
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