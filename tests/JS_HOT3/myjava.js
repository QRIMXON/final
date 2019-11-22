"use strict";

function $(id) {
  return document.getElementById(id);
}

function $$(tag) {
  return document.getElementsByTagName(tag);
}

var isValid = true;


function validateForm() {

  
  var isValidRadio = validRadio()
  var isValidCheck = validCheck()
  
 if ($("isValidCopy").checked){
    copyInfo();
  }
  var isValidCustomer = validTextEntries1();
  var isValidBilling = validTextEntries2();
  
  if(isValidRadio && isValidCheck && isValidCustomer && isValidBilling){
      isValid = true;
  }
  else{
      isValid = false;
  }
if(!isValid){
    eventHandler();
    $("errorAll").lastElementChild.removeAttribute("class", "hide");
    $("errorAll").lastElementChild.setAttribute("class", "show");
    $("radio1").focus();
  }
  else{
    $("errorAll").lastElementChild.removeAttribute("class", "show");
    $("errorAll").lastElementChild.setAttribute("class", "hide");
  }
}

function validRadios() {
  if (!$("radio1").checked && !$("radio2").checked) {
    $("Radios").lastElementChild.removeAttribute("class", "hide");
    $("Radios").lastElementChild.setAttribute("class", "show");
    return false;
  } else {
    $("Radios").lastElementChild.removeAttribute("class", "show");
    $("Radios").lastElementChild.setAttribute("class", "hide");
    return true;
  }
}

function validCheckboxes() {
  if (!$("check1").checked && !$("check2").checked) {
    $("Checks").lastElementChild.removeAttribute("class", "hide");
    $("Checks").lastElementChild.setAttribute("class", "show");
    return false;
  } else {
    $("Checks").lastElementChild.removeAttribute("class", "show");
    $("Checks").lastElementChild.setAttribute("class", "hide");
    return true;
  }
}

function validTextEntriesA() {
  let txtBoxes = [
    $("firstName"),
    $("lastName"),
    $("email"),
    $("confirmEmail"),
    $("address"),
    $("phoneNumber"),
    $("zipCode")
  ];

  for (let index = 0; index < txtBoxes.length; index++) {
    if (txtBoxes[index].value == "") {
      $("customerInfo").lastElementChild.removeAttribute("class", "hide");
      $("customerInfo").lastElementChild.setAttribute("class", "show");
      return false;
    }
  }

  if($("email".value != $("confirmEmail").value)){
      return false;
  }
  else{
    $("customerInfo").lastElementChild.removeAttribute("class", "show");
    $("customerInfo").lastElementChild.setAttribute("class", "hide");
      return true;
  }
}

function validTextEntriesB() {
    let txtBoxes = [
      $("firstName2"),
      $("lastName2"),
      $("address2"),
      $("phoneNumber2"),
      $("zipCode2")
    ];
  
    for (let index = 0; index < txtBoxes.length; index++) {
      if (txtBoxes[index].value == "") {
        $("customerBilling").lastElementChild.removeAttribute("class", "hide");
        $("customerBilling").lastElementChild.setAttribute("class", "show");
        return false;
      }
      else{
          return true;
      }
    }

  }


function copyInfo(){
    if($('sabCheck').checked){
    $("firstName2").value = $("firstName").value;
    $("lastName2").value = $("lastName").value;
    $("address2").value = $("address").value;
    $("phoneNumber2").value = $("phoneNumber").value;
    $("zipCode2").value = $("zipCode").value; 
    }
    else{
        $("firstName2").value = "";
        $("lastName2").value = "";
        $("address2").value = "";
        $("phoneNumber2").value = "";
        $("zipCode2").value = "";
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
  $("btn").onclick = validateForm;
  $('isValidCopy').onchange = copyInfo;
};
