let idade = prompt("Qual sua idade ?");
idade = Number(idade);
if (idade >= 18) {
    alert("voce pode tirar carteira de motorista ");

} else {
    let faltaanos = 18-idade;
    alert(`voce nao pode tirar carteira de motorista falta ${faltaanos} anos`);
}