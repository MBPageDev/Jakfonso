// Toggle Menu Function
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

// Function to detect click outside the menu and hide it
window.addEventListener('click', function(event) {
  const menu = document.getElementById('menu');
  const toggleButton = document.querySelector('.toggle-button');

  if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
    menu.classList.add('hidden');
  }
});

// Set the date for the event
const eventDate = new Date("November 27, 2024 00:00:00").getTime();

// Update countdown every 1 second
const countdown = setInterval(function() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display results in respective elements
  document.getElementById("days").innerHTML = days + "d";
  document.getElementById("hours").innerHTML = hours + "h";
  document.getElementById("minutes").innerHTML = minutes + "m";
  document.getElementById("seconds").innerHTML = seconds + "s";

  // Add pulse animation to the countdown elements
  document.getElementById("days").classList.add("pulse");
  document.getElementById("hours").classList.add("pulse");
  document.getElementById("minutes").classList.add("pulse");
  document.getElementById("seconds").classList.add("pulse");

  // If the countdown is over, display "EVENT ENDED"
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").innerHTML = "EVENT ENDED";
  }
}, 1000);