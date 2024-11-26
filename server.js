const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const server = http.createServer(app);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

server.listen(3000, () => {
  console.log("server started on http://localhost:3000");
});
