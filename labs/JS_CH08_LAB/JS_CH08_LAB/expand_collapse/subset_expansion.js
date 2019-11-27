$(document).ready(function() {
    $('a').click(function() {
        $(this).prev().toggleClass('hide');

let words = ($(this).text());
if (words == "Show more")
{
    $(this).text("Show less");
}
else{
    $(this).text("Show more");
}


    });


    });
