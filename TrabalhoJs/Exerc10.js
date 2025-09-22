let numero1 = prompt("Digite o primeiro numero");   
numero1 = Number(numero1);
let numero2 = prompt("Digite o segundo numero")
numero2 =Number(numero2);
let operador = prompt ("digite o operadr + , - , * , /");
let resultado;
if (operador ===" +"){
    resultado = numero1 + numero2 ;
    alert(`o resultado da soma é ${resultado}`);

}
else if (operador ===" -"){
    resultado = numero1 - numero2 ;
   alert(`o resultado da subtração é ${resultado}`);
}
else if (operador ===" *"){
    resultado = numero1 * numero2 ; 
    alert(`o resultado da multiplicação é ${resultado}`);
}
 else if (operador === "/") {
    // tratamento extra: evitar divisão por zero
    if (numero2 === 0) {
        alert("Erro: divisão por zero não é permitida!");
    } else {
        resultado = numero1 / numero2;
    }
} else {
    alert("Operação inválida!");
}

// 3. Mostra o resultado (se existir)
if (resultado !== undefined) {
    alert("O resultado é: " + resultado);
}