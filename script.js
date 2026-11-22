// 1. Live Christmas Countdown
function updateCountdown() {
  const now = new Date();
  const currentYear = now.getFullYear();
  let christmas = new Date(`December 25, ${currentYear} 00:00:00`);

  // If Christmas has passed this year, aim for next year
  if (now.getMonth() === 11 && now.getDate() > 25) {
    christmas = new Date(`December 25, ${currentYear + 1} 00:00:00`);
  }

  const diff = christmas - now;

  // Check if today is Christmas Day
  if (now.getMonth() === 11 && now.getDate() === 25) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("christmas-status").textContent = "Merry Christmas! Today is the day!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 2. Full-Screen Snowflakes Generator
function createSnowflakes() {
  const container = document.getElementById("snow-container");
  const snowflakeSymbols = ["❄", "❅", "❆", "•"];
  const count = 45;

  for (let i = 0; i < count; i++) {
    const flake = document.createElement("div");
    flake.classList.add("snowflake");
    flake.textContent = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];

    flake.style.left = Math.random() * 100 + "vw";
    flake.style.fontSize = Math.random() * 14 + 10 + "px";
    flake.style.opacity = Math.random() * 0.7 + 0.3;
    flake.style.animationDuration = Math.random() * 6 + 6 + "s";
    flake.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(flake);
  }
}

createSnowflakes();