// Featured image Tab

const productFeaturedImage = document.getElementById("product-featured-image");

const productFeaturedImageOption1 = document.getElementById(
  "product-featured-image-option1"
);
const productFeaturedImageOption2 = document.getElementById(
  "product-featured-image-option2"
);

const featureImageBorder1 = document.getElementById("featureImageBorder1");
const featureImageBorder2 = document.getElementById("featureImageBorder2");

productFeaturedImageOption1.addEventListener("click", function () {
  productFeaturedImage.innerHTML =
    "<img src='img/Backlight-40 slider 3-1.png' alt=''>";
  featureImageBorder1.style.border = "solid 1px black";
  featureImageBorder2.style.border = "none";
});

productFeaturedImageOption2.addEventListener("click", function () {
  productFeaturedImage.innerHTML = "<img src='img/image4.png' alt=''>";
  featureImageBorder2.style.border = "solid 1px black";
  featureImageBorder1.style.border = "none";
});

// Products Tabs

const additionalInfoTab = document.getElementById("additionalInfoTab");
const dataSheetTab = document.getElementById("dataSheetTab");
const downloadsTab = document.getElementById("downloadsTab");

const additionalInfoDiv = document.getElementById("additionalInfoDiv");
const dataSheetDiv = document.getElementById("dataSheetDiv");
const downloadDiv = document.getElementById("downloadDiv");

additionalInfoTab.addEventListener("click", function () {
  additionalInfoTab.classList.add("products-tabs-active");
  dataSheetTab.classList.remove("products-tabs-active");
  downloadsTab.classList.remove("products-tabs-active");

  additionalInfoDiv.style.display = "block";
  dataSheetDiv.style.display = "none";
  downloadDiv.style.display = "none";
});

dataSheetTab.addEventListener("click", function () {
  additionalInfoTab.classList.remove("products-tabs-active");
  dataSheetTab.classList.add("products-tabs-active");
  downloadsTab.classList.remove("products-tabs-active");

  additionalInfoDiv.style.display = "none";
  dataSheetDiv.style.display = "block";
  downloadDiv.style.display = "none";
});

downloadsTab.addEventListener("click", function () {
  additionalInfoTab.classList.remove("products-tabs-active");
  dataSheetTab.classList.remove("products-tabs-active");
  downloadsTab.classList.add("products-tabs-active");

  additionalInfoDiv.style.display = "none";
  dataSheetDiv.style.display = "none";
  downloadDiv.style.display = "block";
});

// Responsive

var ww = document.body.clientWidth;

const productImageArea = document.getElementById("productImageArea");
const fimage = document.getElementById("fimage");
const productDetails = document.getElementById("productDetails");
//to be there on page load(without resizing the browser, to get the responsive view)
$(function () {
  if (ww < 900) {
    //alert("size" + ww);
    console.log(ww);
    productImageArea.classList.remove("row");
    fimage.classList.remove("col-5");
    productDetails.classList.remove("col-7");
  }
});
