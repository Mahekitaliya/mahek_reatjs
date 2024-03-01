$(document).ready(function () {
    $('#banner').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        nav: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 1
            }
        }
    })


    $('#course-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:3
            },
            1000: {
                items:4
            }
        }
    })



});



 

   
   