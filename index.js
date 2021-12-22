const fs = require('fs');
const inquirer = require('inquirer');
const readmeBuilder = require('./readmeBuilder.js');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'project_title',
    },
    {
      type: 'input',
      message: 'Please provide a description of your project:',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'installInstructions',
    },
    {
        type: 'input',
        message: 'Please provide usage information if applicable:',
        name: 'usage',
    },
    {
      type: 'input',
      message: 'Please provide contributor information:',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'Please provide testing information:',
      name: 'testing',
    },
    {
        type: 'input',
        message: 'Please enter your Github username:',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'usage',
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
  ])
  .then((response) => {
    
    fs.writeFile('readme.md', readmeBuilder(response), (err) =>
        err ? console.error(err) : console.log('Success, your file has been created!')
    )
  });