import javax.swing.JOptionPane;

public class Loteria{
public static void main (String [] args){

   
    String aux;

    double premio = Double.parseDouble(JOptionPane.showInputDialog("Digite o valor do premio!!") );

    double apostamigo1 = Double.parseDouble( JOptionPane.showInputDialog("Quanto o amigo 1 apostou") );

    double apostamigo2 = Double.parseDouble(JOptionPane.showInputDialog("Quanto o amigo 2 apostou") );

    double apostamigo3 = Double.parseDouble(JOptionPane.showInputDialog("Quanto o amigo 3 apostou") );

    double apostatotal = apostamigo1 + apostamigo2 + apostamigo3 ;
    
    double premio1 = apostamigo1 / apostatotal * premio;
    double premio2 = apostamigo2 / apostatotal * premio;
    double premio3 = apostamigo3 / apostatotal * premio;
//saida
aux = " O amigo 1 leva : " + String.format("%.2f", premio1) +
      " \n O amigo 2 leva : " + String.format("%.2f", premio2) +
      " \n O amigo 3 leva : " + String.format("%.2f", premio3) ;
      JOptionPane.showMessageDialog(null,  aux);
}

}
