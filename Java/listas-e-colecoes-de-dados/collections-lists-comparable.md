Resolução de desafios propostos no curso de "Java: aplicando a Orientação a Objetos", da trilha de especialização em Back-End do programa ONE, praticando conceitos como Collections.sort,LinkedList, Comparable, compareTo, sort e ArrayLists, para a ordenação eficiente de dados e controle sobre a ordem desejada.

1. Crie uma lista de números inteiros e utilize o método Collections.sort para ordená-la em ordem crescente. Em seguida, imprima a lista ordenada.
```Java
// Main Class
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public  static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(7);
        numbers.add(12);
        numbers.add(19);
        numbers.add(24);

        Collections.sort(numbers);
        System.out.println("Ordered numbers: " + numbers);
    }
}
```
2. Crie uma classe Titulo com um atributo nome do tipo String. Implemente a interface Comparable na classe para que seja possível ordenar uma lista de objetos Titulo.
```Java
// Title Class
public class Title implements Comparable<Title> {
    String name;

    @Override
    public int compareTo(Title otherTitle) {
        return this.name.compareTo(otherTitle.name);
    }
}
```
3. No Exercício 2, crie alguns objetos da classe Titulo e adicione-os a uma lista. Utilize o método Collections.sort para ordenar a lista e, em seguida, imprima os títulos ordenados.
```Java
// Main Class
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public  static void main(String[] args) {
        ArrayList<Title> list = new ArrayList<>();
        list.add(new Title("A"));
        list.add(new Title("B"));
        list.add(new Title("C"));

        Collections.sort(list);

        for (Title name : list) {
            System.out.println(name);
        }
    }
}
```
4. Crie uma lista utilizando a interface List e instancie-a tanto como ArrayList quanto como LinkedList. Adicione elementos e imprima a lista, mostrando que é possível trocar facilmente a implementação.
```Java
// Main
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Main {
    public  static void main(String[] args) {
        List<String> arrayList = new ArrayList<>();
        arrayList.add("A");
        arrayList.add("B");
        arrayList.add("C");

        List<String> linkedList = new LinkedList<>();
        linkedList.add("D");
        linkedList.add("E");
        linkedList.add("F");

        System.out.println("Array List: " +  arrayList);
        System.out.println("LinkedList List: " +  linkedList);
    }
}
```
5. Modifique o Exercício 4 para declarar a variável de lista como a interface List, demonstrando o uso de polimorfismo.
```Java
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Main {
    public  static void main(String[] args) {
        List<String> newList;
        
        newList = new ArrayList<>();
        newList.add("A");
        newList.add("B");
        newList.add("C");
        System.out.println("Array List: " +  newList);

        newList = new LinkedList<>();
        newList.add("D");
        newList.add("E");
        newList.add("F");
        System.out.println("LinkedList List: " +  newList);
    }
}
```
