import skills from "./../data/skills.js";
const populateSkills = () => {
  skills.groups.forEach((skill) => {
    const div = document.createElement("div");
    const skillHeader = document.createElement("h4");
    const ul = document.createElement("ul");
    div.setAttribute("class", "group-list");
    ul.setAttribute("class", "list-group ms-3 skills-group-list");
    skillHeader.textContent = skill.groupName;
    ul.innerHTML = skill.groupSkills.map(mapListItems).join('');
    div.appendChild(skillHeader);
    div.appendChild(ul);
    document.querySelector(".skills .section-body").appendChild(div);
  });
};

const mapListItems = (item) => `<li class="list-group-item">${item}</li>`;

export default populateSkills;
