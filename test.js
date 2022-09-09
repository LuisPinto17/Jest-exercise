// import the function sum from the app.js file
const { sum,celular,} = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
  
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
}) 

test("Un dolar a yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')
  
     expect(fromDollarToYen(3)).toBe(4.2); 
}) 

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