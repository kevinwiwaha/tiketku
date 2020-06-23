$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,

        responsiveClass: true,
        responsive: {
            0: {
                items: 1.9,
                margin: 50,
                loop: true,
                autoplay: true
            },

            1000: {
                items: 4.1,

                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                autoplayHoverPause: true

            }
        }
    })
});