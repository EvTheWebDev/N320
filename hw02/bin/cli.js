#!/usr/bin/env node

console.log("Welcome to the Cool Guy Creator!");

const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What would you like to name your project? ", (projectName) => {
  const projectPath = path.join(process.cwd(), projectName);
  fs.mkdirSync(projectPath, { recursive: true });

  rl.question(
    "Would you like a cool guy folder in your project? (y/n) ",
    (answer) => {
      if (answer.toLowerCase() === "y") {

        // Make Cool Guy Folder
        const coolGuyPath = path.join(projectPath, "cool-guy");
        fs.mkdirSync(coolGuyPath, { recursive: true });
        console.log(`Created cool-guy folder in ${projectName}`);

        // Cool Guy File?
        rl.question(
          "Would you like a cool guy file in your project? (y/n) ",
          (answer) => {
            if (answer.toLowerCase() === "y") {
              // Make Cool Guy File
              const coolGuyFilePath = path.join(coolGuyPath, "cool-guy.md");
              fs.writeFileSync(coolGuyFilePath, "You are a cool guy!");
            } else {
              console.log(`Lame :(`);
            }
            rl.close();
          }
        );
      } else {
        console.log(`No cool-guy folder created in ${projectName}. Lame :(`);
        const lameFilePath = path.join(projectPath, "lame.txt");
        fs.writeFileSync(lameFilePath, "You are a lame-o!");
        rl.close();
      }
    }
  );
});
