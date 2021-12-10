// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (Required)',
        validate: (gitInput) => {
            if (gitInput) {
                return true;
            } else {
                console.log("Please enter your github username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title? (Required)",
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter your project's title!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project. (Required)',
        validate: (descInput) => {
            if (descInput) {
                return true;
            } else {
                console.log("Please enter a description of your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project. (Required)',
        validate: (installationInput) => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter the steps required to install your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (Required)',
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions for use!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What license your project have?',
        choices: ['MIT License', 'Apache License', 'BSD License', 'GPL License', 'Mozilla Public License', 'Unlicensed'],
        default: 'Unlicensed'
         
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please write tests for your application.(Require)',
        validate: (testsInput) =>{
            if (testsInput) {
                return true;
            } else {
                console.log('Please write tests for your application');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
