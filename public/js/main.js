var button = document.getElementById("boton");
var modal = document.getElementById("page-modal");
var close = document.getElementsByClassName("modal-close")[0];

boton.onclick = function () {
  modal.style.display = "flex";
};
close.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target.className == "modal-background") {
    modal.style.display = "none";
  }
};
