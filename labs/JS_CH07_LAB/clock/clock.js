"use strict";
var $ = function(id) { return document.getElementById(id); };



var displayCurrentTime = function() {
    var now = new Date();
    var hours = now.getHours();
    var ampm = "AM"; 
    
    
    if (hours > 12) { 
        hours = hours - 12;
        ampm = "pm";
    } else { 
         switch (hours) {
            case 12: 
                ampm = "PM";
                break;
            case 0: 
                hours = 12;
                ampm = "AM";
        }
    }
    
    $("hours").firstChild.nodeValue = hours;
    $("minutes").firstChild.nodeValue = padSingleDigit(now.getMinutes());
    $("seconds").firstChild.nodeValue = padSingleDigit(now.getSeconds());
    $("ampm").firstChild.nodeValue = ampm;
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};



window.onload = function() {
  
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    
};