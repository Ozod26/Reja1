const http = require("http");
const mongodb = require("mongodb");

// Bizga 2 ta veriable keral boladi

let db;
const connectionString =
  "mongodb+srv://ozodfarid46:WLkJa6Yqwh9ZCO5n@cluster0.uhznn.mongodb.net/Reja1";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("Mongodb conncetion succeed");
      // console.log(client);
      module.exports = client;

      const app = require("./app"); // app qabul qildik
      const server = http.createServer(app); // serverni boshlayapdi
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT} http://localhost:${PORT}`
        );
      });
    }
  }
);
