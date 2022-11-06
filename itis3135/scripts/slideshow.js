// Jquery for Slideshow!
$(document).ready(function () {
    var followingCaption;
    var slideContinueSource;
    var slideContinue = $("#slides img:first-child");
    var activateSlides = function () {
        $("#caption").hide(2000);
        $("#slide").fadeOut(1000,function () {
        if (slideContinue.length == 0){
            slideContinue = $("#slides img:first-child");
        }
        else {
            slideContinue = slideContinue.next();
        }
        slideContinueSource = slideContinue.attr("src");
        followingCaption = slideContinue.attr("alt");
        $("#slide").attr("src", slideContinueSource).fadeIn(1000);
        $("#caption").text(followingCaption).show(1000);
    }
    );
    };
    var timer = setInterval(activateSlides, 5000);
    $("#Slide").click(function () {
        if (time != null) {
            clearInterval(timer);
            timer = null;
        }
        else {
            timer = setInterval(activateSlides, 5000);
        }
    });
});
