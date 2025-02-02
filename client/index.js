document
  .getElementById("formCriptografar")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const frase = document.getElementById("frase").value;

    fetch("/api/criptografar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ frase }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("resultado").innerText =
          data.fraseCriptografada;
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  });
