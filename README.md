
---

# Criptografia de Frase

Este é um aplicativo web desenvolvido como parte de uma atividade na disciplina **Segurança de Sistemas**. O projeto utiliza **Express** para criar uma API de criptografia e descriptografia de frases. O frontend é um HTML simples que consome essa API para realizar as operações.

## Funcionalidades

- **Criptografia de Frase**: O usuário pode inserir uma frase e criptografá-la utilizando um algoritmo que combina **Cifra de César** e **embaralhamento** de palavras.
- **Descriptografia**: A funcionalidade de descriptografia pode ser implementada em uma versão futura, caso desejado.

## Como Executar

1. **Instalar o Node.js**: Certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar digitando o seguinte comando no terminal:

   ```bash
   node --version
   ```

2. **Instalar dependências do projeto**: Após clonar o repositório, navegue até o diretório do projeto no terminal e execute o seguinte comando para instalar as dependências:

   ```bash
   npm install
   ```

3. **Rodar o servidor Express**: No diretório do projeto, execute o seguinte comando para iniciar o servidor Express:

   ```bash
   npm start
   ```

   Isso iniciará o servidor na porta `3000` (ou outra configurada no código).

4. **Acessar o aplicativo**: Abra um navegador da web e acesse `http://localhost:3000` para utilizar o aplicativo de criptografia.

## Estrutura do Projeto

- **`/src`**: Contém o código do backend (API) utilizando Express.
  - **`/controllers`**: Lógica para gerenciar as requisições HTTP.
  - **`/services`**: Contém a lógica de criptografia e embaralhamento.
  - **`/utils`**: Funções auxiliares, como a remoção de acentos.
  - **`app.js`**: Arquivo principal que configura o servidor Express.

- **`/client`**: Contém o frontend, um simples formulário HTML e o código JavaScript para fazer requisições para a API.
  - **`index.html`**: Interface do usuário para inserir a frase e exibir o resultado.
  - **`index.js`**: Arquivo JavaScript para enviar a frase à API e exibir a resposta criptografada.

## Dependências

- **Express**: Framework para construir a API.
- **Body-Parser**: Middleware para parsing de dados JSON nas requisições.

## Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## Contribuidores

- **Emanoel Carvalho** - [LinkedIn](https://www.linkedin.com/in/emanoelcarvalho/)
- **Gabriel Vinícius** - [LinkedIn](https://www.linkedin.com/in/gabx-vinicius/)
- **Ítalo Carvalho** - [LinkedIn](https://www.linkedin.com/in/italo-carvalho-96556193/)
- **Gean de Lima** - [LinkedIn](https://www.linkedin.com/in/gean-de-lima-7909a2251/)
- **Cleiton Lucas** - [GitHub](https://github.com/CleitonLucas)

## Agradecimentos

Agradecemos à disciplina de **Segurança de Sistemas** pela oportunidade de trabalhar neste projeto prático. A colaboração de todos os membros da equipe foi essencial para o desenvolvimento e sucesso desta aplicação.

---