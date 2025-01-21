let count = 0;

while (count < 5) {
  console.log(`Count é: ${count}`);
  count++; // Incrementa a variável count.
};

// Exemplo com entrada do usuário:
let password = "";

while (password !== "1234") {
  password = prompt("Digite a senha correta:"); // Solicita entrada do usuário
};

console.log("Senha correta! Acesso permitido.");

