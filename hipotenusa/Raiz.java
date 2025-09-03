import java.util.Scanner;
public class Raiz{
    public static void main(String[] args){
System.out.println("Escreva o valor de A");
    Scanner leitor=new Scanner(System.in);
double a= leitor.nextDouble();
System.out.println("Escreva o valor de B");
double b= leitor.nextDouble();
double resultado = Math.sqrt(a*a + b*b);
 System.out.println("O valor da raiz é: " + String.format("%.2f", resultado));
    }
}