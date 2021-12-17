const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
//const Intern = require('./Intern.js');
const Engineer = require('./lib/Engineer.js');


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
    console.log('Intern added!');

    addEmployee();
}

function buildHTML() {
    console.log('Your page is complete!')
}