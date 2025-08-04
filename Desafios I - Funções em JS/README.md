Resolução dos primeiros desafios propostos no curso de Funções e Listas em Javascript da trilha inicial do programa ONE, criando funções e interagindo com HTML

1. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
```JavaScript
let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do Desafio');
```
2. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
No HTML:
```HTML
<button onclick="exibirMensagemNoConsole()" class="button">Console</button>
```
No JavaScript:
```JavaScript
function exibirMensagemNoConsole(){
    console.log('O botão foi clicado');
}
```
3. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
No HTML:
```HTML
<button onclick="exibirAlerta()" class="button">Alerta</button>
```
No JavaScript:
```JavaScript
function exibirAlerta() {
    alert('Eu amo JS')
}
```
4. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
No HTML:
```HTML
<button onclick="exibirPrompt()" class="button">Prompt</button>
```
No JavaScript:
```JavaScript
function exibirPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`)
}
```
5. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
No HTML:
```HTML
<button onclick="resultadoSoma()" class="button">Soma</button>
```
No JavaScript:
```JavaScript
function resultadoSoma() {
    let num = parseInt(prompt('Insira um número inteiro:'));
    let num2 = parseInt(prompt('Insira um número inteiro:'));
    let soma = (num) + (num2);
    alert(`${num} + ${num2} = ${soma}`);
}
```
