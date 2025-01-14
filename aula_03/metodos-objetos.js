//Objetos
//São coleções de propriedades dinâmicas que podem conter dados e comportamentos (métodos).
//Objetos literais: 
let obj1 = { nome: "Manu", idade: 33 };

// Arrays: 
let arr = [1, 2, 3];

// Funções: 
function soma(a, b) { return a + b; }

//Classes e instâncias: 
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
let pessoa = new Pessoa("Manu");

// Características:
//Mutáveis: Você pode alterar o estado de um objeto mesmo após sua criação. 
  let obj = { nome: "Manu" };
  obj.nome = "Ewertom";
  console.log(obj.nome); // "Carlos"

//Armazenamento por referência: Variáveis que apontam para o mesmo objeto compartilham a referência na memória. 
  let obj2 = { nome: "Ewerton" };
  let obj3 = obj1;
  obj2.nome = "Amor";
  console.log(obj1.nome); // "Amor" (obj2 e obj3 apontam para o mesmo objeto)

// Pode conter métodos: Objetos podem armazenar funções como métodos. 
  let obj4 = {
      falar: function () {
          console.log("Olá!");
      }
  };
  obj4.falar(); // "Olá!"
