// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "BSD 3-Clause":
      return "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
    case "GPLv3":
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
    case "GPLv3":
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
    return `## License  
This application is covered under the **${license}** license. More info can be found here: [${license}]${renderLicenseLink(license)}`;
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
