// Variável global
let globalVar = "Eu sou global";
function acessarGlobal() {
    console.log(globalVar); // Acessa a variável global
}

acessarGlobal(); // Saída: Eu sou global
console.log(globalVar); // Saída: Eu sou global

// Escopo de Função
function escopoFuncao() {
    let variavelLocal = "Eu sou local";
    console.log(variavelLocal); // Saída: Eu sou local
}
escopoFuncao();
// console.log(variavelLocal); // Erro: variavelLocal não está definida.

//Escopo de Bloco
if (true) {
    let variavelBloco = "Estou no bloco";
    console.log(variavelBloco); // Saída: Estou no bloco
}

/*console.log(variavelBloco); // Erro: variavelBloco não está definida
Nota: Variáveis declaradas com var não têm escopo de bloco (apenas global ou de função).*/

// Diferença entre var, let e const no Escopo.
    var globalVar1= "Eu ignoro o bloco";
    let blocoLet = "Eu respeito o bloco";
    const blocoConst = "Eu também respeito o bloco";

console.log(globalVar); // Saída: Eu ignoro o bloco
// console.log(blocoLet); // Erro: blocoLet não está definida
// console.log(blocoConst); // Erro: blocoConst não está definida.

// Funções Aninhadas e Escopo
function pai() {
    let variavelPai = "Eu sou do pai";

    function filho() {
        console.log(variavelPai); // Saída: Eu sou do pai
    }

    filho();
}

pai();
