Resolução de desafios propostos no curso de "Java: consumindo API, gravando arquivos e lidando com erros", da trilha de especialização em Back-End do programa ONE, praticando o uso de try/catch para lidar com exceções e criando exceções personalizadas.

1. Crie um programa simples que solicita dois números ao usuário e realiza a divisão do primeiro pelo segundo. Utilize o bloco try/catch para tratar a exceção que pode ocorrer caso o usuário informe 0 como divisor.
```Java
// MainDivision Class
import java.util.Scanner;

public class MainDivision {
    public static void main (String []args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the first number: ");
        int firstNumber = scanner.nextInt();
        System.out.println("Enter the second number: ");
        int  secondNumber = scanner.nextInt();

        try {
            int result = firstNumber / secondNumber;
            System.out.println("The result of " + firstNumber + " divided by " + secondNumber + " is: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero not allowed");
        }

    }
}
```
2. Crie um programa que lê uma senha do usuário. Utilize o bloco try/catch para capturar a exceção SenhaInvalidaException, uma classe de exceção personalizada que deve ser lançada caso a senha não atenda a critérios específicos (por exemplo, ter pelo menos 8 caracteres).
```Java
// InvalidPasswordException Class
public class InvalidPasswordException extends RuntimeException {
    public InvalidPasswordException(String message) {
        super(message);
    }
}
// MainPasswordException
import java.util.Scanner;

public class MainPasswordException {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your password: ");
        String password = scanner.nextLine();

        try {
            verifyPassword(password);
            System.out.println("Password verified successfully. Acces granted");
        } catch (InvalidPasswordException e) {
            System.out.println("Error: "+ e.getMessage());
        }
    }

    private static void verifyPassword(String password) {
        if (password.length() < 8) {
            throw new InvalidPasswordException("Password must have at least 8 characters");
        }
    }
}
```
3. Desenvolva um programa em Java que permite aos usuários consultar informações sobre um usuário do GitHub (utilize a API pública do GitHub para obter os dados). Crie uma classe de exceção personalizada, ErroConsultaGitHubException, que estende RuntimeException. Lance essa exceção quando o nome de usuário não for encontrado. No bloco catch, trate de forma específica essa exceção, exibindo uma mensagem amigável.
```Java
// GitHubErrorException Class
public class GitHubErrorException extends RuntimeException {
    public GitHubErrorException(String message) {
        super(message);
    }
}
// MainGitHub
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Scanner;

public class MainGitHub {
    public static void main(String[] args) {
        Scanner scanner  = new Scanner(System.in);

        System.out.println("Enter the GitHub username to find details:");
        String username = scanner.nextLine();

        String address = "https://api.github.com/users/" + username;

        try {
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(address))
                    .header("Accept", "application/vnd.github.v3+json")
                    .build();

            HttpResponse<String> response = client
                    .send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() == 400) {
                throw new GitHubErrorException("User not found");
            }

            String json = response.body();
            System.out.println(json);

        } catch (IOException | InterruptedException e) {
            System.out.println("There was an error connecting to the GitHub");
            e.printStackTrace();
        } catch (GitHubErrorException e) {
            System.out.println(e.getMessage());
        }
    }
}
```
