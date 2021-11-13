const Db = require('./db/index');
const consoleTable = require('console.table');
const inquire = require('inquirer');

function questions() {
    inquire.prompt([
        {
            type: 'list',
            name: 'initialChoice',
            choices: [{
                name: 'view all departments',
                value: 'viewDept'
            },
            {
                name: 'view all roles',
                value: 'viewRoles'
            },
            {
                name: 'view all employees',
                value: 'viewEmployees'
            },
            {
                name: 'add a department',
                value: 'addDept'
            },
            {
                name: 'add a role',
                value: 'addRole'
            },
            {
                name: 'add an employee',
                value: 'addEmployee'
            },
            {
                name: 'update an employee role',
                value: 'updateEmployee'
            }]
        }
    ]) .then(answers => {
        console.log(answers);
    })
}
questions();