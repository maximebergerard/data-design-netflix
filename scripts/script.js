const button = document.querySelector(".infos");
const documentation = document.querySelector(".displayInfos");
const open = document.querySelector(".open");
const cross = document.querySelector(".cross");
let isOpen = false;

button.addEventListener("click", toggleDocumentation);

function toggleDocumentation() {
  isOpen = !isOpen;
  if (isOpen) {
    documentation.style.display = "flex";
    cross.style.display = "block";
    open.style.display = "none";
  } else {
    documentation.style.display = "none";
    cross.style.display = "none";
    open.style.display = "block";
  }
}
