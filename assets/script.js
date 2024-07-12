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

document.addEventListener("DOMContentLoaded", function() {

  function lazyLoadBackgroundImages() {
      const lazyBackgrounds = document.querySelectorAll('.lazy-background');

      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const bgImage = entry.target.getAttribute('data-bg');
                  entry.target.style.backgroundImage = `url(${bgImage})`;
                  observer.unobserve(entry.target);
              }
          });
      });

      lazyBackgrounds.forEach(background => {
          observer.observe(background);
      });
  }

  lazyLoadBackgroundImages();
});
