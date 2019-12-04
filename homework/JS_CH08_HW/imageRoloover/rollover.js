$(document).ready(function() {
  $('#image_list a').each(function() {
    var swappedImage = new Image();
    swappedImage.src = $(this).attr('href');

  });

  $('#image_list a').click(function(evt) {
    var imageURL = $(this).attr('href');
    $('#main_image').attr('src', imageURL);
    var caption = $(this).attr('title');
    $('#caption').text(caption);
    evt.preventDefault();
    $("#main_image").slideUp(1000)
    $("#main_image").slideDown(4000)
  });
  $('li:first-child a').focus();

  $("#caption").fadeToggle(5000);
  $("#caption").fadeIn(10000)
 
  
  
});	

