import "./src/style.scss";

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Burger menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("burger-icon");
  const navbarToggler = document.querySelector(".navbar-toggler");

  navbarToggler.addEventListener("click", function () {
    burgerIcon.classList.toggle("active");
  });
});

// Hero slider functionality
const slides = [
  {
    title: 'Ako dopadol<br><span class="orange-text">Crashtest?</span>',
    subtitle: "Bezpečnosť v domácnosti môže<br>byť ohrozená",
    buttonText: "PREJSŤ NA VIDEO",
    background: "/assets/banner-background.jpg",
  },
  {
    title: 'Ako dopadol<br><span class="orange-text">Crashtest2?</span>',
    subtitle: "Ďalšie dôležité<br>informácie",
    buttonText: "PREJSŤ NA VIDEO",
    background: "/assets/banner-background.jpg",
  },
  {
    title: 'Ako dopadol<br><span class="orange-text">Crashtest3?</span>',
    subtitle: "Viac o bezpečnosti<br>v domácnosti",
    buttonText: "PREJSŤ NA VIDEO",
    background: "/assets/banner-background.jpg",
  },
];

let currentSlide = 0;
const progressBars = document.querySelectorAll(".progress-bar");
const slideContent = document.querySelector(".slide-content");

function updateSlide() {
  const slide = slides[currentSlide];
  slideContent.innerHTML = `
    <h1>${slide.title}</h1>
    <p class="lead lh-lg">${slide.subtitle}</p>
    <button class="btn btn-primary btn-m">${slide.buttonText}</button>
  `;

  document.querySelector(
    ".hero-slider"
  ).style.backgroundImage = `linear-gradient(transparent, rgba(0, 71, 204, 0.9)), url(${slide.background})`;

  // Update progress bars
  progressBars.forEach((bar, index) => {
    bar.classList.toggle("active", index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

// Initialize slider
updateSlide();
setInterval(nextSlide, 5000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

import * as bootstrap from "bootstrap";
