$("document").ready(function() {
    $("#demo-btn").on("click", function() {
      $("#home")
        .parentsUntil("body")
        .addClass("big-class");
    });
  });