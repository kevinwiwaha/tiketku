$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,

        responsiveClass: true,
        responsive: {
            0: {

                margin: 50,
                loop: true
            },

            1000: {
                items: 3.8,
                margin: 50,
                loop: true,

            }
        }
    })
});