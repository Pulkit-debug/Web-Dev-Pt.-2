const http = require("http");
const port = 1000;
const fs = require("fs");

var requestHandler = (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile("./index.html", function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    res.write(data);
  });
  fs.readFile("./styles.css", function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    res.write(data);
    res.end();
  });
};

const server = http.createServer(requestHandler);

server.listen(port, function () {
  console.log("Server is rup and running on port: " + port);
});
