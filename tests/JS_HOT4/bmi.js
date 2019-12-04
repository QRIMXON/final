$(function(){
	var form = $("form");
	
	form.on("submit", function(e){
		e.preventDefault();
		var resultDiv = $(".result .title");
		
		function calcBMI(){
			var weight = $("#weight").val();
	    var height = $("#height").val();
			var bmi = weight / (height * height);
			return bmi.toFixed(2);
			
		}
		
		function bmiState(){
			if(calcBMI() < 16.9 ){
				return "Very underweight";
			}
			if(calcBMI() > 17 && calcBMI() < 18.4 ){
				return "Under weight";
			}
			if(calcBMI() > 18.5 && calcBMI() < 24.9 ){
				return "Normal weight";
			}
			if(calcBMI() > 25 && calcBMI() < 29.9 ){
				return "Overweight";
			}
			if(calcBMI() > 30 && calcBMI() < 34.9 ){
				return "Overweight class 1";
			}
			if(calcBMI() > 35 && calcBMI() < 40 ){
				return "Overweight class 2";
			}
			if(calcBMI() > 40){
				return "Overweight class 3";
            }
            if (isNaN(weight) || height <= 0) {
                alert("height and weight must be a valid number greater than zero.");
            } 
            if (isNaN(height) || weight <= 0) {
                alert("height and weight must be a valid number greater than zero.");
            } 
		}
		
		resultDiv.html(calcBMI() + " -> " + bmiState());
	});
});