// Função para somar
const somar = (a, b) => a + b;

// Função para subtrair
const subtrair = (a, b) => a - b;

// Função para multiplicar
const multiplicar = (a, b) => a * b;

// Função para dividir
const dividir = (a, b) => {
  if (b === 0) {
    return 'Erro: Divisão por zero';
  }
  return a / b;
};

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir
};
