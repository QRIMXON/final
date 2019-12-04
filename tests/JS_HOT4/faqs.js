$(document).ready(function(evt) {
    $("#faqs h2").click(function() {
        $(this).toggleClass("minus");
        if ($(this).attr("class") != "minus") {
            $(this).next().hide();
        }
        else {
            $(this).next().show();
        }
        evt.preventDefault(); 
    });
    $("#faqs").find("a:first").focus();
});