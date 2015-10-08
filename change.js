// JavaScript Document

var image;
var image2;
var flag=0;
var flag2=0;
var dMode=0;
var debugService;
var msg;
var msg2;
function debugMode1(){ //debug control on/off
    if(dMode==1) {
    dMode=0;
    debugService=0;
    document.getElementById("debugMode").innerHTML="[ Click Here: Debug Mode OFF ]"; 
    document.getElementById("console").innerHTML+="<p> Button Click Event: Debug mode set = off: </p>";
    return; }
    else if(dMode==0) {
        dMode=1;
        debugService=1;
        document.getElementById("debugMode").innerHTML="[ Click Here: Debug Mode ON ]";
        document.getElementById("console").innerHTML+="<p> Button Click Event: Debug mode set = on: </p>";
    return; }
        
}
function imageConsole(image, status) { //onclick image for field 1
    image=document.getElementById("imgNumber1").value=document.getElementById("imgNumber1").src;
    document.getElementById("console").innerHTML+="<p> Click Image Event for Field 1: "+image+"</p>"; }

function imageConsole2(image2, status) { //onclick image for field 2
    image2=document.getElementById("imgNumber2").value=document.getElementById("imgNumber2").src;
    document.getElementById("console").innerHTML+="<p> Click Image Event for Field 2: "+image2+"</p>";
  }

function msgError(msg, flag) { //debug checking for out of range number entry for field 1
    if(flag==1) {
     document.getElementById("console").innerHTML+="<p> Error Occurrence on Field 1 - Invalid entry: "+msg+"</p>"; } }    

function msgError2(msg2, flag) { //debug checking for out of range number entry for field 2
    if(flag2==1) {
     document.getElementById("console").innerHTML+="<p> Error Occurrence on Field 2 - Invalid entry: "+msg2+"</p>";   
    }}

function userText() { // debug onblur field 1
    if(debugService==1) {
     var num=document.getElementById("userInput1").value;
     document.getElementById("console").innerHTML+="<p> UserText input on Field input 1: "+num+"</p>"; }
}

function userText2() { // debug onblur field 2
    if(debugService==1) {
     var num2=document.getElementById("userInput2").value;
     document.getElementById("console").innerHTML+="<p> UserText input on Field input 2: "+num2+"</p>"; }
}

function changeImg1(imgNumber1, image) {
  var numberInput1 = document.getElementById("userInput1").value;
    var msg;
    flag=0;
  if (numberInput1 <1) { //Displays an alert when the entered number is less than 1
     if (debugService==1) {
      msg="Displays an alert when the entered number is less than 1";
      msgError(msg,"1"); }
  	  alert("The number is LESS than what is required. Please enter a number from 1 to 5.");
      return; }

  if (numberInput1 == 1) //This condition will change the image src to one.gif
  { document.getElementById("imgNumber1").src = "one.gif";   }
  else if (numberInput1 == 2) //This condition will change the image src to two.gif
  { document.getElementById("imgNumber1").src = "two.gif";  }
  else if (numberInput1 == 3) //This condition will change the image src to three.gif
  { document.getElementById("imgNumber1").src = "three.gif";    }
  else if (numberInput1 == 4) //This condition will change the image src to four.gif
  { document.getElementById("imgNumber1").src = "four.gif";    }
  else if (numberInput1 == 5) //This condition will change the image src to five.gif
  {    document.getElementById("imgNumber1").src = "five.gif";     }
  else if (numberInput1>5) //Displays an alert when the entered number is greater than 5
  {     msg="Alert Event : Entered number is greater than 5";
        flag=1;
        alert("The number is GREATER than what is required. Please enter a number from 1 to 5."); }
  else {//Displays an alert when the user enters anything other than numbers
        msg="Invalid Entry! Please enter a number from 1 to 5.";
        flag=1;
        alert("Invalid Entry! Please enter a number from 1 to 5."); }
    if (debugService==1){
    msgError(msg,flag);
    imageConsole(image);
    }
}

function changeImg2(imgNumber1, image2) {
        var numberInput2 = document.getElementById("userInput2").value;
        flag2=0;
    if (numberInput2 <1) { //Displays an alert when the entered number is less than 1
         if (debugService==1){
        msg2="Displays an alert when the entered number is less than 1";
        msgError(msg2,"1"); }     
        alert("The number is LESS than what is required. Please enter a number from 1 to 5.");
         
        return; }
	if (numberInput2>5) { //Displays an alert when the entered number is greater than 5
         msg2="Alert Event : Entered number is greater than 5";
        flag2=1;
        if (debugService==1){
        msgError(msg2,flag2); }
		alert("The number is GREATER than what is required. Please enter a number from 1 to 5.");
		return; }
  switch (numberInput2) { //Switch to decide which image to display based on numberInput2
    case "1": //This case will change the image src to one.gif
      document.getElementById("imgNumber2").src = "one.gif";
      break;
    case "2": //This case will change the image src to two.gif
      document.getElementById("imgNumber2").src = "two.gif";
      break;
    case "3": //This case will change the image src to three.gif
      document.getElementById("imgNumber2").src = "three.gif";
      break;
    case "4": //This case will change the image src to four.gif
      document.getElementById("imgNumber2").src = "four.gif";
      break;
    case "5": //This case will change the image src to five.gif
      document.getElementById("imgNumber2").src = "five.gif";
      break;
    default: //Displays an alert when the user enters anything other than numbers
        msg2="Invalid Entry! Please enter a number from 1 to 5.";
        flag2=1;
      alert("Invalid Entry! Please enter a number from 1 to 5.");
  }
     if (debugService==1){
        msgError(msg2,flag2);
        imageConsole2(image2);
    }
}