
let input = prompt("What is your name?");
document.getElementById("greeting").innerHTML = ("Welcome " + input + "!");

function scriptTest() {
  // code to be executed
  alert("Hey my script is running");
}

function displayTime() {
    var today = new Date();
    var currentTime = today.toLocaleTimeString();
    alert(currentTime);
}

function getTodaysDate() {
    var today = new Date();
    alert(today);
}
