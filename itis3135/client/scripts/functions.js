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
    document.getElementById("contentSpaceP").innerHTML = textContent;
}
