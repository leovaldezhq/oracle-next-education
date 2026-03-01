Resolução de desafios propostos no curso de "Java: consumindo API, gravando arquivos e lidando com erros", da trilha de especialização em Back-End do programa ONE, praticando conceitos-chave como implementação e utilização de bibliotecas Java, uso da biblioteca Gson para converter JSON em objetos Java e uso de Records para representação concisa de dados imutáveis.

1. Crie uma classe Pessoa usando o conceito de Record em Java, com atributos como nome, idade e cidade. Em seguida, implemente um programa que utiliza a biblioteca Gson para converter um JSON representando uma pessoa em um objeto do tipo Pessoa.
```Java
// MainPerson Class
import com.google.gson.Gson;

record Person (String name, String age, String city) {}

public class MainPerson {
    public static void main(String[] args) {
        String json = "{\"name\":\"Gabi Zanotti\",\"age\":41,\"city\":\"São Paulo\"}";

        Gson gson = new Gson();
        Person person = gson.fromJson(json, Person.class);

        System.out.println("Person: " + person);
    }
}
```
2. Modifique o programa do Exercício anterior para permitir a conversão de um JSON mesmo se alguns campos estiverem ausentes ou se houver campos adicionais não representados no objeto Pessoa. Consulte a documentação da biblioteca Gson para flexibilizar a conversão.
```Java
// MainPerson Class
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.Strictness;

record Person (String name, String age, String city) {}

public class MainPerson {
    public static void main(String[] args) {
        String json = "{\"name\":\"Gabi Zanotti\",\"age\":41,\"city\":\"São Paulo\"}";

        Gson gson = new GsonBuilder().setStrictness(Strictness.LENIENT).create();
        Person person = gson.fromJson(json, Person.class);

        System.out.println("Person: " + person);
    }
}

```
3. Crie uma classe Livro que contenha atributos como título, autor e um objeto representando a editora. Em seguida, implemente um programa que utiliza a biblioteca Gson para converter um JSON aninhado representando um livro em um objeto do tipo Livro.
```Java
// MainBook Class
import com.google.gson.Gson;

record Publisher(String name, String city) {}
record Book(String title, String author, Publisher publisher) {}

public class MainBook {

    public static void main(String[] args) {
        String jsonBook = "{\"title\":\"Linux Bible\",\"author\":\"Christopher Negus\",\"publisher\":{\"name\":\"Wiley\",\"city\":\"New Jersey\"}}";

        Gson gson = new Gson();
        Book book = gson.fromJson(jsonBook, Book.class);

        System.out.println("Book: " + book);
    }
}

```
