import java.util.Scanner;
public class index{
    public static void main(String[] args) {
        java.util.Scanner leito = new Scanner(System.in);
        System.out.print("Digite quantos graus está: ");
        double C = leito.nextDouble();
        double F = (C * 9/5) + 32;
        System.out.println("A temperatura em Fahrenheit é: " + F);

    
    }
}