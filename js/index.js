$(function (){
$("#team-members").owlCarousel({
    items: 2,
    autoplay:true,
    smartSpeed:700,
    loop:true,
    autoplayHoverPause:true,
    nav: true,
    dots:false,
    navText: ['<i class="fa-solid fa-angle-left fa-2x"> </i>', '<i class="fa-solid fa-angle-right fa-2x"></i>']
});
});