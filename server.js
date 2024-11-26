const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const server = http.createServer(app);

app.set("views", path.join(__dirname, "views")); //to say that oue template pages (html) are in a folder called views
app.set("view engine", "twig"); // templates will be of twig format
app.use(express.json()); // so that the project understands how to parse json
app.use(express.urlencoded({ extended: false })); // how to parse url

server.listen(3000, () => {
  console.log("server started on http://localhost:3000");
});
