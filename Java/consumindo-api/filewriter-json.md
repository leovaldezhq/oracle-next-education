Resolução de desafios propostos no curso de "Java: consumindo API, gravando arquivos e lidando com erros", da trilha de especialização em Back-End do programa ONE, praticando manipular e armazenar dados de maneira estruturada.

1. Crie um programa em Java que escreva a seguinte mensagem em um arquivo chamado "arquivo.txt": "Conteúdo a ser gravado no arquivo." Utilize as classes do pacote java.io.
```Java
import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String data = "File content";

        try (FileWriter writer = new FileWriter("file.txt")) {
            writer.write(data);
            System.out.println("Data successfully written");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```
2. Defina uma classe chamada Titulo com os atributos necessários. Em seguida, crie um programa que instancia um objeto Titulo, serializa esse objeto para JSON usando a biblioteca Gson e imprime o resultado.
```Java
import com.google.gson.Gson;

class Title {
    String name = "Rocky";

    public static void main(String[] args) {
        Title title = new Title();

        Gson gson = new Gson();
        String json = gson.toJson(title);
        System.out.println(json);
    }
}
```
3. Modifique o programa anterior para que o JSON gerado seja formatado de maneira mais elegante. Utilize o método setPrettyPrinting para alcançar esse resultado.
```Java
import com.google.gson.Gson;

class Title {
    String name = "Rocky";

    public static void main(String[] args) {
        Title title = new Title();

        Gson gson = new Gson();
        String json = gson.toJson(title);
        System.out.println(json);
    }
}
```
4. Defina uma classe chamada Veiculo com os atributos necessários. Em seguida, crie um programa que instancia um objeto Veiculo, serializa esse objeto para JSON usando a biblioteca Gson e imprime o resultado.
```
import com.google.gson.Gson;

class Vehicle {
    private String brand;
    private String model;
    private int year;
    private double price;

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public static void main(String[] args) {
        Vehicle car = new Vehicle();
        car.setBrand("Toyota");
        car.setModel("Volkswagen");
        car.setYear(2018);
        car.setPrice(12500.00);

        Gson gson = new Gson();
        String json = gson.toJson(car);

        System.out.println(json);
    }
}
```
