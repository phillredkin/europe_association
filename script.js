document.getElementById('menu-icon').onclick = function() {
    document.getElementById('nav-overlay').classList.add('active');
}
document.getElementById('overlay-close').onclick = function() {
    document.getElementById('nav-overlay').classList.remove('active');
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1400: {
            slidesPerView: 7
        },
        1200: {
            slidesPerView: 6
        },
        992: {
            slidesPerView: 5
        },
        768: {
            slidesPerView: 4
        },
        600: {
            slidesPerView: 3
        },
        475: {
            slidesPerView: 2
        },
        0: {
            slidesPerView: 2
        }
    }
});