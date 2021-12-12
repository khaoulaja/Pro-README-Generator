// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
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
        message: 'Provide instructions for use. (Required)',
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
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing? (Required)',
        validate: (contributingInput) =>{
            if(contributingInput){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests command:(Skip if no tests are available)',
        default: 'No tests are available at the moment.'
        
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license your project have?',
        choices: ['MIT License', 'Apache License', 'BSD License', 'GPL License', 'Mozilla Public License', 'The Unlicense'],
        default: 'MIT License'
         
    }
];

const promptInfo = () =>{
    return inquirer.prompt(questions);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) =>{
        fs.writeFile(fileName, data, err =>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "file created"
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
promptInfo()
.then((markdownInfo)=> {
 return generateMarkdown(markdownInfo);
})
.then(markdown => {
    return writeToFile('./dist/readme.md',markdown)});