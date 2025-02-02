document
  .getElementById("formCriptografar")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const frase = document.getElementById("frase").value;

    const response = await fetch("http://localhost:3000/criptografar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ frase }),
    });
  });

const data = response.json();
document.getElementById("resultado").innerText = data.frase;
