const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');

function addRole(questions) {
    inquire.prompt([{
        type: 'input',
        name: 'title',
        message: "What is the new role called?"
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for the new role?'
    },
    {
        type: 'list',
        name: 'department',
        message: 'What department does this role fall under?'
    }
]).then(answer => {
        Db.addRole(answer);  
    }).then(() => questions());
};

module.exports = addRole;