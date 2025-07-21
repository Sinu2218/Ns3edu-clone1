let started = false; // To make sure it runs once

function startCountdown() {
  let count = 10; // Starting number
  const countdownEl = document.getElementById("countdown");

  const interval = setInterval(() => {
    countdownEl.textContent = count;
    count++;

    if (count < 0) {
      clearInterval(interval);
    }
  }, 1000);
}

// When user scrolls to .counter-section
window.addEventListener("scroll", () => {
  const section = document.querySelector(".counter-section");
  const sectionTop = section.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight && !started) {
    started = true;
    startCountdown();
  }
});
