
const sayHello = require('./app');

test('debe devolver un saludo con el nombre', () => {
  expect(sayHello("Brandon")).toBe("Hola, Brandon!");
});

test('debe devolver Hola, Mundo! cuando el nombre es Mundo', () => {
  expect(sayHello("Mundo")).toBe("Hola, Mundo!");
});
