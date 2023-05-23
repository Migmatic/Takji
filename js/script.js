document.addEventListener('DOMContentLoaded', (event) => {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 30000,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 200,
            depth: 50,
            modifier: 1,
            scale:0.85,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable:'true',
        },

    })
})

