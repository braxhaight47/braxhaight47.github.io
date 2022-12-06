$(document).ready(function(){
$.getJSON("team.json", function(data) {
$.each(data, function() {
$.each(this, function(key, value) {
$("#team").append(
"<img src="+"'"+value.image+"'><br>"+
"<h2>" + value.name + "</h2>" +
"<h3>" + value.title + "</h3>" +
"<p>" + value.bio + "</p><br>"
);
});
});
});
});
