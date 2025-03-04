const path = require("path");

class Webfile {
  static mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
  };

reqDetails = {};
reqUrl = {};
reqResource = "";

  constructor(reqUrl) {
    this.reqUrl = reqUrl;

    this.reqDetails = path.parse(reqUrl);

    const reqResourcePath = path.join(__dirname, "../views", reqUrl);
    if(this.reqDetails.ext) {
      this.reqResource = reqResourcePath;
    } else {
      
    }
    // console.log(path.join(__dirname, "../views", reqUrl));
  }

  getMimeType() {
    const reqExt = this.reqDetails.ext;
    return Webfile.mimeTypes[reqExt] || "text/html";
  }
}

module.exports = Webfile;
