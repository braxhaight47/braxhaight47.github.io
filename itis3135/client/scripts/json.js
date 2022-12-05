$(document).ready(function(){
$.getJSON("contact.json", function(data) {
$.each(data, function() {
$.each(this, function(key, value) {
$("#contact").append(
"<p class='backColor2'>Contact Information:<br>" +
"If you need additional help contact:<br>" +
value.email + "<br>" +
"If you need help regarding this website:<br>" +
value.alt_email + "</p>"
);
});
});
});
});
