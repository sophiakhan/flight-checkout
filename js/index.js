$(document).ready(function() {
    
    $('form').css({color: 'white'});

    $(".date").flatpickr();

    // not working
    //$(".passengers").powerRangeIt();

    $('.colorPicker').minicolors({
        theme: 'hidden'
    });

    $('#radios').radiosToSlider({
        fitContainer: true,
    });

    $(".planet").planetarium({
   autospin: "5000ms",
   angle: "20deg",
   glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
   pattern: "./img/texture-saturn.jpg",
   size: "100x100",
   float: true,   
   space: "body", 
   ring: true, 
   ringColor: "#fff", 
   ringAngle: "20deg" 
 });

    $('#modalButton').on('click', function() {
        $('#modal').removeClass('hidden');
    });

     $('.overlay-close').on('click', function(e) {
        $('#modal').addClass('hidden');
    });



});

