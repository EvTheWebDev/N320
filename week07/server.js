const http = require("http");
const fs = require("fs");
const path = require("path");

const Webfile = require("./functions/webfile");

function app(req, res) {
  const reqWebfile = new Webfile(req.url);
  console.log(reqWebfile.getMimeType());
  const homePageURLs = ["/", "/index.html"];
  res.writeHead(200, { "Content-Type": "text/html" });

  if (homePageURLs.includes(req.url)) {
    res.write(fs.readFileSync(path.join(__dirname, "views/index.html")));
  } else if (req.url === "/css/styles.css") {
    res.write(fs.readFileSync(path.join(__dirname, "views/css/styles.css")));
  } else {
    res.write("<h1>404 Not Found</h1>");
  }
  res.end();
}

const server = http.createServer(app);
const port = process.allowedNodeEnvironmentFlags.PORT || 3000;
server.listen(port);
console.log(`Server running at http://localhost:${port}/`);
