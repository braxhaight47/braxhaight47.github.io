$(document).ready(function(){
$.getJSON("team.json", function(data) {
$.each(data, function() {
$.each(this, function(key, value) {
$("#team").append(
"<img src="+"'"+value.image+"'><br>"+
"<h2>" + value.full_name + "</h2>" +
"<h3>" + value.department + "</h3>" +
"<p>" + value.bio + "</p><br>"
);
});
});
});
});
