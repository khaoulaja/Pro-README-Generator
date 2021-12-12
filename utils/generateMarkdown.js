// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function LicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'Apache License':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'BSD License':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'GPL License':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Mozilla Public License':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      return ' ';
      break;
  }
}

// function that returns the license link
// If there is no license, return an empty string
function LicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT'
      break;
    case 'Apache License':
      return 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'BSD License':
      return 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'GPL License':
      return 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Mozilla Public License':
      return 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'The Unlicense':
      return 'http://unlicense.org/';
      break;
    default:
      return ' ';
      break;
  }
}

//generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${LicenseBadge(data.license)}

  ## Description 

  ${data.description}
  
  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 

  ${data.usage}

  ## Tests

  ${data.tests}

  ## Contributing

  ${data.contributing}

  ## Questions
  
  Please contact me at [${data.email}](mailto:${data.email}) if you have questions about this project. <br/>
  To view more of my work, visit [my GitHub profile](https://github.com/${data.username}).

  ## License

  This work is licensed under [${data.license}](${LicenseLink(data.license)}).<br/>
  &copy; 2021 [${data.title}](https://github.com/${data.username}/${data.title})

`;
}

module.exports = generateMarkdown;
