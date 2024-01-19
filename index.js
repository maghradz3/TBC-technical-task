"use strict";
const courses = [
  {
    id: 1,
    img: "../images/ios_dev.webp",
    name: "iOS Development",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    id: 2,
    img: "../images/react.webp",
    name: "React",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    id: 3,
    img: "../images/python.webp",
    name: "Intro to Python",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    id: 4,
    img: "../images/adv_python.webp",
    name: "Advanced Python",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    id: 5,
    img: "../images/cybersec.webp",
    name: "Advanced Cybersecurity Course",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    id: 6,
    img: "../images/tot.webp",
    name: "ToT - Training of Trainers",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    id: 7,
    img: "../images/blockchain.webp",
    name: "Blockchain",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    id: 8,
    img: "../images/devops.webp",
    name: "DevOps",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    id: 9,
    img: "../images/infoSec.webp",
    name: "Information Security Governance",
    status: "რეგისტრაცია დასრულებულია",
  },
];

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
