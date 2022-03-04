// Why did I decide to use Flask? Why?
const logInUsername = localStorage.getItem("3com_handle");

$("#welcome").hide();
$("#mail1").hide();
$("#display-pfp").hide();
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

const creationForm = document.getElementById("creation-form");
const mailHandle = document.getElementById("mail-handle1");
const pfpURL = document.getElementById("pfp-url");
const displayEmail = document.getElementById("display-email");
const displayPFP = document.getElementById("display-pfp");

let mail_thingy = "";
let mail_pfp = "";

creationForm.onsubmit = function () {
  event.preventDefault();
  
  fetch ("/connect", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({
      handle : mailHandle.value,
      pfp : pfpURL.value
    })
  })
  .then(response => response.text())
  .then(data => {
    mail_thingy = mailHandle.value;
    mail_pfp = pfpURL.value;
    $("#creation-form").hide();
    console.log(data);
    
    const randMail = Math.floor(Math.random() * 3);
    let provRand = "";
    
    if (randMail === 0) {
      provRand = "compuserve.com";
    }
    
    else if (randMail === 1) {
      provRand = "aol.com";
    }
    
    else {
      provRand = "hotmail.com";
    }
    
    displayEmail.innerText = "Address: " + mail_thingy + "@" + provRand;
    
    $("#display-pfp").show();
    
    if (mail_pfp === "" || mail_pfp === null || mail_pfp === undefined) {
      displayPFP.src = "https://codesalvageon.github.io/magichat/images/chess.png";
    }
    
    else {
      displayPFP.src = mail_pfp;
    }
    
    setTimeout(function () {
      $("#mail1").fadeOut(3000);
      
      setTimeout(function () {
        $("#mail2").fadeIn(3000);
      }, 3000);
    }, 5000);
  })
  .catch(error => {
    throw error;
  })
}

const feed = document.getElementById("feed");

setInterval(function () {
  fetch("/feed")
  .then(response => response.text())
  .then(data => {
    feed.innerHTML = data;
  })
  .catch(error => {
    throw error;
  })
}, 5000);
