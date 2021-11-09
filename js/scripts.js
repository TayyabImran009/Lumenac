$("#inpt_search").on("focus", function () {
  $(this).parent("label").addClass("active");
});

$("#inpt_search").on("blur", function () {
  if ($(this).val().length == 0) $(this).parent("label").removeClass("active");
});

const whoWeAreArea = document.getElementById("whoWeAreArea");
const whoWeAreArea1 = document.getElementById("whoWeAreArea1");
const whoWeAreArea2 = document.getElementById("whoWeAreArea2");

var ww2 = document.body.clientWidth;

$(function () {
  if (ww2 < 873) {
    console.log(ww2);
    whoWeAreArea.classList.remove("row");
    whoWeAreArea1.classList.remove("col-6");
    whoWeAreArea2.classList.remove("col-6");
  }
});

const CategoriesRow = document.getElementById("CategoriesRow");
const homeCategoriesArea = document.getElementById("homeCategoriesArea");
const homeCategoriesbnt = document.getElementById("homeCategoriesbnt");
$(function () {
  if (ww2 < 835) {
    CategoriesRow.classList.remove("row");
    homeCategoriesArea.classList.remove("col-6");
    homeCategoriesbnt.classList.remove("col-6");
  }
});
