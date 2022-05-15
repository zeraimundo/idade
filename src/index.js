const express = require('express');
const idade = require('./idade');

const app = express();

app.get('/idade', (req, res) => {
  const anoNascimento = Number(req.query.anoNascimento);
  const anoAtual = Number(req.query.anoAtual);

  const result = {
    anoNascimento,
    anoAtual,
    idade: idade(anoNascimento, anoAtual),
  };

  res.json(result);
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});