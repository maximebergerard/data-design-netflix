const scrollY = document.querySelector(".sections");

scrollY.addEventListener("scroll", findScroll);

function findScroll() {
  const indicator = document.querySelector(".scroll-indicator");
  if (scrollY.scrollTop < 100) {
    indicator.style.display = "flex";
  } else {
    indicator.style.display = "none";
  }
}
