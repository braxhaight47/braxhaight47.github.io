let pageName = "";
function show(shown) {
  document.getElementById("designerInfo").value = getCookie("myCookie").split('&&&').join(';').split('\\').join('\n');;
  pageNameArray = document.getElementsByClassName("target");
  for (let i = 0; i < pageNameArray.length; i++) {
      if(pageNameArray[i].id == shown){
           pageNameArray[i].style.display = "block";
      }
      else {
          pageNameArray[i].style.display = "none";
      }
    }
}

function designer() {
    var textContent = document.getElementById("designerInfo").value;
    document.getElementById("contentSpace").innerHTML = textContent;
    textContent = textContent.split('\n').join('\\').split(';').join('&&&');
    setCookie("myCookie", textContent);
    //localStorage.setItem("textStuff", document.getElementById("designerInfo").value)
}

function reload(){
    var container = document.getElementById("contentSpace");
    var content = "<p>Content Written Will Be Displayed Here!</p>";
    container.innerHTML = content;
    document.getElementById("designerInfo").value = "Enter html here...";
    setCookie('myCookie', document.getElementById("designerInfo").value);
    ////localStorage.getItem("textStuff");
}

//Testing things
function setCookie(name, value) {
  var d = new Date();
  var days = 10; // expires in days
  d.setTime(d.getTime() + (days*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  var name = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
