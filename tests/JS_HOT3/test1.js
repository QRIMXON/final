"use strict";

function $(id) {
  return document.getElementById(id);
}

function $$(tag) {
  return document.getElementsByTagName(tag);
}

var isValid = true;

function validateAll() {

  //Validate Radios
  //isValid = validRadios();
  //Validate Checks
  //isValid = validCheckboxes();
  //Valid Text Boxes
  //if($('sabCheck').checked){
    //copyInfo();
  //}
  //isValid = validTextEntriesA();
  //isValid = validTextEntriesB();

  
  //Validate Radios
  var isValid1 = validRadios();
  //Validate Checks
  var isValid2 = validCheckboxes();
  //Validate Text Boxes
  if($('sabCheck').checked){
    copyInfo();
  }
  var isValid3 = validTextEntriesA();
  var isValid4 = validTextEntriesB();
  //If something doesn't validate, show top error and focus on it
  if(isValid1 && isValid2 && isValid3 && isValid4){
      isValid = true;
  }
  else{
      isValid = false;
  }



  if(!isValid){
    eventHandler();
    $("Q0").lastElementChild.removeAttribute("class", "hide");
    $("Q0").lastElementChild.setAttribute("class", "show");
    $("coin1").focus();
  }
  else{
    $("Q0").lastElementChild.removeAttribute("class", "show");
    $("Q0").lastElementChild.setAttribute("class", "hide");
  }
}

function validRadios() {
  if (!$("coin1").checked && !$("coin2").checked) {
    $("Q1").lastElementChild.removeAttribute("class", "hide");
    $("Q1").lastElementChild.setAttribute("class", "show");
    return false;
  } else {
    $("Q1").lastElementChild.removeAttribute("class", "show");
    $("Q1").lastElementChild.setAttribute("class", "hide");
    return true;
  }
}

function validCheckboxes() {
  if (!$("wallet1").checked && !$("wallet2").checked) {
    $("Q2").lastElementChild.removeAttribute("class", "hide");
    $("Q2").lastElementChild.setAttribute("class", "show");
    return false;
  } else {
    $("Q2").lastElementChild.removeAttribute("class", "show");
    $("Q2").lastElementChild.setAttribute("class", "hide");
    return true;
  }
}

function validTextEntriesA() {
  let txtBoxes = [
    $("inputfName"),
    $("inputlName"),
    $("inputEmail"),
    $("inputEmailConfirm"),
    $("inputAddress"),
    $("inputPhone"),
    $("inputZIP")
  ];

  for (let index = 0; index < txtBoxes.length; index++) {
    if (txtBoxes[index].value == "") {
      $("Q3").lastElementChild.removeAttribute("class", "hide");
      $("Q3").lastElementChild.setAttribute("class", "show");
      return false;
    }
  }

  if($("inputEmail".value != $("inputEmailConfirm").value)){
      return false;
  }
  else{
    $("Q3").lastElementChild.removeAttribute("class", "show");
    $("Q3").lastElementChild.setAttribute("class", "hide");
      return true;
  }
}

function validTextEntriesB() {
    let txtBoxes = [
      $("inputfName2"),
      $("inputlName2"),
      $("inputAddress2"),
      $("inputPhone2"),
      $("inputZIP2")
    ];
  
    for (let index = 0; index < txtBoxes.length; index++) {
      if (txtBoxes[index].value == "") {
        $("Q4").lastElementChild.removeAttribute("class", "hide");
        $("Q4").lastElementChild.setAttribute("class", "show");
        return false;
      }
      else{
          return true;
      }
    }

  }


function copyInfo(){
    if($('sabCheck').checked){
    $("inputfName2").value = $("inputfName").value;
    $("inputlName2").value = $("inputlName").value;
    $("inputAddress2").value = $("inputAddress").value;
    $("inputPhone2").value = $("inputPhone").value;
    $("inputZIP2").value = $("inputZIP").value; 
    }
    else{
        $("inputfName2").value = "";
        $("inputlName2").value = "";
        $("inputAddress2").value = "";
        $("inputPhone2").value = "";
        $("inputZIP2").value = "";
    }
   
}

function eventHandler(evt) {
    // The event object sent to the handler or window.event 
        if (!evt) {
            evt = window.event;        // for IE
        }
    
         // Cancel the default action
         if (evt.preventDefault) {
             evt.preventDefault();     // for most browsers
         } 
         else {
             evt.returnValue = false;  // for IE
         }
    };
window.onload = function() {
  $("btn").onclick = validateAll;
  $('sabCheck').onchange = copyInfo;
};
