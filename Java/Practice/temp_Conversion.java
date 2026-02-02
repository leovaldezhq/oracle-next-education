public class MyClass {
public static void main(String[] args) {
      double temperatureInCelsius = 27;
      double temperatureInFahrenheit = (temperatureInCelsius * 1.8) + 32;

      String message = String.format("A %.1f Celsius temperature is equivalent to %.1f in Fahrenheit", temperatureInCelsius, temperatureInFahrenheit);
      
      System.out.println(message);
      
      int fahrenheitInteger = (int) temperatureInFahrenheit;
      System.out.println("The temperature in Fahrenheit with no decimal places is: " + fahrenheitInteger);
  }
}
