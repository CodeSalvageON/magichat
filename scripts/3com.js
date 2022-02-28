// Why did I decide to use Flask? Why?

$("#welcome").hide();
$("#mail1").hide();

setTimeout(function () {
  $("#welcome").fadeIn(3000);
  
  setTimeout(function () {
    $("#welcome").fadeOut(3000);
  }, 3000);
}, 1000);
