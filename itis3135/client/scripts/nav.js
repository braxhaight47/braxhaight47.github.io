$(document).ready(function() {
   // Hide the navigation bar by default
   $('#myNavBar').hide();

   // Show the navigation bar when the user hovers over the #navTrigger element
   $('#navTrigger').hover(function() {
     $('#myNavBar').show();
   });

   // Hide the navigation bar when the user moves the cursor away from the #navTrigger or #myNavBar elements
   $('#navTrigger, #myNavBar').mouseout(function() {
     $('#myNavBar').hide();
   });

   // Show or hide the navigation bar when the user clicks on the #navTrigger element
   $('#navTrigger').click(function() {
     $('#myNavBar').toggle();
   });
 });
