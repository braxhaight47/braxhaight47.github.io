$(document).ready(function(){
$.getJSON("facultyList.json", function(data) {
$.each(data, function() {
$.each(this, function(key, value) {
$("#contact").append(
"<p>" + value.email + "</p>" +
);
});
});
});
});
