// CATALOUGE Size

const catalougeSM = document.getElementById("catalougeSM");
const catalougeMM = document.getElementById("catalougeMM");
const catalougeLG = document.getElementById("catalougeLG");

const catalougeImgContainer = document.querySelectorAll(
  "#catalougeImgContainer"
);

const catalouge = document.getElementById("catalouge");
catalougeSM.addEventListener("click", function () {
  for (let i = 0; i < catalougeImgContainer.length; i++) {
    catalougeImgContainer[i].style.width = "12%";
  }
});

catalougeMM.addEventListener("click", function () {
  for (let i = 0; i < catalougeImgContainer.length; i++) {
    catalougeImgContainer[i].style.width = "17%";
  }
});

catalougeLG.addEventListener("click", function () {
  for (let i = 0; i < catalougeImgContainer.length; i++) {
    catalougeImgContainer[i].style.width = "22%";
  }
});

const categorySection = document.getElementById("categorySection");

const categoryList = document.getElementById("categoryList");

const categoryImages = document.getElementById("categoryImages");

var ww12 = document.body.clientWidth;

//to be there on page load(without resizing the browser, to get the responsive view)
$(function () {
  if (ww12 < 650) {
    categorySection.classList.remove("row");
    categoryList.classList.remove("col-3");
    categoryImages.classList.remove("col-9");

    categoryList.style.display = "none";
  }
});
