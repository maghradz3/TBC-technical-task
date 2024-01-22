"use strict";

import { courses, faqData } from "./data.js";

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

//slider//
// const sponsorData = [
//     ["./images/cybersec.wepb", "images/devops.webp", "./images/ios_dev"],
//     [
//       "./images/rect.webp",
//       "./images/adv_python.webp",
//       "./images/blockchain.webp",
//     ],
//     ["./images/tot.webp", "./images/infoSec.webp", "./images/python.webp"],
//   ];

const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
  });
  slides[currentSlide].classList.add("active");

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

leftArrow.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

rightArrow.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlider();
  });
});

updateSlider();

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
