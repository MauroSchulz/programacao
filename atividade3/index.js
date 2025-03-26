const express = require('express');
const app = express();
const port = 3000;

// Importando as funções da calculadora
const { somar, subtrair, multiplicar, dividir } = require('./calculadora');

// Rota para somar
app.get('/somar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.send(`Resultado: ${somar(a, b)}`);
});

// Rota para subtrair
app.get('/subtrair/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.send(`Resultado: ${subtrair(a, b)}`);
});

// Rota para multiplicar
app.get('/multiplicar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.send(`Resultado: ${multiplicar(a, b)}`);
});

// Rota para dividir
app.get('/dividir/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.send(`Resultado: ${dividir(a, b)}`);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
