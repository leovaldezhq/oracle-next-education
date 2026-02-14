Resolução de desafios propostos no curso de "Java: aplicando a Orientação a Objetos", da trilha de especialização em Back-End do programa ONE, a fim de aprofundar conceitos fundamentais da programação orientada a objetos como classe, métodos, atributos e instanciação.

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
    String  brand;
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
}
```
