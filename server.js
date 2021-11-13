const Db = require('./db/index');
const consoleTable = require('console.table');
const inquire = require('inquirer');
const actions = require('./utils/index');

const questions = function() {
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
            },
            {
                name: 'Remove Department',
                value: 'removeDept'
            }]
        }
    ]) .then(({initialChoice}) => {
        if (initialChoice === 'viewDept') actions.viewDept(questions);
        else if (initialChoice === 'addDept') actions.addDept(questions);
        else if (initialChoice === 'removeDept') actions.removeDept(questions);
    })
}
questions();