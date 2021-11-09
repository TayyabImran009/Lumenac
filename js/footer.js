var footerPage = document.body.clientWidth;

const rowFooter = document.getElementById("rowFooter");
const md6FooterDetails = document.getElementById("md6FooterDetails");
const md2FooterNavigate = document.getElementById("md2FooterNavigate");
const md2FooterCatalouge1 = document.getElementById("md2FooterCatalouge1");
const md2FooterCatalouge2 = document.getElementById("md2FooterCatalouge2");

$(function () {
  if (footerPage < 1102) {
    rowFooter.classList.remove("row");
    md6FooterDetails.classList.remove("col-md-6");
    md2FooterNavigate.classList.remove("col-md-2");
    md2FooterCatalouge1.classList.remove("col-md-2");
    md2FooterCatalouge2.classList.remove("col-md-2");
  }
});
