import about from "./../data/about.js";

const createParagraph = (paragraphContent) => {
  const paragraph = document.createElement("p");
  paragraph.setAttribute("class", "section-body");
  paragraph.textContent = paragraphContent;
  return paragraph;
};

const populateAbout = () => {
  about.paragraphs.forEach((paragraph) => {
    const paragraphElement = createParagraph(paragraph);
    document.querySelector(".about").appendChild(paragraphElement);
  });
};

export default populateAbout;
