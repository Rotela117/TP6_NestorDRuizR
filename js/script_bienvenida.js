// Mensaje inicial
alert("¡Bienvenido al proyecto!");

// Pedir datos
let nombreCompleto = prompt("Por favor, ingresa tu nombre y apellido:");

// Si no escribe nada, ponemos algo por defecto
if (!nombreCompleto || nombreCompleto.trim() === "") {
    nombreCompleto = "Usuario Invitado";
}

// Insertar saludo personalizado en la página
document.getElementById("saludo-usuario").textContent =
    "Bienvenido, " + nombreCompleto + ".";

// Mensaje final de bienvenida personalizada
alert("¡Qué gusto tenerte aquí, " + nombreCompleto + "!");
