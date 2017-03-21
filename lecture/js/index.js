// how jquery hooks into things - everything jq happens in here 
$(document).ready(function() {

    $('#startDate').on('keyup', function(e) {
        $('h1').html(e.target.value);
    });

    // $('body').on('mousemove', function(e) {
    //     $('body').append(`<div style="background: pink; width: 30px; height: 30px; position: absolute; top: ${e.clientY}px; left: ${e.clientX}px"`)
    // })

    // $('#togglePink').on('click', function () {
    //     $('h1').css({color: 'pink'});
    // })

     $('#togglePink').on('click', function () {
        $('h1').toggleClass('pink');
    })

    // if :first is taken off, it will auto for-loop and apply the style to all h1 
    $('h1:first').css({color: 'lightskyblue'});

    // $('h1').on('click', function() {
    //     $(this).remove(); // this represents h1 tag
    // })

    // $('#items').html('<img src="https://unsplash.it/200/200/?random" alt="Random Img" />');

    // $('#items').before('<hr/>');

     $('#items').load('message.html');

    // $.ajax({
    //     url: 'http://thinksaydo.com/api.php',
    //     method: 'get',
    //     success: function(data) {
    //         console.log(data)
    //     }
    // });

    $('#showModalButton').on('click', function() {
        $('#modal').removeClass('hidden');

        $('.overlay-background').on('click', function() {
            $('#modal').addClass('hidden');
        });
    });



});