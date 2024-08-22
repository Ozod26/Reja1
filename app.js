console.log("Wep serverni  boshlash");
const express = require("express"); // express bu function & veriable
const app = express(); // expressning app objectini yuboradi.
const fs = require("fs");

// MongoDB chaqirish
// vareiable yasab olamiz
const db = require("./server").db();
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: Kirish

app.use(express.static("public"));
app.use(express.json()); //json farmatdagi datani objectga ogirib beradi
app.use(express.urlencoded({ extended: true })); // hrml, formdan post qilgan narsani qabul qd //  true nest objectni ochib beradi.

// 2: Session code

// 3: Views code
// backendda html yasab clientga jo'natamiz
app.set("views", "views"); //frontetimizni views folderdan topish
app.set("view engine", "ejs"); // ejs orqali frontetni yasaymiz

// ********************************* //

// 4: Routing code
// Jonatadi
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

// qabul qiladi
app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app; // app jonatdik.
