// Clone the slider with a different ID and append it to the body
$(".slider").clone().removeAttr("id").attr("id", "slider-2").appendTo("body");

// Initialize the first slider with Slick carousel
$("#slider-1").slick({
  arrows: false,
  speed: 750,
  asNavFor: "#slider-2",
  dots: false
})
.on("mousedown touchstart", function () {
  $("body").addClass("down");
})
.on("mouseleave mouseup touchend", function () {
  $("body").removeClass("down");
});

// Handle keyboard events for the slider
$(window)
.on("keydown", function () {
  $("body").addClass("down");
})
.on("keyup", function () {
  $("body").removeClass("down");
});

// Initialize the second slider (slider-2)
$("#slider-2").slick({
  fade: true,
  arrows: false,
  speed: 300,
  asNavFor: "#slider-1",
  dots: false
});

// Automatically trigger some slider actions with delays
setTimeout(function () {
  $(window).trigger("keydown");
  setTimeout(function () {
    $("#slider-1").slick("slickNext");
    setTimeout(function () {
      $(window).trigger("keyup");
    }, 500);
  }, 600);
}, 1500);

// Remove the "mask" attribute from all "image" elements within the slider-1
$("#slider-1 image").removeAttr("mask");

// Handle window resize event
$(window)
.on("resize", function () {
  $("#donutmask circle").attr({
    cx: $(window).width() / 2,
    cy: $(window).height() / 2
  });
  $("#donutmask #outer").attr({
    r: $(window).height() / 2.6
  });
  $("#donutmask #inner").attr({
    r: $(window).height() / 4.5
  });
})
.resize();

// Update cursor position based on mouse movement
$(window).on("mousemove", function (e) {
  $(".cursor").css({
    top: e.pageY + "px",
    left: e.pageX + "px"
  });
});
