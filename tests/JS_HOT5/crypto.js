
            $(document).ready(function() {
             
            
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
                            $("#email").next().text("Invalid Email").css("color", "red");
                            isValid = false;
                        }
                        else {
                            $("#email").next().text("");
                        }
                        $("#email").val(email);
                        
                        var password = $("#password").val().trim();
                        if (password.length , 6) {
                            $("#password").next().text("Invalid Password").css("color", "red");
                            isValid = false;
                        }
                        else {
                            $("#password").next().text("");
                        }
                        $("#password").val(password);

                        if (email == 'admin@gcrypto.com' && password == 'P@ssw0rd') { 
                            window.location = "faq.html";
                        }
                        else {
                            $('#email').focus(); 
                        }
                       
                        
                        if (isValid == false) { event.preventDefault(); }
                    }
                );
            });

          

            
        