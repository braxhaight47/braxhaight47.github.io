$(document).ready(function(){
$.getJSON("contact.json", function(data) {
$.each(data, function() {
$.each(this, function(key, value) {
$("#contact").append(
"<p class='backColor2'>Owners Email<br>" +
value.email + "<br><br>" +
"Central Website Help Email<br>" +
value.alt_email + "</p>"
);
});
});
});
});
