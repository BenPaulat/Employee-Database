const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');

function updateEmployee(questions) {
    inquire.prompt([
        {
            type: 'list',
            name: 'selectedEmployee',
            message: 'Which employee would you like to update?',
            choices: [employeeList()]
        },
        {
            type: 'list',
            name: 'selectedRole',
            message: 'Which role should be assigned to this employee?',
            choices: [roleList()]
        }
    ]).then(answer =>{
        let employeeNames = answer.selectedEmployee.split(' ');
        let firstName = employeeNames[1];
        let lastName = employeeNames[2];
        Db.updateEmployee(answer.selectedRole, firstName, lastName);
    }).then(() => questions());
}

module.exports = updateEmployee;