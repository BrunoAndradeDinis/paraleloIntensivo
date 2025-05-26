const http = require("http");

const port = 8008;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>home page</h1>");
  }

  if (req.url === "/users") {
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
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
