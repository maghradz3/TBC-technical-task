"use strict";

import { courses, faqData, sponsorImages, termsAndConditions } from "./data.js";
import { accordion } from "./accordion.js";
import { courseCards } from "./couseCards.js";
import { mobileNav, navItems } from "./navItems.js";
import { slider } from "./slider.js";
import { termsConditions } from "./termsAndConditions.js";

// Nav Items//

document.addEventListener("DOMContentLoaded", navItems());

// Mobile Nav //

document.addEventListener("DOMContentLoaded", mobileNav());

///Courses Cards///////////
document.addEventListener("DOMContentLoaded", courseCards(courses));

///Sliderr/////
document.addEventListener("DOMContentLoaded", slider(sponsorImages));

////Accordion////
document.addEventListener("DOMContentLoaded", accordion(faqData));

//Terms and Conditions/////
document.addEventListener(
  "DOMContentLoaded",
  termsConditions(termsAndConditions)
);
