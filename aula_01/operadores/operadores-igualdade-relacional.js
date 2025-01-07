// Operadores de igualdade
// Igualdade (==) Compara dois valores, conversão de tipos é permitida. Se os valores forem iguais após a conversão, retorna true.
console.log(5 == '5'); // true (número é convertido para string)
console.log(true == 1); // true (booleano é convertido para número)

// Igualdade estrita (===) Compara dois valores sem conversão de tipos. Ambos o valor e o tipo devem ser iguais.
console.log(5 === '5'); // false (tipos diferentes)
console.log(5 === 5); // true (mesmo valor e mesmo tipo)

// Diferença (!=) Compara dois valores, conversão de tipos é permitida. Retorna true se os valores forem diferentes.
console.log(5 != '5'); // false (valores iguais após conversão)
console.log(5 != 6); // true (valores diferentes)

// Diferença estrita (!==) Compara dois valores sem conversão de tipos. Retorna true se os valores ou os tipos forem diferentes.
console.log(5 !== '5'); // true (tipos diferentes)
console.log(5 !== 5); // false (mesmo valor e mesmo tipo)

// Operadores relacionais Maior que (>) Retorna true se o operando da esquerda for maior que o da direita.
console.log(10 > 5); // true
console.log(5 > 10); // false

// Menor que (<) Retorna true se o operando da esquerda for menor que o da direita.
console.log(5 < 10); // true
console.log(10 < 5); // false

// Maior ou igual a (>=) Retorna true se o operando da esquerda for maior ou igual ao da direita.
console.log(10 >= 10); // true
console.log(5 >= 10); // false

// Menor ou igual a (<=) Retorna true se o operando da esquerda for menor ou igual ao da direita.
console.log(5 <= 5); // true
console.log(10 <= 5); // false

// Comparação de strings - Strings são comparadas com base na ordem lexicográfica (alfabética) e no valor Unicode de cada caractere.
console.log('apple' > 'banana'); // false (ordem alfabética)
console.log('apple' < 'banana'); // true

// Valores NaN (Not a Number) nunca é igual a nenhum valor, nem a si mesmo.
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// Valores null e undefined são iguais com ==, mas não com ===.
console.log(null == undefined); // true
console.log(null === undefined); // false

// Comparações com null ou undefined - Em comparações maiores/menores (<, >, <=, >=), null é convertido para 0 e undefined é tratado como NaN.
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(undefined > 0); // false
