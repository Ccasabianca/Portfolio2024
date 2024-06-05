"use strict";

window.addEventListener("scroll", function () {
  let arrowTop = document.getElementById("flecheHaut");
  let lastPage = document.getElementById("projets");
  if (window.scrollY > lastPage.offsetTop + lastPage.offsetHeight) {
    arrowTop.style.display = "block";
  } else {
    arrowTop.style.display = "none";
  }
});