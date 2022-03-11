const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 70
        }
    }
})

const sliderBg = new Swiper('.slider_bg', {
    freeMode: true,
    centeredSlides: true,
    parallax: true,
    spaceBetween: 70,
    slidesPerView: 3.5,
})

sliderMain.controller.control = sliderBg


document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('open')
    })
})

