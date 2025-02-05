const fs = require("fs");
const path = require("path");

fs.writeFileSync(
  "garbageDigimon.json",
  JSON.stringify([
    { rank: 1, name: "Ev" },
    { rank: 2, name: "Oscar" },
  ])
);

const fsData = fs.readFileSync("garbageDigimon.json");

console.log(JSON.parse(fsData.toString()));

const dataPath = path.resolve("data");

if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath);
}

fs.writeFileSync(path.join(dataPath, "user.json"), "{}");

fs.writeFileSync(path.join(dataPath, ".gitignore"), "# Ignore files/directories in this folder");

fs.appendFileSync(path.join(dataPath, ".gitignore"),
`

node_modules`
)