//desafio 1
let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do Desafio');

//desafio 2
function exibirMensagemNoConsole(){
    console.log('O botão foi clicado');
}

//desafio 3
function exibirAlerta() {
    alert('Eu amo JS')
}

//desafio 4
function exibirPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`)
}

//desafio 5
function resultadoSoma() {
    let num = parseInt(prompt('Insira um número inteiro:'));
    let num2 = parseInt(prompt('Insira um número inteiro:'));
    let soma = (num) + (num2);
    alert(`${num} + ${num2} = ${soma}`);
}