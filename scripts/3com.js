// Why did I decide to use Flask? Why?
const logInUsername = localStorage.getItem("3com_handle");

$("#welcome").hide();
$("#mail1").hide();
$("#mail2").hide();

setTimeout(function () {
  $("#welcome").fadeIn(3000);
  
  setTimeout(function () {
    $("#welcome").fadeOut(3000);
    
    setTimeout(function () {
      if (logInUsername === "" || logInUsername === undefined || logInUsername === null) {
        $("#mail1").fadeIn(3000);
      }
      
      else {
        $("#mail2").fadeIn(3000);
      }
    }, 3000);
  }, 3000);
}, 1000);
