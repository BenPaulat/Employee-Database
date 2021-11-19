const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');

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
        message: "Who is the employee's manager?"
         
    }
]).then(answer => {
        Db.addEmployee(answer.first_name, answer.last_name, answer.role, answer.manager);  
    }).then(() => questions());
};

module.exports = addEmployee;