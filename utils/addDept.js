const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');

function addDept() {
    console.log('Heyoo')
    Db.findAllDepartment().then(([data]) => {
        console.log(data)
        // console.log(sqlData)
    });
}

module.exports = addDept;