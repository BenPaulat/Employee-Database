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
        Db.updateEmployee(answer.selectedRole, answer.selectedEmployee)
    }).then(() => questions());
}

function employeeList() {
    return this.connection.promise().query(
        'SELECT CONCAT (id, " ", first_name, " ", last_name) AS employee_name FROM employees;'
    )
}

function roleList() {
    return this.connection.promise().query(
        'SELECT title FROM role;'
    )
}

module.exports = updateEmployee;