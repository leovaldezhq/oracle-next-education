Resolução de desafios propostos no curso de Java: criando a sua primeira aplicação da trilha de especialização em Back-End do programa ONE, manipulando variáveis e realizando conversões de tipos primitivos.

1. Crie um programa que realize a média de duas notas decimais e exiba o resultado.
```Java
public class Average {
    public static void main(String[] args) {
        double gradeA = 9.5;
        double gradeB = 8.6;
        double gradeAverage = (gradeA + gradeB) / 2;
        
        System.out.println("Average: " + gradeAverage);   
  }
}
```
2. Declare uma variável do tipo double e uma variável do tipo int. Faça o casting da variável double para int e imprima o resultado.
```Java
public class Casting {
    public static void main(String[] args) {
        double x = 7.5;
        int y = (int) x;
        System.out.println(y);
  }
}
```
3. Declare uma variável do tipo char (letra) e uma variável do tipo String (palavra). Atribua valores a essas variáveis e concatene-as em uma mensagem.
```Java
public class Mensagem {
    public static void main(String[] args) {
        char letter = 'O';
        String word = "campeão dos campeões";
        
        String message = "The letter is: " + letter + " and the word is: " + word;
        
        System.out.println(message);
  }
}
```
4. Declare uma variável do tipo double precoProduto e uma variável do tipo int (quantidade). Calcule o valor total multiplicando o preço do produto pela quantidade e apresente o resultado em uma mensagem.
```Java
public class Produto {
    public static void main(String[] args) {
        double productPrice = 48.80;
        int productQuantity = 7;
        
        double totalCost = productPrice * productQuantity;
        
        String message = String.format("The total cost of all products is:  R$ %.2f", totalCost);
        
        System.out.println(message);
  }
}
```
5. Declare uma variável do tipo double valorEmDolares. Atribua um valor em dólares a essa variável. Considere que o valor de 1 dólar é equivalente a 4.94 reais. Realize a conversão do valor em dólares para reais e imprima o resultado formatado.
```Java
public class ConversaoDolarReal {
    public static void main(String[] args) {
        double dollarAmount = 250;
        double conversionRate = 4.94;
        
        double convertedAmount = dollarAmount * conversionRate;
        
        String message = String.format("The amount in reais is:  R$ %.2f", convertedAmount);
        
        System.out.println(message);
  }
}
```
6. Declare uma variável do tipo double precoOriginal. Atribua um valor em reais a essa variável, representando o preço original de um produto. Em seguida, declare uma variável do tipo double percentualDesconto e atribua um valor percentual de desconto ao produto (por exemplo, 10 para 10%). Calcule o valor do desconto em reais, aplique-o ao preço original e imprima o novo preço com desconto.
```Java
public class Discount {
    public static void main(String[] args) {
        double originalPrice = 45.50;
        
        double discountPercentage = 15.0;
        double discountValue = (discountPercentage / 100.0) * originalPrice;
        double newPrice = originalPrice - discountValue;
        
        System.out.println("Original price: R$ %.2f".formatted(originalPrice));
        System.out.println("Discount: R$ %.2f".formatted(discountValue));
        System.out.println("Discounted price: R$ %.2f".formatted(newPrice));

  }
}
```
