// Jquery for Slideshow!
$(document).ready(function () {
    var nextSlide = $("#slides img:first-child");
    var nextCaption;
    var nextSlidesource;
    var runSlideShow = function () {
        //hide the caption
            $("#caption").hide(2000);
        //fade out the slide
        $("#slide").fadeOut(1000,function () {
        //checking length
        if (nextSlide.length == 0){
            //if length is zero then set first image
            nextSlide = $("#slides img:first-child");
        }
        else {
            //get next slide
            nextSlide = nextSlide.next();
        }
        //get src attribute
        nextSlidSource = nextSlide.attr("src");
        //get alt attribute
        nextCaption = nextSlide.attr("alt");
        //set src attribute
        $("#slide").attr("src", nextSlidSource).fadeIn(1000);
        //get alt attribute with show() method
        $("#caption").text(nextCaption).show(1000);
    }
    ); //end callback
    };
    //start slide show
    var timer1 = setInterval(runSlideShow, 5000);
    // starting and stopping the slide show
    $("#Slide").click(function () {
        if (time != null) {
            clearInterval(timer1);
            timer1 = null;
        }
        else {
            timer1 = setInterval(runSlideShow, 5000);
        }
    });
}); //endready
