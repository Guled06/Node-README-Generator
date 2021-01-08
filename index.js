// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
 inquirer 
    .prompt([
    {
      type: 'input',
      name: 'Name',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What is the tabel of content of your project?',
      name: 'Table of Content',
    },
    {
        type: 'list',
        message: 'What is your installation?',
        name: 'Installation',
        choices: ['Unknown', 'Yes', 'No'],
      },
      {
        type: 'list',
        message: 'What is the tabel of content of your project?',
        name: 'License',
        choices: ['MIT', 'Unknown', 'Do not care'],
      },
  ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFileSync(fileName, data, (err) => {
        if (err) {
        } else {
            console.log("All Done!")
        }
    })
}
// TODO: Create a function to initialize app
function init() {

  fs.writeToFileSync('./output/README.md')
}



// Function call to initialize app

init();
