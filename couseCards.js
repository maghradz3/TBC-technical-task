"use strict";
export const courseCards = (courses) => {
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
};
