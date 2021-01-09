// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
 function promptUser() {

  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: "title"
    },
    {
      type: 'input',
      message: 'Please enter a description of your project:',
      name: 'description'
    },
    {
      type: 'input',
      message: 'What are the installation instructions for this project? Write NONE if no instruction',
      name: 'installation'
    },
    {
      type: 'input',
      message: 'How would you like your application to be used?',
      name: 'usage'
    },
    {
      type: 'input',
      message: 'Who contributed on this project?',
      name: 'contribution'
    },
    {
      type: 'input',
      message: 'What are the Test Instructions?',
      name: 'test'
    },
    {
      type: 'checkbox',
      message: 'Please select a license:',
      choices: ['Mozilla', 'IBM', 'Apache', 'MIT', 'Perl', 'ISC', 'No License'],
      name: 'license'
    },
    {
      type: 'input',
      message: 'Whose credit is this work?',
      name: 'credits'
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'username'
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email'
    },
  ]);

 }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, (err) => {
        if (err) {
        } else {
            console.log("All Done!");
        }
    })
}
// TODO: Create a function to initialize app
  function init() {

    promptUser().then((data) => {
      console.log(data);
      writeToFile(`./output/README.md`, generateMarkdown(data));
    });
  }

// Function call to initialize app

init();
