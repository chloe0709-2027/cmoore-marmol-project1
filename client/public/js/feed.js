function goToLocation(path) {
  window.location.href = path;
}

function checkKeyPress(event) {
  if (event.code === 'Space' || event.key === ' ') {
    event.preventDefault();
    goToLocation('/feed');
  }
}

window.onload = () => {
  document.body.setAttribute('tabindex', '0');
  document.body.focus();
  
  document.body.addEventListener('keyup', checkKeyPress);

  const clickTarget = document.getElementById('fade_text');
  if (clickTarget) {
    clickTarget.style.cursor = 'pointer';
    clickTarget.addEventListener('click', () => {
      goToLocation('/feed');
    });
  }
};