// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

function celular(numero){   
    let re = /^\(?(\d{4})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    
    return re.test(numero)
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(numero){
    return ((numero / oneEuroIs.USD) * oneEuroIs.JPY)
}

function fromEuroToDollar(numero){
    return (numero * oneEuroIs.USD)
}

function fromYenToPound(numero){
    return ((numero / oneEuroIs.JPY) * oneEuroIs.GBP)
}

// just a console log for ourselves.
console.log(sum(7,3))
console.log(fromYenToPound(200))
console.log(fromEuroToDollar(3))
console.log(fromDollarToYen(3))
console.log(celular("04149024039"))
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum,celular,fromYenToPound,fromEuroToDollar,fromDollarToYen };

