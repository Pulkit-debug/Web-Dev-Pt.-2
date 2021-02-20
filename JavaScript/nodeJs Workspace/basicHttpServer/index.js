// requring https to serve
const http = require("http");
const port = 8000;

const fs = require("fs");

function requestHandler(req, res) {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });

  if (req.url == "/home") {
    fs.readFile("./index.html", function (err, data) {
      if (err) {
        return;
      }
      res.end(data);
    });
  } else if (req.url == "/about") {
    res.end("<h1>This is about page</h1>");
  }
  //   res.end("<h1>Working</h1>");
}
const server = http.createServer(requestHandler);

server.listen(port, function (err) {
  if (err) {
    console.log(err);

    return;
  }

  console.log("Server is up and running on port: " + port);
});
