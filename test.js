// import the function sum from the app.js file
const { sum,celular } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);
    expect(total).toBe(23);
});

test('Si escribo un numero que cumpla con la expresion, me dara verdadero', () => {

    let numero = celular("0414-9024039");
    expect(numero).toBe(true);
});

test('Si escribo un numero con menos de 11 digitos dara falso', () => {

    let numero = celular("1234567890");
    expect(numero).toBe(false);
});

test('Si escribo un numero con más de 11 digitos dara falso', () => {

    let numero = celular("123456789012");
    expect(numero).toBe(false);
});

test('Si escribo un numero con un guion donde no debería, me dará falso', () => {

    let numero = celular("12345-678901");
    expect(numero).toBe(false);
});

test('Si escribo un numero con letras me dará falso', () => {
  
    let numero = celular("123A5678901");
    expect(numero).toBe(false);
});