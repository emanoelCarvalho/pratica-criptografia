function removerAcento(letra) {
  if (letra.match(/[áàãâä]/)) return "aa";
  if (letra.match(/[éèêë]/)) return "ee";
  if (letra.match(/[íìîï]/)) return "ii";
  if (letra.match(/[óòõôö]/)) return "oo";
  if (letra.match(/[úùûü]/)) return "uu";
  if (letra.match(/[ç]/)) return "cc";
  return letra; 
}

function aplicarCifraCesar(palavra, deslocamento) {
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
}

function embaralharPalavra(palavra) {
  const letras = palavra.split("");
  for (let i = 0; i < letras.length; i++) {
      const j = Math.floor(Math.random() * letras.length);
      const temp = letras[i];
      letras[i] = letras[j];
      letras[j] = temp;
  }
  return letras.join("");
}

function criptografar(frase) {
  const palavras = frase.split(" ");
  const palavrasCriptografadas = palavras.map((palavra, indice) => {
      if (palavra.length % 2 === 0) { 
          return embaralharPalavra(palavra);
      } else { 
          const deslocamento = 5;
          return aplicarCifraCesar(palavra, deslocamento);
      }
  });
  return palavrasCriptografadas.join(" "); 
}

document.getElementById('formCriptografar').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const frase = document.getElementById('frase').value;
  const fraseCriptografada = criptografar(frase);
  document.getElementById('resultado').innerText = fraseCriptografada;
});