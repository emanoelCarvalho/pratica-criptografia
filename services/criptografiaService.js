const { removerAcento } = require("../utils/acentoUtils");

const aplicarCifraCesar = (palavra, deslocamento) => {
  const letras = palavra.split("");

  const letrasCriptografadas = letras.map((letra) => {
    const codigoLetra = letra.charCodeAt(0);

    if (codigoLetra >= 65 && codigoLetra <= 90) {
      return String.fromCharCode(((codigoLetra - 65 + deslocamento) % 26) + 65);
    } else if (codigoLetra >= 97 && codigoLetra <= 122) {
      return String.fromCharCode(((codigoLetra - 97 + deslocamento) % 26) + 97);
    } else {
      return removerAcento(letra);
    }
  });

  return letrasCriptografadas.join("");
};

const embaralharPalavra = (palavra) => {
  const letras = palavra.split("");
  for (let i = 0; i < letras.length; i++) {
    const j = Math.floor(Math.random() * letras.length);
    const temp = letras[i];
    letras[i] = letras[j];
    letras[j] = temp;
  }
  return letras.join("");
};

const criptografar = (frase) => {
  const palavras = frase.split(" ");
  const palavrasCriptografadas = palavras.map((palavra) => {
    if (palavra.length % 2 === 0) {
      return embaralharPalavra(palavra);
    } else {
      const deslocamento = 5;
      return aplicarCifraCesar(palavra, deslocamento);
    }
  });
  return palavrasCriptografadas.join(" ");
};

module.exports = { criptografar };
