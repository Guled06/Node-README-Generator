// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
console.log(license);
  const mozilla = license.Mozilla;
  const ibm = license.IBM;
  const apache = license.Apache;
  const mit = license.MIT;
  const perl = license.Perl;
  const isc = license.ISC;

  if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`
  } else if (license === "IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]`
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (license === "Perl") {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`
  } else if (license === "ISC") {
    return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`
  } else if (license === "No License") {
    return "No License"
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

 const mozilla = license.Mozilla;
  const ibm = license.IBM;
  const apache = license.Apache;
  const mit = license.MIT;
  const perl = license.Perl;
  const isc = license.ISC;

  if (license === "Mozilla") {
    return `(https://opensource.org/licenses/MPL-2.0)`
  } else if (license === "IBM") {
    return `(https://opensource.org/licenses/IPL-1.0)`
  } else if (license === "Apache") {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "MIT") {
    return `(https://opensource.org/licenses/MIT)`
  } else if (license === "Perl") {
    return `(https://opensource.org/licenses/Artistic-2.0)`
  } else if (license === "ISC") {
    return `(https://opensource.org/licenses/ISC)`
  } else if (license === "No License") {
    return "No License"
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  # Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)

  ## Description:

    ${data.description}
  
  ## Installation:

    ${data.installation}

  ## Usage:

    ${data.usage}

  ## Contributon:

    ${data.contribution}

  ## Test:

    ${data.test}
  
  ## Credits:

    ${data.credits}

  ## License:

    ${renderLicenseBadge(data.license[0])}
    ${renderLicenseLink(data.license[0])}
  
  ## Questions:

      For questions about this Readme Generator, you can go to my Github page at the following link:

        Github: https://github.com/${data.username}

      For additional questions, please reach me at my email:

        Email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
