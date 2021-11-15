const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');

function addEmployee(questions) {
    inquire.prompt({
        type: 'input',
        name: 'name',
        message: "What is the employee's name?"
    }).then(answer => {
        Db.addEmployee(answer);  
    }).then(() => questions());
};

module.exports = addEmployee;