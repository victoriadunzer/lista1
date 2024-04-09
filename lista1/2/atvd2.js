const countdownElement = document.getElementById('countdown');
let seconds = 10;
function updateCountdown() {
  if (seconds > 0) {
    countdownElement.textContent = seconds;
    seconds--;
    setTimeout(updateCountdown, 1000); 
  } else {
    countdownElement.textContent = 'DECOLAR!'; 
  }
}
updateCountdown();