const path = require("path");
const fs = require("fs");
const readline = require("readline");

const app = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
});

app.question("Name of project:", function (projectName) {
  const baseDirectory =
    process.env.TEST === "1" ? path.resolve("output") : process.cwd();
  const projectDirectory = path.join(baseDirectory, projectName);
  const functionsDirectory = path.join(projectDirectory, "functions");
  const readmeFile = path.join(projectDirectory, "readme.md");

  if (!fs.existsSync(projectDirectory)) {
    fs.mkdirSync(projectDirectory);
  }

  includeFunctionsFolder(function (makeFunctionsFolder) {
    if (makeFunctionsFolder) {
      fs.mkdirSync(functionsDirectory);

      const webfileLibRef = path.join(___dirname, "lib/webfile.js");
      fs.writeFileSync(
        path.join(functionsDirectory, "webfile.js"),
        fs.readFileSync(webfileLibRef)
      );

      const serverLibRef = path.join(___dirname, "lib/server.js");
      fs.writeFileSync(
        path.join(functionsDirectory, "server.js"),
        fs.readFileSync(serverLibRef)
      );
    }
  });

  if (!fs.existsSync(functionsDirectory)) {
    fs.mkdirSync(functionsDirectory);
  }

  fs.writeFileSync(readmeFile, "## Project Name");

  app.close();
});