import about from "./../data/about.js";
const populateAbout = () => {
  about.paragraphs.forEach((element) => {
    const createElement = document.createElement("p");
    createElement.setAttribute("class", "section-body");
    createElement.textContent = element;
    document.querySelector(".about").appendChild(createElement);
  });
};

export default populateAbout;
