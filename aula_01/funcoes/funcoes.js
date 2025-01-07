// Declaração de função
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
// Funções anônimas - Funções sem nome, atribuídas a variáveis.
const soma = function(a, b) {
    return a + b;
};

// Arrow functions - Sintaxe curta para funções anônimas.
const multiplicar = (a, b) => a * b;

// Função como parâmetro (callback) - Funções podem ser passadas como argumentos para outras funções.
function executar(fn, valor) {
    return fn(valor);
}
executar(console.log, "Olá!");

// Funções IIFE (Immediately Invoked Function Expression) Executadas imediatamente após definidas.
(function() {
    console.log("Executada!");
})();

// Parâmetros padrão - Valores padrão para parâmetros.
function dividir(a, b = 1) {
    return a / b;
}

// Funções de alta ordem - Funções que retornam ou recebem outras funções.
function criarSaudacao(saudacao) {
    return function(nome) {
        return `${saudacao}, ${nome}!`;
    };
}
const ola = criarSaudacao("Olá");

// Funções assíncronas- Utilizam async e await para lidar com operações assíncronas.
async function fetchDados() {
    const resposta = await fetch('https://api.exemplo.com');
    return await resposta.json();
}
