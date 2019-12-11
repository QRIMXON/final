$(document).ready(function() {
 
    $("#buyForm").submit(
        function(event) {
            var isValid = true;

                var amount = $("#amount").val().trim();
                if(amount == "") {
                    $("#amount").next().text("This field is required.").css("color", "red");
                    isValid = false;
                
                }
                else {
                    $("#amount").next().text("Success! Congratulations on your purchase!");
                }
               
            
            
            if (isValid == false) { event.preventDefault(); }
            if (isValid == true) {event.preventDefault(); }
        });
        });
