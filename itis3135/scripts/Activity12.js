$(document).ready(function() {

$("#slider").bxSlider({

auto: true,

minSlides: 1, // Changed from 2 to 1 for Pt.3,4. Enable carousel moves one slide and shows one image at a time.

maxSlides: 1, // Changed from 2 to 1 for Pt.3,4. Enable carousel moves one slide and shows at a time.

// slideWidth: 250, // Removed for Pt. 4 , shows one image at a time on full div.

slideMargin: 10,

shrinkItems: true, // For Pt.4 shows one image on full div.

randomStart: true, // Changed for Point 2 - Images to be loaded randomly

pause: 3000, // Point 5, - For Automatic transition to 3 seconds i.e. 3000 mili seconds.

captions:true, // Point 7 - Enable title as captions on each image.

});

});
