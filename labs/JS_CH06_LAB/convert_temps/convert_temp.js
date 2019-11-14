"use strict";
var $ = function(id) { return document.getElementById(id); };

var changeToFahrenheitConversion = function () {
    $("degree_label_1").innerHTML = "Enter C Degrees";
    $("degree_label_2").innerHTML = "Degrees Fahrenheit";
    $("degrees_entered").disabled = false;
};
var changeToCelsiusConversion = function() {
    $("degree_label_1").innerHTML = "Enter F degrees";
    $("degree_label_2").innerHTML = "Degrees Celsius";
    $("degrees_entered").disabled = false;
}

function checkButton() {
    var celsius;
    var result;
    if($("toFahrenheit").checked) {
        celsius = parseFloat($("degrees_entered").value);
        result = parseFloat((celsius * 9 / 5) + 32);
        $("degrees_computed").value = result;
    }
    else if ($("toCelsius").checked) {
        celsius = parseFloat($("degrees_entered").value);
        result = parseFloat((celsius - 32) * 5/9);
        $("degrees_computed").value = result;
    }
}



window.onload = function() {
    $("convert").onclick = checkButton;    
};


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};