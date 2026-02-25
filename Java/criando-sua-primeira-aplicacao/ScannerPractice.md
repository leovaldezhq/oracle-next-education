Resolução de desafios propostos no curso de Java: criando a sua primeira aplicação da trilha de especialização em Back-End do programa ONE, utilizando condicionais, loops e leitura do teclado com a classe Scanner.

1. Crie um programa que solicite ao usuário digitar um número. Se o número for positivo, exiba "Número positivo", caso contrário, exiba "Número negativo".
```Java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner =  new Scanner(System.in);

        System.out.println("Digite um número: ");
        int number = scanner.nextInt();

        if (number > 0) {
            System.out.println("Número positivo");
        } else {
            System.out.println("Número negativo");
        }
    }
}
```
2. Peça ao usuário para inserir dois números inteiros. Compare os números e imprima uma mensagem indicando se são iguais, diferentes, o primeiro é maior ou o segundo é maior.
```Java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner =  new Scanner(System.in);

        System.out.println("Digite um número inteiro: ");
        int firstNumber = scanner.nextInt();

        System.out.println("Digite outro número inteiro: ");
        int secondNumber = scanner.nextInt();

        if (firstNumber == secondNumber) {
            System.out.println("Os números são iguais");
        } else if ( firstNumber > secondNumber) {
            System.out.println("O primeiro número é maior que o segundo");
        } else {
            System.out.println("O segundo número é maior que o primeiro");
        }
    }
}
```
3. Crie um menu que oferece duas opções ao usuário: "1. Calcular área do quadrado" e "2. Calcular área do círculo". Solicite a escolha do usuário e realize o cálculo da área com base na opção selecionada.
```Java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner =  new Scanner(System.in);

        int selection = 0;

        while (selection != 3){
            System.out.println("-----Menu-----");
            System.out.println("1. Calcular área do quadrado");
            System.out.println("2. Calcular área do círculo");
            System.out.println("3. Sair");
            System.out.print("Escolha uma opção: ");
            selection = scanner.nextInt();

            if  (selection == 1){
                System.out.println("Digite o lado do quadrado: ");
                double side =  scanner.nextDouble();
                double squareArea = side * side;
                System.out.println("Área do quadrado: " + squareArea);
            } else if (selection == 2) {
                System.out.println("Digite o raio do círculo: ");
                double radius =  scanner.nextDouble();
                double circleArea =  3.14 * radius * radius;
                System.out.println("Área do círculo: " + circleArea);
            } else if (selection == 3) {
                System.out.println("Programa finalizado");
            } else {
                System.out.println("Opção inválida. Tente novamente");
            }
        }
    }
}
```
4. Crie um programa que solicite ao usuário um número e exiba a tabuada desse número de 1 a 10.
```Java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner =  new Scanner(System.in);

        System.out.println("Digite um número: ");
        int number  = scanner.nextInt();

        System.out.println("Tabuada do " + number + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + "*" + i + " = " + number*i);
        }
    }
}
```
5. Crie um programa que solicite ao usuário a entrada de um número inteiro. Verifique se o número é par ou ímpar e exiba uma mensagem correspondente.
```Java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner =  new Scanner(System.in);

        System.out.println("Digite um número: ");
        int number  = scanner.nextInt();

        if (number % 2 == 0){
            System.out.println("O número é par");
        } else {
            System.out.println("O número é ímpar");
        }
    }
}
```
6. Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.
```Java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner =  new Scanner(System.in);

        System.out.println("Digite um número: ");
        int number  = scanner.nextInt();

        int factorial = 1;
        for (int i = 1; i <= number; i++) {
            factorial *= i;
        }

        System.out.println("Fatorial: " + factorial);
    }
}
```
