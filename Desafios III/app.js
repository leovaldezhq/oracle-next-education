//desafio 1
function imcCalc(weight, heightMeters) {

    let imc = weight / (heightMeters * heightMeters);
}

//desafio 2
function factorialCalc() {
    if (number === 0 || number === 1) {
        return 1;
    }

    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

//desafio 3
function usdToBrl(usdAmount) {
    let conversionRate = 4.80;
    return (usdAmount * conversionRate).toFixed(2);
}

let usdAmount = 50;
let convertedAmount = usdToBrl(usdAmount);
console.log(`${usdAmount} dollars equals R$ ${convertedAmount}`)

//desafio 4
function rectangularRoomPerimeterAndArea(length, width) {
    let area = length * width;
    let perimeter = 2 * (length + width);

    console.log(`The room area is ${area.toFixed(2)} square feet.`)
    console.log(`The room perimeter is ${perimeter.toFixed(2)} feet.`)
}

//desafio 5
function roundRoomPerimeterAndArea(radius) {
    let area = 3.14 * radius * radius;
    let perimeter = 2 * 3.14 * radius;

    console.log(`The room area is ${area.toFixed(2)} square feet.`)
    console.log(`The room perimeter is ${perimeter.toFixed(2)} feet.`)
}

//desafio 6
function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} * ${i} = ${result}`)
    }
}