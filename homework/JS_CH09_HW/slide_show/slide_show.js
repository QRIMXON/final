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
        	$("#caption").fadeOut(1000);
			$("slide").fadeOut (1000,
				function() {
					imageCounter = (imageCounter + 1) %
					imageCache.length;
					nextImage = imageCache [imageCounter];
					$("#slide").attr("src",
					nextImage.src).fadeIn(1000);
					$("caption").text(
						nextImage.title).faceIn(1000);
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
						$("#caption").fadeOut(1000);
						$("#slide").fadeOut(1000,
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
								nextSlideSource).fadeIn(1000);
								$("#caption").text(nextCaption).fadeIn(1000);
							}
						);
				};
				var timer1 = setInterval (runSlideShow, 3000);

				$("#slide").click(function() {
					if (timer1 != null) {
						clearInterval (timer1);
						timer1 = null;
					}
					else {
						timer1 = setInterval (runSlideShow, 3000);
					}
				});
			});