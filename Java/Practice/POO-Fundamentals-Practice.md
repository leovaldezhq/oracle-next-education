Resolução de desafios propostos no curso de "Java: aplicando a Orientação a Objetos", da trilha de especialização em Back-End do programa ONE, treinando conceitos fundamentais da programação orientada a objetos como classe, métodos, atributos, instanciação, modificadores de acesso public e private, import, this, getters e setters.

1. Crie uma classe Pessoa com um método que exibe "Olá, mundo!" no console.
```Java
// Person Class
public class Person {

    void greeting() {
        System.out.println("Hello World");
    }
}
// Main Class
public class Main {

    public static void main(String[] args) {
    
        Pessoa pessoa = new Pessoa();
        pessoa.saudacao();
    }
}
```
2. Crie uma classe Calculadora com um método que recebe um número como parâmetro e retorna o dobro desse número.
```Java
// Calculator Class
public class Calculator {

    public int doubleNumber(int number) {
        return number * 2;
    }
}
// Main Class
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();
        int result = calculator.doubleNumber(7);
        System.out.println(result);

    }
}
```
3. Crie uma classe Musica com atributos titulo, artista, anoLancamento, avaliacao e numAvaliacoes, e métodos para exibir a ficha técnica, avaliar a música e calcular a média de avaliações.
```Java
// Song Class
public class Song {
    String title;
    String artist;
    int releaseYear;
    double sumOfRatings;
    int numRatings;

    void showTechSpecs() {
        System.out.println("Song title: " + title);
        System.out.println("Artist: " + artist);
        System.out.println("Release year: " + releaseYear);
    }

    void rating(double rate) {
        sumOfRatings += rate;
        numRatings++;
    }

    double getAverage() {
        return sumOfRatings / numRatings;
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        Song song = new Song();

        song.title = "Kiss You";
        song.artist = "One Direction";
        song.releaseYear = 2012;

        song.showTechSpecs();

        song.rating(9.5);
        song.rating(10);
        song.rating(9.8);

        double ratingsAverage = song.getAverage();
        System.out.println("Average Rating: " + ratingsAverage);

    }
}
```
4. Crie uma classe Carro com atributos modelo, ano, cor e métodos para exibir a ficha técnica e calcular a idade do carro.
```Java
// Car Class
public class Car {
    String brand;
    String model;
    int year;
    String color;

    void showTechSpecs() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Color: " + color);
    }

    int getAge () {
        return 2026 - year;
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.brand = "Chevrolet";
        car.model = "Astra";
        car.year = 2014;
        car.color = "Black";

        car.showTechSpecs();

        System.out.println("This car is " + car.getAge() + " years old");
    }
}
```
5. Crie uma classe Aluno com atributos nome, idade, e um método para exibir informações. Crie uma instância da classe Aluno, atribua valores aos seus atributos e utilize o método para exibir as informações.
```Java
// Student Class
public class Student {
    String name;
    int age;

    void showInfo() {
        System.out.println("Student's name: " + name);
        System.out.println("Student's age: " + age);
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.name = "Paçoca";
        student.age = 6;

        student.showInfo();
    }
}
```
6. Crie uma classe ContaBancaria com os seguintes atributos: numeroConta (privado), saldo (privado) e titular (publico). Implemente métodos getters e setters para os atributos privados.
```Java
// BankAccount Class
public class BankAccount {
    public String accountHolder;
    private int accountNumber;
    private double balance;

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

    public void accountInfo() {
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Account Number: " + getAccountNumber());
        System.out.println("Account Balance: " + getBalance());
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();

        account.accountHolder = "Marta";
        account.setAccountNumber(12345);
        account.setBalance(7500.30);
        
        account.accountInfo();
    }
}
```
7. Crie uma classe IdadePessoa com os atributos privados nome e idade. Utilize métodos getters e setters para acessar e modificar esses atributos. Adicione um método verificarIdade que imprime se a pessoa é maior de idade ou não.
```Java
// AgeCheck Class
public class AgeCheck {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void verifyAge() {
        if (age >= 18) {
            System.out.println(name + " is over 18");
        } else {
            System.out.println(name + " is under 18");
        }
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        AgeCheck person = new AgeCheck();

        person.setName("Jhonson");
        person.setAge(20);

        System.out.println(person.getName() + " is " + person.getAge());
        person.verifyAge();
    }
}
```
8. Desenvolva uma classe Produto com os atributos privados nome e preco. Utilize métodos getters e setters para acessar e modificar esses atributos. Adicione um método aplicarDesconto que recebe um valor percentual e reduz o preço do produto.
```Java
// Product Class
public class Product {
    private String name;
    private double price;

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

    public void applyDiscount(double percentage) {
        double discount = price * (percentage / 100);
        price -= discount;
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        Product product1 = new Product();

        product1.setName("Pidgeon Plushie");
        product1.setPrice(50);

        System.out.println("Product Name: " + product1.getName());
        System.out.println("Price: R$ " + product1.getPrice());

        product1.applyDiscount(10);
        System.out.println("Price after Discount: " + product1.getPrice());
    }
}
```
9. Desenvolva uma classe Aluno com os atributos privados nome e notas. Utilize métodos getters e setters para acessar e modificar esses atributos. Adicione um método calcularMedia que retorna a média das notas do aluno. 
```Java
// Student Class
public class Student {
    private String name;
    private double grade1;
    private double grade2;
    private double grade3;

    public Student(String name,double grade1,double grade2,double grade3) {
        this.name = name;
        this.grade1 = grade1;
        this.grade2 = grade2;
        this.grade3 = grade3;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getGrade1() {
        return grade1;
    }

    public void setGrade1(double grade1) {
        this.grade1 = grade1;
    }

    public double getGrade2() {
        return grade2;
    }

    public void setGrade2(double grade2) {
        this.grade2 = grade2;
    }

    public double getGrade3() {
        return grade3;
    }

    public void setGrade3(double grade3) {
        this.grade3 = grade3;
    }

    public double calculateAverage(){
        return (grade1 + grade2 + grade3) / 3;
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        Student student1 = new Student("Sissi", 10, 9.5, 8.7);

        System.out.println("Name: " + student1.getName());
        System.out.println("Grade 1: " + student1.getGrade1());
        System.out.println("Grade 2: " + student1.getGrade2());
        System.out.println("Grade 3: " + student1.getGrade3());
        System.out.println("Average: " + student1.calculateAverage());
    }
}
```
10. Desenvolva uma classe Livro com os atributos privados titulo e autor. Utilize métodos getters e setters para acessar e modificar esses atributos. Adicione um método exibirDetalhes que imprime o título e o autor do livro.
```Java
// Book Class
public class Book {
    private String title;
    private String author;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void showDetails() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        Book book1 = new Book();
        book1.setTitle("The Secret Garden");
        book1.setAuthor("Frances Hodgson Burnett\n");

        Book book2 = new Book();
        book2.setTitle("The Da Vinci Code");
        book2.setAuthor("Dan Brown");

        book1.showDetails();
        book2.showDetails();
    }
}
```
