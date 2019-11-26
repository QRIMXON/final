"use strict";

function $(id) {
  return document.getElementById(id);
}

var isValid = true;

function validateAll() {


  var isValid1 = validRadios();
  
  var isValid2 = validCheckboxes();

  if($('copyInfoCheck').checked){
    copyInfo();
  }
  var isValid3 = validInfo1();
  var isValid4 = validInfo2();
 
  if(isValid1 && isValid2 && isValid3 && isValid4){
      isValid = true;
  }
  else{
      isValid = false;
  }



  if(!isValid){
    eventHandler();
    $("errorAll").lastElementChild.removeAttribute("class", "valid");
    $("errorAll").lastElementChild.setAttribute("class", "error");
    $("radio1").focus();
  }
  else{
    $("errorAll").lastElementChild.removeAttribute("class", "error");
    $("errorAll").lastElementChild.setAttribute("class", "valid");
  }
}

function validRadios() {
  if (!$("radio1").checked && !$("radio2").checked) {
    $("Radios").lastElementChild.removeAttribute("class", "valid");
    $("Radios").lastElementChild.setAttribute("class", "error");
    return false;
  } else {
    $("Radios").lastElementChild.removeAttribute("class", "error");
    $("Radios").lastElementChild.setAttribute("class", "valid");
    return true;
  }
}

function validCheckboxes() {
  if (!$("check1").checked && !$("check2").checked) {
    $("Checks").lastElementChild.removeAttribute("class", "valid");
    $("Checks").lastElementChild.setAttribute("class", "error");
    return false;
  } else {
    $("Checks").lastElementChild.removeAttribute("class", "error");
    $("Checks").lastElementChild.setAttribute("class", "valid");
    return true;
  }
}

function validInfo1() {
  let txtBoxes = [
    $("firstName"),
    $("lastName"),
    $("Email"),
    $("emailConfirm"),
    $("Address"),
    $("phoneNumber"),
    $("Zip")
  ];

  for (let index = 0; index < txtBoxes.length; index++) {
    if (txtBoxes[index].value == "") {
      $("customerInfo").lastElementChild.removeAttribute("class", "valid");
      $("customerInfo").lastElementChild.setAttribute("class", "error");
      return false;
    }
  }

  if($("Email".value != $("inputEmailConfirm").value)){
      return false;
  }
  else{
    $("customerInfo").lastElementChild.removeAttribute("class", "error");
    $("customerInfo").lastElementChild.setAttribute("class", "valid");
      return true;
  }
}

function validInfo2() {
    let txtBoxes = [
      $("firstName2"),
      $("lastName2"),
      $("Address2"),
      $("phoneNumber2"),
      $("Zip2")
    ];
  
    for (let index = 0; index < txtBoxes.length; index++) {
      if (txtBoxes[index].value == "") {
        $("billingInfo").lastElementChild.removeAttribute("class", "valid");
        $("billingInfo").lastElementChild.setAttribute("class", "error");
        return false;
      }
      else{
          return true;
      }
    }

  }


function copyInfo(){
    if($('copyInfoCheck').checked){
    $("firstName2").value = $("firstName").value;
    $("lastName2").value = $("lastName").value;
    $("Address2").value = $("Address").value;
    $("phoneNumber2").value = $("phoneNumber").value;
    $("Zip2").value = $("Zip").value; 
    }
    else{
        $("firstName2").value = "";
        $("lastName2").value = "";
        $("Address2").value = "";
        $("phoneNumber2").value = "";
        $("Zip2").value = "";
    }
   
}

function eventHandler(evt) {
  
        if (!evt) {
            evt = window.event;        
        }
    
       
         if (evt.preventDefault) {
             evt.preventDefault();    
         } 
         else {
             evt.returnValue = false; 
         }
    };
window.onload = function() {
  $("btn").onclick = validateAll;
  $('copyInfoCheck').onchange = copyInfo;
};
