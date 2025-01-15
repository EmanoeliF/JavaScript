// Retornando um Array
function gerarArrayDeNumeros(inicio, fim) {
    const numeros = [];
    for (let i = inicio; i <= fim; i++) {
        numeros.push(i);
    }
    return numeros;
}

const resultadoArray = gerarArrayDeNumeros(1, 5);
console.log(resultadoArray); // [1, 2, 3, 4, 5]

// Retornando um Objeto
function criarUsuario(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        ativo: true,
    };
}

const usuario = criarUsuario("Manu", 33);
console.log(usuario); 
// { nome: "Manu", idade: 33, ativo: true }

//Função que Retorna Ambos: Array e Objeto
function gerarDados(nome, quantidade) {
    const arrayDeNumeros = Array.from({ length: quantidade }, (_, i) => i + 1);
    const objetoUsuario = {
        nome: nome,
        numeros: arrayDeNumeros,
    };
    return objetoUsuario;
}

const dados = gerarDados("Ewerton", 9);
console.log(dados);
// {
//   nome: "Ewerton",
//   numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// }

// Usando Funções com Retornos Complexos
// Array de Objeto
function gerarListaDeUsuarios(nomes) {
    return nomes.map((nome, index) => ({
        id: index + 1,
        nome: nome,
    }));
}

const listaDeUsuarios = gerarListaDeUsuarios(["Mimi", "Simba", "Pixano"]);
console.log(listaDeUsuarios);
// [
//   { id: 1, nome: "Mimi" },
//   { id: 2, nome: "Simba" },
//   { id: 3, nome: "Pixano" }
// ]

// Objeto com Array
function categorizarNumeros(numeros) {
    return {
        pares: numeros.filter(num => num % 2 === 0),
        impares: numeros.filter(num => num % 2 !== 0),
    };
}

const numerosCategoria = categorizarNumeros([1, 2, 3, 4, 5, 6]);
console.log(numerosCategoria);
// { pares: [2, 4, 6], impares: [1, 3, 5] }
