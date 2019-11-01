const express = require("express");

const server = express();

const actionRouter = require("./data/router/actionRouter.js");
const projectRouter = require("./data/router/projectRouter.js");
server.use(express.json());
server.use(logger);

server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);
server.get("/", (req, res) => {
  res.status(200).send(`<h2>It's Working! It's Working!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(req.method, req.url, Date.now());
  next();
}

module.exports = server;
