
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

   ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
   

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

    For more information about the license, please click on the link below:

  - [License](https://opensource.org/licenses/${data.license})
  
  ## Questions:

      For questions about this Readme Generator, you can go to my Github page at the following link:

  - [GitHub Profile](https://github.com/${data.username})

  - [A Walkthrough Video Demonstration Link](https://drive.google.com/file/d/1wJjUR6D7djWYVI9G57lHYJlWe3p4byvO/view)

  For additional questions, please reach me at my email at: ${data.email}
  
`;
}

module.exports = generateMarkdown;

// ${renderLicenseBadge(data.license)}
//     ${renderLicenseLink(data.license)}