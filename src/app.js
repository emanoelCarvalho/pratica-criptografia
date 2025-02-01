const express = require("express");
const bodyParser = require("body-parser");
const criptografiaController = require("./controllers/criptografiaController");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

app.post("/api/criptografar", criptografiaController.criptografarFrase);

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
