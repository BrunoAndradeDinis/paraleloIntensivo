const fs = require("fs");
const path = require("path");

// Criar uma pasta
// fs.mkdir(path.join(__dirname, "test"), (error) => {
//   if (error) {
//     return console.log("Erro: ", error);
//   }
//   console.log("Pasta criada com sucesso");
// });

// Criar um arquivo
function criaUmArquivo() {
  fs.writeFile(
    path.join(__dirname, "test", "test.txt"),
    "Hello node.js!",
    (error) => {
      if (error) {
        return console.log(`Erro: ${error}`);
      }
      console.log("Arquivo criado com sucesso!");
    }
  );
}

// Adicionar à um arquivo
function adicionaAAumarquivo() {
  fs.appendFile(
    path.join(__dirname, "/test", "test.txt"),
    "Hello world!",
    (error) => {
      if (error) {
        return console.log(`Erro: ${error}`);
      }

      console.log("Arquivo alterado com sucesso!");
    }
  );
}

// Ler um arquivo
function lerArquivo() {
  fs.readFile(
    path.join(__dirname, "/test", "test.txt"),
    "utf-8",
    (error, data) => {
      if (error) {
        return console.log("Erro: ", error);
      }

      console.log(`Dados que constam no arquivo: ${data}`);
    }
  );
}

function rodaTudo() {
  criaUmArquivo()
  setTimeout(()=>{
    adicionaAAumarquivo()
    setTimeout(()=> lerArquivo(), 1000)
  }, 2000)
}

rodaTudo()