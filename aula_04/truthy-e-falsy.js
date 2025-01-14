// Exemplos de valores falsy
// Valores que são considerados falsos em um contexto booleano.
console.log(Boolean(false));    // false
console.log(Boolean(0));        // false
console.log(Boolean(-0));       // false
console.log(Boolean(0n));       // false (BigInt zero)
console.log(Boolean(""));       // false (string vazia)
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false

// Exemplos de valores truthy
// Todos os outros valores são considerados verdadeiros.
console.log(Boolean(true));         // true
console.log(Boolean(18));           // true (número positivo)
console.log(Boolean(-18));          // true (número negativo)
console.log(Boolean("Hello"));      // true (string não vazia)
console.log(Boolean([]));           // true (array vazio)
console.log(Boolean({}));           // true (objeto vazio)
console.log(Boolean(Infinity));     // true
console.log(Boolean(-Infinity));    // true
console.log(Boolean(() => {}));     // true (função)

// Qualquer valor diretamente com a função Boolean() para verificar se é truthy ou falsy.