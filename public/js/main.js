var button = document.getElementById("boton");
var modal = document.getElementById("page-modal");
var contenido = document.getElementById("contenido");
var envoltorio = document.getElementById("envoltorio");
var close = document.getElementsByClassName("modal-close")[0];

boton.onclick = function () {
  modal.style.display = "block";
  contenido.className = "modal-content active";
  envoltorio.className = "blur";
};
close.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target.className == "modal-background") {
    modal.style.display = "none";
  }
};