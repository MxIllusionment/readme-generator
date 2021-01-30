// Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// An array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
  },
  {
    type: "input",
    message: "What is your e-mail address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title"
  },
  {
    type: "list",
    message: "What license would you like to use?",
    name: "license",
    choices: ["BSD 3-Clause", "GPL v3", "ISC", "MIT", "Unlicense", "None"],
    filter: answer => {
      if (answer === "None") {
        return "";
      }
      return answer;
    }
  },
  {
    type: "input",
    message: "Enter a brief description of your project: ",
    name: "description"
  },
  {
    type: "input",
    message: "What command should be run to install?",
    name: "installCmd",
    default: "npm install"
  },
  {
    type: "input",
    message: "What command should be run for testing?",
    name: "testCmd",
    default: "npm test"
  },
  {
    type: "input",
    message: "Are there any special usage instructions?",
    name: "usage"
  },
  {
    type: "input",
    message: "Are there any special instructions for contributing?",
    name: "contributing"
  }
];

// A function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    err ? console.log(err) : console.log("File written successfully.");
  });
}

// A function to initialize app
function init() {
  var dir = './output';

  // Create output directory if it doesn't already exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  inquirer.prompt(questions).then(answers => {
    writeToFile(dir + "/README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();