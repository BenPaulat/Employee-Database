const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');

function viewRoles(questions) {
    Db.findAllDepartment().then(([data]) => {
        console.log(data)
    }).then(() => questions())
}

module.exports = viewRoles;