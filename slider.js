"use strict";
export const slider = (sponsorImages) => {
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
};
