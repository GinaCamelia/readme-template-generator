// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is covered under the ${data.license}.

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.test}

  ## Questions
  If you have any questions, please feel free to ask me at ${data.email}. You can also visit my [GitHub Profile](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
