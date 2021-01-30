// Include packages needed for this application
const fs = require("fs");
const gmd = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

// A function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    err ? console.log(err) : console.log("File written successfully.");
  });
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();