

$(function(){
	var form = $("form");
	
	form.on("submit", function(e){

        e.preventDefault();
        
        var resultDiv = $(".result .title");
     
        
		function calcBMI(){
			var weight = $("#weight").val();
	    var height = $("#height").val();
			var bmi =(height * height) / weight;
            return bmi.toFixed(2);
         
            
			
        }
        
		
		function bmiState(){
			if(calcBMI() < 100000 ){
				return "bmi";
			}
			else if (isNaN(height) || isNaN(weight)) {
                alert("height and weight must be a valid number greater than zero.");
            }
         
		}
		
		resultDiv.html(calcBMI() + " -> " + bmiState());
    });
    

    
});