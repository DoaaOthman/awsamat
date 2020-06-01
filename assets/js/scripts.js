/**/
$(document).ready(function(){
        "use strict";
    //counter
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
    
//if (jQuery().owlCarousel){
$(".owl-carousel").owlCarousel({
    singleItem: true,
    rtl:true, 
    items : 4,
    loop:true,
    nav:true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
    0:{items:1,nav:true,},
    600:{items:2,nav:true,},
    1000:{items:4,nav:true,}
    }
});
    
});