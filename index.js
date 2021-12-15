const inquirer = require('inquirer');

const managerInfo = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the manager (required)?",
            validate: nameInput => {
                if (nameInput) {
                    managerInfo.push(nameInput);
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
            name: 'id',
            message: 'What is the employee ID number of the manager (required)?',
            validate: idInput => {
                if (idInput) {
                    managerInfo.push(idInput);
                    return true;
                }
                else{
                    console.log("Please enter the manager's employee ID number (required)");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the email address of the manager (required)?",
            validate: emailInput => {
                if (emailInput) {
                    managerInfo.push(emailInput);
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
           name: 'office',
           message: "What is the manager's office number (required)?",
           validate: officeInput => {
               if (officeInput) {
                managerInfo.push(officeInput);
                   console.log(managerInfo)
                   return true;
               }
               else {
                   console.log("Please enter the manager's office number (required)")
                   return false;
               }
           } 
        }
    ])