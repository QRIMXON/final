$(document).ready(function() {
	// create an array of the slide images
	var image,imageCounter = 0, imageCache = [];
	$("#slides img").each(function() {	
		image = new Image();
        image.src = $(this).attr("src");
        image.title = $(this).attr("alt");
		imageCache[imageCounter] = image;
		imageCounter++;
   	});
	
	// Start slide show
	var imageCounter = 0;
	var nextImage;
    setInterval(
        function () {
        	$("#caption").fadeOut(2000);
			$("slide").fadeOut (2000,
				function() {
					imageCounter = (imageCounter + 1) %
					imageCache.length;
					nextImage = imageCache [imageCounter];
					$("#slide").attr("src",
					nextImage.src).fadeIn(2000);
					$("caption").text(
						nextImage.title).faceIn(2000);
					}
					);
				},
				3000);
				});
				$(document).ready(function() {
					var nextSlide = $("#slides img:first-child");
					var nextCaption;
					var nextSlideSource;

					// the function for running the slide show
					var runSlideShow = function () {
						$("#caption").fadeOut(2000);
						$("#slide").fadeOut(2000,
							function() {
								if (nextSlide.next().length == 0) {
									nextSlide = $("#slides img:first-child");
								}
								else {
									nextSlide = nextSlide.next();
								}
								nextSlideSource = nextSlide.attr("src");
								nextCaption = nextSlide.attr("alt");
								$("#slide").attr("src",
								nextSlideSource).fadeIn(2000);
								$("#caption").text(nextCaption).fadeIn(2000);
							}
						);
				};
				var timer1 = setInterval (runSlideShow, 2000);

				$("#slide").click(function() {
					if (timer1 != null) {
						clearInterval (timer1);
						timer1 = null;
					}
					else {
						timer1 = setInterval (runSlideShow, 2000);
					}
				});
			});