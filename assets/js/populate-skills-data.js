import skills from "./../data/skills.js";

const createHeaderElement = (headerTextContent) => {
  const header = document.createElement("h4");
  header.textContent = headerTextContent;
  return header;
};

const createListItems = (itemTextContent) =>
  `<li class="list-group-item">${itemTextContent}</li>`;

const createUnorderedListElement = (listItemsContent) => {
  const ul = document.createElement("ul");
  ul.setAttribute("class", "list-group ms-3 skills-group-list");
  ul.innerHTML = listItemsContent.map(createListItems).join("");
  return ul;
};

const createDivElement = (skillData) => {
  const div = document.createElement("div");
  div.setAttribute("class", "group-list");
  div.appendChild(createHeaderElement(skillData.groupName));
  div.appendChild(createUnorderedListElement(skillData.groupSkills));
  return div;
};

const populateSkills = () => {
  skills.groups.forEach((skill) => {
    const skillDiv = createDivElement(skill);
    document.querySelector(".skills .section-body").appendChild(skillDiv);
  });
};

export default populateSkills;
