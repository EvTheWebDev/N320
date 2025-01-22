const readline = require("readline");
const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion() {
    app.question("Would you like to continue? (y/n): ", function (userAns) {
        if (userAns === "y") {
            console.log("Continuing...");
            setTimeout(askQuestion, 2000);
        } else {
            console.log("Exiting...");
            app.close();
        }
    });
}

askQuestion();