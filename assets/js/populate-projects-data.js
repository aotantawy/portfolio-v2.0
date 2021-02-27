import projects from "./../data/projects.js";

const populateProjects = () => {
  projects.projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    document.querySelector(".projects .section-body").appendChild(projectCard);
  });
};

const createProjectCard = (projectData) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const projectLink = document.createElement("a");
  const header = document.createElement("h4");
  const description = document.createElement("p");
  const ul = document.createElement("ul");
  div.setAttribute("class", "group-list project");
  img.setAttribute("src", projectData.src);
  img.setAttribute("alt", projectData.title);
  img.setAttribute("class", "rounded section-img");
  description.setAttribute("class", "text-muted");
  projectLink.setAttribute("href", "#");
  projectLink.setAttribute("class", "link-dark project-link");
  ul.setAttribute("class", "text-muted project-skills-list");
  projectLink.textContent = projectData.title;
  description.textContent = projectData.description;
  ul.innerHTML = projectData.tools.map(createListItem).join("");
  header.appendChild(projectLink);
  div.appendChild(img);
  div.appendChild(header);
  div.appendChild(description);
  div.appendChild(ul);
  return div;
};

const createListItem = (item) =>
  `<li class="btn btn-outline-dark">${item}</li>`;

export default populateProjects;
