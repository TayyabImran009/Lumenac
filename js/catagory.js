// CATALOUGE Size

const catalougeSM = document.getElementById("catalougeSM");
const catalougeMM = document.getElementById("catalougeMM");
const catalougeLG = document.getElementById("catalougeLG");

const catalouge = document.getElementById("catalouge");

catalougeSM.addEventListener("click", function () {
  catalouge.innerHTML =
    "<img src='img/Backlight-40 slider 3-1.png' class='catalouge-smImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-smImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-smImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-smImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-smImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-smImg' alt=''>";
});

catalougeMM.addEventListener("click", function () {
  catalouge.innerHTML =
    "<img src='img/Backlight-40 slider 3-1.png' class='catalouge-mmImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-mmImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-mmImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-mmImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-mmImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-mmImg' alt=''>";
});

catalougeLG.addEventListener("click", function () {
  catalouge.innerHTML =
    "<img src='img/Backlight-40 slider 3-1.png' class='catalouge-lgImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-lgImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-lgImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-lgImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-lgImg' alt=''><img src='img/Backlight-40 slider 3-1.png' class='catalouge-lgImg' alt=''>";
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
  }
});
