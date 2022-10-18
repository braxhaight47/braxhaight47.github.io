
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

function promptUser() {
    let name = document.getElementById("name").value;
    let mood = document.getElementById("mood").value;
    document.getElementById("moodGreeting").innerHTML = ("The Blissful Hippo welcomes you, ${fullName} ! We're glad you are doing ${feeling}!");
}
