// Exemplo de uso
let numeros = [10, 20, 30, 40, 50];
console.log(numeros.length); // Saída: 5

// Alteração manual da propriedade .length
let frutas = ["maçã", "banana", "uva", "manga"];
frutas.length = 2; // Reduzindo o array
console.log(frutas); // Saída: ["maçã", "banana"]

// Se aumentar o valor de .length, novas posições serão criadas, mais vazias:
let cores = ["vermelho", "azul"];
cores.length = 5;
console.log(cores); // Saída: ["vermelho", "azul", empty × 3]

/* Usos comuns:
Iterar sobre arrays:*/
let nomes = ["Ana", "Carlos", "Mariana"];
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// Verificar se um array está vazio
if (nomes.length === 0) {
    console.log("O array está vazio!");
}

