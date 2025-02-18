// import { calcCircleArea } from "./math.js";
import * as math from "./math.js";
import clearConsole from "./other.js";

//Importing functions
console.log("Hello World");
clearConsole();
console.log("R=2", math.calcCircleArea(2));
console.log("More accurate pi:", math.moreAccuratePi);


//Spread operator
const person = {name: "Ev", age: 20, job: "RA"};
const ev = {...person, job: "Developer"};
console.log("Ev:", ev);


//Rest operator
const { age, ...restOfEv } = ev;
console.log("Rest of Ev:", restOfEv)