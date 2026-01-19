$(document).ready(function () {
  $(".review-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 800,

    navText: [
      "<span class='owl-prev-btn'><i class='fa fa-chevron-left' aria-hidden='true'></i></span>",
      "<span class='owl-next-btn'><i class='fa fa-chevron-right' aria-hidden='true'></i></span>",
    ],

    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 3 },
    },
  });
});

// Set countdown target (example: 15 minutes from now)
const countdownMinutes = 15;
const targetTime = new Date().getTime() + countdownMinutes * 60 * 1000;

const timerElement = document.getElementById("timer");

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetTime - now;

  if (distance <= 0) {
    clearInterval(interval);
    timerElement.innerText = "00:00:00";
    return;
  }

  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerText = `${String(hours).padStart(2, "0")}:${String(
    minutes,
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}, 1000);

// End  Countdown
