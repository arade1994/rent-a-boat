//SET CURRENT YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
////////////////////////////////////////////////////////////////////

//MAKE MOBILE NAVIGATION WORK
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
////////////////////////////////////////////////////////////////////

//SMOOTH SCROLLING ANIMATION
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scrool back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
////////////////////////////////////////////////////////////////////

//STICKY NAVIGATION
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
////////////////////////////////////////////////////////////////////

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
////////////////////////////////////////////////////////////////////

// Including animations for elements in viewport
const services = document.querySelectorAll(".service");
const servicesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-animation");
    }
  });
});
services.forEach((service) => servicesObserver.observe(service));

const journeys = document.querySelectorAll(".section-journey__step");
const journeysObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      if (index === 0) {
        entry.target.classList.add("move-from-left-animation");
      }
      if (index === 2) {
        entry.target.classList.add("move-from-right-animation");
      }
    }
  });
});
journeys.forEach((journey) => journeysObserver.observe(journey));

const placesTexts = document.querySelectorAll(".place-text-box");
const placesTextsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      if (index % 2 === 0) {
        entry.target.classList.add("move-from-left-animation");
      }
      if (entry % 2 !== 0) {
        entry.target.classList.add("move-from-right-animation");
      }
    }
  });
});
placesTexts.forEach((placeText) => placesTextsObserver.observe(placeText));

const placesImages = document.querySelectorAll(".place-image-box");
const placesImagesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      if (index % 2 === 0) {
        entry.target.classList.add("move-from-right-animation");
      }
      if (entry % 2 !== 0) {
        entry.target.classList.add("move-from-left-animation");
      }
    }
  });
});
placesImages.forEach((placeText) => placesImagesObserver.observe(placeText));
////////////////////////////////////////////////////////////////////
