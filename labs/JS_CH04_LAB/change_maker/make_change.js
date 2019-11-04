var $ = function(id) {
    return document.getElementById(id);
};
var change = function getChange() {
    var user_cents = parseInt($("cents").value);

if(user_cents >= 25){
var q = parseInt(user_cents / 25);
$('quarters').value = q;
user_cents = user_cents - (q * 25);
}

if(user_cents >= 10){
    var d = parseInt(user_cents / 10);
    $('dimes').value = d;
    user_cents = user_cents - (d * 10);
    }

    if(user_cents >= 5){
        var n = parseInt(user_cents / 5);
        $('nickels').value = n;
        user_cents = user_cents - (n * 5);
        }

        if(user_cents >= 1){
            var p = parseInt(user_cents / 1);
            $('pennies').value = p;
            user_cents = user_cents - (p * 1);
            }
        }