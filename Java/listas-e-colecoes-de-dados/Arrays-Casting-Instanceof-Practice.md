Resolução de desafios propostos no curso de "Java: trabalhando com listas e coleção de dados", da trilha de especialização em Back-End do programa ONE, praticando conceitos como ArrayLists, casting de objeto e instanceof.

1. Crie um ArrayList de strings e utilize um loop foreach para percorrer e imprimir cada elemento da lista.
```Java
// Main Class
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList();
        list.add("Corinthians");
        list.add("Barcelona");
        list.add("St. Pauli");

        for (String item : list) {
            System.out.println(item);
        }
    }
}
```
2. Crie uma classe Animal e uma classe Cachorro que herda de Animal. Em seguida, crie um objeto da classe Cachorro e faça o casting para a classe Animal.
```Java
// Animal Class
public class Animal {
    void makeSound() {
        System.out.println("Animal makes sound");
    }
}
// Dog Class
public class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Dog barks");
    }
}
// Main Class
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        Animal animal = (Animal) dog;

        animal.makeSound();
    }
}
```
3. Modifique o Exercício 2 para incluir uma verificação usando instanceof para garantir que o objeto seja do tipo correto antes de fazer o casting.
```Java
// Animal Class
public class Animal {
    void makeSound() {
        System.out.println("Animal makes sound");
    }
}
// Dog Class
public class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Dog barks");
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        Animal animal  = new Dog();

        if (animal instanceof Dog dog) {
            animal.makeSound();
        } else {
            System.out.println("Not a dog");
        }
    }
}
```
4. Crie uma classe Produto com propriedades como nome e preço. Em seguida, crie uma lista de produtos e utilize um loop para calcular e imprimir o preço médio dos produtos.
```Java
// Product Class
public class Product {
    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
// Main Class
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Product product1 = new  Product("Mouse", 55.60);
        Product product2 = new  Product("Keyboard", 120);
        Product product3 = new  Product("Headphone", 80);
        Product product4 = new  Product("Monitor", 300);

        ArrayList<Product> list = new ArrayList<>();
        list.add(product1);
        list.add(product2);
        list.add(product3);
        list.add(product4);

        double pricesSum = 0;
        for (Product p : list) {
            pricesSum += p.getPrice();
        }

        double averagePrice = pricesSum / list.size();
        System.out.println("Average price of the products: $ " + averagePrice);

    }
}
```
5. Crie uma interface Forma com um método calcularArea(). Implemente a interface em duas classes, por exemplo, Circulo e Quadrado. Em seguida, crie uma lista de formas (objetos da interface Forma) e utilize um loop para calcular e imprimir a área de cada forma.
```Java
// Shape Interface
public interface Shape {
    double  calculateArea();
}
// Circle Class
public class Circle implements Shape {
    double radius;

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}
// Square Class
public class Square implements Shape {
    double side;

    @Override
    public double calculateArea() {
        return side * side;
    }
}
// Main Class
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle();
        circle.radius = 5;

        Square square = new Square();
        square.side = 10;

        ArrayList<Shape> list = new ArrayList<>();
        list.add(circle);
        list.add(square);

        for (Shape shapes : list) {
            System.out.println("Area: " + shapes.calculateArea());
        }
    }
}
```
6. Crie uma classe ContaBancaria com propriedades como número da conta e saldo. Em seguida, crie uma lista de contas bancárias com diferentes saldos. Utilize um loop para encontrar e imprimir a conta com o maior saldo.
```Java
// BankAccount Class
public class BankAccount {
    int accountNumber;
    double  balance;

    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public  BankAccount(int accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
}
// Main Class
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        BankAccount account1 = new BankAccount(520, 7500.50);
        BankAccount account2 = new BankAccount(710, 13400.25);

        ArrayList<BankAccount> accounts = new ArrayList<>();
        accounts.add(account1);
        accounts.add(account2);

        BankAccount higherBalanceAccount = accounts.get(0);
        for (BankAccount account : accounts) {
            if (account.getBalance() > higherBalanceAccount.getBalance()) {
                higherBalanceAccount = account;
            }
        }
        System.out.println("Higher balance account's number: " + higherBalanceAccount.getAccountNumber() +
                " | Balance: " + higherBalanceAccount.getBalance());
    }
}
```
