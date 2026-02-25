Resolução de desafios propostos no curso de "Java: aplicando a Orientação a Objetos", da trilha de especialização em Back-End do programa ONE, explorando os fundamentos das interfaces em Java.

1. Crie uma classe ConversorMoeda que implementa uma interface ConversaoFinanceira com o método converterDolarParaReal() para converter um valor em dólar para reais. A classe deve receber o valor em dólar como parâmetro.
```Java
// FinancialConversion Interface
public interface FinancialConversion {
    void convertYuanToReal(double yuanAmount);
}
// CurrencyConverter Class
public class CurrencyConverter implements FinancialConversion {

    @Override
    public void convertYuanToReal(double  yuanAmount) {
        double yuanExchangeRate = 0.75;
        double reaisAmount = yuanAmount * yuanExchangeRate;
        System.out.println("The total in reais is: R$ " + reaisAmount);
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        CurrencyConverter converter = new CurrencyConverter();
        converter.convertYuanToReal(5000);
    }
}
```
2. Crie uma classe CalculadoraSalaRetangular que implementa uma interface CalculoGeometrico com os métodos calcularArea() e calcularPerimetro() para calcular a área e o perímetro de uma sala retangular. A classe deve receber altura e largura como parâmetros.
```Java
// GeometricCalculation Interface
public interface GeometricCalculation {
    void calculateArea(double height, double width);
    void calculatePerimeter(double height, double width);
}
// RectangularRoomCalculator Class
public class RectangularRoomCalculator implements GeometricCalculation {

    @Override
    public void calculateArea(double height, double width) {
        double area = height * width;
        System.out.println("The rectangular room's area is: " + area);
    }

    @Override
    public void calculatePerimeter(double height, double width) {
        double perimeter = 2 * (height + width);
        System.out.println("The rectangular room's perimeter is: " + perimeter);
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        RectangularRoomCalculator calculator = new RectangularRoomCalculator();
        calculator.calculateArea(3, 7);
        calculator.calculatePerimeter(6, 10);
    }
}
```
3. Crie uma classe TabuadaMultiplicacao que implementa uma interface Tabuada com o método mostrarTabuada() para exibir a tabuada de um número. A classe deve receber o número como parâmetro.
```Java
// Table Interface
public interface Table {
    void displayTable(int n);
}
// MultiplicationTable Class
public class MultiplicationTable implements Table {

    @Override
    public void displayTable(int n) {
        System.out.println("Multiplication table of: " + n);
        for (int i = 1; i <= 10; i++) {
            int result = n * i;
            System.out.println(n + " * " + i + " = " + result);
        }
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        MultiplicationTable table = new MultiplicationTable();
        table.displayTable(7);
    }
}
```
4. Crie uma interface ConversorTemperatura com os métodos celsiusParaFahrenheit() e fahrenheitParaCelsius(). Implemente uma classe ConversorTemperaturaPadrao que implementa essa interface com as fórmulas de conversão e exibe os resultados.
```Java
// TemperatureConverter Interface
public interface TemperatureConverter {
    double celsiusToFahrenheit(double celsius);
    double fahrenheitToCelsius(double fahrenheit);
}
// StandardTempoConverter Class
public class StandardTempConverter implements TemperatureConverter {
    @Override
    public double celsiusToFahrenheit(double celsius) {
        return (celsius * 9 / 5) + 32;
    }

    @Override
    public double fahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        TemperatureConverter converter = new StandardTempConverter();

        double celsius = 38;
        double fahrenheit = converter.celsiusToFahrenheit(celsius);
        System.out.println(celsius + "° Celsius in Fahrenheit is equivalent to " + fahrenheit + "°.");

        fahrenheit = 77;
        celsius = converter.fahrenheitToCelsius(fahrenheit);
        System.out.println(fahrenheit + "° Fahrenheit in Celsius is equivalent to " + celsius + "°.");
    }
}
```
5. Crie uma interface Calculavel com um método double calcularPrecoFinal(). Implemente essa interface nas classes Livro e ProdutoFisico, cada uma retornando o preço final considerando descontos ou taxas adicionais.
```Java
// Calculable  Interface
public interface Calculable {
    double calculateFinalPrice();
}
// Book Class
public class Book extends Product implements Calculable {
    private String author;

    public double calculateFinalPrice() {
        return price * 0.9; 
    }
}
// PhysicalProduct Class
public class PhysicalProduct extends Product implements Calculable {
    public double calculateFinalPrice() {
        return preco * 1.05; // Taxa adicional para produtos físicos
    }
}
```
6. Crie uma interface Vendavel com métodos para calcular o preço total de um produto com base na quantidade comprada e aplicar descontos. Implemente essa interface nas classes Produto e Servico, cada uma fornecendo a sua própria lógica de cálculo de preço.
```Java
// Marketable Interface
public interface Marketable {
    double calculateTotalPrice(int quantity);
    void applyDiscount (double discountPercentage);
}
// Product Class
public class Produto implements Marketable {
    private String name;
    private double unitPrice;

    @Override
    public double calculateTotalPrice(int quantity) {
        return unitPrice * quantity;
    }

    @Override
    public void applyDiscount(double discountPercentage) {
        unitPrice -= unitPrice * (discountPercentage / 100.0);
    }
}
// Service Class
public class Service implements Marketable {
    private String description;
    private double hourlyRate;

    @Override
    public double calculateTotalPrice(int quantity) {
       return hourlyRate * quantity;
    }

    @Override
    public void applyDiscount(double discountPercentage) {
       hourlyRate -= hourlyRate * (discountPercentage / 100.0);
    }
}
```
