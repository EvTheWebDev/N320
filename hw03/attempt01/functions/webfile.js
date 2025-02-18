const path = require("path");

class WebFile {
    filename = "";

    static mimeTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
        ".jpg": "image/jpg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".json": "application/json",
        ".pdf": "application/pdf",
    }

    constructor(filename) {
        this.filename = filename;
    }

    #getExtension() {
        return path.extname(this.filename);
    }
    getMimeType() {
        const fileExtension = this.#getExtension();
    }
}