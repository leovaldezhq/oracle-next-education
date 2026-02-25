Resolução de desafios propostos no curso de "Java: aplicando a Orientação a Objetos", da trilha de especialização em Back-End do programa ONE, treinando conceitos da programação orientada a objetos como herança (com a palavra-chave extends), sobrescrição de métodos (com a anotação @Override) e polimorfismo, para evitar duplicação de métodos.

1. Crie uma classe Carro com métodos para representar um modelo específico ao longo de três anos. Implemente métodos para definir o nome do modelo, os preços médios para cada ano, e calcular e exibir o menor e o maior preço. Adicione uma subclasse ModeloCarro para criar instâncias específicas, utilizando-a na classe principal para definir preços e mostrar informações.
```Java
// Car Class
public class Car {
    private String brand;
    private String model;
    private double price2001;
    private double price2002;
    private double price2003;

    public void defineBrand(String brand) {
        this.brand = brand;
    }

    public void defineModel(String model) {
        this.model = model;
    }

    public void definePrices(double price2001, double price2002, double price2003) {
        this.price2001 = price2001;
        this.price2002 = price2002;
        this.price2003 = price2003;
    }

    private double calcLowestPrice() {
        double lowestPrice = price2001;

        if (price2002 < lowestPrice) {
            lowestPrice = price2002;
        }

        if (price2003 < lowestPrice) {
            lowestPrice = price2003;
        }

        return lowestPrice;
    }

    private double calcHighestPrice() {
        double highestPrice = price2003;

        if (price2002 > highestPrice) {
            highestPrice = price2002;
        }

        if (price2003 > highestPrice) {
            highestPrice = price2003;
        }

        return highestPrice;
    }

    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("2001 Price: R$ " + price2001);
        System.out.println("2002 Price: R$ " + price2002);
        System.out.println("2003 Price: R$ " + price2003);
        System.out.println("Lowest price: " + calcLowestPrice());
        System.out.println("Highest price: " + calcHighestPrice());
    }
}
// CarModel Class
public class CarModel extends Car {
    private String details;

    public void defineDetails(String details) {
        this.details = details;
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Details: " + details);
    }
}
// Main CLass
public class Main {
    public static void main(String[] args) {
        CarModel car = new CarModel();
        car.defineBrand("Honda");
        car.defineModel("Civic");
        car.definePrices(18500, 20200, 22800);
        car.defineDetails("2003 model introduced the LXL trim, featuring the 130hp VTEC engine previously exclusive to the EX.");
        car.displayInfo();
    }
}
```
2. Crie uma classe Animal com um método emitirSom(). Em seguida, crie duas subclasses: Cachorro e Gato, que herdam da classe Animal. Adicione o método emitirSom() nas subclasses, utilizando a anotação @Override para indicar que estão sobrescrevendo o método. Além disso, adicione métodos específicos para cada subclasse, como abanarRabo() para o Cachorro e arranharMoveis() para o Gato.
```Java
// Animal Class
public class Animal {

    public void makeSound() {
        System.out.println("Animal's sound");
    }
}
// Dog Class
public class Dog extends Animal {

    @Override
    public void makeSound() {
        System.out.println("Wuff");
    }

    public void tailWag() {
        System.out.println("Dog wagging tail");
    }
}
// Cat Class
public class Cat extends Animal {

    @Override
    public void makeSound() {
        System.out.println("Meow");
    }

    public void scratchFurniture() {
        System.out.println("Cat scratching furniture");
    }
}
// Main CLass
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.makeSound();
        dog.tailWag();

        Cat cat = new Cat();
        cat.makeSound();
        cat.scratchFurniture();
    }
}
```
3. Crie uma classe ContaBancaria com métodos para realizar operações bancárias como depositar(), sacar() e consultarSaldo(). Em seguida, crie uma subclasse ContaCorrente que herda da classe ContaBancaria. Adicione um método específico para a subclasse, como cobrarTarifaMensal(), que desconta uma tarifa mensal da conta corrente.
```Java
// BankAccount Class
public class BankAccount {
    protected double balance = 0;

    public void deposit(int amount) {
        balance += amount;
        System.out.println("Deposited $ " + amount + ". Current balance is: $ " + balance);
    }

    public void withdraw(int amount) {
        if (amount <=  balance) {
            balance -= amount;
            System.out.println("Withdrawn $ " + amount + ". Current balance is: $ " + balance);
        } else {
            System.out.println("Insufficient funds.");
        }
    }

    public void checkBalance() {
        System.out.println("Balance is $ " + balance);
    }
}
// CheckingAccount Class
public class CheckingAccount extends BankAccount {
    private double monthlyFee;

    public void monthlyFee() {
        balance -= monthlyFee;
        System.out.println("Monthly fee of " + monthlyFee + " charged. Current balance is: $ " + balance);
    }
}
// Main CLass
public class Main {
    public static void main(String[] args) {
        BankAccount bankAccount = new BankAccount();
        bankAccount.deposit(1000);
        bankAccount.checkBalance();

        CheckingAccount checkingAccount = new CheckingAccount();
        checkingAccount.deposit(500);
        checkingAccount.monthlyFee();
        checkingAccount.checkBalance();
        checkingAccount.withdraw(250);
        checkingAccount.checkBalance();
    }
}
```
4. Crie uma classe NumerosPrimos com métodos como verificarPrimalidade() e listarPrimos(). Em seguida, crie duas subclasses, VerificadorPrimo e GeradorPrimo, que herdam da classe NumerosPrimos. Adicione um método específico para cada uma das subclasses, como verificarSeEhPrimo() para o VerificadorPrimo e gerarProximoPrimo() para o GeradorPrimo. 
```Java
// PrimeNumbers Class
public class PrimeNumbers {
    public boolean checkPrimality(int n) {
        if (n <= 1) {
            return false;
        }
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    public void listPrimes(int nLimit) {
        System.out.println("Prime numbers from 1 to " + (nLimit) +": ");
        for (int i = 2; i <= nLimit; i++) {
            if  (checkPrimality(i)) {
                System.out.println(i);
            }
        }
        System.out.println();
    }
}
//PrimeCheck Class
public class PrimeCheck extends PrimeNumbers {
    public void checkIfPrime(int n) {
        if (checkPrimality(n)) {
            System.out.println(n + " is a prime number");
        } else {
            System.out.println(n + " is not a prime number");
        }
    }
}
//PrimeGenerator Class
public class PrimeGenerator extends PrimeNumbers {
    public int generatePrime(int lastPrime) {
        int nextNumber = lastPrime + 1;
        while (!checkPrimality(nextNumber)) {
            nextNumber++;
        }
        return nextNumber;
    }
}
// Main Class
public class Main {
    public static void main(String[] args) {
        PrimeCheck check = new PrimeCheck();
        check.checkIfPrime(7);

        PrimeGenerator generator = new PrimeGenerator();
        int nextPrime = generator.generatePrime(24);
        System.out.println("The next prime is " + nextPrime);

        PrimeNumbers primeNumbers = new PrimeNumbers();
        primeNumbers.listPrimes(nextPrime);
    }
}
```
