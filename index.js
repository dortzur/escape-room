const readline = require("readline");
const promisify = require("util").promisify;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getCode = () => rl.question("What is the code? ", handleCode);
const getResetCode = () => rl.question("", handleResetCode);

const handleResetCode = answer => {
  if (answer === "pitpit4life") {
    getCode();
  } else {
    getResetCode();
  }
};
const handleCode = answer => {
  if (answer === "1304") {
    console.log(`Code is correct. Secret is 5050`);
    getResetCode();
  } else {
    console.log("Incorrect code. Please try again.");
    getCode();
  }
};
process.on("beforeExit", () => {
  rl.close();
});

getCode();
