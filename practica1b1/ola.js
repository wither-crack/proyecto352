function limpiar() {
document.getElementById("result").value = "";
}
var botonLimpiar = document.querySelector(".ac");
botonLimpiar.addEventListener("click", limpiar);