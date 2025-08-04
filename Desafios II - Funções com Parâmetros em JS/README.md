Resolução de mais desafios propostos no curso de Funções e Listas em Javascript da trilha inicial do programa ONE, criando funções com parâmetros e retorno!

1. Criar uma função que exibe "Olá, mundo!" no console.
```JavaScript
function displayGreeting() {
    console.log('Hello, world!');
}

displayGreeting();
```
2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
```JavaScript
function displayName(name) {
    console.log(`Hello, ${name}`);
}

displayName('Marta');
```
3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
```JavaScript
function doubleNumber(number) {
    return number * 2;
}

let doubleResult = doubleNumber(7);
console.log(doubleResult);
```
4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
```JavaScript
function numberAvg(a, b, c) {
    return (a + b + c) / 3;
}

let resultAvg = numberAvg(9, 10, 8);
console.log(resultAvg);
```
5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
```JavaScript
function findLargest(a, b) {
    return a > b ? a : b;
}

let largestNumber = findLargest(24, 19)
console.log(largestNumber);
```
6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
```JavaScript
function squaredNumber(number) {
    return number * number;
}

let squaredRes = squaredNumber(7);
console.log(squaredRes);
```
