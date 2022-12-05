$(document).ready(function(){
$.getJSON("contact.json", function(data) {
$.each(data, function() {
$.each(this, function(key, value) {
$("#contact").append(
"<p class='backColor2'>" + value.email + "</p>"
);
});
});
});
});
