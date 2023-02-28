const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is your project\'s description?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install and run your project?',
        default: 'npm install',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project? Please be descriptive.',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
            'MIT License',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Mozilla Public License 2.0',
            'GNU Lesser General Public License v3.0',
            'Eclipse Public License 2.0',
            'Creative Commons Zero v1.0 Universal',
            'The Unlicense',
        ],
        default: 'MIT License',
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Please name the contributors of your project:',
    },

    {
        type: 'input',
        name: 'test',
        message: 'What is the command to execute your test?',
        default: 'npm test',
    }
];

// function to write README file
function writeToFile(fileName, data) {
    //file path to the readme file
    const filePath = path.join(process.cwd(), fileName);
    //convert data into a markdown string 
    const markdown = generateMarkdown(data);
    // write the markdown string to the file
    fs.writeFileSync(filePath, markdown);
    console.log(`Successfully wrote ${fileName}`);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', data);
    }).catch((error) => {
        console.log(error);
    });
}

// function call to initialize program
init();
