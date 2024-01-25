"use strict";
export const accordion = (faqData) => {
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

  function attachAccordionEvents() {
    document.querySelectorAll(".accordion-question").forEach((question) => {
      question.addEventListener("click", function () {
        const answer = this.nextElementSibling;

        document
          .querySelectorAll(".accordion-answer")
          .forEach((otherAnswer) => {
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
};
