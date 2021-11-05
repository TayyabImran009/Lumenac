// CATALOUGE Size

const catalougeSM = document.getElementById("catalougeSM");
const catalougeMM = document.getElementById("catalougeMM");
const catalougeLG = document.getElementById("catalougeLG");

const catalouge = document.getElementById("catalouge");
catalougeSM.addEventListener("click", function () {
  catalouge.innerHTML =
    "<div class='catalougeImgContainer'><img src='img/slide1.png' class='catalouge-smImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content-sm'><p style='color: white;'>Led Light</p></div></div><div class='catalougeImgContainer'><img src='img/slide2.png' class='catalouge-smImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content-sm'><p style='color: white;'>Led Light</p></div></div><div class='catalougeImgContainer'><img src='img/slide3.png' class='catalouge-smImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content-sm'><p style='color: white;'>Led Light</p></div></div><div class='catalougeImgContainer'><img src='img/slide4.png' class='catalouge-smImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content-sm'><p style='color: white;'>Led Light</p></div></div><div class='catalougeImgContainer'><img src='img/slide5.png' class='catalouge-smImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content-sm'><p style='color: white;'>Led Light</p></div></div>";
});

catalougeMM.addEventListener("click", function () {
  catalouge.innerHTML =
    "<div class='catalougeImgContainer'><img src='img/slide1.png' class='catalouge-mmImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content-mm'><p style='color: white;'>Led Light</p></div></div><div class='catalougeImgContainer'><img src='img/slide2.png' class='catalouge-mmImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content-mm'><p style='color: white;'>Led Light</p></div></div><div class='catalougeImgContainer'><img src='img/slide3.png' class='catalouge-mmImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content-mm'><p style='color: white;'>Led Light</p></div></div><div class='catalougeImgContainer'><img src='img/slide4.png' class='catalouge-mmImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content-mm'><p style='color: white;'>Led Light</p></div></div><div class='catalougeImgContainer'><img src='img/slide5.png' class='catalouge-mmImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content-mm'><p style='color: white;'>Led Light</p></div></div>";
});

catalougeLG.addEventListener("click", function () {
  catalouge.innerHTML =
    "<div class='catalougeImgContainer'><img src='img/slide1.png' class='catalouge-lgImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content'><p style='color: white;'>Led Light</p></div></div><div class='catalougeImgContainer'><img src='img/slide2.png' class='catalouge-lgImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content'><p style='color: white;'>Led Light</p></div></div><div class='catalougeImgContainer'><img src='img/slide3.png' class='catalouge-lgImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content'><p style='color: white;'>Led Light</p></div></div><div class='catalougeImgContainer'><img src='img/slide4.png' class='catalouge-lgImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content'><p style='color: white;'>Led Light</p></div></div><div class='catalougeImgContainer'><img src='img/slide5.png' class='catalouge-lgImg' alt=''><p class='nameofCatalouge'><b>LED Light</b></p><div class='catalouge-overlay-content'><p style='color: white;'>Led Light</p></div></div>";
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
