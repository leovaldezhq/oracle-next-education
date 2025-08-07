Resolução de mais desafios propostos no curso de Funções e Listas em Javascript da trilha inicial do programa ONE, criando funções com parâmetros e retorno!

1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
```JavaScript
function imcCalc(weight, heightMeters) {

    let imc = weight / (heightMeters * heightMeters);
}
```
2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
```JavaScript
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
```
3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
```JavaScript
function usdToBrl(usdAmount) {
    let conversionRate = 4.80;
    return (usdAmount * conversionRate).toFixed(2);
}

let usdAmount = 50;
let convertedAmount = usdToBrl(usdAmount);
console.log(`${usdAmount} dollars equals R$ ${convertedAmount}`)
```
4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
```JavaScript
function rectangularRoomPerimeterAndArea(length, width) {
    let area = length * width;
    let perimeter = 2 * (length + width);

    console.log(`The room area is ${area.toFixed(2)} square feet.`)
    console.log(`The room perimeter is ${perimeter.toFixed(2)} feet.`)
}
```
5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
```JavaScript
function roundRoomPerimeterAndArea(radius) {
    let area = 3.14 * radius * radius;
    let perimeter = 2 * 3.14 * radius;

    console.log(`The room area is ${area.toFixed(2)} square feet.`)
    console.log(`The room perimeter is ${perimeter.toFixed(2)} feet.`)
}

```
6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
```JavaScript
function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} * ${i} = ${result}`)
    }
}
```
