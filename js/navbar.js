const checkbtn = document.getElementById("checkbtn");
const topBar = document.getElementById("topBar");
const navNav = document.getElementById("navNav");

checkbtn.addEventListener("click", function () {
  if (checkbtn.classList.contains("bars")) {
    checkbtn.innerHTML = "<i class='fas fa-times'></i>";
    checkbtn.classList.remove("bars");
    topBar.classList.remove("top-bar");

    topBar.classList.add("top-bar-fix");

    navNav.style.position = "fixed";
    navNav.style.marginTop = "33px";
  } else {
    checkbtn.innerHTML = "<i class='fas fa-bars'></i>";
    checkbtn.classList.add("bars");

    topBar.classList.remove("top-bar-fix");
    topBar.classList.add("top-bar");

    navNav.style.position = "relative";
    navNav.style.marginTop = "0px";
  }
});

const catalougeDropdownBtn = document.getElementById("catalougeDropdownBtn");
const companyDropdownBtn = document.getElementById("companyDropdownBtn");

const catalougeDropdown = document.getElementById("catalougeDropdown");
const companyDropdown = document.getElementById("companyDropdown");

const catalougeDropdownH = document.getElementById("catalougeDropdownH");
const companyDropdownH = document.getElementById("companyDropdownH");

catalougeDropdownBtn.addEventListener("click", function () {
  if (catalougeDropdown.classList.contains("hideDropDownDiv")) {
    catalougeDropdown.classList.add("showDropDownDiv");
    catalougeDropdown.classList.remove("hideDropDownDiv");

    companyDropdown.classList.remove("showDropDownDiv");
    companyDropdown.classList.add("hideDropDownDiv");

    catalougeDropdownH.classList.add("dropDownHCliked");
    catalougeDropdownH.classList.remove("dropDownH");

    companyDropdownH.classList.remove("dropDownHCliked");
  } else {
    catalougeDropdown.classList.add("hideDropDownDiv");
    catalougeDropdown.classList.remove("showDropDownDiv");

    catalougeDropdownH.classList.remove("dropDownHCliked");
    catalougeDropdownH.classList.add("dropDownH");
  }
});

companyDropdownBtn.addEventListener("click", function () {
  if (companyDropdown.classList.contains("hideDropDownDiv")) {
    companyDropdown.classList.add("showDropDownDiv");
    companyDropdown.classList.remove("hideDropDownDiv");

    catalougeDropdown.classList.remove("showDropDownDiv");
    catalougeDropdown.classList.add("hideDropDownDiv");

    companyDropdownH.classList.add("dropDownHCliked");
    companyDropdownH.classList.remove("dropDownH");

    catalougeDropdownH.classList.remove("dropDownHCliked");
  } else {
    companyDropdown.classList.add("hideDropDownDiv");
    companyDropdown.classList.remove("showDropDownDiv");

    companyDropdownH.classList.remove("dropDownHCliked");
    companyDropdownH.classList.add("dropDownH");
  }
});
