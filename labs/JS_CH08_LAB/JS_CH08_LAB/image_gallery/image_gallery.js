$(document).ready(function() {
    $('a').click(function(evt){
        evt.preventDefault();
        let href= $(this).attr('href');
        let title = $(this).attr('title');

        $('#gallery img').attr('src', href);
        $('#caption').text(title);


    })


});