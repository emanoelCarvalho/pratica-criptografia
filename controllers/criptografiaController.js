const criptografiaService = require("../services/criptografiaService");

const criptografarFrase = async (req, res) => {
  const { frase } = req.body;
  try {
    const fraseCriptografada = criptografiaService.criptografar(frase);
    res.status(200).json({ fraseCriptografada });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criptografar a frase" });
  }
};

module.exports = {
  criptografarFrase,
};
