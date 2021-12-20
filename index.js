const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const writeFile = require('./lib/Page.js');


const employeeInfo = [];


addManager();

function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the name of the manager (required)?",
                validate: managerName => {
                    if (managerName) {
                        return true;
                    }
                    else {
                        console.log('Please enter the name of the manager');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the employee ID number of the manager (required)?',
                validate: managerId => {
                    if (managerId) {
                        return true;
                    }
                    else {
                        console.log("Please enter the manager's employee ID number (required)");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the email address of the manager (required)?",
                validate: managerEmail => {
                    if (managerEmail) {
                        return true;
                    }
                    else {
                        console.log("Please enter the manager's email adress (required)")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "What is the manager's office number (required)?",
                validate: managerOffice => {
                    if (managerOffice) {
                        return true;
                    }
                    else {
                        console.log("Please enter the manager's office number (required)")
                        return false;
                    }
                }
            }
        ]).then((responses) => {
            console.log(responses.managerOffice)
            const manager = new Manager(responses.managerName, responses.managerId, responses.managerEmail, responses.managerOffice)
            employeeInfo.push(manager)
            addEmployee()
        })
}

function addEmployee() {
    inquirer 
        .prompt([
            {
              type: 'list',
              message: 'Would you like to add an engineer or an intern?',
              name: 'add',
              choices: ['Engineer', 'Intern', 'I am done']  
            }
        ])
        .then((answer) => {
            console.log(answer.add)
            
            if (answer.add === 'Engineer') {
                addEngineer();
            }
            else if (answer.add === 'Intern') {
                addIntern();
            }
            else {
                buildHTML();
            }
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is engineer's name (required)?",
                validate: engineerName => {
                    if(engineerName) {
                        return true;
                    }
                    else {
                        console.log("please enter the engineer's name");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the employee id of the manager (required)?',
                validate: engineerId => {
                    if(engineerId) {
                        return true;
                    }
                    else {
                        console.log("Please enter the employee id of the manager");
                        return false;
                    }
                }
             },
             {
                type: "input",
                name: 'engineerEmail',
                message: "What is the engineer's email address (required)?",
                validate: engineerEmail => {
                    if(engineerEmail) {
                        return true;
                    }
                    else {
                        console.log("Please enter the engineer's email address");
                        return false;
                    }
                }
             },
             {
                 type: 'input',
                 name: 'engineerGithub',
                 message: "What is the engineer's GitHub username (required)?",
                 validate: engineerGithub => {
                     if(engineerGithub) {
                         return true;
                     }
                     else {
                         console.log("Please enter the engineer's GitHub username");
                         return false;
                     }
                 }
             }
        ])
        .then((promptAnswer) => {
            console.log(promptAnswer.engineerGithub);
            const engineer = new Engineer(promptAnswer.engineerName, promptAnswer.engineerId, promptAnswer.engineerEmail, promptAnswer.engineerGithub);
            employeeInfo.push(engineer);
            console.log('Engineer added!');
            addEmployee();
        })
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name (required)?",
                validate: internName => {
                    if(internName) {
                        return true;
                    }
                    else {
                        console.log("Please enter the intern's name (required)");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's id number (required)?",
                validate: internId => {
                    if(internId) {
                        return true;
                    }
                    else {
                        console.log("What is the intern's id number (required)?");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email address(required)?",
                validate: internEmail => {
                    if(internEmail) {
                        return true;
                    }
                    else {
                        console.log("Please enter the intern's email addresss (required)");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What school does the intern attend (required)?",
                validate: internSchool => {
                    if(internSchool) {
                        return true;
                    }
                    else {
                        console.log("Please enter the school that intern attands (required)");
                        return false;
                    }
                }
            }
        ])
        .then((internAnswer) => {
            console.log(internAnswer.internSchool);
            const intern = new Intern(internAnswer.internName, internAnswer.internId, internAnswer.internEmail, internAnswer.internSchool);
            employeeInfo.push(intern);
            console.log('Intern added!');
            addEmployee();
        }) 
}

function buildHTML() {
        const pageContent = `
        <!DOCTYPE html>
        <html lang="en">
    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Employee organizer</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css"/>
        </head>

        <body class="hero is-fullheight">
            <header class="level column is-full has-background-danger has-text-black is-narrow">
                <h1 class="level-item has-text-centered title is-1 mx-auto">Employee Organizer</h1>
            </header>

            <main class="level mb-auto mx-auto mt-6">
                <h2 class=" level-item has-background-info mx-2" style="width: 250px; height: 125px;">Funny</h2>
                <h2 class=" level-item has-background-info mx-2" style="width: 250px; height: 125px;">Funny</h2>
            </main>
        </body>
        </html>
        `;

    writeFile(pageContent);
}