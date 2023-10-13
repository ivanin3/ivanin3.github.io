document.addEventListener("DOMContentLoaded", function () {
  // Preguntar por el nombre al usuario
  var nombre = prompt("Hola!! ¿me dices tu nombre?");

  // Verificar si el usuario ingresó un nombre
  if (nombre !== null && nombre !== "") {
    // Asignar el nombre al campo de nombre en el formulario
    document.getElementById("name").value = nombre;

    // Mostrar mensaje de bienvenida
    alert("¡Bienvenido, " + nombre + "!");
  }
});

function agregarComentario() {
  var nombre = document.getElementById("name").value;
  var comentario = document.getElementById("new-comment").value;
  var listaComentarios = document.getElementById("comment-list");

  if (nombre !== "" && comentario !== "") {
    var nuevoComentario = document.createElement("li");
    nuevoComentario.innerHTML =
      "<strong>" + nombre + ":</strong> " + comentario;
    listaComentarios.appendChild(nuevoComentario);

    // Limpiar los campos después de agregar el comentario
    document.getElementById("name").value = "";
    document.getElementById("new-comment").value = "";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var enlaceModo = document.getElementById('cambiar-modo');

  enlaceModo.addEventListener('click', function(event) {

    document.body.classList.toggle('modo-noche');

    var modoActual = document.body.classList.contains('modo-noche') ? 'Modo Día' : 'Modo Noche';
    enlaceModo.textContent = modoActual;
  });
});