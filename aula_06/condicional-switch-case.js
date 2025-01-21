/*Estrutura condicional switch case 
É uma ferramenta para lidar com múltiplas condições, evitando o uso excessivo de estruturas condicionais aninhadas.*/

const day = 3; // Número do dia (1 = Domingo, 2 = Segunda, ...)

switch (day) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido"); // Executa se nenhum case corresponder
};

/* Se você omitir o break, o programa continuará executando os case subsequentes, o que é chamado de "fall-through". Isso pode ser útil em alguns cenários específicos.

Exemplo com fall-through:*/

const grade = "C";

switch (grade) {
  case "A":
  case "B":
    console.log("Bom desempenho!");
    break;
  case "C":
    console.log("Pode melhorar.");
    break;
  default:
    console.log("Nota inválida.");
};
