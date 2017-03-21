$(document).ready(function() {
    
    $('form').css({color: 'white'});

    $(".date").flatpickr();


//     $('input').iCheck({
//     checkboxClass: 'icheckbox_flat',
//   });


    $('.colorPicker').minicolors({
        theme: 'hidden'
    });

    $('#modalButton').on('click', function() {
        $('#modal').removeClass('hidden');
    });

     $('.overlay-close').on('click', function(e) {
        $('#modal').addClass('hidden');
    });



});

