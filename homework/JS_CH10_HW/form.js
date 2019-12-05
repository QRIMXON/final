$(document).ready(function() {
    $(":radio").change(
        function() {
            var radioButton = $(":radio:checked").val();
            if (radioButton == "corporate") {
                $("#company_name").attr("disabled", false);
                $("#company_name").next().text("*");
            }
            else {
                $("#company_name").attr("disabled", true);
                $("#company_name").next().text("");
            }
        }
    );

    $("#member_form").submit(
        function(event) {
            var isValid = true;

            var emailPattern =
            /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z] {2,4}\b/;
            var email = $("#email").val().trim();
            if(email == "") {
                $("#email").next().text("This field is required.").css("color", "red");
                isValid = false;
            }
            else if ( !emailPattern.test(email) ) {
                $("#email").next().text("Must be a valid email address.").css("color", "red");
                isValid = false;
            }
            else {
                $("#email").next().text("");
            }
            $("#email").val(email);
            
            var password = $("#password").val().trim();
            if (password.length , 6) {
                $("#password").next().text("Must be 6 or more characters.").css("color", "red");
                isValid = false;
            }
            else {
                $("#password").next().text("");
            }
            $("#password").val(password);
            if ( !$("#company_name").attr("disabled")) {
                var companyName = $("#company_name").val().trim();
                if (companyName == "") {
                    $("company_name").next().text(
                        "this field is required.");
                        isValid = false;
                }
                else {
                    $("#company_name").next().text("");
                }
                $("#company_name").val(companyName);
            }
            
            if (isValid == false) { event.preventDefault(); }
        }
    );
});