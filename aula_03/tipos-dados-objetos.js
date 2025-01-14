// Em JavaScript, tipos primitivos e objetos são os dois principais tipos de valores.
// O valor de um primitivo não pode ser alterado. Exemplo:
// Imutáveis
let a = "Texto";
a[0] = "t"; // Não altera o texto original
console.log(a); // "Texto"

// Armazenamento por valor:
// São armazenados diretamente na memória como valores literais.
let x = 10;
let y = x;
y = 20;
console.log(x); // 10 (não foi afetado por `y`)

// Sem métodos ou propriedades próprios: 
// No entanto, JavaScript cria temporariamente um wrapper object quando métodos são chamados. 
let str = "hello";
console.log(str.toUpperCase()); // "HELLO"
