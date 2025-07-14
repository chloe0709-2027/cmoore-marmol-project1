


/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('fade_text').addEventListener('click', function() {
    goToLocation('/feed');
  })
  document.addEventListener('keydown', function (event) {
    checkKeyPress(event);
  })
})

function checkKeyPress(event) {
  if (event.code === 'Space') {
    goToLocation('/feed')
  }
}