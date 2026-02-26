Resolução de desafios propostos no curso de "Java: aplicando a Orientação a Objetos", da trilha de especialização em Back-End do programa ONE, praticando conceitos como ArrayList e os métodos add, size e get, além do método toString() para visualização de objetos em texto.

1. Crie uma classe Pessoa com atributos como nome, idade, e um método toString que represente esses atributos.
2. No método main da classe Principal, crie um ArrayList de Pessoa chamado listaDePessoas.
3. Adicione pelo menos três pessoas à lista utilizando o método add.
4. Imprima o tamanho da lista utilizando o método size.
5. Imprima a primeira pessoa da lista utilizando o método get.
6. Imprima a lista completa

// Person Class
```
public class Person {
    String name;
    int age;

    public Person(String name,  int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Name: " + name + " (Age: " + age + ")";
    }
}
```
// Main Class
```
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Person> people = new ArrayList<>();

        Person person1  = new Person("Gabi Portilho", 30);
        Person person2  = new Person("Tarciane", 22);
        Person person3  = new Person("Yasmim", 29);

        people.add(person1);
        people.add(person2);
        people.add(person3);

        System.out.println("List size: " + people.size());
        System.out.println("First person: " + people.getFirst());
        System.out.println("Full list: ");
        for (Person person : people) { // printing each person individually on the people list for better readability
            System.out.println(person);
        }
    }
}
```
