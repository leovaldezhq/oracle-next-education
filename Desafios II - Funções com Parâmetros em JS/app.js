//desafio 1
function displayGreeting() {
    console.log('Hello, world!');
}

displayGreeting();

//desafio 2
function displayName(name) {
    console.log(`Hello, ${name}`);
}

displayName('Marta');

//desafio 3
function doubleNumber(number) {
    return number * 2;
}

let doubleResult = doubleNumber(7);
console.log(doubleResult);

//desafio 4
function numberAvg(a, b, c) {
    return (a + b + c) / 3;
}

let resultAvg = numberAvg(9, 10, 8);
console.log(resultAvg);

//desafio 5
function findLargest(a, b) {
    return a > b ? a : b;
}

let largestNumber = findLargest(24, 19)
console.log(largestNumber);

//desafio 6
function squaredNumber(number) {
    return number * number;
}

let squaredRes = squaredNumber(7);
console.log(squaredRes);