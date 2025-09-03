import java.util.Scanner;
public class Polegadas {
    public static void main (String[]args){
    Scanner leitor = new Scanner(System.in);
    System.out.println("Digite o valor em centimetros:");
    double centimetros = leitor.nextDouble();
    double polegadas = centimetros / 2.54;
    System.out.println(centimetros +" centimetros equivalem a "+ polegadas +" polegadas");
    }
}