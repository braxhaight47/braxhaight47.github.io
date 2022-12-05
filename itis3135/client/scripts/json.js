$(document).ready(function(){
$.getJSON("contact.json", function(data) {
$.each(data, function() {
$.each(this, function(key, value) {
$("#contact").append(
"<h2>Contact Information:</h2>" +
"<h3> If you need additional help contact:</h3>" +
"<p class='backColor2'>" + value.email + "</p>" +
"<h3> If you need help regarding this website:</h3>" +
"<p class='backColor2'>" + value.alt_email + "</p>"
);
});
});
});
});
