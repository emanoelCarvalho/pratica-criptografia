const removerAcento = (letra) => {
    if (letra.match(/[áàãâä]/)) return "aa";
    if (letra.match(/[éèêë]/)) return "ee";
    if (letra.match(/[íìîï]/)) return "ii";
    if (letra.match(/[óòõôö]/)) return "oo";
    if (letra.match(/[úùûü]/)) return "uu";
    if (letra.match(/[ç]/)) return "cc";
    return letra; 
  };
  
  module.exports = { removerAcento };
  