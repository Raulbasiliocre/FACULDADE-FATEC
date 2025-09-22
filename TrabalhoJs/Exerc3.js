let nome = "raul";
let idade = 18;
let cidade = "Osasco";
let Estado = "SP";
let fraseConcatenada = "meu nome é " + nome + " e tenho " + idade + " anos"   + " moro em " + cidade + " no estado de " + Estado;

console.log(fraseConcatenada);  
let fraseinterpolada = ` meu nome é ${nome} e tenho ${idade} anos, moro em ${cidade} no estado de ${Estado} `;
console.log(fraseinterpolada);
