const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');

function viewDept(questions) {
    console.log('Heyoo')
    Db.findAllDepartment().then(([data]) => {
        console.log(data)
        // console.log(sqlData)
    }).then(() => questions())
}

module.exports = viewDept;