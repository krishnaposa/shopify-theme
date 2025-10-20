document.addEventListener("DOMContentLoaded", function() {
  const countdownElement = document.getElementById("countdown");
  if (!countdownElement) return;

  const now = new Date();
  const deadline = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours

  function updateCountdown() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      countdownElement.textContent = "00:00:00";
      return;
    }
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});