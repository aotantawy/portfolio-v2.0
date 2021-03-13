import populateAbout from "./js/populate-about-data.js";
import populateSkills from "./js/populate-skills-data.js";
import populateProjects from "./js/populate-projects-data.js";

populateAbout();
populateSkills();
populateProjects();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// scroll up animation when click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.onclick = scrollToTop;
});

// scroll up by click up button
document.querySelector(".scroll-up").onclick = scrollToTop;
