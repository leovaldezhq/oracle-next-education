Resolução de desafios propostos no curso de "Java: aplicando a Orientação a Objetos", da trilha de especialização em Back-End do programa ONE, praticando a utilização de construtores e ArrayLists.

1. Crie uma classe Produto com atributos como nome, preco, e quantidade. Em seguida, crie uma lista de objetos Produto utilizando a classe ArrayList. Adicione alguns produtos, imprima o tamanho da lista e recupere um produto pelo índice.
2. Implemente o método toString() na classe Produto para retornar uma representação em texto do objeto. Em seguida, imprima a lista de produtos utilizando o método System.out.println().
3. Modifique a classe Produto para incluir um construtor que aceite parâmetros para inicializar os atributos. Em seguida, crie objetos Produto utilizando esse novo construtor.
4. Crie uma classe ProdutoPerecivel que herde de Produto. Adicione um atributo dataValidade e um construtor que utilize o construtor da classe mãe (super) para inicializar os atributos herdados. Crie um objeto ProdutoPerecivel e imprima seus valores.

// Product Class
```
public class Product {
    String name;
    double price;
    int quantity;

    public Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString()  {return "Product " + "Name: " + name + " Price: " + price + " Quantity: " + quantity; }
}
```
// PerishableProduct
```
public class PerishableProduct extends Product{
    String expirationDate;

    public PerishableProduct(String name, int price, int quantity, String expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
}
```
// Main Class
```
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Product> products = new  ArrayList<>();

        Product product1 = new Product("Sponge", 7.50, 5);
        Product product2 = new Product("Rug", 52.30, 7);
        PerishableProduct perishable1 = new PerishableProduct("Milk", 15, 10, "27/02/2026");

        products.add(product1);
        products.add(product2);
        products.add(perishable1);
        System.out.println("List size: " + products.size());
        System.out.println("Second product: " + products.get(1));

        for (Product product : products) {
            System.out.println(product);
        }
    }
}
```
