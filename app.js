// app.js
function sayHello(name) {
  return `Hola, ${name}!`;
}

// Mostrar el mensaje en consola
console.log(sayHello("Mundo"));

// Exportar la función para las pruebas
module.exports = sayHello;
