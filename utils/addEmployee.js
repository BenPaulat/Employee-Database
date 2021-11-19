const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');
const employeeList = require('./updateEmployee.js');

function addEmployee(questions) {
    inquire.prompt([{
        type: 'input',
        name: 'first_name',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What is the employee's last name?"
    },
    {
        type: 'input',
        name: 'role',
        message: "What is the employee's role?"
    },
    {
        type: 'list',
        name: 'manager',
        message: "Who is the employee's manager?",
        choices: [employeeList()]
    }
]).then(answer => {
        let managerId = answer.manager.split(' ');
        Db.addEmployee(answer.first_name, answer.last_name, answer.role, managerId[0])
        console.log(managerId[0]);  
    }).then(() => questions());
};

module.exports = addEmployee;