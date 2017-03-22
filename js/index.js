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

    $('#modalButton').on('click', function() {
        $('#modal').removeClass('hidden');
    });

     $('.overlay-close').on('click', function(e) {
        $('#modal').addClass('hidden');
    });



});

