// AND (&&) Retorna true se ambas as condições forem verdadeiras, caso contrário, retorna false.
let a = 10;
let b = 20;
console.log(a > 5 && b < 30); // true
console.log(a > 15 && b < 30); // false

// OR (||) Retorna true se uma ou ambas as condições forem verdadeiras, retorna false somente se ambas forem falsas.
let c = 15;
let d = 22;
console.log(c > 5 || d > 30); // true
console.log(c < 5 || d > 30); // false

// NOT (!) Inverte o valor lógico de uma expressão. Se for true, torna-se false e vice-versa.
let e = true;
console.log(!e); // false
console.log(!false); // true

// Operadores lógicos e valores não booleanos.
console.log("A" && "B"); // "B" (retorna o último valor se ambos forem verdadeiros)
console.log("A" || "B"); // "A" (retorna o primeiro valor verdadeiro encontrado)
console.log(!"A"); // false (uma string não vazia é considerada verdadeira)
