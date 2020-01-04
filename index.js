const readline = require("readline");
const promisify = require("util").promisify;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getUsername = () =>
  rl.question("What is the username? ", handleUsernameCode);
const getPassword = () =>
  rl.question("What is the password? ", handlePasswordCode);
const getResetCode = () => rl.question("", handleResetCode);
//username: 5384
//password: 3579

const handleResetCode = answer => {
  if (answer === "pitpit4life") {
    getUsername();
  } else {
    getResetCode();
  }
};

const handleUsernameCode = answer => {
  if (answer === "5384") {
    console.log('username is correct');
    getPassword();
  } else {
    console.log("Incorrect code. Please try again.");
    getUsername();
  }
};

const handlePasswordCode = answer => {
  if (answer === "3579") {
    console.log(`Success!!!`);
    console.log(`CODE IS: 1173`);
    getResetCode();
  } else {
    console.log("Incorrect code. Please try again.");
    getPassword();
  }
};

process.on("beforeExit", () => {
  rl.close();
});

getUsername();
