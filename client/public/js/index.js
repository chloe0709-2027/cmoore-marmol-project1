function goToLocation(path) {
  window.location.href = path; // Fixed typo
}

function checkKeyPress(e) {
  if (e.code === 'Space' || e.key === ' ') {
    e.preventDefault();
    goToLocation('/feed');
  }
}

window.onload = function () {
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
