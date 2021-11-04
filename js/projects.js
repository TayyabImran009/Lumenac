const project_fullscreen_btn = document.getElementById(
  "project-fullscreen-btn"
);

// Get the modal
var projectsModel = document.getElementById("projectsModel");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const projectsModelImage = document.querySelectorAll("#projectsModelImage");
const project_imagefullscreen_btn = document.querySelectorAll(
  "#project-fullscreen-btn"
);
const projectsModelDisplayImage = document.getElementById(
  "projectsModelDisplayImage"
);
var projectsModelCaption = document.getElementById("projectsModelCaption");

for (let i = 0; i < project_imagefullscreen_btn.length; i++) {
  project_imagefullscreen_btn[i].addEventListener("click", function () {
    projectsModel.style.display = "block";
    projectsModelDisplayImage.src = projectsModelImage[i].src;
    projectsModelCaption.innerHTML = projectsModelImage[i].alt;
  });
}

// Get the <span> element that closes the modal
var projectsModelClose =
  document.getElementsByClassName("projectsModelClose")[0];

// When the user clicks on <span> (x), close the modal
projectsModelClose.onclick = function () {
  projectsModel.style.display = "none";
};
