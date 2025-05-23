const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

function updateClock() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();

  timeEl.textContent = `${hours}:${minutes}:${seconds}`;
  dateEl.textContent = ` ${monthName} ${day}, ${year} ${dayName}`;
}

// Initial call
updateClock();
// Update every second
setInterval(updateClock, 1000);
