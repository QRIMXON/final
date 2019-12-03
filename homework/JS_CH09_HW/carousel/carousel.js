$(document).ready(function() {
	
	var slider = $("#image_list");                    
	var leftProperty, newleftProperty;
		
					
	$("#right_button").click(function() { 
		
		leftProperty = parseInt(slider.css("left"));
	
		if (leftProperty - 300 <= -900) {
			newLeftProperty = 0; }
		else {
			newLeftProperty = leftProperty - 300; }
		slider.animate( {left: newLeftProperty}, 1000);
	});  
	$("#left_button").click(function() {
		
		leftProperty = parseInt(slider.css("left"));
		
		
		if (leftProperty < 0) {
			newLeftProperty = leftProperty + 300;
		}
		else {
			newLeftProperty = 0;
		}
		
		
		slider.animate( {left: newLeftProperty}, 1000);				
	});  	
	
}); 