function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("contact2").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajaxx.txt", true);
  xhttp.send();
}

function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("contact3").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajaxx2.txt", true);
  xhttp.send();
}
