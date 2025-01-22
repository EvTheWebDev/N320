// Pre-Built Mods
const readline = require("readline");
const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Installed Mods

// Custom Mods
const calcTriArea = require("./functions");

app.question("Enter Triangle Height (default 1): ", function (userHeight) {
  app.question("Enter Triangle Base (default 1): ", function (userBase) {
    const height = userHeight || 1;
    const base = userBase || 1;
    const userAns = calcTriArea({ base, height });
    console.log(`The area of the triangle is: ${userAns}`);
    app.close();
  });
});
