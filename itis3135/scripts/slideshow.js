// Jquery for Slideshow!
$(document).ready(function () {
    var nextSlide = $("#slides img:first-child");
    var nextCaption;
    var nextSlidesource;
    var runSlideShow = function () {
        $("#caption").hide(2000);
        $("#slide").fadeOut(1000,function () {
        if (nextSlide.length == 0){
            nextSlide = $("#slides img:first-child");
        }
        else {
            nextSlide = nextSlide.next();
        }
        nextSlidSource = nextSlide.attr("src");
        nextCaption = nextSlide.attr("alt");
        $("#slide").attr("src", nextSlidSource).fadeIn(1000);
        $("#caption").text(nextCaption).show(1000);
    }
    );
    };
    var timer1 = setInterval(runSlideShow, 5000);
    $("#Slide").click(function () {
        if (time != null) {
            clearInterval(timer1);
            timer1 = null;
        }
        else {
            timer1 = setInterval(runSlideShow, 5000);
        }
    });
});
