// Js for Activity 10
$(document).ready(function () {

    // set up event handlers for links
    
    $("#imageCollection a").click(function (evt) {
    
    // cancel the default action of the link
    
    evt.preventDefault();
    
    var imageURL = $(this).attr("href");
    
    var caption = $(this).attr("title");
    
    $("#caption").fadeOut(1000, function(){
    
    $("#caption").text(caption).fadeIn(1000);
    
    });
    
    $("#image").fadeOut(1000, function(){
    
    $("#image").attr("src", imageURL).fadeIn(1000);
    
    });
    
    }); // end click
    
    // move focus to first thumbnail
    
    $("li:first-child a").focus();
    
    $("#image").hide().fadeIn(1000);
    
    $("#caption").hide().fadeIn(1000);
    
    }); // end ready