const express = require("express");
const { use } = require("react");

const app = express();

const users = [
  {
    name: "jhon doe",
    email: "jhondoe@email.com",
  },
  {
    name: "jane doe",
    email: "janedoe@email.com",
  },
  {
    name: "Brinu Andrade",
    email: "brinu@email.com",
  },
];

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello world! <br> Com o Express</h1>");
});

app.get('/users', (req, res) =>{
  res.status(200).send(JSON.stringify(users))
})

const port = 8008;

app.listen(port, () => console.log("Rodando com o Express na porta ", port));
