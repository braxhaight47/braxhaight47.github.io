let pageName = "";
function show(shown) {
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
    localStorage.setItem('textStuff', textContent.value);
    document.getElementById("contentSpace").innerHTML = textContent;
}

function reload(){
    var container = document.getElementById("contentSpace");
    var content = "<p>Content Written Will Be Displayed Here!</p>";
    container.innerHTML = content;
}

window.onload = function() {
   document.getElementById("designerInfo") = localStorage.getItem('textStuff');
}
