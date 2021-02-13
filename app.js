const express = require("express");
const fs = require("fs");
const http = require("http");
const https = require("https");

const app = express();
const router = express.Router();

const privateKey = fs.readFileSync("/ssl/privkey.pem");
const certificate = fs.readFileSync("/ssl/fullchain.pem");

const path = __dirname + "/views/";
const port = 8080;

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

router.get("/sharks", function (req, res) {
  res.sendFile(path + "sharks.html");
});

app.use(express.static(path));
app.use("/", router);

const httpServer = http.createServer(app);
const httpsServer = https.createServer(
  { key: privateKey, cert: certificate },
  app
);

httpServer.listen(8080, function () {
  console.info("Listening on 8080!");
});
httpsServer.listen(8443, function () {
  console.info("Listening on 8443!");
});
