"use strict";
export const navItems = () => {
  const navItems = document.querySelectorAll(".nav_items li");

  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navItems.forEach(function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
};

export const mobileNav = () => {
  const navToggle = document.querySelector(".burger_menu");
  const navItems = document.querySelector(".nav_items");

  navToggle.addEventListener("click", function () {
    navItems.classList.toggle("activeBar");
    navToggle.classList.toggle("burger_menu_rotate");
  });

  window.addEventListener("click", function (e) {
    if (!navToggle.contains(e.target) && !navItems.contains(e.target)) {
      navItems.classList.remove("activeBar");
      navToggle.classList.remove("burger_menu_rotate");
    }
  });
};
