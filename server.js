console.log("Wep serverni  boshlash");
const { log } = require("console");
const express = require("express");
const app = express(); // expressning app objectini yuboradi.
const http = require("http");

// 1: Kirish

app.use(express.static("public"));
app.use(express.json()); //json farmatdagi datani objectga ogirib beradi
app.use(express.urlencoded({ extended: true })); // hrml, formdan post qilgan narsani qabul qd //  true nest objectni ochib beradi.

// 2: Session code

// 3: Views code
app.set("views", "views"); //frontetimizni views folderdan topish
app.set("view engine", "ejs"); // ejs orqali frontetni yasaymiz

// ********************************* //

// 4: Routing code
app.get("/hello", function (req, res) {
  res.end("<h1>HELLO WORLD</h1>");
});
app.get("/gift", function (req, res) {
  res.end("<h1>Siz sovg'alar bo'limidasiz</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});

// app.post("/create-item", (req, res) => {
//   console.log("user entered /create-item");
//   const new_reja = req.body.reja;
//   db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
//   res.json(data.ops[0]);
// });
// });

// app.post("/delete-item", (req, res) => {
// const id = req.body.id;
// db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)},
//   function(err, data) {
//   res.json({state: "success" });
// }
// );
// });

// app.post("/edit-item", (req, res) => {
// const data = req.body;
// console.log(data);
// db.collection("plans").findOneAndUpdate(
//   {_id: new mongodb.ObjectId(data.id) },
//   { $set: { reja: data.new_input } },
//   function(err, data) {
//     res.json({ state: "success" });
//   }
// );
// });

// app.post("/delete-all", (req, res) => {
// if (req.body.delete_all) {
//   db.collection("plans").deleteMany(function () {
//     res.json({ state: "hamma rejalar o'chirildi" });
//   });
// }
// });

// // callback
// // array ichidagi object
// app.get("/", function (req, res) {
//   console.log('user entered /create-item');
//   db.collection("plans").find().toArray((err, data) => {
//     if(err) {
//       console.log(err);
//       res.end("somthing went wrong");
//     } else {
//       res.render("reja", { items: data });
//     }
//   });
// });

// module.exports = app;
