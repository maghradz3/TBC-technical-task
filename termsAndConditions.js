"use strict";
export const termsConditions = (termsAndConditions) => {
  const termsBtn = document.querySelector(".terms_conditions_text");
  const termsTab = document.querySelector(".terms_tab");
  const xBtn = document.querySelector(".xBtn");
  const termsBtnClose = document.querySelector(".terms_btn_close");
  const termsContent = document.querySelector(".terms_content");

  let termsContentText = termsAndConditions[0];
  termsContent.insertAdjacentHTML("beforeend", termsContentText);

  termsBtn.addEventListener("click", function () {
    termsTab.classList.toggle("termsTab_active");
  });

  window.addEventListener("click", function (e) {
    if (!termsTab.contains(e.target) && !termsBtn.contains(e.target)) {
      termsTab.classList.remove("termsTab_active");
    }
  });

  xBtn.addEventListener("click", function () {
    termsTab.classList.remove("termsTab_active");
  });
  termsBtnClose.addEventListener("click", function () {
    termsTab.classList.remove("termsTab_active");
  });
};
