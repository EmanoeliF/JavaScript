// Exemplo básico
console.log(10 % 3); // Saída: 1 (pois 10 dividido por 3 dá 3 e sobra 1)
console.log(15 % 4); // Saída: 3 (pois 15 dividido por 4 dá 3 e sobra 3)
console.log(8 % 2);  // Saída: 0 (pois 8 é divisível por 2)

// Casos de uso:
// 1- Verificar se um número é par ou ímpar
function ehPar(numero) {
    return numero % 2 === 0;
}

console.log(ehPar(10)); // true
console.log(ehPar(7));  // false

// Criar padrões em loops

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(i + " é múltiplo de 3");
    }
}

// Controlar ciclos de repetição
let cores = ["vermelho", "azul", "verde"];
for (let i = 0; i < 10; i++) {
    console.log(cores[i % cores.length]); // Alterna entre as cores
}
