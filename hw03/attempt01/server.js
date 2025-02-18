const http = require("http");
const fs = require("fs");
const path = require("path");

const WebFile = require("./functions/webfile")

/**
 * @param {http.ClientRequest} req
 *  @param {http.ServerResponse} res
 */

function app(req, res) {
    const fileReq = new WebFile(req.url);
    const filePath = path.join(___dirname, filename);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h2>My Name is Jeremy</h2>");
  res.write(`<p>File Requested: ${filepath}</p>`);
  res.write(`<p>${fileReq.getMimeType()}</p>`);
  res.end();
}

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port);