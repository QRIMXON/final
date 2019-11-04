"use strict";
var $ = function (id) {
    return document.getElementById(id);
};



var calculate1 = function (){

    var income = parseFloat($("income").value);

    var tax = parseFloat($("tax").value) 

    if(income < 9276) {
       var tax = income * .10
   }
   else if(income < 37651){
       var tax = income * .15
   }
   else if(income < 91151){
       var tax = income * .25
   }
   else if(income < 190151){
       var tax = income * .28
   }
   else if(income < 413351){
       var tax = income * .33
   }
   else if(income < 415051){
       var tax = income * .35
   }
   else {
       var tax = income * .396
   }
   $("tax").value = tax;
}

window.onload = function () {
    $("calculate").onclick = processEntry;
};
