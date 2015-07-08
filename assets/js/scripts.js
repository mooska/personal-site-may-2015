$(".cool-burgex span").click(function () {
    $(".nav-panel").slideToggle("slow");
});

$(".top-center-div span").fadeTo(1000, 1);

$("#contact-button").click(function () {
    $("#form-panel").fadeTo(300, 1).css("display", "block");
});

$("#form-panel img").click(function () {
    $("#form-panel").css("display", "none");
});



$("#my-form").submit(function(evt) {
    evt.preventDefault();
    
    var userName = $("#name").text();
    var userSubject = $("#subject").text();
    var userEmail = $("#email").text();
    var userMessage = $("#message").text();
    
    $.ajax({
        url: "//formspree.io/contact@ryancatkins.com",
        method: "POST",
        data: {
            name: userName,
            subject: userSubject,
            email: userEmail,
            message: userMessage
        },
        dataType: "json"
    }).done(function () {
        $("#my-form").css("display", "none");
        $("#form-panel").append("<br><br><p class='text'>Your message has been sent.</p><br><p class='text'>Thank you!</p>");
    });
});

var topToX = function() {
  $("#top-bun").css("top", ".65em")
    .css("-ms-transform", "rotate(45deg)")
    .css("-webkit-transform", "rotate(45deg)")
    .css("transform", "rotate(45deg)")
    .addClass("on");
};

var botToX = function() {
  $("#bottom-bun").css("top", ".65em")
    .css("-ms-transform", "rotate(315deg)")
    .css("-webkit-transform", "rotate(315deg)")
    .css("transform", "rotate(315deg)");
};

var breadToBurger = function() {
  $(".bread")
    .css("-ms-transform", "rotate(0deg)")
    .css("-webkit-transform", "rotate(0deg)")
    .css("transform", "rotate(0deg)")
    .removeClass("on");
};

$(".cool-burgex span").click(function() {
  if($("#top-bun").hasClass("on")) {
    breadToBurger();
    $("#top-bun")
      .css("top", "0em");
    $("#bottom-bun")
      .css("top", "1.3em");
    $("#meat").delay(900).fadeTo(250, 1);

  } else {
    topToX();
    botToX();
    $("#meat").fadeTo(250, 0);
  }
});

