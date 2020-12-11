/*---------- .owl-carousel  --------------------------*/
$(document).ready(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        loop: true,
        margin: 20,
        stagePadding: 10, //can see neighbour,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            }
        }
    });
    owl.trigger('play.owl.autoplay', [5000]);
});