/* Arrays - Método "push()" e Loop "for"
Método push() */

let numeros = [1, 2, 3];
numeros.push(4, 5, 6); 

console.log(numeros); // Saída: [1, 2, 3, 4, 5, 6]

/* Loop for com push() 
Preenchendo um array com números */

let xnumeros = [];

for (let i = 1; i <= 5; i++) {
    xnumeros.push(i); 
}

console.log(xnumeros); // Saída: [1, 2, 3, 4, 5]

// Exemplo: Criando um array com valores ao quadrado
let quadrados = [];

for (let i = 1; i <= 5; i++) {
    quadrados.push(i * i); 
}

console.log(quadrados); // Saída: [1, 4, 9, 16, 25]

// Usando for...of para percorrer um array 

let frutas = ["maçã", "banana", "uva"];

for (let fruta of frutas) {
    console.log(fruta);
}
// Saída:
// maçã
// banana
// uva
