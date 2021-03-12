import projects from "./../data/projects.js";

const createDivTag = () => {
  const div = document.createElement("div");
  div.setAttribute("class", "group-list project");
  return div;
};

const createImgTag = (projectData) => {
  const img = document.createElement("img");
  img.setAttribute("src", projectData.src);
  img.setAttribute("alt", projectData.title);
  img.setAttribute("class", "rounded section-img");
  return img;
};

const createHeaderElement = (projectData) => {
  const header = document.createElement("h3");
  header.textContent = projectData.title;
  return header;
};

const createLinkElement = (projectData) => {
  const projectLink = document.createElement("a");
  projectLink.setAttribute("href", projectData.githubRepo);
  projectLink.setAttribute("class", "link-dark project-link");
  projectLink.setAttribute("target", "_blank");
  projectLink.appendChild(createImgTag(projectData));
  projectLink.appendChild(createHeaderElement(projectData));
  return projectLink;
};

const createDescriptionElement = (projectData) => {
  const description = document.createElement("p");
  description.textContent = projectData.description;
  return description;
};

const createListItem = (item) =>
  `<li class="btn btn-outline-dark">${item}</li>`;

const createUnorderedListElement = (projectData) => {
  const ul = document.createElement("ul");
  ul.setAttribute("class", "project-skills-list");
  ul.innerHTML = projectData.tools.map(createListItem).join("");
  return ul;
};

const createProjectCard = (projectData) => {
  const div = createDivTag();
  const projectLink = createLinkElement(projectData);
  const description = createDescriptionElement(projectData);
  const ul = createUnorderedListElement(projectData);
  div.appendChild(projectLink);
  div.appendChild(description);
  div.appendChild(ul);
  return div;
};

const populateProjects = () => {
  projects.projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    document.querySelector(".projects .section-body").appendChild(projectCard);
  });
};

export default populateProjects;
