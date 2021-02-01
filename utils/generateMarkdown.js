// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "BSD 3-Clause":
      return "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
    case "GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
    default:
      return "";
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "BSD 3-Clause":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "GPL v3":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "ISC":
      return "(https://opensource.org/licenses/ISC)";
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "Unlicense":
      return "(http://unlicense.org)";
    default:
      return "";
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "") {
    return `
## License  
This application is covered under the **${license}** license. More info can be found here: [${license}]${renderLicenseLink(license)}
`;
  }
  return "";
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
${data.license !== "" ? '* [License](#License)\n' : ""}* [Questions](#Questions)

## Installation
To install, run the following command:  
\`\`\`
${data.installCmd}
\`\`\`

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
To test, run the following command:  
\`\`\`
${data.testCmd}
\`\`\`
${renderLicenseSection(data.license)}
## Questions
Questions about the project? You can contact me at ${data.email} or check out my GitHub profile at ${"[" + data.username + "](https://github.com/" + data.username + ")"}
`;

}

module.exports = generateMarkdown;
