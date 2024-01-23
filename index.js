"use strict";

import { courses, faqData, sponsorImages } from "./data.js";

// Nav Items//

document.addEventListener("DOMContentLoaded", function () {
  var navItems = document.querySelectorAll(".nav_items li");

  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navItems.forEach(function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});

// Mobile Nav //
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".burger_menu");
  const navItems = document.querySelector(".nav_items");

  navToggle.addEventListener("click", function () {
    navItems.classList.toggle("activeBar");
    navToggle.classList.toggle("burger_menu_rotate");
  });
});

///Courses Cards///////////

document.addEventListener("DOMContentLoaded", function () {
  const coursesContainer = document.querySelector(".course_cards_container");

  courses.forEach((course) => {
    let cardHTML = `
            <div class="card">
                <div class="card_img">
                    <img src="${course.img}" alt="image" />
                </div>
                <div class="card_content_wrapper">
                    <div class="card_headline">
                        <h1>${course.name}</h1>
                        <p>${course.status}</p>
                    </div>
                    <button class="card_button">
                        <i class="fa-solid fa-arrow-right"></i>
                        <span>კურსის დეტალები</span>
                    </button>
                </div>
            </div>`;

    coursesContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
});

///Sliderr/////

let currentSlide = 0;
const totalSlides = sponsorImages.length;
const sliderContainer = document.querySelector(".slides-container");
const dotsContainer = document.querySelector(".slider-dots");

function createSlides() {
  sponsorImages.forEach((slide, index) => {
    let slideHTML = `<div class="slide${index === 0 ? " active" : ""}">`;
    slide.forEach((image) => {
      slideHTML += `<div class="img_box"><img src="${image}" alt="Sponsor" /></div>`;
    });
    slideHTML += `</div>`;
    sliderContainer.insertAdjacentHTML("beforeend", slideHTML);
  });
}

function createDots() {
  for (let i = 0; i < totalSlides; i++) {
    const dotHTML = `<span class="dot${i === 0 ? " active" : ""}"></span>`;
    dotsContainer.insertAdjacentHTML("beforeend", dotHTML);
  }
}

function changeSlide(slideIndex) {
  document.querySelectorAll(".slide").forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === slideIndex) {
      slide.classList.add("active");
    }
  });
  updateDots(slideIndex);
}

function updateDots(slideIndex) {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === slideIndex) {
      dot.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  changeSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  changeSlide(currentSlide);
}

document.querySelector(".right-arrow").addEventListener("click", nextSlide);
document.querySelector(".left-arrow").addEventListener("click", prevSlide);

document.addEventListener("DOMContentLoaded", () => {
  createSlides();
  createDots();
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => changeSlide(index));
  });
});

// Auto slide
setInterval(nextSlide, 5000); // Change slide every 5 seconds

////Accordion////

document.addEventListener("DOMContentLoaded", function () {
  const accordionContainer = document.querySelector(".accordion");

  faqData.forEach((item, index) => {
    let accordionHTML = `
            <div class="accordion-item">
                <button class="accordion-question">
                    ${item.question}
                    <span class="arrow">&#9660;</span>
                </button>
                <div class="accordion-answer">
                    <p>${item.answer}</p>
                </div>
            </div>
        `;
    accordionContainer.insertAdjacentHTML("beforeend", accordionHTML);
  });

  attachAccordionEvents();
});
function attachAccordionEvents() {
  document.querySelectorAll(".accordion-question").forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;

      document.querySelectorAll(".accordion-answer").forEach((otherAnswer) => {
        if (otherAnswer !== answer) {
          otherAnswer.style.maxHeight = null;
          otherAnswer.previousElementSibling.classList.remove("active");
        }
      });

      this.classList.toggle("active");
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}
