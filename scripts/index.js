const main_body = document.body;

function openFullscreen() {
  if (main_body.requestFullscreen) {
    main_body.requestFullscreen();
  } 
  
  else if (main_body.webkitRequestFullscreen) { /* Safari */
    main_body.webkitRequestFullscreen();
  } 
  
  else if (main_body.msRequestFullscreen) { /* IE11 */
    main_body.msRequestFullscreen();
  }
}
