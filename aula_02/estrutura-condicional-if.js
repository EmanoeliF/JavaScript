let idade = 16;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Usando else if para várias condições:
let nota = 85;

if (nota >= 90) {
    console.log("Você tirou um A.");
} else if (nota >= 80) {
    console.log("Você tirou um B.");
} else if (nota >= 70) {
    console.log("Você tirou um C.");
} else {
    console.log("Você não passou.");
}

// Operador ternário (forma curta de if):
let idade01 = 20;
let mensagem = (idade01 >= 18) ? "Maior de idade" : "Menor de idade";
console.log(mensagem);
