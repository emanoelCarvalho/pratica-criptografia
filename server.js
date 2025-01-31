const express = require('express');
const bodyParser = require('body-parser');
const criptografiaController = require('./controllers/criptografiaController');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());
app.use(express.static('public'));  // Serve arquivos estáticos da pasta "public"

// Rota para criptografar a frase
app.post('/api/criptografar', criptografiaController.criptografarFrase);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
