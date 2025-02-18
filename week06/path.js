const path = require('path');

console.log("Frog Path:", path.resolve("frog"))

const functionsFolder = path.resolve("functions");

console.log(path.join(functionsFolder, "index.js"));

console.log(path.join(functionsFolder, "functions"));

console.log(path.basename(functionsFolder));