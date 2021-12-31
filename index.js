const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const writeFile = require('./lib/Page.js');

const employeeInfo = [];

const worker = [

]

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
                message: 'What is the ID number of the manager (required)?',
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
            const manager = new Manager(responses.managerName, responses.managerId, responses.managerEmail, responses.managerOffice)
            employeeInfo.push(manager);

            const managerCard = `
            <div class="has-background-info">
                <h2 class="mt-1 has-text-centered is-underlined has-text-black" style="font-size: 23px;">Manager</h2>
                <div class="pl-3">
                    <p class="has-text-black" style="width: 250px;">Name: ${responses.managerName}<br> ID: ${responses.managerId}<br> Email: <a class="has-text-black" href="mailto:${responses.managerEmail}">${responses.managerEmail}</a><br> Office Number: ${responses.managerOffice}</p>
                </div>
            </div>     
            `
            worker.push(managerCard);
            addEmployee();
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
                buildHTML(worker);
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
                message: 'What is the employee id of the Engineer (required)?',
                validate: engineerId => {
                    if(engineerId) {
                        return true;
                    }
                    else {
                        console.log("Please enter the employee id of the engineer");
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
            const engineerCard = `
            <div class="has-background-info">
                <h2 class="mt-1 has-text-centered is-underlined has-text-black" style="font-size: 23px;">Engineer</h2>
                <div class="pl-3">
                    <p class="has-text-black" style="width: 250px;">Name: ${promptAnswer.engineerName}<br> ID: ${promptAnswer.engineerId}<br> Email: <a class="has-text-black" href="mailto:${promptAnswer.engineerEmail}">${promptAnswer.engineerEmail}</a><br> GitHub: <a target="_none" class="has-text-black" href="https://github.com/${promptAnswer.engineerGithub}">${promptAnswer.engineerGithub}</p>
                </div>
            </div>
            `
            worker.push(engineerCard);
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
            const internCard = `
            <div class="has-background-info" style="padding-top: .5px;">
                <h2 class="mt-1 has-text-centered is-underlined has-text-black" style="font-size: 23px;">Intern</h2>
                <div class="pl-3">
                    <p class="has-text-black" style="width: 250px;">Name: ${internAnswer.internName}<br> ID: ${internAnswer.internId}<br> Email: <a class="has-text-black" href="mailto:${internAnswer.internEmail}">${internAnswer.internEmail}</a><br> School: ${internAnswer.internSchool}
                </div>
            </div>
            `
            worker.push(internCard)
            addEmployee();
        }) 
}

function buildHTML(workerType) {
        let pageContent = `
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
                ${workerType}
            </main>
        </body>
        </html>
        `;
    writeFile(pageContent);
}